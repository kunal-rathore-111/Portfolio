import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface MyLifeSectionProps {
  isDark: boolean;
  onPostClick: (postId: string) => void;
}

export function MyLifeSection({ isDark, onPostClick }: MyLifeSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className={`text-5xl md:text-7xl italic inline ${isDark ? 'text-white' : 'text-black'}`}>My Life Stories </h2>
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
          <div className={`relative rounded-3xl overflow-hidden h-[350px] group ${isDark ? 'bg-gradient-to-br from-emerald-900 to-emerald-800' : 'bg-gradient-to-br from-emerald-100 to-emerald-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjU2MzkzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Life story"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
            />
            <button 
              onClick={() => onPostClick('4')}
              className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg">Minimalist living journey</p>
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
          <div className={`relative rounded-3xl overflow-hidden h-[350px] md:h-[550px] ${isDark ? 'bg-gradient-to-br from-teal-900 to-teal-800' : 'bg-gradient-to-br from-teal-100 to-teal-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHlvZ2ElMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NTcwNjMyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Life journey"
              loading="lazy"
              className={`w-full h-full object-cover ${isDark ? 'opacity-80' : ''}`}
            />
            
            <div className="absolute top-6 left-6 right-6">
              <div className={`rounded-2xl p-6 max-w-md ${isDark ? 'bg-[#2a2a2a]' : 'bg-white'}`}>
                <h3 className={`text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-black'}`}>Mindfulness: My journey to inner peace</h3>
              </div>
            </div>

            <button 
              onClick={() => onPostClick('8')}
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
          <div className={`relative rounded-3xl overflow-hidden h-[350px] group ${isDark ? 'bg-gradient-to-br from-lime-900 to-lime-800' : 'bg-gradient-to-br from-lime-100 to-lime-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjU2MzkzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Personal story"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
            />
            <button 
              onClick={() => onPostClick('4')}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <div className={`text-xs mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>+ Lifestyle</div>
              <p className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>Learning to live with less</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}