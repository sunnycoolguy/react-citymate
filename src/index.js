import React from 'react';
import ReactDOM from 'react-dom';
import CityMate from './components/CityMate.js'
import './stylesheets/index.css';

class App extends React.Component{
    render(){
        return <CityMate/>;
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));