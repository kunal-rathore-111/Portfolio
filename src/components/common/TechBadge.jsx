import { cn } from '@/lib/utils';
import ToolTipEffect from '@/components/tooltip';

export function TechBadge({ iconName, Icon, className }) {
    if (!Icon) return null;

    return (
        <span className={cn("size-6", className)}>
            <ToolTipEffect Icon={Icon} name={iconName} />
        </span>
    );
}
