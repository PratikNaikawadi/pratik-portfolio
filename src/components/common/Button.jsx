import React from 'react';
import './Button.css';

export function ButtonPrimary({ children, href, onClick, style }) {
    if (href) {
        return (
            <a href={href} className="btn-primary" style={style}>
                {children}
            </a>
        );
    }
    return (
        <button className="btn-primary" onClick={onClick} style={style}>
            {children}
        </button>
    );
}

export function ButtonSecondary({ children, href, onClick }) {
    if (href) {
        return (
            <a href={href} className="btn-secondary">
                {children}
            </a>
        );
    }
    return (
        <button className="btn-secondary" onClick={onClick}>
            {children}
        </button>
    );
}
