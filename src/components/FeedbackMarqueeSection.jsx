import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const feedbacks = [
  {
    quote: "This experience completely changed how I guide my daughter. Understanding her native learning style saved us years of academic frustration.",
    name: "Nisha R.",
    role: "Parent of 10th Grader",
    location: "Chennai",
  },
  {
    quote: "I was hopelessly confused about choosing science versus design. The growth advisor clearly charted my analytical & creative balance.",
    name: "Aman Sen",
    role: "College Student",
    location: "Coimbatore",
  },
  {
    quote: "Highly recommended for any parent or individual seeking to unlock their focus and live a highly purposeful life of confidence.",
    name: "Dr. Sandeep K.",
    role: "Consultant Pediatrician",
    location: "Madurai",
  },
  {
    quote: "The DMIT analysis gave us incredible clarity on our son's inherent strengths. We now know exactly how to encourage his auditory learning preferences!",
    name: "Karthikeyan Natarajan",
    role: "IT Executive",
    location: "Chennai",
  },
  {
    quote: "Keyamind's career guidance helped me transition from engineering to management with absolute confidence in my decision-making abilities.",
    name: "Ananya Meenakshi",
    role: "MBA Aspirant",
    location: "Madurai",
  },
  {
    quote: "A truly scientific approach to brain development. As an educator, I find their learning style mapping absolutely invaluable for classroom guidance.",
    name: "Srinivasan Rangasamy",
    role: "High School Principal",
    location: "Coimbatore",
  },
  {
    quote: "Understanding my adversity quotient and emotional triggers helped me manage workplace stress and build healthier relationships.",
    name: "Priyadarshini Sundaram",
    role: "Financial Analyst",
    location: "Trichy",
  },
  {
    quote: "The detailed analysis of left and right brain dominance helped my teenage son choose architecture over pure science without any hesitation.",
    name: "Muruganandam V.",
    role: "Business Owner",
    location: "Salem",
  },
  {
    quote: "Their parenting guidance sessions were an eye-opener. We stopped forcing rote memorization and embraced kinesthetic learning techniques for our daughter.",
    name: "Lakshmi Ramanathan",
    role: "Homemaker",
    location: "Erode",
  },
  {
    quote: "I finally understand why I thrive in creative environments but struggle with mundane administrative routines. The Ikigai mapping is flawless.",
    name: "Dinesh Balasubramanian",
    role: "UX Designer",
    location: "Vellore",
  },
  {
    quote: "Exceptional counseling and neuroscience insights. It gave my family a completely new vocabulary to understand each other's communication styles.",
    name: "Dr. Vanitha Krishnan",
    role: "Gynecologist",
    location: "Tirunelveli",
  },
  {
    quote: "The corporate leadership mapping helped our startup align co-founders based on executive cognitive strengths. Highly recommended!",
    name: "Ramesh Thiyagarajan",
    role: "Tech Founder",
    location: "Tirupur",
  },
  {
    quote: "My child used to be extremely shy. Keyamind helped us discover her interpersonal strengths, and today she is an active debater in school!",
    name: "Divya Senthilkumar",
    role: "Professor",
    location: "Thanjavur",
  },
];

