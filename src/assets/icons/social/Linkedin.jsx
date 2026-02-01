import React from 'react';

export const LinkedInIcon = ({ className, size = 24, fill = "currentColor", ...props }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={fill}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-4.989 5.432 0v8.306h5v-10.499c0-7.864-8.775-7.625-10.463-3.712v-1.789z" />
    </svg>
);
