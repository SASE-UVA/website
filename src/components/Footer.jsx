import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-container">
                <span className="contact-label"></span>
                <div className="contact-links">
                    <a href="mailto:uva@saseconnect.org" className="contact-link">
                        <HiOutlineMail size={30} />
                    </a>
                    <a href="https://www.instagram.com/sase.uva/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://discord.gg/qqUkwM57yp" target="_blank" rel="noopener noreferrer" className="contact-link"><FaDiscord size={30}></FaDiscord></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright SASE@UVA. &copy; {new Date().getFullYear()}  All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
