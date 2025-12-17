import React, { useRef, useState } from 'react';
import { ArrowUpRight, Github, Play, Plus, ArrowRight, CirclePlay, Globe } from 'lucide-react';

const SpotlightCard = ({ children, className = "" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black ${className.replace('bg-white', '').replace('rounded-2xl', '').replace('border', '').replace('border-gray-100', '')}`}
        >
            {/* Spotlight Gradient Background */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--spotlight-color), 0.15), transparent 40%)`,
                }}
            />

            {/* Spotlight Border */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--spotlight-color), 0.4), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
};

const WireframeCard = () => {
    return (
        <div className="max-w-5xl w-full mx-auto p-8">
            <div className="bg-white dark:bg-black rounded-[2rem] p-6 shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

                {/* LEFT SECTION - Image & Heading */}
                <div className="w-full md:w-2/3 flex flex-col gap-4 relative group">
                    <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-1 relative overflow-hidden min-h-[400px]">
                        {/* Main Image Area */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                            {/* Placeholder for Image */}
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                                alt="Project Preview"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />



                            {/* Redirect Icon to Full Post (Main Area) */}
                            {/* Redirect Icon to Full Post (Main Area) */}
                            <a href="#" className="absolute top-8 right-8 w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg text-gray-900 dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition-colors duration-300">
                                <ArrowUpRight className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Bottom Heading Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 dark:border-gray-800/50 flex justify-between items-center transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Project Title Heading</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Brief subtitle or category</p>
                            </div>
                            <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <ArrowUpRight className="w-5 h-5 text-gray-700 dark:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION - Info & Actions */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">

                    {/* Top Box: Rolling Icon + Text - with Spotlight Effect */}
                    <SpotlightCard className="flex-1 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 p-6 relative shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Feature Highlights</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                Here is a descriptive paragraph about the project functionalities. It highlights the core features, tech stack, and the unique value proposition. The card reacts to hover interactions for a dynamic feel.
                            </p>
                        </div>
                    </SpotlightCard>

                    {/* Bottom Box: Deployment & Links */}
                    <div className="flex flex-col justify-between gap-6 p-6 shadow-sm hover:shadow-md transition-shadow group/box2 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">

                        <div className="flex flex-col gap-4 relative z-10">
                            <div className="flex items-center gap-2 bg-red-50 dark:bg-yellow-400 px-3 py-1.5 rounded self-start">
                                {/* Dot Removed */}
                                <span className="text-sm font-normal text-red-500 dark:text-black">- Role Backend Developer</span>
                            </div>

                            {/* New Container from Diagram */}
                            <div className="w-full h-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl"></div>
                        </div>

                        <div className="flex items-center border-t border-gray-100 dark:border-gray-800 pt-4 relative z-10">
                            <div className="flex items-center justify-center gap-3 w-full">
                                <a href="#" className="group inline-flex items-center gap-4 px-4 py-2 rounded-3xl text-lg font-light transition-colors duration-700 cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border border-transparent hover:border-black dark:hover:border-white" title="View Code on GitHub">
                                    <Github className="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110" />
                                </a>
                                <a href="#" className="group inline-flex items-center gap-4 px-4 py-2 rounded-3xl text-lg font-light transition-colors duration-700 cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border border-transparent hover:border-black dark:hover:border-white" title="Live Preview">
                                    <Globe className="w-6 h-6 fill-none transition-transform duration-300 group-hover:scale-110" />
                                </a>
                                <button className="flex items-center gap-2 text-sm font-bold bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all shadow-sm inline whitespace-nowrap hover:shadow-md">
                                    Learn more
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default WireframeCard;
