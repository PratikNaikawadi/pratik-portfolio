import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { projects } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';

// Project images — imported directly so Vite bundles them correctly
import imgEcommerce from '../../assets/E-Commerce Customer Insight Optimization.png';
import imgFoodSales from '../../assets/Strategic Food Sales Enhancement.png';
import imgMultiRegion from '../../assets/Multi-Region Retail Sales Maximization.png';
import imgFoodIntelligence from '../../assets/Food Sales Intelligence System.png';
import imgAdventure from '../../assets/AdventureWorks Dynamic Analysis.png';
import imgRetailSales from '../../assets/Retail Sales Dynamics Analysis.png';

import './Projects.css';

// Map each project title to its image
const projectImages = {
    'E-Commerce Customer Insight Optimization': imgEcommerce,
    'Strategic Food Sales Enhancement': imgFoodSales,
    'Multi-Region Retail Sales Maximization': imgMultiRegion,
    'Food Sales Intelligence System': imgFoodIntelligence,
    'AdventureWorks Dynamic Analysis': imgAdventure,
    'Retail Sales Dynamics Analysis': imgRetailSales,
};

export function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader label="Projects" title="Selected <strong>Projects</strong>" center />
                    <p className="projects-sub">
                        A curated selection of data analysis and business intelligence projects showcasing real-world impact.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((proj, i) => {
                        const Icon = Icons[proj.icon] || Icons['BarChart2'];
                        const image = projectImages[proj.title];
                        return (
                            <motion.div
                                key={proj.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                            >
                                <GlassCard className="project-card">
                                    {/* Project image thumbnail */}
                                    {image && (
                                        <div className="project-image-wrap">
                                            <img src={image} alt={proj.title} className="project-image" />
                                        </div>
                                    )}

                                    <div className="project-body">
                                        <div className="project-icon-wrap">
                                            {Icon && <Icon size={22} />}
                                        </div>
                                        <div className="project-tags">
                                            {proj.tags.map((tag) => (
                                                <span key={tag} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <h3 className="project-title">{proj.title}</h3>
                                        <p className="project-desc">{proj.desc}</p>
                                        <div className="project-footer">
                                            <span className="project-meta">{proj.meta}</span>
                                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View on GitHub">
                                                <ArrowUpRight size={18} color="var(--indigo)" />
                                            </a>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
