import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Afandal – Clothing Brand",
    desc: "E‑commerce website built in React & Node.js with a premium UI for a modern clothing brand.",
    color: "bg-gray-900",
    thumbnail: "/image/afandal.png",
    url: "https://afandal.com",
  },
  {
    title: "Irfan Siddique – Video Editor",
    desc: "Dark‑themed portfolio for a video editor, featuring smooth animations & custom transitions.",
    color: "bg-[#3b1d2a]",
    thumbnail: "/image/irfan.jpg",
    url: "https://www.irfansiddiqui.in/",
  }
];

const Projects = () => {
  return (
    <section className="w-full flex justify-center pt-16 pb-16" id="projects">
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_200px,#2d2d35,transparent)] z-0" />

        {/* Content */}
        <div className="relative z-10 p-10 bg-[#2a2a30] rounded-2xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#e07a5f] mb-8 text-center"
          >
            Featured Projects
          </motion.h2>

          {/* Projects List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="space-y-6"
          >
            {projects.map((proj, index) => (
              <motion.a
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-5 ${proj.color} p-5 rounded-xl text-white hover:scale-[1.02] transition-transform duration-300 group`}
              >
                {/* Thumbnail */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="w-20 h-20 rounded-lg object-cover border border-stone-700"
                />

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{proj.title}</h3>
                  <p className="text-sm text-stone-400">{proj.desc}</p>
                </div>

                {/* Arrow */}
                <FiArrowRight className="text-xl text-stone-400 group-hover:text-white transition" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
