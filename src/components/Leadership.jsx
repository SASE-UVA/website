import React from 'react';
import "./Leadership.css";
// import pres from "../assets/people/24-25/Lanah Pheng.jpg";
// import exVP from "../assets/people/24-25/Justin Zheng.jpg";
// import inVP from "../assets/people/24-25/Jonathan Luu.jpg";
// import tres from "../assets/people/24-25/Jimmy Chen.jpg";
// import sec from "../assets/people/24-25/Eiman Sherzada.jpg";
// import mar from "../assets/people/24-25/Ken Fabia.jpg";
// import ep from "../assets/people/24-25/Vy Nguyen.jpg";
// import epc from "../assets/people/24-25/Femi Shaikh.jpg";
// import it1 from "../assets/people/24-25/Justin Park.jpg";
// import it2 from "../assets/people/24-25/Norah Lee.jpg";
// import it3 from "../assets/people/24-25/Salina Tran.jpg";

const Leadership = () => {
    // const board = [
    //     {
    //         id: 1,
    //         src: pres,
    //         title: "President",
    //         name: "Lanah Pheng",
    //         year: "4th Year",
    //         major: "Computer Science",
    //         email: "dmt9xb@virginia.edu",
    //     },
    //     {
    //         id: 2,
    //         src: exVP,
    //         title: "External VP",
    //         name: "Justin Zheng",
    //         year: "4th Year",
    //         major: "Systems Engineering",
    //         email: "jzd4vb@virginia.edu",
    //     },
    //     {
    //         id: 3,
    //         src: inVP,
    //         title: "Internal VP",
    //         name: "Jonathan Luu",
    //         year: "4th Year",
    //         major: "Applied Statistics & Environmental Science",
    //         email: "ktx2nb@virginia.edu",
    //     },
    //     {
    //         id: 4,
    //         src: tres,
    //         title: "Treasurer",
    //         name: "Jimmy Chen",
    //         year: "3rd Year",
    //         major: "Mechanical Engineering",
    //         email: "mnz3xz@virginia.edu",
    //     },
    //     {
    //         id: 5,
    //         src: sec,
    //         title: "Secretary",
    //         name: "Eiman Sherzada",
    //         year: "2nd Year",
    //         major: "Computer Science",
    //         email: "vdx8fg@virginia.edu",
    //     },
    //     {
    //         id: 6,
    //         src: mar,
    //         title: "Public Relations Chair",
    //         name: "Ken Michael Fabia",
    //         year: "3rd Year",
    //         major: "Electrical and Computer Engineering",
    //         email: "jnw7qm@virginia.edu",
    //     },
    //     {
    //         id: 7,
    //         src: ep,
    //         title: "Event Planning Chair",
    //         name: "Vy Nguyen",
    //         year: "2nd Year",
    //         major: "Chemical Engineering",
    //         email: "bcx4qf@virginia.edu",
    //     },
    //     {
    //         id: 8,
    //         src: epc,
    //         title: "Event Planning Chair",
    //         name: "Femi Shaikh",
    //         year: "3rd Year",
    //         major: "Biochemistry",
    //         email: "xxh8wp@virginia.edu",
    //     },
    // ]

    // const interns = [
    //     {
    //         id: 1,
    //         src: it1,
    //         title: "Webmaster Intern",
    //         name: "Justin Park",
    //         year: "4th Year",
    //         major: "Computer Science",
    //         email: "ysr9dj@virginia.edu",
    //     },
    //     {
    //         id: 2,
    //         src: it2,
    //         title: "Webmaster Intern",
    //         name: "Norah Lee",
    //         year: "3rd Year",
    //         major: "Computer Science",
    //         email: "mbv7xs@virginia.edu",
    //     },
    //     {
    //         id: 3,
    //         src: it3,
    //         title: "Marketing Intern",
    //         name: "Salina Tran",
    //         year: "3rd Year",
    //         major: "Computer Engineering",
    //         email: "hyd4cz@virginia.edu",
    //     },

    // ]
    
    return (
        <leadership>
            <div className="title">
                <h1>2025-2026</h1>
                <h2>UVA SASE Leadership</h2>
                <h3>Coming Soon!</h3>
            </div>

            {/* Leadership content */}
            {/* <div className="people">
                <h1>Officer Board</h1>
                <div className="officer-grid">
                    {board.map((member) => (
                        <div key={member.id} className="member">
                            <img src={member.src} alt={member.name} className="rounded-img" />
                            <h1>{member.name}</h1>
                            <h2>{member.title}</h2>
                            <p>{member.year}</p>
                            <p>{member.major}</p>
                            <p>{member.email}</p>
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
                        <p>{member.email}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </leadership>
    );
};

export default Leadership;



