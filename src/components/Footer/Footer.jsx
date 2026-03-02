import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { person } from '../../data/portfolio';
import './Footer.css';

const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: person.linkedinUrl },
    { icon: Github, label: 'GitHub', href: person.githubUrl },
    { icon: Mail, label: 'Email', href: `mailto:${person.email}` },
];

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <Link to="home" smooth duration={500} className="footer-logo">
                    {person.firstName} <em>{person.lastName}</em>
                </Link>
                <div className="footer-copy">{person.footerCopy}</div>
                <div className="footer-socials">
                    {socials.map(({ icon: Icon, label, href }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={label}>
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
