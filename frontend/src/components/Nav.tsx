import { Sun, Moon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { toggleTheme } from '../features/themeSlice';
import { useNavigate } from 'react-router-dom';

export function Navbar() {

    const navigate = useNavigate();



    const isDark = useSelector((state: RootState) => state.theme.isDark);
    return (

        <header className={`w-full px-6 md:px-12 py-6 ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">

                    {/* Logo/Name */}
                    <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate('/') }}
                        className={` cursor-pointer text-2xl tracking-tight transition-opacity hover:opacity-70  italic ${isDark ? 'text-white' : 'text-black'}`}>
                        myEpistoria
                    </button>

                    <nav className="flex flex-row items-center gap-6 text-sm">

                        <AllPosts_ContactButton title={'AllPosts'}
                            onClickFunc={() => navigate('/all-posts')}
                            isDark={isDark} />

                        <AllPosts_ContactButton title={'Contact'}
                            onClickFunc={() => navigate('/#contact')}
                            isDark={isDark} />

                    </nav>
                </div>
                {/* dark theme icon */}
                <DarkToggle />
            </div>
        </header >
    );
}

interface AllPosts_ContactButton_DTO {
    title: string, onClickFunc: () => void, isDark: boolean
}
const AllPosts_ContactButton = ({ title, onClickFunc, isDark }: AllPosts_ContactButton_DTO) => {

    return <button
        onClick={onClickFunc}
        className={`transition-opacity hover:opacity-70 ${isDark ? 'text-white/90' : 'text-black/90'}`}>
        {title}

    </button>

}

function DarkToggle() {

    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const dispatch = useDispatch();
    return <button
        onClick={() => { dispatch(toggleTheme()) }}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ${isDark
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-black text-white hover:bg-gray-800'
            }`}
    >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
}