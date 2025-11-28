import { cn } from '@/lib/utils';

export function IconLink({ href, icon: Icon, label, className, ...props }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "inline-flex items-center gap-4 px-3 py-2 rounded-2xl",
                "text-lg font-light",
                "transition-colors duration-700 cursor-pointer",
                "bg-black text-white",
                "dark:bg-white dark:text-black",
                "hover:bg-white hover:text-black",
                "dark:hover:bg-black dark:hover:text-white",
                className
            )}
            {...props}
        >
            {Icon && <Icon strokeWidth={1.6} size={25} className="transition-transform duration-400 hover:scale-135" />}

        </a>
    );
}
