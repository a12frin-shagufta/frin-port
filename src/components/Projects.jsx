import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Afandal - Clothing Brand",
    desc: "Modern e-commerce website built with React and Node.js featuring seamless shopping experience",
    color: "from-gray-900 to-gray-800",
    thumbnail: "/image/afandal.png",
    url: "https://afandal.com",
    tags: ["React", "Node.js", "E-commerce"]
  },
  {
    title: "Irfan Siddique – Video Editor",
    desc: "Portfolio website with dark theme UI design and custom animations",
    color: "from-[#3b1d2a] to-[#2a121c]",
    thumbnail: "/image/irfan.jpg",
    url: "https://www.irfansiddiqui.in/",
    tags: ["UI Design", "Responsive", "Portfolio"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#e07a5f] mb-2">Featured Projects</h2>
            <p className="text-stone-400 max-w-2xl mx-auto sm:mx-0">
              Here are some of my recent works showcasing my design and development skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gradient-to-br ${project.color} p-5 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Thumbnail with overlay */}
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <FaExternalLinkAlt className="text-stone-400 group-hover:text-[#e07a5f] transition-colors" />
                  </div>
                  
                  <p className="text-sm text-stone-300 mb-3">{project.desc}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-[#3a3a42]/50 text-stone-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#e07a5f]/30 rounded-xl transition-all duration-300 pointer-events-none" />
              </a>
            ))}
          </div>

          {/* View More Button (optional) */}
          <div className="text-center mt-10">
            <a
              href="#contact" // or link to full portfolio
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#e07a5f] to-[#d45a3a] text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Want a similar project?
              <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;