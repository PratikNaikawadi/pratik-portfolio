import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Github } from 'lucide-react';
import { person } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import './Contact.css';

const WEB3FORMS_KEY = '492a1b03-0790-43b9-8bab-f277d61a43f3';

const contactItems = [
    { icon: Mail, label: 'Email', value: person.email, href: `mailto:${person.email}` },
    { icon: MapPin, label: 'Location', value: person.location, href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pratik-n-42035918a', href: person.linkedinUrl },
    { icon: Github, label: 'GitHub', value: 'github.com/PratikNaikawadi', href: person.githubUrl },
];

const INIT = { firstName: '', lastName: '', email: '', subject: '', message: '' };

export function Contact() {
    const [form, setForm] = useState(INIT);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: `${form.firstName} ${form.lastName}`.trim(),
                    email: form.email,
                    subject: form.subject || 'Portfolio Contact',
                    message: form.message,
                    // Where replies go:
                    from_name: 'Portfolio Contact Form',
                }),
            });

            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setForm(INIT);
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65 }}
                >
                    <SectionHeader label="Get In Touch" title="Let's <strong>Work</strong> Together" />
                    <p className="contact-intro">
                        Whether you need a BA to untangle complex requirements or a PM to lead a critical initiative — I'd love to connect.
                    </p>
                    <div className="contact-info">
                        {contactItems.map(({ icon: Icon, label, value, href }) => (
                            <div key={label} className="contact-item">
                                <div className="contact-icon-wrap">
                                    <Icon size={20} color="var(--indigo)" />
                                </div>
                                <div>
                                    <div className="contact-label">{label}</div>
                                    {href ? (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="contact-value contact-link">{value}</a>
                                    ) : (
                                        <div className="contact-value">{value}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                >
                    <GlassCard className="form-card">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input name="firstName" type="text" className="form-input" placeholder="Jane" value={form.firstName} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input name="lastName" type="text" className="form-input" placeholder="Smith" value={form.lastName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email *</label>
                                <input name="email" type="email" className="form-input" placeholder="jane@company.com" value={form.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input name="subject" type="text" className="form-input" placeholder="Project Inquiry" value={form.subject} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message *</label>
                                <textarea name="message" className="form-input" placeholder="Tell me about your project and timeline..." value={form.message} onChange={handleChange} required />
                            </div>

                            <button
                                type="submit"
                                className={`btn-primary submit-btn ${status === 'success' ? 'sent' : ''} ${status === 'error' ? 'error' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' && <><span className="spinner" /> Sending…</>}
                                {status === 'success' && <><CheckCircle size={16} /> Message Sent!</>}
                                {status === 'error' && <><AlertCircle size={16} /> Failed — Try Again</>}
                                {status === 'idle' && <><Send size={16} /> Send Message</>}
                            </button>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
