import { useRef, memo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import useMediaQuery from './useMediaQuery';

// Import images directly from assets for Vite build optimization
import uniquenessImg from '../assets/images/uniqueness.webp';
import invarianceImg from '../assets/images/invariance.webp';
import hereditaryImg from '../assets/images/heriditary.webp';


const fingerprintCharacteristics = [
  {
    title: "Uniqueness of Identity",
    desc: "No two fingerprints are identical. Every individual possesses a completely unique pattern that defines their biological signature.",
    image: uniquenessImg
  },
  {
    title: "Invariance & Stability",
    desc: "Fingerprint patterns remain unchanged throughout a person’s lifetime, staying stable from childhood to adulthood.",
    image: invarianceImg
  },
  {
    title: "Hereditary Influences",
    desc: "Scientific research suggests that ridge tendencies carry hereditary influences through genetic inheritance and neural blueprints.",
    image: hereditaryImg
  }
];

const FingerprintCharacteristicsSection = memo(() => {
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Dynamic image scaling on scroll
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1.0, 1.15]);
  const imgScale = useSpring(rawScale, { stiffness: 95, damping: 26, mass: 0.35 });

  const desktopImgStyle = isDesktop ? { scale: imgScale } : {};


  return (
    <section 
      ref={containerRef}
      id="fingerprint-characteristics" 
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF6F8] to-[#FAF2F7] overflow-hidden scroll-mt-0"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAF6F8] via-[#FAF6F8]/60 to-transparent z-[2] pointer-events-none" />
      

      {/* Subtle Ambient Glows */}
      <div className="absolute top-[15%] left-[-5%] w-[400px] h-[400px] bg-purple-100/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-5%] w-[450px] h-[450px] bg-purple-100/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">
        
        {/* ====================================================
            CONCISE SECTION HEADER
            ==================================================== */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 mb-4"
          >
            <Sparkles size={11} className="text-purple-500" />
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-purple-600 font-poppins">
              Scientific Identity
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-tight tracking-tight mb-4"
          >
            Every Fingerprint Tells <br />
            a <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal">Unique Story</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="text-xs md:text-sm text-dark-lavender/60 font-light max-w-lg mx-auto font-poppins"
          >
            Simple, permanent, and unique. Discover the biological map that defines your innate potential.
          </motion.p>
        </div>

        {/* ====================================================
            HORIZONTAL CARD GRID (SIDE-BY-SIDE)
            ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {fingerprintCharacteristics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col rounded-[32px] bg-warm-cream/20 border border-purple-100/30 overflow-hidden hover:bg-white hover:shadow-xl hover:shadow-purple-100/10 transition-all duration-500 text-left h-full gpu-optimize"
            >
              {/* Full-Bleed Image Top (Covering Corners) */}
              <div className="w-full h-48 lg:h-56 shrink-0 bg-white relative overflow-hidden flex items-center justify-center">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  style={desktopImgStyle}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>

              {/* Content Bottom */}
              <div className="flex-1 flex flex-col p-8">
                <h3 className="text-xl font-outfit font-black text-dark-lavender mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[13.5px] text-dark-lavender/70 font-light leading-relaxed font-poppins">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default FingerprintCharacteristicsSection;
