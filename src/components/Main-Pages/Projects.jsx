import { PROJECTS, TECH_ICONS } from "@/constants";
import { TechStack } from "@/components/common/TechStack";

import { ProjectContextProvider, useProject } from "@/context/ProjectContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { onhoverBlackWhite } from "@/lib/default_Tailwind";





/* main function of the file */
export const ProjectsPage = () => {
    const [showAllProjects, updateProjectShowCount] = useState(false);
    const ProjectsArray = PROJECTS.slice(0, showAllProjects ? PROJECTS.length : 3);


    return <div className="h-full flex flex-col p-2 ">
        <span className="text-3xl">Projects- </span>
        <div className="flex flex-col">
            {ProjectsArray.map((props, i) => {
                // passing the data in p and the 0 or 1 for condtional alignment 
                const index = i % 2;
                const val = { props, index };
                return <ProjectContextProvider value={val} key={props.id}>
                    <ProjectInfoDiv />
                </ProjectContextProvider>
            })}
        </div>
        <LoadMoreProjects showAllProjects={showAllProjects} updateProjectShowCount={updateProjectShowCount} />
    </div>
}


const ProjectInfoDiv = () => {
    const { index } = useProject();
    return (
        <div className={`flex flex-col md:flex-row items-center ${index ? "md:justify-start" : "md:justify-end"} relative mx-0 md:mx-4 font-light my-10 md:my-20 gap-6 md:gap-0`}>
            <ProjectImageDiv />
            <ProjectTextDiv />
        </div >)
}

const ProjectImageDiv = () => {
    // accessing the project provider data
    const { props } = useProject();
    return (<div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 group w-full md:w-auto">

        <div className="absolute transition-all duration-500 bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-500/40 dark:from-green-500/30 dark:via-emerald-400/25 dark:to-teal-500/30 h-full w-full opacity-40 group-hover:opacity-0 z-10"
        >
        </div>

        <img
            src={props.image}
            alt={props?.topicName || "Project preview"}
            className="h-[30vh] md:h-[52vh] w-full md:w-[44vw] object-cover transition-transform duration-500 group-hover:scale-105"
        />
    </div>)
}

{/* section 1 for the texts like name of project dis and technologies etc */ }

const ProjectTextDiv = () => {
    const { props, index } = useProject();
    return <section className={`w-full md:w-[48vw] ${index ? "md:right-0 md:items-end" : "md:left-0 md:items-start"} flex flex-col justify-center p-0 md:p-4 static md:absolute gap-4 z-10`}>
        <span className="text-2xl md:text-2xl font-semibold md:font-normal">{props?.topicName}</span>
        <ProjectDiscriptionDiv />
    </section >
}



const ProjectDiscriptionDiv = () => {
    const { props, index } = useProject();
    return <div className={`flex flex-col ${index ? "md:items-end" : "md:items-start"} gap-6 ml-0 md:ml-2 w-full`}>

        <div className={`bg-green-400 dark:bg-gray-900 shadow-sm shadow-slate-900 rounded-sm p-4 flex flex-col ${index ? "md:items-end" : "md:items-start"} gap-6 w-full`}  >

            <p className="text-sm md:text-base">{props?.discription}
                {/* extras like the demo email, role and all */}
                {props?.extras ? <p className="whitespace-pre-line mt-2">{props.extras}</p> : ""}
            </p>
            <TechnologyIcons />

        </div >
        <LinksForMoreDiv />
    </div >
}

const TechnologyIcons = () => {
    const { props } = useProject();
    return <TechStack technologies={props.techStack} />;
}

const LinksForMoreDiv = () => {
    const { props } = useProject();
    const GithubIcon = TECH_ICONS.Github;
    const LinkIconComp = TECH_ICONS.Link;
    const ReadmoreIcon = TECH_ICONS.Readmore;


    const onhoverScale = "transition-transform duration-400 hover:scale-125";

    return (
        <div className="flex gap-3 ml-0 md:ml-2">
            <a href={props.github} target="_blank" rel="noopener noreferrer" className={onhoverScale}><GithubIcon /></a>
            <a href={props.deployLink} target="_blank" rel="noopener noreferrer" className={onhoverScale}><LinkIconComp /></a>
            <a href=" need to implement later via useNavigate SPA " className={onhoverScale}><ReadmoreIcon /></a>
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
                            duration: 2.5,
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