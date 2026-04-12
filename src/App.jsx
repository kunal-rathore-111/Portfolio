import { BrowserRouter, Routes, Route } from "react-router-dom"

// files
import { Nav } from "./components/Header-Nav/nav.jsx";
//icons 
import { SunMedium, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";


import { MainComp } from "./Main-Pages/Main.jsx";
import { ErrorPage } from "./Main-Pages/ErrorPage.jsx";
import { ProjectInfoPage } from "./Main-Pages/ProjectInfoPage.jsx";
import { ScrollContextProvider } from "./context/ScrollContext.jsx";
import { NavToggleContextProvider } from "./context/NavToggleContext.jsx";

import ChatBubble from "./components/ChatBubble.jsx"; // chatbot component
import { onhoverBlackWhite } from "./lib/default_Tailwind.js";
import { TooltipProvider } from "./components/ui/tooltip.jsx";

import { ReadDetail } from "./Main-Pages/ReadDetail.jsx";
import { AllProjectsPage } from "./Main-Pages/AllProjectsPage.jsx";


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {

    const { isDark, toggle: toggleMode } = useDarkMode();

    return (
        <QueryClientProvider client={queryClient}>

            <BrowserRouter>


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
                                        <div className="w-full flex flex-col text-black bg-white dark:text-white dark:bg-black">
                                            <MainComp />
                                        </div>
                                    } />
                                    <Route path="/project/:id" element={<ProjectInfoPage />} />
                                    <Route path="/all-projects" element={<AllProjectsPage />} />
                                    <Route path="/read/:id" element={<ReadDetail />} />
                                    <Route path="/*" element={<ErrorPage />} />
                                </Routes>

                            </NavToggleContextProvider>
                        </TooltipProvider>
                    </ScrollContextProvider>
                </div>
            </BrowserRouter >

        </QueryClientProvider>
    )


}

