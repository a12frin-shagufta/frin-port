import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { icon: <FaReact />, color: "hover:text-cyan-400" },
    { icon: <FaNodeJs />, color: "hover:text-green-500" },
    { icon: <SiMongodb />, color: "hover:text-green-400" },
    { icon: <FaPython />, color: "hover:text-yellow-400" },
    { icon: <FaJsSquare />, color: "hover:text-yellow-300" },
  ];

  return (
    <section className="w-full flex justify-center pt-16 pb-20" id="skills">
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_200px,#2d2d35,transparent)] z-0" />

        {/* Content */}
        <div className="relative z-10 p-10 text-center bg-[#2a2a30] rounded-2xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#e07a5f] mb-3"
          >
            My Tech Stack
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-stone-300 mb-10 max-w-xl mx-auto"
          >
            I work with modern technologies to build scalable, responsive, and
            high‑performance web applications.
          </motion.p>

          {/* Skills Icons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex flex-wrap justify-center gap-10 text-6xl text-stone-300"
          >
            {skills.map((s, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.15 }}
                className={`${s.color} transition-all duration-300 cursor-pointer`}
              >
                {s.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
