import React from "react";
import { FaHome, FaFolder, FaTools, FaUserTie } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-6 px-4 sm:px-6">
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

        {/* Navbar Content */}
        <nav className="relative z-10 flex flex-col sm:flex-row justify-between items-center px-6 py-3 sm:py-4 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
          {/* Navigation Icons - now with labels on mobile */}
          <div className="flex justify-center sm:justify-start w-full sm:w-auto mb-3 sm:mb-0">
            <div className="flex gap-4 sm:gap-5 text-xl sm:text-2xl text-stone-300">
              <motion.a
                href="#home"
                whileHover={{ y: -2 }}
                className="flex flex-col sm:flex-row items-center gap-1 hover:text-blue-400 transition-colors duration-300"
              >
                <FaHome />
                <span className="text-xs sm:hidden">Home</span>
              </motion.a>
              <motion.a
                href="#skills"
                whileHover={{ y: -2 }}
                className="flex flex-col sm:flex-row items-center gap-1 hover:text-pink-400 transition-colors duration-300"
              >
                <FaTools />
                <span className="text-xs sm:hidden">Skills</span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                className="flex flex-col sm:flex-row items-center gap-1 hover:text-gray-300 transition-colors duration-300"
              >
                <FaFolder />
                <span className="text-xs sm:hidden">Projects</span>
              </motion.a>
              <motion.a
                href="#testimonials"
                whileHover={{ y: -2 }}
                className="flex flex-col sm:flex-row items-center gap-1 hover:text-purple-400 transition-colors duration-300"
              >
                <FcLike />
                <span className="text-xs sm:hidden">Testimonials</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                className="flex flex-col sm:flex-row items-center gap-1 hover:text-red-400 transition-colors duration-300"
              >
                <IoMdMail />
                <span className="text-xs sm:hidden">Contact</span>
              </motion.a>
            </div>
          </div>

          {/* Hire Me Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex justify-center"
          >
            <a
              href="https://x.com/shagufta_dev"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-sm rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FaUserTie className="hidden sm:block" />
              Hire Me
            </a>
          </motion.div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;