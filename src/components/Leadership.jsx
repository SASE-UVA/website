import React from 'react';
import "./Leadership.css";
import pres from "../assets/Lanah Pheng.jpg";
import exVP from "../assets/Justin Zheng.jpg";
import inVP from "../assets/Jonathan Luu.jpg";
import tres from "../assets/Jimmy Chen.jpg";
import sec from "../assets/Eiman Sherzada.jpg";
import mar from "../assets/Ken Fabia.jpg";
import ep from "../assets/Vy Nguyen.jpg";
import epc from "../assets/Femi Shaikh.jpg";
import it1 from "../assets/Justin Park.jpg";
import it2 from "../assets/Norah Lee.jpg";
import it3 from "../assets/Salina Tran.jpg";

const Leadership = () => {
    const board = [
        {
            id: 1,
            src: pres,
            title: "President",
            name: "Lanah Pheng",
            year: "4th Year",
            major: "Computer Science (BS)",
            email: "johndoe@gmail.com",
        },
        {
            id: 2,
            src: exVP,
            title: "External VP",
            name: "Justin Zheng",
            year: "4th Year",
            major: "Systems Engineering",
            email: "johndoe@gmail.com",
        },
        {
            id: 3,
            src: inVP,
            title: "Internal VP",
            name: "Jonathan Luu",
            year: "4th Year",
            major: "Applied Stat & Environmental Science",
            email: "johndoe@gmail.com",
        },
        {
            id: 4,
            src: tres,
            title: "Treasurer",
            name: "Jimmy Chen",
            year: "3rd Year",
            major: "Mechanical Engineering",
            email: "johndoe@gmail.com",
        },
        {
            id: 5,
            src: sec,
            title: "Secretary",
            name: "Eiman Sherzada",
            year: "2nd Year",
            major: "Computer Science",
            email: "johndoe@gmail.com",
        },
        {
            id: 6,
            src: mar,
            title: "Marketing Director",
            name: "Ken Fabia",
            year: "3rd Year",
            major: "Electrical and Computer Engineering",
            email: "johndoe@gmail.com",
        },
        {
            id: 7,
            src: ep,
            title: "Event Planner",
            name: "Vy Nguyen",
            year: "2nd Year",
            major: "Chemical Engineering",
            email: "johndoe@gmail.com",
        },
        {
            id: 8,
            src: epc,
            title: "Event PC",
            name: "Femi Shaikh",
            year: "3rd Year",
            major: "Biochemistry",
            email: "johndoe@gmail.com",
        },
    ]

    const interns = [
        {
            id: 1,
            src: it1,
            title: "Webmaster Intern",
            name: "Justin Park",
            year: "4th Year",
            major: "Computer Science",
            email: "johndoe@gmail.com",
        },
        {
            id: 2,
            src: it2,
            title: "Webmaster Intern",
            name: "Norah Lee",
            year: "3rd Year",
            major: "Computer Science",
            email: "johndoe@gmail.com",
        },
        {
            id: 3,
            src: it3,
            title: "Marketing Intern",
            name: "Salina Tran",
            year: "3rd Year",
            major: "Computer Engineering",
            email: "johndoe@gmail.com",
        },

    ]
    
    return (
        <leadership>
            <div className="title">
                <h1>2024-2025</h1>
                <h2>UVA SASE Leadership</h2>
                <p>Meet our wonderful board!</p>
            </div>

            {/* Leadership content */}
            <div className="people">
                <h1>Officer Board</h1>
                <div className="officer-grid">
                    {board.map((member) => (
                        <div key={member.id} className="member">
                            <img src={member.src} alt={member.name} className="rounded-img" />
                            <h1>{member.name}</h1>
                            <h2>{member.title}</h2>
                            <p>{member.year}</p>
                            <p>{member.major}</p>
                            
                        </div>
                    ))}
                </div>
                <h1>Interns</h1>
                <div className="intern-grid">
                    {interns.map((member) => (
                        <div key={member.id} className="member">
                        <img src={member.src} alt={member.name} className="rounded-img" />
                        <h1>{member.name}</h1>
                        <h2>{member.title}</h2>
                        <p>{member.year}</p>
                        <p>{member.major}</p>
                        </div>
                    ))}
                </div>
            </div>
        </leadership>
    );
};

export default Leadership;



