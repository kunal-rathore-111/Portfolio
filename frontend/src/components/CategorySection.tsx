
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface CategoryData {
    title: string;
    subtitle: string;
    cards: {

        // Left card data
        left: {
            image: string;
            title: string;
            id: string;
        },
        // Center large card data
        center: {
            image: string;
            title: string;
            id: string;
        },
        // Right card data
        right: {
            image: string;
            tag: string;
            title: string;
            id: string;
        }
    }
}

interface CategorySectionProps {
    isDark: boolean;
    data: CategoryData;
}


export function CategorySection({ isDark, data }: CategorySectionProps) {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >

            <HeadingSection></HeadingSection>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >

                <LeftCard></LeftCard>

                <CenterCard></CenterCard>

                <RightCard></RightCard>

            </motion.div>
        </motion.div>
    );

    function HeadingSection() {
        return <div className="text-center mb-12">
            <h2 className={`text-5xl md:text-7xl italic inline ${isDark ? 'text-white' : 'text-black'}`}>
                {data.title}
            </h2>
            <span className={`text-sm ml-2 ${isDark ? 'text-white/60' : 'opacity-60'}`}>
                {data.subtitle}
            </span>
        </div>
    }

    function ArrowComponent({ cardId }: { cardId: string }) {
        console.log(cardId);
        return <button
            onClick={() => navigate(`/post-detail/${cardId}`)}
            className="cursor-pointer hover:scale-110 transition-transform"
            aria-label="View post"
        >
            <ArrowUpRight className="w-5 h-5" />
        </button>
    }

    function LeftCard() {
        return <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.div
                className={`relative rounded-3xl overflow-hidden h-[350px] group `}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >

                <img
                    src={data.cards.left.image}
                    alt={data.cards.left.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
                />

                <div className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>

                    <ArrowComponent cardId={data.cards.left.id}></ArrowComponent>

                </div>
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg">

                        {data.cards.left.title}

                    </p>
                </div>
            </motion.div>
        </motion.div>
    }

    function CenterCard() {
        return <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
        >
            <motion.div
                className={`relative rounded-3xl overflow-hidden h-[350px] md:h-[550px] `}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={data.cards.center.image}
                    alt={data.cards.center.title}
                    loading="lazy"
                    className={`w-full h-full object-cover ${isDark ? 'opacity-80' : ''}`}
                />

                <div className="absolute top-6 left-6 right-6">
                    <div className={`rounded-2xl p-6 max-w-md ${isDark ? 'bg-[#2a2a2a]' : 'bg-white'}`}>
                        <h3 className={`text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-black'}`}>

                            {data.cards.center.title}

                        </h3>
                    </div>
                </div>

                <div className={`absolute bottom-6 left-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>

                    <ArrowComponent cardId={data.cards.center.id}></ArrowComponent>

                </div>
            </motion.div>
        </motion.div >
    }

    function RightCard() {
        return <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <motion.div
                className={`relative rounded-3xl overflow-hidden h-[350px] group `}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={data.cards.right.image}
                    alt={data.cards.right.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
                />
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>

                    <ArrowComponent cardId={data.cards.right.id}></ArrowComponent>

                </div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className={`text-xs mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>

                        {data.cards.right.tag}

                    </div>
                    <p className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>

                        {data.cards.right.title}

                    </p>
                </div>
            </motion.div>
        </motion.div>
    }
}