import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  // Watch scrollY to toggle visibility (triggers state change ONLY when crossing 300px threshold)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeVisible = latest > 300;
    setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
  });

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Circular progress calculations
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  
  // Transform scrollYProgress (0 to 1) directly into strokeDashoffset (circumference to 0)
  // Bound to Style so it animates directly on the DOM, completely bypassing React reconciliation!
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-premium shadow-lg shadow-sakura-purple/30 hover:shadow-xl hover:shadow-lavender-purple/30 border border-white/50 focus:outline-none flex items-center justify-center cursor-pointer group"
          title="Scroll to Top"
        >
          {/* Circular Progress Path */}
          <svg className="absolute w-12 h-12 -rotate-90">
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-purple-100/50 fill-none"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-lavender-purple fill-none"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              transition={{ ease: 'easeOut' }}
            />
          </svg>

          {/* Arrow Icon with Hover animation */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            style={{ willChange: 'transform' }}
            className="text-dark-lavender group-hover:transform group-hover:-translate-y-1 transition-transform duration-300 z-10"
          >
            <ArrowUp size={18} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

