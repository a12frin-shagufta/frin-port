import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#d27d5f]/10 blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />
        
        {/* Content - All text content properly centered */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl text-center">
          {/* Avatar with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-lg hover:border-[#d27d5f] transition-all duration-300"
          >
            <img
              src="/image/me.png"
              alt="Shagufta Afrin"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-5 mt-4 text-xl text-[#d27d5f]"
          >
            <a 
              href="https://www.instagram.com/frin.dev/" 
              aria-label="Instagram"
              className="hover:text-white hover:-translate-y-1 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://x.com/shagufta_dev" 
              aria-label="Twitter"
              className="hover:text-white hover:-translate-y-1 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          
           
          </motion.div>

          {/* Bio - Properly centered text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-stone-300 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl"
          >
            Hi, I'm Shagufta Afrin - a passionate <span className="text-[#d27d5f] font-medium">Full Stack</span> and <span className="text-[#d27d5f] font-medium">UI Developer</span>
            <br className="hidden sm:block" /> I specialize in crafting{" "}
            <span className="text-[#d27d5f] font-semibold">
              modern, high‑converting web experiences
            </span>{" "}
            that help brands stand out in the digital space 🚀
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#d27d5f] to-[#b86950] text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Let's Build Something Amazing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;