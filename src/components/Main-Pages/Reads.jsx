import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import ReadCard from '../ReadCard.jsx';
import { PageHeader } from "../common/PageHeader";
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API_URL, BLOGS_API_URL, BLOGS_PLATFORM_URL as BLOGS_URL } from '@/config/api';
import { useLoadingContext } from '@/context/LoadingContext';
import { useDarkMode } from '@/hooks/useDarkMode';

export const ReadsPage = () => {
    const { registerLoader, markLoaderComplete } = useLoadingContext();
    const navigate = useNavigate();
    const { isDark } = useDarkMode();

    const { data: reads = [], isLoading: loading, error, isSuccess } = useQuery({
        queryKey: ['reads'],
        queryFn: async () => {
            const response = await fetch(BLOGS_API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch reads');
            }
            const data = await response.json();

            if (data.posts && Array.isArray(data.posts)) {
                // format post data
                return data.posts.slice(0, 3).map(post => ({
                    ...post,
                    type: post.category || 'Article',
                    image: post.imageUrl,
                    content: post.fullDetail,
                    date_created: post.created_at
                }));
            }
            return [];
        },
        staleTime: Infinity,
    });

    // loader logic
    useEffect(() => {
        registerLoader('reads');
    }, [registerLoader]);

    useEffect(() => {
        if (isSuccess || error) {
            markLoaderComplete('reads');
        }
    }, [isSuccess, error, markLoaderComplete]);


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
        <section className="py-20 relative overflow-hidden w-full">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="mb-4 font-light"
                        >
                            <PageHeader val={'03.'} subheading={"Reads"} mainHeading={"Latest Posts"} />
                        </motion.div>
                    </div>

                    <motion.a
                        href={BLOGS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8 } }
                        }}
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
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            <ReadCard {...read} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};