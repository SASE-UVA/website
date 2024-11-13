import React from 'react';
import "./Events.css";

const Events = () => {
    return (
        <events>
            <div className="Title">
                <h1>Events</h1>
            </div>
            <div className="calendar">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=uvasaseevents%40gmail.com&ctz=America%2FNew_York"
                    style={{ border: 0, width: '100%', height: '600px' }}
                    title="Google Calendar">
                </iframe>
            </div>
        </events>
    );
};

export default Events;
