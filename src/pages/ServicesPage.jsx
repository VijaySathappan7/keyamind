import { motion } from "framer-motion";
import { 
  Fingerprint, 
  Heart, 
  Compass, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Sparkles 
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import ContentSection from "../components/ContentSection";

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Keyamind Assessment & Guidance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "DMIT Brain Mapping",
          "description": "Scientific fingerprint dermatoglyphics mapping inborn neocortex potential."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Parenting Counseling",
          "description": "Aligning learning pathways (VAK) and resolving relational friction."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Career Direction Assessment",
          "description": "Data-driven stream selection and professional competency mappings."
        }
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const coreServices = [
    {
      title: "DMIT Brain Mapping Scans",
      desc: "Our flagship scientific analysis. Scans all 10 fingerprints to construct an objective neocortex mapping of inborn lobe capacities, left/right hemisphere balance, and natural quotient indicators.",
      bullets: ["Maps 5 brain lobes with high accuracy", "Pinpoints innate learning style (VAK)", "Highlights Howard Gardner's intelligences"],
      icon: Fingerprint,
      link: "/dmit",
      color: "from-purple-500/10 to-purple-500/20 text-purple-700 hover:border-purple-300"
    },
    {
      title: "Scientific Parenting Counseling",
      desc: "Dismantle daily home arguments and study tension. We align parent communication vocabulary with the child's natural cognitive processing channel to build lasting mutual trust.",
      bullets: ["Diagnoses style mismatches", "Provides VAK customized homework formats", "Increases kid's self-esteem and safety"],
      icon: Heart,
      link: "/parenting",
      color: "from-pink-500/10 to-pink-500/20 text-pink-700 hover:border-pink-300"
    },
    {
      title: "Career Guidance & Stream Planning",
      desc: "For High School, Graduates, and working professionals. We evaluate innate quotients (IQ, EQ, CQ, AQ) to confirm a permanent academic stream selection or corporate role fit.",
      bullets: ["Class 10 & 12 stream planning", "Profile alignment for recruitment", "Resolves corporate role pivots & burnouts"],
      icon: Compass,
      link: "/career",
      color: "from-blue-500/10 to-blue-500/20 text-blue-700 hover:border-blue-300"
    },
    {
      title: "Parent-Child Compatibility Matrix",
      desc: "An advanced relationship synergy evaluation. Mappings of both parent and child profiles are compared to construct an actionable, friction-free household alignment roadmap.",
      bullets: ["Measures emotional triggers", "Calibrates auditory/kinesthetic pacing", "Provides structured behavioral advice"],
      icon: Users,
      link: "/parenting",
      color: "from-emerald-500/10 to-emerald-500/20 text-emerald-700 hover:border-emerald-300"
    }
  ];

  return (
    <>
      <SEOHead 
        title="DMIT Brain Mapping & Counseling Services | Keyamind"
        description="Browse our professional, biological brain mapping, parenting consultation, student stream selection, and family compatibility services."
        canonical="https://keyamind.com/services"
        keywords="brain mapping services, counseling Chennai, child potential mapping, career stream selection, compatibility report"
      />

      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>

      <div className="relative min-h-screen pt-24 pb-20 bg-gradient-mesh overflow-x-hidden selection:bg-purple-200 selection:text-dark-lavender">
        
        {/* Soft background aesthetics */}
        <div className="absolute top-1/4 -left-36 w-96 h-96 rounded-full bg-purple-200/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-36 w-96 h-96 rounded-full bg-pink-200/15 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          
          {/* ================= HERO INTRO ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-800">Professional Services Catalog</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-dark-lavender tracking-tight leading-none mb-6 font-outfit"
            >
              Our Specialized Cognitive <br/>
              <span className="text-gradient-purple">Services & Mappings</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-dark-lavender/70 font-medium leading-relaxed"
            >
              Align your education, career, and household relationship frameworks 
              harmoniously with inborn genetic potential. We offer certified scans, 
              deep multi-page reports, and 1-on-1 counseling consultations.
            </motion.p>
          </motion.div>

          {/* ================= SERVICES DISPLAY GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`bg-white border border-purple-50 rounded-[32px] p-8 shadow-[0_12px_45px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all flex flex-col justify-between`}
                >
                  <div>
                    
                    {/* Header Row */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color.split(' ')[0]} ${service.color.split(' ')[1]} flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-black text-dark-lavender font-poppins tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    {/* Desc */}
                    <p className="text-xs sm:text-sm text-dark-lavender/65 leading-relaxed font-semibold mb-6">
                      {service.desc}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-8">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 items-start text-xs sm:text-sm text-dark-lavender/75 font-medium">
                          <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Footer link */}
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <span>Learn More Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </motion.div>
              );
            })}
          </div>

          {/* ================= METHODOLOGY TRUST ================= */}
          <div className="glass-premium rounded-[32px] p-8 sm:p-12 mb-24 border-white/60 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-black uppercase tracking-wider mb-4">
                <Activity className="w-3 h-3" />
                <span>Our Scan Standards</span>
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-black text-dark-lavender font-outfit mb-4">
                Certified Cloud Diagnostic & 1-on-1 Deep Counseling
              </h2>
              
              <p className="text-sm sm:text-base text-dark-lavender/70 font-medium leading-relaxed mb-6">
                Our scan evaluations are powered by the industry's leading cognitive diagnostic clouds, guaranteeing maximum accuracy in ridge counting and pattern verification. Every scan report includes a highly comprehensive, 1-on-1 counseling session with our certified psychological coaches, translating complex biological data into practical, daily life and study solutions.
              </p>
            </div>
          </div>

          {/* ================= HIGH-CONVERSION CTA ================= */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[32px] bg-gradient-to-r from-dark-lavender via-purple-900 to-purple-800 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl font-black mb-4 font-outfit">
              Ready to Order a Cognitive Assessment?
            </h2>
            <p className="text-sm sm:text-base text-purple-200 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
              Book a scientific fingerprint scanning session or request a parent-child compatibility counseling meeting today with Keyamind.
            </p>

            <motion.a 
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (window.lenis) {
                  window.lenis.scrollTo("#contact", { offset: -80, duration: 1.2 });
                } else {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-dark-lavender font-black text-xs uppercase tracking-widest shadow-xl transition-all font-poppins cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </motion.a>
          </motion.div>

        </div>
      </div>
      <ContentSection />
    </>
  );
}
