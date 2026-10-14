import React from 'react';
import "./Archive.css";
import pres_24 from "../assets/people/24-25/Lanah Pheng.jpg";
import exVP_24 from "../assets/people/24-25/Justin Zheng.jpg";
import inVP_24 from "../assets/people/24-25/Jonathan Luu.jpg";
import tres_24 from "../assets/people/24-25/Jimmy Chen.jpg";
import sec_24 from "../assets/people/24-25/Eiman Sherzada.jpg";
import mar_24 from "../assets/people/24-25/Ken Fabia.jpg";
import ep_24 from "../assets/people/24-25/Vy Nguyen.jpg";
import epc_24 from "../assets/people/24-25/Femi Shaikh.jpg";
import it1_24 from "../assets/people/24-25/Justin Park.jpg";
import it2_24 from "../assets/people/24-25/Norah Lee.jpg";
import it3_24 from "../assets/people/24-25/Salina Tran.jpg";

import pres_25 from "../assets/people/25-26/circle shots/Femi.png";
import exVP_25 from "../assets/people/25-26/circle shots/Ken.png";
import inVP_25 from "../assets/people/25-26/circle shots/Eiman.png";
import tres_25 from "../assets/people/25-26/circle shots/Jacky.png";
import sec_25 from "../assets/people/25-26/circle shots/Victoria.png";
import prc_25 from "../assets/people/25-26/circle shots/Nicole.png";
import ep_25 from "../assets/people/25-26/circle shots/Vy.png";
import epc_25 from "../assets/people/25-26/circle shots/Kate-lin.png";
import mem_25 from "../assets/people/25-26/circle shots/Elijah.png";
import mkc_25 from "../assets/people/25-26/circle shots/Norah.png";
import his_25 from "../assets/people/25-26/circle shots/Hannah.png";
import web_25 from "../assets/people/25-26/circle shots/Rohan.png"; 
import con1_25 from "../assets/people/25-26/circle shots/Lyle.png";
import con2_25 from "../assets/people/25-26/circle shots/Jimmy.png";
import con3_25 from "../assets/people/25-26/circle shots/Nina.png";

