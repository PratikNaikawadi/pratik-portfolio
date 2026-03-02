import React from 'react';
import { motion } from 'framer-motion';
import { aboutText, skillTags } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { SkillTag } from '../common/SkillTag';
import pratikPhoto from '../../assets/pratikprofile.png';
import './About.css';

const slideIn = (dir, delay = 0) => ({
    initial: { opacity: 0, x: dir === 'left' ? -40 : 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay, ease: 'easeOut' },
});

export function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    {/* Left — text & tags */}
                    <motion.div {...slideIn('left')}>
                        <SectionHeader label="About Me" title="Bridging <strong>Strategy</strong> and Execution" />
                        {aboutText.map((para, i) => (
                            <p key={i} className="about-para">{para}</p>
                        ))}
                        <div className="about-tags">
                            {skillTags.map((t) => (
                                <SkillTag key={t.label} icon={t.icon} label={t.label} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — photo */}
                    <motion.div {...slideIn('right', 0.1)} className="about-photo-wrap">
                        <div className="about-photo-frame">
                            <img
                                src={pratikPhoto}
                                alt="Pratik Naikawadi"
                                className="about-photo"
                            />
                            {/* Floating badge */}
                            <div className="about-photo-badge glass">
                                <div className="badge-dot" />
                                <span>Open to opportunities</span>
                            </div>
                            {/* Decorative ring */}
                            <div className="about-photo-ring" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
