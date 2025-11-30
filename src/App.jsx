import { BrowserRouter, Routes, Route } from "react-router-dom"

// files
import { Nav } from "./components/Header-Nav/nav.jsx";
//icons 
import { SunMedium, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

import { ReactLenis, useLenis } from "lenis/react";

function ScrollHandler() {
    useLenis((lenis) => { })
}

import { ErrorPage } from "./components/Main-Pages/ErrorPage.jsx";
import { MainComp } from "./components/Main-Pages/Main.jsx";
import { ScrollContextProvider } from "./context/ScrollContext.jsx";
import { NavToggleContextProvider } from "./context/NavToggleContext.jsx";
import Oneko from "./components/Oneko.jsx"; // existing import
import ChatBubble from "./components/ChatBubble.jsx"; // chatbot component
import { onhoverBlackWhite } from "./lib/default_Tailwind.js";

export default function App() {

    const { isDark, toggle: toggleMode } = useDarkMode();

    return (
        <BrowserRouter>
            <ReactLenis root options={{ smoothWheel: true, duration: 3.7 }} >
                <ScrollHandler />
                {/*  <Oneko /> */}
                {/* Chatbot floating widget */}
                <ChatBubble />
                <div className="w-screen flex box-border ">

                    {/* dark mode toggle button */}
                    <button className={`fixed z-12  right-4 top-4 md:right-10 md:top-5 p-2 shadow-md rounded-lg ${onhoverBlackWhite}`}
                        onClick={toggleMode}>
                        {isDark ? <SunMedium strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
                    </button>

                    <ScrollContextProvider>
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
                                <Route path="/*" element={<ErrorPage />} />
                            </Routes>
                        </NavToggleContextProvider>
                    </ScrollContextProvider>

                </div >
            </ReactLenis >
        </BrowserRouter >

    )


}

