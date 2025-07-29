import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section className="w-full flex justify-center pt-12 pb-20">
      <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#2d2d35,transparent)] z-0" />
        
        {/* Content */}
        <div className="relative z-10 p-8 text-center bg-[#2a2a30] rounded-2xl">
          <h2 className="text-xl font-semibold text-[#e07a5f] mb-6">My Stack</h2>
          <div className="flex flex-wrap justify-center gap-8 text-5xl text-stone-300">
            <FaReact className="hover:text-cyan-400 hover:scale-110 transition-transform duration-300" />
            <FaNodeJs className="hover:text-green-500 hover:scale-110 transition-transform duration-300" />
            <SiMongodb className="hover:text-green-400 hover:scale-110 transition-transform duration-300" />
            <FaPython className="hover:text-yellow-400 hover:scale-110 transition-transform duration-300" />
            <FaJsSquare className="hover:text-yellow-300 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
