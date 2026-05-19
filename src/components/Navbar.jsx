import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logos/logo.webp';
import titleImage from '../assets/logos/title.webp';

/* ─── Link data ─────────────────────────────────────────────────────────── */
const subPages = [
  { name: "DMIT Assessment", to: "/dmit" },
  { name: "Parenting Guidance", to: "/parenting" },
  { name: "Career Counseling", to: "/career" },
  { name: "Knowledge Hub", to: "/blog" },
  { name: "FAQs & Support", to: "/faq" },
];

/* ─── Link data ─────────────────────────────────────────────────────────── */
const mainLinks = [
  { name: "Home",      to: "/", sectionId: "home"        },
  { name: "Services",  to: "/", sectionId: "our-services" },
  { name: "Reviews",   to: "/", sectionId: "testimonials" },
  { name: "About",     to: "/", sectionId: "about"        },
  { name: "Contact",   to: "/", sectionId: "contact"      },
];

const learnLinks = [
  { name: "Ikigai Concept",    to: "/", sectionId: "ikigai"                      },
  { name: "Brain Mapping",     to: "/", sectionId: "inherent-mapping"             },
  { name: "Fingerprint Story", to: "/", sectionId: "fingerprint-characteristics"  },
  { name: "Our Process",       to: "/", sectionId: "what-we-do"                  },
];

const scienceLinks = [
  { name: "Brain Balance",     to: "/", sectionId: "brain-balance"   },
  { name: "Brain Lobes",       to: "/", sectionId: "brain-lobes"     },
  { name: "Human Quotients",   to: "/", sectionId: "human-quotients" },
  { name: "Personality",       to: "/", sectionId: "personality"     },
  { name: "Learning Styles",   to: "/", sectionId: "learning-styles" },
];

/* ─── Animation variants ─────────────────────────────────────────────────── */
const drawerVariants = {
  hidden:  { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.045 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.34, ease: [0.4, 0, 0.2, 1], when: "afterChildren", staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, x: 24, transition: { duration: 0.22 } },
};

const labelVariants = {
  hidden:  { opacity: 0, y: 8  },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
  exit:    { opacity: 0, y: 8  },
};

const ctaVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: 20 },
};

