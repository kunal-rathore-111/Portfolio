import { motion } from "motion/react";
import { Github, ExternalLink, ArrowUpRight, Plus } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  content: string;
}

interface ProjectsSectionProps {
  isDark: boolean;
  onProjectClick: (projectId: string) => void;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Research Paper Copilot",
    tagline: "Your AI-powered task assistant.",
    description:
      "An AI-powered backend system for researchers to discover, analyze, and summarize academic papers. Features multi-agent architecture using Google's Gemini AI and arXiv API, streamlining research with intelligent insights and efficient data retrieval.",
    role: "Backend Developer, Team Superviser",
    image:
      "https://images.unsplash.com/photo-1719461361775-9ff7e33b42c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHBhcGVyJTIwYWNhZGVtaWMlMjBzdHVkeXxlbnwxfHx8fDE3NjU4MTc5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: [],
    githubUrl: "https://github.com/yourusername/research-copilot",
    liveUrl: "https://research-copilot-demo.com",
    content: `Research Paper Copilot is an intelligent backend system designed to revolutionize how researchers interact with academic literature. Built with cutting-edge AI technology, it serves as your personal research assistant.

**Key Features:**

Multi-Agent Architecture: Leverages Google's Gemini AI to power multiple specialized agents that work together seamlessly. Each agent handles specific tasks like paper discovery, analysis, and summarization.

arXiv Integration: Direct integration with arXiv API provides access to millions of research papers across various scientific disciplines. Find exactly what you need, when you need it.

Intelligent Summarization: Advanced natural language processing transforms lengthy academic papers into concise, actionable insights without losing critical information.

Efficient Data Retrieval: Optimized backend architecture ensures fast, reliable access to research data, making your workflow smoother and more productive.

**My Role:**

As Backend Developer and Team Supervisor, I architected the entire backend infrastructure, designed the multi-agent system, and led a team of developers to bring this vision to life. I was responsible for API integrations, database design, and ensuring the system's scalability and performance.

**Technical Highlights:**

The system employs a microservices architecture with dedicated services for paper retrieval, AI processing, and data management. We utilized modern backend technologies and best practices to ensure maintainability and extensibility.

**Impact:**

Research Paper Copilot has helped researchers save countless hours in literature review, enabling them to focus on what matters most—their research. The intelligent summarization feature alone has reduced paper review time by up to 70%.`,
  },
];

export function ProjectsSection({ isDark, onProjectClick }: ProjectsSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2
          className={`text-3xl md:text-4xl transition-colors duration-700 ${isDark ? "text-white" : "text-black"
            }`}
        >
          Featured Projects
        </h2>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Main Featured Card - Span 2 */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className={`relative rounded-3xl overflow-hidden h-[450px] group ${isDark
                    ? "bg-gradient-to-br from-blue-900 to-blue-800"
                    : "bg-gradient-to-br from-blue-200 to-blue-300"
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? "opacity-80" : ""
                    }`}
                />

                {/* Overlay Card */}
                <div className="absolute top-6 right-8 bottom-6 max-w-xs hidden md:block">
                  <div
                    className={`rounded-2xl p-6 shadow-lg h-full flex flex-col justify-center ${isDark ? "bg-[#2a2a2a]" : "bg-white"
                      }`}
                  >
                    <div
                      className={`text-xs mb-3 ${isDark ? "text-white/60" : "opacity-60"
                        }`}
                    >
                      + {project.role}
                    </div>
                    <h3
                      className={`text-2xl mb-2 ${isDark ? "text-white" : "text-black"
                        }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-white/60" : "opacity-60"
                        }`}
                    >
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Mobile Overlay (simplified) */}
                <div className="absolute bottom-6 left-6 right-16 md:hidden">
                  <div className={`rounded-2xl p-4 shadow-lg ${isDark ? "bg-[#2a2a2a]" : "bg-white"}`}>
                    <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>{project.title}</h3>
                  </div>
                </div>

                <button
                  onClick={() => onProjectClick(project.id)}
                  className={`absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-white hover:bg-gray-100"
                    }`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Right Side Cards */}
            <div className="flex flex-col gap-6">
              {/* Top Card - Blue Gradient - Description */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div
                  className={`relative rounded-3xl p-6 h-[210px] flex flex-col justify-between ${isDark
                      ? "bg-gradient-to-br from-cyan-900 to-cyan-800"
                      : "bg-gradient-to-br from-cyan-100 to-cyan-200"
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${isDark
                          ? "border border-white/40 text-white"
                          : "border border-gray-400"
                        }`}
                    >
                      + INFO
                    </span>
                    <button
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 ${isDark
                          ? "bg-white text-black hover:bg-gray-200"
                          : "bg-white hover:bg-gray-100"
                        }`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <p
                      className={`text-sm leading-relaxed line-clamp-3 ${isDark ? "text-white/80" : "text-black/80"
                        }`}
                    >
                      {project.description}
                    </p>
                    <button
                      onClick={() => onProjectClick(project.id)}
                      className={`text-xs hover:underline transition-all mt-2 ${isDark ? "text-white/80" : ""
                        }`}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Card - Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div
                  className={`relative rounded-3xl p-6 h-[210px] flex flex-col justify-between ${isDark
                      ? "bg-gradient-to-br from-green-900 to-green-800"
                      : "bg-gradient-to-br from-green-200 to-green-300"
                    }`}
                >
                  {/* Github/Live Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => onProjectClick(project.id)}
                      className={`w-full rounded-2xl px-4 py-3 text-sm transition-all duration-300 hover:scale-105 ${isDark
                          ? "bg-white text-black hover:bg-gray-100"
                          : "bg-white hover:bg-gray-100"
                        }`}
                    >
                      View Project Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Export projects data for use in detail page
export { projects };
export type { Project };
