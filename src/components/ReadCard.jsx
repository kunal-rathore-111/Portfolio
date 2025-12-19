import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ExternalLink, Twitter, Youtube, Instagram, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReadCard = (props) => {
    const { id, title, link, type, description, tags } = props;
    const navigate = useNavigate();

    const getIcon = () => {
        switch (type) {
            case 'Twitter':
                return <Twitter className="w-5 h-5 text-blue-400" />;
            case 'Youtube':
                return <Youtube className="w-5 h-5 text-red-500" />;
            case 'Instagram':
                return <Instagram className="w-5 h-5 text-pink-500" />;
            default:
                return <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
        }
    };

    const handleClick = (e) => {
        // Prevent default if it was a link behaviors
        e.preventDefault();
        if (id) {
            // Save current scroll position for restoration (similar to Projects implementation)
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
            // Pass the entire props object as 'post' state to avoid re-fetching
            navigate(`/read/${id}`, { state: { post: props } });
        } else {
            // Fallback for missing ID, though unlikely with real data
            window.open(link, '_blank');
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            className="block relative group overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-md dark:hover:bg-white/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-gray-300 dark:group-hover:border-white/20 transition-colors">
                    {getIcon()}
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {title}
            </h3>

            {description && (
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {description}
                </p>
            )}

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

ReadCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
};

export default ReadCard;
