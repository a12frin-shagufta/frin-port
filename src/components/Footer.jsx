import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <footer className="relative w-full max-w-4xl bg-[#2a2a30] rounded-2xl mt-16 p-8 text-stone-300 shadow-lg overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_200px,#2d2d35,transparent)] z-0" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Footer nav */}
          <div className="flex flex-wrap justify-center gap-8 text-sm sm:text-base font-medium">
            <a href="#home" className="hover:text-purple-400 transition-colors duration-200">Home</a>
            <a href="#projects" className="hover:text-pink-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-red-400 transition-colors duration-200">Contact</a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-stone-600 opacity-30"></div>

          {/* Footer Text */}
          <p className="text-xs sm:text-sm text-stone-400 text-center leading-relaxed">
            Designed with ❤️ by{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold">
              Shagufta
            </span>
            <br />
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
