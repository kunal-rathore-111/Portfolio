import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, SunMedium, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLenis } from "lenis/react";
import { useDarkMode } from '@/hooks/useDarkMode';
import { BLOGS_API_URL } from '@/config/api';
import { onhoverBlackWhite } from "@/lib/default_Tailwind";

export const ReadDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const lenis = useLenis();
    const { isDark, toggle: toggleMode } = useDarkMode();
    const [copied, setCopied] = useState(false);

    // Initialize state from location.state if available (passed from ReadCard)
    const [post, setPost] = useState(location.state?.post || null);
    const [loading, setLoading] = useState(!location.state?.post);
    const [error, setError] = useState(null);

    // Scroll to top on mount
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [lenis, id]);

    useEffect(() => {
        // If post data is already available via state, don't fetch
        if (post) return;

        const fetchPost = async () => {
            try {
                const response = await fetch(BLOGS_API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Find the post with the matching ID
                const foundPost = data.posts.find(p => p.id === id);

                if (foundPost) {
                    // Map new API fields to match what ReadDetail expects
                    setPost({
                        ...foundPost,
                        type: foundPost.category || 'Article',
                        image: foundPost.imageUrl,
                        content: foundPost.fullDetail,
                        date_created: foundPost.created_at
                    });
                } else {
                    setError("Post not found");
                }
            } catch (err) {
                console.error("Error fetching post:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id, post]);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (loading) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center gap-4 text-slate-900 dark:text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-900 dark:border-white"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center gap-4 text-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold">Post not found</h2>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white dark:text-black text-white rounded-full transition-all hover:scale-105"
                >
                    <ArrowLeft className="w-4 h-4" /> Go Back
                </button>
            </div>
        );
    }

    // Format date
    const displayDate = post.created_at ? post.created_at.slice(0, 10) : (post.date_created ? post.date_created.slice(0, 10) : "Unknown Date");
    const displayTags = post.tags || [];

    return (
        <div className={`min-h-screen w-full transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'} font-light overflow-x-hidden pt-20 pb-20`}>
            {/* Dark mode toggle */}
            <button
                className={`fixed z-50 right-4 top-4 md:right-10 md:top-5 p-2 shadow-md rounded-lg ${onhoverBlackWhite}`}
                onClick={toggleMode}
            >
                {isDark ? <SunMedium strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
            </button>

            <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col gap-12">

                {/* Back Button */}
                <motion.button
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0.7, x: 0 }}
                    whileHover={{ opacity: 1, x: -4 }}
                    className="flex items-center gap-2 self-start text-sm md:text-base transition-all"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to posts
                </motion.button>

                {/* Hero Image */}
                {post.image && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}

                {/* Meta Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-3"
                >
                    <span className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-gray-100 text-black border border-gray-200'}`}>
                        {displayDate}
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-gray-100 text-black border border-gray-200'}`}>
                        + {post.type || post.category || "Article"}
                    </span>
                    {post.author && (
                        <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                            - By {post.author}
                        </span>
                    )}
                </motion.div>

                {/* Tags */}
                {displayTags.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-2"
                    >
                        {displayTags.map((tag, index) => (
                            <span
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-gray-100 text-black border border-gray-200'}`}
                            >
                                + {tag}
                            </span>
                        ))}
                    </motion.div>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    {post.title}
                </motion.h1>

                {/* Description */}
                {post.description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className={`text-xl md:text-2xl ${isDark ? 'text-white/80' : 'text-slate-600'} leading-relaxed`}
                    >
                        {post.description}
                    </motion.p>
                )}

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className={`h-px w-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
                />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col gap-8 max-w-none"
                >
                    {(post.content || post.fullDetail) ? (
                        (post.content || post.fullDetail).split('\n\n').map((paragraph, index) => {
                            if (index === 0) {
                                return (
                                    <p
                                        key={index}
                                        className={`text-xl md:text-2xl leading-relaxed first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1 mb-8 ${isDark ? 'text-white/90 first-letter:text-white' : 'text-black/90 first-letter:text-black'}`}
                                    >
                                        {paragraph}
                                    </p>
                                );
                            }
                            return (
                                <p
                                    key={index}
                                    className={`text-lg md:text-xl leading-relaxed ${index % 2 === 0 ? 'max-w-4xl' : 'max-w-[95%]'} ${isDark ? 'text-white/85' : 'text-slate-700'}`}
                                >
                                    {paragraph}
                                </p>
                            );
                        })
                    ) : (
                        <div className="flex flex-col gap-4 p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10">
                            <p className="italic">This is a bookmarked resource. View the full content at the source:</p>
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                                Visit {post.link}
                            </a>
                        </div>
                    )}
                </motion.div>

                {/* Share Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}
                >
                    <h3 className="text-xl mb-4 font-semibold">Share this post</h3>
                    <button
                        onClick={handleCopyLink}
                        className={`px-6 py-3 rounded-full transition-all border ${isDark ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' : 'bg-gray-100 text-black hover:bg-gray-200 border-gray-200'}`}
                    >
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};
