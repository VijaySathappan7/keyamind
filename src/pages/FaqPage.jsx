import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, HelpCircle, ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";
import SEOHead from "../components/SEOHead";
import ContentSection from "../components/ContentSection";

const FaqItem = memo(({ faq, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      className="bg-white border border-purple-50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.02)] transition-shadow"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
      >
        <span className="text-sm sm:text-base font-black text-dark-lavender font-poppins pr-4 leading-snug">
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-purple-100' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 pt-1 border-t border-purple-50/50 text-xs sm:text-sm text-dark-lavender/70 font-semibold leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FaqItem.displayName = "FaqItem";

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const categories = ["All", "IBM Science", "Parenting Guidance", "Safety & Security"];

  const faqs = [
    {
      q: "How scientific and reliable is the IBM assessment?",
      a: "IBM (Innate Brain Mapping) is based on the biological synchronization of fingerprint development and brain formation. Dermal ridges develop in the fetus's ectoderm layer between the 13th and 21st weeks, which is the exact same period and cellular origin as the central nervous system's neocortex. It compiles decades of empirical research in genetics, neurobiology, and Howard Gardner's theory of Multiple Intelligences, offering a 90%+ scientific accuracy correlation regarding innate learning channels and brain hemisphere dominance.",
      cat: "IBM Science"
    },
    {
      q: "Are my child's fingerprints saved or shared in your database?",
      a: "Absolutely not. At Keyamind Solutions, we treat data security with the utmost seriousness. The raw scan files are fully encrypted at the moment of scanning, immediately compiled into a secure mathematical vector file for evaluation, and then permanently scrubbed and deleted from our scanners and local drives within 24 hours. We strictly comply with global biometric privacy laws and never share, warehouse, or monetize individual biometric prints. The final assessment document contains only alphanumeric quotient charts, entirely decoupled from biometric signatures.",
      cat: "Safety & Security"
    },
    {
      q: "What is the best age group to undergo an IBM brain mapping?",
      a: "Dermal ridges are formed permanently in the womb and never change throughout a human lifetime. Therefore, IBM can be conducted as early as age 2 (once the child's finger size allows for distinct scanner registration). It is highly recommended for: Toddlers (2-6 years) to understand innate learning preferences; School children (7-12 years) to address concentration blocks; Teenagers (13-18) to select academic streams and college majors; and Adults/Working Professionals looking for career transitions or marital relationship synergy.",
      cat: "IBM Science"
    },
    {
      q: "How does IBM differ from a traditional IQ test?",
      a: "A traditional IQ (Intelligence Quotient) test is an active paper-or-web questionnaire. It measures a child's immediate academic ability, current vocabulary, and problem-solving response under time pressure—which fluctuates heavily based on their current academic learning, stress levels, and coaching. In contrast, IBM is a static biological mapping. It measures *innate capacity* rather than current academic achievement, evaluating the complete spectrum of human qualities: Intelligence Quotient (IQ), Emotional Quotient (EQ), Creativity Quotient (CQ), and Adversity Quotient (AQ).",
      cat: "IBM Science"
    },
    {
      q: "What is Parent-Child Compatibility Mapping and how does it help?",
      a: "It is an advanced service where we scan the fingerprint profiles of both the parent(s) and the child. By comparing hemispheric dominance, brain quotients, and behavioral traits, we generate a comprehensive relational matrix. Our cognitive experts then counsel parents on exact vocabulary calibrations, showing them where parenting style triggers conflict with the child's natural temperament. This removes homework friction, limits behavioral acting out, and builds profound emotional intimacy.",
      cat: "Parenting Guidance"
    },
    {
      q: "How long does an IBM session take and what is the delivery timeline?",
      a: "The fingerprint scanning session itself is completely non-invasive, quick, and takes approximately 10 to 15 minutes per individual. Once the scan vectors are submitted, the detailed 70+ page diagnostic report is processed by our certified scientific cloud partners. The final report generation and a highly comprehensive 1-on-1 counseling session with our expert cognitive coaches are typically delivered within 3 to 5 business days.",
      cat: "Safety & Security"
    }
  ];

  // Filter FAQs
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "All" || faq.cat === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Compile Google FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions (FAQs) | Keyamind"
        description="Got questions about IBM safety, scientific accuracy, or parenting counseling? Browse our detailed FAQ center with real, science-backed answers."
        canonical="https://keyamind.com/faq"
        keywords="IBM safety, fingerprint privacy, biological mapping FAQ, child psychology questions, Keyamind customer support"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-b from-white via-warm-cream to-soft-lavender overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Ambient color bubbles */}
        <div className="absolute top-1/4 -left-36 w-96 h-96 rounded-full bg-purple-200/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-36 w-96 h-96 rounded-full bg-pink-200/10 blur-3xl pointer-events-none" />

        <div className="max-w-[850px] mx-auto px-4 sm:px-6">
          
          {/* ================= HERO INTRO ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left mb-12"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-md mb-4 self-start"
            >
              <HelpCircle className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Support & Scientific Integrity</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(24px,5.5vw,42px)] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight mb-6 text-left"
            >
              Frequently Asked{" "}
              <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] capitalize tracking-normal font-normal inline-block mr-2.5 drop-shadow-[0_2px_8px_rgba(139,92,246,0.18)]">
                Questions
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-dark-lavender/70 font-medium leading-relaxed max-w-xl font-poppins text-left"
            >
              Find transparent, science-backed answers regarding our scanning safety, biometric security, and expert counseling methodologies.
            </motion.p>
          </motion.div>

          {/* ================= SEARCH & CATEGORIES ================= */}
          <div className="space-y-6 mb-12">
            
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-dark-lavender/40" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setExpandedIndex(null);
                }}
                placeholder="Search FAQs by keywords (e.g. privacy, genetics, VAK, age)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-purple-100 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/25 text-sm font-semibold text-dark-lavender transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setExpandedIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat 
                      ? "bg-gradient-to-r from-dark-lavender to-purple-800 text-white shadow-md shadow-purple-900/10" 
                      : "bg-white/60 text-dark-lavender/60 border border-purple-50 hover:bg-white hover:text-purple-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* ================= FAQS ACCORDION LIST ================= */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {filteredFaqs.map((faq, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                      <FaqItem
                        key={faq.q}
                        faq={faq}
                        isExpanded={isExpanded}
                        onToggle={() => setExpandedIndex(isExpanded ? null : index)}
                      />
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 bg-white/40 border border-purple-50 rounded-2xl backdrop-blur-md"
                >
                  <p className="text-sm font-semibold text-dark-lavender/60">No FAQs found matching your search term.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                    className="mt-4 text-xs font-black uppercase text-purple-600 tracking-wider hover:underline"
                  >
                    Clear all search parameters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= TRUST BLOCK ================= */}
          <div className="glass-premium rounded-3xl p-6 sm:p-8 mt-16 border-white/60 shadow-xl flex gap-4.5 items-center">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-sm font-black text-dark-lavender uppercase tracking-wide mb-1 font-outfit">Biometric Privacy Compliant</h3>
              <p className="text-xs text-dark-lavender/65 leading-relaxed font-semibold">
                We strictly practice standard deletion policies. Fingerprints scanned for profiling are fully purged locally and cloud-scrubbed within 24 hours of successful report upload.
              </p>
            </div>
          </div>

          {/* ================= HIGH-CONVERSION CTA ================= */}
          <div className="w-full py-8 px-6 sm:py-10 sm:px-12 rounded-[32px] bg-gradient-to-r from-white/95 via-purple-50/90 to-purple-50/90 border border-white shadow-[0_20px_50px_rgba(59,46,94,0.06)] backdrop-blur-md relative overflow-hidden flex flex-col items-center text-center group mt-16 animate-gpu">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-purple-300/20 rounded-full blur-[70px] pointer-events-none animate-pulse-soft" />

            <div className="relative z-10 max-w-3xl flex flex-col items-center gap-3.5">
              <h2 className="text-[clamp(20px,4.5vw,32px)] font-outfit font-black text-dark-lavender leading-tight tracking-tight">
                Still Have <span className="text-gradient-purple font-cursive text-[clamp(24px,5vw,42px)] font-normal capitalize">Unanswered Questions?</span>
              </h2>
              
              <p className="text-xs sm:text-sm font-light text-dark-lavender/80 font-poppins leading-relaxed max-w-2xl">
                Get in touch with Keyamind's expert consultants directly. We are happy to clarify scan guidelines, diagnostic privacy, or report options.
              </p>

              <motion.a 
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 30px rgba(59,46,94,0.15)" }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    window.lenis.scrollTo("#contact", { offset: -96, duration: 1.2 });
                  } else {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white font-poppins font-extrabold text-[11px] tracking-[0.2em] uppercase shadow-md shadow-purple-500/10 transition-all duration-300 group cursor-pointer min-h-[44px]"
              >
                <span>Connect Directly</span>
              </motion.a>
            </div>
          </div>

        </div>
      </div>
      <ContentSection contactOnly={true} />
    </>
  );
}
