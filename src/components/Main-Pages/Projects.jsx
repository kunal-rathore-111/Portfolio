import { PROJECTS, TECH_ICONS } from "@/constants";
import { TechStack } from "@/components/common/TechStack";

import { ProjectContextProvider, useProject } from "@/context/ProjectContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import { onhoverBlackWhite } from "@/lib/default_Tailwind";
import { PageHeader } from "../common/PageHeader";
import { animations } from "@/lib/animations";
import { ArrowUpRight, ArrowRight, Globe, Github, AppWindow } from "lucide-react"; // Using ArrowRight, Globe, Github
import { cn } from "@/lib/utils";


/* main function of the file */
export const ProjectsPage = () => {
    // Initialize state from sessionStorage if available, ensuring it's a boolean
    const [showAllProjects, updateProjectShowCount] = useState(() => {
        const saved = sessionStorage.getItem('showAllProjects');
        return saved === 'true';
    });

    // Update sessionStorage whenever state changes
    const handleUpdateShowCount = (newState) => {
        updateProjectShowCount(newState);
        sessionStorage.setItem('showAllProjects', newState.toString());
    };

    const ProjectsArray = PROJECTS.slice(0, showAllProjects ? PROJECTS.length : 3);


    return <div className="h-full flex flex-col p-2 font-light overflow-x-hidden">


        <div className="flex flex-col gap-4 overflow-x-hidden w-full max-w-full">
            <motion.div {...animations.fadeInUp}>
                <PageHeader val={'02.'} subheading={"Some Things"} mainHeading={"I've Built"} />
            </motion.div>
            {ProjectsArray.map((props, i) => {
                const index = i % 2;
                const val = { props, index };
                return <ProjectContextProvider value={val} key={props.no}>
                    <ProjectInfoDiv />
                </ProjectContextProvider>
            })}
        </div>
        <LoadMoreProjects showAllProjects={showAllProjects} updateProjectShowCount={handleUpdateShowCount} />
    </div >
}


/* 
   Container: Uses the 'Wireframe' Outer Card style (Glassmorphism/Bento) 
   Layout: Forced Image Left (2/3), Info Right (1/3)
*/
const ProjectInfoDiv = () => {
    const { index, props } = useProject();

    return (
        <motion.div {...animations.fadeInUp} className="max-w-6xl w-full mx-auto p-2 md:p-4 my-8 md:my-16">
            <div className={cn(
                "bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-4 md:p-6 shadow-2xl border-3 border-gray-100 dark:border-white/10 flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl dark:hover:shadow-emerald-500/5",
                index === 0 ? "md:flex-row items-center" : "md:flex-row-reverse items-center"
            )}>
                {/* Decorative background blur */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 dark:bg-red-900/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 dark:bg-slate-900/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                {/* --- IMAGE SECTION (Left, 2/3) --- */}
                {/* Added justify-center to vertically center the image if the text column is taller */}
                <div className="w-full md:w-2/3 flex flex-col justify-center gap-4 relative group">
                    <ProjectImageDiv />
                </div>

                {/* --- INFO SECTION (Right, 1/3) --- */}
                {/* Added justify-between to push Links to the bottom */}
                <div className="w-full md:w-1/3 flex flex-col justify-between gap-6">

                    {/* Top Group: Description + Tech Stack */}
                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <div>
                            <span className="text-2xl md:text-2xl text-slate-900 dark:text-gray-300">
                                <span className="pr-1 text-red-500 dark:text-yellow-300">{props?.no}.</span>
                                {props?.topicName}
                            </span>
                        </div>

                        {/* Description Box from Previous (bg-green-400 etc) */}
                        <div className={`bg-green-400 dark:bg-gray-900 shadow-sm shadow-slate-900 rounded-sm p-4 flex flex-col md:items-start gap-5 w-full`}>
                            <p className="text-sm md:text-base text-black dark:text-white">
                                {props?.discription}
                                {/* Restored Role/Extras Logic */}
                                {props?.extras && (
                                    <span>
                                        <br />
                                        <span className="inline-block mt-3 p-2 bg-amber-50 dark:bg-gray-800 border-l-4 border-amber-500 dark:border-emerald-500 rounded-md">
                                            <span className="flex items-start gap-2">
                                                <span className=" text-xs md:text-sm font-mono text-amber-900 dark:text-gray-100">
                                                    <span className="whitespace-pre-line opacity-90 block">{props.extras}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                )}
                            </p>
                        </div>

                        {/* Tech Stack moved UP to be with Description */}
                        <TechnologyIcons />
                    </div>

                    {/* Bottom Group: Links Only */}
                    <div>
                        <LinksForMoreDiv />
                    </div>

                </div>
            </div >
        </motion.div >)
}

const ProjectImageDiv = () => {
    const { props } = useProject();
    return (<div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 group h-full">
        {/* Previous Gradient Logic: z-20 overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-red-500/40 to-blue-500/40 dark:from-green-500/30 dark:via-emerald-400/25 dark:to-teal-500/30 z-20 transition-opacity duration-500 md:group-hover:opacity-0 pointer-events-none mix-blend-multiply dark:mix-blend-overlay"></div>

        <img
            src={props.image}
            alt={props?.topicName || "Project preview"}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover z-10 transition-transform duration-500 md:group-hover:scale-105"
        />
    </div>)
}


const TechnologyIcons = () => {
    const { props } = useProject();
    return <TechStack technologies={props.techStack} />;
}

/* Reverted to Simple Icons + AppWindow */
const LinksForMoreDiv = () => {
    const { props } = useProject();
    const navigate = useNavigate();
    const lenis = useLenis();
    const GithubIcon = TECH_ICONS.Github;
    const ReadmoreIcon = TECH_ICONS.Readmore;

    const onhoverScale = "transition-transform duration-400 hover:scale-125";

    const handleNavigation = () => {
        // Save current scroll position
        const scrollPos = window.scrollY;
        sessionStorage.setItem('scrollPosition', scrollPos.toString());

        navigate(`/project/${props.id}`);
    }

    return (
        <div className="flex gap-3 ml-0 md:ml-2 flex items-center">
            <a href={props.github} target="_blank" rel="noopener noreferrer" className={onhoverScale}><GithubIcon /></a>
            <a href={props.deployLink} target="_blank" rel="noopener noreferrer" className={onhoverScale}><Globe className="w-6 h-6" /></a>

            {/* Share / Learn More - Pill Button */}
            <button
                onClick={handleNavigation}
                className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors ml-auto md:ml-0"
            >
                Learn more
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    )
}


const LoadMoreProjects = ({ showAllProjects, updateProjectShowCount }) => {
    return <div className="flex justify-center relative mt-10">
        <div className=" group ">
            {showAllProjects ? null :
                <div>
                    <button className={`cursor-pointer ring-2 px-3 text-sm md:text-lg font-semibold  py-1 rounded-xl ${onhoverBlackWhite} `}
                        onClick={() => { updateProjectShowCount(!showAllProjects) }}>
                        More Projects</button>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 100, }}
                        animate={{ y: [0, -7, 1] }}
                        transition={{
                            duration: 3.2,
                            y: { duration: 0.98, repeat: Infinity }
                        }}
                        className="absolute bottom-10 transform -translate-x-1/2 left-1/2 text-2xl font-extrabold "
                        viewport={{ once: true, amount: 'all' }}
                    >
                        ⇣
                    </motion.span>
                </div>}
        </div>
    </div>
}
