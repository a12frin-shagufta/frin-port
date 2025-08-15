import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaLaptopCode, FaUserTie, FaMobileAlt, FaBlog, FaPalette } from "react-icons/fa";

const services = [
  { icon: <FaShoppingCart />, title: "E-Commerce Websites", description: "High-converting online stores with secure payments, product management, and smooth checkout experience." },
  { icon: <FaLaptopCode />, title: "Business Websites", description: "Professional websites to showcase your company, services, and portfolio to attract more clients." },
  { icon: <FaUserTie />, title: "Portfolio Websites", description: "Clean and modern portfolios for models, creators, and freelancers to showcase their work beautifully." },
  { icon: <FaMobileAlt />, title: "Responsive Websites", description: "Fully mobile-friendly designs that work perfectly on phones, tablets, and desktops." },
  { icon: <FaBlog />, title: "Blogs & Content Sites", description: "SEO-friendly blog platforms with easy content management for writers, influencers, and educators." },
  { icon: <FaPalette />, title: "Custom UI/UX Designs", description: "Unique, brand-focused designs that match your style and engage your audience." }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full flex justify-center py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Services I Provide
          </motion.h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-12">
            I can design and develop every kind of website — from personal portfolios to advanced e-commerce platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[#2a2a30] rounded-xl p-6 border border-transparent hover:border-[#d27d5f] transition-all duration-300 overflow-hidden"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#d27d5f]/30 via-[#d27d5f]/10 to-[#d27d5f]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#d27d5f]/20 pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl text-[#d27d5f] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-stone-400 text-sm">{service.description}</p>
              </div>
              
              {/* Popular choice badge (optional) */}
              {index === 2 && (
                <div className="absolute top-0 right-0 bg-[#d27d5f] text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;