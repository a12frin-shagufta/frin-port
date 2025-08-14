import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Background Glow - matches other components */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />
        
        {/* Footer Content - matches padding of other components */}
        <footer className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links - matches navbar styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-6 text-xl text-[#d27d5f]"
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
              <a 
                href="mailto:shagufta7572@gmail.com" 
                aria-label="Email"
                className="hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FiMail />
              </a>
            </motion.div>

            {/* Footer Navigation - matches navbar styling */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm sm:text-base font-medium"
            >
              <a 
                href="#home" 
                className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="hover:text-pink-400 hover:-translate-y-1 transition-all duration-300"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="hover:text-red-400 hover:-translate-y-1 transition-all duration-300"
              >
                Contact
              </a>
            </motion.div>

            {/* Divider - matches other component dividers */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full h-px bg-stone-600 opacity-30 my-2"
            />

            {/* Copyright Text - matches styling */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm text-stone-400 text-center"
            >
              Designed & Built with ❤️ by{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold">
                Shagufta Afrin
              </span>{" "}
              © {new Date().getFullYear()}
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;