import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import './SampleDocs.css';

const docs = [
    {
        type: 'BRD',
        title: 'Employee Discount Policy Integration',
        subtitle: 'Company X & Y',
        link: 'https://github.com/PratikNaikawadi/Sample-Documents-/blob/main/BRD%20-%20Company_X%26Y_Employee%20Discount%20Policy%20Integration.pdf',
    },
    {
        type: 'BRD',
        title: 'Kiosk Installation for Report Printing',
        subtitle: 'Healthcare Client',
        link: 'https://github.com/PratikNaikawadi/Sample-Documents-/blob/main/BRD%20-%20Kiosk%20Installation%20for%20Report%20Printing.pdf',
    },
    {
        type: 'DOC',
        title: "Company X's Software Flow",
        subtitle: 'Process Documentation',
        link: "https://github.com/PratikNaikawadi/Sample-Documents-/blob/main/DOC%20-%20Company%20X's%20Software's%20Flow.pdf",
    },
    {
        type: 'DOC',
        title: 'Upgraded Report Dispatch Process Flow',
        subtitle: 'Software X',
        link: "https://github.com/PratikNaikawadi/Sample-Documents-/blob/main/DOC%20-%20Software%20X's%20Upgraded%20Report%20Dispatch%20Process%20flow.pdf",
    },
];

export function SampleDocs() {
    return (
        <section id="sample-docs" className="sample-docs-section">
            <div className="sample-docs-container">
                <motion.div
                    className="sample-docs-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader label="Work Samples" title="Sample <strong>Documents</strong>" center />
                </motion.div>

                <div className="docs-grid">
                    {docs.map((doc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                        >
                            <a href={doc.link} target="_blank" rel="noopener noreferrer" className="doc-card-link">
                                <GlassCard className="doc-card">
                                    <div className={`doc-badge doc-badge--${doc.type.toLowerCase()}`}>{doc.type}</div>
                                    <div className="doc-icon-wrap">
                                        <FileText size={28} color="var(--indigo)" />
                                    </div>
                                    <div className="doc-title">{doc.title}</div>
                                    <div className="doc-subtitle">{doc.subtitle}</div>
                                    <div className="doc-cta">
                                        View Document <ExternalLink size={13} />
                                    </div>
                                </GlassCard>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
