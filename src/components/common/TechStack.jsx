import { cn } from '@/lib/utils';
import { TECH_ICONS } from '@/constants';
import { TechBadge } from './TechBadge';

export function TechStack({ technologies, className }) {
    return (
        <div className={cn(
            "flex justify-start gap-4 bg-[#EDE8DC] dark:bg-gray-700",
            "w-fit p-2 rounded px-3 py-1.5",
            className
        )}>
            {technologies.map((tech) => {
                const Icon = TECH_ICONS[tech];
                return <TechBadge key={tech} iconName={tech} Icon={Icon} />;
            })}
        </div>
    );
}
