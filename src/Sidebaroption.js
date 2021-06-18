import React from 'react';
import './Sidebaroption.css';

function Sidebaroption({Icon,name}) {
    return (
        <div className="sidebaroption">
            <Icon/>
            <h2>{name}</h2>
        </div>
    );
}

export default Sidebaroption;