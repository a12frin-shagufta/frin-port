import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiTypescript, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-300" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-400" },
  { icon: <FaGitAlt />, name: "Git", color: "text-orange-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#e07a5f] mb-2">My Tech Stack</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Technologies I'm proficient in and use regularly to build amazing web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className={`p-5 rounded-xl bg-[#3a3a42]/50 hover:bg-[#3a3a42] hover:shadow-lg transition-all duration-300 group ${skill.color}`}>
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                </div>
                <span className="mt-3 text-sm text-stone-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-stone-400 text-sm"
          >
            <p>Always learning and expanding my skill set with new technologies</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;