import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { person } from '../../data/portfolio';
import './Navbar.css';

const navLinks = ['home', 'about', 'resume', 'projects', 'testimonials', 'contact'];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id="navbar">
            <div className="navbar-inner">
                <Link to="home" smooth duration={500} className="navbar-logo">
                    {person.firstName}
                    <em>{person.lastName}</em>
                </Link>

                <div className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link key={link} to={link} smooth duration={500} offset={-68} className="nav-link">
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </Link>
                    ))}
                </div>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link}
                        to={link}
                        smooth
                        duration={500}
                        offset={-68}
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
