

export const NoPostsComponent = ({ isDark }: { isDark: boolean }) => {
    return <div className={`min-h-screen p-8 flex items-center justify-center transition-colors`}>
        <div className={`max-w-md w-full text-center rounded-2xl p-8 ${isDark ? 'bg-white/5 backdrop-blur-sm text-white shadow-lg' : 'bg-white shadow-md text-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto mb-4">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                No posts
            </h3>
            <p className="text-sm md:text-base opacity-80">
                There are no posts to display right now.
            </p>
        </div>
    </div>
} 