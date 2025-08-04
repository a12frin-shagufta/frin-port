import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Afandal Clothing Brand",
    role: "Brand Owner",
    text: "Working with her was an amazing experience! She understood my clothing brand's vision perfectly and brought it to life with a beautiful, modern website. She was patient, creative, and always willing to go the extra mile to make everything perfect.",
    image: "./image/ai3.png",
  },
  {
    name: "Irfan Siddique",
    role: "Video Editor",
    text: "Shagufta did a fantastic job bringing my website to life. The design is clean, responsive, and exactly what I needed. She was professional, communicative, and delivered everything on time.",
    image: "https://pbs.twimg.com/profile_images/1887402146737627136/2oOF8p4x_400x400.jpg",
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const { name, role, text, image } = testimonials[current];

  return (
    <section id="testimonials" className="w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#e07a5f]">Client Testimonials</h2>
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-[#3a3a42] hover:bg-[#e07a5f] transition-all duration-300"
              >
                <FaChevronLeft className="text-white" />
              </button>
              <button 
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-[#3a3a42] hover:bg-[#e07a5f] transition-all duration-300"
              >
                <FaChevronRight className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center text-white transition-opacity duration-500">
            {/* Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative group">
                <img
                  src={image}
                  alt={name}
                  className="w-48 h-64 sm:w-56 sm:h-80 rounded-xl object-cover border-2 border-[#3a3a42] group-hover:border-[#e07a5f] transition-all duration-500 shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#e07a5f]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-2/3 bg-[#1e1e24]/90 p-6 rounded-xl border border-[#3a3a42] hover:border-[#e07a5f] transition-all duration-500">
              <FaQuoteLeft className="text-[#e07a5f] text-2xl mb-4 opacity-70" />
              <p className="text-sm sm:text-base text-stone-300 mb-6 leading-relaxed">"{text}"</p>
              
              <div className="border-t border-[#3a3a42] pt-4">
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-sm text-stone-400">{role}</p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-[#e07a5f] w-6' : 'bg-[#3a3a42] hover:bg-[#e07a5f]/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;