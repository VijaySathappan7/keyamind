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
  Compass,
  Paintbrush,
  HeartHandshake,
  BarChart3,
  Stethoscope,
  Scale
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

  const careerSectors = [
    {
      title: "STEM & Deep Tech",
      icon: Cpu,
      quotient: "IQ Dominance",
      desc: "Suited for analytical and mathematical minds with strong systematic capabilities.",
      careers: ["AI & Data Scientist", "Robotics Engineer", "Software Architect", "Biotech Researcher"],
      color: "from-blue-500/5 to-cyan-500/5 hover:from-blue-500/10 hover:to-cyan-500/10 text-blue-700 border-blue-100/40"
    },
    {
      title: "Creative Arts & Design",
      icon: Paintbrush,
      quotient: "CQ Dominance",
      desc: "Designed for divergent minds with visual-spatial strength and deep creative capabilities.",
      careers: ["UI/UX Designer", "Architectural Designer", "Creative Director", "3D Animator"],
      color: "from-purple-500/5 to-pink-500/5 hover:from-purple-500/10 hover:to-pink-500/10 text-purple-700 border-purple-100/40"
    },
    {
      title: "Business & Strategy",
      icon: BarChart3,
      quotient: "AQ + IQ Dominance",
      desc: "Perfect for strategic, numeric and adversity-tolerant analytical minds.",
      careers: ["Investment Banker", "Management Consultant", "Fintech Analyst", "Venture Strategist"],
      color: "from-emerald-500/5 to-teal-500/5 hover:from-emerald-500/10 hover:to-teal-500/10 text-emerald-700 border-emerald-100/40"
    },
    {
      title: "Medical & Life Sciences",
      icon: Stethoscope,
      quotient: "EQ + IQ Dominance",
      desc: "Suited for high emotional intelligence, active empathy, and deep physical-motor accuracy.",
      careers: ["Neurosurgeon / Physician", "Clinical Psychologist", "Genetic Counselor", "Pharmaceutical Lead"],
      color: "from-rose-500/5 to-pink-500/5 hover:from-rose-500/10 hover:to-rose-500/10 text-rose-700 border-rose-100/40"
    },
    {
      title: "Legal & Public Policy",
      icon: Scale,
      quotient: "EQ + CQ Dominance",
      desc: "Optimized for verbal-linguistic dominance, logical deduction and systematic reasoning.",
      careers: ["Corporate Advocate", "Public Policy Analyst", "Diplomatic Officer", "Human Rights Lawyer"],
      color: "from-amber-500/5 to-orange-500/5 hover:from-amber-500/10 hover:to-orange-500/10 text-amber-700 border-amber-100/40"
    },
    {
      title: "Leadership & Management",
      icon: HeartHandshake,
      quotient: "EQ + AQ Dominance",
      desc: "Perfect for high interpersonal intelligence, empathetic leadership and crisis management.",
      careers: ["Chief Executive (CEO)", "VP of Human Resources", "Startup Founder", "Global Operations Lead"],
      color: "from-indigo-500/5 to-violet-500/5 hover:from-indigo-500/10 hover:to-violet-500/10 text-indigo-700 border-indigo-100/40"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Career Guidance & Student Counseling | Keyamind"
        description="Data-driven career counseling and stream selection based on scientific intelligence profiling. Discover your true calling using IQ, EQ, CQ, and AQ mapping."
        canonical="https://keyamind.com/career"
        keywords="career counseling Chennai, stream selection class 10, IQ EQ AQ mapping, professional career transition, career mapping"
      />

      <script type="application/ld+json">
        {JSON.stringify(careerSchema)}
      </script>

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-b from-white via-warm-cream to-soft-lavender overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Ambient background designs */}
        <div className="absolute top-1/4 -left-36 w-96 h-96 rounded-full bg-blue-300/10 blur-3xl animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-1/4 -right-36 w-96 h-96 rounded-full bg-purple-300/10 blur-3xl animate-pulse-soft pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          
          {/* ================= HERO SECTION ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left max-w-3xl mb-16"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-md mb-6 self-start"
            >
              <Compass className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-800">Innate Career Direction Mapping</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(24px,5.5vw,42px)] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight mb-6 text-left"
            >
              Discover Your{" "}
              <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] capitalize tracking-normal font-normal inline-block mr-2.5 drop-shadow-[0_2px_8px_rgba(139,92,246,0.18)]">
                True Career Path
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-dark-lavender/70 font-medium leading-relaxed max-w-2xl font-poppins text-left"
            >
              Align your career trajectory with your inborn cognitive DNA using scientific fingerprint mappings and expert counseling.
            </motion.p>
          </motion.div>

          {/* ================= DATA GRID ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            
            <motion.div 
              initial={{ x: -55, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
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
              whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-premium rounded-3xl p-8 sm:p-10 border-white/50 shadow-xl relative overflow-hidden"
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
                  whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
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

          {/* ================= DIVERSE CAREER OPTIONS SECTOR GRID ================= */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-md mb-4 shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Explore Diverse Career Horizons</span>
              </div>
              <h2 className="text-[clamp(24px,5.5vw,34px)] lg:text-[36px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight text-center">
                Diverse Career Sectors & <span className="text-gradient-purple font-cursive text-[clamp(28px,7.5vw,48px)] lg:text-[46px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Pathways</span>
              </h2>
              <p className="text-sm text-dark-lavender/60 font-medium mt-2">
                Discover how scientific brain-mapping perfectly aligns with specialized global career domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
              {careerSectors.map((sector, idx) => {
                const IconComponent = sector.icon;
                return (
                  <motion.div
                    key={sector.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`flex flex-col justify-between p-6 sm:p-8 rounded-[28px] bg-white/70 border border-white/60 shadow-[0_12px_40px_rgba(59,46,94,0.03)] hover:shadow-[0_20px_50px_rgba(59,46,94,0.08)] transition-all duration-500 hover:-translate-y-1.5 group relative overflow-hidden text-left`}
                  >
                    {/* Background glow hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div>
                      {/* Icon & Quotient Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`p-3 rounded-2xl bg-gradient-to-tr ${sector.color.split(' ')[0]} ${sector.color.split(' ')[1]} ${sector.color.split(' ')[4]} shadow-sm`}>
                          <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <span className="text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-purple-50 border border-purple-100/50 text-dark-lavender/70 font-poppins">
                          {sector.quotient}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-lg font-black text-dark-lavender font-poppins mb-2 leading-tight">
                        {sector.title}
                      </h3>
                      <p className="text-xs text-dark-lavender/75 leading-relaxed font-poppins font-light border-l-2 border-purple-200/50 pl-3 mb-6">
                        {sector.desc}
                      </p>
                    </div>

                    {/* Careers pill cloud */}
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-purple-600/70 block mb-2 font-poppins">In-Demand Pathways</span>
                      <div className="flex flex-wrap gap-1.5">
                        {sector.careers.map((career) => (
                          <span
                            key={career}
                            className="px-2.5 py-1 bg-white/95 border border-purple-50/50 text-[10px] font-bold text-dark-lavender/85 rounded-full font-poppins shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-default"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= CAREER MILESTONES MATRIX ================= */}
          <div className="glass-premium rounded-[32px] p-8 sm:p-12 mb-24 border-white/60 shadow-xl">
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
          <div className="w-full py-8 px-6 sm:py-10 sm:px-12 rounded-[32px] bg-gradient-to-r from-white/95 via-purple-50/90 to-purple-50/90 border border-white shadow-[0_20px_50px_rgba(59,46,94,0.06)] backdrop-blur-md relative overflow-hidden flex flex-col items-center text-center group mt-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-purple-300/20 rounded-full blur-[70px] pointer-events-none animate-pulse-soft" />

            <div className="relative z-10 max-w-3xl flex flex-col items-center gap-3.5">
              <h2 className="text-[clamp(20px,4.5vw,32px)] font-outfit font-black text-dark-lavender leading-tight tracking-tight">
                Ready to Align Your <span className="text-gradient-purple font-cursive text-[clamp(24px,5vw,42px)] font-normal capitalize">Professional Path?</span>
              </h2>
              
              <p className="text-xs sm:text-sm font-light text-dark-lavender/80 font-poppins leading-relaxed max-w-2xl">
                Schedule a data-driven career counseling, stream assessment, or transition mapping session with Keyamind's expert occupational psychologists.
              </p>

              <motion.a 
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 30px rgba(59,46,94,0.15)" }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    window.lenis.scrollTo("#contact", { offset: 0, duration: 1.2 });
                  } else {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-2 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white font-poppins font-extrabold text-[11px] tracking-[0.2em] uppercase shadow-md shadow-purple-500/10 transition-all duration-300 group cursor-pointer min-h-[44px]"
              >
                <span>Book Career Assessment</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>

        </div>
      </div>
      <ContentSection contactOnly={true} />
    </>
  );
}
