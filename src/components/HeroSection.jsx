import { useState, useEffect, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import heroBackgroundVideo from "../assets/videos/herobackground.mp4";
import mobileBackground from "../assets/images/mobilebackground.webp";
import logo from "../assets/logos/logo.webp";
import titleImage from "../assets/logos/title.webp";
import useMediaQuery from "./useMediaQuery";

const phrases = [
  "DMIT Brain Mapping",
  "Career Counselling",
  "Fingerprint Analysis",
  "Student Guidance"
];

// Lightweight standalone memoized typewriter component to prevent parent HeroSection re-renders
const TypewriterText = memo(() => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(30);
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <span className="text-gradient-purple font-extrabold border-b border-purple-400/40 pb-0.5 min-h-[22px] inline-block">
      {displayText}
    </span>
  );
});

// Pre-calculated stable seed parameters for cherry blossom petals to ensure strict render purity (React Compiler compliant)
const PETAL_SEEDS = Array.from({ length: 60 }).map((_, i) => ({
  size: Math.random() * 12 + 6,
  delay: Math.random() * 20,
  duration: Math.random() * 12 + 8,
  leftStart: `${Math.random() * 120 - 10}%`,
  scale: Math.random() * 0.4 + 0.4,
  leftEnd: `${(Math.random() * 40) - 20 + (i * 2)}%`
}));

