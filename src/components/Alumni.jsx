import React from 'react';
import { motion } from 'framer-motion';
import "./Alumni.css";
import lanah from "../assets/people/24-25/Lanah Pheng.jpg";
import justinZ from "../assets/people/24-25/Justin Zheng.jpg";
import jonathan from "../assets/people/24-25/Jonathan Luu.jpg";
import justinP from "../assets/people/24-25/Justin Park.jpg";
import femi from "../assets/people/25-26/circle shots/Femi.png";
import ken from "../assets/people/25-26/circle shots/Ken.png";
import elijah from "../assets/people/25-26/circle shots/Elijah.png";
import jimmy from "../assets/people/25-26/circle shots/Jimmy.png";
import nina from "../assets/people/25-26/circle shots/Nina.png";
import norah from "../assets/people/25-26/circle shots/Norah.png";
import hannah from "../assets/people/25-26/circle shots/Hannah.png";

const alumni_25 = [
    {id: 1,src: lanah,name: "Lanah Pheng",major: "Computer Science"}, 
    {id: 2,src: justinZ,name: "Justin Zheng",major: "Systems Engineering"},
    {id: 3,src: jonathan,name: "Jonathan Luu",major: "Applied Statistics & Environmental Science"},
    {id: 1,src: justinP,name: "Justin Park",major: "Computer Science"},
]

const alumni_26 = [
    {id: 1, src: femi, name: "Femi Shaikh", major: "Biochemistry & Psychology"},
    {id: 2, src: ken, name: "Ken Michael Fabia", major: "Electrical Engineering"},
    {id: 3, src: elijah, name: "Elijah Hernandez", major: "Mechanical Engineering"},
    {id: 4, src: jimmy, name: "Jimmy Chen", major: "Mechanical Engineering"},
    {id: 5, src: nina, name: "Nina Li", major: "Computer Science"},
    {id: 6, src: norah, name: "Norah Lee", major: "Computer Science"},
    {id: 7, src: hannah, name: "Hannah Duong", major: "Electrical & Computer Engineering"}
    
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
            className="twentyfive-twentysix" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Class of 2026</h1>
                <div className="officer-grid">
                    {alumni_26.map((member) => (
                        <div key={member.id} className="member">
                            <img src={member.src} alt={member.name} className="rounded-img" />
                            <h1>{member.name}</h1>
                            <p>{member.major}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
            className="twentyfour-twentyfive" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}>
                <h1>Class of 2025</h1>
                <div className="officer-grid">
                    {alumni_25.map((member) => (
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