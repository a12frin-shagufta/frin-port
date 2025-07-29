import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <footer className="w-full max-w-xl bg-[#2a2a30] rounded-2xl mt-16 p-6 text-stone-300 shadow-md">
        <div className="flex flex-col items-center gap-4">
          {/* Footer nav */}
          <div className="flex gap-6 text-sm sm:text-base font-medium">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#contact" className="hover:text-red-400 transition">Contact</a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-stone-600 opacity-30 my-2"></div>

          {/* Footer Text */}
          <p className="text-xs sm:text-sm text-stone-400 text-center">
            Designed with ❤️ by{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold">
              Shagufta
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
