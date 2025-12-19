import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLenis } from "lenis/react";

// Constant for now, same as in Reads.jsx. ideally should be in a config file
const BACKEND_URL = "https://2nd-mind-backend.vercel.app/app/v2";
const SHARE_HASH = "651fc01baab9917efc55573a00b5d0f94cdaf54a6c436f64c596d63b15f865d1";

export const ReadDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const lenis = useLenis();

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
                const response = await fetch(`${BACKEND_URL}/user/public/${SHARE_HASH}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Find the post with the matching ID
                const foundPost = data.result.find(p => p.id === id || p.id === parseInt(id));

                if (foundPost) {
                    setPost(foundPost);
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
    const displayDate = post.date_created ? new Date(post.date_created).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }) : "Unknown Date";

    const displayTags = post.tags || [];

    // Check if post has a valid image
    const hasValidImage = post.image && post.image.trim() !== '';

    return (
        <div className="min-h-screen w-full bg-white dark:bg-black text-slate-900 dark:text-white font-light overflow-x-hidden pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col gap-12">

                {/* Back Button */}
                <motion.button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 self-start text-sm md:text-base opacity-70 hover:opacity-100 transition-all hover:-translate-x-1"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to posts
                </motion.button>

                {/* Hero Image - Only show if post has a valid image */}
                {hasValidImage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}

                {/* Date and Category/Tags - Below Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap items-center gap-3"
                >
                    <span className="px-4 py-2 rounded-full text-sm bg-gray-100 text-black border border-gray-200 dark:bg-white/10 dark:text-white dark:border-white/20 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {displayDate}
                    </span>

                    <span className="px-4 py-2 rounded-full text-sm bg-gray-100 text-black border border-gray-200 dark:bg-white/10 dark:text-white dark:border-white/20 capitalize">
                        {post.type || "Article"}
                    </span>

                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        • By Kunaal Rathore
                    </span>
                </motion.div>

                {/* Tags */}
                {displayTags.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap gap-2"
                    >
                        {displayTags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full text-sm bg-gray-100 text-black border border-gray-200 dark:bg-white/10 dark:text-white dark:border-white/20 flex items-center gap-1"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    {post.title}
                </motion.h1>

                {/* Description */}
                {post.description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                        {post.description}
                    </motion.p>
                )}

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 dark:bg-white/10" />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col gap-16 text-lg md:text-xl leading-relaxed prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-li:text-gray-700 dark:prose-li:text-gray-300"
                >
                    {post.content ? (
                        post.content.split('\n').map((paragraph, index) => (
                            paragraph.trim() && <p key={index}>{paragraph}</p>
                        ))
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10"
                >
                    <h3 className="text-xl mb-4 font-semibold text-black dark:text-white">
                        Share this post
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert("Link copied!");
                            }}
                            className="px-6 py-3 rounded-full transition-all bg-gray-100 text-black hover:bg-gray-200 border border-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:border-white/20"
                        >
                            Copy Link
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
