import React from 'react';
import "./Leadership.css";
import pres1 from "../assets/people/26-27/Vy.jpg";
import pres2 from "../assets/people/26-27/Victoria.jpg";
import vp from "../assets/people/26-27/Eiman.jpg";
import sec from "../assets/people/26-27/Chau.jpg";
import tres from "../assets/people/26-27/Jacky.jpg";
import epc1 from "../assets/people/26-27/Grace.jpg";
import epc2 from "../assets/people/26-27/Phoebe.jpg";
import conf1 from "../assets/people/26-27/Lyle.jpg";
import conf2 from "../assets/people/26-27/Gavin.jpg";
import mem from "../assets/people/26-27/Chloe.jpg";
import adv from "../assets/people/26-27/Deeya.jpg";
import alum from "../assets/people/26-27/Sadat.jpg";
import spons from "../assets/people/26-27/Christine.jpg";
import prc from "../assets/people/26-27/Ahmad.jpg";
import mkc from "../assets/people/26-27/Mysha.jpg";
import his from "../assets/people/26-27/Leah.jpg";
import web from "../assets/people/26-27/Rohan.jpg";


const Leadership = () => {
    const e_board_26 = [
        {
            id: 1,
            src: pres1,
            title: "Co-President",
            name: "Vy Nguyen",
            year: "4th Year",
            major: "Chemical Engineering",
            email: "bcx4qf@virginia.edu",
        },
        {
            id: 2,
            src: pres2,
            title: "Co-President",
            name: "Victoria Lam",
            year: "4th Year",
            major: "Biomedical Engineering",
            email: "kze4za@virginia.edu",
        },
        {
            id: 3,
            src: vp,
            title: "Vice President",
            name: "Eiman Sherzada",
            year: "4th Year",
            major: "Computer Science & Linguistics",
            email: "vdx8fg@virginia.edu",
        },
        {
            id: 4,
            src: sec,
            title: "Secretary",
            name: "Chau Nguyen",
            year: "4th Year",
            major: "Electrical Engineering",
            email: "myk9zu@virginia.edu",
        },
         {
            id: 5,
            src: tres,
            title: "Treasurer",
            name: "Jacky Zheng",
            year: "4th Year",
            major: "Mechanical & Aerospace \n Engineering",
            email: "bww8jx@virginia.edu",
        }        
    ]

    const chairs_26 = [ 
        {
            id: 6,
            src: epc1,
            title: "Co-Event Planning Chair",
            name: "Grace Widjaja",
            year: "2nd Year",
            major: "Nursing",
            email: "yrp4rc@virginia.edu",
        },
        {
            id: 7,
            src: epc2,
            title: "Co-Event Planning Chair",
            name: "Phoebe Wang",
            year: "2nd Year",
            major: "Electrical & Computer \n Engineering",
            email: "mfk6mr@virginia.edu",
        },
        {
            id: 8, 
            src: conf1,
            title: "Co-Conference Chair",
            name: "Lyle Mora",
            year: "2nd Year",
            major: "Systems Engineering",
            email: "fsu5gn@virginia.edu",
        },
        {
            id: 9, 
            src: conf2,
            title: "Co-Conference Chair",
            name: "Gavin Appel",
            year: "2nd Year",
            major: "Systems Engineering",
            email: "msc7vd@virginia.edu",
        },
        {
            id: 10,
            src: mem, 
            title: "Membership Chair",
            name: "Chloe Lu",
            year: "3rd Year",
            major: "Mechanical Engineering",
            email: "aed7na@virginia.edu",
        },
        {
            id: 11,
            src: adv,
            title: "Advocacy Chair",
            name: "Deeya Natarajan",
            year: "2nd Year",
            major: "Systems Engineering",
            email: "crx3yk@virginia.edu",
        },
        {
            id: 12,
            src: alum,
            title: "Alumni Chair",
            name: "Sadat Hassan",
            year: "2nd Year",
            major: "Computer Engineering",
            email: "yja8ub@virginia.edu",
        },
        {
            id: 13,
            src: spons,
            title: "Sponsorship Chair & \n Co-Historian",
            name: "Christine Nguyen",
            year: "4th Year",
            major: "Aerospace Engineering",
            email: "pap7zd@virginia.edu",
        }
    ]

    const pr_comm_26 = [
        {
            id: 14,
            src: prc,
            title: "Public Relations Chair",
            name: "Ahmad Ali",
            year: "3rd Year",
            major: "Systems Engineering",
            email: "uyq2tr@virginia.edu",
        },
        {
            id: 15,
            src: mkc,
            title: "Marketing Chair",
            name: "Mysha Mosharaf",
            year: "4th Year",
            major: "Computer Science & \n Studio Art",
            email: "hmb5ug@virginia.edu"
        },
    
        {
            id: 16, 
            src: his, 
            title: "Co-Historian",
            name: "Leah Ye",
            year: "2nd Year",
            major: "Data Science",
            email: "xsj9tt@virginia.edu"

        },
        {
            id: 17, 
            src: web,
            title: "Webmaster",
            name: "Rohan Chhahira",
            year: "4th Year",
            major: "Computer Science",
            email: "fbt2gt@virginia.edu",
        }
    ]

    
    return (
        <leadership>
            <div className="title">
                <h1>2026-2027</h1>
                <h2>UVA SASE Leadership</h2>
            </div>
            <div className="people">
                <h1>Executive Board</h1>
                <div className="officer-grid">
                {e_board_26.map((member) => (
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

                <h1>External Chairs</h1>
                <div className="officer-grid">
                {chairs_26.map((member) => (
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
                {pr_comm_26.map((member) => (
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
        </leadership>
    );
};

export default Leadership;



