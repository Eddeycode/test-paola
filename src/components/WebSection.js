import React from 'react';
import './WebSection.css';
import Cards from './Cards.js'
import Profile from './Profile';

function WebSection() {
    return (
        <div className="web-container">
            <Profile/>
            <Cards/>
        </div>
    )
}

export default WebSection
