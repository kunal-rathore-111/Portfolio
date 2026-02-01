import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS_INFO } from "@/constants";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";
import { ArrowLeft, Github, Globe, ExternalLink } from "lucide-react";
import { HighLightText } from "../common/HighLightText";
import { TechStack } from "../common/TechStack";
import { useEffect } from "react";

export const ProjectInfoPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = PROJECTS_INFO[id];

    const lenis = useLenis();

    // scroll to top
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [lenis, id]);

    if (!project) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center gap-4 text-slate-900 dark:text-white">
                <h1 className="text-4xl font-bold">Project Not Found</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white dark:text-black text-white rounded-full transition-all hover:scale-105"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white dark:bg-black text-slate-900 dark:text-gray-100 font-light overflow-x-hidden pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col gap-12">

                {/* Back Button */}
                <motion.button
                    {...animations.fadeInUp}
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 self-start text-sm md:text-base font-medium opacity-60 hover:opacity-100 transition-all duration-500 ease-out hover:-translate-x-2 p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-500" /> Back to Projects
                </motion.button>

                {/* Header Section */}
                <div className="flex flex-col gap-6">
                    <motion.div {...animations.fadeInUp} className="flex flex-col gap-2">
                        <span className="text-xs md:text-sm font-mono text-slate-500 dark:text-slate-400">
                            + {project.role}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
                            {project.tagline}
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div {...animations.fadeInUp} className="flex flex-wrap gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white dark:text-black text-white rounded-full font-medium transition-all duration-500 ease-out hover:scale-105 active:scale-95 shadow-lg shadow-black/10 dark:shadow-white/5 hover:bg-slate-800 dark:hover:bg-gray-200">
                            <Github className="w-5 h-5 transition-transform duration-500" /> View on GitHub
                        </a>
                        <a href={project.deployLink} target="_blank" rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white dark:text-black text-white rounded-full font-medium transition-all duration-500 ease-out hover:scale-105 active:scale-95 shadow-lg shadow-black/10 dark:shadow-white/5 hover:bg-slate-800 dark:hover:bg-gray-200">
                            <ExternalLink className="w-5 h-5 transition-transform duration-500" /> View Live Demo
                        </a>
                    </motion.div>
                </div>

                {/* Main Feature Image */}
                <motion.div
                    {...animations.fadeInUp}
                    className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 group bg-gray-50 dark:bg-gray-900"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </motion.div>

                {/* Content Sections */}
                <div className="flex flex-col gap-16 text-lg md:text-xl leading-relaxed">

                    {/* Description */}
                    <motion.section {...animations.fadeInUp}>
                        <p>{project.description}</p>
                    </motion.section>

                    {/* Key Features */}
                    <motion.section {...animations.fadeInUp} className="flex flex-col gap-6">
                        <h2 className="text-2xl font-bold">Key Features:</h2>
                        <div className="flex flex-col gap-8">
                            {project.keyFeatures.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                                        {feature.title}:
                                    </h3>
                                    <p className="opacity-90">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* My Role */}
                    <motion.section {...animations.fadeInUp} className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">My Role:</h2>
                        <p className="opacity-90">
                            {project.roleDetails.split(' ').map((word, i) => {
                                // highlight specific words
                                const importantWords = ["architected", "led", "responsible", "design", "scalability", "performance", "backend", "frontend", "full-stack", "designed"];
                                const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
                                if (importantWords.includes(cleanWord)) {
                                    return <span key={i}><HighLightText text={word} /> </span>;
                                }
                                return word + " ";
                            })}
                        </p>
                    </motion.section>

                    {/* Technical Highlights */}
                    <motion.section {...animations.fadeInUp} className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Technical Highlights:</h2>
                        <p className="opacity-90">
                            {project.technicalHighlights}
                        </p>
                    </motion.section>

                    {/* Impact */}
                    <motion.section {...animations.fadeInUp} className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Impact:</h2>
                        <p className="opacity-90">
                            {project.impact}
                        </p>
                    </motion.section>

                </div>

                {/* Footer Back Button */}
                <hr className="border-gray-100 dark:border-white/10" />
                <motion.button
                    {...animations.fadeInUp}
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 self-start text-sm md:text-base font-medium opacity-60 hover:opacity-100 transition-all duration-500 ease-out hover:-translate-x-2"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-500" /> Back to Projects
                </motion.button>
            </div>
        </div>
    );
};
