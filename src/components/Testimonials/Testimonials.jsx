import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import './Testimonials.css';

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;
    const intervalRef = useRef(null);

    const go = (i) => setCurrent((i + total) % total);
    const next = () => go(current + 1);
    const prev = () => go(current - 1);

    // Auto-advance
    useEffect(() => {
        intervalRef.current = setInterval(next, 5000);
        return () => clearInterval(intervalRef.current);
    }, [current]);

    // Touch swipe
    const touchStart = useRef(0);
    const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    };

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="testimonials-container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader label="Testimonials" title='What <strong>Others</strong> Say' center />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div
                        className="slider-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className="slider-slide">
                                    <GlassCard className="testimonial-card">
                                        <div className="stars">★★★★★</div>
                                        <p className="testimonial-quote">{t.quote}</p>
                                        <div className="testimonial-author">
                                            <div className="avatar">{t.initials}</div>
                                            <div>
                                                <div className="author-name">{t.name}</div>
                                                <div className="author-role">{t.role}</div>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="slider-controls">
                        <button className="slider-btn" onClick={prev} aria-label="Previous">
                            <ChevronLeft size={18} />
                        </button>
                        <div className="dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`dot ${i === current ? 'active' : ''}`}
                                    onClick={() => go(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button className="slider-btn" onClick={next} aria-label="Next">
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
