import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface MoviesSectionProps {
  isDark: boolean;
  onPostClick: (postId: string) => void;
}

export function MoviesSection({ isDark, onPostClick }: MoviesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className={`text-5xl md:text-7xl italic inline ${isDark ? 'text-white' : 'text-black'}`}>Movies & Series </h2>
        <span className={`text-sm ml-2 ${isDark ? 'text-white/60' : 'opacity-60'}`}>Category</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Left Card */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={`relative rounded-3xl overflow-hidden h-[350px] group ${isDark ? 'bg-gradient-to-br from-rose-900 to-rose-800' : 'bg-gradient-to-br from-rose-100 to-rose-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NTYzMDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Movies"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
            />
            <button 
              onClick={() => onPostClick('9')}
              className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg">Best series of 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Center Large Card */}
        <motion.div 
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`relative rounded-3xl overflow-hidden h-[350px] md:h-[550px] ${isDark ? 'bg-gradient-to-br from-red-900 to-red-800' : 'bg-gradient-to-br from-red-100 to-red-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NTYzMDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Movies"
              loading="lazy"
              className={`w-full h-full object-cover ${isDark ? 'opacity-80' : ''}`}
            />
            
            <div className="absolute top-6 left-6 right-6">
              <div className={`rounded-2xl p-6 max-w-md ${isDark ? 'bg-[#2a2a2a]' : 'bg-white'}`}>
                <h3 className={`text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-black'}`}>Cinema classics that shaped modern storytelling</h3>
              </div>
            </div>

            <button 
              onClick={() => onPostClick('9')}
              className={`absolute bottom-6 left-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`relative rounded-3xl overflow-hidden h-[350px] group ${isDark ? 'bg-gradient-to-br from-pink-900 to-pink-800' : 'bg-gradient-to-br from-pink-100 to-pink-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NTYzMDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Series"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
            />
            <button 
              onClick={() => onPostClick('9')}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <div className={`text-xs mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>+ Series</div>
              <p className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>Binge-worthy recommendations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}