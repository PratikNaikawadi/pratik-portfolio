import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ClientsCarousel.css';

// Import all 7 client logos
import logo1 from '../../assets/client 1- suburbanLOGO.png';
import logo2 from '../../assets/client 2 - nilkamalpng.png';
import logo3 from '../../assets/client 3 - techm.png';
import logo4 from '../../assets/client 4 - ThreeUK2.png';
import logo5 from '../../assets/client 5 - Tag8-Logo-slst--black.png';
import logo6 from '../../assets/client 6 - nipponLOGO.png';
import logo7 from '../../assets/client 7 - HansaCropped.png';

const logos = [
    { src: logo1, alt: 'Suburban Diagnostics' },
    { src: logo2, alt: 'Nilkamal' },
    { src: logo3, alt: 'Tech Mahindra' },
    { src: logo4, alt: 'Three UK' },
    { src: logo5, alt: 'Tag8' },
    { src: logo6, alt: 'Nippon India' },
    { src: logo7, alt: 'Hansa Cequity' },
];

// Duplicate logos for seamless infinite loop
const track = [...logos, ...logos, ...logos];

export function ClientsCarousel() {
    return (
        <section className="clients-section">
            <div className="clients-header">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Clients I Worked With</p>
                </motion.div>
            </div>

            <div className="carousel-outer">
                <div className="carousel-track">
                    {track.map((logo, i) => (
                        <div key={i} className="carousel-item">
                            <img src={logo.src} alt={logo.alt} className="client-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
