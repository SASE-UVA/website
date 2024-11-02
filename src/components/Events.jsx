import React from 'react';
import "./Events.css";

const Events = () => {
    return (
        <events>
            <h1>Upcoming Events</h1>
            {/* Add events content here */}
            <ul className="list">
                <li>11/2 - CSA X UPC Full Moon Fest</li>
                <li>11/4 - UVA Medical Entrepreneur Speaker Series</li>
                <li>11/7 - Rush Hour Movie w/ NSBE</li>
                <li>11/16 - Grateful Giving</li>
                <li>11/21 - Last GBM + Potluck</li>
            </ul>
        </events>
    );
};

export default Events;
