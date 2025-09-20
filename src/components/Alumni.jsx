import React from 'react';
import { motion } from 'framer-motion';
import "./Alumni.css";
import pres from "../assets/people/24-25/Lanah Pheng.jpg";
import exVP from "../assets/people/24-25/Justin Zheng.jpg";
import inVP from "../assets/people/24-25/Jonathan Luu.jpg";
import it1 from "../assets/people/24-25/Justin Park.jpg";

const alumni = [
            {
                id: 1,src: pres,name: "Lanah Pheng",major: "Computer Science",
            }, 
            {
                id: 2,src: exVP,name: "Justin Zheng",major: "Systems Engineering",
            },
            {
                id: 3,src: inVP,name: "Jonathan Luu",major: "Applied Statistics & Environmental Science",
            },
            {
                id: 1,src: it1,name: "Justin Park",major: "Computer Science",
            },
        ]

const Alumni = () => {
    return (
        <div className="alumni">
            <motion.div 
            className="alumni-title" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Alumni</h1>
                <p>Our alumni are a testament to the impact of SASE. They continue to excel in their careers and give back 
                    to the community, serving as mentors, speakers, and advocates for our mission. Stay connected with UVA
                    SASE and help inspire the next generation.</p>
            </motion.div>
            
            <motion.div
            className="twentyfour-twentyfive" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Class of 2025</h1>
                <div className="officer-grid">
                    {alumni.map((member) => (
                        <div key={member.id} className="member">
                            <img src={member.src} alt={member.name} className="rounded-img" />
                            <h1>{member.name}</h1>
                            <p>{member.major}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Alumni;