import { PROJECTS } from "@/constants";
import { ProjectContextProvider, useProject } from "@/context/ProjectContext";
import { useNavToggleContextProvider } from "@/context/NavToggleContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Globe, ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

export const AllProjectsPage = () => {
    const navigate = useNavigate();
    const lenis = useLenis();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [lenis]);

    const handleBack = () => {
        navigate('/');
    };

    const { toggle } = useNavToggleContextProvider();

    return (
        <div className={`transition-all duration-700 min-h-screen w-full bg-[#fcfcfc] dark:bg-[#050505] text-black dark:text-white p-4 md:py-12 md:pr-12 ${toggle ? "md:pl-[10vw]" : "md:pl-[13vw]"}`}>
            {/* header section */}
            <div className="max-w-7xl mx-auto mb-16 pt-8">
                <button
                    onClick={handleBack}
                    className="group flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors duration-500 mb-8"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-500" />
                    Back to home
                </button>

                <div className="flex flex-col gap-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
                    >
                        My Works
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl font-light leading-relaxed"
                    >
                        A curated collection of projects exploring web development, design systems, and interactive experiences.
                    </motion.p>
                </div>
            </div>

            {/* grid layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
                {PROJECTS.map((project, index) => (
                    <ProjectContextProvider key={project.id} value={{ props: project, index }}>
                        <ProjectCard index={index} />
                    </ProjectContextProvider>
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ index }) => {
    const { props } = useProject();
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/project/${props.id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group flex flex-col gap-4 cursor-pointer"
            onClick={handleNavigation}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 shadow-sm transition-all duration-700 ease-out group-hover:shadow-2xl dark:group-hover:shadow-emerald-900/10">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-700 ease-out z-10" />
                <img
                    src={props.image}
                    alt={props.topicName}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-110"
                />

                {/* Floating link icon */}
                <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                    <div className="p-3 bg-white dark:bg-black rounded-full shadow-lg">
                        <ArrowUpRight className="w-5 h-5 text-black dark:text-white" />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-yellow-400 transition-colors duration-500">
                        {props.topicName}
                    </h3>
                    <div className="flex gap-2">
                        {props.github && (
                            <a
                                href={props.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {props.deployLink && (
                            <a
                                href={props.deployLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {props.discription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {props.techStack.slice(0, 3).map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                        >
                            {tech}
                        </span>
                    ))}
                    {props.techStack.length > 3 && (
                        <span className="text-xs px-2.5 py-1 text-zinc-400 dark:text-zinc-500">
                            +{props.techStack.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
