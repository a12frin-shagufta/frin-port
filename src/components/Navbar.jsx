import React from "react";
import { FaHome, FaFolder, FaTools, FaUserTie } from "react-icons/fa";
import { FcServices, FcLike } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { icon: <FaHome />, label: "Home", href: "#home", glow: "#60a5fa" }, // blue-400
    { icon: <FcServices />, label: "Services", href: "#service", glow: "#f87171" }, // red-400
    { icon: <FaTools />, label: "Skills", href: "#skills", glow: "#f472b6" }, // pink-400
    { icon: <FaFolder />, label: "Projects", href: "#projects", glow: "#d1d5db" }, // gray-300
    { icon: <FcLike />, label: "Testimonials", href: "#testimonials", glow: "#c084fc" }, // purple-400
    { icon: <IoMdMail />, label: "Contact", href: "#contact", glow: "#f87171" }, // red-400
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex w-full justify-center pt-4 px-4 sticky top-0 z-50">
        <div className="w-full max-w-3xl">
          <nav
            className="relative bg-[#2a2a30]/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#3a3a42] 
                       hover:border-[#e07a5f]/30 hover:shadow-[0_0_35px_5px_rgba(224,122,95,0.35)] 
                       transition-all duration-300"
          >
            <div className="flex justify-between items-center px-6 py-3">
              {/* Navigation Icons */}
              <div className="flex gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center px-4 py-2 rounded-lg relative group"
                    style={{ "--glow": item.glow }}
                  >
                    {/* Glow aura */}
                    <span
                      className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, var(--glow) 0%, transparent 70%)`
                      }}
                    />
                    {/* Icon */}
                    <span
                      className="text-2xl relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: "var(--glow)" }}
                    >
                      {item.icon}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Hire Me Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://x.com/shagufta_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-2 bg-gradient-to-r from-[#e07a5f] to-[#d45a3a] 
                             hover:from-[#d45a3a] hover:to-[#e07a5f] text-white text-sm font-medium rounded-xl 
                             hover:shadow-[0_0_35px_6px_rgba(224,122,95,0.4)] transition-all duration-300 gap-2"
                >
                  <FaUserTie />
                  <span>Hire Me</span>
                </a>
              </motion.div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#2a2a30]/95 backdrop-blur-md border-t border-[#3a3a42] shadow-lg">
        <div className="flex justify-around py-2">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center px-2 py-1 relative group"
              style={{ "--glow": item.glow }}
            >
              {/* Glow aura */}
              <span
                className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, var(--glow) 0%, transparent 70%)`
                }}
              />
              {/* Icon */}
              <span
                className="text-xl relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: "var(--glow)" }}
              >
                {item.icon}
              </span>
              <span className="text-[10px] mt-1 text-stone-300">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
