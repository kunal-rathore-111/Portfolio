import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Project } from "./ProjectsSection";

interface ProjectDetailProps {
  isDark: boolean;
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ isDark, project, onBack }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className={`flex items-center gap-2 mb-8 transition-opacity hover:opacity-70 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Projects</span>
      </button>

      {/* Project Header */}
      <div className="mb-12">
        <p
          className={`text-sm mb-3 transition-colors duration-700 ${
            isDark ? "text-white/60" : "text-black/60"
          }`}
        >
          + {project.role}
        </p>
        <h1
          className={`text-4xl md:text-5xl mb-4 transition-colors duration-700 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {project.title}
        </h1>
        <p
          className={`text-xl mb-6 transition-colors duration-700 ${
            isDark ? "text-white/70" : "text-black/70"
          }`}
        >
          {project.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              <ExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Project Image */}
      <motion.div
        className="rounded-3xl overflow-hidden mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] md:h-[600px] object-cover"
        />
      </motion.div>

      {/* Project Content */}
      <motion.div
        className={`prose prose-lg max-w-none transition-colors duration-700 ${
          isDark
            ? "prose-invert prose-headings:text-white prose-p:text-white/70 prose-strong:text-white"
            : "prose-headings:text-black prose-p:text-black/70 prose-strong:text-black"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {project.content.split("\n\n").map((paragraph, index) => {
          // Check if it's a heading (starts with **)
          if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
            return (
              <h2 key={index} className="mt-8 mb-4">
                {paragraph.replace(/\*\*/g, "")}
              </h2>
            );
          }
          return (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph.split("**").map((part, i) => {
                if (i % 2 === 1) {
                  return <strong key={i}>{part}</strong>;
                }
                return part;
              })}
            </p>
          );
        })}
      </motion.div>

      {/* Tech Stack Section - Empty for now */}
      <div className="mt-12">
        {/* You'll add tech stack display here later */}
      </div>

      {/* Back to Projects Button */}
      <motion.div
        className="mt-12 pt-12 border-t"
        style={{
          borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={onBack}
          className={`flex items-center gap-2 transition-opacity hover:opacity-70 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
