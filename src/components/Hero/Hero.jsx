import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Zap, FolderOpen, Mail, CheckCircle2, Clock } from 'lucide-react';
import { person, stats } from '../../data/portfolio';
import { ButtonPrimary, ButtonSecondary } from '../common/Button';
import { GlassCard } from '../common/GlassCard';
import './Hero.css';

const ROLES = ['Business Analyst', 'Project Manager', 'Scrum Master'];

function CyclingRoles() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % ROLES.length);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    return (
        <span className="cycling-role-wrap" aria-label={ROLES[index]}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    className="cycling-role"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                    {ROLES[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                {/* Left column */}
                <div className="hero-left">
                    <motion.div className="hero-badge" {...fadeUp(0)}>
                        <Zap size={14} />
                        {person.badge}
                    </motion.div>

                    <motion.h1 className="hero-title" {...fadeUp(0.08)}>
                        Turning<br /><em>Data</em><br />into Decisions
                    </motion.h1>

                    {/* Animated cycling roles */}
                    <motion.div className="hero-roles-wrap" {...fadeUp(0.15)}>
                        <CyclingRoles />
                    </motion.div>

                    <motion.p className="hero-desc" {...fadeUp(0.22)}>
                        {person.heroDesc}
                    </motion.p>

                    <motion.div className="hero-cta" {...fadeUp(0.29)}>
                        <Link to="projects" smooth duration={500} offset={-68}>
                            <ButtonPrimary>
                                <FolderOpen size={16} />
                                View My Work
                            </ButtonPrimary>
                        </Link>
                        <Link to="contact" smooth duration={500} offset={-68}>
                            <ButtonSecondary>
                                <Mail size={16} />
                                Let's Talk
                            </ButtonSecondary>
                        </Link>
                    </motion.div>

                    <motion.div className="hero-stats" {...fadeUp(0.36)}>
                        {stats.map((s) => (
                            <GlassCard key={s.label} className="stat-card">
                                <div className="stat-num">{s.num}</div>
                                <div className="stat-label">{s.label}</div>
                            </GlassCard>
                        ))}
                    </motion.div>
                </div>

                {/* Right column — floating card */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                    <div className="hero-float">
                        <GlassCard className="hero-card">
                            {/* Profile row */}
                            <div className="hero-card-profile">
                                <div className="hero-avatar">P</div>
                                <div>
                                    <div className="hero-card-name">{person.firstName} {person.lastName}</div>
                                    <div className="hero-card-role">Senior BA · Power BI Certified</div>
                                </div>
                            </div>

                            {/* Sprint progress */}
                            <div className="sprint-block">
                                <div className="sprint-header">
                                    <span>Sprint Progress</span>
                                    <span className="sprint-pct">85%</span>
                                </div>
                                <div className="sprint-track">
                                    <div className="sprint-fill" style={{ width: '85%' }} />
                                </div>
                            </div>

                            {/* Tasks */}
                            <div className="task-list">
                                {[
                                    { icon: <CheckCircle2 size={16} color="#22c55e" />, text: 'BRD finalized ✓' },
                                    { icon: <CheckCircle2 size={16} color="#22c55e" />, text: 'UAT sign-off received ✓' },
                                    { icon: <Clock size={16} color="var(--indigo)" />, text: 'Go-live — in 3 days' },
                                ].map((t) => (
                                    <div key={t.text} className="task-row">
                                        {t.icon}
                                        <span>{t.text}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Online badge */}
                        <GlassCard className="online-badge">
                            <div className="online-dot" />
                            <span>4 active projects</span>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
