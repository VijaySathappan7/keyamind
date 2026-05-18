import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  BrainCircuit, 
  UserCheck, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Fingerprint, 
  GraduationCap 
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import ContentSection from "../components/ContentSection";

export default function DmitPage() {
  // Structured Schema for DMIT Service
  const dmitSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DMIT Brain Mapping & Fingerprint Analysis",
    "description": "Scientific fingerprint-based assessment that maps learning styles, natural talents, and cognitive traits for children and adults.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Keyamind Solutions",
      "url": "https://keyamind.com/"
    },
    "serviceType": "Educational & Psychological Assessment",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

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

  const intelligences = [
    { title: "Linguistic Intelligence", desc: "Strengths in words, languages, writing, and verbal communication skills.", color: "from-pink-500/10 to-pink-500/20 text-pink-700" },
    { title: "Logical-Mathematical", desc: "Excel in reasoning, problem-solving, numbers, patterns, and analytics.", color: "from-purple-500/10 to-purple-500/20 text-purple-700" },
    { title: "Visual-Spatial", desc: "Aptitude in map reading, 3D visualization, arts, and design capabilities.", color: "from-blue-500/10 to-blue-500/20 text-blue-700" },
    { title: "Bodily-Kinesthetic", desc: "Excellent hand-eye coordination, sports agility, and physical craftsmanship.", color: "from-amber-500/10 to-amber-500/20 text-amber-700" },
    { title: "Musical Intelligence", desc: "High sensitivity to pitch, rhythm, tone, melodies, and sound structure.", color: "from-rose-500/10 to-rose-500/20 text-rose-700" },
    { title: "Interpersonal Skills", desc: "Exceptional emotional intelligence, empathy, leadership, and team dynamics.", color: "from-emerald-500/10 to-emerald-500/20 text-emerald-700" },
    { title: "Intrapersonal Clarity", desc: "Deep self-awareness, personal motivation, self-discipline, and wisdom.", color: "from-violet-500/10 to-violet-500/20 text-violet-700" },
    { title: "Naturalist Connection", desc: "Understanding ecosystems, floral patterns, environmental classification.", color: "from-teal-500/10 to-teal-500/20 text-teal-700" }
  ];

  return (
    <>
      <SEOHead 
        title="DMIT Test for Children & Adults | Brain Mapping | Keyamind"
        description="Discover your child's innate intelligence, learning style, and brain dominance with the scientific Dermatoglyphics Multiple Intelligence Test (DMIT)."
        canonical="https://keyamind.com/dmit"
        keywords="DMIT Test Chennai, brain mapping children, fingerprint analysis, Multiple Intelligences, Howard Gardner, child potential"
      />

      {/* Inject custom service schema */}
      <script type="application/ld+json">
        {JSON.stringify(dmitSchema)}
      </script>

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-mesh overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Decorative background orbits */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-peach-purple/20 blur-3xl animate-pulse-soft pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          
          {/* ================= HERO SECTION ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-md mb-6"
            >
              <Fingerprint className="w-4 h-4 text-purple-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Dermatoglyphics Assessment</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-dark-lavender tracking-tight leading-none mb-6 font-outfit"
            >
              Unlock Inherent Potential <br/>
              With <span className="text-gradient-purple">Scientific DMIT</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-dark-lavender/70 font-medium leading-relaxed"
            >
              Dermatoglyphics Multiple Intelligence Test (DMIT) is a scientific assessment 
              based on the study of fingerprint patterns, helping parents discover their child's 
              inborn learning styles, quotient scores, and career inclinations.
            </motion.p>
          </motion.div>

          {/* ================= HIGH-VALUABLE INFO ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ x: -55, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black text-dark-lavender tracking-tight font-outfit">
                The Neurobiological Link: Fingerprints & The Brain
              </h2>
              
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              
              <p className="text-sm sm:text-base text-dark-lavender/70 leading-relaxed font-medium">
                Scientific research shows that dermal ridges (fingerprints) begin forming during the 13th to 21st week of embryonic development, exactly synchronized with the development of the brain's neocortex. Both share the ectodermal origin.
              </p>
              
              <p className="text-sm sm:text-base text-dark-lavender/70 leading-relaxed font-medium">
                By analyzing these permanent fingerprint patterns, certified consultants gain an objective map of your child's left-and-right brain dominance, learning preference (Visual, Auditory, or Kinesthetic), and Howard Gardner's Multiple Intelligences spectrum.
              </p>

              <div className="flex flex-col gap-4.5 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-lavender uppercase tracking-wider mb-1">Neocortex Mapping</h4>
                    <p className="text-xs text-dark-lavender/60 font-medium">Direct diagnostic link mapping the 5 brain lobes to fingerprint columns.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-lavender uppercase tracking-wider mb-1">Innate Learning Preferences</h4>
                    <p className="text-xs text-dark-lavender/60 font-medium">Tailor education to their natural visual, sensory, or acoustic strengths.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Interactive Visual Card */}
            <motion.div 
              initial={{ x: 55, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-premium rounded-3xl p-8 sm:p-10 border-white/50 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-purple-800 text-white shadow-lg">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-dark-lavender tracking-wide">Scientific Blueprint</h3>
                  <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">Non-Invasive Diagnostic</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-white/50 border border-purple-50/60">
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest block mb-1">Pre-Frontal Lobe Connection</span>
                  <p className="text-xs text-dark-lavender/80 font-semibold leading-relaxed">
                    Maps to the Thumb: Dictates leadership, planning, goal setting, social execution, and emotional expression.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/50 border border-purple-50/60">
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest block mb-1">Frontal Lobe Connection</span>
                  <p className="text-xs text-dark-lavender/80 font-semibold leading-relaxed">
                    Maps to the Index Finger: Governs logical analysis, imagination, spatial processing, and conceptual modeling.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/50 border border-purple-50/60">
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest block mb-1">Temporal Lobe Connection</span>
                  <p className="text-xs text-dark-lavender/80 font-semibold leading-relaxed">
                    Maps to the Ring Finger: Dictates sound awareness, acoustic perception, language acquisition, and memory encoding.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= STRICT PRIVACY CARD (CRITICAL USER REQUEST) ================= */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-50/30 to-teal-50/30 backdrop-blur-md p-8 mb-24 flex flex-col md:flex-row gap-6 items-center shadow-xl shadow-emerald-500/5"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-black text-emerald-900 tracking-wide mb-1 font-outfit uppercase">
                100% Scans Security & Privacy Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800/80 font-medium leading-relaxed">
                We strictly adhere to biometric security compliance. Fingerprints scanned for DMIT analysis are highly encrypted, immediately transmitted to certified diagnostic clouds, and **permanently deleted** from our local scanners within 24 hours of scanning. We never sell, store, or warehouse personal biometric markers.
              </p>
            </div>
          </motion.div>

          {/* ================= GARDNER'S MULTIPLE INTELLIGENCES ================= */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-dark-lavender tracking-tight font-outfit">
                Howard Gardner's Multiple Intelligences
              </h2>
              <p className="text-sm text-dark-lavender/60 font-medium mt-2">
                Discover the tailored spectrum of natural talents defined by the renowned Harvard psychologist.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {intelligences.map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white border border-purple-50 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center font-bold bg-gradient-to-tr ${item.color.split(' ')[0]} ${item.color.split(' ')[1]}`}>
                    {idx + 1}
                  </div>
                  <h3 className="text-sm font-black text-dark-lavender tracking-wide uppercase mb-2 font-poppins">{item.title}</h3>
                  <p className="text-xs text-dark-lavender/60 leading-relaxed font-semibold">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= BENEFITS MATRIX ================= */}
          <div className="glass-premium rounded-[32px] p-8 sm:p-12 mb-24 border-white/60 shadow-xl">
            <h2 className="text-3xl font-black text-dark-lavender tracking-tight text-center font-outfit mb-12">
              Who Benefits from DMIT Brain Mapping?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-dark-lavender font-poppins">For Children (Age 2-10)</h3>
                <ul className="text-xs sm:text-sm text-dark-lavender/70 font-medium space-y-2">
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" /> Discover innate learning style (VAK)</li>
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" /> Understand early growth bottlenecks</li>
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" /> Match natural intelligence with hobbies</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-700 mb-2">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-dark-lavender font-poppins">For Teens (Age 11-18)</h3>
                <ul className="text-xs sm:text-sm text-dark-lavender/70 font-medium space-y-2">
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" /> Identify major stream selections</li>
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" /> Measure Quotients: IQ, EQ, CQ, and AQ</li>
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" /> Pinpoint concentration roadblocks</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-2">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-dark-lavender font-poppins">For Adults & Corporates</h3>
                <ul className="text-xs sm:text-sm text-dark-lavender/70 font-medium space-y-2">
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Choose the right career transitions</li>
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Map innate leadership capabilities</li>
                  <li className="flex gap-2 items-start"><Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Elevate workplace emotional dynamics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= RELATED RESOURCES & INTERNAL LINKS ================= */}
          <div className="mb-24">
            <h2 className="text-2xl font-black text-dark-lavender font-outfit mb-8 tracking-tight text-center">
              Scientific Resources & Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                to="/blog/what-is-dmit" 
                className="bg-white border border-purple-50 hover:border-purple-300 rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest block mb-2">Featured Guide</span>
                  <h3 className="text-base sm:text-lg font-black text-dark-lavender font-poppins mb-2">What is DMIT? The Science of Fingerprint Analysis</h3>
                  <p className="text-xs sm:text-sm text-dark-lavender/65 font-semibold leading-relaxed">
                    Explore the detailed embryology and genetic correlations behind dermatoglyphics, and how they reveal cortical potential.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-black uppercase text-purple-600">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link 
                to="/faq" 
                className="bg-white border border-purple-50 hover:border-purple-300 rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest block mb-2">FAQ Center</span>
                  <h3 className="text-base sm:text-lg font-black text-dark-lavender font-poppins mb-2">Common Questions & Privacy Guidelines</h3>
                  <p className="text-xs sm:text-sm text-dark-lavender/65 font-semibold leading-relaxed">
                    Got questions about fingerprint security, scanning timeframes, scan age limits, or diagnostic cloud integrity?
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-black uppercase text-purple-600">
                  <span>Browse FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* ================= HIGH-CONVERSION CTA ================= */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[32px] bg-gradient-to-r from-dark-lavender via-purple-900 to-purple-800 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl font-black mb-4 font-outfit">
              Ready to Discover Inherent Talents?
            </h2>
            <p className="text-sm sm:text-base text-purple-200 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
              Book a scientific fingerprint mapping scanning session with Keyamind's certified cognitive counseling experts. Step-by-step personalized insights await.
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
              <span>Book Mapping Scan</span>
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </motion.a>
          </motion.div>

        </div>
      </div>
      <ContentSection />
    </>
  );
}
