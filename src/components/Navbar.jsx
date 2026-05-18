import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logos/logosquare.webp';
import titleImage from '../assets/logos/title.webp';

const mainLinks = [
  { name: "Home", to: "/", sectionId: "home" },
  { name: "Services", to: "/", sectionId: "our-services" },
  { name: "Reviews", to: "/", sectionId: "testimonials" },
  { name: "Expertise", to: "/", sectionId: "expertise" },
  { name: "About", to: "/", sectionId: "about" }
];

const learnLinks = [
  { name: "Ikigai Concept", to: "/", sectionId: "ikigai" },
  { name: "Brain Mapping", to: "/", sectionId: "inherent-mapping" },
  { name: "Fingerprint Story", to: "/", sectionId: "fingerprint-characteristics" },
  { name: "Our Process", to: "/", sectionId: "what-we-do" }
];

const scienceLinks = [
  { name: "Brain Balance", to: "/", sectionId: "brain-balance" },
  { name: "Brain Lobes", to: "/", sectionId: "brain-lobes" },
  { name: "Human Quotients", to: "/", sectionId: "human-quotients" },
  { name: "Personality Profile", to: "/", sectionId: "personality" },
  { name: "Learning Styles", to: "/", sectionId: "learning-styles" }
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [scienceOpen, setScienceOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // SCROLL SENSING
  useEffect(() => {
    let ticking = false;
    let scrollTimeout = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 50) {
        setHidden(false);
      } else {
        const diff = currentScrollY - lastScrollY.current;
        if (Math.abs(diff) > 5) {
          setHidden(diff > 0);
        }
      }
      lastScrollY.current = currentScrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setLearnOpen(false);
          setScienceOpen(false);
          ticking = false;
        });
        ticking = true;
      }

      // Show navbar automatically after scrolling stops
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        setHidden(false);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Reactive helper to handle smooth section reveals for lazy-loaded modules on route/hash update
  useEffect(() => {
    if (location.hash && window.lenis) {
      const targetId = location.hash;
      let attempts = 0;
      
      // Polling interval to wait for lazy Suspense boundaries to hydrate and mount
      const interval = setInterval(() => {
        const element = document.querySelector(targetId);
        attempts++;
        
        if (element) {
          clearInterval(interval);
          // Small delay to let rendering stabilize
          setTimeout(() => {
            window.lenis?.scrollTo(targetId, {
              offset: -80, // Offset for top sticky navbar
              duration: 1.4,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          }, 60);
        } else if (attempts > 30) {
          // Timeout after 1.5 seconds if target not found
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [location.hash, location.pathname]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    setLearnOpen(false);
    setScienceOpen(false);

    const element = document.getElementById(link.sectionId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo('#' + link.sectionId, {
          offset: -80, // Sync perfectly with sticky navbar height
          duration: 1.3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.to + '#' + link.sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ 
        y: hidden ? -120 : 0, 
        x: "-50%",
        opacity: 1 
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-[100] top-4 left-1/2 w-[94%] max-w-[1280px] h-[58px] rounded-full px-4 sm:px-6 md:px-8 border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center justify-between"
    >
      {/* LOGO */}
      <a href="/" onClick={(e) => handleNavClick(e, mainLinks[0])} className="flex items-center gap-2 sm:gap-3.5 shrink-0 animate-fade-in">
        <img src={logo} width={38} height={38} className="w-[38px] h-[38px] sm:w-9 sm:h-9 object-contain" alt="Logo" />
        <img 
          src={titleImage} 
          width={130}
          height={32}
          className="h-[29px] sm:h-[32px] w-auto object-contain" 
          style={{ filter: "sepia(0.6) saturate(1.8) hue-rotate(320deg) brightness(0.3) contrast(1.1)" }}
          alt="Keyamind" 
        />
      </a>

      {/* DESKTOP LINKS */}
      <div className="hidden xl:flex items-center gap-8">
        <ul className="flex items-center gap-6 xl:gap-8 text-[11px] font-black tracking-[0.15em] uppercase font-poppins">
          <li>
            <a href="/" onClick={(e) => handleNavClick(e, mainLinks[0])} className="hover:text-purple-600 transition-colors">Home</a>
          </li>

          {/* Learn Dropdown */}
          <li className="relative group" onMouseEnter={() => setLearnOpen(true)} onMouseLeave={() => setLearnOpen(false)}>
            <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors uppercase font-black cursor-pointer">
              <span>Learn</span>
              <svg className={`w-3 h-3 transition-transform duration-300 ${learnOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {learnOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56"
                >
                  <div className="bg-white/95 backdrop-blur-xl border border-purple-50 rounded-2xl p-2 shadow-2xl">
                    {learnLinks.map((link) => (
                      <a key={link.name} href="/" onClick={(e) => handleNavClick(e, link)} className="block px-4 py-2.5 rounded-xl text-[10px] hover:bg-purple-50 hover:text-purple-600 transition-all uppercase tracking-wider">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Science Dropdown */}
          <li className="relative group" onMouseEnter={() => setScienceOpen(true)} onMouseLeave={() => setScienceOpen(false)}>
            <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors uppercase font-black cursor-pointer">
              <span>Science</span>
              <svg className={`w-3 h-3 transition-transform duration-300 ${scienceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {scienceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56"
                >
                  <div className="bg-white/95 backdrop-blur-xl border border-purple-50 rounded-2xl p-2 shadow-2xl">
                    {scienceLinks.map((link) => (
                      <a key={link.name} href="/" onClick={(e) => handleNavClick(e, link)} className="block px-4 py-2.5 rounded-xl text-[10px] hover:bg-purple-50 hover:text-purple-600 transition-all uppercase tracking-wider">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Direct Links */}
          {mainLinks.slice(1).map((link) => (
            <li key={link.name}>
              <a href="/" onClick={(e) => handleNavClick(e, link)} className="hover:text-purple-600 transition-colors">{link.name}</a>
            </li>
          ))}
        </ul>

        <motion.button 
          whileHover={{ scale: 1.04, y: -1, boxShadow: "0 10px 20px rgba(59,46,94,0.15)" }}
          whileTap={{ scale: 0.96 }}
          onClick={(e) => handleNavClick(e, { sectionId: "contact", to: "/" })}
          className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-md shadow-purple-500/10 transition-all duration-300 font-poppins cursor-pointer"
        >
          Get Started
        </motion.button>
      </div>

      {/* MOBILE TRIGGER */}
      <button 
        aria-label="Toggle Menu"
        className="xl:hidden w-11 h-11 flex items-center justify-center text-dark-lavender cursor-pointer rounded-full hover:bg-purple-50/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-0 right-0 bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-purple-50 flex flex-col gap-3 xl:hidden max-h-[78vh] overflow-y-auto"
          >
            {mainLinks.map((link) => (
              <a 
                key={link.name} 
                href="/" 
                onClick={(e) => handleNavClick(e, link)} 
                className="py-2 px-3 block rounded-xl hover:bg-purple-50/50 text-sm font-bold text-dark-lavender hover:text-purple-600 uppercase tracking-widest transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-purple-100/60 my-1" />
            <div className="grid grid-cols-2 gap-4 px-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-1.5">Learn</span>
                {learnLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href="/" 
                    onClick={(e) => handleNavClick(e, link)} 
                    className="py-1.5 block text-xs text-dark-lavender/70 hover:text-purple-600 font-bold uppercase tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-1.5">Science</span>
                {scienceLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href="/" 
                    onClick={(e) => handleNavClick(e, link)} 
                    className="py-1.5 block text-xs text-dark-lavender/70 hover:text-purple-600 font-bold uppercase tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <button 
              onClick={(e) => handleNavClick(e, { sectionId: "contact", to: "/" })}
              className="mt-3 w-full py-3.5 rounded-2xl bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white text-[11px] font-black uppercase tracking-widest shadow-md shadow-purple-900/10 cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
