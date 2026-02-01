import { cn } from '@/lib/utils';

// simple heading styling
export function SectionHeading({ children, className, ...props }) {
    return (
        <h2
            className={cn("text-3xl font-normal", className)}
            {...props}
        >
            {children}
        </h2>
    );
}
