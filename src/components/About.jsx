import React from 'react';
import { motion } from 'framer-motion';
import "./About.css";


const About = () => {
    return (
        <about>
            <motion.div className="title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1>About Us</h1>
                <ul className="content-list">
                    <li>The Society of Asian Scientists and Engineers (SASE) was founded in November 2007 
                        to support Asian heritage scientists and engineers in reaching their full potential. SASE 
                        aims to prepare leaders, celebrate diversity, and provide a sense of belonging in STEM fields.</li>
                    <li>At UVA, we embody this mission by offering programs and opportunities that empower students to
                        grow personally, professionally, and academically while fostering an inclusive environment</li>
                </ul>
            </motion.div>
            <div className="image">
                <img src="/Rotunda.png" alt="SASE@UVA Logo" height="524" width="718"/>
            </div>
        
            <div className="mission">
                <h1>Our Mission</h1>
                <p>To be both <strong><em>good</em></strong> and <strong><em>great</em></strong>, empowering diverse leaders
                   to innovate, inspire, and <br/>create meaningful impact - where the pursuit of knowledge and community drives 
                   <br/><strong><em>progress</em></strong></p>
            </div>

            <div className="professional">
                <h1>Professional</h1>
                <p>We equip our members with the skills and resources needed to succeed in their careers.
                    Through resume workshops, networking events, mock interviews, and mentorship opportunities,
                    SASE helps students build confidence and connect with industry professionals.
                </p>
            </div>

            <div className="community">
                <h1>Community</h1>
                <p>At SASE, we believe in fostering a sense of belonging. We host events and initiatives that bring people
                    together, encouraging collaboration, support, and lasting friendships. Our community is a space for members to grow
                    alongside peers who share similar goals and challenges.
                </p>
            </div>

            <div className="diversity">
                <h1>Diversity</h1>
                <p>Diversity is at the core of everything we do. We celebrate our members' unique perspectives and experiences
                    and promote inclusion and equity in STEM fields. By embracing cultural differences and advocating for underrepresented
                    voices, we aim to create a future where everyone feels empowered to contribute and succeed.
                </p>
            </div>
        </about>
    );
};

export default About;
