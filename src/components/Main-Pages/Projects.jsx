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
import { ArrowRight, Globe, Github } from "lucide-react"; // Using ArrowRight, Globe, Github
import { cn } from "@/lib/utils";


// main projects page
export const ProjectsPage = () => {
    // Initialize state from sessionStorage if available, ensuring it's a boolean
    const navigate = useNavigate();


    const ProjectsArray = PROJECTS.slice(0, 2);


    return <div className="h-full flex flex-col p-2 font-light overflow-x-hidden">


        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        duration: 0.1,
                        staggerChildren: 0.0, // Start together
                    }
                }
            }}
            className="flex flex-col gap-4 overflow-x-hidden w-full max-w-full"
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                }}
            >
                <PageHeader val={'02.'} subheading={"Some Things"} mainHeading={"I've Built"} />
            </motion.div>
            {ProjectsArray.map((props, i) => {
                const index = i % 2;
                const val = { props, index };
                return <ProjectContextProvider value={val} key={props.no}>
                    <ProjectInfoDiv />
                </ProjectContextProvider>
            })}
        </motion.div>
        <div className="flex justify-center mt-10">
            <button
                onClick={() => {
                    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                    navigate('/all-projects');
                }}
                className={`group relative px-6 py-3 text-lg font-medium overflow-hidden rounded-full transition-all duration-700 ease-out ${onhoverBlackWhite} border border-black dark:border-white`}
            >
                <span className="relative z-10 flex items-center gap-2">
                    Show All Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-700 ease-out" />
                </span>
            </button>
        </div>
    </div >
}


/* 
   Container: Uses the 'Wireframe' Outer Card style (Glassmorphism/Bento) 
   Layout: Forced Image Left (2/3), Info Right (1/3)
*/
const ProjectInfoDiv = () => {
    const { index, props } = useProject();

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="max-w-6xl w-full mx-auto p-2 md:p-4 my-8 md:my-16"
        >
            <div className={cn(
                "bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-4 md:p-6 shadow-2xl border-3 border-gray-100 dark:border-white/10 flex flex-col gap-6 relative overflow-hidden transition-all duration-700 ease-out hover:shadow-2xl dark:hover:shadow-emerald-500/5",
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
    return (<div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 group h-full w-full aspect-video">
        {/* Previous Gradient Logic: z-20 overlay */}
        <div className="absolute inset-0 bg-black/0 dark:bg-gradient-to-br dark:from-green-500/30 dark:via-emerald-400/25 dark:to-teal-500/30 z-20 transition-opacity duration-700 ease-out md:group-hover:opacity-0 pointer-events-none mix-blend-multiply dark:mix-blend-overlay"></div>

        <img
            src={props.image}
            alt={props?.topicName || "Project preview"}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover z-10 transition-transform duration-1000 ease-out md:group-hover:scale-110"
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
                className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors duration-500 ease-out ml-auto md:ml-0"
            >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
        </div>
    )
}



