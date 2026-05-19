import { useRef, memo } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import logoImage from '../assets/logos/logo.webp';
import titleTaglineImage from '../assets/logos/titletagline.webp';
import heroBackgroundVideo from '../assets/videos/herobackground11.mp4';
import LazyVideo from './LazyVideo';
import LazyImage from './LazyImage';
import useMediaQuery from './useMediaQuery';

const ExpertiseSection = memo(() => {
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  // Scroll tracking of this specific section for premium drift
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const desktopY1Style = isDesktop ? { y: y1 } : {};

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
      id="expertise"
      className="relative overflow-hidden flex flex-col justify-center pt-16 pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white to-[#FAF6F8] select-none z-10 scroll-mt-0"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory-purple via-ivory-purple/60 to-transparent z-[2] pointer-events-none" />

      {/* ── Premium Background & Mouse Tracking Spotlight ── */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B2E5E06_1px,transparent_1px),linear-gradient(to_bottom,#3B2E5E06_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient Blobs */}
        <div className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-300/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-[10%] right-[10%] w-[450px] h-[450px] bg-purple-300/15 rounded-full blur-[140px]" />

        {/* Spotlight */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full z-0 opacity-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
            left: 0,
            top: 0,
            x: springX,
            y: springY
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          transition={{ duration: 0.70, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
              DMIT & Career Counselling
            </span>
          </div>

          <h2 className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight mb-5">
            Scientific Fingerprint Analysis. Clear <br />
            <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] mt-1">
              Career Direction.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-dark-lavender/80 leading-relaxed font-light font-poppins max-w-3xl mb-4 px-4">
            Keyamind Solutions combines advanced DMIT brain mapping with practical,
            research-backed mentorship. We don't just advise — we help individuals
            and organizations discover their inherent strengths and build a lifelong
            foundation of clarity, purpose, and confidence.
          </p>

          {/* Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            style={desktopY1Style}
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            transition={{ duration: 0.70, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl mx-auto select-none pointer-events-none px-4 md:px-0 mt-10 sm:mt-14 md:mt-16"
          >


            <div className="relative mx-auto w-[92%] md:w-[90%] aspect-[16/10] h-auto bg-[#0c0c0c] rounded-[1.5rem] sm:rounded-[2.5rem] border-[8px] sm:border-[12px] md:border-[16px] border-[#1a1a1a] shadow-[0_20px_50px_rgba(59,46,94,0.1)] overflow-hidden flex flex-col justify-between">
              {/* Webcam */}
              <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-900 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-purple-500/40 animate-pulse" />
              </div>

              {/* Screen Content */}
              <div
                className="flex-1 w-full relative overflow-hidden bg-warm-cream/90 flex flex-col items-center justify-between p-2 md:p-4 text-center gap-2 sm:gap-3"
              >
                {/* Background Video (Plays once and stops on final frame) */}
                <LazyVideo
                  src={heroBackgroundVideo}
                  onEnded={(e) => e.target.pause()}
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-75 pointer-events-none"
                />

                <div className="absolute inset-0 bg-white/10 backdrop-blur-none z-0" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B2E5E04_1px,transparent_1px),linear-gradient(to_bottom,#3B2E5E04_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* 1. Top Spacer */}
                <div className="flex-1 min-h-[0px]" />

                {/* 2. Centered Graphics Container (Logo + TitleTagline) */}
                <div className="flex-shrink-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 relative z-10 w-full">
                  {/* Left: Keyamind Logo (Balanced Proportions) */}
                  <div className="relative flex items-center justify-center h-[120px] w-[120px] sm:h-[110px] sm:w-[110px] md:h-[150px] md:w-[150px] lg:h-[180px] lg:w-[180px] xl:h-[210px] xl:w-[210px] z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, ease: "easeOut" }}
                      className="absolute w-[135%] h-[135%] rounded-full border border-purple-500/20 border-dashed pointer-events-none"
                    />

                    <motion.div
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut"
                      }}
                      className="h-full w-auto flex items-center justify-center relative z-10"
                    >
                      <LazyImage
                        src={logoImage}
                        alt="Keyamind Logo"
                        width={210}
                        height={210}
                        className="h-full w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(59,46,94,0.15)]"
                      />
                    </motion.div>
                  </div>

                  {/* Right: Keyamind Title & Tagline (Increased for mobile) */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, delay: 0.4, ease: "easeInOut" }}
                    className="h-[70px] sm:h-[70px] md:h-[90px] lg:h-[115px] xl:h-[135px] flex items-center justify-center relative z-10"
                  >
                    <LazyImage
                      src={titleTaglineImage}
                      alt="Keyamind Title Tagline"
                      width={380}
                      height={135}
                      className="h-full w-auto object-contain relative z-10 filter drop-shadow-[0_10px_25px_rgba(59,46,94,0.15)]"
                    />
                  </motion.div>
                </div>

                {/* 3. Bottom Spacer containing Button */}
                <div className="flex-1 flex flex-col justify-end pb-1 md:pb-3 relative z-10 w-full font-poppins">
                  <div className="relative mx-auto mt-2 sm:mt-4">
                    <motion.button
                      animate={{ scale: [1, 1, 0.94, 1] }}
                      transition={{
                        duration: 3.5,
                        ease: "easeInOut",
                        times: [0, 0.5, 0.7, 1]
                      }}
                      className="px-8 py-3 sm:px-12 sm:py-4 bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.3em] rounded-full shadow-[0_10px_35px_rgba(59,46,94,0.35)] border border-purple-300/30 relative overflow-hidden"
                    >
                      KEYAMIND
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                      />
                    </motion.button>

                    <motion.div
                      animate={{ scale: [1, 1.6, 1.15], opacity: [0, 0.45, 0] }}
                      transition={{
                        duration: 3.5,
                        ease: "easeInOut",
                        times: [0, 0.6, 1]
                      }}
                      className="absolute inset-0 rounded-full border-2 border-purple-400/40 -z-10 pointer-events-none"
                    />

                    {/* Simulated Cursor */}
                    <motion.div
                      animate={{
                        x: [60, 0, -2, 0, 60],
                        y: [80, 15, 12, 15, 80],
                        scale: [1, 1, 0.8, 1, 1]
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.5, 0.6, 1]
                      }}
                      className="absolute z-30 pointer-events-none"
                      style={{ top: '100%', left: '50%', marginLeft: '-5px', marginTop: '-15px' }}
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-purple-600 filter drop-shadow-[0_4px_12px_rgba(59,46,94,0.45)]" viewBox="0 0 24 24">
                        <path d="M4.5 1.5 L21 10 L13 12 L17 19.5 L14 21 L10 13.5 L4.5 18 Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="relative mx-auto w-full h-4 md:h-6 bg-[#1a1a1a] rounded-b-[2rem] shadow-xl flex justify-center z-20">
              <div className="absolute top-0 inset-x-10 h-[3px] bg-white/10" />
              <div className="w-[20%] h-[6px] md:h-[8px] bg-[#0c0c0c] rounded-b-xl border-t border-black/50 shadow-inner" />
            </div>
            <div className="mx-auto w-[90%] h-4 bg-dark-lavender/30 rounded-full filter blur-xl -mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default ExpertiseSection;
