import { memo } from "react";
import { motion } from "framer-motion";

const YoutubeSection = memo(() => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // Cards removed in favor of a premium quote

  return (
    <section 
      id="inherent-mapping" 
      className="relative w-full py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#FAF6F9] via-[#FAF9F5] to-white overflow-hidden scroll-mt-[80px]"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />

      {/* Ambient Radial Blurs */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 relative z-10 w-full pt-4 pb-4">
        
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-100 bg-white/75 backdrop-blur-md shadow-sm mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
              The Miracle of Identity
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-[clamp(26px,6vw,46px)] lg:text-[50px] font-outfit font-black text-dark-lavender leading-[1.05] tracking-tight mb-8"
          >
            Why are your <br />
            <span className="text-gradient-purple font-cursive text-[clamp(36px,8vw,68px)] lg:text-[70px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_4px_12px_rgba(139,92,246,0.15)] ml-1">Fingerprints Unique?</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="text-base sm:text-lg lg:text-xl text-dark-lavender/70 font-light leading-relaxed font-poppins max-w-3xl"
          >
            A simple yet fascinating scientific journey into the biological 
            patterns that make you one of a kind in the entire universe.
          </motion.p>
        </div>

        {/* ====================================================
            PREMIUM CINEMA-GALLERY VIDEO FRAME
            ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl group mx-auto"
        >
          {/* ── Multi-Layered Cinematic Shadows ── */}
          <div className="absolute -inset-4 bg-purple-500/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
          <div className="absolute inset-10 bg-purple-500/10 blur-[100px] -z-20" />

          {/* ── Main Frame Architecture ── */}
          <div className="relative rounded-[3rem] sm:rounded-[3.5rem] p-[3px] bg-gradient-to-br from-white via-white/40 to-white/60 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12),0_20px_40px_-10px_rgba(139,92,246,0.05)] overflow-hidden">
            
            {/* Inner Border Glow */}
            <div className="absolute inset-0 border-[1.5px] border-purple-200/30 rounded-[3rem] sm:rounded-[3.5rem] z-20 pointer-events-none" />

            {/* Glassy Corner Brackets (Tech/Science Aesthetics) */}
            <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-purple-400/40 rounded-tl-xl z-30 pointer-events-none" />
            <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-purple-400/40 rounded-tr-xl z-30 pointer-events-none" />
            <div className="absolute bottom-8 left-8 w-10 h-10 border-b-2 border-l-2 border-purple-400/40 rounded-bl-xl z-30 pointer-events-none" />
            <div className="absolute bottom-8 right-8 w-10 h-10 border-b-2 border-r-2 border-purple-400/40 rounded-br-xl z-30 pointer-events-none" />

            {/* Video Container */}
            <div className="relative aspect-video rounded-[2.8rem] sm:rounded-[3.3rem] overflow-hidden bg-black shadow-inner">
              <iframe
                className="absolute inset-0 w-full h-full z-10"
                src="https://www.youtube.com/embed/iCRy8voU5dE?rel=0&modestbranding=1&showinfo=0&end=150"
                title="Why Are Your Fingerprints Unique?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Soft Edge Integration Mask */}
              <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_80px_rgba(0,0,0,0.2)]" />
            </div>
          </div>

          {/* ── Interactive Hint ── */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-500 hover:gap-6">
            <div className="w-10 h-[1px] bg-dark-lavender/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-dark-lavender whitespace-nowrap">Initialize Discovery</span>
            <div className="w-10 h-[1px] bg-dark-lavender/20" />
          </div>
        </motion.div>

        {/* ====================================================
            STANDALONE SIGNATURE QUOTE SECTION AT THE END
            ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto px-6 text-center relative z-10 mt-16 md:mt-20 pt-8"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-serif italic font-light text-dark-lavender/95 leading-[1.55] max-w-3xl mx-auto">
            “Your fingerprints are the biological signature of your unique potential. <br className="hidden sm:block" /> Understanding them is the first step toward unlocking a life of true purpose.”
          </h3>
        </motion.div>

      </div>
    </section>
  );
});

export default YoutubeSection;
