import { cn } from '@/lib/utils';
import ToolTipEffect from '@/components/tooltip';

// badge for skills
export function TechBadge({ iconName, Icon, className }) {
    if (!Icon) return null;

    return (
        <span className={cn("size-6", "transition-transform duration-400 hover:scale-125", className)}>
            <ToolTipEffect Icon={Icon} name={iconName} />
        </span>
    );
}
