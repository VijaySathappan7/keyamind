import { memo } from "react";
import { Sparkles } from "lucide-react";
import LazyImage from "./LazyImage";

import pieChartImg from "../assets/images/learningpie.webp";
import visualImg from "../assets/images/visual.webp";
import auditoryImg from "../assets/images/auditory.webp";
import kinestheticImg from "../assets/images/kinesthetic.webp";

const LearningStylesSection = memo(() => {
  const cards = [
    {
      id: "visual",
      title: "Visual Learners",
      image: visualImg,
      description: "Visual learners understand and retain information best through images, diagrams, illustrations, graphs, videos, and visual demonstrations.",
      badgeBg: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: "auditory",
      title: "Auditory Learners",
      image: auditoryImg,
      description: "Auditory learners absorb information effectively through listening, conversations, discussions, verbal explanations, and sound-based communication.",
      badgeBg: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      id: "kinesthetic",
      title: "Kinesthetic Learners",
      image: kinestheticImg,
      description: "Kinesthetic learners prefer hands-on activities, movement, physical interaction, and real-life experiences to understand concepts more effectively.",
      badgeBg: "bg-amber-50 text-amber-600 border-amber-100",
    },
  ];

  return (
    <section id="learning-styles" className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF2F7] to-[#FAF6F9] overflow-hidden scroll-mt-[80px]">
      {/* Seamless Top & Bottom Blending Masks */}
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />
      
      {/* Soft Background Mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-mesh mix-blend-overlay opacity-25 pointer-events-none select-none" />

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 relative z-10 w-full flex flex-col justify-between h-full gap-8 lg:gap-10 pt-4 pb-4">
        
        {/* ====================================================
            SECTION HEADER: Guaranteed 100% Immediate Visibility
            ==================================================== */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-12 border-b border-dark-lavender/5 pb-8">
          <div className="flex flex-col items-start text-left max-w-xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-purple-100 shadow-sm mb-4 backdrop-blur-md">
              <Sparkles size={13} className="text-purple-600" />
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-dark-lavender font-poppins pl-[0.1em]">
                ✨ Personalized Insights
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight">
              Natural <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Learning Styles</span>
            </h2>
          </div>

          {/* Subheading (Right Aligned relative to the title area) */}
          <div className="w-full lg:w-1/2 flex lg:justify-end text-left lg:text-right">
            <p className="text-sm sm:text-base text-dark-lavender/80 font-light font-poppins leading-relaxed max-w-lg">
              Every individual processes information differently. Identifying the right learning approach improves understanding, creativity, and overall educational effectiveness.
            </p>
          </div>
        </div>

        {/* ====================================================
            DESKTOP SPLIT: LEFT PURE PIE CHART & QUOTE | RIGHT CARDS
            ==================================================== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full mt-2">
          
          {/* LEFT SIDE → MASSIVE FIXED PIE CHART (No Dancing) + CONCISE QUOTE BELOW */}
          <div className="w-full lg:w-[48%] flex flex-col items-center justify-center gap-6 relative">
            {/* Massive Pure Centerpiece Image (Static, Fixed, Balanced sizing) */}
            <div className="w-full max-w-[450px] sm:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] relative flex items-center justify-center">
              <LazyImage 
                src={pieChartImg} 
                alt="Cognitive Learning Styles Pie Chart Blueprint" 
                width={1040}
                height={996}
                className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(59,46,94,0.18)] select-none pointer-events-none"
              />
            </div>

            {/* Reduced Quote Positioned Directly Below the Pie Image */}
            <div className="w-full max-w-md text-center px-4 pt-1">
              <p className="text-sm sm:text-base font-serif italic text-dark-lavender/80 font-medium leading-relaxed">
                “When learning aligns with natural ability, growth becomes faster, easier, and more meaningful.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE → 3 STREAMLINED STATIC CARDS (No hover options) */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center gap-5">
            {cards.map((card) => {
              return (
                <div 
                  key={card.id}
                  className="rounded-[28px] bg-white/70 border border-white shadow-[0_10px_30px_rgba(59,46,94,0.04)] backdrop-blur-xl flex flex-row items-stretch overflow-hidden min-h-[90px] sm:min-h-[110px]"
                >
                  {/* Left Corner Filled Entirely with Image (Landscape Format) */}
                  <div className="w-[130px] sm:w-[180px] lg:w-[220px] bg-purple-50/30 shrink-0 relative overflow-hidden flex items-center justify-center">
                     <LazyImage 
                       src={card.image} 
                       alt={card.title} 
                       width={
                         card.id === "visual" ? 476 :
                         card.id === "auditory" ? 1200 : 1010
                       }
                       height={
                         card.id === "visual" ? 290 :
                         card.id === "auditory" ? 800 : 674
                       }
                       objectCover={true}
                       className="absolute inset-0 w-full h-full pointer-events-none"
                     />
                  </div>

                  {/* Minimal Content on the Right Hand Side */}
                  <div className="flex flex-col text-left justify-center p-6 sm:p-8 flex-1 gap-2">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-xl sm:text-2xl font-black text-dark-lavender font-outfit tracking-tight">
                        {card.title}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest font-poppins border ${card.badgeBg}`}>
                        {card.title.split(" ")[0].toUpperCase()}
                      </span>
                    </div>

                    <p className="text-[12px] sm:text-[13.5px] font-medium text-dark-lavender/75 font-poppins leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
});

export default LearningStylesSection;
