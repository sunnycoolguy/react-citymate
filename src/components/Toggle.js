import React from 'react';


const Toggle = (props) => {
    if(props.unitType === 'metric'){
        return <p onClick={props.onToggle}><strong>°C</strong> | °F</p>;
    } else {
        return <p onClick={props.onToggle}>°C | <strong>°F</strong></p>;
    }
}

export default Toggle;