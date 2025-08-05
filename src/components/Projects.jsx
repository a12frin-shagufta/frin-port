import React, { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
  },
  // Add more projects to demonstrate the functionality
  {
    title: "Under construction",
    desc: "A perfume brand showcasing a modern design",
    color: "from-[#1d3b2a] to-[#122a1c]",
    thumbnail: "https://i.pinimg.com/736x/cb/b5/f7/cbb5f72f8f67f113571b872e21d4cd9c.jpg",
    url: "#",
    tags: ["React", "Node.js", "E-commerce"]
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // For mobile sliding
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Choose which projects to display based on view
const isDesktop = window.innerWidth >= 1024;

const displayedProjects = isDesktop
  ? projects
  : showAll
    ? projects
    : [projects[currentSlide]];

  return (
    <section id="projects" className="w-full flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e07a5f] mb-3">Featured Projects</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent works showcasing my design and development skills
          </p>
        </div>
        
        {/* Mobile Controls - Slider Arrows */}
        <div className="lg:hidden flex justify-center items-center mb-6 gap-4">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-[#3a3a42]/50 text-stone-300 hover:bg-[#e07a5f] hover:text-white transition-colors"
            aria-label="Previous project"
          >
            <FiChevronLeft size={24} />
          </button>
          <span className="text-stone-300">
            {currentSlide + 1} / {projects.length}
          </span>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-[#3a3a42]/50 text-stone-300 hover:bg-[#e07a5f] hover:text-white transition-colors"
            aria-label="Next project"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Controls - Show More Toggle */}
        <div className="lg:hidden flex justify-center mb-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-[#3a3a42]/70 text-stone-300 rounded-full text-sm hover:bg-[#e07a5f] hover:text-white transition-colors"
          >
            {showAll ? "Show Less" : `Show All (${projects.length})`}
          </button>
        </div>
        
        {/* Projects Grid - Desktop (2 columns) / Mobile (slider or expanded) */}
        <div className={`${showAll ? "grid grid-cols-1" : "lg:grid lg:grid-cols-2"} gap-8`}>
          {(showAll ? projects : displayedProjects).map((project, index) => (
            <div 
              key={index}
              className="relative group transition-all duration-300 hover:-translate-y-2"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Project Card */}
                <div className={`
                  relative h-full bg-gradient-to-br ${project.color} 
                  rounded-2xl overflow-hidden shadow-xl
                  border border-[#3a3a42] hover:border-[#e07a5f]/30
                  transition-all duration-500
                `}>
                  {/* Thumbnail */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <FaExternalLinkAlt className="text-stone-400 group-hover:text-[#e07a5f] transition-colors mt-1" />
                    </div>
                    
                    <p className="text-stone-300 mb-4">{project.desc}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 bg-[#3a3a42]/70 text-stone-300 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#e07a5f]/10 via-transparent to-transparent" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#e07a5f] to-[#d45a3a] hover:from-[#d45a3a] hover:to-[#e07a5f] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#e07a5f]/20"
          >
            Want a similar project for yourself?
            <FiArrowRight className="ml-3 text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;