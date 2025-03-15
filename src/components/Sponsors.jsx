import React from 'react';
import { motion } from 'framer-motion';
import "./Sponsors.css";
import sponsorpack from "../assets/Sponsorship Package 2025.pdf";

const Sponsors = () => {
    return (
        <sponsors>
            <motion.div className="sponsors-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Our Current Sponsors</h1>
            </motion.div>
            <motion.div className="content-list" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <li>We are proud to collaborate with organizations that share our mission of empowering the next generation of
                    STEM leaders.</li>
                <li>Through their generous support, our sponsors enable us to provide impactful programs, host meaningful events,
                    and create valuable opportunities for our members.</li>
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