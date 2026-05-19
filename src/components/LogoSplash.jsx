import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/logo.webp";

export default function LogoSplash({ onComplete }) {
  const [mounted, setMounted] = useState(true);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExit(true);
      const exitTimer = setTimeout(() => {
        setMounted(false);
        onComplete?.();
      }, 500);
      return () => clearTimeout(exitTimer);
    }, 1000); // Crisp 1.0 second visible transition
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="logosplash"
        className="fixed inset-0 z-[999999] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-none bg-white"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isExit ? 0 : 1,
          scale: isExit ? 1.02 : 1
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        {/* Subtle Ambient light */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-200/10 blur-[100px]" />
        </div>

        {/* Circular Spinner & Logo Container */}
        <div className="relative flex items-center justify-center w-72 h-72">

          {/* SVG Circular Loader Ring */}
          <svg className="absolute w-56 h-56 animate-spin" viewBox="0 0 100 100" style={{ animationDuration: "1.2s" }}>
            <defs>
              <linearGradient id="spinner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="url(#spinner-grad)"
              strokeWidth="4.5"
              fill="transparent"
              strokeDasharray="160 100"
              strokeLinecap="round"
            />
          </svg>

          {/* Centered Corporate Logo */}
          <motion.img
            src={logo}
            alt="KeyAmind Logo"
            draggable={false}
            className="w-24 h-24 object-contain relative z-10"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          />

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
