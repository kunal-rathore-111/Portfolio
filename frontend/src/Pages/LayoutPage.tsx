import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Nav";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { ScrollContextProvider } from "../contextProvider/scrollContext";

export function LayoutPage() {

    const isDark = useSelector((state: RootState) => state.theme.isDark);
    return <ScrollContextProvider >

        <div className={`min-h-screen transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#1a1a1a]'}`}>

            <div className="fixed top-0 left-0 right-0 z-50">
                <div className="h-2 md:h-3 flex justify-center">
                    <div className="w-full max-w-[950px] h-full backdrop-blur-xl"></div>
                </div>

                <div className={`max-w-[950px] mx-auto transition-colors duration-700 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                    {/* Make sure to pass isDark if your Navbar accepts it, or ensure Navbar uses Redux */}
                    <Navbar />
                </div>
            </div>

            <MainPage />
        </div>

    </ScrollContextProvider>
}

function MainPage() {

    const isDark = useSelector((state: RootState) => state.theme.isDark);
    return <main className="pt-24 md:pt-28 p-4 md:p-8">
        <div className={`max-w-[950px] mx-auto rounded-3xl overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
            <div className="p-6 md:p-12">
                <Outlet />
            </div>
        </div>
    </main>
}