import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, ArrowRight } from 'lucide-react';
import logo from '../assets/logos/logo.webp';
import titleImg from '../assets/logos/title.webp';
import ContactSection from './ContactSection';

const footerNavLinks = [
  { name: "Home", to: "/", sectionId: "home" },
  { name: "Services", to: "/", sectionId: "our-services" },
  { name: "Reviews", to: "/", sectionId: "testimonials" },
  { name: "Expertise", to: "/", sectionId: "expertise" },
  { name: "About Us", to: "/", sectionId: "about" },
  { name: "Contact", to: "/", sectionId: "contact" }
];

const scienceLinks = [
  { name: "Ikigai & Mapping", to: "/", sectionId: "ikigai" },
  { name: "Fingerprint Story", to: "/", sectionId: "fingerprint-characteristics" },
  { name: "Brain Balance", to: "/", sectionId: "brain-balance" },
  { name: "Human Quotients", to: "/", sectionId: "human-quotients" },
  { name: "Personality & Styles", to: "/", sectionId: "personality" }
];

export default function ContentSection() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const legalLinks = [
    { name: "Privacy Policy", id: "privacy" },
    { name: "Terms of Engagement", id: "terms" },
    { name: "Cookie Policy", id: "cookie" },
    { name: "Disclaimers", id: "disclaimers" }
  ];

  const legalContent = {
    privacy: {
      title: "Privacy & Confidentiality Policy",
      subtitle: "Data Protection Framework under the DPDP Act, 2023",
      sizeClass: "max-w-4xl w-[95vw] lg:w-full h-[85vh] md:h-[80vh]",
      sections: [
        {
          heading: "1. Information Collection Architecture",
          content: "As a premier neuroscience and DMIT growth advisory firm, we collect personal and developmental data strictly for the evaluation of cognitive mapping and counseling mandates. This includes biometric fingerprint ridge patterns, developmental history, and learning contour preferences provided voluntarily during exploratory consultations or digital communications."
        },
        {
          heading: "2. Non-Transactional Web Environment",
          content: "This digital portal does not harvest transactional data, credit card metadata, or banking credentials. We do not employ automated payment gateways. Web telemetry is restricted to basic session analytics without individual profiling."
        },
        {
          heading: "3. Confidentiality & Non-Disclosure",
          content: "All client information, biological reports, dermatoglyphic analyses, and personal guidance frameworks are treated under the strictest doctrines of medical and professional confidentiality. We do not sell, lease, or syndicate client data to third-party marketing entities under any circumstances."
        },
        {
          heading: "4. Statutory Disclosures",
          content: "Information may only be disclosed to third parties if legally subpoenaed by statutory authorities under binding laws of the Republic of India."
        },
        {
          heading: "5. Data Retention & Erasure",
          content: "We retain exploratory analysis data only for the duration necessary to formulate personalized growth recommendations. Upon explicit request, data is securely purged in compliance with applicable digital personal data protection frameworks."
        },
        {
          heading: "6. Grievance Redressal Mechanism",
          content: "For any concerns regarding data handling or confidentiality, clients may direct communications to our designated Grievance Redressal Officer at contact@keyamind.com."
        }
      ]
    },
    terms: {
      title: "Terms of Engagement",
      subtitle: "Governing Framework for DMIT & Strategic Career Counseling Mandates",
      sizeClass: "max-w-5xl w-[95vw] lg:w-full h-[85vh] md:h-[80vh]",
      sections: [
        {
          heading: "1. Nature of Engagement",
          content: "Keyamind Solutions acts exclusively as an advanced cognitive assessment and strategic growth advisor. Our mandates encompass biometric dermatoglyphics mapping, learning style identification, career guidance, and organizational talent structuring. We do not provide clinical psychiatric treatment or medical diagnoses."
        },
        {
          heading: "2. Advisory Reliance",
          content: "Our counseling and guidance services are provided based on biometric dermatoglyphic analysis and behavioral information furnished by the client. While our methodologies are rooted in established neuroscience and psychological frameworks, human behavior is dynamic and multi-faceted."
        },
        {
          heading: "3. Absence of Transactional Capability",
          content: "This website operates solely as a digital informational portal and consultation connect hub. We do not process online financial transactions or facilitate digital payments directly through this interface. All commercial consulting engagements are finalized offline."
        },
        {
          heading: "4. Intellectual Property Rights",
          content: "The site architecture, visual assets, proprietary DMIT mapping methodologies, and cognitive structuring models displayed herein remain the exclusive intellectual property of Keyamind Solutions. Unauthorised reproduction or commercial deployment is strictly prohibited under applicable copyright laws."
        },
        {
          heading: "5. Limitation of Liability",
          content: "In no event shall Keyamind Solutions, its partners, or certified analysts be held liable for any indirect, consequential, or punitive damages arising from the implementation of our strategic advice. Professional guidance is intended to empower self-discovery."
        },
        {
          heading: "6. Governing Law & Dispute Resolution",
          content: "All engagements and interpretations of this portal shall be governed by the laws of the Republic of India. Disputes shall be subject to binding arbitration with the exclusive jurisdiction in Tamil Nadu."
        }
      ]
    },
    cookie: {
      title: "Cookie & Telemetry Policy",
      subtitle: "Session Management & Analytics Framework",
      sizeClass: "max-w-4xl w-[95vw] lg:w-full h-[85vh] md:h-[80vh]",
      sections: [
        {
          heading: "1. Infrastructure & Telemetry",
          content: "To deliver a premium, high-performance web experience, Keyamind Solutions utilizes minimal, non-intrusive cookies. These are strictly engineered for site performance, asset loading optimization, and global layout stability."
        },
        {
          heading: "2. Strictly Necessary Cookies",
          content: "These foundational files govern internal state management, such as interactive viewport animations and cache warming for high-resolution graphics. They collect zero personally identifiable information (PII)."
        },
        {
          heading: "3. Zero Advertising Trackers",
          content: "Our platform is devoid of third-party advertising cookies, cross-site trackers, or marketing pixels. Your browsing habits on this portal are never commodified or shared with external advertising networks."
        },
        {
          heading: "4. Consent & Browser Configurations",
          content: "By continuing to navigate this portal, you accede to our minimal telemetry framework. Users retain the autonomy to disable cookies via browser parameters."
        }
      ]
    },
    disclaimers: {
      title: "Statutory Disclaimers",
      subtitle: "Scope & Limitations of Biometric Analysis",
      sizeClass: "max-w-4xl w-[95vw] lg:w-full h-[85vh] md:h-[80vh]",
      sections: [
        {
          heading: "1. Biometric Mapping Scope",
          content: "Dermatoglyphics Multiple Intelligence Test (DMIT) is an assessment tool designed to identify inherent biological traits, learning preferences, and natural potential based on ridge formations. It is intended for educational, personal, and career advisory guidance."
        },
        {
          heading: "2. Dynamic Human Potential",
          content: "While fingerprint patterns are permanent, individual cognitive development is significantly influenced by environment, personal effort, education, and life experiences. Analysis results provide a directional compass rather than absolute limitations."
        },
        {
          heading: "3. Non-Medical Nature",
          content: "Keyamind Solutions does not claim to diagnose, cure, or treat psychological disorders or medical conditions. Clients seeking clinical therapy must consult qualified medical professionals."
        }
      ]
    }
  };

  const handleFooterNav = (e, link) => {
    e.preventDefault();
    const element = document.getElementById(link.sectionId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo('#' + link.sectionId, {
          offset: -80,
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
    <div className="relative w-full pt-20 bg-gradient-to-b from-[#FAF6F8] to-[#FAF2F7] overflow-hidden font-poppins select-none z-10">
      
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-purple-100 to-sakura-purple opacity-30 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-purple-100 to-mist-purple opacity-30 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-20">
        
        {/* ====================================================
            ABOUT US / PHILOSOPHY SECTION
            ==================================================== */}
        <section id="about" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="text-left flex flex-col gap-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
                  Our Philosophy
                </span>
              </div>
              
              <h2 className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight">
                Empowering Minds, <br />
                Igniting <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Innate Greatness</span>
              </h2>
              
              <p className="text-sm md:text-base text-dark-lavender/75 leading-relaxed font-light font-poppins">
                At Keyamind Solutions, we believe that every individual holds a unique combination of natural cognitive traits and biological strengths. Our mission is to illuminate these neural pathways, offering a scientific, compassionate mirror to your full potential.
              </p>

              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 mt-0.5 shadow-sm">
                    <Sparkles size={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-dark-lavender font-outfit">Cognitive Mapping Architecture</h4>
                    <p className="text-xs sm:text-sm text-dark-lavender/70 font-light font-poppins">Discover native learning channels, natural focus habits, and inherent processing speeds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 mt-0.5 shadow-sm">
                    <Compass size={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-dark-lavender font-outfit">Personalized Mentorship Integration</h4>
                    <p className="text-xs sm:text-sm text-dark-lavender/70 font-light font-poppins">Direct feedback loop with trained neuroscience advisors to build tailored growth blueprints.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:col-span-5 w-full">
              <div className="absolute w-80 h-80 bg-purple-200/30 rounded-full blur-[70px] pointer-events-none" />
              <div className="w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] border border-white/60 shadow-xl relative overflow-hidden bg-white/60 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 via-purple-100/10 to-white/40 pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-6 text-left">
                  <span className="text-xs font-bold text-purple-600 tracking-widest uppercase font-poppins">Our Vision</span>
                  <p className="text-sm sm:text-base text-dark-lavender/85 italic font-light leading-relaxed font-playfair">
                    "We aspire to touch lives globally, shifting the paradigm of education and careers from standard conformity to self-directed passion and innate excellence."
                  </p>
                  <div className="h-px bg-purple-200/40 my-2" />
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-400 to-purple-400 flex items-center justify-center text-white font-outfit font-black text-sm shadow-md">
                      KM
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-dark-lavender font-outfit">The Keyamind Leadership Team</h5>
                      <p className="text-[10px] sm:text-xs text-dark-lavender/60 font-light font-poppins">Visionary Transformation Specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            FINAL CTA SECTION
            ==================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-left relative overflow-hidden bg-gradient-r from-sakura-purple/70 via-ivory-peach/80 to-mist-purple/70 border border-white/60 shadow-xl shadow-purple-200/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10"
        >
          <div className="absolute inset-0 bg-gradient-mesh mix-blend-overlay opacity-60 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none animate-pulse-soft" />

          <div className="flex flex-col gap-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
                Take Action Today
              </span>
            </div>

            <h3 className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight">
              Your Potential Deserves <br />the <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal inline-block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] ml-1">Right Direction</span>
            </h3>

            <p className="text-sm md:text-base text-dark-lavender/80 font-light max-w-lg leading-relaxed font-poppins">
              Take the next step toward lifelong clarity, purpose, and confidence. Partner with our senior growth advisors to unleash your true biological strengths.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                if (window.lenis) {
                  window.lenis.scrollTo("#contact", { offset: -80, duration: 1.2 });
                } else {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full font-extrabold text-xs uppercase tracking-widest text-white shadow-lg shadow-purple-900/10 bg-gradient-to-r from-dark-lavender via-purple-700 to-purple-600 hover:opacity-95 transition-opacity cursor-pointer active:scale-95 overflow-hidden font-poppins"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* ====================================================
            CONTACT US SECTION (WHATSAPP INTEGRATION)
            ==================================================== */}
        <ContactSection />

      </div>

      {/* ====================================================
          INSTITUTIONAL GRADE PROFESSIONAL FOOTER
          ==================================================== */}
      <footer className="bg-gradient-to-b from-white to-soft-cream pt-12 pb-12 relative overflow-hidden font-poppins text-left">
        {/* Deep Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[500px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

            {/* BRAND ARCHITECTURE — LG:COL-SPAN-5 */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <a href="/" onClick={(e) => handleFooterNav(e, { sectionId: "home", to: "/" })} className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-200/20 rounded-2xl blur-xl group-hover:bg-purple-300/30 transition-all duration-500" />
                  <img src={logo} width={64} height={64} loading="lazy" alt="Keyamind Logo" className="relative w-16 h-16 object-contain filter drop-shadow-sm" />
                </div>
                <img src={titleImg} width={180} height={43} loading="lazy" alt="Keyamind Title" className="h-[43.2px] w-auto object-contain" />
              </a>
              
              <p className="text-dark-lavender/80 text-sm font-medium leading-relaxed max-w-md">
                Keyamind Solutions is a premier growth advisory firm integrating advanced neuroscience with DMIT assessment architecture to illuminate inherent biological strengths and chart precision paths for life and career.
              </p>

              <div className="flex items-center gap-4 mt-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-tr from-purple-100 to-purple-100 shadow-sm" />
                  ))}
                </div>
                <span className="text-[10px] font-black text-dark-lavender/40 uppercase tracking-widest">
                  Trusted by 5000+ Individuals
                </span>
              </div>
            </div>

            {/* NAVIGATION — LG:COL-SPAN-2 */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              <h4 className="text-dark-lavender text-[11px] font-black tracking-[0.3em] uppercase">
                Platform
              </h4>
              <div className="flex flex-col gap-4">
                {footerNavLinks.map((link) => (
                  <a key={link.name} href="/" onClick={(e) => handleFooterNav(e, link)} className="text-dark-lavender/60 hover:text-purple-600 text-[13px] font-bold transition-all hover:translate-x-1 uppercase tracking-wider">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* SCIENCE — LG:COL-SPAN-2 */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              <h4 className="text-dark-lavender text-[11px] font-black tracking-[0.3em] uppercase">
                Science
              </h4>
              <div className="flex flex-col gap-4">
                {scienceLinks.map((link) => (
                  <a key={link.name} href="/" onClick={(e) => handleFooterNav(e, link)} className="text-dark-lavender/60 hover:text-purple-600 text-[13px] font-bold transition-all hover:translate-x-1 uppercase tracking-wider">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* SUPPORT — LG:COL-SPAN-3 */}
            <div className="flex flex-col gap-8 lg:col-span-3">
              <h4 className="text-dark-lavender text-[11px] font-black tracking-[0.3em] uppercase">
                Connect
              </h4>
              <div className="flex flex-col gap-4">
                {legalLinks.map((link) => (
                  <button key={link.name} onClick={() => setActiveModal(link.id)} className="text-dark-lavender/60 hover:text-purple-600 text-[13px] font-bold transition-all hover:translate-x-1 uppercase tracking-wider text-left cursor-pointer">
                    {link.name}
                  </button>
                ))}
                
                <div className="mt-6 pt-6 border-t border-dark-lavender/5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-purple-500 text-[10px] font-black tracking-widest uppercase">Global Operations</span>
                    <span className="text-dark-lavender/80 text-xs font-bold font-poppins">Trichy & Karaikudi, India</span>
                    <span className="text-dark-lavender/40 text-[10px] font-medium font-poppins">contact@keyamind.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM UTILITY BAR — HIGH CONTRAST & PROFESSIONAL */}
          <div className="pt-12 border-t border-dark-lavender/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-dark-lavender/30 text-[11px] font-black tracking-widest uppercase text-center md:text-left">
                © {currentYear} Keyamind Solutions
              </p>
              <div className="hidden md:block w-px h-3 bg-dark-lavender/10" />
              <p className="text-dark-lavender/20 text-[10px] font-bold tracking-widest uppercase">
                For website related queries contact: +91 6369888789
              </p>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3">

              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/in/swathi-deivanai-3409601ba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-110
                  active:scale-95
                  will-change-transform
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7.5 h-7.5"
                  fill="none"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="5"
                    fill="#0077B5"
                  />

                  <path
                    d="M6.5 18h2.5V9.5H6.5V18zM7.75 8.25c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM10.5 18h2.5v-4.5c0-1.25.9-2.25 2-2.25s2 .9 2 2.25V18H19.5v-4.75c0-2.5-1.9-4.5-4.25-4.5-1.35 0-2.6.75-3.25 1.85V9.5h-2.5v8.5z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/keyamind_solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-110
                  active:scale-95
                  will-change-transform
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7.5 h-7.5"
                >
                  <defs>
                    <linearGradient
                      id="instagram-gradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FED373" />
                      <stop offset="20%" stopColor="#F15245" />
                      <stop offset="40%" stopColor="#D92E7F" />
                      <stop offset="60%" stopColor="#9B36B7" />
                      <stop offset="80%" stopColor="#515ECF" />
                      <stop offset="100%" stopColor="#2E69E2" />
                    </linearGradient>
                  </defs>

                  <rect
                    width="24"
                    height="24"
                    rx="5"
                    fill="url(#instagram-gradient)"
                  />

                  <rect
                    x="4.7"
                    y="4.7"
                    width="14.6"
                    height="14.6"
                    rx="4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3.3"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="17"
                    cy="7"
                    r="1"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/keyamindsolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-110
                  active:scale-95
                  will-change-transform
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7.5 h-7.5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#1877F2"
                  />

                  <path
                    d="M14 18v-5.5h1.9l.3-2.4H14V8.6c0-.7.2-1.1 1.1-1.1h1.2V5.3c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.7H9v2.4h2.4V18H14z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@keyamindsolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  w-12
                  h-10
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-110
                  active:scale-95
                  will-change-transform
                "
              >
                <svg
                  viewBox="0 0 34 24"
                  className="w-[42px] h-[30px]"
                >
                  <path
                    d="M33.1 6.2a4.1 4.1 0 0 0-2.9-2.9C27.7 2.6 17 2.6 17 2.6s-10.7 0-13.2.7A4.1 4.1 0 0 0 .9 6.2C.2 8.7.2 12 .2 12s0 3.3.7 5.8a4.1 4.1 0 0 0 2.9 2.9c2.5.7 13.2.7 13.2.7s10.7 0 13.2-.7a4.1 4.1 0 0 0 2.9-2.9c.7-2.5.7-5.8.7-5.8s0-3.3-.7-5.8z"
                    fill="#FF0000"
                  />

                  <polygon
                    points="13.8,8.8 22,13 13.8,17.2"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* LEGAL POPUPS (MODAL) */}
        {mounted && createPortal(
          <AnimatePresence>
            {activeModal && (
              <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 overflow-hidden font-poppins">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-dark-lavender/40 backdrop-blur-md z-10" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`relative ${legalContent[activeModal].sizeClass} bg-white border border-purple-100/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-20 max-h-[86vh] sm:max-h-[90vh]`}
                >
                  <div className="p-6 sm:p-8 border-b border-dark-lavender/5 flex justify-between items-start shrink-0">
                    <div>
                      <h3 className="text-dark-lavender font-black text-xl sm:text-2xl uppercase tracking-wider">{legalContent[activeModal].title}</h3>
                      <p className="text-dark-lavender/60 text-[10px] sm:text-xs mt-1">{legalContent[activeModal].subtitle}</p>
                    </div>
                    <button onClick={() => setActiveModal(null)} className="text-dark-lavender/40 hover:text-dark-lavender cursor-pointer p-1 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 sm:space-y-10 custom-scrollbar text-left">
                    {legalContent[activeModal].sections.map((sec, idx) => (
                      <div key={idx} className="space-y-3 sm:space-y-4">
                        <h4 className="text-xs sm:text-sm font-black text-purple-600 tracking-widest uppercase">{sec.heading}</h4>
                        <p className="text-xs sm:text-sm font-light text-dark-lavender/75 leading-relaxed text-justify">{sec.content}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </footer>
    </div>
  );
}
