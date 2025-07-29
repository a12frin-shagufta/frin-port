import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative w-full flex justify-center pt-12 text-white">
      {/* Container with background + glow */}
      <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#2d2d35,transparent)] z-0" />
        {/* Main content */}
        <div className="relative z-10 px-6 py-10 text-center bg-[#2a2a30] rounded-2xl">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="/image/me.png"
              alt="Me"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Handle */}
          <p className="text-stone-400 mt-4 text-sm">@shagufta_dev</p>

          {/* Name */}
          <h1 className="text-3xl sm:text-3xl font-bold text-white mt-2">
            Shaguft Afrin
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-4 text-xl text-[#d27d5f]">
            <a href="https://www.instagram.com/frin.dev/" className="hover:text-white transition"><FaInstagram /></a>
            <a href="https://x.com/shagufta_dev" className="hover:text-white transition"><FaXTwitter /></a>
            <a href="https://github.com/a12frin-shagufta" className="hover:text-white transition"><FaGithub /></a>
          </div>

          {/* Bio */}
          <p className="mt-6 text-stone-400 text-sm sm:text-base leading-relaxed">
            Hi, I am Shagufta Afrin - a full Stack and UI Developer
            <br />
            I build sleek, responsive websites that work beautifully across devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
