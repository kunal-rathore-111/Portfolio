import React, { useState, useEffect } from 'react';
import WireframeCard from './WireframeCard';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center py-10 transition-colors duration-300">
      <div className="absolute top-5 right-5 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white dark:bg-black shadow-md hover:scale-110 transition-transform text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
      <WireframeCard />
    </div>
  );
}

export default App;
