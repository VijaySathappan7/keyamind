import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import LazyImage from './LazyImage';

import toddlersImg from '../assets/images/toddlers.webp';
import kidsImg from '../assets/images/kids.webp';
import childrenImg from '../assets/images/children.webp';
import graduatesImg from '../assets/images/graduates.webp';
import adultsImg from '../assets/images/adults.webp';
import allAgeGroupImg from '../assets/images/allagegroup.webp';

const services = [
  {
    num: "01",
    label: "Age Group 1 – 4 Years",
    title: "Early Learning & Brain Development",
    desc: "During these crucial developmental years, we identify your child's natural cognitive strengths. Our personalized insights guide parents in nurturing early brain development, confidence, and foundational learning.",
    includes: ["Learning Foundations", "Early Growth", "Parenting Insights", "Cognitive Development"],
    image: toddlersImg,
  },
  {
    num: "02",
    label: "Age Group 4 – 10 Years",
    title: "Learning Style & Skill Development",
    desc: "Discover how your child naturally learns—whether visually, auditorily, or hands-on. We empower parents and educators with tailored strategies to enhance skill development, curiosity, and joyful exploration.",
    includes: ["Learning Styles", "Confidence Building", "Creative Growth", "Skill Training"],
    image: kidsImg,
  },
  {
    num: "03",
    label: "Age Group 11 – 17 Years",
    title: "Interest Discovery & Goal Direction",
    desc: "Navigate teenage curiosity and emotional growth with clarity. We help students uncover their inherent strengths and interests, providing clear direction for their educational goals and future ambitions.",
    includes: ["Goal Setting", "Interest Mapping", "Student Guidance", "Confidence & Focus"],
    image: childrenImg,
  },
  {
    num: "04",
    label: "Age Group 18+ Years",
    title: "Career Guidance & Professional Direction",
    desc: "Make informed career choices backed by deep self-awareness. We guide young adults in aligning their professional aspirations with their natural leadership qualities and communication styles.",
    includes: ["Career Guidance", "Course Selection", "Professional Growth", "Leadership Skills"],
    image: graduatesImg,
  },
  {
    num: "05",
    label: "Age Group 25+ Years",
    title: "Personal Growth & Relationship Understanding",
    desc: "Gain profound clarity in your career, relationships, and emotional well-being. Our insights help adults understand their natural behavioral patterns, fostering stronger communication and meaningful personal growth.",
    includes: ["Emotional Intelligence", "Communication", "Relationship Growth", "Personal Clarity"],
    image: adultsImg,
  },
  {
    num: "06",
    label: "Institutional & Corporate Solutions",
    title: "Team Growth & Organizational Understanding",
    desc: "Transform your organization by deeply understanding your people. We provide schools, HR professionals, and corporations with critical insights into team dynamics, leadership potential, and optimal role suitability.",
    includes: ["Team Development", "HR Insights", "Leadership Mapping", "Organizational Growth"],
    image: allAgeGroupImg,
  }
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isManualLocked, setIsManualLocked] = useState(false);
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  useEffect(() => {
    if (!autoPlay || isManualLocked) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [autoPlay, isManualLocked]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsManualLocked(false);
          setAutoPlay(true);
        }
      });
    }, { threshold: 0.05 });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleManualSwitch = (index) => {
    setActiveIndex(index);
    setAutoPlay(false);
    setIsManualLocked(true);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="our-services" 
      className="relative w-full flex flex-col justify-center overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF6F9] to-[#FAF5F7] select-none z-10 scroll-mt-0"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      
      
      
      {/* ── Premium Background & Ambient Lighting ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#E9D5FF]/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#DCCEFF]/25 rounded-full blur-[130px]" />
        
        {/* Spotlight */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full z-0 opacity-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ 
            background: "radial-gradient(circle, rgba(216, 180, 254, 0.25) 0%, transparent 70%)", 
            left: 0, 
            top: 0,
            x: springX,
            y: springY
          }}
        />
        
        {/* Mesh Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-mesh mix-blend-overlay opacity-25" />
      </div>

      {/* ====================================================
          SECTION HEADER (LEFT ALIGNED)
          ==================================================== */}
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 mb-10 lg:mb-12 z-10 relative w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-12">
          <div className="max-w-4xl xl:max-w-5xl text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-purple-100 shadow-sm mb-4 backdrop-blur-md">
              <Sparkles size={14} className="text-purple-600 animate-pulse-soft" />
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-dark-lavender font-poppins pl-[0.1em]">
                ✨ Personalized Guidance for Every Stage
              </span>
            </div>

            <h2 className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight">
              Our Services & <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Growth Solutions</span>
            </h2>
          </div>

          <div className="max-w-md border-l-2 border-purple-300 pl-6 pb-2 text-left md:text-right md:border-l-0 md:border-r-2 md:pr-6 md:pl-0">
            <p className="text-sm sm:text-base font-light text-dark-lavender/80 leading-relaxed font-poppins">
              From early childhood learning to career guidance and personal growth, our insights help individuals discover strengths, improve learning, build confidence, and make smarter life decisions.
            </p>
          </div>
        </div>
      </div>

      {/* ====================================================
          DESKTOP 3x2 GRID HUB (3 Cards Up, 3 Cards Down)
          ==================================================== */}
      <div className="hidden lg:block w-full max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 pb-10 z-10 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 mb-8 items-stretch transform-gpu"
        >
          {services.map((service) => (
            <motion.div 
              key={service.num}
              variants={cardVariants}
              className="flex flex-col rounded-[32px] bg-white/80 border border-white shadow-[0_15px_45px_rgba(59,46,94,0.04)] hover:shadow-[0_25px_60px_rgba(59,46,94,0.08)] backdrop-blur-md overflow-hidden group hover:-translate-y-2 transition-all duration-700 text-left"
            >
              {/* Image Container (Curved Top) */}
              <div className="w-full h-[200px] xl:h-[240px] relative overflow-hidden shrink-0 bg-white flex items-center justify-center">
                <LazyImage 
                  src={service.image} 
                  alt={service.title} 
                  width={
                    service.num === "01" ? 540 :
                    service.num === "02" ? 1200 :
                    service.num === "03" ? 520 :
                    service.num === "04" ? 630 :
                    service.num === "05" ? 780 : 600
                  }
                  height={
                    service.num === "01" ? 360 :
                    service.num === "02" ? 675 :
                    service.num === "03" ? 252 :
                    service.num === "04" ? 360 :
                    service.num === "05" ? 501 : 334
                  }
                  objectCover={true}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out select-none pointer-events-none" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-lavender/30 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-5xl font-outfit text-white font-black italic drop-shadow-md opacity-30">{service.num}</span>
                </div>
              </div>

              {/* Content Area Below */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-gradient-purple font-poppins mb-2 block">
                    {service.label}
                  </span>
                  <h3 className="text-xl xl:text-2xl font-outfit font-black text-dark-lavender mb-3 leading-tight transition-colors duration-300">
                    {service.title.split(' ').map((word, i, arr) => i === arr.length - 1 ? <span key={i} className="text-gradient-purple italic font-light">{word}</span> : word + ' ')}
                  </h3>
                  <p className="text-xs xl:text-sm font-light text-dark-lavender/75 leading-relaxed border-l-2 border-purple-300 pl-4 mb-4 font-poppins">
                    {service.desc}
                  </p>
                </div>

                {/* Pill Cloud */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-dark-lavender/5">
                  {service.includes.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-50/50 border border-purple-100/50 text-dark-lavender/85 text-[10px] font-bold rounded-full uppercase tracking-wider hover:bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ====================================================
          MOBILE ONLY: CONTENT-FIRST DISCOVERY FLOW
          ==================================================== */}
      <div className="lg:hidden max-w-xl mx-auto px-6 pb-10 z-10 relative w-full flex flex-col gap-6">
        
        {/* Active Card Feed Container — Content First */}
        <div className="relative w-full min-h-[480px] rounded-[32px] bg-white border border-white shadow-xl backdrop-blur-md overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col flex-1 h-full select-none text-left"
            >
              {/* Full Bleed Image Header */}
              <div className="w-full h-56 relative overflow-hidden shrink-0 bg-white">
                <LazyImage 
                  src={services[activeIndex].image} 
                  alt={services[activeIndex].title} 
                  width={
                    services[activeIndex].num === "01" ? 540 :
                    services[activeIndex].num === "02" ? 1200 :
                    services[activeIndex].num === "03" ? 520 :
                    services[activeIndex].num === "04" ? 630 :
                    services[activeIndex].num === "05" ? 780 : 600
                  }
                  height={
                    services[activeIndex].num === "01" ? 360 :
                    services[activeIndex].num === "02" ? 675 :
                    services[activeIndex].num === "03" ? 252 :
                    services[activeIndex].num === "04" ? 360 :
                    services[activeIndex].num === "05" ? 501 : 334
                  }
                  objectCover={true}
                  className="w-full h-full pointer-events-none select-none" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-lavender/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-5 left-5 z-10">
                  <span className="text-4xl font-outfit text-white/40 font-black italic">{services[activeIndex].num}</span>
                </div>
              </div>

              {/* Card Content with Padding */}
              <div className="p-7 pt-6 flex flex-col flex-1">
                <span className="text-purple-600 text-[10px] font-extrabold tracking-widest uppercase font-poppins mb-1.5 block">
                  {services[activeIndex].label}
                </span>
                
                <h3 className="text-xl font-outfit font-black text-dark-lavender mb-3 leading-tight">
                  {services[activeIndex].title}
                </h3>
                
                <p className="text-xs font-light text-dark-lavender/80 leading-relaxed border-l-2 border-purple-400 pl-4 mb-6 font-poppins">
                  {services[activeIndex].desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dark-lavender/5 mt-auto">
                  {services[activeIndex].includes.map((item) => (
                    <span key={item} className="text-[9px] uppercase tracking-wider px-3 py-1 bg-purple-50 border border-purple-100 text-dark-lavender/85 rounded-full font-bold font-poppins">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar dots (Centered between card and buttons) */}
        {/* PROGRESS BAR DOTS */}
        <div className="flex justify-center gap-2 py-1">
          {services.map((_, i) => (
            <div
              key={i}
              onClick={() => handleManualSwitch(i)}
              className={`relative h-1.5 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${activeIndex === i ? 'w-10 bg-purple-100' : 'w-1.5 bg-purple-100'}`}
            >
              {activeIndex === i && (
                <motion.div
                  key={activeIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7.0, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Premium 2x3 Selection Grid */}
        <div className="grid grid-cols-3 gap-2 w-full mt-2">
          {services.map((item, index) => {
            const isActive = activeIndex === index;
            const labels = ["AGE 1-4", "AGE 4-10", "AGE 11-17", "CAREER 18+", "ADULTS 25+", "CORP & SCH"];
            const buttonLabel = labels[index] || "CORP & SCH";

            return (
              <button
                key={index}
                onClick={() => handleManualSwitch(index)}
                className={`flex flex-col items-center justify-center py-2 px-1 min-h-[46px] rounded-2xl border transition-all duration-500 font-extrabold text-[9px] uppercase tracking-wider font-poppins text-center leading-tight cursor-pointer break-words ${
                  isActive 
                    ? "bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 border-transparent text-white shadow-lg scale-[1.02]" 
                    : "bg-white/90 border-purple-100 text-dark-lavender/60 hover:border-purple-200"
                }`}
              >
                <span className="block mb-0.5">{buttonLabel.split(' ')[0]}</span>
                <span className="block opacity-90">{buttonLabel.split(' ').slice(1).join(' ')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================
          BOTTOM CTA SECTION
          ==================================================== */}
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 mt-2 z-10 relative w-full">
        <div className="w-full py-8 px-6 sm:py-10 sm:px-12 rounded-[32px] bg-gradient-to-r from-white/95 via-purple-50/90 to-purple-50/90 border border-white shadow-[0_20px_50px_rgba(59,46,94,0.06)] backdrop-blur-md relative overflow-hidden flex flex-col items-center text-center group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-purple-300/20 rounded-full blur-[70px] pointer-events-none animate-pulse-soft" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center gap-3.5">
            <h3 className="text-[clamp(20px,4.5vw,32px)] font-outfit font-black text-dark-lavender leading-tight tracking-tight">
              Every Individual Has a Different <span className="text-gradient-purple font-cursive text-[clamp(24px,5vw,42px)] font-normal capitalize">Path to Success</span>
            </h3>
            
            <p className="text-xs sm:text-sm font-light text-dark-lavender/80 font-poppins leading-relaxed max-w-2xl">
              Understanding strengths, learning styles, personality, and potential creates clarity for smarter growth decisions.
            </p>

            <motion.button 
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 30px rgba(59,46,94,0.15)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.scrollToContact ? window.scrollToContact() : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-2 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white font-poppins font-extrabold text-[11px] tracking-[0.2em] uppercase shadow-md shadow-purple-500/10 transition-all duration-300 group cursor-pointer min-h-[44px]"
            >
              <span>Explore Our Services</span>
            </motion.button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
