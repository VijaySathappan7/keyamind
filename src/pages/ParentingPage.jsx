import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Heart, 
  Smile, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Compass 
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import ContentSection from "../components/ContentSection";

export default function ParentingPage() {
  const parentingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Scientific Parenting Consultation",
    "description": "Expert child development counseling and parenting guidance based on scientific cognitive and behavioral mapping.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Keyamind Solutions",
      "url": "https://keyamind.com/"
    },
    "serviceType": "Parental Guidance & Child Counseling",
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

  const phases = [
    { 
      title: "Toddlers & Early Years", 
      age: "Age 2-6",
      subtitle: "Nurturing Innate Curiosity",
      desc: "Understand natural brain dominance to support speech acquisition, early social interaction, motor skill progress, and eliminate sensory irritation.",
      color: "from-pink-500/10 to-pink-500/20 text-pink-700" 
    },
    { 
      title: "School Age Explorers", 
      age: "Age 7-12",
      subtitle: "Aligning Learning Preferences",
      desc: "Discover if your child is a Visual, Auditory, or Kinesthetic learner. Address study frustration, concentration blocks, and academic anxiety.",
      color: "from-purple-500/10 to-purple-500/20 text-purple-700" 
    },
    { 
      title: "Transitioning Teens", 
      age: "Age 13-18",
      subtitle: "Emotional Bonding & Respect",
      desc: "Navigate adolescent changes, emotional sensitivity, and study stress. Align career motivation, and foster a healthy mutual friendship.",
      color: "from-blue-500/10 to-blue-500/20 text-blue-700" 
    }
  ];

  return (
    <>
      <SEOHead 
        title="Parenting Support & Child Counseling | Keyamind"
        description="Friction-free, scientific parenting guidance based on child cognitive mapping. Match your parenting style to your child's innate learning style."
        canonical="https://keyamind.com/parenting"
        keywords="parenting consultation, child counseling, scientific parenting, visual auditory kinesthetic, family relationship guidance"
      />

      <script type="application/ld+json">
        {JSON.stringify(parentingSchema)}
      </script>

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-b from-white via-warm-cream to-soft-lavender overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Soft background glows */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-pink-200/20 blur-3xl animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl animate-pulse-soft pointer-events-none" />

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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-200 bg-pink-50/50 backdrop-blur-md mb-6 self-start"
            >
              <Heart className="w-4 h-4 text-pink-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-800">Mindful Parenting Support</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(24px,5.5vw,42px)] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight mb-6 text-left"
            >
              Scientific{" "}
              <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] capitalize tracking-normal font-normal inline-block mr-2.5 drop-shadow-[0_2px_8px_rgba(139,92,246,0.18)]">
                Parenting Support
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-dark-lavender/70 font-medium leading-relaxed max-w-2xl font-poppins text-left"
            >
              Understand your child's innate neurological profile and align your parenting style harmoniously with their unique temperament.
            </motion.p>
          </motion.div>

          {/* ================= DETAILED CONTENT ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            
            {/* Visual Glassmorphic Card */}
            <motion.div 
              initial={{ x: -55, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-premium rounded-3xl p-8 sm:p-10 border-white/50 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-br-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-lg">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-dark-lavender tracking-wide font-outfit">The VAK Alignment</h3>
                  <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest">Inborn Learning Channels</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 font-black">V</div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-lavender uppercase tracking-wider mb-1">Visual Learners</h4>
                    <p className="text-xs text-dark-lavender/65 leading-relaxed font-semibold">
                      Learn best via charts, mind maps, and colors. Oral commands and long lectures cause fatigue.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-black">A</div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-lavender uppercase tracking-wider mb-1">Auditory Learners</h4>
                    <p className="text-xs text-dark-lavender/65 leading-relaxed font-semibold">
                      Learn through discussion, lectures, and verbal encouragement. Background noises disrupt focus easily.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-black">K</div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-lavender uppercase tracking-wider mb-1">Kinesthetic Learners</h4>
                    <p className="text-xs text-dark-lavender/65 leading-relaxed font-semibold">
                      Learn best via physical action, touch, play, and building. Sitting still for hours hampers comprehension.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 55, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-[clamp(24px,5.5vw,34px)] lg:text-[36px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight">
                Stop Guessing. <span className="text-gradient-purple font-cursive text-[clamp(28px,7.5vw,48px)] lg:text-[46px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Start Understanding.</span>
              </h2>
              
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
              
              <p className="text-sm sm:text-base text-dark-lavender/70 leading-relaxed font-medium">
                Traditional parenting relies on trial-and-error, or mimicking how we were raised. However, what worked for you or your oldest child might completely backfire with another due to differing hemispheric dominance or quotient patterns.
              </p>
              
              <p className="text-sm sm:text-base text-dark-lavender/70 leading-relaxed font-medium">
                Scientific parenting maps your child's innate temperament (discerned via dermatoglyphic distributions) to identify custom behavioral responses, preventing parent-child friction, building self-esteem, and enhancing family intimacy.
              </p>

              <div className="flex flex-col gap-4.5 pt-4">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-dark-lavender/80">Reduce daily home friction and arguments</span>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-dark-lavender/80">Customized learning approaches tailored to VAK styles</span>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-dark-lavender/80">Enhance child self-esteem, security, and potential</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= DEVELOPMENT PHASES ================= */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-[clamp(24px,5.5vw,34px)] lg:text-[36px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight text-center">
                Parenting Guidance Across <span className="text-gradient-purple font-cursive text-[clamp(28px,7.5vw,48px)] lg:text-[46px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Childhood Phases</span>
              </h2>
              <p className="text-sm text-dark-lavender/60 font-medium mt-2">
                Every stage demands a different communication framework. Discover the key solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {phases.map((phase, idx) => (
                <motion.div 
                  key={phase.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white border border-purple-50 rounded-3xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest block mb-2">{phase.subtitle}</span>
                    <h3 className="text-lg font-black text-dark-lavender font-poppins mb-4 leading-snug flex flex-col gap-1 text-left">
                      <span>{phase.title}</span>
                      <span className="text-xs font-bold text-dark-lavender/50 uppercase tracking-wide">({phase.age})</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-dark-lavender/65 leading-relaxed font-semibold">{phase.desc}</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-purple-50/60 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-purple-600 tracking-wider">Phase {idx + 1} Assessment</span>
                    <Activity className="w-4 h-4 text-pink-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= FAMILY COMPATIBILITY BOX ================= */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-premium rounded-[32px] p-8 sm:p-12 mb-24 border-white/60 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-[10px] font-black uppercase tracking-wider mb-4">
                <Compass className="w-3 h-3" />
                <span>Parent-Child Synergy</span>
              </span>
              
              <h2 className="text-[clamp(24px,5.5vw,32px)] lg:text-[34px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight mb-4">
                Dynamic Parent-Child <span className="text-gradient-purple font-cursive text-[clamp(28px,7.5vw,44px)] lg:text-[42px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Compatibility Mapping</span>
              </h2>
              
              <p className="text-sm sm:text-base text-dark-lavender/70 font-medium leading-relaxed mb-6">
                Are your styles matching or clashing? We map the neurological profiles of both parent and child to generate an actionable compatibility roadmap. This report identifies exactly where communicative gaps exist and outlines customized frameworks for dialogue, motivation, and discipline.
              </p>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/40 border border-purple-50/50">
                  <h4 className="text-xs font-bold text-dark-lavender uppercase tracking-wider mb-1">Communication Calibration</h4>
                  <p className="text-xs text-dark-lavender/60 font-semibold">Tuning parental vocabulary and vocal style to match the child's processing speed.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/40 border border-purple-50/50">
                  <h4 className="text-xs font-bold text-dark-lavender uppercase tracking-wider mb-1">Temperament Mirroring</h4>
                  <p className="text-xs text-dark-lavender/60 font-semibold">Decoupling parental triggers from child actions by recognizing inborn traits.</p>
                </div>
              </div>
            </div>
          </motion.div>
 
          {/* ================= RELATED RESOURCES & INTERNAL LINKS ================= */}
          <div className="mb-24">
            <h2 className="text-[clamp(24px,5.5vw,32px)] lg:text-[34px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight text-center mb-8">
              Scientific Parenting <span className="text-gradient-purple font-cursive text-[clamp(28px,7.5vw,44px)] lg:text-[42px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Resources & Guides</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                to="/blog/child-brain-mapping-benefits" 
                className="bg-white border border-purple-50 hover:border-purple-300 rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest block mb-2">Featured Guide</span>
                  <h3 className="text-base sm:text-lg font-black text-dark-lavender font-poppins mb-2">Unlocking Your Child's True Potential</h3>
                  <p className="text-xs sm:text-sm text-dark-lavender/65 font-semibold leading-relaxed">
                    Learn how aligning your communication and parenting style with your child's inborn brain dominance resolves homework conflicts.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-black uppercase text-pink-600">
                  <span>Read Article</span>
                </div>
              </Link>
 
              <Link 
                to="/faq" 
                className="bg-white border border-purple-50 hover:border-purple-300 rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest block mb-2">FAQ Center</span>
                  <h3 className="text-base sm:text-lg font-black text-dark-lavender font-poppins mb-2">Common Questions & Safety Details</h3>
                  <p className="text-xs sm:text-sm text-dark-lavender/65 font-semibold leading-relaxed">
                    Read our complete review on child scan safety boundaries, parent counselor expertise, and compliance guidelines.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-black uppercase text-pink-600">
                  <span>Browse FAQs</span>
                </div>
              </Link>
            </div>
          </div>
 
          {/* ================= HIGH-CONVERSION CTA ================= */}
          <div className="w-full py-8 px-6 sm:py-10 sm:px-12 rounded-[32px] bg-gradient-to-r from-white/95 via-purple-50/90 to-purple-50/90 border border-white shadow-[0_20px_50px_rgba(59,46,94,0.06)] backdrop-blur-md relative overflow-hidden flex flex-col items-center text-center group mt-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-purple-300/20 rounded-full blur-[70px] pointer-events-none animate-pulse-soft" />
 
            <div className="relative z-10 max-w-3xl flex flex-col items-center gap-3.5">
              <h2 className="text-[clamp(20px,4.5vw,32px)] font-outfit font-black text-dark-lavender leading-tight tracking-tight">
                Ready to Upgrade Your <span className="text-gradient-purple font-cursive text-[clamp(24px,5vw,42px)] font-normal capitalize">Parenting Journey?</span>
              </h2>
              
              <p className="text-xs sm:text-sm font-light text-dark-lavender/80 font-poppins leading-relaxed max-w-2xl">
                Book a highly personalized parenting counseling and cognitive alignment mapping session with Keyamind's child psychology experts.
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
                <span>Schedule Consultation</span>
              </motion.a>
            </div>
          </div>

        </div>
      </div>
      <ContentSection contactOnly={true} />
    </>
  );
}
