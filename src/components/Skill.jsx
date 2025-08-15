import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiTypescript, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaReact />,      name: "React",       glow: "#22d3ee" }, // cyan-400
  { icon: <SiNextdotjs />,  name: "Next.js",     glow: "#ffffff" },
  { icon: <FaNodeJs />,     name: "Node.js",     glow: "#22c55e" }, // green-500
  { icon: <SiExpress />,    name: "Express",     glow: "#a3a3a3" }, // neutral-400
  { icon: <SiMongodb />,    name: "MongoDB",     glow: "#34d399" }, // emerald-400
  { icon: <FaJsSquare />,   name: "JavaScript",  glow: "#facc15" }, // yellow-400
  { icon: <SiTailwindcss />,name: "Tailwind CSS",glow: "#38bdf8" }, // sky-400
  { icon: <FaPython />,     name: "Python",      glow: "#ffd43b" },
  { icon: <FaGitAlt />,     name: "Git",         glow: "#f97316" }, // orange-500
];

const Skills = () => {
  const containerGlow = "#e07a5f"; // Matching the section title color
  
  return (
     <div className="select-none">
    <section id="skills" className="w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl group/skills"
        whileHover={{ 
          boxShadow: `0 0 30px 5px ${containerGlow}55`,
          transition: { duration: 0.3 }
        }}
        style={{ "--container-glow": containerGlow }}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

        {/* Additional glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/skills:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 20px 5px ${containerGlow}33`,
            border: `1px solid ${containerGlow}33`
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--container-glow)] mb-2">My Tech Stack</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Technologies I use to build modern, fast, and beautiful web apps
            </p>
          </motion.div>

          {/* Mobile hint */}
          <div className="text-center text-stone-500 text-xs mb-4 sm:hidden">
            ← Swipe to see more →
          </div>

          {/* Grid / Scroll */}
          <div className="sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-x-auto sm:overflow-visible no-scrollbar flex">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[45%] sm:w-auto flex flex-col items-center"
                style={{ "--glow": skill.glow }}
              >
                <div
                  className="
                    group relative p-5 rounded-xl bg-[#3a3a42]/50
                    transition-all duration-300
                    ring-1 ring-white/10
                    hover:bg-[#3a3a42]
                    hover:ring-[var(--glow)]
                    hover:shadow-[0_0_38px_10px_var(--glow)]
                    focus-within:ring-[var(--glow)]
                    focus-within:shadow-[0_0_38px_10px_var(--glow)]
                  "
                >
                  {/* aura behind content */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(80% 80% at 50% 40%, var(--glow) 0%, transparent 70%)"
                    }}
                  />
                  {/* icon */}
                  <div
                    className="relative text-4xl mb-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--glow)" }}
                    aria-hidden
                  >
                    {skill.icon}
                  </div>
                </div>
                <span className="mt-3 text-sm text-stone-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-stone-400 text-sm"
          >
            <p>Always learning and leveling up ⚡</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default Skills;