import { cn } from '@/lib/utils';

export function Card({ children, className, gradient = false, ...props }) {
    return (
        <div
            className={cn(
                "rounded-xl border border-gray-200 dark:border-gray-700",
                "bg-white dark:bg-black/40 shadow-sm p-6",
                "transition hover:shadow-md",
                gradient && "bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 p-1",
                className
            )}
            {...props}
        >
            {gradient ? (
                <div className="bg-white dark:bg-black rounded-lg p-6">
                    {children}
                </div>
            ) : children}
        </div>
    );
}
