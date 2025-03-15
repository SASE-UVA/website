import React from 'react';
import { motion } from 'framer-motion';
import "./Alumni.css";

const Alumni = () => {
    return (
        <alumni>
            <motion.div className="title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Alumni</h1>
                <p>Our alumni are a testament to the impact of SASE. They continue to excel in their careers and give back 
                    to the community, serving as mentors, speakers, and advocates for our mission. Stay connected with UVA
                    SASE and help inspire the next generation.</p>
            </motion.div>

            <div className="twentyfour-twentyfive">
                <h1>2024 - 2025</h1>
                <h2>To be updated with our upcoming graduates!</h2>
            </div>
        </alumni>
    )
}

export default Alumni;