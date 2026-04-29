import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, ExternalLink } from "lucide-react";
import { useNavToggleContextProvider } from "@/context/NavToggleContext";
import { ACHIEVEMENTS } from "@/constants/achievements";
import { CertificateCard } from "@/components/CertificateCard";

export const AllCertificatesPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selected]);

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
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        My Certificates
                    </h1>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl font-light leading-relaxed">
                        A collection of honors, professional certifications, and achievements.
                    </p>
                </div>
            </div>

            {/* grid layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24">
                {ACHIEVEMENTS.map((ach) => (
                    <CertificateCard 
                        key={ach.id} 
                        ach={ach} 
                        onClick={() => setSelected(ach)} 
                    />
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelected(null)}
                    ></div>
                    
                    <div className="relative bg-white dark:bg-[#0a0a0a] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col transform transition-all animate-in fade-in zoom-in-95 duration-300 border border-gray-200 dark:border-white/10">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/10">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 pr-8">
                                {selected.title}
                            </h3>
                            <button 
                                onClick={() => setSelected(null)}
                                className="p-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-full transition-colors text-slate-900 dark:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        {/* Image Preview */}
                        <div className="w-full bg-gray-50 dark:bg-zinc-900/50 aspect-[4/3] md:aspect-video flex items-center justify-center overflow-hidden p-4">
                            <img 
                                src={selected.image} 
                                alt={selected.title}
                                className="w-full h-full object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Footer */}
                        <div className="p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/10">
                            <div className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
                                Issued by <span className="font-semibold text-slate-900 dark:text-white">{selected.organization}</span> in {selected.year}
                            </div>
                            <a 
                                href={selected.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                            >
                                Verify Certificate
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
