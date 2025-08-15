import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Hero = () => {
  const glowColor = "#d27d5f"; // your brand glow

  return (
    <div className="select-none">
    <section
      id="home"
      className="relative w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8 text-white"
      style={{ "--glow": glowColor }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--glow)]/10 blur-3xl" />
      </div>

      {/* Main Container */}
      <motion.div 
        className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl group/hero"
        whileHover={{ 
          boxShadow: `0 0 30px 5px ${glowColor}55`,
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

        <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl text-center">
          {/* === Avatar with GLOW BORDER === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative w-32 h-32 mx-auto rounded-full overflow-hidden"
          >
            {/* Glow Aura */}
            <span
              className="pointer-events-none absolute -inset-2 rounded-full blur-2xl transition-opacity duration-300 opacity-40 group-hover:opacity-80 group-hover:scale-110"
              style={{
                background: `radial-gradient(circle, ${glowColor}55 0%, transparent 70%)`
              }}
            />
            
            {/* Border Glow */}
            <div
              className="absolute inset-0 rounded-full border-2 transition-all duration-300 group-hover:border-[3px]"
              style={{
                borderColor: glowColor,
                boxShadow: `0 0 10px ${glowColor}`
              }}
            />

            <img
              src="/image/me.png"
              alt="Shagufta Afrin"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Handle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-stone-400 mt-4 text-sm tracking-wider"
          >
            @shagufta_dev
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white mt-2"
          >
            Shagufta Afrin
          </motion.h1>

          {/* === Social Icons with GLOW === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-5 mt-4 text-xl"
          >
            {[
              { href: "https://www.instagram.com/frin.dev/", Icon: FaInstagram },
              { href: "https://x.com/shagufta_dev", Icon: FaXTwitter },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                aria-label="social"
              >
                {/* glow disc */}
                <span className="absolute inset-0 -m-2 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(65% 65% at 50% 50%, color-mix(in oklab, var(--glow) 55%, transparent) 0%, transparent 70%)" }}
                />
                <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full text-[var(--glow)] group-hover:text-white transition-colors duration-300
                                ring-1 ring-white/10 group-hover:ring-[var(--glow)]">
                  <Icon />
                </span>
              </a>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-stone-300 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl"
          >
            Hi, I'm Shagufta Afrin — a <span className="text-[var(--glow)] font-medium">Full-Stack</span> &{" "}
            <span className="text-[var(--glow)] font-medium">UI Developer</span>.
            I craft{" "}
            <span className="text-[var(--glow)] font-semibold">modern, high-converting web experiences</span>{" "}
            that help brands stand out 🚀
          </motion.p>

          {/* === CTA Button with GLOW === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium
                         bg-[#2b2b31] text-white transition-all duration-300
                         ring-1 ring-white/10 hover:ring-[var(--glow)]
                         hover:shadow-[0_0_40px_8px_var(--glow)]"
            >
              {/* gradient border on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--glow) 55%, transparent), transparent)"
                }}
              />
              <span className="relative">
                Let's Build Something Amazing
              </span>
              <svg className="w-4 h-4 ml-2 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default Hero;