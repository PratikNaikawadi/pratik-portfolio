import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Zap, Download } from 'lucide-react';
import { experience, skills, toolStack } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { SkillTag } from '../common/SkillTag';
import { GlassCard } from '../common/GlassCard';
import { ButtonPrimary } from '../common/Button';
import './Resume.css';

function SkillBar({ name, pct, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className="skill-row">
            <div className="skill-bar-header">
                <span>{name}</span>
                <span className="skill-pct">{pct}%</span>
            </div>
            <div className="skill-track">
                <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.25, 0.8, 0.25, 1] }}
                />
            </div>
        </div>
    );
}

export function Resume() {
    return (
        <section id="resume" className="resume-section">
            <div className="resume-container">
                <div className="resume-top">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeader label="Experience" title="My <strong>Career</strong> Journey" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <ButtonPrimary onClick={() => window.open('https://drive.google.com/drive/folders/1iOSs9COH3W1WqqGBvATEAIe98HHlecac?usp=drive_link', '_blank')}>
                            <Download size={16} />
                            Download Resume
                        </ButtonPrimary>
                    </motion.div>
                </div>

                <div className="resume-grid">
                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65 }}
                    >
                        <h3 className="resume-col-title">
                            <Briefcase size={18} color="var(--indigo)" /> Work Experience
                        </h3>
                        <div className="timeline">
                            {experience.map((exp, i) => (
                                <GlassCard key={i} className={`timeline-item${i === experience.length - 1 ? ' last' : ''}`}>
                                    <div className="exp-title">{exp.title}</div>
                                    <div className="exp-company">{exp.company}</div>
                                    <div className="exp-desc">{exp.desc}</div>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                    >
                        <h3 className="resume-col-title">
                            <Zap size={18} color="var(--indigo)" /> Core Competencies
                        </h3>
                        <GlassCard className="skills-card">
                            {skills.map((s, i) => (
                                <SkillBar key={s.name} name={s.name} pct={s.pct} index={i} />
                            ))}
                        </GlassCard>

                        <GlassCard className="toolstack-card">
                            <div className="toolstack-label">Tool Stack</div>
                            <div className="toolstack-tags">
                                {toolStack.map((t) => (
                                    <SkillTag key={t} label={t} />
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
