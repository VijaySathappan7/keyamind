import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Brain, Compass, Milestone, ArrowRight, ShieldCheck } from "lucide-react";
import inherentVideo from "../assets/videos/inherent.mp4";
import fingerprintImage from "../assets/images/fingerprintdesign.webp";
import LazyVideo from "./LazyVideo";
import LazyImage from "./LazyImage";
import useMediaQuery from "./useMediaQuery";

const InherentBrainMappingSection = () => {
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Smooth cinematic vertical parallax for the background video
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yParallax = useSpring(rawY, { stiffness: 90, damping: 25, mass: 0.4 });

  // Scroll-linked fingerprint blueprint zoom (clamped halfway for a premium subtle zoom)
  const blueprintScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.0, 1.0]);
  const blueprintScale = useSpring(blueprintScaleRaw, { stiffness: 90, damping: 25, mass: 0.35 });

  const desktopBgStyle = isDesktop ? { y: yParallax } : {};
  const desktopBlueprintStyle = isDesktop ? { scale: blueprintScale } : {};


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const features = [
    {
      num: "01",
      title: "Learning Behavior",
      description: "Understand natural learning preferences and cognitive patterns.",
      icon: Brain,
      borderHover: "hover:border-purple-300",
      accent: "text-purple-600",
      badgeBg: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      num: "02",
      title: "Personality Insights",
      description: "Discover communication styles, behavioral tendencies, and emotional strengths.",
      icon: Compass,
      borderHover: "hover:border-purple-300",
      accent: "text-purple-600",
      badgeBg: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      num: "03",
      title: "Multiple Intelligence",
      description: "Explore creativity, logic, observation, imagination, and leadership abilities.",
      icon: Sparkles,
      borderHover: "hover:border-blue-300",
      accent: "text-blue-600",
      badgeBg: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      num: "04",
      title: "Career Direction",
      description: "Gain clarity for educational and career growth through deeper self-understanding.",
      icon: Milestone,
      borderHover: "hover:border-amber-300",
      accent: "text-amber-600",
      badgeBg: "bg-amber-50 text-amber-600 border-amber-100",
    },
  ];

  return (
    <section 
      id="inherent-mapping"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden py-16 sm:py-20 lg:py-24 m-0 p-0 scroll-mt-0 selection:bg-purple-200 selection:text-dark-lavender"
    >
      {/* 100% COMPLETE CINEMATIC BACKGROUND VIDEO PLAYING WITH SMOOTH PARALLAX */}
      <motion.div 
        style={{ ...desktopBgStyle, translateZ: 0 }}
        className="absolute inset-0 z-0 overflow-hidden scale-[1.12] will-change-transform"
      >
        <LazyVideo 
          src={inherentVideo}
          className="absolute inset-0 w-full h-full object-cover blur-none"
        />

        {/* Soft Premium Ivory Shade Overlay */}
        <div className="absolute inset-0 bg-ivory-cream/35 z-[1]" />

        {/* Seamless Top & Bottom Blending Masks to realistically merge with surrounding sections */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6]/60 to-transparent z-[2] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF6F8] via-[#FAF6F8]/60 to-transparent z-[2] pointer-events-none" />
      </motion.div>

      {/* MAIN SPACIOUS EDITORIAL CONTAINER - Sized perfectly for single section viewing */}
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 relative z-10 w-full flex flex-col justify-center h-full gap-8 lg:gap-10 pt-4 pb-4">
        
        {/* DESKTOP SPLIT: LEFT TRANSPARENT CENTERPIECE IMAGE | RIGHT CONTENT & CTA */}
        {/* MOBILE HEADING (Visible only on Mobile) */}
        <div className="w-full xl:hidden flex flex-col items-center text-center gap-6">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 shadow-sm border border-white/80 backdrop-blur-md"
          >
            <Sparkles size={13} className="text-purple-600 animate-pulse-soft" />
            <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-dark-lavender font-poppins pl-[0.2em]">
              ✨ Understanding Human Potential
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight"
          >
            Inherent Brain Mapping{" "}
            <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] mt-2">
              & Natural Intelligence
            </span>
          </motion.h2>
        </div>

        {/* DESKTOP SPLIT: IMAGE & CONTENT */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
          
          <div className="w-full xl:w-[48%] flex items-center justify-center relative order-2">
            <motion.div 
              style={desktopBlueprintStyle}
              className="w-full flex justify-center items-center"
            >
              <div className="w-full max-w-[650px] lg:max-w-[750px] flex items-center justify-center">
                <LazyImage 
                  src={fingerprintImage} 
                  alt="Inherent Brain Mapping Intelligence Blueprint" 
                  width={750}
                  height={650}
                  className="w-full h-auto max-h-[350px] lg:max-h-[600px] object-contain select-none pointer-events-none filter drop-shadow-[0_20px_45px_rgba(59,46,94,0.25)]"
                />
              </div>
            </motion.div>
          </div>

          {/* CONTENT COLUMN (Order 3 on Mobile, Right on XL) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            viewport={{ once: true, margin: "-50px" }} whileInView="visible"
            className="w-full xl:w-[50%] flex flex-col items-start text-left gap-4 lg:gap-5 order-3 xl:order-2"
          >
            {/* DESKTOP HEADING (Visible only on XL) */}
            <div className="hidden xl:flex flex-col items-start gap-4">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 shadow-sm border border-white/80 backdrop-blur-md"
              >
                <Sparkles size={13} className="text-purple-600 animate-pulse-soft" />
                <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-dark-lavender font-poppins pl-[0.2em]">
                  ✨ Understanding Human Potential
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight"
              >
                Inherent Brain Mapping{" "}
                <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">
                  & Natural Intelligence
                </span>
              </motion.h2>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-dark-lavender/90 font-semibold font-poppins leading-relaxed max-w-xl"
            >
              Inherent Brain Mapping is a modern approach used to understand natural abilities, personality traits, learning patterns, and cognitive strengths through the relationship between fingerprint structures and brain development.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl mt-1 p-5 sm:p-6 rounded-[24px] glass-premium border border-white/80 shadow-[0_15px_40px_rgba(248,214,229,0.3)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-purple-500 rounded-l-full" />
              <div className="flex items-start gap-3.5 pl-1">
                <ShieldCheck size={22} className="text-purple-600 shrink-0 mt-0.5 animate-pulse" />
                <p className="text-xs sm:text-sm text-dark-lavender font-semibold italic font-poppins leading-relaxed">
                  “Fingerprint ridge patterns are formed before birth and remain permanent throughout life, making every individual biologically unique.”
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
            >
              <motion.a 
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 30px rgba(59,46,94,0.15)" }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.scrollToContact) {
                    window.scrollToContact();
                  } else {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-extrabold text-[11px] tracking-[0.2em] uppercase text-white bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 shadow-md shadow-purple-500/10 transition-all duration-300 font-poppins text-center flex items-center justify-center cursor-pointer min-h-[44px]"
              >
                Explore Your Potential
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.96 }}
                href="#our-services"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    window.lenis.scrollTo("#our-services", { offset: -96, duration: 1.2 });
                  } else {
                    document.getElementById("our-services")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-extrabold text-[11px] tracking-[0.2em] uppercase text-dark-lavender bg-white/80 border border-dark-lavender/10 shadow-sm transition-all duration-300 font-poppins text-center flex items-center justify-center cursor-pointer min-h-[44px]"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

        </div>

        {/* ====================================================
            PROFESSIONAL COMPACT FEATURE CARDS (NO 'LEARN MORE')
            ==================================================== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          viewport={{ once: true, margin: "-50px" }} whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-2"
        >
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`p-4 sm:p-5 rounded-[22px] bg-white/70 border border-white shadow-[0_8px_25px_rgba(59,46,94,0.05)] backdrop-blur-md flex flex-col gap-3 relative group overflow-hidden ${item.borderHover} transition-all duration-300`}
              >
                {/* Subtle top indicator beam */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top strip with number badge and icon */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-9 h-9 rounded-[14px] bg-gradient-to-br from-white to-purple-50/50 shadow-sm border border-white/80 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <IconComp size={18} className={`${item.accent}`} />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest font-poppins border ${item.badgeBg}`}>
                    {item.num}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 text-left z-10">
                  <h3 className="text-base font-extrabold text-dark-lavender font-outfit tracking-tight group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs font-light text-dark-lavender/80 font-poppins leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default InherentBrainMappingSection;
