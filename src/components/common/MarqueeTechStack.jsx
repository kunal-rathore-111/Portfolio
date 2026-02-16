import { cn } from '@/lib/utils';
import { TECH_ICONS } from '@/constants';
import { TechBadge } from './TechBadge';
import { motion } from 'framer-motion';

// Scrolling marquee for skills
export function MarqueeTechStack({ technologies, className }) {
    // Duplicate the array to ensure seamless looping
    const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

    return (
        <div className={cn(
            "relative flex overflow-hidden",

            "-mx-4 md:mx-0",

            "md:w-full md:rounded-full",
            "bg-[#EDE8DC] dark:bg-gray-700 py-2  items-center md:py-3 items-center",
            className
        )}>
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-[#EDE8DC] dark:from-gray-700 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-[#EDE8DC] dark:from-gray-700 to-transparent z-10" />

            <motion.div
                className="flex gap-4 md:gap-8 px-4"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {duplicatedTechnologies.map((tech, index) => {
                    const Icon = TECH_ICONS[tech];
                    return (
                        <div key={index} className="flex-shrink-0">
                            <TechBadge iconName={tech} Icon={Icon} className="size-10 md:size-14" />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