/* ─── Helper: scroll to a section with Lenis + retry ─────────────────────── */
function scrollToSection(sectionId) {
  const tryScroll = (attempts = 0) => {
    // Check if any splash screens are currently active in DOM
    const isSplashActive = Array.from(document.querySelectorAll('*')).some(el => {
      const classes = el.className || '';
      return typeof classes === 'string' && (classes.includes('z-[999999]') || classes.includes('z-[9999999]'));
    });

    if (isSplashActive) {
      // Hold/reset attempts and try again in 100ms
      setTimeout(() => tryScroll(0), 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo("#" + sectionId, {
          offset: 0,
          duration: 1.35,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (attempts < 60) {
      setTimeout(() => tryScroll(attempts + 1), 50);
    }
  };
  tryScroll();
}

/* ─── Component ──────────────────────────────────────────────────────────── */
const Navbar = () => {
  const location = useLocation();
  const navigate  = useNavigate();

  const [menuOpen,    setMenuOpen]    = useState(false);
  const [learnOpen,   setLearnOpen]   = useState(false);
  const [scienceOpen, setScienceOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [hidden,      setHidden]      = useState(false);
  const [scrolled,    setScrolled]    = useState(false);

  const lastScrollY = useRef(0);

  /* ── 1. Headroom (hide on scroll-down, reveal on scroll-up / idle) ─── */
  useEffect(() => {
    let ticking       = false;
    let scrollTimeout = null;

    const onScroll = () => {
      const y = window.scrollY;

      if (y <= 60) {
        setHidden(prev => prev !== false ? false : prev);
        setScrolled(prev => prev !== false ? false : prev);
      } else {
        const diff = y - lastScrollY.current;
        if (Math.abs(diff) > 4) {
          const nextHidden = diff > 0;
          setHidden(prev => prev !== nextHidden ? nextHidden : prev);
        }
        setScrolled(prev => prev !== true ? true : prev);
      }
      lastScrollY.current = y;

      // Collapse dropdowns during scroll (RAF-deferred, guarded against redundant state changes)
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setLearnOpen(prev => prev ? false : prev);
          setScienceOpen(prev => prev ? false : prev);
          setDesktopMenuOpen(prev => prev ? false : prev);
          ticking = false;
        });
        ticking = true;
      }

      // Auto-reveal after idle
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setHidden(false), 800);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  /* ── 2. Hash-based navigation (handles page reload with hash) ─────── */
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    // Small delay so lazy sections can mount
    const t = setTimeout(() => scrollToSection(id), 80);
    return () => clearTimeout(t);
  }, [location.hash, location.pathname]);

  /* ── 3. Scroll lock when mobile menu is open ──────────────────────── */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow           = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow           = "";
      document.documentElement.style.overflow = "";
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow           = "";
      document.documentElement.style.overflow = "";
      if (window.lenis) window.lenis.start();
    };
  }, [menuOpen]);

  /* ── 4. Click-outside to close dropdowns ─────────────────────────── */
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".nav-dropdown-group") && !e.target.closest(".desktop-hamburger-group")) {
        setLearnOpen(false);
        setScienceOpen(false);
        setDesktopMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── handleNavClick ───────────────────────────────────────────────── */
  const handleNavClick = (e, link) => {
    e.preventDefault();

    // Close everything first
    setMenuOpen(false);
    setLearnOpen(false);
    setScienceOpen(false);
    setDesktopMenuOpen(false);

    // Release scroll lock immediately
    document.body.style.overflow           = "";
    document.documentElement.style.overflow = "";
    if (window.lenis) window.lenis.start();

    // Scroll locally to contact form if present on the current page
    if (link.sectionId === "contact" && document.getElementById("contact")) {
      setTimeout(() => scrollToSection("contact"), 280);
      return;
    }

    if (location.pathname !== link.to) {
      // Navigate to the route, hash-effect will scroll
      navigate(link.to + (link.sectionId ? "#" + link.sectionId : ""));
    } else {
      if (link.sectionId) {
        // Same page — scroll after drawer animation finishes
        setTimeout(() => scrollToSection(link.sectionId), 280);
      } else {
        // Same page, no section — scroll to top
        if (window.lenis) {
          window.lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  /* ── Derived ──────────────────────────────────────────────────────── */
  const navY = (hidden && !menuOpen) ? -130 : 0;

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          NAVBAR CAPSULE
          ═══════════════════════════════════════════════════════════════ */}
      <motion.nav
        style={{ willChange: "transform, opacity" }}
        initial={{ y: -110, x: "-50%", opacity: 0 }}
        animate={{ y: navY, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-4 left-1/2 w-[94%] max-w-[1280px] h-[66px]
          rounded-full px-4 sm:px-6 md:px-8
          flex items-center justify-between
          border border-white/50
          transition-all duration-500
          ${menuOpen   ? "z-[200]" : "z-[110]"}
          ${scrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.09)]"
            : "bg-white/60 backdrop-blur-md  shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
          }
        `}
      >
        {/* LOGO */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, mainLinks[0])}
          className="flex items-center shrink-0 gap-2 sm:gap-2.5 group"
        >
          <img
            src={logo}
            width={38}
            height={38}
            className="h-[30px] sm:h-[34px] md:h-[36px] w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] group-hover:scale-105 transition-transform duration-300"
            alt="Keyamind Logo"
          />
          <img
            src={titleImage}
            width={150} height={36}
            className="h-[32px] sm:h-[36px] md:h-[38px] w-auto object-contain"
            style={{ filter: "sepia(0.6) saturate(1.8) hue-rotate(320deg) brightness(0.3) contrast(1.1)" }}
            alt="Keyamind"
          />
        </a>

        {/* ── DESKTOP LINKS (≥ 1024 px) ─────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          <ul className="flex items-center gap-[18px] xl:gap-[22px] text-[10.5px] xl:text-[11px] font-black tracking-[0.15em] uppercase font-poppins text-dark-lavender">

            {/* Home */}
            <li>
              <a
                href="/"
                onClick={(e) => handleNavClick(e, mainLinks[0])}
                className="hover:text-purple-600 transition-colors duration-200 py-2"
              >
                Home
              </a>
            </li>

            {/* Learn dropdown */}
            <li
              className="relative nav-dropdown-group"
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button
                aria-expanded={learnOpen}
                aria-haspopup="true"
                aria-controls="learn-dropdown-menu"
                aria-label="Toggle Learn and Explore Dropdown"
                className="flex items-center gap-1 hover:text-purple-600 transition-colors duration-200 cursor-pointer py-2 uppercase font-black focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:outline-none rounded-lg font-poppins"
              >
                <span>Learn</span>
                <svg 
                  className={`w-2.5 h-2.5 transition-transform duration-200 shrink-0 opacity-80 ${learnOpen ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <AnimatePresence>
                {learnOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-52"
                  >
                    <div 
                      id="learn-dropdown-menu"
                      role="menu"
                      className="bg-white/95 backdrop-blur-md border border-purple-50 rounded-2xl p-2 shadow-xl"
                    >
                      {learnLinks.map((link) => (
                        <a
                          key={link.name}
                          href="/"
                          role="menuitem"
                          onClick={(e) => handleNavClick(e, link)}
                          className="block px-4 py-2.5 rounded-xl text-[10px] hover:bg-purple-50 hover:text-purple-600 transition-all uppercase tracking-wider font-black focus-visible:bg-purple-50 focus-visible:text-purple-600 focus-visible:outline-none"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Science dropdown */}
            <li
              className="relative nav-dropdown-group"
              onMouseEnter={() => setScienceOpen(true)}
              onMouseLeave={() => setScienceOpen(false)}
            >
              <button
                aria-expanded={scienceOpen}
                aria-haspopup="true"
                aria-controls="science-dropdown-menu"
                aria-label="Toggle Science of DMIT Dropdown"
                className="flex items-center gap-1 hover:text-purple-600 transition-colors duration-200 cursor-pointer py-2 uppercase font-black focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:outline-none rounded-lg font-poppins"
              >
                <span>Science</span>
                <svg 
                  className={`w-2.5 h-2.5 transition-transform duration-200 shrink-0 opacity-80 ${scienceOpen ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <AnimatePresence>
                {scienceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-52"
                  >
                    <div 
                      id="science-dropdown-menu"
                      role="menu"
                      className="bg-white/95 backdrop-blur-md border border-purple-50 rounded-2xl p-2 shadow-xl"
                    >
                      {scienceLinks.map((link) => (
                        <a
                          key={link.name}
                          href="/"
                          role="menuitem"
                          onClick={(e) => handleNavClick(e, link)}
                          className="block px-4 py-2.5 rounded-xl text-[10px] hover:bg-purple-50 hover:text-purple-600 transition-all uppercase tracking-wider font-black focus-visible:bg-purple-50 focus-visible:text-purple-600 focus-visible:outline-none"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Remaining main links */}
            {mainLinks.slice(1).map((link) => (
              <li key={link.name}>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, link)}
                  className="hover:text-purple-600 transition-colors duration-200 py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.05, y: -1, boxShadow: "0 12px 24px rgba(59,46,94,0.18)" }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => handleNavClick(e, { sectionId: "contact", to: "/" })}
            className="ml-2 px-5 xl:px-6 py-2.5 rounded-full bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white text-[9.5px] xl:text-[10px] font-black uppercase tracking-[0.2em] shadow-md shadow-purple-500/15 transition-all duration-300 font-poppins cursor-pointer whitespace-nowrap"
          >
            Get Started
          </motion.button>

          {/* Desktop Hamburger Stack */}
          <div className="relative desktop-hamburger-group flex items-center">
            <button
              type="button"
              aria-expanded={desktopMenuOpen}
              aria-label={desktopMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setDesktopMenuOpen((v) => !v)}
              className="flex flex-col justify-center gap-[5px] p-2.5 ml-1 rounded-full border border-purple-100 bg-purple-50/50 hover:bg-purple-100/70 transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              <motion.span
                animate={desktopMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5.5 h-[2px] rounded-full bg-dark-lavender origin-center"
              />
              <motion.span
                animate={desktopMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5.5 h-[2px] rounded-full bg-dark-lavender"
              />
              <motion.span
                animate={desktopMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5.5 h-[2px] rounded-full bg-dark-lavender origin-center"
              />
            </button>

            {/* Desktop Dropdown / Popover */}
            <AnimatePresence>
              {desktopMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-md border border-purple-100 rounded-3xl p-3 shadow-[0_20px_50px_rgba(139,92,246,0.12)] z-[150]"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-purple-600/70 px-4 py-2 border-b border-purple-50">
                      Primary Pages
                    </p>
                    
                    {subPages.map((page) => (
                      <a
                        key={page.name}
                        href={page.to}
                        onClick={(e) => {
                          e.preventDefault();
                          setDesktopMenuOpen(false);
                          navigate(page.to);
                        }}
                        className="flex items-center justify-between px-4 py-3 rounded-2xl text-[10.5px] font-black uppercase tracking-wider text-dark-lavender hover:bg-purple-50/80 hover:text-purple-600 transition-all duration-300"
                      >
                        <span>{page.name}</span>
                        <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE HAMBURGER (< 1024 px) ──────────────────────────── */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-[5px] p-3 rounded-xl transition-colors duration-200 hover:bg-purple-50/60 focus:outline-none"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block w-6 h-[2px] rounded-full bg-dark-lavender origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[2px] rounded-full bg-dark-lavender"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block w-6 h-[2px] rounded-full bg-dark-lavender origin-center"
          />
        </button>
      </motion.nav>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE FULL-SCREEN DRAWER (sibling — outside transform stacking)
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-[190] flex flex-col overflow-y-auto bg-white/96 backdrop-blur-md"
            data-lenis-prevent="true"
          >
            {/* Top padding to clear the navbar capsule */}
            <div className="pt-[88px] px-7 sm:px-10 pb-10 flex flex-col flex-1">

              {/* ── Section label: Navigation ── */}
              <motion.p variants={labelVariants} className="text-[9px] tracking-[0.45em] uppercase font-black mb-5 border-l-[3px] border-purple-500 pl-3 text-purple-500/80">
                Navigation
              </motion.p>

              {/* ── Main links ── */}
              <nav className="flex flex-col gap-2 mb-9">
                {mainLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-[22px] font-black tracking-tight uppercase text-dark-lavender hover:text-purple-600 transition-colors duration-200 py-1.5"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Divider */}
              <motion.div variants={labelVariants} className="h-px bg-purple-100 mb-7" />

              {/* ── Section label: Subpages ── */}
              <motion.p variants={labelVariants} className="text-[9px] tracking-[0.45em] uppercase font-black mb-4 border-l-[3px] border-purple-500 pl-3 text-purple-500/80">
                Primary Pages
              </motion.p>

              {/* ── Subpages Links ── */}
              <div className="flex flex-col gap-2.5 mb-7">
                {subPages.map((page) => (
                  <motion.a
                    key={page.name}
                    variants={itemVariants}
                    href={page.to}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      navigate(page.to);
                    }}
                    className="text-base font-black tracking-tight uppercase text-dark-lavender hover:text-purple-600 transition-colors duration-200 py-1"
                  >
                    {page.name}
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <motion.div variants={labelVariants} className="h-px bg-purple-100 mb-7" />

              {/* ── Section label: Learn ── */}
              <motion.p variants={labelVariants} className="text-[9px] tracking-[0.45em] uppercase font-black mb-4 border-l-[3px] border-purple-400/60 pl-3 text-purple-500/70">
                Learn & Explore
              </motion.p>

              {/* ── Learn links ── */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {learnLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-xs font-black tracking-wide uppercase text-dark-lavender/65 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* ── Section label: Science ── */}
              <motion.p variants={labelVariants} className="text-[9px] tracking-[0.45em] uppercase font-black mb-4 border-l-[3px] border-purple-400/60 pl-3 text-purple-500/70">
                Science of DMIT
              </motion.p>

              {/* ── Science links ── */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {scienceLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-xs font-black tracking-wide uppercase text-dark-lavender/65 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* ── CTA ── */}
              <motion.button
                variants={ctaVariants}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => handleNavClick(e, { sectionId: "contact", to: "/" })}
                className="mt-auto w-full py-4 rounded-2xl bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 text-white text-[11px] font-black uppercase tracking-[0.22em] shadow-xl shadow-purple-900/12 cursor-pointer"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
