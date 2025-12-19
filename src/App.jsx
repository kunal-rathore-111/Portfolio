import { BrowserRouter, Routes, Route } from "react-router-dom"

// files
import { Nav } from "./components/Header-Nav/nav.jsx";
//icons 
import { SunMedium, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

import { ReactLenis, useLenis } from "lenis/react";
import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";



// Spring wrapper component for overscroll effect
function SpringWrapper({ children }) {
    const y = useSpring(0, { stiffness: 300, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const handleWheel = (e) => {
            // Optimization: Check direction first to avoid unnecessary layout reads
            if (e.deltaY === 0) return;

            const scrollTop = window.scrollY;

            // At top - trying to scroll up
            if (scrollTop === 0 && e.deltaY < 0) {
                e.preventDefault();
                const stretch = Math.min(Math.abs(e.deltaY) * 0.7, 150);
                y.set(stretch);
                setTimeout(() => y.set(0), 100);
                return;
            }

            // At bottom - trying to scroll down
            // Only read layout properties if we are scrolling down
            if (e.deltaY > 0) {
                const clientHeight = window.innerHeight;
                const scrollHeight = document.documentElement.scrollHeight;

                if (scrollTop + clientHeight >= scrollHeight - 2) {
                    e.preventDefault();
                    const stretch = Math.min(e.deltaY * 0.7, 150);
                    y.set(-stretch);
                    setTimeout(() => y.set(0), 100);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [y]);

    return <motion.div style={{ y, width: '100%' }}>{children}</motion.div>;
}

import { MainComp } from "./components/Main-Pages/Main.jsx";
import { ErrorPage } from "./components/Main-Pages/ErrorPage.jsx";
import { ProjectInfoPage } from "./components/Main-Pages/ProjectInfoPage.jsx";
import { ScrollContextProvider } from "./context/ScrollContext.jsx";
import { NavToggleContextProvider } from "./context/NavToggleContext.jsx";

import ChatBubble from "./components/ChatBubble.jsx"; // chatbot component
import { onhoverBlackWhite } from "./lib/default_Tailwind.js";
import { TooltipProvider } from "./components/tooltip.jsx";

import { ReadDetail } from "./components/Main-Pages/ReadDetail.jsx";
import { AllProjectsPage } from "./components/Main-Pages/AllProjectsPage.jsx";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {

    const { isDark, toggle: toggleMode } = useDarkMode();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ReactLenis root options={{
                    smoothWheel: true,
                    duration: 3.65,
                    infinite: false,
                    gestureOrientation: 'vertical',
                    smoothTouch: false,
                    touchMultiplier: 2
                }} >


                    {/* Chatbot floating widget */}
                    <ChatBubble />
                    <div className="w-screen flex box-border ">

                        {/* dark mode toggle button */}
                        <button className={`fixed z-12  right-4 top-4 md:right-10 md:top-5 p-2 shadow-md rounded-lg ${onhoverBlackWhite}`}
                            onClick={toggleMode}>
                            {isDark ? <SunMedium strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
                        </button>

                        <ScrollContextProvider>
                            <TooltipProvider>
                                {/* navbar */}
                                <NavToggleContextProvider>
                                    <Nav></Nav>

                                    {/* Main pages*/}
                                    <Routes>
                                        <Route path="/" element={
                                            <SpringWrapper>
                                                <div className="w-full flex flex-col text-black bg-white dark:text-white dark:bg-black">
                                                    <MainComp />
                                                </div>
                                            </SpringWrapper>
                                        } />
                                        <Route path="/project/:id" element={<ProjectInfoPage />} />
                                        <Route path="/all-projects" element={<AllProjectsPage />} />
                                        <Route path="/read/:id" element={<ReadDetail />} />
                                        <Route path="/*" element={<ErrorPage />} />
                                    </Routes>
                                </NavToggleContextProvider>
                            </TooltipProvider>
                        </ScrollContextProvider>

                    </div >
                </ReactLenis >
            </BrowserRouter >
        </QueryClientProvider>
    )


}

