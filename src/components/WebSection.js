import React from 'react';
import './WebSection.css';
import Cards from './Cards.js'

function WebSection() {
    return (
        <div className="web-container">
            <img className="image" src="https://randomuser.me/api/portraits/men/70.jpg" alt="new"></img>
            <Cards/>
        </div>
    )
}

export default WebSection
