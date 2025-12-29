import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Twitter, Youtube, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '@/hooks/useDarkMode';

const ReadCard = (props) => {
    const { id, title, image, type, description, tags, category } = props;
    const navigate = useNavigate();
    const { isDark } = useDarkMode();

    const displayType = type || category || 'Article';
    const displayImage = image || props.imageUrl || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800';

    const handleClick = (e) => {
        e.preventDefault();
        // Save current scroll position for restoration
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        // Pass the entire props object as 'post' state to avoid re-fetching
        navigate(`/read/${id}`, {
            state: {
                post: {
                    ...props,
                    type: displayType,
                    image: displayImage,
                    content: props.fullDetail || props.content,
                    date_created: props.created_at || props.date_created
                }
            }
        });
    };

    return (
        <motion.div
            onClick={handleClick}
            className={`relative rounded-3xl overflow-hidden h-100 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Background Image */}
            <img
                src={displayImage}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Top Info (Tags) */}
            <div className="absolute top-4 left-4 right-12 flex flex-wrap gap-2">
                {tags && tags.slice(0, 2).map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 rounded-full border border-white/40 backdrop-blur text-white text-[10px] md:text-xs"
                    >
                        + {tag}
                    </span>
                ))}
            </div>

            {/* Arrow Button */}
            <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 bg-white text-black hover:bg-gray-100`}>
                <ArrowUpRight className="w-5 h-5" />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 text-[10px] md:text-xs text-white/60 font-medium uppercase tracking-wider">
                    {displayType}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 transition-colors">
                    {title}
                </h3>

                {description && (
                    <p className="text-white/80 text-sm line-clamp-2 mb-0">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

ReadCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageUrl: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    fullDetail: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
    date_created: PropTypes.string,
};

export default ReadCard;
