import React, { useState } from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { ExternalLink, X, ArrowRight } from "lucide-react";
import { ACHIEVEMENTS } from '@/constants/achievements';
import { CertificateCard } from '../components/CertificateCard';
import { useNavigate } from 'react-router-dom';

export function AchievementsPage() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

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

    return (
        <section className="h-full w-full flex flex-col p-2 font-light overflow-x-hidden">
            <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <PageHeader val={'04.'} subheading={"Honors &"} mainHeading={"Achievements"} />
                    </div>
                    
                    <button
                        onClick={() => navigate('/all-certificates')}
                        className="group flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-black dark:text-white"
                    >
                        View All Certificates
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                    {ACHIEVEMENTS.slice(0, 4).map((ach) => (
                        <CertificateCard 
                            key={ach.id} 
                            ach={ach} 
                            onClick={() => setSelected(ach)} 
                        />
                    ))}
                </div>
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
        </section>
    );
}