// ENHANCED CHERRY BLOSSOM PETAL SYSTEM (MOBILE ONLY - DENSE & DYNAMIC)
const FallingPetals = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[4] lg:hidden">
      {PETAL_SEEDS.map((seed, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -50, 
            left: seed.leftStart,
            opacity: 0,
            rotate: 0,
            scale: seed.scale
          }}
          animate={{ 
            top: "115%", 
            left: seed.leftEnd,
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, 180, 360, 540],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: seed.duration, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.2, 1], // More natural falling ease
            delay: seed.delay
          }}
          className="absolute bg-gradient-to-tr from-purple-200/60 to-purple-300/40 blur-[0.5px]"
          style={{ 
            width: seed.size, 
            height: seed.size * 0.8,
            borderRadius: '80% 10% 80% 10% / 80% 10% 80% 10%' 
          }} 
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo('#' + targetId, {
          offset: -80,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate('/#' + targetId);
    }
  };

  // High-performance vertical parallax scroll effect with physics spring interpolation
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 500], [0, 200]);
  const y1 = useSpring(rawY, {
    stiffness: 95,
    damping: 26,
    mass: 0.35,
    restDelta: 0.001
  });


  // Parallax spring animations configured for 120FPS rendering

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const highlights = [
    "DMIT Brain Mapping",
    "Career Counselling",
    "Fingerprint Analysis",
    "Learning Insights",
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen h-auto lg:h-screen w-full flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-b from-white via-ivory to-soft-lavender m-0 p-0 scroll-mt-0"
    >
      
      <motion.div 
        style={{ y: y1, translateZ: 0 }}
        className="absolute inset-0 z-0 overflow-hidden scale-[1.12] will-change-transform"
      >
        {/* Desktop Video Background */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline 
          className="hidden lg:block absolute inset-0 w-full h-full object-cover blur-none saturate-[1.05] brightness-[1.05] contrast-[1.05]"
        >
          <source src={heroBackgroundVideo} type="video/mp4" />
        </video>

        {/* Mobile Portrait Image Background */}
        <img 
          src={mobileBackground} 
          alt="Keyamind Background" 
          width={1024}
          height={1366}
          fetchPriority="high"
          className="lg:hidden absolute inset-0 w-full h-full object-cover blur-none saturate-[1.05] brightness-[1.05] contrast-[1.05]"
        />
        
        {/* Soft elegant white/ivory linear gradient for text legibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-white/30 via-ivory/10 to-transparent z-[2]"
        />
        {/* Bottom transition mask to soft-lavender */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-soft-lavender via-soft-lavender/60 to-transparent z-[3]" />
      </motion.div>

      {/* AMBIENT FLOATING PURPLE/PINK GLOW ORBS */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -35, 0], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[8%] w-[25rem] h-[25rem] bg-[#8B5CF6]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 45, 0], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[18%] right-[12%] w-[30rem] h-[30rem] bg-purple-400/5 rounded-full blur-[120px]"
        />
      </div>

      {/* MOBILE CHERRY BLOSSOM ANIMATION */}
      <FallingPetals />

      {/* COMPOSITION CONTAINER */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:h-full gap-4 lg:gap-12">
        
        {/* LOGO & TITLE - ON TOP AT SMALLER SIZE FOR MOBILE, UNCHANGED FOR LAPTOP */}
        <motion.div 
          className="w-full lg:w-[38%] flex flex-col items-center justify-center text-center z-20 h-auto shrink-0 pt-28 pb-8 lg:py-0"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-4 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto"
          >
            {/* Logo shield block - SMALLER ON MOBILE */}
            <img 
              src={logo} 
              alt="Keyamind Logo" 
              width={260}
              height={260}
              fetchPriority="high"
              className="w-[65%] sm:w-[58%] lg:w-[46%] h-auto object-contain drop-shadow-[0_20px_60px_rgba(255,255,255,0.45)] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] filter saturate-[1.25]"
            />

            {/* Title signature block - SMALLER ON MOBILE */}
            <img 
              src={titleImage} 
              alt="Keyamind Title" 
              width={400}
              height={94}
              fetchPriority="high"
              className="w-[92%] sm:w-[84%] lg:w-[72%] h-auto object-contain"
              style={{
                filter: "brightness(0) drop-shadow(0 2px 10px rgba(255,255,255,0.7)) drop-shadow(0 0 6px rgba(255,255,255,0.4))"
              }}
            />
          </motion.div>
        </motion.div>

        {/* LEFT SIDE: CRYSTAL-CLEAR LIQUID GLASS CARD - IMMEDIATELY VISIBLE BELOW ON MOBILE */}
        <motion.div 
          className="w-full lg:w-[62%] z-10 flex items-center justify-start pb-16 lg:pb-0"
        >
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-start text-left p-6 sm:p-8 md:p-10 rounded-[32px] glass-premium shadow-xl border border-white/40"
          >
            {/* Small Premium Badge */}
            <motion.div 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] border border-white/70"
            >
              <Sparkles size={11} className="text-purple-600 animate-pulse-soft" />
              <span className="text-[9.5px] md:text-[10px] font-extrabold tracking-[0.25em] uppercase text-purple-800 font-poppins pl-[0.25em]">
                ✨ Empowering Human Potential
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[clamp(24px,5.5vw,42px)] font-outfit font-black text-black leading-[1.12] tracking-tight text-left"
            >
              Unlock Your{" "}
              <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,60px)] capitalize tracking-normal font-normal inline-block mr-2.5 drop-shadow-[0_2px_8px_rgba(139,92,246,0.18)]">
                Inner Strengths
              </span> <br className="hidden sm:block" />
              & Shape a Brighter Future
            </motion.h1>

            {/* Premium Subheading */}
            <motion.p 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-3.5 text-[13px] sm:text-[14.5px] text-black/85 leading-relaxed font-medium font-poppins max-w-2xl text-left"
            >
              Discover clarity and direction with India's trusted <strong>DMIT Test</strong>, scientific <strong>Fingerprint Analysis</strong>, and expert <strong>Career Counselling</strong>.
            </motion.p>

            {/* TYPEWRITER DYNAMIC EXPERTISE BADGE */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center justify-start text-black/80 font-medium text-[13px] sm:text-[14.5px] mt-3 h-6 font-poppins"
            >
              <span className="mr-2 text-black/55">Expertise in</span>
              <TypewriterText />
              <span className="inline-block w-[2px] h-[14px] bg-purple-500 ml-1.5 animate-pulse align-middle"></span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 30px rgba(59,46,94,0.15)" }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                onClick={(e) => handleCtaClick(e, "contact")}
                className="px-8 py-3.5 rounded-full font-extrabold text-[11px] tracking-[0.2em] uppercase text-white bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 shadow-md shadow-purple-500/10 transition-all duration-300 font-poppins text-center flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                Get Started
                <ArrowRight size={13} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255, 255, 255, 0.7)", borderColor: "rgba(59,46,94,0.3)" }}
                whileTap={{ scale: 0.96 }}
                href="#our-services"
                onClick={(e) => handleCtaClick(e, "our-services")}
                className="px-8 py-3.5 rounded-full font-extrabold text-[11px] tracking-[0.2em] uppercase text-dark-lavender border border-purple-200 bg-white/40 transition-all duration-300 backdrop-blur-sm flex items-center justify-center font-poppins text-center min-h-[44px]"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Trust Highlights Checklist */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 border-t border-black/10 max-w-xl w-full"
            >
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-left">
                  <CheckCircle2 size={13.5} className="text-purple-600 shrink-0" />
                  <span className="text-[11.5px] font-extrabold text-black/90 font-poppins">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;