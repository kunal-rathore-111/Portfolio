import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TechSectionProps {
  isDark: boolean;
  onPostClick: (postId: string) => void;
}

export function TechSection({ isDark, onPostClick }: TechSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className={`text-5xl md:text-7xl italic inline ${isDark ? 'text-white' : 'text-black'}`}>Tech </h2>
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
          <div className={`relative rounded-3xl overflow-hidden h-[350px] group ${isDark ? 'bg-gradient-to-br from-indigo-900 to-indigo-800' : 'bg-gradient-to-br from-indigo-100 to-indigo-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1617035969674-85423701b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB3b3JrJTIwbGFwdG9wfGVufDF8fHx8MTc2NTY0MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tech"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
            />
            <button 
              onClick={() => onPostClick('7')}
              className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg">Future of remote work</p>
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
          <div className={`relative rounded-3xl overflow-hidden h-[350px] md:h-[550px] ${isDark ? 'bg-gradient-to-br from-blue-900 to-blue-800' : 'bg-gradient-to-br from-blue-100 to-blue-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGNvZGluZ3xlbnwxfHx8fDE3NjU3MDYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tech innovation"
              loading="lazy"
              className={`w-full h-full object-cover ${isDark ? 'opacity-80' : ''}`}
            />
            
            <div className="absolute top-6 left-6 right-6">
              <div className={`rounded-2xl p-6 max-w-md ${isDark ? 'bg-[#2a2a2a]' : 'bg-white'}`}>
                <h3 className={`text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-black'}`}>Digital Detox: Reclaiming Your Time</h3>
              </div>
            </div>

            <button 
              onClick={() => onPostClick('5')}
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
          <div className={`relative rounded-3xl overflow-hidden h-[350px] group ${isDark ? 'bg-gradient-to-br from-violet-900 to-violet-800' : 'bg-gradient-to-br from-violet-100 to-violet-200'}`}>
            <img
              src="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY1NzA1NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tech"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-80' : ''}`}
            />
            <button 
              onClick={() => onPostClick('7')}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <div className={`text-xs mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>+ Work</div>
              <p className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>Remote work transformation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}