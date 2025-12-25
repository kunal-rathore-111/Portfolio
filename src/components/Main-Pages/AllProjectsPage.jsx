import { PROJECTS } from "@/constants";
import { ProjectContextProvider, useProject } from "@/context/ProjectContext";
import { useNavToggleContextProvider } from "@/context/NavToggleContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

export const AllProjectsPage = () => {
    const navigate = useNavigate();
    const lenis = useLenis();

    useEffect(() => {
        // Force scroll to top immediately
        window.scrollTo(0, 0);
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [lenis]);

    const handleBack = () => {
        // Navigate back to home. Main.jsx will handle scroll restoration via sessionStorage
        navigate('/');
    };

    const { toggle } = useNavToggleContextProvider();

    return (
        <div className={`min-h-screen w-full bg-white dark:bg-black text-black dark:text-white p-4 md:py-8 md:pr-8 ${toggle ? "md:pl-[10vw]" : "md:pl-[13vw]"}`}>
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12 pt-4">
                <button
                    onClick={handleBack}
                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-6"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to home
                </button>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-light italic"
                >
                    All <span className="not-italic font-bold">Projects</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-500 dark:text-gray-400 mt-4 text-lg"
                >
                    Showing {PROJECTS.length} of {PROJECTS.length} projects
                </motion.p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20">
                {PROJECTS.map((project, index) => (
                    <ProjectContextProvider key={project.id} value={{ props: project, index }}>
                        <ProjectCard index={index} />
                    </ProjectContextProvider>
                ))}
            </div>

            {/* Simple Footer/Load More Placeholder if needed in future */}
            <div className="flex justify-center pb-12">
                {/* This could be a load more button if pagination is added later */}
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.15), duration: 0.8, ease: "easeOut" }}
            className="group relative flex flex-col h-[500px] rounded-3xl overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-300"
        >
            {/* Image Section - Takes top 60% */}
            <div className="h-[60%] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img
                    src={props.image}
                    alt={props.topicName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                        {props.techStack[0]}
                    </span>
                    {props.techStack[1] && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                            {props.techStack[1]}
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section - Bottom 40% */}
            <div className="flex-1 p-6 flex flex-col justify-between relative z-20">
                {/* Decorative blur */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                    <h3 className="text-2xl font-bold mb-2 line-clamp-1 text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                        {props.topicName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed">
                        {props.discription}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button
                        onClick={handleNavigation}
                        className="text-sm font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black dark:decoration-gray-700 dark:hover:decoration-white transition-all"
                    >
                        Read Case Study
                    </button>

                    <div className="flex gap-3">
                        <a
                            href={props.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:scale-110 transition-transform text-black dark:text-white"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href={props.deployLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:scale-110 transition-transform text-black dark:text-white"
                        >
                            <Globe className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
