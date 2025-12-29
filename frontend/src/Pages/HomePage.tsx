
import { CategorySection } from '../components/CategorySection';
import { ContactSection } from '../components/ContactSection';
import { HeroSection } from '../components/HeroSection';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { useContext, useEffect } from 'react';
import { ScrollContext } from '../contextProvider/scrollContext';
import { PostsDataContext } from '../contextProvider/postsDataContext';
import { formatData } from '../utils/categoryDataFormating';


export function HomePage() {

    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const navigate = useNavigate();

    const location = useLocation(); // to scroll to the contact section using useEffect hash based scroll

    const context = useContext(ScrollContext);



    /* Scroll whenever the hash changes  */
    useEffect(() => {
        if (location.hash === '#contact') {
            context?.scrollToFunc();
        }
    }, [location.hash]); // imp if at / route and wants to scroll to contact (hash changes)


    const postData = useContext(PostsDataContext); // runs only ones when the HomePage mounts

    if (!postData) {
        // TODO: render a fallback (spinner/skeleton) or return null
        return null;
    }
    const { error, isError, data } = postData;



    if (isError) return (
        <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className={`max-w-lg w-full p-6 rounded-lg shadow-md ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <div className="flex items-start gap-4">
                    <svg className={`h-10 w-10 flex-shrink-0 ${isDark ? 'text-red-400' : 'text-red-600'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Something went wrong</h3>
                        <p className="mt-1 text-sm opacity-80">{error?.message ?? 'An unexpected error occurred. Please try again.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    console.log("DATA:", data);

    if (!Array.isArray(data)) return <div>
        NO POSTS FETCHED</div>


    const fashionCategoryFormatedData = formatData({ data: data, categoryTITLE: 'Fashion' });


    const myLifeCategoryFormatedData = formatData({ data: data, categoryTITLE: 'myLife' });

    const entertainmentCategoryFormatedData = formatData({ data: data, categoryTITLE: 'Entertainment' });

    const jobsCategoryFormatedData = formatData({ data: data, categoryTITLE: 'Jobs' });



    return < div className='flex flex-col gap-30' >
        <div>
            <div className="flex items-end justify-between mb-8">

                <h2 className={`text-5xl md:text-7xl italic ${isDark ? 'text-white' : 'text-black'}`}>
                    Top latest posts
                </h2>

                <button
                    onClick={() => navigate('/all-posts')}
                    className={`text-sm pb-2 transition-all duration-600 hover:translate-x-1 ${isDark ? 'text-white/60 hover:text-white' : 'opacity-60 hover:opacity-100'}`}>
                    See all posts →
                </button>
            </div>
            <HeroSection></HeroSection>
        </div>

        <div className='flex flex-col gap-30'>
            <CategorySection isDark={isDark} data={fashionCategoryFormatedData} />
            <CategorySection isDark={isDark} data={myLifeCategoryFormatedData} />
            <CategorySection isDark={isDark} data={entertainmentCategoryFormatedData} />
            <CategorySection isDark={isDark} data={jobsCategoryFormatedData} />
        </div>

        <footer>
            <ContactSection isDark={isDark}></ContactSection>
        </footer>
    </div >
}

