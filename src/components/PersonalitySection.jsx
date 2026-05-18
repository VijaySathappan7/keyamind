import { memo } from "react";
import { Sparkles } from "lucide-react";
import LazyImage from "./LazyImage";

import eagleImg from "../assets/images/eagle.webp";
import peacockImg from "../assets/images/peacocok.webp";
import owlImg from "../assets/images/owl.webp";
import doveImg from "../assets/images/dove.webp";

const PersonalitySection = memo(() => {
  const cards = [
    {
      id: "eagle",
      birdName: "Eagle",
      keyword: "Leadership",
      image: eagleImg,
      textColor: "text-amber-600",
    },
    {
      id: "peacock",
      birdName: "Peacock",
      keyword: "Expressive",
      image: peacockImg,
      textColor: "text-purple-600",
    },
    {
      id: "owl",
      birdName: "Owl",
      keyword: "Analytical",
      image: owlImg,
      textColor: "text-blue-600",
    },
    {
      id: "dove",
      birdName: "Dove",
      keyword: "Supportive",
      image: doveImg,
      textColor: "text-purple-600",
    },
  ];

  return (
    <section 
      id="personality" 
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F6] to-[#FAF2F7] overflow-hidden scroll-mt-20"
    >
      {/* Seamless Top & Bottom Blending Masks */}
      
      

      {/* Delicate Pinkish Blend Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-purple-200/40 via-purple-100/30 to-purple-200/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-mesh mix-blend-overlay opacity-25" />
      </div>

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 relative z-10 w-full pt-2 pb-2">
        
        {/* DESKTOP SPLIT: LEFT TITLE | RIGHT 4 CIRCULAR CARDS IN A SINGLE LINEAR ROW */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          {/* LEFT SIDE → CLEAN LEFT-ALIGNED TITLE */}
          <div className="w-full lg:w-[32%] flex flex-col items-start text-left gap-3 shrink-0">
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 border border-purple-100 shadow-sm backdrop-blur-md">
              <Sparkles size={13} className="text-purple-600" />
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-dark-lavender font-poppins pl-[0.1em]">
                ✨ Personality Insights
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight">
              Know Your Natural <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Personality Style</span>
            </h2>
          </div>

          {/* RIGHT SIDE → 4 CIRCULAR PROFILE CARDS (Grid on mobile, Single Row on Desktop without scrolling) */}
          <div className="w-full lg:w-[68%] grid grid-cols-2 sm:flex sm:flex-row items-center justify-center lg:justify-end gap-6 sm:gap-4 lg:gap-8">
            {cards.map((card) => {
              return (
                <div 
                  key={card.id}
                  className="flex flex-col items-center text-center gap-2.5 flex-1"
                >
                  <div className="w-40 h-40 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full overflow-hidden border-2 border-white shadow-[0_10px_30px_rgba(59,46,94,0.08)] flex items-center justify-center bg-gradient-to-tr from-purple-50/50 to-purple-50/50 hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0">
                    <LazyImage 
                      src={card.image} 
                      alt={card.birdName} 
                      width={
                        card.id === "eagle" ? 320 :
                        card.id === "peacock" ? 933 :
                        card.id === "owl" ? 320 : 384
                      }
                      height={
                        card.id === "eagle" ? 300 :
                        card.id === "peacock" ? 999 :
                        card.id === "owl" ? 300 : 408
                      }
                      objectCover={true}
                      className="w-full h-full pointer-events-none select-none"
                    />
                  </div>

                  {/* Clean Typography Label Below */}
                  <div className="flex flex-col items-center text-center">
                    <span className="text-sm sm:text-base font-black font-outfit text-dark-lavender tracking-tight">
                      {card.birdName}
                    </span>
                    <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase font-poppins opacity-90 ${card.textColor}`}>
                      {card.keyword}
                    </span>
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

export default PersonalitySection;
