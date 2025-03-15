import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import "./Home.css";
import sase1 from "../assets/boston.jpg";
import sase2 from "../assets/conference.jpg";
import sase3 from "../assets/conference2.jpg";

const Home = () => {
    return (
        <home>
            <motion.div className="home-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Welcome to the Society of Asian Scientists and Engineers at the University of Virginia</h1>
                <div className="animation-container">
                <TypeAnimation
                    sequence={[
                        'Welcome to the home website for SASE@UVA (further updates to this website are coming)!',
                        1000,
                    ]}
                    speed={80}
                    repeat={Infinity}
                />
            </div>
            
            </motion.div>
            
            <motion.img src={sase1} className="boston" alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}/>
            <motion.img src={sase2} className="conference" alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}/>
            <motion.img src={sase3} className="conference2" alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}/>

            <motion.div className="info" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                <h1>HOO ARE WE?</h1>
                <div className="animation-container2">
                <TypeAnimation
                    sequence={[
                        'SASE@UVA empowers Asian-heritage STEM students by fostering professional development, leadership, and community engagement. We host networking events, skill-building workshops, and social gatherings to help members grow and succeed. Join us to connect, lead, and make an impact!',
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
