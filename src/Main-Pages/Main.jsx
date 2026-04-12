import { HomePage } from "./Home.jsx";
import { AboutPage } from "./About.jsx";
import { ProjectsPage } from "./Projects.jsx";
import { useScrollContext } from "@/context/ScrollContext.jsx";
import { useNavToggleContextProvider } from "@/context/NavToggleContext.jsx";
import { ReadsPage } from "./Reads.jsx";
import { ExtrasPage } from "./Extras.jsx";
import Footer from "../components/Footer.jsx";

export const MainComp = () => {
    const { HomeRef, AboutRef, ProjectsRef, ReadsRef } = useScrollContext();
    const { toggle } = useNavToggleContextProvider();

    return <main className={`w-full flex flex-col items-center transition-all duration-1000 pb-20 px-4 lg:pt-0 lg:pb-0 lg:px-8 md:pt-0 md:pb-0 md:px-10 ${toggle ? "lg:pl-[10vw]" : "lg:pl-[13vw]"}`}>



        <div className="w-full lg:py-10" ref={HomeRef} data-section="Home"><HomePage /></div>
        <div className="w-full max-w-6xl py-18" ref={AboutRef} data-section="About"><AboutPage /></div>
        <div className="w-full max-w-6xl py-10" ref={ProjectsRef} data-section="Projects"><ProjectsPage /></div>
        <div className="w-full max-w-6xl py-10" ref={ReadsRef} data-section="Reads"><ReadsPage /></div>
        <div className="w-full max-w-6xl py-10"><ExtrasPage /></div>
        <Footer />
    </main>
}