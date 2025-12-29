import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import type { RootState } from "../store/store";


export function BackToPostsButton() {
    const navigate = useNavigate();
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    return <button
        onClick={() => navigate('/all-posts')}
        className={`flex items-center gap-2 mb-8 transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}>

        <span className='flex gap-2'> <ArrowLeft className="w-5 h-5" />Back to Posts</span>
    </button>
} 