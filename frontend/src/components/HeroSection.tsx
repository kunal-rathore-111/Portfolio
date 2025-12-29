import { ArrowUpRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import type { RootState } from "../store/store";
import { useContext } from "react";
import { PostsDataContext } from "../contextProvider/postsDataContext";
import { defaultImgURL } from "../utils/defaultFormat";



export function HeroSection() {

    return <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <LeftCard />
        <RightCards />
    </motion.div>
}


function LeftCard() {
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const postsData = useContext(PostsDataContext);

    const data = postsData?.data;

    const post1 = Array.isArray(data) ? data?.[0] : null;

    const navigate = useNavigate();

    return <>
        <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <motion.div
                className={` relative rounded-3xl overflow-hidden h-[450px] group ${isDark ? 'bg-gradient-to-br from-blue-900 to-blue-800' : 'bg-gradient-to-br from-blue-200 to-blue-300'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >

                {/* Render the post image */}
                <ImgComp imgUrl={post1?.imageUrl || defaultImgURL} alt={'tag1'} />

                <div className="absolute top-6 right-8 bottom-6 max-w-xs">

                    <div className={`rounded-2xl p-6 shadow-lg ${isDark ? 'bg-[#2a2a2a]' : 'bg-white'}`}>
                        <div className={`text-xs mb-3 ${isDark ? 'text-white/60' : 'opacity-60'}`}>

                            + {post1?.tags?.[0] || `Special`}

                        </div>
                        <h3 className={`text-2xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>

                            {post1?.title || `TITLE HERE`}

                        </h3>
                        <p className={`text-sm ${isDark ? 'text-white/60' : 'opacity-60'}`}>

                            {post1?.description}

                        </p>
                    </div>
                </div>

                <div
                    onClick={() => { navigate(`/post-detail/${post1?.id}`) }}/*Onclick will Redirect to post detail route */
                    className={`cursor-pointer absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>

                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </motion.div>
        </motion.div>
    </>
}


function RightCards() {
    const navigate = useNavigate();
    return <>
        <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <RightCard1 />
            <RightCard2 />
        </motion.div>
    </>

    /* the first card of right card */
    function RightCard1() {


        const postsData = useContext(PostsDataContext);

        const post2 = Array.isArray(postsData?.data) ? postsData.data?.[1] : null;

        console.log({ post2 });

        const isDark = useSelector((state: RootState) => state.theme.isDark);
        return <>
            <motion.div
                className={`relative rounded-3xl p-6 h-[210px] flex flex-col justify-evenly ${isDark ? 'bg-gradient-to-br from-cyan-900 to-cyan-800' : 'bg-gradient-to-br from-cyan-100 to-cyan-200'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >

                <div className="flex items-start justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs ${isDark ? 'border border-white/40 text-white' : 'border border-gray-400'}`}>

                        + {post2?.tags?.[0] || `Special`}

                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>
                        <Plus className="w-4 h-4" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <div className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                        {post2?.title || "TITLE HERE"}
                    </div>

                    <button
                        onClick={() => navigate(`/post-detail/${post2?.id}`)} /*Onclick will Redirect to post detail route */
                        className={`text-xs underline hover:no-underline cursor-pointer transition-all ${isDark ? 'text-white' : 'text-black'}`}>
                        Learn more
                    </button>
                </div>
            </motion.div>
        </>
    }

    /* the second card of right card */
    function RightCard2() {


        const postsData = useContext(PostsDataContext);

        const post3 = Array.isArray(postsData?.data) ? postsData.data?.[2] : null;

        const isDark = useSelector((state: RootState) => state.theme.isDark);
        return <>
            <motion.div
                className={`relative rounded-3xl overflow-hidden h-[210px] group ${isDark ? 'bg-gradient-to-br from-green-900 to-green-800' : 'bg-gradient-to-br from-green-200 to-green-300'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <ImgComp imgUrl={post3?.imageUrl || defaultImgURL} alt={'tag1'} />

                <div
                    onClick={() => { navigate(`/post-detail/${post3?.id}`) }} /*Onclick will Redirect to post detail route */
                    className={`cursor-pointer absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 hover:scale-120 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>

                    <span className="text-sm">→</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div
                        className={`w-full rounded-2xl px-4 py-3 text-sm transition-all duration-300 hover:scale-105 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}>

                        {post3?.title || `TITLE HERE`}

                    </div>
                </div>
            </motion.div >
        </>
    }

}


function ImgComp({ imgUrl, alt }: { imgUrl: string, alt: string }) {

    const isDark = useSelector((state: RootState) => state.theme.isDark);
    return <img
        src={imgUrl}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
    />
}