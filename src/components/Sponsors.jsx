import React from 'react';
import { motion } from 'framer-motion';
import "./Sponsors.css";
import sponsorpack from "../assets/Sponsorship Package 2025.pdf";

import logo1 from "../assets/Sponsors/Dominion Energy.png";
import logo2 from "../assets/Sponsors/Blue Origin.jpg"

const Sponsors = () => {
    const sponsorLogos = [logo1, logo2];

    return (
        <sponsors>
            <motion.div
                className="sponsors-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1>Our Current Sponsors</h1>
            </motion.div>

            <motion.div
                className="sponsor-grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {sponsorLogos.map((logo, index) => (
                    <div key={index} className="sponsor-logo">
                        <img src={logo} alt={`Sponsor ${index + 1}`} />
                    </div>
                ))}
            </motion.div>
            
             <motion.div className="content-list" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <li>We sincerely thank our generous sponsors for supporting SASE and empowering the next generation of STEM leaders. Their commitment helps us provide meaningful programs, host impactful events, and create valuable opportunities for our members. We are proud to collaborate with organizations that share our mission of inspiring and cultivating future innovators.</li>
            </motion.div>
            
            <div className="interested-container">
                <div className="interested-text">
                    <h1>Interested in becoming a sponsor?</h1>
                    <p>If you're interested in partnering with us or have any questions, please refer to our corporate sponsor package
                        and contact us at uva@saseconnect.org.</p>
                    <p>SASE is a non-profit 501(c)(3) organization, and all contributions are tax-deductible. Your support makes a lasting
                        difference in shaping the future of STEM.</p>
                </div>
                <div className="interested-pdf">
                    <iframe src={sponsorpack} title="Sponsorship Package" frameBorder="0"></iframe>
                </div>
            </div>
        </sponsors>
    )
}

export default Sponsors;
