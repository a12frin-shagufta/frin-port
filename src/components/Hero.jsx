import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full flex justify-center pt-20 pb-16 text-white mt-16 border-radius-2xl" >
      <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,#2d2d35,transparent)] z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl px-6 text-center"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-white shadow-lg"
        >
          <img
            src="/image/me.png"
            alt="Shagufta Afrin"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Handle */}
        <p className="text-stone-400 mt-4 text-sm">@shagufta_dev</p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">
          Shagufta Afrin
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
          I craft{" "}
          <span className="text-[#d27d5f] font-semibold">
            modern, high‑converting websites
          </span>{" "}
          for brands & businesses that want to stand out online 🚀
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-2xl text-[#d27d5f]">
          <a
            href="https://www.instagram.com/frin.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/shagufta_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/a12frin-shagufta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-[#d27d5f] hover:bg-[#b7654d] text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-[#d27d5f] hover:bg-[#d27d5f] px-6 py-3 rounded-full font-semibold transition shadow-lg"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
