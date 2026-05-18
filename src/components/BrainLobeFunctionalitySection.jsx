import { memo } from "react";
import { motion } from "framer-motion";
import brainLobesImg from "../assets/images/brainlobes.webp";
import LazyImage from "./LazyImage";

const BrainLobeFunctionalitySection = memo(() => {
  const lobes = [
    {
      name: "Frontal Lobe",
      desc: "Planning, logic, leadership & decision making",
      color: "from-purple-500 to-purple-500",
      hoverBg: "from-purple-100/50 via-purple-50/40 to-white/20",
      glow: "shadow-[0_0_25px_rgba(244,63,94,0.45)]",
    },
    {
      name: "Parietal Lobe",
      desc: "Observation, sensory analysis & awareness",
      color: "from-blue-500 to-cyan-500",
      hoverBg: "from-blue-100/50 via-cyan-50/40 to-white/20",
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.45)]",
    },
    {
      name: "Temporal Lobe",
      desc: "Memory, communication & emotional balance",
      color: "from-emerald-500 to-green-500",
      hoverBg: "from-emerald-100/50 via-green-50/40 to-white/20",
      glow: "shadow-[0_0_25px_rgba(16,185,129,0.45)]",
    },
    {
      name: "Occipital Lobe",
      desc: "Visual intelligence & creative imagination",
      color: "from-yellow-400 to-orange-400",
      hoverBg: "from-amber-100/50 via-orange-50/40 to-white/20",
      glow: "shadow-[0_0_25px_rgba(251,191,36,0.45)]",
    },
    {
      name: "Insular Cortex",
      desc: "Self-awareness & internal emotional processing",
      color: "from-violet-500 to-purple-500",
      hoverBg: "from-purple-100/50 via-purple-50/40 to-white/20",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.45)]",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="brain-lobes"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#FAF5F8] overflow-hidden scroll-mt-[80px]"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent z-[2] pointer-events-none" />
      

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-purple-100/15 blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-100/15 blur-[140px] animate-pulse-soft" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 w-full flex flex-col gap-12 lg:gap-16">

        {/* ====================================================
            CENTERED SECTION HEADER (Theme Sync)
            ==================================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* TOP BADGE */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm mb-5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
              Brain Intelligence Mapping
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight mb-6"
          >
            Understand Your <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Brain Functionality</span>
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-lg text-dark-lavender/70 font-light leading-relaxed font-poppins max-w-2xl"
          >
            Every region of the brain contributes differently to intelligence,
            emotions, communication, creativity, observation, and analytical
            abilities.
          </motion.p>
        </div>

        {/* ====================================================
            MAIN CONTENT ROW: IMAGE FIRST ON MOBILE, CARDS FIRST ON DESKTOP
            ==================================================== */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-2">

          {/* LEFT CONTENT: GLASSY CARDS */}
          <div className="w-full lg:w-[48%] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col z-20 gap-3 md:gap-4 lg:gap-0 lg:space-y-3">
            {lobes.map((lobe, index) => (
              <motion.div
                key={index}
                custom={index + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{
                  scale: 1.015,
                  x: 5,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/45 backdrop-blur-xl py-3 px-4 sm:py-3.5 sm:px-5 shadow-[0_10px_35px_rgba(59,46,94,0.03)] transition-all duration-300 text-left gpu-optimize"
              >
                {/* HOVER GRADIENT */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r ${lobe.hoverBg}`}
                />

                <div className="relative flex items-center gap-4">
                  {/* DOT */}
                  <div className="shrink-0 flex items-center justify-center">
                    <div
                      className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${lobe.color} ${lobe.glow} transition-transform duration-300 group-hover:scale-125`}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex-1 font-poppins">
                    <h3 className="text-base sm:text-lg font-extrabold text-dark-lavender font-outfit tracking-wide leading-tight">
                      {lobe.name}
                    </h3>

                    <p className="mt-0.5 text-xs sm:text-[13px] text-dark-lavender/70 font-light leading-snug">
                      {lobe.desc}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div className="text-lg text-dark-lavender/30 group-hover:text-dark-lavender/80 group-hover:translate-x-1 transition-all duration-300 shrink-0 font-light pl-2">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT CONTENT: BRAIN VISUAL (Centered, Pro Look) */}
          <div className="w-full lg:w-[48%] flex items-center justify-center relative py-4 lg:py-0 z-10">
            {/* GLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square rounded-full bg-gradient-to-tr from-purple-200/20 via-purple-200/15 to-transparent blur-[100px] pointer-events-none -z-10" />

            {/* BRAIN VISUAL */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.025,
              }}
              className="relative z-10 flex items-center justify-center w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] xl:max-w-[500px] transition-transform duration-700 gpu-optimize"
            >
              <LazyImage
                src={brainLobesImg}
                alt="Brain Lobes Intelligence Mapping"
                width={1081}
                height={931}
                className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(59,46,94,0.22)] select-none pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default BrainLobeFunctionalitySection;