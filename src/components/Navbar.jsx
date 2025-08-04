import React from "react";
import { FaHome, FaFolder, FaTools, FaUserTie } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { icon: <FaHome />, label: "Home", href: "#home", color: "text-blue-400" },
    { icon: <FaTools />, label: "Skills", href: "#skills", color: "text-pink-400" },
    { icon: <FaFolder />, label: "Projects", href: "#projects", color: "text-gray-300" },
    { icon: <FcLike />, label: "Testimonials", href: "#testimonials", color: "text-purple-400" },
    { icon: <IoMdMail />, label: "Contact", href: "#contact", color: "text-red-400" }
  ];

  return (
    <div className="w-full flex justify-center pt-6 px-4 sm:px-6 sticky top-0 z-50">
      <div className="w-full max-w-6xl">
        {/* Navbar Content */}
        <nav className="relative bg-[#2a2a30]/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#3a3a42] hover:border-[#e07a5f]/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:px-6 sm:py-3">
            {/* Navigation Icons */}
            <div className="flex justify-between w-full sm:w-auto mb-2 sm:mb-0">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-[#3a3a42]/50 transition-all duration-200 ${item.color}`}
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-xs mt-1 sm:hidden">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Hire Me Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto mt-2 sm:mt-0"
            >
              <a
                href="https://x.com/shagufta_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center px-5 py-2 bg-gradient-to-r from-[#e07a5f] to-[#d45a3a] hover:from-[#d45a3a] hover:to-[#e07a5f] text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300 gap-2"
              >
                <FaUserTie className="hidden sm:block" />
                <span>Hire Me</span>
              </a>
            </motion.div>
          </div>

          {/* Desktop Labels - appears only on hover */}
          <div className="hidden sm:flex justify-center absolute bottom-0 left-0 right-0 pb-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-8 px-4">
              {navItems.map((item, index) => (
                <span key={index} className={`text-xs font-medium ${item.color}`}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;