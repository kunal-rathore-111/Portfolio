import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import ReadCard from '../ReadCard.jsx';
import { PageHeader } from "../common/PageHeader";
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/config/api';

// TODO: Replace these with actual values from the user or environment variables
const BACKEND_URL = "https://2nd-mind-backend.vercel.app/app/v2";
const SHARE_HASH = "651fc01baab9917efc55573a00b5d0f94cdaf54a6c436f64c596d63b15f865d1";

export const ReadsPage = () => {

    const { data: reads = [], isLoading: loading, error } = useQuery({
        queryKey: ['reads'],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/api/reads`);
            if (!response.ok) {
                throw new Error('Failed to fetch reads');
            }
            const data = await response.json();

            if (data.result && Array.isArray(data.result)) {
                return data.result.slice(0, 5);
            }
            return [];
        },
        staleTime: Infinity, // Fetch once and cache for the entire session
    });

    if (SHARE_HASH === "PLACEHOLDER_HASH") {
        return (
            <section className="py-20 px-4 relative w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center p-10 border border-dashed border-white/20 rounded-xl bg-white/5">
                        <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">Reads Section</h2>
                        <p className="text-gray-400">
                            Waiting for Backend URL and Share Hash configuration.
                            <br />
                            Please provide the frontend example code or the specific Hash to enable this section.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (loading) {
        return (
            <section className="py-20 px-4 relative overflow-hidden w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <div className="h-10 w-48 bg-gray-200 dark:bg-white/5 rounded-lg animate-pulse mb-4"></div>
                        <div className="h-6 w-96 bg-gray-200 dark:bg-white/5 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-64 rounded-3xl bg-gray-200 dark:bg-white/5 animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
    if (error) return null; // Or hide the section on error

    return (
        <section className="py-20 px-4 relative overflow-hidden w-full">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mb-4"
                        >
                            <PageHeader val={'03.'} subheading={"My"} mainHeading={"Reads"} />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg max-w-2xl"
                        >
                            Curated articles, videos, and resources from my second brain.
                        </motion.p>
                    </div>

                    <motion.a
                        href={`${BACKEND_URL}/share/${SHARE_HASH}`} // Adjust link based on actual public dashboard URL structure
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-black dark:text-white"
                    >
                        View Full Library
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reads.map((read, index) => (
                        <motion.div
                            key={read.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ReadCard {...read} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};