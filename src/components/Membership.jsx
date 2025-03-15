import React from 'react';
import { motion } from 'framer-motion';
import "./Membership.css";

const Membership = () => {
    return (
        <membership>
            <motion.div className="title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Become a Member!</h1>
                <p>Join UVA SASE and become a part of a vibrant community of STEM students dedicated to personal growth, professional
                    success, and making a positive impact. Membership is open to all students, regardless of background. Start your 
                    journey with us today!
                </p>
            </motion.div>
            <div className="join">
            <button className="join-button" onClick={() => window.open("http://eepurl.com/iWI9yA", "_blank", "noopener,noreferrer")}>Become a member today!</button>
                <p>Stay connected by signing up for our newsletter and following us on Instagram.</p>
                <p>For any questions about our membership or ways to get involved, email us at uva@saseconnect.org.</p>
            </div>
            
        </membership>
    )
}

export default Membership