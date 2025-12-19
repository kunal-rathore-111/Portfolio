import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface BlogPostDetailProps {
  isDark: boolean;
  post: {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    tags: string[];
    category: string;
    date: string;
    author?: string;
    readTime?: string;
  };
  onBack: () => void;
}

export function BlogPostDetail({ isDark, post, onBack }: BlogPostDetailProps) {
  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className={`flex items-center gap-2 mb-8 transition-colors ${
          isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to posts</span>
      </button>

      {/* Hero Image */}
      <div className="relative rounded-3xl overflow-hidden mb-8 h-[400px] md:h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Date and Category Tags - Below Image */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-gray-100 text-black border border-gray-200'}`}>
          {post.date}
        </span>
        <span className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-gray-100 text-black border border-gray-200'}`}>
          + {post.category}
        </span>
        {post.readTime && (
          <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            • {post.readTime} min read
          </span>
        )}
        {post.author && (
          <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            • By {post.author}
          </span>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-sm ${
              isDark
                ? 'bg-white/10 text-white border border-white/20'
                : 'bg-gray-100 text-black border border-gray-200'
            }`}
          >
            + {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className={`text-4xl md:text-6xl mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
        {post.title}
      </h1>

      {/* Description */}
      <p className={`text-xl mb-8 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
        {post.description}
      </p>

      {/* Divider */}
      <div className={`h-px mb-8 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

      {/* Content */}
      <div
        className={`prose prose-lg max-w-none ${
          isDark
            ? 'prose-invert prose-headings:text-white prose-p:text-white/80 prose-a:text-blue-400'
            : 'prose-headings:text-black prose-p:text-black/80 prose-a:text-blue-600'
        }`}
      >
        {/* Parse the content - assuming it comes as HTML or you can split by paragraphs */}
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={isDark ? 'text-white/80' : 'text-black/80'}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Share Section */}
      <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <h3 className={`text-xl mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
          Share this post
        </h3>
        <div className="flex gap-3">
          <button
            className={`px-6 py-3 rounded-full transition-colors ${
              isDark
                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                : 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
            }`}
          >
            Twitter
          </button>
          <button
            className={`px-6 py-3 rounded-full transition-colors ${
              isDark
                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                : 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
            }`}
          >
            LinkedIn
          </button>
          <button
            className={`px-6 py-3 rounded-full transition-colors ${
              isDark
                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                : 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
            }`}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}