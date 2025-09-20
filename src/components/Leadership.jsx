import React from 'react';
import "./Leadership.css";
import pres from "../assets/people/25-26/Femi Shaikh.JPG";
import exVP from "../assets/people/25-26/Ken Michael Fabia.JPG";
import inVP from "../assets/people/25-26/Eiman Sherzada.JPG";
import tres from "../assets/people/25-26/Jacky Zheng.JPG";
import sec from "../assets/people/25-26/Victoria Lam.JPG";
import prc from "../assets/people/25-26/Nicole Chowdhury.JPG";
import ep from "../assets/people/25-26/Vy Nguyen.JPG";
import epc from "../assets/people/25-26/Kate-Lin Ly.JPG";
import mem from "../assets/people/25-26/Elijah Hernandez.JPG";
import mkc from "../assets/people/25-26/Norah Lee.JPG";
import his from "../assets/people/25-26/Hannah Duong.JPG";
import web from "../assets/people/25-26/Rohan Chhahira.JPG"; 
import con1 from "../assets/people/25-26/Lyle Mora.JPG";
import con2 from "../assets/people/25-26/Jimmy Chen.JPG";
import con3 from "../assets/people/25-26/Nina Li.JPG";

const Leadership = () => {
    const board = [
        {
            id: 1,
            src: pres,
            title: "President",
            name: "Femi Shaikh",
            year: "4th Year",
            major: "Biochemistry & Psychology",
            email: "xxh8wp@virginia.edu",
        },
        {
            id: 2,
            src: exVP,
            title: "External VP",
            name: "Ken Michael Fabia",
            year: "4th Year",
            major: "Electrical Engineering",
            email: "jnw7qm@virginia.edu",
        },
        {
            id: 3,
            src: inVP,
            title: "Internal VP",
            name: "Eiman Sherzada",
            year: "3rd Year",
            major: "Computer Science",
            email: "vdx8fg@virginia.edu",
        },
        {
            id: 4,
            src: tres,
            title: "Treasurer",
            name: "Jacky Zheng",
            year: "3rd Year",
            major: "Mechanical & Aerospace Engineering",
            email: "bww8jx@virginia.edu",
        },
        {
            id: 5,
            src: sec,
            title: "Secretary",
            name: "Victoria Lam",
            year: "3rd Year",
            major: "Biomedical Engineering",
            email: "kze4za@virginia.edu",
        },
        {
            id: 6,
            src: prc,
            title: "Public Relations Chair",
            name: "Nicole Chowdhury",
            year: "3rd Year",
            major: "BS Environmental Chemistry",
            email: "dys6fm@virginia.edu",
        },
        {
            id: 7,
            src: ep,
            title: "Event Planning Chair",
            name: "Vy Nguyen",
            year: "3rd Year",
            major: "Chemical Engineering",
            email: "bcx4qf@virginia.edu",
        },
        {
            id: 8,
            src: epc,
            title: "Event Planning Chair",
            name: "Kate-Lin Ly",
            year: "3rd Year",
            major: "Biochemistry",
            email: "vvu5wm@virginia.edu",
        },
        {
            id: 9,
            src: mem, 
            title: "Membership Chair",
            name: "Elijah Hernandez",
            year: "4th Year",
            major: "Mechanical Engineering",
            email: "ewe5mv@virginia.edu",
        },
        {
            id: 10,
            src: mkc,
            title: "Marketing Chair",
            name: "Norah Lee",
            year: "4th year",
            major: "Computer Science",
            email: "mbv7xs@virginia.edu"
        },
    
        {
            id: 11, 
            src: his, 
            title: "Historian",
            name: "Hannah Duong",
            year: "4th year",
            major: "Electrical & Computer Engineering",
            email: "faw4bh@virginia.edu"

        },
        {
            id: 12, 
            src: web,
            title: "Webmaster",
            name: "Rohan Chhahira",
            year: "3rd Year",
            major: "Computer Science",
            email: "fbt2gt@virginia.edu",
        },
        {
            id: 13, 
            src: con1,
            title: "Conference Chair",
            name: "Lyle Mora",
            year: "2nd Year",
            major: "Systems Engineering",
            email: "fsu5gn@virginia.edu",
        },
         {
            id: 14, 
            src: con2,
            title: "Conference Chair",
            name: "Jimmy Chen",
            year: "4th Year",
            major: "Mechanical Engineering",
            email: "mnz3xz@virginia.edu",
        },
         {
            id: 15, 
            src: con3,
            title: "Conference Chair",
            name: "Nina Li",
            year: "4th Year",
            major: "Computer Science",
            email: "ady7ry@virginia.edu",
        }
        
    ]

    
    return (
        <leadership>
            <div className="title">
                <h1>2025-2026</h1>
                <h2>UVA SASE Leadership</h2>
            </div>
            <div className="people">
                <h1>Officer Board</h1>
                <div className="officer-grid">
                {board.map((member) => (
                    <div className="member">
                <div className="img-wrapper">
                    <img src={member.src} alt={member.name} className="rounded-img" />
                </div>
                <h1>{member.name}</h1>
                <h2>{member.title}</h2>
                <p>{member.year}</p>
                <p>{member.major}</p>
                <p>{member.email}</p>
                </div>
                ))}
                </div>
            </div>
        </leadership>
    );
};

export default Leadership;



