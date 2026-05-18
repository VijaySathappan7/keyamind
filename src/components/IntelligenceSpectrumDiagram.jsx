import { memo } from "react";
import { motion } from "framer-motion";

const IntelligenceSpectrumDiagram = memo(() => {
  // Pathway line transition details for smooth pulsing energy dashes
  const pathTransition = {
    strokeDashoffset: {
      animate: [-40, 0],
      transition: {
        duration: 2.2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Gentle floating/hovering animation variants for each node
  const floatVariants = (delay) => ({
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-2 sm:p-4">
      {/* ── Outer Cinematic Glow Backgrounds ── */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 blur-[80px] pointer-events-none -z-10 animate-pulse-soft" />

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full overflow-visible select-none drop-shadow-[0_20px_50px_rgba(59,46,94,0.08)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Gradient for central core */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CDBDFF" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>

          {/* Radial Gradients for Quotient Nodes (Replaces expensive pixel blur filters) */}
          <radialGradient id="neonGlowPurple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neonGlowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neonGlowBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neonGlowOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── PULSING NEURAL PATHWAYS (Connecting Central Core to Quotient Nodes) ── */}
        <g strokeWidth="2.5" strokeLinecap="round" opacity="0.85" style={{ willChange: "transform, opacity" }}>
          {/* IQ Pathway (Top-Left) */}
          <line x1="250" y1="250" x2="120" y2="120" stroke="#06B6D4" strokeDasharray="8 8" className="opacity-45" />
          <motion.line
            x1="250" y1="250" x2="120" y2="120"
            stroke="#22D3EE" strokeDasharray="6 12"
            animate={{ strokeDashoffset: pathTransition.strokeDashoffset.animate }}
            transition={pathTransition.strokeDashoffset.transition}
          />

          {/* EQ Pathway (Top-Right) */}
          <line x1="250" y1="250" x2="380" y2="120" stroke="#3B82F6" strokeDasharray="8 8" className="opacity-45" />
          <motion.line
            x1="250" y1="250" x2="380" y2="120"
            stroke="#60A5FA" strokeDasharray="6 12"
            animate={{ strokeDashoffset: pathTransition.strokeDashoffset.animate }}
            transition={pathTransition.strokeDashoffset.transition}
          />

          {/* CQ Pathway (Bottom-Left) */}
          <line x1="250" y1="250" x2="120" y2="380" stroke="#F59E0B" strokeDasharray="8 8" className="opacity-45" />
          <motion.line
            x1="250" y1="250" x2="120" y2="380"
            stroke="#FBBF24" strokeDasharray="6 12"
            animate={{ strokeDashoffset: pathTransition.strokeDashoffset.animate }}
            transition={pathTransition.strokeDashoffset.transition}
          />

          {/* AQ Pathway (Bottom-Right) */}
          <line x1="250" y1="250" x2="380" y2="380" stroke="#8B5CF6" strokeDasharray="8 8" className="opacity-45" />
          <motion.line
            x1="250" y1="250" x2="380" y2="380"
            stroke="#A78BFA" strokeDasharray="6 12"
            animate={{ strokeDashoffset: pathTransition.strokeDashoffset.animate }}
            transition={pathTransition.strokeDashoffset.transition}
          />
        </g>

        {/* ── CENTRAL GLOWING CORE (The Integrated Mind) ── */}
        <g transform="translate(250, 250)" style={{ willChange: "transform" }}>
          {/* Ambient Radial Core Backing */}
          <circle cx="0" cy="0" r="85" fill="url(#centerGlow)" />

          {/* Rotating Outer Tech Dotted Ring */}
          <motion.circle
            cx="0" cy="0" r="54"
            fill="none"
            stroke="#A78BFA"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            opacity="0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Pulsing Solid Orbit Ring */}
          <motion.circle
            cx="0" cy="0" r="42"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="1"
            opacity="0.3"
            animate={{ scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main Mind Sphere Core */}
          <circle
            cx="0" cy="0" r="32"
            fill="rgba(255, 255, 255, 0.85)"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            className="drop-shadow-[0_4px_12px_rgba(139,92,246,0.3)]"
          />

          {/* Core Symbol (Glowing Brain Node representation) */}
          <circle cx="0" cy="0" r="14" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
        </g>

        {/* ── FOUR COMPREHENSIVE QUOTIENT NODES (Perfect Spelling & Aesthetics) ── */}

        {/* 1. IQ Node (Top-Left) */}
        <motion.g
          variants={floatVariants(0)}
          animate="animate"
          className="cursor-pointer group"
          style={{ willChange: "transform" }}
        >
          {/* Ambient Glow (High-performance Radial Gradient) */}
          <circle cx="120" cy="120" r="54" fill="url(#neonGlowCyan)" />
          
          {/* Main Glass Circle */}
          <circle
            cx="120" cy="120" r="40"
            fill="rgba(255, 255, 255, 0.8)"
            stroke="#22D3EE"
            strokeWidth="2.5"
            className="group-hover:fill-cyan-50/90 transition-all duration-300 drop-shadow-[0_8px_20px_rgba(6,182,212,0.15)]"
          />

          {/* Quotient Text label */}
          <text
            x="120" y="128"
            textAnchor="middle"
            fill="#0891B2"
            fontFamily="Outfit, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="-0.5"
          >
            IQ
          </text>

          {/* Title description underneath node */}
          <text
            x="120" y="185"
            textAnchor="middle"
            fill="#3B2E5E"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="12.5"
            letterSpacing="0.5"
          >
            INTELLIGENCE
          </text>
          <text
            x="120" y="201"
            textAnchor="middle"
            fill="#8B5CF6"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="10"
            letterSpacing="1.2"
            opacity="0.8"
          >
            QUOTIENT
          </text>
        </motion.g>

        {/* 2. EQ Node (Top-Right) */}
        <motion.g
          variants={floatVariants(0.6)}
          animate="animate"
          className="cursor-pointer group"
          style={{ willChange: "transform" }}
        >
          {/* Ambient Glow (High-performance Radial Gradient) */}
          <circle cx="380" cy="120" r="54" fill="url(#neonGlowBlue)" />

          {/* Main Glass Circle */}
          <circle
            cx="380" cy="120" r="40"
            fill="rgba(255, 255, 255, 0.8)"
            stroke="#3B82F6"
            strokeWidth="2.5"
            className="group-hover:fill-blue-50/90 transition-all duration-300 drop-shadow-[0_8px_20px_rgba(59,130,246,0.15)]"
          />

          {/* Quotient Text label */}
          <text
            x="380" y="128"
            textAnchor="middle"
            fill="#1D4ED8"
            fontFamily="Outfit, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="-0.5"
          >
            EQ
          </text>

          {/* Title description underneath node */}
          <text
            x="380" y="185"
            textAnchor="middle"
            fill="#3B2E5E"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="12.5"
            letterSpacing="0.5"
          >
            EMOTIONAL
          </text>
          <text
            x="380" y="201"
            textAnchor="middle"
            fill="#8B5CF6"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="10"
            letterSpacing="1.2"
            opacity="0.8"
          >
            QUOTIENT
          </text>
        </motion.g>

        {/* 3. CQ Node (Bottom-Left) */}
        <motion.g
          variants={floatVariants(1.2)}
          animate="animate"
          className="cursor-pointer group"
          style={{ willChange: "transform" }}
        >
          {/* Ambient Glow (High-performance Radial Gradient) */}
          <circle cx="120" cy="380" r="54" fill="url(#neonGlowOrange)" />

          {/* Main Glass Circle */}
          <circle
            cx="120" cy="380" r="40"
            fill="rgba(255, 255, 255, 0.8)"
            stroke="#F59E0B"
            strokeWidth="2.5"
            className="group-hover:fill-amber-50/90 transition-all duration-300 drop-shadow-[0_8px_20px_rgba(245,158,11,0.15)]"
          />

          {/* Quotient Text label */}
          <text
            x="120" y="388"
            textAnchor="middle"
            fill="#B45309"
            fontFamily="Outfit, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="-0.5"
          >
            CQ
          </text>

          {/* Title description underneath node */}
          <text
            x="120" y="445"
            textAnchor="middle"
            fill="#3B2E5E"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="12.5"
            letterSpacing="0.5"
          >
            CREATIVITY
          </text>
          <text
            x="120" y="461"
            textAnchor="middle"
            fill="#8B5CF6"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="10"
            letterSpacing="1.2"
            opacity="0.8"
          >
            QUOTIENT
          </text>
        </motion.g>

        {/* 4. AQ Node (Bottom-Right) */}
        <motion.g
          variants={floatVariants(1.8)}
          animate="animate"
          className="cursor-pointer group"
          style={{ willChange: "transform" }}
        >
          {/* Ambient Glow (High-performance Radial Gradient) */}
          <circle cx="380" cy="380" r="54" fill="url(#neonGlowPurple)" />

          {/* Main Glass Circle */}
          <circle
            cx="380" cy="380" r="40"
            fill="rgba(255, 255, 255, 0.8)"
            stroke="#8B5CF6"
            strokeWidth="2.5"
            className="group-hover:fill-purple-50/90 transition-all duration-300 drop-shadow-[0_8px_20px_rgba(139,92,246,0.15)]"
          />

          {/* Quotient Text label */}
          <text
            x="380" y="388"
            textAnchor="middle"
            fill="#6D28D9"
            fontFamily="Outfit, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="-0.5"
          >
            AQ
          </text>

          {/* Title description underneath node */}
          <text
            x="380" y="445"
            textAnchor="middle"
            fill="#3B2E5E"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="12.5"
            letterSpacing="0.5"
          >
            ADVERSITY
          </text>
          <text
            x="380" y="461"
            textAnchor="middle"
            fill="#8B5CF6"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="10"
            letterSpacing="1.2"
            opacity="0.8"
          >
            QUOTIENT
          </text>
        </motion.g>
      </svg>
    </div>
  );
});

IntelligenceSpectrumDiagram.displayName = "IntelligenceSpectrumDiagram";
export default IntelligenceSpectrumDiagram;
