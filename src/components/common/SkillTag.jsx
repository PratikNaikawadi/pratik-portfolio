import React from 'react';
import * as Icons from 'lucide-react';
import './SkillTag.css';

export function SkillTag({ icon, label }) {
    const Icon = Icons[icon];
    return (
        <span className="skill-tag">
            {Icon && <Icon size={13} color="var(--indigo)" />}
            {label}
        </span>
    );
}
