import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Award, Compass, Cpu, Activity, ChevronDown } from 'lucide-react';
import LazyImage from './LazyImage';
import useMediaQuery from './useMediaQuery';

import babyprintImg from '../assets/images/babyprint.webp';
import fingerprintImg from '../assets/images/fingerprint.webp';
import analysisImg from '../assets/images/analysis.webp';
import brainlobeImg from '../assets/images/brainlobe.webp';
import dmitImg from '../assets/images/dmit.webp';

export default function WhatWeDoSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Editorial Parallax: offset image vertical translation
  const rawImageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imageY = useSpring(rawImageY, { stiffness: 95, damping: 26, mass: 0.35 });

  const desktopImageStyle = isDesktop ? { y: imageY } : {};

  
  const steps = [
    {
      id: "01",
      label: "Step 01 — The Beginning of Identity",
      shortTitle: "The Beginning",
      heading: "Your Fingerprints Begin Before Birth",
      paragraphs: [
        "During early fetal development inside the mother’s womb, fingerprint patterns begin forming between the 13th and 21st week of pregnancy. These ridge patterns develop alongside the growth of the brain and nervous system.",
        "Fingerprints are completely unique to every individual — no two fingerprints are ever exactly alike, even among identical twins. Once formed, these patterns remain unchanged throughout life."
      ],
      supporting: "The uniqueness of fingerprints is influenced by genetics, neural development, and tiny environmental variations during fetal growth.",
      highlights: [
        "Formed Before Birth",
        "Unique Patterns",
        "Permanent for Life",
        "Neural Connection"
      ],
      image: babyprintImg,
      glowColor: "from-purple-200/25 to-purple-200/25",
      accentIcon: Shield
    },
    {
      id: "02",
      label: "Step 02 — Capturing Your Unique Patterns",
      shortTitle: "Pattern Mapping",
      heading: "Understanding Potential Through Fingerprint Mapping",
      paragraphs: [
        "At KEYAMIND SOLUTIONS, fingerprint impressions are captured using modern digital scanning methods designed to record detailed ridge patterns accurately and safely.",
        "These patterns are carefully studied to understand natural tendencies, learning styles, behavioral traits, and potential strengths."
      ],
      supporting: "Each finger contains different ridge characteristics associated with specific areas of brain functionality and cognitive preferences.",
      highlights: [
        "Digital Scanning",
        "Safe & Non-Invasive",
        "Detailed Study",
        "Insight Mapping"
      ],
      image: fingerprintImg,
      glowColor: "from-purple-200/25 to-purple-200/25",
      accentIcon: Compass
    },
    {
      id: "03",
      label: "Step 03 — The Science Behind the Analysis",
      shortTitle: "Scientific Study",
      heading: "Dermatoglyphics & Multiple Intelligence Analysis",
      paragraphs: [
        "Dermatoglyphics is the scientific study of fingerprint and palm ridge patterns. It is researched internationally in areas related to genetics, neuroscience, and psychology.",
        "DMIT combines these findings with theories of multiple intelligence to better understand natural abilities and learning preferences."
      ],
      supporting: "The analysis helps identify styles of thinking, learning behavior, communication preferences, and cognitive strengths.",
      highlights: [
        "Science-Based",
        "Neuroscience Focus",
        "Intelligence Test",
        "Behavior Insights"
      ],
      image: analysisImg,
      glowColor: "from-purple-200/25 to-purple-100/20",
      accentIcon: Cpu
    },
    {
      id: "04",
      label: "Step 04 — Brain & Intelligence Connection",
      shortTitle: "Brain Connection",
      heading: "Mapping Fingerprints to Brain Functions",
      paragraphs: [
        "Different fingerprint patterns are associated with various areas of brain functionality. Each finger corresponds with specific brain lobes related to logic, creativity, and learning ability.",
        "By understanding these patterns, deeper insights into personality and natural behavioral tendencies can be explored."
      ],
      supporting: "The analysis focuses on identifying dominant cognitive preferences and natural behavioral tendencies unique to you.",
      leftBrain: [
        "Logical Thinking",
        "Numerical Ability",
        "Language Processing"
      ],
      rightBrain: [
        "Creativity & Art",
        "Emotional Awareness",
        "Innovation"
      ],
      highlights: [
        "Lobe Analysis",
        "Cognitive Mapping",
        "Learning Style",
        "Personality"
      ],
      image: brainlobeImg,
      glowColor: "from-purple-200/25 to-purple-200/25",
      accentIcon: Activity
    },
    {
      id: "05",
      label: "Step 05 — Your Personalized Potential Report",
      shortTitle: "Growth Report",
      heading: "Transforming Insights Into Personal Growth",
      paragraphs: [
        "The final analysis report provides a comprehensive overview of your natural strengths, intelligence patterns, and behavioral traits.",
        "It is designed to help you make better educational, career, and personal development decisions with clarity and direction."
      ],
      supporting: "Our goal is not to limit you, but to provide confidence and a deeper understanding of your natural potential.",
      highlights: [
        "Intelligence Profile",
        "Learning Analysis",
        "Career Guidance",
        "Potential Mapping"
      ],
      image: dmitImg,
      glowColor: "from-purple-200/25 to-purple-200/20",
      accentIcon: Award
    }
  ];

  return (
    <section
      id="what-we-do"
      ref={containerRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden scroll-mt-0 select-none"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[140px] pointer-events-none max-md:hidden gpu-optimize" />
      <div className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] bg-purple-100/15 rounded-full blur-[150px] pointer-events-none max-md:hidden gpu-optimize" />

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 w-full relative z-10">

        {/* ====================================================
            SECTION HEADER
            ==================================================== */}
        <div className="w-full text-center max-w-4xl mx-auto mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-[inset:0_1px_1px_rgba(255,255,255,0.8)] mb-5 backdrop-blur-md"
          >
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-dark-lavender/90 font-poppins pl-[0.1em]">
              ✨ Our Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight"
          >
            The Science of DMIT <span className="text-gradient-purple font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Fingerprint Analysis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-dark-lavender/70 font-light mt-5 leading-relaxed font-poppins"
          >
            Every individual carries a unique blueprint of strengths, intelligence, and possibilities. Our process is designed to transform those hidden patterns into meaningful personal insights.
          </motion.p>
        </div>

        {/* ====================================================
            DESKTOP VIEW: CONNECTED STORYTELLING FLOW
            ==================================================== */}
        <div className="hidden lg:block relative w-full">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const IconComponent = step.accentIcon;

            return (
              <div
                key={step.id}
                className="relative w-full flex flex-col lg:flex-row items-center justify-between mb-10 lg:mb-12 last:mb-0"
              >
                {/* Visual / Image Side — INCREASED FOOTPRINT BY 20% */}
                <div className={`w-full lg:w-[46%] flex items-center justify-center relative ${isLeft ? 'lg:order-1' : 'lg:order-2'} mb-10 lg:mb-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={desktopImageStyle}
                    className="relative group select-none w-full rounded-[2rem] overflow-hidden shadow-lg border border-purple-100/50 gpu-optimize"
                  >
                    <LazyImage
                      src={step.image}
                      alt={step.heading}
                      width={
                        step.id === "01" ? 1536 : 
                        step.id === "02" ? 800 : 
                        step.id === "03" ? 696 : 
                        step.id === "04" ? 1200 : 908
                      }
                      height={
                        step.id === "01" ? 1024 : 
                        step.id === "02" ? 450 : 
                        step.id === "03" ? 472 : 
                        step.id === "04" ? 729 : 898
                      }
                      className="w-full h-auto object-contain pointer-events-none rounded-[2rem] transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                    />
                  </motion.div>
                </div>

                {/* Content Side — BALANCED PROPORTIONS */}
                <div className={`w-full lg:w-[48%] ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 md:p-8 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-2 rounded-2xl bg-white/60 text-purple-500 shadow-sm backdrop-blur-md border border-white">
                        <IconComponent size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-xs font-black tracking-[0.25em] uppercase text-purple-500 font-poppins">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-outfit font-black text-dark-lavender leading-tight tracking-tight mb-5">
                      {step.heading}
                    </h3>

                    <div className="flex flex-col gap-5 text-[14.5px] sm:text-[15.5px] text-dark-lavender/75 font-light leading-relaxed mb-6 font-poppins">
                      {step.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    <div className="p-5 rounded-[24px] bg-gradient-to-r from-purple-50/30 to-white/40 border border-white/50 mb-6 backdrop-blur-md shadow-sm">
                      <p className="text-sm text-dark-lavender/70 font-semibold italic font-poppins leading-relaxed">
                        {step.supporting}
                      </p>
                    </div>

                    {step.id === "04" && step.leftBrain && step.rightBrain && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 pt-6 border-t border-dark-lavender/5">
                        <div className="p-5 rounded-[24px] bg-purple-50/40 border border-white/60 shadow-sm backdrop-blur-md">
                          <span className="text-xs font-black tracking-widest uppercase text-purple-600 mb-3 block font-poppins">🧠 Left Brain Features</span>
                          <ul className="space-y-2">
                            {step.leftBrain.map((feat, fIdx) => (
                              <li key={fIdx} className="text-sm font-semibold text-dark-lavender/85 font-poppins flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-5 rounded-[24px] bg-purple-50/40 border border-white/60 shadow-sm backdrop-blur-md">
                          <span className="text-xs font-black tracking-widest uppercase text-purple-600 mb-3 block font-poppins">🎨 Right Brain Features</span>
                          <ul className="space-y-2">
                            {step.rightBrain.map((feat, fIdx) => (
                              <li key={fIdx} className="text-sm font-semibold text-dark-lavender/85 font-poppins flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-dark-lavender/5">
                      {step.highlights.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white text-[11px] font-bold text-dark-lavender/90 font-poppins shadow-sm hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-default"
                        >
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ====================================================
            MOBILE ONLY: PREMIUM HIDDEN CARD ACCORDION (FULL BLEED IMAGES)
            ==================================================== */}
        <div className="lg:hidden w-full flex flex-col gap-6 relative">
          {steps.map((step, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                id={`what-we-do-step-${index}`}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[2.5rem] border transition-all duration-700 ${
                  isOpen 
                    ? "bg-white border-purple-200 shadow-[0_25px_60px_rgba(139,92,246,0.1)]" 
                    : "bg-white/50 backdrop-blur-md border-white/80 shadow-lg"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => {
                    const nextOpen = !isOpen;
                    setActiveIndex(nextOpen ? index : -1);
                    if (nextOpen) {
                      setTimeout(() => {
                        const targetId = `what-we-do-step-${index}`;
                        const targetEl = document.getElementById(targetId);
                        if (targetEl) {
                          if (window.lenis) {
                            window.lenis.scrollTo("#" + targetId, {
                              offset: -96,
                              duration: 1.0,
                            });
                          } else {
                            const y = targetEl.getBoundingClientRect().top + window.pageYOffset - 96;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }
                        }
                      }, 180);
                    }
                  }}
                  className="w-full text-left p-7 flex items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-outfit font-black transition-all duration-700 ${isOpen ? "text-purple-500" : "text-dark-lavender/20"}`}>
                      {step.id}
                    </span>
                    <div className={`h-6 w-[2px] transition-colors duration-700 ${isOpen ? "bg-purple-400" : "bg-dark-lavender/10"}`} />
                    <h3 className={`font-poppins font-black text-[13px] tracking-[0.1em] uppercase transition-all duration-700 ${isOpen ? "text-dark-lavender" : "text-dark-lavender/50"}`}>
                      {step.shortTitle}
                    </h3>
                  </div>

                  <span className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all duration-700 ${
                    isOpen 
                      ? "border-purple-200 text-purple-500 rotate-180 bg-purple-50" 
                      : "border-dark-lavender/5 text-dark-lavender/20 shadow-sm"
                  }`}>
                    <ChevronDown size={22} strokeWidth={2.5} />
                  </span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.70, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 p-4 lg:p-12">
                        
                        {/* Image Container — MATCHES LAPTOP 'FULL IMAGE' LOGIC */}
                        <div className="w-full mb-6 flex justify-center">
                           <div className="w-full max-w-[480px] relative group rounded-3xl overflow-hidden shadow-md border border-purple-100/50">
                             <LazyImage 
                               src={step.image} 
                               alt={step.heading} 
                               width={
                                 step.id === "01" ? 1536 : 
                                 step.id === "02" ? 800 : 
                                 step.id === "03" ? 696 : 
                                 step.id === "04" ? 1200 : 908
                               }
                               height={
                                 step.id === "01" ? 1024 : 
                                 step.id === "02" ? 450 : 
                                 step.id === "03" ? 472 : 
                                 step.id === "04" ? 729 : 898
                               }
                               className="w-full h-auto object-contain rounded-3xl transition-transform duration-700 group-hover:scale-105" 
                             />
                           </div>
                        </div>

                        {/* Content Body with Padding Adjusted for Desktop Grid */}
                        <div className="px-3 lg:px-0 flex flex-col flex-1 justify-center lg:py-4">
                          <h4 className="text-[24px] lg:text-[32px] font-outfit font-black text-dark-lavender mb-6 leading-tight">
                            {step.heading}
                          </h4>

                          <div className="flex flex-col gap-5 mb-8 border-l-2 border-purple-400/40 pl-6">
                            {step.paragraphs.map((para, pIdx) => (
                              <p key={pIdx} className="text-[14.5px] lg:text-[15.5px] font-medium text-dark-lavender/75 leading-relaxed font-poppins">
                                {para}
                              </p>
                            ))}
                          </div>

                          <div className="flex justify-center lg:justify-start w-full">
                            <motion.button
                              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 15px 30px rgba(59,46,94,0.15)" }}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => window.scrollToContact ? window.scrollToContact() : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white font-extrabold text-[11px] tracking-[0.2em] uppercase shadow-md shadow-purple-500/10 transition-all duration-300 font-poppins text-center flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                            >
                              Get Started
                            </motion.button>
                          </div>
                          <div className="p-5 rounded-[24px] bg-purple-50/40 border border-purple-100/30 my-7 shadow-sm">
                             <p className="text-[13px] font-semibold italic text-dark-lavender/60 font-poppins leading-relaxed">
                               {step.supporting}
                             </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-6 border-t border-dark-lavender/5">
                            {step.highlights.map((tag, i) => (
                              <span key={i} className="text-[9px] uppercase tracking-widest px-3.5 py-2 bg-purple-50 border border-purple-100/40 text-purple-600 rounded-full font-black">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
