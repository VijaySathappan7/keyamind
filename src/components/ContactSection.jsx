import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    interest: "Career Guidance",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }

    const whatsappText = `Hello Keyamind! My name is ${formData.name}. I am looking for ${formData.interest}. Message: ${formData.message || "I would like to know more details."}`;
    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919344094369&text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div id="contact" className="w-full py-16 scroll-mt-0 select-none">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 lg:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ====================================================
              LEFT COLUMN: CONTACT INFORMATION
              ==================================================== */}
          <div className="lg:col-span-5 flex flex-col text-left gap-6">
            
            {/* BADGE */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm self-start"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
                Direct Connection
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              custom={2}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight text-left"
            >
              Connect With
              <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] mt-1">
                Our Experts
              </span>
            </motion.h2>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-sm sm:text-base leading-relaxed text-dark-lavender/80 font-poppins font-light max-w-md"
            >
              Have questions about finding the right career, understanding your strengths, or improving your child's learning? We are here to help. Reach out to us today to start your journey.
            </motion.p>

            {/* CONTACT DETAILS CARDS */}
            <div className="flex flex-col gap-4 mt-2 font-poppins">
              
              {/* PHONE */}
              <motion.a
                custom={4}
                initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                href="tel:+919344094369"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(59,46,94,0.04)] hover:bg-white/90 hover:scale-[1.015] transition-all duration-300 group cursor-pointer min-h-[48px]"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-500 transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-[#25D366] group-hover:fill-white transition-colors shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.79 6.34 8.59 5.15 8.59 3.92A1 1 0 0 0 7.59 3H3.92c-.5 0-.92.42-.92.92C3 14.18 11.82 23 22.08 23c.5 0 .92-.42.92-.92v-3.69a1 1 0 0 0-1-1.01z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-dark-lavender/60 font-medium uppercase tracking-widest">
                    Call WhatsApp / Mobile
                  </p>
                  <p className="text-base font-extrabold text-dark-lavender font-outfit tracking-wide mt-0.5">
                    +91 93440 94369
                  </p>
                </div>
              </motion.a>

              {/* EMAIL */}
              <motion.a
                custom={5}
                initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                href="mailto:contact@keyamind.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(59,46,94,0.04)] hover:bg-white/90 hover:scale-[1.015] transition-all duration-300 group cursor-pointer min-h-[48px]"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 group-hover:bg-red-100 transition-colors shrink-0">
                  <svg viewBox="0 0 48 48" className="w-5.5 h-5.5 shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M45 16.2v22.3c0 2.2-1.8 4-4 4h-7V22.5L24 30.7 14 22.5v20H7c-2.2 0-4-1.8-4-4V16.2c0-2.2 2.3-3.6 4.2-2.5L24 25l16.8-11.3c1.9-1.1 4.2.3 4.2 2.5z"/>
                    <path fill="#34A853" d="M45 16.2v22.3c0 2.2-1.8 4-4 4h-7V22.5z"/>
                    <path fill="#EA4335" d="M24 30.7l17-11.4V16.2c0-2.2-2.3-3.6-4.2-2.5L24 25 7.2 13.7C5.3 12.6 3 14 3 16.2v3.1l17 11.4c1.2.8 2.8.8 4 0z"/>
                    <path fill="#FBBC05" d="M3 16.2V22.5h11V13.7L3 16.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-dark-lavender/60 font-medium uppercase tracking-widest">
                    Email Address
                  </p>
                  <p className="text-base font-extrabold text-dark-lavender font-outfit tracking-wide mt-0.5">
                    contact@keyamind.com
                  </p>
                </div>
              </motion.a>

              {/* LOCATIONS */}
              <motion.div
                custom={6}
                initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(59,46,94,0.04)] min-h-[48px]"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
                    <path d="M12 2c3.87 0 7 3.13 7 7c0 .77-.12 1.5-.35 2.18L12 9V2z" fill="#FBBC05" />
                    <path d="M12 9l6.65 2.18L12 22V9z" fill="#34A853" />
                    <path d="M12 9L5.35 11.18L12 22V9z" fill="#4285F4" />
                    <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-dark-lavender/60 font-medium uppercase tracking-widest">
                    Office Locations
                  </p>
                  <p className="text-base font-extrabold text-dark-lavender font-outfit tracking-wide mt-0.5">
                    Trichy & Karaikudi, Tamil Nadu
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

          {/* ====================================================
              RIGHT COLUMN: WHATSAPP INTERACTIVE FORM
              ==================================================== */}
          <motion.div
            custom={7}
            initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-7 w-full"
          >
            <div className="w-full p-6 sm:p-10 rounded-[32px] bg-white/70 backdrop-blur-md border border-white shadow-[0_20px_60px_rgba(59,46,94,0.08)] relative overflow-hidden text-left font-poppins">
              
              {/* TOP WHATSAPP STATUS HEADER */}
              <div className="flex items-center justify-between pb-6 border-b border-dark-lavender/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0 border border-green-200/50 animate-pulse">
                    <MessageSquare size={18} className="fill-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-dark-lavender font-outfit">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-dark-lavender/60 font-light mt-0.5">
                      We are happy to help you.
                    </p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-6">
                
                {/* NAME INPUT */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-extrabold text-dark-lavender uppercase tracking-wider pl-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 min-h-[48px] rounded-xl bg-white/80 border border-dark-lavender/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10 text-sm text-dark-lavender placeholder:text-dark-lavender/40 transition-all font-light"
                  />
                </div>

                {/* INTEREST / STAGE */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="text-xs font-extrabold text-dark-lavender uppercase tracking-wider pl-1">
                    Select Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 min-h-[48px] rounded-xl bg-white/80 border border-dark-lavender/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10 text-sm text-dark-lavender transition-all font-light cursor-pointer"
                  >
                    <option value="Parenting & Toddler Growth (1-4 yrs)">Parenting & Toddler Growth (1-4 yrs)</option>
                    <option value="Learning Style Mapping (4-10 yrs)">Learning Style Mapping (4-10 yrs)</option>
                    <option value="Teenage Career Mapping (11-17 yrs)">Teenage Career Mapping (11-17 yrs)</option>
                    <option value="Career Guidance & Course Selection (18+)">Career Guidance & Course Selection (18+)</option>
                    <option value="Adult Relationship & Personal Growth (25+)">Adult Relationship & Personal Growth (25+)</option>
                    <option value="Corporate Talent & Institutional Solutions">Corporate Talent & Institutional Solutions</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-extrabold text-dark-lavender uppercase tracking-wider pl-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share any questions or details about what you're looking for..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-dark-lavender/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10 text-sm text-dark-lavender placeholder:text-dark-lavender/40 transition-all font-light resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm tracking-wide shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all cursor-pointer group min-h-[48px]"
                >
                  <MessageSquare size={18} className="fill-white" />
                  <span>Send Message via WhatsApp</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-[11px] text-center text-dark-lavender/50 font-light mt-1">
                  Clicking send will securely prefill your message in WhatsApp.
                </p>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
