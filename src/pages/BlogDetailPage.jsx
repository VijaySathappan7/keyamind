import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  User, 
  ChevronRight,
  BookOpen
} from "lucide-react";
import { blogsData } from "../store/blogsData";
import SEOHead from "../components/SEOHead";
import ContentSection from "../components/ContentSection";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const blog = blogsData.find((b) => b.slug === slug);

  // If blog slug not found, show custom premium 404 panel
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-mesh px-4">
        <div className="glass-premium rounded-3xl p-8 max-w-md text-center border-white/60 shadow-2xl">
          <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-black text-dark-lavender mb-2 font-outfit">Article Not Found</h2>
          <p className="text-sm text-dark-lavender/60 mb-6 font-semibold">The educational resource you are looking for may have been relocated or updated.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-dark-lavender to-purple-800 text-white text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Knowledge Hub</span>
          </Link>
        </div>
      </div>
    );
  }

  // Structured dynamic BlogPosting schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://keyamind.com/blog/${blog.slug}`
    },
    "headline": blog.title,
    "description": blog.description,
    "image": blog.image,
    "datePublished": "2026-05-18",
    "dateModified": "2026-05-18",
    "author": {
      "@type": "Person",
      "name": blog.author.name,
      "jobTitle": blog.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Keyamind Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://keyamind.com/favicon.svg"
      }
    }
  };

  // Get related articles (excluding the current one)
  const relatedBlogs = blogsData
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 2);

  return (
    <>
      <SEOHead 
        title={`${blog.title} | Keyamind Solutions`}
        description={blog.description}
        canonical={`https://keyamind.com/blog/${blog.slug}`}
        keywords={blog.keywords}
        ogImage={blog.image}
        ogType="article"
      />

      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-mesh overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Aesthetic background glows */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-purple-200/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-pink-200/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          
          {/* ================= BREADCRUMBS ================= */}
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-dark-lavender/40 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/blog" className="hover:text-purple-600 transition-colors">Knowledge Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-600/30" />
            <span className="text-purple-600 truncate max-w-[200px] sm:max-w-xs">{blog.title}</span>
          </nav>

          {/* ================= ARTICLE HEADER ================= */}
          <div className="max-w-4xl mx-auto mb-10 text-center">
            
            <span className="inline-block px-3.5 py-1 rounded-full bg-purple-50 text-[10px] font-black uppercase tracking-widest text-purple-700 border border-purple-100 mb-6">
              {blog.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-lavender tracking-tight leading-tight mb-6 font-outfit">
              {blog.title}
            </h1>

            {/* Author card & timing */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-black uppercase tracking-widest text-dark-lavender/50">
              
              <div className="flex items-center gap-2.5">
                <img 
                  src={blog.author.avatar} 
                  alt={blog.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-purple-100"
                />
                <div className="text-left">
                  <h4 className="font-bold text-dark-lavender">{blog.author.name}</h4>
                  <span className="text-[8px] text-dark-lavender/40 uppercase font-black">{blog.author.role}</span>
                </div>
              </div>

              <div className="h-4 w-px bg-purple-100/70 hidden sm:block" />

              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-500" />
                {blog.date}
              </span>

              <div className="h-4 w-px bg-purple-100/70 hidden sm:block" />

              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-500" />
                {blog.readTime}
              </span>

            </div>

          </div>

          {/* ================= COVER IMAGE ================= */}
          <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-2xl aspect-[21/9] bg-purple-50 mb-16 border border-white/60">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* ================= MAIN DUAL LAYOUT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-4xl mx-auto">
            
            {/* Left Sticky Sidebar (Share / Tools) */}
            <div className="hidden lg:block lg:col-span-1 sticky top-32 space-y-4">
              <button 
                title="Share Article"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: blog.title,
                      url: window.location.href
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article link copied to clipboard!");
                  }
                }}
                className="w-10 h-10 rounded-full bg-white border border-purple-50 hover:bg-purple-50 text-dark-lavender flex items-center justify-center transition-colors cursor-pointer shadow-sm"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                title="Bookmark Article"
                className="w-10 h-10 rounded-full bg-white border border-purple-50 hover:bg-purple-50 text-dark-lavender flex items-center justify-center transition-colors cursor-pointer shadow-sm"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

            {/* Middle Main Content */}
            <main className="col-span-1 lg:col-span-11">
              
              {/* Premium Article Typography Container */}
              <div 
                className="prose prose-purple max-w-none text-dark-lavender/80 font-medium text-sm sm:text-base leading-relaxed space-y-6
                  prose-headings:text-dark-lavender prose-headings:font-black prose-headings:font-outfit prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:pt-4 prose-h2:pb-2
                  prose-strong:text-dark-lavender prose-strong:font-black
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                  prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-purple-900 prose-blockquote:bg-purple-50/40 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-2xl"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Dynamic bottom tools (mobile visible) */}
              <div className="mt-12 pt-8 border-t border-purple-50/60 flex items-center justify-between lg:justify-end gap-4">
                <span className="text-xs font-black uppercase text-dark-lavender/40 tracking-wider">Share this article:</span>
                <div className="flex gap-2.5">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article link copied!");
                    }}
                    className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold hover:bg-purple-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>

              {/* Bottom dynamic author bio */}
              <div className="glass-premium rounded-3xl p-6 sm:p-8 mt-12 border-white/60 shadow-xl flex flex-col sm:flex-row gap-5 items-center">
                <img 
                  src={blog.author.avatar} 
                  alt={blog.author.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                />
                <div className="text-center sm:text-left space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <User className="w-3.5 h-3.5 text-purple-600" />
                    <h3 className="text-sm font-black text-dark-lavender uppercase tracking-wider">{blog.author.name}</h3>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 block">{blog.author.role}</span>
                  <p className="text-xs text-dark-lavender/65 leading-relaxed font-semibold">
                    Dr. Rajan and our guest writers review anatomical, dermatoglyphic, and psychological literature to author verified, science-backed educational materials for parents and couples.
                  </p>
                </div>
              </div>

            </main>

          </div>

          {/* ================= RELATED ARTICLES ================= */}
          <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-purple-100/50">
            <h2 className="text-2xl font-black text-dark-lavender font-outfit mb-8 tracking-tight">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((rel) => (
                <div 
                  key={rel.slug}
                  className="bg-white border border-purple-50 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="aspect-[21/10] overflow-hidden bg-purple-50 relative">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full bg-white/95 text-[8px] font-black uppercase tracking-wider text-purple-700">
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm sm:text-base font-black text-dark-lavender font-poppins leading-snug mb-2 hover:text-purple-600 transition-colors">
                      <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="text-xs text-dark-lavender/65 font-semibold line-clamp-2 mb-4">{rel.description}</p>
                    <Link to={`/blog/${rel.slug}`} className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-purple-600 hover:underline">
                      <span>Read Article</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= HIGH-CONVERSION CTA ================= */}
          <div className="max-w-4xl mx-auto mt-20">
            <motion.div 
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-[32px] bg-gradient-to-r from-dark-lavender via-purple-900 to-purple-800 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none" />
              
              <h2 className="text-3xl font-black mb-4 font-outfit">
                Experience the Science Personally
              </h2>
              <p className="text-sm text-purple-200 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                Connect with our certified child development and career counseling consultants today. Request a compatibility scan or career roadmap.
              </p>

              <motion.a 
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    window.lenis.scrollTo("#contact", { offset: -80, duration: 1.2 });
                  } else {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-dark-lavender font-black text-xs uppercase tracking-widest shadow-xl transition-all font-poppins cursor-pointer"
              >
                <span>Book Consultation Session</span>
                <ArrowLeft className="w-4 h-4 text-purple-600 rotate-180" />
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
      <ContentSection />
    </>
  );
}
