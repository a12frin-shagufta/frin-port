import React, { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FcServices } from "react-icons/fc";

const projects = [
  //projects
  {
    title: "theexplorers_store",
    desc: "Modern e-commerce website built with React and Node.js featuring seamless shopping experience",
    color: "from-red-800 to-yellow-800",
    glow: "#e07a5f",
    thumbnail: "/image/exp.png",
    url: "https://www.theexplores.com/",
    tags: ["React", "Node.js", "E-commerce"]
  },

  {
    title: "Ai powered 3d website",
   desc: "A personal practice project created to explore 3D web experiences and animations using React and Three.js.",

    color: "from-[#E9762B] to-[#696FC7]",
    glow: "#ff6ea8",
    thumbnail: "https://framerusercontent.com/images/pKvsoBw7PzMwvEKRY0A10BwE.png?width=800&height=1200",
    url: "https://3d-three-gray.vercel.app",
    tags: ["React", "three js"]
  },
  
  {
    title: "Mirror Production",
    desc: "A live, responsive business website with a modern and professional design.",

    color: "from-[#1d3b2a] to-[#122a1c]",
    glow: "#2bb57a",
    thumbnail: "./image/logo.jpg",
    url: "https://www.mirrorholding.com/",
    tags: ["React", "Responsive", "Business"]
  },
  
  {
  title: "Inayaa – Fashion Store",
  desc: "A modern fashion e-commerce website built using Shopify.",
  color: "from-[#B77466] to-[#92487A]",
  glow: "#ff6ea8",
  thumbnail: "/image/girl.png",
  url: "https://girly-store-5129.myshopify.com",
  tags: ["Shopify", "E-commerce", "UI/UX"]
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
      <div className="select-none">
    <section id="projects" className="w-full flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl mx-auto">
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
  style={{ "--glow": project.glow }}
>
  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
    <div
      className={`
        relative h-full bg-gradient-to-br ${project.color}
        rounded-2xl overflow-hidden shadow-xl
        border border-[#3a3a42] transition-all duration-500
        group-hover:ring-2 group-hover:ring-[var(--glow)]
        group-hover:shadow-[0_0_40px_6px_var(--glow)]
      `}
    >
      {/* soft outer aura */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, color-mix(in oklab, var(--glow) 60%, transparent) 0%, transparent 60%)"
        }}
      />

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
          <FaExternalLinkAlt className="text-stone-400 group-hover:text-[var(--glow)] transition-colors mt-1" />
        </div>
        <p className="text-stone-300 mb-4">{project.desc}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full backdrop-blur-sm"
              style={{
                background: "color-mix(in oklab, var(--glow) 18%, #3a3a42)",
                color: "rgba(255,255,255,.9)"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* subtle top fade on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--glow)_20%,transparent)] via-transparent to-transparent" />
      </div>
    </div>
  </a>
</div>

          ))}
        </div>

        {/* CTA Button */}
        {/* CTA Button */}
<div className="text-center mt-14">
  <a
    href="#contact"
    className="relative inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white
               transition-all duration-300 hover:scale-[1.04]
               bg-gradient-to-r from-[#e07a5f] to-[#d45a3a]
               shadow-lg shadow-[#e07a5f]/30
               hover:shadow-[0_0_40px_8px_#e07a5f]
               hover:ring-2 hover:ring-[#e07a5f]"
  >
    {/* glow aura */}
    <span
      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 hover:opacity-100 blur-2xl transition-opacity duration-300"
      style={{
        background: `radial-gradient(circle, rgba(224,122,95,0.6) 0%, rgba(212,90,58,0.4) 40%, transparent 70%)`
      }}
    />
    <span className="relative flex items-center">
      Want a similar project for yourself?
      <FiArrowRight className="ml-3 text-lg" />
    </span>
  </a>
</div>

      </div>
    </section>
    </div>
  );
};

export default Projects;