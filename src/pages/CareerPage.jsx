import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Activity, 
  Compass 
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import ContentSection from "../components/ContentSection";

export default function CareerPage() {
  const careerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Scientific Career Guidance & Counseling",
    "description": "Innate talent mapping and data-driven career counseling based on biological brain quotients and multiple intelligences.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Keyamind Solutions",
      "url": "https://keyamind.com/"
    },
    "serviceType": "Career Counseling & Stream Assessment",
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

  const quotients = [
    { 
      name: "Intelligence Quotient (IQ)", 
      desc: "Dictates analytical reasoning, math proficiency, programming talent, spatial logic, and structural planning strengths.",
      focus: "Scientific, engineering, software, and accounting careers.",
      color: "from-blue-500/10 to-blue-500/20 text-blue-800 border-blue-100"
    },
    { 
      name: "Emotional Quotient (EQ)", 
      desc: "Controls interpersonal empathy, active listening, diplomatic leadership, public relations, and counseling capacity.",
      focus: "Management, HR, clinical psychology, public relations, and coaching.",
      color: "from-pink-500/10 to-pink-500/20 text-pink-800 border-pink-100"
    },
    { 
      name: "Creativity Quotient (CQ)", 
      desc: "Measures divergent thinking, design aesthetics, lateral ideation, musical harmony, and storytelling capacity.",
      focus: "Copywriting, graphic design, animation, architecture, and marketing.",
      color: "from-purple-500/10 to-purple-500/20 text-purple-800 border-purple-100"
    },
    { 
      name: "Adversity Quotient (AQ)", 
      desc: "Measures resilience under severe distress, risk tolerance, high-pressure execution, and contingency problem-solving.",
      focus: "Entrepreneurs, defense services, startup operations, and emergency healthcare.",
      color: "from-amber-500/10 to-amber-500/20 text-amber-800 border-amber-100"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Scientific Career Guidance & Stream Selection | Keyamind"
        description="Data-driven career counseling and stream selection based on scientific intelligence profiling. Discover your true calling using IQ, EQ, CQ, and AQ mapping."
        canonical="https://keyamind.com/career"
        keywords="career counseling Chennai, stream selection class 10, IQ EQ AQ mapping, professional career transition, career mapping"
      />

      <script type="application/ld+json">
        {JSON.stringify(careerSchema)}
      </script>

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-mesh overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Ambient background designs */}
        <div className="absolute top-1/4 -left-36 w-96 h-96 rounded-full bg-blue-300/10 blur-3xl animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-1/4 -right-36 w-96 h-96 rounded-full bg-purple-300/10 blur-3xl animate-pulse-soft pointer-events-none" />

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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-md mb-6"
            >
              <Compass className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-800">Innate Career Direction Mapping</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-dark-lavender tracking-tight leading-none mb-6 font-outfit"
            >
              Discover Your True Calling <br/>
              With <span className="text-gradient-purple">Data-Driven Career Mapping</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-dark-lavender/70 font-medium leading-relaxed"
            >
              Align your career trajectory with your inborn cognitive DNA. 
              Eliminate exam selection anxiety, academic stream confusion, 
              and mid-career stagnation using scientific, biological mappings.
            </motion.p>
          </motion.div>

          {/* ================= DATA GRID ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            
            <motion.div 
              initial={{ x: -55, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black text-dark-lavender tracking-tight font-outfit">
                Aligning Personality, Quotients & Profession
              </h2>
              
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              
              <p className="text-sm sm:text-base text-dark-lavender/70 leading-relaxed font-medium">
                Over 80% of individuals face career mismatch because traditional career guidance evaluates only current academic marks or surface-level interests (which fluctuate based on media trends and peers).
              </p>
              
              <p className="text-sm sm:text-base text-dark-lavender/70 leading-relaxed font-medium">
                Our scientific framework penetrates deeper. By examining biological brain indicators and innate quotients, we establish a permanent, non-fluctuating roadmap of your organic cognitive assets, learning speed, and behavioral preferences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-dark-lavender/80">Confirm perfect major/stream selections</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-dark-lavender/80">Avoid costly course selection mistakes</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-dark-lavender/80">Map career transition strategies</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-dark-lavender/80">Establish a life-long occupational roadmap</span>
                </div>
              </div>
            </motion.div>

            {/* Premium Dynamic Graphics Card */}
            <motion.div 
              initial={{ x: 55, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-premium rounded-3xl p-8 sm:p-10 border-white/50 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-lg">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-dark-lavender tracking-wide font-outfit">Biological Mapping</h3>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Permanent Career DNA</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-white/50 border border-blue-50/50">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-1">Occipital Lobe Alignment</span>
                  <p className="text-xs text-dark-lavender/80 font-semibold leading-relaxed">
                    Visual processing: Aligns with careers in visual design, architecture, photography, cinematography, and 3D modeling.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/50 border border-blue-50/50">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-1">Parietal Lobe Alignment</span>
                  <p className="text-xs text-dark-lavender/80 font-semibold leading-relaxed">
                    Kinesthetic processing: Maps to operations, surgical sciences, fine-art craftsmanship, sports training, and execution mechanics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= THE 4 CORE QUOTIENTS ================= */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-dark-lavender tracking-tight font-outfit">
                Evaluating the 4 Core Brain Quotients
              </h2>
              <p className="text-sm text-dark-lavender/60 font-medium mt-2">
                A holistic career assessment must evaluate biological resilience alongside intellectual capacity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quotients.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white border rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-xl transition-all border-purple-50/60`}
                >
                  <div>
                    <h3 className="text-lg font-black text-dark-lavender font-poppins mb-2 tracking-wide uppercase">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-dark-lavender/70 leading-relaxed font-medium mb-4">{item.desc}</p>
                  </div>
                  
                  <div className={`mt-4 p-4 rounded-2xl bg-gradient-to-tr ${item.color.split(' ')[0]} ${item.color.split(' ')[1]} border border-purple-100/30`}>
                    <span className="text-[10px] font-black uppercase tracking-wider block mb-1">Occupational Match</span>
                    <p className="text-xs font-bold leading-relaxed">{item.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= CAREER MILESTONES MATRIX ================= */}
          <div className="glass-premium rounded-[32px] p-8 sm:p-12 mb-24 border-white/60 shadow-2xl">
            <h2 className="text-3xl font-black text-dark-lavender tracking-tight text-center font-outfit mb-12">
              Guidance for Every Career Transition
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 mb-2">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-dark-lavender font-poppins">High School Students</h3>
                <ul className="text-xs sm:text-sm text-dark-lavender/70 font-medium space-y-2">
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" /> Class 10 Stream Mapping</li>
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" /> College Major Selection</li>
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" /> Study Focus optimization</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-dark-lavender font-poppins">College & Graduates</h3>
                <ul className="text-xs sm:text-sm text-dark-lavender/70 font-medium space-y-2">
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" /> Profile Building strategy</li>
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" /> Job Placement alignment</li>
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" /> Post-Graduate path selection</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-700 mb-2">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-dark-lavender font-poppins">Working Professionals</h3>
                <ul className="text-xs sm:text-sm text-dark-lavender/70 font-medium space-y-2">
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" /> Mid-Career Pivot alignment</li>
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" /> Leadership Competency assessment</li>
                  <li className="flex gap-2 items-start"><TrendingUp className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" /> Team Synergy counseling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= RELATED RESOURCES & INTERNAL LINKS ================= */}
          <div className="mb-24">
            <h2 className="text-2xl font-black text-dark-lavender font-outfit mb-8 tracking-tight text-center">
              Scientific Career Resources & Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                to="/blog/dmit-for-career-selection" 
                className="bg-white border border-purple-50 hover:border-purple-300 rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">Featured Guide</span>
                  <h3 className="text-base sm:text-lg font-black text-dark-lavender font-poppins mb-2">Stream Selection & Career Guidance Science</h3>
                  <p className="text-xs sm:text-sm text-dark-lavender/65 font-semibold leading-relaxed">
                    Learn how evaluating biological brain quotients (IQ, EQ, CQ, AQ) eliminates academic stream and major selection anxiety.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-black uppercase text-blue-600">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link 
                to="/faq" 
                className="bg-white border border-purple-50 hover:border-purple-300 rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">FAQ Center</span>
                  <h3 className="text-base sm:text-lg font-black text-dark-lavender font-poppins mb-2">Common Assessment & Report Questions</h3>
                  <p className="text-xs sm:text-sm text-dark-lavender/65 font-semibold leading-relaxed">
                    Read our transparent review on fingerprint privacy, scanning session duration, report delivery, and counseling.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-black uppercase text-blue-600">
                  <span>Browse FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* ================= HIGH-CONVERSION CTA ================= */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[32px] bg-gradient-to-r from-dark-lavender via-purple-900 to-purple-800 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl font-black mb-4 font-outfit">
              Ready to Align Your Professional Path?
            </h2>
            <p className="text-sm sm:text-base text-purple-200 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
              Schedule a data-driven career counseling, stream assessment, or transition mapping session with Keyamind's expert occupational psychologists.
            </p>

            <motion.a 
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
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
              <span>Book Career Assessment</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </motion.a>
          </motion.div>

        </div>
      </div>
      <ContentSection />
    </>
  );
}
