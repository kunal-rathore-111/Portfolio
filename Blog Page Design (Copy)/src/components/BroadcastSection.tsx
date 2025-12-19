import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface BroadcastSectionProps {
  isDark: boolean;
}

export function BroadcastSection({ isDark }: BroadcastSectionProps) {
  return (
    <motion.div
      id="talk-to-me-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className={`text-5xl md:text-7xl italic ${isDark ? 'text-white' : 'text-black'}`}>Talk to me</h2>
      </div>

      {/* Social Icons Row */}
      <motion.div 
        className="flex justify-center items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-28 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-28 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="mailto:your@email.com"
          className="w-28 h-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-28 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </motion.div>
    </motion.div>
  );
}