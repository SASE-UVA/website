import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import "./Home.css";

const Home = () => {
    return (
        <home>
            <motion.div className="title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Welcome to <br/> the Society of Asian <br/> Scientists and Engineers 
                    at <br/> the University of Virginia</h1>
                <div className="animation-container">
                <TypeAnimation
                    sequence={[
                        'Welcome to the home website for SASE@UVA, feel free to browse around for events, leadership, and general info (further updates to this website are coming)!',
                        1000,
                    ]}
                    speed={80}
                    repeat={Infinity}
                />
            </div>
            </motion.div>
            


        </home>
    );
};

export default Home;
