import { cn } from '@/lib/utils';

export function IconLink({ href, icon: Icon, label, className, ...props }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "inline-flex items-center gap-3 px-3 py-1 rounded-lg",
                "text-lg font-light border-1 border-black dark:border-white",
                "transition-colors cursor-pointer",
                "hover:bg-black hover:text-white",
                "dark:hover:bg-white dark:hover:text-black",
                className
            )}
            {...props}
        >
            {Icon && <Icon strokeWidth={1.5} size={20} />}
            <span>{label}</span>
        </a>
    );
}
