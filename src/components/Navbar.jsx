import React from "react";
import { FaHome, FaFolder, FaTools } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-6">
      <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#2d2d35,transparent)] z-0" />

        {/* Navbar Content */}
        <nav className="relative z-10 flex justify-between items-center px-6 py-4 bg-[#2a2a30] rounded-2xl">
          {/* Left: Icons */}
          <div className="flex gap-5 text-2xl text-stone-300">
            <a
              href="#home"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaHome />
            </a>
            <a
              href="#tools"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaTools />
            </a>
            <a
              href="#projects"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaFolder />
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-500 transition-colors duration-200"
            >
              <FcLike />
            </a>
            <a
              href="#contact"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <IoMdMail />
            </a>
          </div>

          {/* Right: Hire Me Button */}
          <div>
            <a
              href="https://x.com/shagufta_dev"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-sm rounded-xl font-semibold hover:scale-105 transition-transform duration-200"
            >
              Hire Me
            </a>
            
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
