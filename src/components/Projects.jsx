import React from "react";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    title: "Afandal - Clothing Brand",
    desc: "Afandal website made in react and node",
    color: "bg-gray-900",
    thumbnail: "/image/afandal.png",
    url: "https://afandal.com",
  },
  {
    title: "Irfan Siddique – Video Editor",
    desc: "A dark theme editor UI design with custom transitions",
    color: "bg-[#3b1d2a]",
    thumbnail: "/image/irfan.jpg",
    url: "https://www.irfansiddiqui.in/",
  }
];

const Projects = () => {
  return (
    <section className="w-full flex justify-center pt-8 pb-12">
      <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#2d2d35,transparent)] z-0" />

        {/* Content */}
        <div className="relative z-10 p-8 bg-[#2a2a30] rounded-2xl">
          <h2 className="text-xl font-semibold text-[#e07a5f] mb-6">Projects</h2>

          <div className="space-y-4">
            {projects.map((proj, index) => (
              <a
                key={index}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 ${proj.color} p-4 rounded-xl text-white hover:scale-[1.01] transition group`}
              >
                {/* Thumbnail */}
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="w-14 h-14 rounded-lg object-cover border border-stone-700"
                />

                {/* Title + description */}
                <div className="flex-1">
                  <h3 className="font-semibold">{proj.title}</h3>
                  <p className="text-sm text-stone-400">{proj.desc}</p>
                </div>

                {/* Arrow */}
                <FiArrowRight className="text-xl text-stone-400 group-hover:text-white transition" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
