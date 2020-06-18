import React from 'react';
import Search from './Search.js';
import Result from './Result.js';
import Toggle from './Toggle.js';
import {owmApiKey} from '../apiKeys.js';

class CityMate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: null,
            state: null,
            temp: null,
            feelsLike: null,
            humidity: null,
            windSpeed: null,
            description: null,
            icon: null,
            unitType: 'metric',
            shouldRender: false,
            error: false
        };

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUnitTypeToggle = this.handleUnitTypeToggle.bind(this);
    }

    formatDescription(d){
        return d.charAt(0).toUpperCase() + d.slice(1);
    }

    handleCityChange(event){
        this.setState({
            city : event.target.value
        });
    }

    handleStateChange(event){
        this.setState({
            state : event.target.value
        });
    }

    handleUnitTypeToggle(event){
        const unitType = this.state.unitType;
        if(unitType === 'metric'){
            this.setState({
                unitType: 'imperial'
            });
        } else {
            this.setState({
                unitType: 'metric'
            })
        }
    }


    async handleSubmit(event){
        event.preventDefault();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.state}&appid=${owmApiKey}`; 
        const response = await fetch(url);
        
        if(response.ok){
            const data = await response.json();
            const temp = Math.round(data.main.temp);
            const feelsLike = Math.round(data.main['feels_like']);
            const humidity = data.main.humidity + '%';
            const windSpeed = Math.round(data.wind.speed);
            const description = this.formatDescription(data.weather[0].description);
            const icon = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            this.setState({
                temp,
                feelsLike,
                humidity,
                windSpeed,
                description,
                icon,
                error: false,
                shouldRender: true
            });
        } else {
            this.setState({
                error: true,
                shouldRender: true
            });
        }
    }

    render(){
        return (
            <div>
                <h1>CityMate</h1>
                <Search city={this.state.city} state={this.state.state} onCityChange={this.handleCityChange} onStateChange={this.handleStateChange} onSubmit={this.handleSubmit}/>
                <Result shouldRender={this.state.shouldRender} error={this.state.error} temp={this.state.temp} feelsLike={this.state.feelsLike} humidity={this.state.humidity} 
                 windSpeed={this.state.windSpeed} description={this.state.description} icon={this.state.icon} unitType={this.state.unitType}/>
                <Toggle unitType={this.state.unitType} onToggle={this.handleUnitTypeToggle}/>
            </div>
        );
    }
}

export default CityMate;