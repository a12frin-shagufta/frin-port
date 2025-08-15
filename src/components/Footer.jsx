import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const glowColor = "#d27d5f"; // Matching your brand color

  return (
    <div className="select-none">
      <div className="relative w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8 text-white"
        style={{ "--glow": glowColor }}>
        
        {/* Background Elements - matches Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--glow)]/10 blur-3xl" />
        </div>

        {/* Main Container with glow effects */}
        <motion.div 
          className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl group/footer"
          whileHover={{ 
            boxShadow: `0 0 30px 5px ${glowColor}55`,
            transition: { duration: 0.3 }
          }}
        >
          {/* Background gradient - matches Hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
            <div className="flex flex-col items-center gap-6">
              {/* Social Links with Hero-style glow */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6 text-xl"
              >
                {[
                  { href: "https://www.instagram.com/frin.dev/", Icon: FaInstagram, label: "Instagram" },
                  { href: "https://x.com/shagufta_dev", Icon: FaXTwitter, label: "Twitter" },
                  { href: "mailto:shagufta7572@gmail.com", Icon: FiMail, label: "Email" }
                ].map(({ href, Icon, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    className="relative group"
                    target="_blank"
                    rel="noopener noreferrer"
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

              {/* Footer Navigation with glow hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6 text-sm sm:text-base font-medium"
              >
                {[
                  { href: "#home", text: "Home" },
                  { href: "#projects", text: "Projects" },
                  { href: "#contact", text: "Contact" }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href} 
                    className="relative group hover:text-[var(--glow)] transition-colors duration-300"
                  >
                    {item.text}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--glow)] group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </motion.div>

              {/* Divider with glow effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative w-full h-px my-2"
              >
                <div className="absolute inset-0 bg-stone-600 opacity-30"></div>
                <div className="absolute inset-0 bg-[var(--glow)] opacity-0 group-hover/footer:opacity-30 transition-opacity duration-300"></div>
              </motion.div>

              {/* Copyright Text with gradient glow */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-stone-400 text-center"
              >
                Designed & Built with <span className="text-[var(--glow)]">❤️</span> by{" "}
                <span className="bg-gradient-to-r from-[var(--glow)] to-[#d45a3a] bg-clip-text text-transparent font-semibold">
                  Shagufta Afrin
                </span>{" "}
                © {new Date().getFullYear()}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;