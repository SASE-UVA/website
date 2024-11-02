import React from 'react';
import "./About.css";

const About = () => {
    return (
        <about>
            <div className="Title">
                <h1>About SASE @ UVA</h1>
            </div>
            <ul className="content-list">
                <li>The Society of Asian Scientists and Engineers (SASE) was founded in November 2007 to help Asian heritage scientific and engineering professionals achieve their full potential.</li>
                <li>After going dormant for the past couple of years at UVA, it has been revamped and brought back in the 2024-25 academic year!</li>
            </ul>
        </about>
    );
};

export default About;
