import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, ArrowLeft, Cpu, Sparkles } from 'lucide-react';
import LazyImage from './LazyImage';
import brainBackground from '../assets/images/brainbackground.webp';
import brainImg from '../assets/images/brain.webp';
import leftBrainImg from '../assets/images/leftbrain.webp';
import rightBrainImg from '../assets/images/rightbrain.webp';
import useMediaQuery from './useMediaQuery';

export default function BrainBalanceSection() {
  const containerRef = useRef(null);
  const [mobileState, setMobileState] = useState('main'); // 'main', 'left', 'right'
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  // Smooth cinematic vertical parallax for the background video
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yParallax = useSpring(rawY, { stiffness: 90, damping: 25, mass: 0.4 });

  // Premium Apple-style interactive spatial merger: Left/Right cards slide in, center brain scales
  const rawXLeft = useTransform(scrollYProgress, [0, 0.4], [-75, 0]);
  const xLeft = useSpring(rawXLeft, { stiffness: 95, damping: 26, mass: 0.35 });

  const rawXRight = useTransform(scrollYProgress, [0, 0.4], [75, 0]);
  const xRight = useSpring(rawXRight, { stiffness: 95, damping: 26, mass: 0.35 });

  // Premium Apple-style interactive spatial merger (clamped halfway for a premium subtle zoom)
  const rawBrainScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.0, 1.0]);
  const brainScale = useSpring(rawBrainScale, { stiffness: 95, damping: 26, mass: 0.35 });

  const desktopBgStyle = isDesktop ? { y: yParallax } : {};
  const desktopLeftCardStyle = isDesktop ? { x: xLeft } : {};
  const desktopRightCardStyle = isDesktop ? { x: xRight } : {};
  const desktopBrainScaleStyle = isDesktop ? { scale: brainScale } : {};


  const leftFeatures = [
    "Logical Reasoning",
    "Numerical Ability",
    "Critical Thinking",
    "Observation Skills",
    "Strategic Analysis",
    "Sequential Learning",
    "Language Processing",
    "Data Interpretation"
  ];

  const rightFeatures = [
    "Creativity & Innovation",
    "Visual Imagination",
    "Emotional Awareness",
    "Artistic Expression",
    "Intuitive Thinking",
    "Musical Sensitivity",
    "Big Picture Vision",
    "Abstract Thinking"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
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

  return (
    <section
      id="brain-balance"
      ref={containerRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden scroll-mt-0"
    >
      {/* 100% COMPLETE CINEMATIC BACKGROUND IMAGE WITH SMOOTH PARALLAX */}
      <motion.div
        style={{ ...desktopBgStyle, translateZ: 0 }}
        className="absolute inset-0 z-0 overflow-hidden scale-[1.15] will-change-transform"
      >
        <LazyImage
          src={brainBackground}
          alt="Brain Background"
          width={1920}
          height={1080}
          objectCover={true}
          className="absolute inset-0 w-full h-full scale-[1.1]"
        />
        <div className="absolute inset-0 bg-white/40 z-[1]" />
        {/* Seamless Top & Bottom Blending Masks */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent z-[2] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />
      </motion.div>

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 w-full flex flex-col items-center relative z-10">

        {/* ====================================================
            SECTION HEADER
            ==================================================== */}
        <div className="w-full text-center xl:text-left mb-10 xl:mb-12">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-purple-100 shadow-[inset:0_1px_1px_rgba(255,255,255,0.8)] mb-4 backdrop-blur-md"
          >
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-dark-lavender/90 font-poppins pl-[0.1em]">
              ✨ Understanding Human Potential
            </span>
          </motion.div>

          <motion.h2
            custom={2}
            initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight"
          >
            The Power of a <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Balanced Mind</span>
          </motion.h2>
        </div>

        {/* ====================================================
            DESKTOP LAYOUT (xl:flex)
            ==================================================== */}
        <div className="hidden xl:flex w-full flex-row items-stretch justify-between gap-6">

          {/* Left Brain Card */}
          <motion.div
            style={desktopLeftCardStyle}
            whileHover={{ y: -8, scale: 1.015, boxShadow: "0 25px 50px rgba(186, 164, 255, 0.15)" }}
            className="w-[32%] max-w-[400px] glass-premium rounded-[36px] border border-white/60 shadow-xl bg-white/45 flex flex-col overflow-hidden group gpu-optimize"
          >
            <div className="w-full h-48 lg:h-56 relative flex items-center justify-center overflow-hidden bg-white">
              <LazyImage src={leftBrainImg} alt="Left Brain" width={500} height={350} objectCover={true} className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <h3 className="text-2xl font-bold text-dark-lavender font-outfit">Analytical Intelligence</h3>
              <p className="text-sm text-dark-lavender/75 font-light leading-relaxed">The analytical side focuses on structure, logic, reasoning, and organization.</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-1 pt-5 border-t border-purple-100/50">
                {leftFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded-md bg-purple-100 text-purple-500 shrink-0 mt-0.5"><Check size={11} strokeWidth={3} /></div>
                    <span className="text-xs font-semibold text-dark-lavender/85 font-poppins">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Brain Image */}
          <div className="w-[32%] flex flex-col items-center justify-center relative">
            <div className="absolute w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-purple-300/35 to-purple-300/30 blur-2xl opacity-75 animate-pulse-soft -z-10 gpu-optimize" />
            <motion.div
              style={desktopBrainScaleStyle}
              className="w-full h-auto flex items-center justify-center gpu-optimize"
            >
              <LazyImage
                src={brainImg}
                alt="Brain Balance"
                width={1536}
                height={1024}
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_45px_rgba(59,46,94,0.18)]"
              />
            </motion.div>
            <div className="mt-8 glass-premium rounded-2xl p-5 border border-white/60 shadow-lg max-w-[340px] text-center bg-white/55">
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-purple-500 block mb-1.5">Balanced Intelligence</span>
              <p className="text-sm text-dark-lavender font-semibold leading-relaxed italic font-poppins">"True potential emerges when logic and creativity work together."</p>
            </div>
          </div>

          {/* Right Brain Card */}
          <motion.div
            style={desktopRightCardStyle}
            whileHover={{ y: -8, scale: 1.015, boxShadow: "0 25px 50px rgba(216, 180, 254, 0.2)" }}
            className="w-[32%] max-w-[400px] glass-premium rounded-[36px] border border-white/60 shadow-xl bg-white/45 flex flex-col overflow-hidden group gpu-optimize"
          >
            <div className="w-full h-48 lg:h-56 relative flex items-center justify-center overflow-hidden bg-white">
              <LazyImage src={rightBrainImg} alt="Right Brain" width={612} height={452} objectCover={true} className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <h3 className="text-2xl font-bold text-dark-lavender font-outfit">Creative Intelligence</h3>
              <p className="text-sm text-dark-lavender/75 font-light leading-relaxed">The creative side supports imagination, emotional intelligence, and innovation.</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-1 pt-5 border-t border-purple-100/50">
                {rightFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded-md bg-purple-100 text-purple-500 shrink-0 mt-0.5"><Check size={11} strokeWidth={3} /></div>
                    <span className="text-xs font-semibold text-dark-lavender/85 font-poppins">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            MOBILE LAYOUT (xl:hidden)
            ==================================================== */}
        <div className="xl:hidden w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {mobileState === 'main' && (
              <motion.div
                key="main"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center py-8"
              >
                {/* Big Centered Brain */}
                <div className="relative w-full flex justify-center py-8">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] aspect-square bg-purple-200/40 rounded-full blur-[80px]" />
                   <LazyImage src={brainImg} alt="Brain Balance" width={1536} height={1024} className="w-full h-auto object-contain relative z-10 filter drop-shadow-xl scale-110" />
                </div>

                {/* Two Navigation Buttons */}
                <div className="flex gap-4 w-full max-w-[340px] mt-6">
                   <button 
                     onClick={() => setMobileState('left')}
                     className="flex-1 flex flex-col items-center gap-3 p-6 rounded-[2rem] bg-gradient-to-b from-sky-50/80 to-white border border-sky-100 shadow-xl active:scale-95 transition-all"
                   >
                     <div className="w-12 h-12 rounded-2xl bg-sky-400 text-white flex items-center justify-center shadow-lg shadow-sky-200">
                        <Cpu size={24} />
                     </div>
                     <span className="text-[11px] font-black uppercase tracking-widest text-sky-500 font-poppins">Left Brain</span>
                   </button>

                   <button 
                     onClick={() => setMobileState('right')}
                     className="flex-1 flex flex-col items-center gap-3 p-6 rounded-[2rem] bg-gradient-to-b from-rose-50/80 to-white border border-rose-100 shadow-xl active:scale-95 transition-all"
                   >
                     <div className="w-12 h-12 rounded-2xl bg-rose-400 text-white flex items-center justify-center shadow-lg shadow-rose-200">
                        <Sparkles size={24} />
                     </div>
                     <span className="text-[11px] font-black uppercase tracking-widest text-rose-500 font-poppins">Right Brain</span>
                   </button>
                </div>
                
                <p className="mt-12 text-xs font-bold text-dark-lavender/40 uppercase tracking-[0.3em] font-poppins">Tap to Explore Hemispheres</p>
              </motion.div>
            )}

            {mobileState === 'left' && (
              <motion.div
                key="left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full glass-premium rounded-[36px] border border-blue-100 shadow-xl bg-white flex flex-col overflow-hidden gpu-optimize"
              >
                <div className="w-full h-64 sm:h-72 relative flex items-center justify-center overflow-hidden bg-white">
                  <LazyImage src={leftBrainImg} alt="Left Brain" width={500} height={350} objectCover={true} className="absolute inset-0 w-full h-full scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-500"><Cpu size={18} /></div>
                    <h3 className="text-2xl font-bold text-dark-lavender font-outfit">Analytical</h3>
                  </div>
                  <p className="text-sm text-dark-lavender/70 font-medium leading-relaxed font-poppins">Focuses on logic, reasoning, organization, and sequential learning.</p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3 pt-5 border-t border-blue-50">
                    {leftFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><Check size={10} strokeWidth={4} /></div>
                        <span className="text-sm font-bold text-dark-lavender/80 font-poppins">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setMobileState('main')}
                    className="mt-4 w-full py-4 rounded-2xl bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 shadow-md shadow-purple-500/10 text-white flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest font-poppins"
                  >
                    <ArrowLeft size={14} /> Back to Balance
                  </button>
                </div>
              </motion.div>
            )}

            {mobileState === 'right' && (
              <motion.div
                key="right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full glass-premium rounded-[36px] border border-purple-100 shadow-xl bg-white flex flex-col overflow-hidden gpu-optimize"
              >
                <div className="w-full h-64 sm:h-72 relative flex items-center justify-center overflow-hidden bg-white">
                  <LazyImage src={rightBrainImg} alt="Right Brain" width={612} height={452} objectCover={true} className="absolute inset-0 w-full h-full scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-500"><Sparkles size={18} /></div>
                    <h3 className="text-2xl font-bold text-dark-lavender font-outfit">Creative</h3>
                  </div>
                  <p className="text-sm text-dark-lavender/70 font-medium leading-relaxed font-poppins">Supports imagination, emotional intelligence, and artistic innovation.</p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3 pt-5 border-t border-purple-50">
                    {rightFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0"><Check size={10} strokeWidth={4} /></div>
                        <span className="text-sm font-bold text-dark-lavender/80 font-poppins">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setMobileState('main')}
                    className="mt-4 w-full py-4 rounded-2xl bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 shadow-md shadow-purple-500/10 text-white flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest font-poppins"
                  >
                    <ArrowLeft size={14} /> Back to Balance
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
