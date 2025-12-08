import { HomePage } from "./Home.jsx";
import { AboutPage } from "./About.jsx";
import { ProjectsPage } from "./Projects.jsx";
import { useScrollContext } from "@/context/ScrollContext.jsx";

import { useNavToggleContextProvider } from "@/context/NavToggleContext.jsx";
import { ReadsPage } from "./Reads.jsx";
import Footer from "../Footer.jsx";

export const MainComp = () => {
    const { HomeRef, AboutRef, ProjectsRef, ReadsRef } = useScrollContext();

    const { toggle } = useNavToggleContextProvider();



    return <main className={`w-full flex flex-col transition-all duration-1000 pb-20 px-4 md:pt-0 md:pb-0 md:pr-18 md:pl-0 ${toggle ? "md:pl-[10vw]" : "md:pl-[13vw]"}`}>
        <div className="lg:py-10" ref={HomeRef} data-section="Home"><HomePage /></div>
        <div className="py-18" ref={AboutRef} data-section="About"><AboutPage /></div>
        <div className="py-10" ref={ProjectsRef} data-section="Projects"><ProjectsPage /></div>
        <div className="py-10" ref={ReadsRef} data-section="Reads"><ReadsPage /></div>
        <Footer />
    </main>
}