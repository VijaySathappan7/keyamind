import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global Premium Smooth Scroll wrapper utilizing the highly optimized Lenis scroll engine.
 * Intercepts desktop/laptop mouse and touchpad scroll events to deliver a luxurious,
 * organic momentum scrolling feel while letting mobile touch devices remain native and responsive.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Only initialize smooth scrolling on client-side
    if (typeof window === "undefined") return;

    // Initialize Lenis with elite performance configurations
    const lenis = new Lenis({
      duration: 1.1, // Perfect duration for buttery smooth deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Organic Exponential Out curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      // Keep native touch momentum on touch screen mobile/tablets to avoid input lag and overscroll glitches
      smoothTouch: false, 
      wheelMultiplier: 1.05, // Slightly responsive speedup
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Expose lenis instance globally with dynamic 10% screen-height offset interception
    const originalScrollTo = lenis.scrollTo.bind(lenis);
    lenis.scrollTo = (target, options = {}) => {
      if (options && (options.offset === -96 || options.offset === -80)) {
        options.offset = -Math.round(window.innerHeight * 0.10);
      }
      return originalScrollTo(target, options);
    };

    window.lenis = lenis;

    // High performance RAF tick loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // High-performance ResizeObserver to handle page transitions, lazy sections and accordion expansions
    let resizeRafId;
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(resizeRafId);
      resizeRafId = requestAnimationFrame(() => {
        lenis.resize();
      });
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    // Clean up connections on unmount to prevent memory leaks
    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(resizeRafId);
      resizeObserver.disconnect();
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}
