import { motion } from "framer-motion";
import quotientsImg from "../assets/images/quotients.webp";
import LazyImage from "./LazyImage";

const quotients = [
  {
    id: "IQ",
    title: "Intelligence Quotient",
    description: "Measure of analytical reasoning, logic, and cognitive problem-solving foundation.",
    badgeBg: "bg-cyan-50/80",
    badgeText: "text-cyan-600",
    gradient: "from-cyan-400 to-sky-500",
    order: "order-3"
  },
  {
    id: "EQ",
    title: "Emotional Quotient",
    description: "Capacity to manage emotional states and build meaningful interpersonal harmony.",
    badgeBg: "bg-blue-50/80",
    badgeText: "text-blue-600",
    gradient: "from-blue-500 to-indigo-600",
    order: "order-4"
  },
  {
    id: "CQ",
    title: "Creativity Quotient",
    description: "Ability to innovate, think creatively, and generate original adaptive solutions.",
    badgeBg: "bg-amber-50/80",
    badgeText: "text-amber-600",
    gradient: "from-amber-400 to-orange-400",
    order: "order-5"
  },
  {
    id: "AQ",
    title: "Adversity Quotient",
    description: "Resilience to handle challenges and transform setbacks into growth opportunities.",
    badgeBg: "bg-purple-50/80",
    badgeText: "text-purple-600",
    gradient: "from-purple-500 to-red-500",
    order: "order-6"
  }
];

export default function HumanQuotientsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section 
      id="human-quotients" 
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF5F8] to-[#FAF9F6] overflow-hidden scroll-mt-20"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />

      {/* SUBTLE BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-100/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ── LUXURY CENTERED HEADING (Theme Sync) ── */}
        <div className="text-center mb-12 lg:mb-20 flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
              Neuro-Cognitive Metrics
            </span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight"
          >
            Decoding the <br />
            <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Intelligence Spectrum</span>
          </motion.h2>
        </div>

        {/* ── DESKTOP GRID ARCHITECTURE ── */}
        <div className="hidden lg:grid grid-cols-12 gap-y-12 gap-x-0 items-center justify-items-center">
          {/* 1. IQ (Top Left) */}
          <div className="lg:col-span-3 lg:col-start-1 lg:row-start-1 w-full flex justify-end lg:pr-12">
            <QuotientCard item={quotients[0]} index={4} />
          </div>

          {/* 2. EQ (Top Right) */}
          <div className="lg:col-span-3 lg:col-start-10 lg:row-start-1 w-full flex justify-start lg:pl-12">
            <QuotientCard item={quotients[1]} index={5} />
          </div>

          {/* 3. CENTER INFOGRAPHIC */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="lg:col-span-6 lg:col-start-4 lg:row-span-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 to-ivory opacity-25 rounded-full blur-[70px]" />
              <LazyImage
                src={quotientsImg}
                alt="Quotient Infographic"
                width={895}
                height={888}
                className="w-full h-auto object-contain filter drop-shadow-[0_25px_60px_rgba(255,105,180,0.14)] select-none pointer-events-none"
              />
            </div>
          </motion.div>

          {/* 4. CQ (Bottom Left) */}
          <div className="lg:col-span-3 lg:col-start-1 lg:row-start-2 w-full flex justify-end lg:pr-12">
            <QuotientCard item={quotients[2]} index={6} />
          </div>

          {/* 5. AQ (Bottom Right) */}
          <div className="lg:col-span-3 lg:col-start-10 lg:row-start-2 w-full flex justify-start lg:pl-12">
            <QuotientCard item={quotients[3]} index={7} />
          </div>
        </div>

        {/* ── MOBILE COMPACT ARCHITECTURE (IQ/EQ Top, Image Middle, CQ/AQ Bottom) ── */}
        <div className="lg:hidden flex flex-col gap-8 items-center">
          
          {/* Top Row: IQ & EQ Side-by-Side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            <QuotientCard item={quotients[0]} index={4} isMobile />
            <QuotientCard item={quotients[1]} index={5} isMobile />
          </div>

          {/* Middle: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/20 to-transparent blur-[60px]" />
            <LazyImage
              src={quotientsImg}
              alt="Intelligence Spectrum"
              width={895}
              height={888}
              className="w-full h-auto object-contain filter drop-shadow-xl select-none pointer-events-none"
            />
          </motion.div>

          {/* Bottom Row: CQ & AQ Side-by-Side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            <QuotientCard item={quotients[2]} index={6} isMobile />
            <QuotientCard item={quotients[3]} index={7} isMobile />
          </div>

        </div>

      </div>
    </section>
  );
}

const QuotientCard = ({ item, index, isMobile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative backdrop-blur-xl bg-white/65 border border-white/50 shadow-[0_15px_45px_rgba(255,182,193,0.15)] transition-all duration-500 w-full gpu-optimize ${
        isMobile 
          ? "rounded-[22px] p-4 text-center flex flex-col items-center" 
          : "rounded-[28px] p-5 md:p-6 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(255,182,193,0.22)] max-w-[320px]"
      }`}
    >
      {/* Small Glass Badge */}
      <div className={`inline-flex items-center justify-center rounded-xl ${item.badgeBg} ${item.badgeText} font-black mb-3 shadow-sm border border-white/40 ${
        isMobile ? "w-8 h-8 text-[9px]" : "w-10 h-10 text-[11px]"
      }`}>
        {item.id}
      </div>
      
      <h3 className={`font-outfit font-black text-dark-lavender transition-colors duration-300 ${
        isMobile ? "text-[13px] leading-tight mb-1.5" : "text-lg md:text-xl mb-2 group-hover:text-purple-500"
      }`}>
        {item.title}
      </h3>
      
      <p className={`text-dark-lavender/60 font-medium leading-relaxed font-poppins ${
        isMobile ? "text-[9.5px] leading-[1.3] line-clamp-2" : "text-[13px] md:text-sm"
      }`}>
        {item.description}
      </p>

      {/* Decorative Corner Accent */}
      {!isMobile && (
        <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-br-[28px] transition-opacity duration-500`} />
      )}
    </motion.div>
  );
};
