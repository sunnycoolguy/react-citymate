import React from 'react';
import '../stylesheets/Result.css';


const formatStats = (temp, windSpeed, feelsLike, unitType) => {
    let fTemp;
    let fWindSpeed;
    let fFeelsLike;
    if(unitType === 'metric'){
        fTemp = Math.round((temp - 273.15)) + '°C';
        fWindSpeed = Math.round((windSpeed * 3.6)) + ' km/h';
        fFeelsLike = Math.round((feelsLike - 273.15)) + '°C';
    } else if (unitType === 'imperial'){
        fTemp = Math.round((temp * (9/5) - 459.67)) + '°F';
        fWindSpeed = Math.round((windSpeed * 2.237)) + ' mph';
        fFeelsLike = Math.round((feelsLike * (9/5) - 459.67)) + '°F';
    }
    return [fTemp, fWindSpeed, fFeelsLike];
};

const Result = (props) => {
    if(props.shouldRender){
        if(props.error){
            return <p>An error occured. Please ensure that you typed in a valid city and state.</p>
        }
        else {
            const stats = formatStats(props.temp, props.windSpeed, props.feelsLike, props.unitType);
            const temperature = stats[0];
            const windSpeed = stats[1];
            const feelsLike = stats[2];
            const humidity = props.humidity;
            const icon = props.icon;
            const description = props.description;

            return (
                <div className='result'>
                    <div className='temp'>{`${temperature}`}</div>
                    <div>
                        <div className='stats'>
                            <div>{`Feels like: ${feelsLike}`}</div>
                            <div>{`Humidity: ${humidity}`}</div>
                            <div>{`Wind speed: ${windSpeed}`}</div>
                        </div>
                        <img src={icon} alt='an icon that represents the weather'/>
                        <div>{description}</div>
                    </div>
                </div>
            );
        }
    }
    return null;
};

export default Result;