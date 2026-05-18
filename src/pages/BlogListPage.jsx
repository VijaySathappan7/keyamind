import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogsData } from "../store/blogsData";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import ContentSection from "../components/ContentSection";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "DMIT Science", "Parenting", "Career Alignment"];

  // Filter logic
  const filteredBlogs = blogsData.filter((blog) => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.keywords.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  return (
    <>
      <SEOHead 
        title="Scientific Parenting & Cognitive Mapping Blogs | Keyamind"
        description="Explore expert, science-backed articles on DMIT brain mapping, child development, cognitive testing, brain quotients, and parenting methodologies."
        canonical="https://keyamind.com/blog"
        keywords="brain mapping blogs, parenting advice science, multiple intelligences Gardner, DMIT test articles, career alignment tips"
      />

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-mesh overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Soft atmospheric background lights */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          
          {/* ================= HERO TITLE ================= */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-md mb-4">
              <BookOpen className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Keyamind Cognitive Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-dark-lavender font-outfit mb-4">
              Innate Wisdom & <span className="text-gradient-purple">Science</span>
            </h1>
            <p className="text-sm sm:text-base text-dark-lavender/70 font-medium leading-relaxed">
              Read expert, clinical reviews and resources on child psychology, brain mapping science, stream planning, quotients, and parent synergy.
            </p>
          </div>

          {/* ================= SEARCH & TABS HUB ================= */}
          <div className="glass-premium rounded-3xl p-6 mb-12 border-white/60 shadow-xl flex flex-col md:flex-row gap-6 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-lavender/40" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles (e.g. VAK, IQ, Lobes)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-purple-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/25 text-sm font-semibold text-dark-lavender transition-all"
              />
            </div>

            {/* Category tabs */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat 
                      ? "bg-gradient-to-r from-dark-lavender to-purple-800 text-white shadow-md shadow-purple-900/10" 
                      : "bg-white/60 text-dark-lavender/60 border border-purple-50 hover:bg-white hover:text-purple-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* ================= BLOG CARDS GRID ================= */}
          <AnimatePresence mode="wait">
            {filteredBlogs.length > 0 ? (
              <motion.div 
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredBlogs.map((blog) => (
                  <motion.article 
                    key={blog.slug}
                    variants={cardVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="bg-white border border-purple-50 rounded-3xl overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    
                    {/* Header Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-purple-50">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 text-[9px] font-black uppercase tracking-wider text-purple-700 shadow-sm">
                        {blog.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        
                        {/* Meta */}
                        <div className="flex gap-4 text-[10px] font-black text-dark-lavender/40 uppercase tracking-widest mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {blog.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-black text-dark-lavender font-poppins leading-snug mb-3 hover:text-purple-600 transition-colors">
                          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </h3>

                        {/* Summary */}
                        <p className="text-xs text-dark-lavender/65 leading-relaxed font-semibold mb-6">
                          {blog.description}
                        </p>

                      </div>

                      {/* Footer Autor & Read More */}
                      <div className="pt-4 border-t border-purple-50/60 flex items-center justify-between">
                        
                        {/* Author */}
                        <div className="flex items-center gap-2.5">
                          <img 
                            src={blog.author.avatar} 
                            alt={blog.author.name}
                            className="w-8 h-8 rounded-full object-cover border border-purple-100"
                          />
                          <div>
                            <h4 className="text-[10px] font-bold text-dark-lavender">{blog.author.name}</h4>
                            <span className="text-[8px] text-dark-lavender/45 font-black uppercase tracking-wider">{blog.author.role}</span>
                          </div>
                        </div>

                        {/* CTA Link */}
                        <Link 
                          to={`/blog/${blog.slug}`} 
                          className="w-8 h-8 rounded-full bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-purple-600 transition-colors"
                          aria-label={`Read ${blog.title}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                      </div>
                    </div>

                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 bg-white/40 border border-purple-50 rounded-3xl backdrop-blur-md"
              >
                <p className="text-sm font-semibold text-dark-lavender/60">No articles found matching your search filters.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-4 text-xs font-black uppercase text-purple-600 tracking-wider hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
      <ContentSection />
    </>
  );
}
