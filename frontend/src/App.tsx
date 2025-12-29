import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { LayoutPage } from "./Pages/LayoutPage";
import { HomePage } from "./Pages/HomePage";
import { PostDetailPage } from "./Pages/PostDetailPage";
import { AllPostsPage } from "./Pages/AllPostsPage";
import { PostsDataContextProvider } from "./contextProvider/postsDataContext";
import { useFetch } from "./hooks/queryHooks/useFetch";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";







function LenisWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    return () => {
      // Keep instance alive for entire app
    };
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return <>{children}</>;
}

export default function App() {
  const { data, isLoading, isError, error } = useFetch(); // runs only ones when the HomePage mounts

  const isDark = useSelector((state: RootState) => state.theme.isDark)

  if (isLoading) return <div>
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
      <svg className="animate-spin h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" aria-label="Loading">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
    </div>
  </div>

  return (
    <PostsDataContextProvider props={{ data, isLoading, isError, error }}>
      <BrowserRouter>
        <LenisWrapper>
          <Routes>
            {/* Parent Route to keep fix the Nav bar */}
            <Route element={<LayoutPage />}>
              {/* the main page loads the Home page */}
              <Route path="/" element={<HomePage />} />
              <Route path="/all-posts" element={<AllPostsPage />} />
              <Route path="/post-detail/:id" element={<PostDetailPage />} />
            </Route>
          </Routes>
        </LenisWrapper>
      </BrowserRouter>
    </PostsDataContextProvider>
  );
}
