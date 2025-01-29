import React from 'react';
import { FaInstagram, FaDiscord, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-container">
                <span className="contact-label"></span>
                <div className="contact-links">
                    <a href="https://www.instagram.com/sase.uva/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://discord.gg/qqUkwM57yp" target="_blank" rel="noopener noreferrer" className="contact-link"><FaDiscord size={30}></FaDiscord></a>
                    <a href="https://www.linkedin.com/company/society-of-asian-scientist-and-engineers-at-the-university-of-virginia/" target="_blank" rel="noopener noreferrer" className="contact-link"><FaLinkedin size={30}></FaLinkedin></a>
                </div>
            </div>
            <div className="footer-bottom">
                <h1>Contact</h1>
                <p>Thornton Hall D111</p>
                <p>Charlottesville, Virginia</p>
                <a href="mailto:uva@saseconnect.org">uva@saseconnect.org</a>
                <h2>Copyright SASE@UVA. &copy; {new Date().getFullYear()}  All rights reserved.</h2>
            </div>
        </footer>
    );
};

export default Footer;
