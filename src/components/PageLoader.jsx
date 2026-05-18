import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-warm-cream/90 backdrop-blur-md">
      
      {/* Dynamic glowing background aura */}
      <div className="absolute w-64 h-64 rounded-full bg-purple-300/25 blur-3xl animate-pulse-soft pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 z-10">
        
        {/* Glowing Spinner Container */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          
          {/* Animated Spinner Ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-purple-100 border-t-purple-600"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />

          {/* Central Pulsing Brain Icon */}
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-purple-600"
          >
            <BrainCircuit className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Branding text */}
        <div className="text-center space-y-1">
          <h3 className="text-sm font-black text-dark-lavender tracking-[0.2em] uppercase font-poppins">
            Keyamind
          </h3>
          <span className="text-[9px] font-bold text-purple-500 uppercase tracking-widest block">
            Cognitive Diagnostics
          </span>
        </div>

      </div>
    </div>
  );
}
