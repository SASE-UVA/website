import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Events', link: '/events' },
        { id: 4, name: 'Contact', link: '/contact' },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-4xl font-signature ml-2">UVA SASE</h1>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex">
                {links.map(({ id, name, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-100">
                        <Link to={link}>{name}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile dropdown menu */}
        </div>
    );
};

export default NavBar;
