import React from 'react';
import './SectionHeader.css';

export function SectionHeader({ label, title, center = false, style }) {
    return (
        <div className={`section-header${center ? ' section-header--center' : ''}`} style={style}>
            <p className="section-label">{label}</p>
            <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
    );
}
