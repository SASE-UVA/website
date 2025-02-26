import React from 'react';
import { motion } from 'framer-motion';
import "./Events.css";
import SlideshowImages from './SlideshowImages';

const Events = () => {

    return (
        <events>
            <motion.div className="title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <div className="title">
                    <h1>Upcoming Events</h1>
                    <p>See what SASE at UVA is up to!</p>
                </div>
            </motion.div>
            <div className="calendar">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=uvasaseevents%40gmail.com&ctz=America%2FNew_York&showTitle=0"
                    style={{ border: 0, width: '100%', height: '600px' }}
                    title="Google Calendar">
                </iframe>
            </div>

            <div className="previous">
                <h1>Previous Events</h1>
                <div className="photos">
                    <SlideshowImages />
                </div>
            </div>

            <div className="newsletter">
                <h1>Join our Newsletter</h1>
                <p>Keep up to date with SASE by filling out the form linked below!</p>
                <button className="join-button" onClick={() => window.open("http://eepurl.com/iWI9yA", "_blank", "noopener,noreferrer")}>
                    Click Here!
                </button>
                {/* Embedded form into website */}
                {/* <iframe
                src="http://eepurl.com/iWI9yA"
                width="100%"
                height="800px"
                style={{ border: "none" }}
                ></iframe> */}
            </div>
        </events>
    );
};

export default Events;
