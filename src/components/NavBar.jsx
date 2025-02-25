import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.jpg'
import './Navbar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="SASE@UVA Logo" width="100" height="250"/>
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/leadership" onClick={() => setMenuOpen(false)}>LEADERSHIP</NavLink>
        </li>
        <li>
          <NavLink to="/events" onClick={() => setMenuOpen(false)}>EVENTS</NavLink>
        </li>
        <li>
          <NavLink to="/sponsors" onClick={() => setMenuOpen(false)}>SPONSORS</NavLink>
        </li>
        <li>
          <NavLink to="/merch" onClick={() => setMenuOpen(false)}>MERCH</NavLink>
        </li>
        <li>
          <NavLink to="/alumni" onClick={() => setMenuOpen(false)}>ALUMNI</NavLink>
        </li>
        <button className="button">BECOME A MEMBER</button>
      </ul>
    </nav>
  );
};

export default NavBar;
