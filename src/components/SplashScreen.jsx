import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/logo.webp";
import titleImg from "../assets/logos/title.webp";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Phases: intro → show → split → merge → exit
export default function SplashScreen({ onComplete }) {
  const [phase, setPhase]           = useState("intro");
  const [deviceWidth, setDeviceWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [deviceHeight, setDeviceHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 768
  );
  const [mounted, setMounted] = useState(true);
  const started = useRef(false);

  // Debounced Resize tracker for high-performance layout safety
  useEffect(() => {
    let timeoutId = null;
    const fn = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
      }, 100);
    };
    window.addEventListener("resize", fn, { passive: true });
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", fn);
    };
  }, []);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Sequence
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    (async () => {
      await wait(800);
      setPhase("show");    // logo reveals
      await wait(1000);
      setPhase("split");   // logo left, title wipes in
      await wait(3000);
      setPhase("merge");   // title wipes out, logo centers
      await wait(1200);
      setPhase("exit");    // whole splash fades
      await wait(750);
      setMounted(false);
      onComplete?.();
    })();
  }, [onComplete]);

  // Centering math: (logo + gap + title) perfectly centered
  const { logoX, titleX, lw, tw, th } = (() => {
    let lw, tw, gap;
    const isMobileSize = deviceWidth < 500 || deviceHeight < 500;
    const isTabletSize = (deviceWidth >= 500 && deviceWidth < 768) || (deviceHeight >= 500 && deviceHeight < 680);
    
    if (isMobileSize) {
      lw = 82; tw = 130; gap = 6;
    } else if (isTabletSize) {
      lw = 110; tw = 220; gap = 32;
    } else if (deviceWidth < 1024) {
      lw = 135; tw = 270; gap = 40;
    } else {
      lw = 155; tw = 310; gap = 48;
    }
    const th = Math.round(tw * 0.3125);
    return { 
      logoX: (gap + tw) / 2, 
      titleX: (gap + lw) / 2,
      lw,
      tw,
      th
    };
  })();

  const isSplit = phase === "split";
  const isMerge = phase === "merge";
  const isExit  = phase === "exit";
  const isIntro = phase === "intro";

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden select-none pointer-events-none"
        style={{ 
          background: "radial-gradient(ellipse at 60% 40%, #f0eeff 0%, #faf9f6 55%, #fff4f9 100%)",
          willChange: "transform, opacity"
        }}
        animate={{ 
          opacity: isExit ? 0 : 1, 
          scale: isExit ? 1.08 : 1 
        }}
        transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-300/15 blur-[160px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-300/15 blur-[160px]" />
        </div>

        {/* Stage */}
        <div className="relative flex items-center justify-center">

          {/* ── TITLE ──────────────────────────────────────────────────────
              Tucked behind logo's split coordinate initially.
              Slideward motion to titleX & full clip wipe triggers emerging.
              Slideward motion inward to -logoX & left-to-right clip-path wipe (inset(0 0% 0 100%)) 
              makes the title disappear starting exactly from the left edge touching the logo. */}
          <motion.img
            src={titleImg}
            alt="KeyAmind Solutions"
            draggable={false}
            className="
              absolute z-10 object-contain
              pointer-events-none select-none will-change-transform
              max-w-none
            "
            style={{ width: `${tw}px`, height: `${th}px` }}
            initial={{ x: -logoX, clipPath: "inset(0 0% 0 100%)", opacity: 0 }}
            animate={{
              x: isSplit ? titleX : (isMerge || isExit) ? -logoX + 25 : -logoX,
              clipPath: isSplit
                ? "inset(0 0% 0 0%)"        // fully visible
                : "inset(0 0% 0 100%)",     // hidden
              opacity: isSplit ? 1 : 0,
            }}
            transition={{
              x: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              clipPath: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.8, ease: "easeInOut" },
            }}
          />

          {/* ── LOGO ───────────────────────────────────────────────────────
              Handles all movement. Reveals from blur on intro→show.
              Slides left on split, returns on merge. */}
          <motion.img
            src={logo}
            alt="KeyAmind Logo"
            draggable={false}
            className="
              relative z-20 object-contain
              pointer-events-none select-none will-change-transform
            "
            style={{ width: `${lw}px`, height: `${lw}px` }}
            initial={{ opacity: 0, scale: 0.42, filter: "blur(22px)", x: 0 }}
            animate={{
              opacity: 1,
              scale:   isIntro ? 0.42 : 1,
              filter:  isIntro ? "blur(22px)" : "blur(0px)",
              x:       isSplit ? -logoX : 0,
            }}
            transition={{
              // Reveal: slow, silky
              opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
              scale:   { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
              filter:  { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              // Movement: snappier spring-like
              x: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
            }}
          />
        </div>

        {/* Progress bar */}
        <motion.div
          className="
            absolute bottom-10 left-1/2 -translate-x-1/2
            w-36 sm:w-48 h-[2px] overflow-hidden rounded-full
            bg-purple-200/50
          "
          animate={{ opacity: isSplit ? 1 : isMerge ? 0.35 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: (isSplit || isMerge || isExit) ? 1 : 0 }}
            transition={{ duration: 2.8, ease: [0.4, 0, 0.6, 1] }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}