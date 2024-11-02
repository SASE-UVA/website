import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./Home.css";

const Home = () => {
    return (
        <home>
            <div className="title">
                <h1>Welcome to SASE @ UVA</h1>
            </div>
            <div className="animation-container">
                <TypeAnimation
                    sequence={[
                        'Welcome to the home website for SASE@UVA, feel free to browse around for events, leadership, and general info (further updates to this website are coming)!',
                        1000,
                    ]}
                    speed={40}
                    repeat={Infinity}
                />
            </div>
        </home>
    );
};

export default Home;
