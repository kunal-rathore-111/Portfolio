import { useEffect, useState } from 'react';

export function useActiveSection(refs) {
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        let currentSections = new Map();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionName = entry.target.getAttribute('data-section');
                    if (sectionName) {
                        if (entry.isIntersecting) {
                            currentSections.set(sectionName, entry.intersectionRatio);
                        } else {
                            currentSections.delete(sectionName);
                        }
                    }
                });

                // Find the section with the highest intersection ratio
                let maxRatio = 0;
                let mostVisibleSection = 'Home';

                currentSections.forEach((ratio, section) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        mostVisibleSection = section;
                    }
                });

                if (maxRatio > 0) {
                    setActiveSection(mostVisibleSection);
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                rootMargin: '-80px 0px -20% 0px'
            }
        );

        // Observe all section refs
        Object.entries(refs).forEach(([key, ref]) => {
            if (ref?.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            currentSections.clear();
            observer.disconnect();
        };
    }, [refs]);

    return activeSection;
}
