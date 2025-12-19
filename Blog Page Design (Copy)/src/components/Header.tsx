import { Search, Menu, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  onLogoClick: () => void;
  onArticlesClick: () => void;
  onContactClick: () => void;
}

export function Header({ isDark, toggleTheme, onLogoClick, onArticlesClick, onContactClick }: HeaderProps) {
  return (
    <header className={`px-6 md:px-12 py-6 ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
      <div className="flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className={`text-2xl tracking-tight transition-opacity hover:opacity-70 ${isDark ? 'text-white' : 'text-black'}`}
        >
          BlogSpot.
        </button>

        <button 
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ${
            isDark 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}