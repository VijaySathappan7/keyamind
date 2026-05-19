import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import ikigaiLogo from '../assets/logos/ikigailogo.webp';
import ikigaiImg from '../assets/images/ikigai.webp';
import LazyImage from './LazyImage';
import useMediaQuery from './useMediaQuery';

export default function IkigaiSection() {
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // IBM-style cinematic zoom linked to scroll (clamped once the section reaches halfway)
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.0, 1.0]);
  const scale = useSpring(rawScale, { stiffness: 35, damping: 20, mass: 0.5, restDelta: 0.001 });

  const desktopScaleStyle = isDesktop ? { scale, transformOrigin: 'center center' } : {};

  const highlights = [
    "Discover Your Strengths",
    "Align Passion with Purpose",
    "Build Career Clarity",
    "Create Meaningful Growth"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
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
      ref={containerRef}
      id="ikigai" 
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden scroll-mt-0"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] bg-purple-100/20 rounded-full blur-[120px] pointer-events-none" />
        {/* ====================================================
            CONTENT & DIAGRAM CONTAINER
            ==================================================== */}
        <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10">
          
          {/* MOBILE HEADING (Order 1 on Mobile, Hidden on LG) */}
          <div className="w-full lg:hidden flex flex-col items-center text-center gap-6 order-1">
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-warm-cream/80 border border-purple-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-md"
            >
              <img src={ikigaiLogo} width={20} height={20} loading="lazy" alt="Ikigai Logo" className="w-5 h-5 object-contain" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-dark-lavender/90 font-poppins pl-[0.1em]">
                Know Yourself Better
              </span>
            </motion.div>

            <motion.h2
              custom={2}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-[clamp(24px,5.5vw,42px)] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight"
            >
              Discover the Balance Between <br />
              <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] mt-2">Passion & Purpose</span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-[48%] flex items-center justify-center relative order-2 lg:order-2">
            <motion.div
              style={desktopScaleStyle}
              className="w-full flex justify-center items-center"
            >
              <div className="w-full flex items-center justify-center">
                <LazyImage
                  src={ikigaiImg}
                  alt="Ikigai Self Discovery Diagram"
                  width={1254}
                  height={1254}
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                />
              </div>
            </motion.div>
          </div>

          {/* ====================================================
              CONTENT COLUMN (Order 3 on Mobile, Left Column on LG)
              ==================================================== */}
          <div className="w-full lg:w-[48%] flex flex-col items-start justify-center text-left gap-6 z-10 order-3 lg:order-1">
            
            {/* DESKTOP HEADING (Visible only on LG+) */}
            <div className="hidden lg:flex flex-col items-start gap-6">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-warm-cream/80 border border-purple-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-md"
              >
                <img src={ikigaiLogo} width={20} height={20} loading="lazy" alt="Ikigai Logo" className="w-5 h-5 object-contain" />
                <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-dark-lavender/90 font-poppins pl-[0.1em]">
                  Know Yourself Better
                </span>
              </motion.div>

              <motion.h2
                custom={2}
                initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="text-[clamp(24px,5.5vw,42px)] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight"
              >
                Discover the Balance Between <br className="hidden sm:block" />
                <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Passion & Purpose</span>
              </motion.h2>
            </div>

            {/* SHARED CONTENT (Visible on both Mobile and Desktop) */}
            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-base sm:text-lg text-dark-lavender/85 leading-relaxed font-normal font-poppins max-w-xl"
            >
              The Ikigai philosophy helps individuals understand what they love, what they are naturally good at, what the world truly needs, and what can create meaningful opportunities in life.
            </motion.p>

            <motion.p
              custom={4}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-sm sm:text-base text-dark-lavender/70 font-light leading-relaxed border-l-2 border-purple-400 pl-4 max-w-xl"
            >
              At KEYAMIND SOLUTIONS, we guide individuals toward greater clarity, confidence, and direction by helping them connect their strengths, interests, and aspirations into a more fulfilling personal and professional journey.
            </motion.p>

            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-x-8 gap-y-4 w-full max-w-lg mt-2 pt-2 border-t border-purple-100/50"
            >
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-left">
                  <Check size={16} strokeWidth={3} className="text-purple-500 shrink-0" />
                  <span className="text-sm font-semibold text-dark-lavender">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={6}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="flex flex-row flex-wrap gap-4 w-full mt-4"
            >
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
                className="px-8 py-3.5 rounded-full font-extrabold text-[11px] tracking-[0.2em] uppercase text-white bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 shadow-md shadow-purple-500/10 transition-all duration-300 font-poppins text-center flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                Explore Your Potential
                <ArrowRight size={13} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.96 }}
                href="#our-services"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    window.lenis.scrollTo("#our-services", { offset: 0, duration: 1.2 });
                  } else {
                    document.getElementById("our-services")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-3.5 rounded-full font-extrabold text-[11px] uppercase tracking-wider text-dark-lavender/90 border border-purple-200 bg-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center font-poppins min-w-[170px] text-center cursor-pointer"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>

        </div>

      {/* ----------------------------------------------------
          STANDALONE SIGNATURE QUOTE SECTION AT THE END
          ---------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl mx-auto px-6 text-center relative z-10 mt-6 md:mt-8 border-t border-purple-100/20 pt-6"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic font-light text-dark-lavender/95 leading-[1.55] max-w-3xl mx-auto">
          “True growth begins when you understand who you are <br className="hidden sm:block" /> and where your potential belongs.”
        </h3>
      </motion.div>

    </section>
  );
}
