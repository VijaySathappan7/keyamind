import { motion } from 'framer-motion';
import founderImage from '../assets/images/swathi.webp';

export default function FounderProfileSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="founder" className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-white py-16 sm:py-20 lg:py-24 select-none z-10 font-poppins scroll-mt-[80px]">
      {/* Seamless Bottom Blending Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-200/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1320px] relative z-10">
        {/* ====================================================
            TOP HEADER ROW: TITLE (LEFT) & SUB CONTENT (RIGHT)
            ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 pb-6 border-b border-dark-lavender/5 mb-10 lg:mb-12">
          <div className="flex flex-col text-left lg:w-7/12">
            {/* BADGE */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm mb-3 self-start"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
                Founder Profile
              </span>
            </motion.div>

            {/* STACKED HEADING */}
            <motion.h2
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight text-left"
            >
              Meet Our Founder
              <span className="text-gradient-purple font-cursive text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal capitalize tracking-normal block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] mt-1">
                Discovering the intelligence within
              </span>
            </motion.h2>
          </div>

          {/* SUB CONTENT */}
          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-sm sm:text-base leading-relaxed text-dark-lavender/80 lg:w-5/12 font-poppins font-light text-left lg:pb-2"
          >
            Empowering students and parents with clear, scientific, and personalized guidance to uncover innate talents and build a confident future.
          </motion.p>
        </div>

        {/* ====================================================
            MINIMALIST PROFILE SHOWCASE
            ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: IMMACULATE EXECUTIVE PORTRAIT */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 flex flex-col items-start w-full"
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px] aspect-square rounded-full border border-purple-200/60 p-2 sm:p-2.5 mx-auto lg:mx-0 bg-white/40 backdrop-blur-sm shadow-[0_15px_45px_rgba(59,46,94,0.08)] group gpu-optimize">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white shadow-[0_5px_15px_rgba(59,46,94,0.05)]">
                <img
                  src={founderImage}
                  alt="T Swathi Deivanai - Founder of Keyamind"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter group-hover:scale-105 transition-transform duration-1000 ease-out rounded-full"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col text-left pl-2 w-full items-center lg:items-start">
              <h3 className="text-xl sm:text-2xl font-black text-dark-lavender font-outfit">
                T Swathi Deivanai
              </h3>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-gradient-purple uppercase font-poppins mt-1 text-center lg:text-left">
                Founder & Student Potential Analyst
              </p>
              <div className="w-8 h-[2px] bg-purple-300 mt-3" />
            </div>
          </motion.div>

          {/* RIGHT: EDITORIAL BIO & MISSION */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7 flex flex-col gap-10 text-left pt-2"
          >
            {/* Editorial Bio */}
            <div className="space-y-6 text-base sm:text-lg text-dark-lavender/80 leading-relaxed font-light font-poppins">
              <p className="text-xl sm:text-2xl text-dark-lavender font-playfair italic font-normal leading-snug">
                “Every child possesses a distinct blueprint of talent. My mission is to help uncover that uniqueness and transform it into meaningful academic success, personal growth, and future excellence.”
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-dark-lavender/75">
                I am a Career Consultant and Student Potential Analyst dedicated to helping students discover their innate strengths, intelligence patterns, personality traits, and true career direction through advanced assessment and personalized guidance.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-dark-lavender/75">
                Using my proprietary software and analytical approach, I provide deep insights into a student’s natural abilities, learning style, memory and retention techniques, behavioral patterns, SWOT analysis, and career compatibility. My counseling process is designed to bring clarity, confidence, and long-term vision to both students and parents.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-dark-lavender/75">
                I specialize in guiding students through crucial academic and career decisions, including stream selection after 10th grade, higher education planning, and identifying suitable professional pathways aligned with their unique potential.
              </p>
            </div>

            {/* Executive Action Button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    window.lenis.scrollTo("#contact", { offset: -80, duration: 1.2 });
                  } else {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white font-extrabold text-[11px] uppercase tracking-[0.3em] shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
