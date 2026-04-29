import React from 'react';
import { ExternalLink } from "lucide-react";

/*
// --- OLD DESIGN UI (Retained for backup) ---
<div 
    key={ach.id} 
    onClick={onClick}
    className="group cursor-pointer bg-white dark:bg-[#0a0a0a] rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:scale-[1.02] border border-gray-100 dark:border-white/10 transition-all duration-500 ease-out flex flex-col justify-between gap-4 relative overflow-hidden"
>
    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-900/40 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
    
    <div className="flex flex-col gap-4">
        <div className={`p-3 bg-gray-50 dark:bg-white/5 rounded-2xl w-fit ${ach.color}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 font-mono">{ach.year}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 line-clamp-1">{ach.organization}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-red-500 dark:group-hover:text-yellow-400 transition-colors">
                {ach.title}
            </h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
            {ach.description}
        </p>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-sm font-medium text-slate-900 dark:text-white opacity-80 group-hover:opacity-100 transition-opacity">
        <span>View Certificate</span>
        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
</div>
*/

export function CertificateCard({ ach, onClick }) {
    const Icon = ach.icon;

    return (
        <div 
            onClick={onClick}
            className="group cursor-pointer bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 border border-gray-100 dark:border-white/10 transition-all duration-500 ease-out flex flex-col sm:flex-row relative overflow-hidden"
        >
            {/* Left side: Text & Info */}
            <div className="flex flex-col justify-between p-6 sm:w-[60%] md:w-[65%] z-10 relative">
                {/* Decorative blob inside left */}
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-slate-50 dark:bg-slate-900/40 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="flex flex-col gap-4">
                    <div className={`p-3 bg-gray-50 dark:bg-white/5 rounded-2xl w-fit shadow-sm ${ach.color}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 font-mono">{ach.year}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 line-clamp-1">{ach.organization}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-red-500 dark:group-hover:text-yellow-400 transition-colors">
                            {ach.title}
                        </h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 line-clamp-2 sm:pr-8">
                        {ach.description}
                    </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
            </div>

            {/* Right side: Image with SaaS Curve/Cut */}
            {/* The negative margin brings it left so the cut overlaps the text area background. */}
            <div className="sm:w-[45%] md:w-[40%] sm:-ml-[5%] relative h-56 sm:h-auto overflow-hidden bg-gray-100 dark:bg-zinc-900 sm:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
                <img 
                    src={ach.organizationImage || ach.image} 
                    alt={ach.organization}
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 ${ach.organizationImage ? 'object-contain p-8 drop-shadow-md dark:drop-shadow-[0_4px_4px_rgba(255,255,255,0.1)]' : 'object-cover'}`}
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
        </div>
    );
}
