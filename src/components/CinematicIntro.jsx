import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoadingContext } from '@/context/LoadingContext';
import { useDarkMode } from '@/hooks/useDarkMode';
import { SunMedium, Moon } from 'lucide-react';
import { onhoverBlackWhite } from '@/lib/default_Tailwind';

export const CinematicIntro = ({ onComplete }) => {
    // Check sessionStorage BEFORE first render to prevent flash
    const [phase, setPhase] = useState(() => {
        if (typeof window !== 'undefined' && sessionStorage.getItem('introShown')) {
            return 'done';
        }
        return 'welcome'; // 'welcome' | 'name' | 'entering' | 'done'
    });
    const [welcomeIndex, setWelcomeIndex] = useState(0);
    const [minimumTimePassed, setMinimumTimePassed] = useState(false);

    // Get loading state from context
    const { isDataLoaded } = useLoadingContext();

    // Dark mode toggle
    const { isDark, toggle: toggleMode } = useDarkMode();

    // Different welcome variations for the animation
    const welcomeVariations = [
        "Welcome",
        "Welcome.",
        "Welcome..",
        "Welcome...",
        "Welcome....",
        "Welcome.....",
    ];

    // Start phases timer only if showing intro
    useEffect(() => {
        if (phase === 'done') {
            onComplete?.();
            return;
        }
    }, [onComplete, phase]);

    // Animate through welcome variations while in welcome phase
    useEffect(() => {
        if (phase !== 'welcome') return;

        const interval = setInterval(() => {
            setWelcomeIndex(prev => (prev + 1) % welcomeVariations.length);
        }, 350);

        return () => clearInterval(interval);
    }, [phase, welcomeVariations.length]);

    // When data is loaded, switch from welcome to name phase
    useEffect(() => {
        if (phase === 'welcome' && isDataLoaded) {
            // Data loaded, show name
            setPhase('name');
        }
    }, [isDataLoaded, phase]);

    // After 2 seconds in name phase, trigger entering
    useEffect(() => {
        if (phase === 'name') {
            const timer = setTimeout(() => {
                setPhase('entering');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    // Complete the intro after the entering animation
    useEffect(() => {
        if (phase === 'entering') {
            const timer = setTimeout(() => {
                sessionStorage.setItem('introShown', 'true');
                setPhase('done');
                onComplete?.();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [phase, onComplete]);

    const handleSkip = useCallback(() => {
        sessionStorage.setItem('introShown', 'true');
        setPhase('done');
        onComplete?.();
    }, [onComplete]);

    if (phase === 'done') return null;

    return (
        <AnimatePresence mode="wait">
            {phase !== 'done' && (
                <>
                    {/* Main overlay - splits apart like doors opening */}
                    <motion.div
                        className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Left door panel - respects dark mode */}
                        <motion.div
                            className={`absolute top-0 left-0 w-1/2 h-full ${isDark ? 'bg-black' : 'bg-white'}`}
                            initial={{ x: 0 }}
                            animate={phase === 'entering' ? { x: '-100%' } : { x: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.76, 0, 0.24, 1]
                            }}
                        />

                        {/* Right door panel */}
                        <motion.div
                            className={`absolute top-0 right-0 w-1/2 h-full ${isDark ? 'bg-black' : 'bg-white'}`}
                            initial={{ x: 0 }}
                            animate={phase === 'entering' ? { x: '100%' } : { x: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.76, 0, 0.24, 1]
                            }}
                        />

                        {/* Glow line in the middle (appears when doors start opening) */}
                        <motion.div
                            className="absolute top-0 left-1/2 w-px h-full pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={phase === 'entering' ? {
                                opacity: [0, 1, 0],
                                boxShadow: isDark
                                    ? ['0 0 0px rgba(255,255,255,0)', '0 0 60px rgba(255,255,255,0.6)', '0 0 0px rgba(255,255,255,0)']
                                    : ['0 0 0px rgba(0,0,0,0)', '0 0 60px rgba(0,0,0,0.3)', '0 0 0px rgba(0,0,0,0)']
                            } : { opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                background: isDark
                                    ? 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)'
                                    : 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3), transparent)',
                            }}
                        />

                        {/* Text container */}
                        <motion.div
                            className="relative z-10 flex flex-col items-center gap-4"
                            initial={{ opacity: 1, scale: 1 }}
                            animate={phase === 'entering' ? {
                                opacity: 0,
                                scale: 0.8,
                            } : {
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <AnimatePresence mode="wait">
                                {phase === 'welcome' && (
                                    <motion.h1
                                        key="welcome"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className={`text-4xl md:text-7xl font-light tracking-[0.15em] ${isDark ? 'text-white/80' : 'text-black/70'
                                            }`}
                                    >
                                        {welcomeVariations[welcomeIndex]}
                                    </motion.h1>
                                )}

                                {(phase === 'name' || phase === 'entering') && (
                                    <motion.div
                                        key="name"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-center"
                                    >
                                        <h1 className={`text-4xl md:text-7xl font-light tracking-wide ${isDark ? 'text-white/80' : 'text-black/70'
                                            }`}>
                                            It's{' '}
                                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-black'
                                                }`}>
                                                Kunal Rathore
                                            </span>
                                        </h1>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Dark mode toggle - uses same style as main app */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: (phase === 'welcome' || phase === 'name') ? 1 : 0 }}
                            onClick={toggleMode}
                            className={`absolute z-12 right-4 top-4 md:right-10 md:top-5 p-2 shadow-md rounded-lg ${onhoverBlackWhite}`}
                        >
                            {isDark ? <SunMedium strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
                        </motion.button>

                        {/* Skip button - bottom right */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: (phase === 'welcome' || phase === 'name') ? 0.4 : 0 }}
                            whileHover={{ opacity: 0.8 }}
                            onClick={handleSkip}
                            className={`absolute bottom-8 right-8 text-sm tracking-widest uppercase transition-colors flex items-center gap-2 ${isDark ? 'text-white/30 hover:text-white/70' : 'text-black/30 hover:text-black/60'
                                }`}
                        >
                            Skip
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
