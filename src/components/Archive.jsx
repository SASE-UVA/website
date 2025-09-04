import React from 'react';
import "./Archive.css";
import pres from "../assets/people/24-25/Lanah Pheng.jpg";
import exVP from "../assets/people/24-25/Justin Zheng.jpg";
import inVP from "../assets/people/24-25/Jonathan Luu.jpg";
import tres from "../assets/people/24-25/Jimmy Chen.jpg";
import sec from "../assets/people/24-25/Eiman Sherzada.jpg";
import mar from "../assets/people/24-25/Ken Fabia.jpg";
import ep from "../assets/people/24-25/Vy Nguyen.jpg";
import epc from "../assets/people/24-25/Femi Shaikh.jpg";
import it1 from "../assets/people/24-25/Justin Park.jpg";
import it2 from "../assets/people/24-25/Norah Lee.jpg";
import it3 from "../assets/people/24-25/Salina Tran.jpg";

const Archive = () => {
    const board = [
        {
            id: 1,
            src: pres,
            title: "President",
            name: "Lanah Pheng",
            year: "4th Year",
            major: "Computer Science",
        },
        {
            id: 2,
            src: exVP,
            title: "External VP",
            name: "Justin Zheng",
            year: "4th Year",
            major: "Systems Engineering",
        },
        {
            id: 3,
            src: inVP,
            title: "Internal VP",
            name: "Jonathan Luu",
            year: "4th Year",
            major: "Applied Statistics & Environmental Science",
        },
        {
            id: 4,
            src: tres,
            title: "Treasurer",
            name: "Jimmy Chen",
            year: "3rd Year",
            major: "Mechanical Engineering",
        },
        {
            id: 5,
            src: sec,
            title: "Secretary",
            name: "Eiman Sherzada",
            year: "2nd Year",
            major: "Computer Science",
        },
        {
            id: 6,
            src: mar,
            title: "Public Relations Chair",
            name: "Ken Michael Fabia",
            year: "3rd Year",
            major: "Electrical and Computer Engineering",
        },
        {
            id: 7,
            src: ep,
            title: "Event Planning Chair",
            name: "Vy Nguyen",
            year: "2nd Year",
            major: "Chemical Engineering",
        },
        {
            id: 8,
            src: epc,
            title: "Event Planning Chair",
            name: "Femi Shaikh",
            year: "3rd Year",
            major: "Biochemistry",
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
        },
        {
            id: 2,
            src: it2,
            title: "Webmaster Intern",
            name: "Norah Lee",
            year: "3rd Year",
            major: "Computer Science",
        },
        {
            id: 3,
            src: it3,
            title: "Marketing Intern",
            name: "Salina Tran",
            year: "3rd Year",
            major: "Computer Engineering",
        },

    ]
    
    return (
        <div className="archive">
            <div className="title">
                <h1>2024-2025</h1>
                <h2>UVA SASE Leadership</h2>
            </div>

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
        </div>
    );
};

export default Archive;



