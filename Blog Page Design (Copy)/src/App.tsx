import { useState, useEffect } from "react";
import {
  Search,
  Menu,
  ArrowUpRight,
  Plus,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { Header } from "./components/Header";
import { BestOfWeek } from "./components/BestOfWeek";
import { FashionSection } from "./components/FashionSection";
import { TechSection } from "./components/TechSection";
import { MoviesSection } from "./components/MoviesSection";
import { MyLifeSection } from "./components/MyLifeSection";
import { BroadcastSection } from "./components/BroadcastSection";
import { BlogPostDetail } from "./components/BlogPostDetail";
import { AllBlogs } from "./components/AllBlogs";
import { ProjectsSection, projects } from "./components/ProjectsSection";
import { ProjectDetail } from "./components/ProjectDetail";
import type { Project } from "./components/ProjectsSection";

// Sample blog post data - replace with your bacend data
const samplePosts = [
  {
    id: "1",
    title: "1.Research Paper Copilot",
    description:
      "Learn more about amazing travel destinations and how to plan your perfect vacation with expert tips and insider knowledge.",
    content: `Traveling to dream destinations has never been more accessible. With proper planning and the right mindset, you can turn your travel dreams into reality.

Planning your journey is the first step to success. Research your destination, understand the local culture, and prepare for the adventure ahead. Every great trip starts with thorough preparation.

The world is full of incredible places waiting to be explored. From pristine beaches to mountain peaks, from bustling cities to quiet villages, there's a destination for every type of traveler.

Don't let fear or uncertainty hold you back. Start small, gain confidence, and gradually expand your horizons. The experiences you'll gain are invaluable and will stay with you forever.

Remember, the journey is just as important as the destination. Embrace the unexpected, meet new people, and create memories that will last a lifetime.`,
    image:
      "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY1NjQ4MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Travel", "Adventure", "Tips"],
    category: "travel",
    date: "Sep 06, 2022",
    author: "John Doe",
    readTime: "5",
  },
  {
    id: "2",
    title: "Real talk in a corporate world",
    description:
      "Learn more about our community and benefits of being part of the Broadcast membership.",
    content: `The corporate world can be challenging, but it doesn't have to be impersonal. Real conversations and authentic connections matter more than ever.

Building a community of like-minded professionals creates opportunities for growth, learning, and mutual support. When we share our experiences openly, everyone benefits.

The Broadcast membership brings together thought leaders, innovators, and professionals who value honest dialogue over corporate speak. We believe in transparency, collaboration, and real human connection.

Join us in creating a space where authenticity is celebrated, ideas are shared freely, and professional growth is a collective journey. Together, we're changing the conversation.`,
    image:
      "https://images.unsplash.com/photo-1632813985160-b0c2c88d1bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBzdGFydHVwfGVufDF8fHx8MTc2NTcwNjMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["ADS", "Community", "Business"],
    category: "business",
    date: "Sep 08, 2022",
    author: "Jane Smith",
    readTime: "4",
  },
  {
    id: "3",
    title: "Representing brands as the source for inspiration",
    description:
      "Discover how brands are becoming the new source of creative inspiration in the fashion industry.",
    content: `Fashion brands are no longer just selling products—they're selling dreams, lifestyles, and inspiration. The modern brand is a creative force that shapes culture and influences how we see the world.

Today's most successful brands understand that their role extends beyond commerce. They're curators of taste, trendsetters, and storytellers who connect with audiences on an emotional level.

The relationship between brands and consumers has evolved into a dialogue. Social media has democratized fashion, allowing brands to engage directly with their audience and vice versa.

Innovation in fashion comes from this creative exchange. When brands listen to their community and stay true to their vision, they create something truly special—products and experiences that resonate deeply.

The future of fashion is collaborative, sustainable, and inspiring. Brands that embrace this reality will lead the way forward.`,
    image:
      "https://images.unsplash.com/photo-1762430815620-fcca603c240c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWx8ZW58MXx8fHwxNzY1NjQ5MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Fashion", "Brands", "Inspiration"],
    category: "fashion",
    date: "Dec 28, 2022",
    author: "Sarah Johnson",
    readTime: "6",
  },
  {
    id: "4",
    title: "The Art of Minimalist Living",
    description:
      "Embrace simplicity and discover the freedom that comes with living with less.",
    content: `Minimalism is not about deprivation—it's about intentionality. By removing the excess, we make room for what truly matters in our lives.

Living with less doesn't mean living without joy. In fact, many minimalists report feeling more fulfilled and happier after simplifying their lives.

Start small. Choose one area of your life to declutter, whether it's your closet, your digital files, or your daily schedule. The process of letting go can be liberating.

Minimalism looks different for everyone. It's not about following strict rules, but about finding what works for you and your unique circumstances.`,
    image:
      "https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjU2MzkzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Lifestyle", "Minimalism", "Wellness"],
    category: "myLife",
    date: "Nov 15, 2022",
    author: "Alex Chen",
    readTime: "4",
  },
  {
    id: "5",
    title: "Digital Detox: Reclaiming Your Time",
    description:
      "Learn how to disconnect from technology and reconnect with yourself.",
    content: `In our hyper-connected world, taking a break from digital devices has become more important than ever. A digital detox can help reset your relationship with technology.

Start by identifying your digital habits. How much time do you spend on your phone? Which apps consume most of your attention? Awareness is the first step.

Set boundaries. Designate tech-free times during your day, like during meals or before bed. Create spaces in your home where devices aren't allowed.

Replace screen time with meaningful activities. Read a book, take a walk, have face-to-face conversations. You'll be surprised how much time you reclaim.`,
    image:
      "https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGNvZGluZ3xlbnwxfHx8fDE3NjU3MDYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Technology", "Wellness", "Productivity"],
    category: "technology",
    date: "Oct 22, 2022",
    author: "Maria Rodriguez",
    readTime: "5",
  },
  {
    id: "6",
    title: "Sustainable Fashion: A Modern Necessity",
    description:
      "Explore how sustainable practices are reshaping the fashion industry.",
    content: `The fashion industry is one of the largest polluters globally, but change is happening. Sustainable fashion is no longer a niche—it's becoming mainstream.

Consumers are demanding transparency. They want to know where their clothes come from, who made them, and what impact they have on the environment.

Brands are responding with innovative solutions: recycled materials, circular business models, and ethical manufacturing practices.

As individuals, we can make a difference through our choices. Buy less, choose quality over quantity, support sustainable brands, and care for the clothes you already own.`,
    image:
      "https://images.unsplash.com/photo-1595550510467-930da051f939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBwaW5rfGVufDF8fHx8MTc2NTcwMzEwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Fashion", "Sustainability", "Environment"],
    category: "fashion",
    date: "Sep 30, 2022",
    author: "Emma Thompson",
    readTime: "7",
  },
  {
    id: "7",
    title: "The Future of Remote Work",
    description:
      "How remote work is transforming careers and lifestyles worldwide.",
    content: `Remote work has evolved from a temporary solution to a permanent fixture in the modern workplace. This shift is changing how we think about careers and life balance.

Companies are discovering that remote work can increase productivity and employee satisfaction while reducing overhead costs.

For workers, the benefits are clear: no commute, flexible schedules, and the freedom to live anywhere. But challenges exist too—maintaining boundaries, staying connected, and avoiding isolation.

The future is likely hybrid, combining the best of remote and office work. Success requires intentional communication, trust, and the right tools.`,
    image:
      "https://images.unsplash.com/photo-1617035969674-85423701b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB3b3JrJTIwbGFwdG9wfGVufDF8fHx8MTc2NTY0MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Work", "Career", "Technology"],
    category: "technology",
    date: "Aug 18, 2022",
    author: "David Park",
    readTime: "6",
  },
  {
    id: "8",
    title: "Mindfulness in the Modern Age",
    description:
      "Practical techniques for staying present in a distracted world.",
    content: `Mindfulness is the practice of being fully present in the moment. In our fast-paced, distraction-filled world, this simple concept has become revolutionary.

You don't need to meditate for hours to benefit from mindfulness. Start with just five minutes a day, focusing on your breath and observing your thoughts without judgment.

Bring mindfulness into daily activities. Pay attention while eating, walking, or even washing dishes. These moments of presence add up.

The benefits are backed by science: reduced stress, improved focus, better emotional regulation, and enhanced well-being. Mindfulness isn't just a trend—it's a valuable life skill.`,
    image:
      "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHlvZ2ElMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NTcwNjMyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Wellness", "Mental Health", "Meditation"],
    category: "myLife",
    date: "Jul 12, 2022",
    author: "Lisa Wong",
    readTime: "5",
  },
  {
    id: "9",
    title: "Cinema Classics That Shaped Modern Storytelling",
    description:
      "Exploring the timeless films that continue to influence filmmakers today.",
    content: `The history of cinema is filled with masterpieces that have stood the test of time. These classics didn't just entertain—they revolutionized the art of storytelling.

From the groundbreaking techniques of early cinema to the bold narratives of the New Hollywood era, each generation of filmmakers has pushed boundaries and expanded what's possible on screen.

Understanding these classics helps us appreciate modern cinema. Today's directors still draw inspiration from the cinematography, narrative structures, and emotional depth of these timeless works.

Whether you're a casual viewer or a serious cinephile, exploring cinema classics opens up a rich world of artistic achievement and human expression.`,
    image:
      "https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NTYzMDcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Movies", "Cinema", "Storytelling"],
    category: "movies",
    date: "Nov 10, 2022",
    author: "Michael Stevens",
    readTime: "8",
  },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedPost, setSelectedPost] = useState<
    (typeof samplePosts)[0] | null
  >(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null,
  );
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleShowAllBlogs = () => {
      setShowAllBlogs(true);
      setSelectedPost(null);
    };

    window.addEventListener("showAllBlogs", handleShowAllBlogs);
    return () =>
      window.removeEventListener(
        "showAllBlogs",
        handleShowAllBlogs,
      );
  }, []);

  const handlePostClick = (postId: string) => {
    const post = samplePosts.find((p) => p.id === postId);
    if (post) {
      setSelectedPost(post);
      setShowAllBlogs(false);
    }
  };

  const handleBackToHome = () => {
    setSelectedPost(null);
    setShowAllBlogs(false);
  };

  const handleShowAllBlogs = () => {
    setShowAllBlogs(true);
    setSelectedPost(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedPost(null);
    setShowAllBlogs(false);
  };

  const scrollToContact = () => {
    // If we're not on the home page, go back to home first
    if (selectedPost || showAllBlogs) {
      setSelectedPost(null);
      setShowAllBlogs(false);
      // Wait for the page transition animation to complete, then scroll to contact section
      setTimeout(() => {
        const contactSection = document.getElementById(
          "talk-to-me-section",
        );
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    } else {
      // We're already on the home page, just scroll
      const contactSection = document.getElementById(
        "talk-to-me-section",
      );
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleProjectClick = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setShowAllProjects(false);
    }
  };

  const handleBackToHomeFromProjects = () => {
    setSelectedProject(null);
    setShowAllProjects(false);
  };

  const handleShowAllProjects = () => {
    setShowAllProjects(true);
    setSelectedProject(null);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${isDark ? "bg-[#0a0a0a]" : "bg-[#1a1a1a]"}`}
    >
      {/* Fixed Header with blur only on top gap */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Blur gap at the top - only in the center matching navbar width */}
        <div className="h-2 md:h-3 flex justify-center px-4 md:px-8">
          <div className="w-full max-w-[950px] h-full backdrop-blur-xl"></div>
        </div>

        {/* Solid navbar */}
        <div className="px-4 md:px-8">
          <div
            className={`max-w-[950px] mx-auto transition-colors duration-700 ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
          >
            <Header
              isDark={isDark}
              toggleTheme={() => setIsDark(!isDark)}
              onLogoClick={scrollToTop}
              onArticlesClick={handleShowAllBlogs}
              onContactClick={scrollToContact}
            />
          </div>
        </div>
      </div>

      {/* Main Content with top padding to account for fixed header */}
      <div className="pt-24 md:pt-28 p-4 md:p-8">
        <motion.div
          className={`max-w-[950px] mx-auto rounded-3xl overflow-hidden transition-colors duration-700 ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 md:p-12">
            <AnimatePresence mode="wait">
              {selectedPost ? (
                <motion.div
                  key="post-detail"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <BlogPostDetail
                    isDark={isDark}
                    post={selectedPost}
                    onBack={handleBackToHome}
                  />
                </motion.div>
              ) : showAllBlogs ? (
                <motion.div
                  key="all-blogs"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <AllBlogs
                    isDark={isDark}
                    onBack={handleBackToHome}
                    onPostClick={handlePostClick}
                    blogs={samplePosts}
                  />
                </motion.div>
              ) : selectedProject ? (
                <motion.div
                  key="project-detail"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectDetail
                    isDark={isDark}
                    project={selectedProject}
                    onBack={handleBackToHomeFromProjects}
                  />
                </motion.div>
              ) : showAllProjects ? (
                <motion.div
                  key="all-projects"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectsSection
                    isDark={isDark}
                    onProjectClick={handleProjectClick}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BestOfWeek
                    isDark={isDark}
                    onPostClick={handlePostClick}
                    onShowAllBlogs={handleShowAllBlogs}
                  />

                  <div className="my-16 md:my-24">
                    <FashionSection
                      isDark={isDark}
                      onPostClick={handlePostClick}
                    />
                  </div>

                  <div className="my-16 md:my-24">
                    <TechSection
                      isDark={isDark}
                      onPostClick={handlePostClick}
                    />
                  </div>

                  <div className="my-16 md:my-24">
                    <MoviesSection
                      isDark={isDark}
                      onPostClick={handlePostClick}
                    />
                  </div>

                  <div className="my-16 md:my-24">
                    <MyLifeSection
                      isDark={isDark}
                      onPostClick={handlePostClick}
                    />
                  </div>

                  <div className="my-16 md:my-24">
                    <ProjectsSection
                      isDark={isDark}
                      onProjectClick={handleProjectClick}
                    />
                  </div>

                  <div className="mt-16 md:mt-24">
                    <BroadcastSection isDark={isDark} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}