export default function FeedbackMarqueeSection() {
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
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF5F7] to-[#FAF9F6] py-20 md:py-24 select-none scroll-mt-[80px] z-10"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full bg-purple-300/15 blur-[150px] animate-pulse-soft" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-purple-300/15 blur-[140px] animate-pulse-soft" />
      </div>

      <div className="relative z-10 max-w-[1420px] mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-6 lg:gap-8">

        {/* ====================================================
            TOP HEADER ROW: TITLE (LEFT) & SUB CONTENT (RIGHT)
            ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-10 pb-3 border-b border-dark-lavender/5">
          <div className="flex flex-col text-left lg:w-7/12">
            {/* BADGE */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur-md shadow-sm mb-2.5 self-start"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-extrabold text-dark-lavender font-poppins pl-[0.1em]">
                Authentic Experiences
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-[clamp(24px,5.5vw,42px)] lg:text-[44px] font-outfit font-black text-dark-lavender leading-[1.12] tracking-tight text-left"
            >
              What People Say
              <span className="text-gradient-purple font-cursive text-[clamp(34px,7.5vw,58px)] lg:text-[56px] font-normal capitalize tracking-normal block drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)] mt-1">
                About Keyamind
              </span>
            </motion.h2>
          </div>

          {/* SUB CONTENT */}
          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-sm sm:text-base leading-relaxed text-dark-lavender/80 lg:w-5/12 font-poppins font-light text-left lg:pb-1"
          >
            Real feedback and life-changing growth stories from parents, students,
            educators, and working professionals across Tamil Nadu.
          </motion.p>
        </div>

        {/* ====================================================
            MARQUEE TRACK CONTAINER
            ==================================================== */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative w-full overflow-hidden py-2 -mx-6 px-6 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16 flex mask-gradient-horizontal"
        >
          {/* MARQUEE TRACK (Adjacent lists with 100% translate seamless loop) */}
          <div className="flex w-full overflow-hidden hover:[&>div]:[animation-play-state:paused]">
            
            {/* List 1 */}
            <div className="flex gap-5 sm:gap-6 shrink-0 animate-marquee pr-5 sm:pr-6">
              {feedbacks.map((item, idx) => (
                <div
                  key={`f1-${idx}`}
                  className="w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 rounded-2xl border border-white/80 bg-white/60 backdrop-blur-xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(59,46,94,0.04)] flex flex-col justify-between hover:bg-white/90 hover:scale-[1.015] hover:shadow-[0_20px_50px_rgba(59,46,94,0.08)] transition-all duration-300 text-left gpu-optimize"
                >
                  {/* QUOTE ICON & TEXT */}
                  <div className="flex flex-col gap-3 mb-5 font-poppins">
                    <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-1 border border-purple-100 shrink-0">
                      <Quote size={14} className="fill-purple-600" />
                    </div>

                    <p className="text-xs sm:text-[13.5px] text-dark-lavender/85 leading-relaxed font-light italic line-clamp-5">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* AUTHOR FOOTER */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-dark-lavender/5 font-poppins mt-auto">
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-dark-lavender font-outfit">
                        {item.name}
                      </h4>

                      <p className="text-[11px] sm:text-xs text-dark-lavender/70 font-light mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold text-purple-600 bg-purple-50/80 px-3 py-1 rounded-full border border-purple-100">
                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* List 2 (Identical Copy for seamless loop) */}
            <div className="flex gap-5 sm:gap-6 shrink-0 animate-marquee pr-5 sm:pr-6" aria-hidden="true">
              {feedbacks.map((item, idx) => (
                <div
                  key={`f2-${idx}`}
                  className="w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 rounded-2xl border border-white/80 bg-white/60 backdrop-blur-xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(59,46,94,0.04)] flex flex-col justify-between hover:bg-white/90 hover:scale-[1.015] hover:shadow-[0_20px_50px_rgba(59,46,94,0.08)] transition-all duration-300 text-left gpu-optimize"
                >
                  {/* QUOTE ICON & TEXT */}
                  <div className="flex flex-col gap-3 mb-5 font-poppins">
                    <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-1 border border-purple-100 shrink-0">
                      <Quote size={14} className="fill-purple-600" />
                    </div>

                    <p className="text-xs sm:text-[13.5px] text-dark-lavender/85 leading-relaxed font-light italic line-clamp-5">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* AUTHOR FOOTER */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-dark-lavender/5 font-poppins mt-auto">
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-dark-lavender font-outfit">
                        {item.name}
                      </h4>

                      <p className="text-[11px] sm:text-xs text-dark-lavender/70 font-light mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold text-purple-600 bg-purple-50/80 px-3 py-1 rounded-full border border-purple-100">
                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