const Archive = () => {
    const e_board_25 = [
        {
            id: 1,
            src: pres_25,
            title: "President",
            name: "Femi Shaikh",
            year: "4th Year",
            major: "Biochemistry & Psychology",
            email: "xxh8wp@virginia.edu",
        },
        {
            id: 2,
            src: exVP_25,
            title: "External VP",
            name: "Ken Michael Fabia",
            year: "4th Year",
            major: "Electrical Engineering",
            email: "jnw7qm@virginia.edu",
        },
        {
            id: 3,
            src: inVP_25,
            title: "Internal VP",
            name: "Eiman Sherzada",
            year: "3rd Year",
            major: "Computer Science",
            email: "vdx8fg@virginia.edu",
        },
        {
            id: 5,
            src: sec_25,
            title: "Secretary",
            name: "Victoria Lam",
            year: "3rd Year",
            major: "Biomedical Engineering",
            email: "kze4za@virginia.edu",
        },
         {
            id: 4,
            src: tres_25,
            title: "Treasurer",
            name: "Jacky Zheng",
            year: "3rd Year",
            major: "Mechanical & Aerospace \n Engineering",
            email: "bww8jx@virginia.edu",
        }        
    ]

    const events_mem_board_25 = [ 
        {
            id: 7,
            src: ep_25,
            title: "Event Planning Chair",
            name: "Vy Nguyen",
            year: "3rd Year",
            major: "Chemical Engineering",
            email: "bcx4qf@virginia.edu",
        },
        {
            id: 8,
            src: epc_25,
            title: "Event Planning Chair",
            name: "Kate-Lin Ly",
            year: "3rd Year",
            major: "Biochemistry",
            email: "vvu5wm@virginia.edu",
        },
        {
            id: 9,
            src: mem_25, 
            title: "Membership Chair",
            name: "Elijah Hernandez",
            year: "4th Year",
            major: "Mechanical Engineering",
            email: "ewe5mv@virginia.edu",
        }
    ]

    const conf_board_25 = [
        {
            id: 13, 
            src: con2_25,
            title: "Conference Chair",
            name: "Jimmy Chen",
            year: "4th Year",
            major: "Mechanical Engineering",
            email: "mnz3xz@virginia.edu",
        },
        {
            id: 14, 
            src: con1_25,
            title: "Conference Committee",
            name: "Lyle Mora",
            year: "2nd Year",
            major: "Systems Engineering",
            email: "fsu5gn@virginia.edu",
        },
         {
            id: 15, 
            src: con3_25,
            title: "Conference Committee",
            name: "Nina Li",
            year: "4th Year",
            major: "Computer Science",
            email: "ady7ry@virginia.edu",
        }
    ]

    const pr_comm_25 = [
        {
            id: 6,
            src: prc_25,
            title: "Public Relations Chair",
            name: "Nicole Chowdhury",
            year: "3rd Year",
            major: "BS Environmental Chemistry",
            email: "dys6fm@virginia.edu",
        },
        {
            id: 10,
            src: mkc_25,
            title: "Marketing Chair",
            name: "Norah Lee",
            year: "4th Year",
            major: "Computer Science",
            email: "mbv7xs@virginia.edu"
        },
    
        {
            id: 11, 
            src: his_25, 
            title: "Historian",
            name: "Hannah Duong",
            year: "4th Year",
            major: "Electrical & Computer \n Engineering",
            email: "faw4bh@virginia.edu"

        },
        {
            id: 12, 
            src: web_25,
            title: "Webmaster",
            name: "Rohan Chhahira",
            year: "3rd Year",
            major: "Computer Science",
            email: "fbt2gt@virginia.edu",
        }
    ]
    
    const board_24 = [
        {
            id: 1,
            src: pres_24,
            title: "President",
            name: "Lanah Pheng",
            year: "4th Year",
            major: "Computer Science",
        },
        {
            id: 2,
            src: exVP_24,
            title: "External VP",
            name: "Justin Zheng",
            year: "4th Year",
            major: "Systems Engineering",
        },
        {
            id: 3,
            src: inVP_24,
            title: "Internal VP",
            name: "Jonathan Luu",
            year: "4th Year",
            major: "Applied Statistics & Environmental Science",
        },
        {
            id: 4,
            src: tres_24,
            title: "Treasurer",
            name: "Jimmy Chen",
            year: "3rd Year",
            major: "Mechanical Engineering",
        },
        {
            id: 5,
            src: sec_24,
            title: "Secretary",
            name: "Eiman Sherzada",
            year: "2nd Year",
            major: "Computer Science",
        },
        {
            id: 6,
            src: mar_24,
            title: "Public Relations Chair",
            name: "Ken Michael Fabia",
            year: "3rd Year",
            major: "Electrical and Computer Engineering",
        },
        {
            id: 7,
            src: ep_24,
            title: "Event Planning Chair",
            name: "Vy Nguyen",
            year: "2nd Year",
            major: "Chemical Engineering",
        },
        {
            id: 8,
            src: epc_24,
            title: "Event Planning Chair",
            name: "Femi Shaikh",
            year: "3rd Year",
            major: "Biochemistry",
        },
    ]

    const interns_24 = [
        {
            id: 1,
            src: it1_24,
            title: "Webmaster Intern",
            name: "Justin Park",
            year: "4th Year",
            major: "Computer Science",
        },
        {
            id: 2,
            src: it2_24,
            title: "Webmaster Intern",
            name: "Norah Lee",
            year: "3rd Year",
            major: "Computer Science",
        },
        {
            id: 3,
            src: it3_24,
            title: "Marketing Intern",
            name: "Salina Tran",
            year: "3rd Year",
            major: "Computer Engineering",
        },

    ]
    
    return (
        <div className="archive">
            <div className="title">
                <h1>2025-2026</h1>
                <h2>UVA SASE Leadership</h2>
            </div>

            <div className="people">
                <h1>Executive Board</h1>
                <div className="officer-grid">
                {e_board_25.map((member) => (
                    <div className="member">
                <div className="img-wrapper">
                    <img src={member.src} alt={member.name} className="rounded-img" />
                </div>
                <h1>{member.name}</h1>
                <h2>{member.title}</h2>
                <p>{member.year}</p>
                <p style={{ whiteSpace: "pre-line" }}>{member.major}</p>
                <p>{member.email}</p>
                </div>
                ))}
                </div>

                <h1>Events & Membership</h1>
                <div className="officer-grid">
                {events_mem_board_25.map((member) => (
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

                <h1>Conference Committee</h1>
                <div className="officer-grid">
                {conf_board_25.map((member) => (
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

                <h1>Public Relations Committee</h1>
                <div className="officer-grid">
                {pr_comm_25.map((member) => (
                    <div className="member">
                <div className="img-wrapper">
                    <img src={member.src} alt={member.name} className="rounded-img" />
                </div>
                <h1>{member.name}</h1>
                <h2>{member.title}</h2>
                <p>{member.year}</p>
                <p style={{ whiteSpace: "pre-line" }}>{member.major}</p>
                <p>{member.email}</p>
                </div>
                ))}
                </div>
                

            </div>

            <div className="title">
                <h1>2024-2025</h1>
                <h2>UVA SASE Leadership</h2>
            </div>

            <div className="people">
                <h1>Officer Board</h1>
                <div className="officer-grid">
                    {board_24.map((member) => (
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
                    {interns_24.map((member) => (
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



