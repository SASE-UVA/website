import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to="/" className="title">
                <img src="/Logo.png" alt="SASE@UVA Logo"/>
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <NavLink to="/leadership">Leadership</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
