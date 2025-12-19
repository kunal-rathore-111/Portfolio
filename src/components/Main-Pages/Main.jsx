import { HomePage } from "./Home.jsx";
import { AboutPage } from "./About.jsx";
import { ProjectsPage } from "./Projects.jsx";
import { useScrollContext } from "@/context/ScrollContext.jsx";
import { useNavToggleContextProvider } from "@/context/NavToggleContext.jsx";
import { ReadsPage } from "./Reads.jsx";
import { ExtrasPage } from "./Extras.jsx";
import Footer from "../Footer.jsx";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const MainComp = () => {
    const { HomeRef, AboutRef, ProjectsRef, ReadsRef } = useScrollContext();
    const { toggle } = useNavToggleContextProvider();
    const lenis = useLenis();
    const location = useLocation();
    const [isRestoring, setIsRestoring] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    // Helper to hide loader with fade
    const hideLoader = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            setIsRestoring(false);
            setIsFadingOut(false);
        }, 300);
    };

    useEffect(() => {
        if (!lenis) return;

        // Helper function to retry scroll until successful or timeout
        const attemptScroll = (target, options = {}, maxAttempts = 20, interval = 100, isRestoreOperation = false) => {
            let attempts = 0;
            const scrollInterval = setInterval(() => {
                attempts++;

                let success = false;

                if (typeof target === 'number') {
                    lenis.scrollTo(target, { immediate: true, ...options });
                    if (attempts >= 5) success = true;
                }
                else if (target instanceof HTMLElement) {
                    lenis.scrollTo(target, { offset: 0, ...options });
                    success = true;
                }

                if (success || attempts >= maxAttempts) {
                    clearInterval(scrollInterval);
                    if (isRestoreOperation) {
                        setTimeout(() => hideLoader(), 100);
                    }
                }
            }, interval);
        };

        // Handle Back Navigation Scroll Restoration
        const savedScroll = sessionStorage.getItem('scrollPosition');
        if (savedScroll) {
            setIsRestoring(true);
            attemptScroll(parseInt(savedScroll), { immediate: true }, 20, 100, true);
            sessionStorage.removeItem('scrollPosition');
            return;
        }

        // Handle Navbar Navigation from other pages
        if (location.state?.scrollTo) {
            setIsRestoring(true); // Show loader immediately
            const label = location.state.scrollTo;
            const refMap = {
                'Home': HomeRef,
                'About': AboutRef,
                'Projects': ProjectsRef,
                'Reads': ReadsRef
            };

            const targetRef = refMap[label];

            // Retry checking for ref.current being populated
            let attempts = 0;
            // Disable browser's auto-restoration early to prevent conflicts
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }

            const checkRefInterval = setInterval(() => {
                attempts++;
                // Ensure ref exists AND has rendered content (height > 0)
                if (targetRef?.current && targetRef.current.offsetHeight > 0) {

                    // Wait 500ms to allow layout/animations to stabilize
                    // This is the "Goldilocks" delay: sufficient for layout, fast enough for user
                    // Wait 200ms to allow layout to stabilize (reduced from 500)
                    setTimeout(() => {
                        if (targetRef.current) {
                            attemptScroll(targetRef.current, { offset: 0, immediate: false }, 1, 0, true);
                        } else {
                            hideLoader();
                        }
                    }, 200);

                    // Clear state
                    window.history.replaceState({}, document.title);
                    clearInterval(checkRefInterval);
                }
                if (attempts >= 20) {
                    clearInterval(checkRefInterval);
                    hideLoader();
                }
            }, 100);
        }

    }, [lenis, location]);

    return <main className={`w-full flex flex-col transition-all duration-1000 pb-20 px-4 md:pt-0 md:pb-0 md:pr-18 md:pl-0 ${toggle ? "md:pl-[10vw]" : "md:pl-[13vw]"}`}>

        {/* Scroll Restoration Loader with Fade */}
        {isRestoring && (
            <div className={`fixed inset-0 z-[9999] bg-white dark:bg-black flex items-center justify-center transition-opacity duration-300 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-t-2 border-b-2 border-slate-900 dark:border-white rounded-full animate-spin"></div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium animate-pulse">Restoring...</span>
                </div>
            </div>
        )}

        <div className="lg:py-10" ref={HomeRef} data-section="Home"><HomePage /></div>
        <div className="py-18" ref={AboutRef} data-section="About"><AboutPage /></div>
        <div className="py-10" ref={ProjectsRef} data-section="Projects"><ProjectsPage /></div>
        <div className="py-10" ref={ReadsRef} data-section="Reads"><ReadsPage /></div>
        <div className="py-10"><ExtrasPage /></div>
        <Footer />
    </main>
}