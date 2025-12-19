import { ArrowUpRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface BestOfWeekProps {
  isDark: boolean;
  onPostClick: (postId: string) => void;
  onShowAllBlogs: () => void;
}

export function BestOfWeek({ isDark, onPostClick, onShowAllBlogs }: BestOfWeekProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="flex items-end justify-between mb-8">
        <h2 className={`text-5xl md:text-7xl italic ${isDark ? 'text-white' : 'text-black'}`}>
          Featured Projects
        </h2>
        <button
          onClick={onShowAllBlogs}
          className={`text-sm pb-2 transition-all duration-300 hover:translate-x-1 ${isDark ? 'text-white/60 hover:text-white' : 'opacity-60 hover:opacity-100'
            }`}
        >
          See all projects →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MAIN FEATURED CARD */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1719461361775-9ff7e33b42c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHBhcGVyJTIwYWNhZGVtaWMlMjBzdHVkeXxlbnwxfHx8fDE3NjU4MTc5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Research Paper Copilot"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Text Card */}
            <div className="absolute right-4 bottom-6 z-10 flex items-start max-w-xs">
              <div className={`rounded-2xl p-6 shadow-lg ${isDark ? 'bg-[#2a2a2a]' : 'bg-white'
                }`}>

                <h3 className={`text-2xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Research Paper Copilot
                </h3>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'opacity-60'}`}>
                  Your AI-powered task assistant.
                </p>
              </div>
            </div>

            {/* Arrow Button */}
            <button
              onClick={() => onPostClick('1')}
              className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full  text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className={`relative p-6 flex flex-col justify-between gap-4 h-[240px] shadow-sm shadow-slate-900 rounded-3xl`}
              style={{ backgroundColor: isDark ? '#1f2937' : '#4ade80' }}
            >
              <div className="flex items-start justify-between">
                <span className={`px-3 py-1 rounded-full text-xs ${isDark ? 'border-1 border-red- text-white' : 'border border-gray-400'
                  }`}>
                  + Detail
                </span>
                <button
                  onClick={() => onPostClick('2')}
                  className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:rotate-90 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <p className={`text-sm leading-relaxed line-clamp-4 ${isDark ? 'text-white' : 'text-black/80'}`}>
                AI-powered backend system for researchers to discover, analyze, and summarize academic papers.
                Features multi-agent architecture using Google's Gemini AI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden h-[236px] group">
              <img
                src="https://images.unsplash.com/photo-1762430815620-fcca603c240c?auto=format&fit=crop&w=1200&q=80"
                className="w-full h-full object-cover"
                alt=""
              />

              <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full text-xs flex items-center justify-center">
                24
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <button
                  onClick={() => onPostClick('3')}
                  className="w-full rounded-2xl px-4 py-3 bg-white text-sm hover:scale-105 transition text-black"
                >
                  Learn more →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
