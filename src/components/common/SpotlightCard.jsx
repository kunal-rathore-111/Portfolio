import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const SpotlightCard = ({ children, className }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black",
                className
            )}
        >
            {/* spotlight effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--spotlight-color), 0.15), transparent 40%)`,
                }}
            />

            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--spotlight-color), 0.4), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
};
