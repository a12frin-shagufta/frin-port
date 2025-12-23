import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
 

  {
    name: "Samantha Gonzalez",
    role: "betteredballerina",
    text: "Shagufta helped me build an absolutely amazing website page for my ballet content. I am very pleased with the page and with Shagufta's response time. The page is absolutely beautiful, functional and timeless. I couldn't be happier. Thank you!.",
    image: "./image/baleet.jpg",
  },
  {
    name: "theexplorers_store",
    role: "Harshita - Founder",
    text: "he was extremely cooperative, patient, and always responsive to my requests. I’m very satisfied with her work and truly appreciate her support throughout the entire process.",
    image: "./image/exp.png",
  },
   {
    name: "Lustenshus Decor",
    role: "Neeraj Bhatt - Business Owner",
    text: "Shagufta delivered a clean and professional business website for Lustenshus. She understood our requirements clearly, communicated well throughout the project, and delivered exactly what we needed. We are very satisfied with her work.",
    image: "./image/ls.png",
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const glowColor = "#e07a5f";

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

 return (
    <section id="testimonials" className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header remains unchanged */}

        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    className="group relative bg-[#2a2a30]/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-transparent hover:border-[#e07a5f]/30 transition-all duration-300"
                    whileHover={{
                      boxShadow: `0 0 25px -5px ${glowColor}55`,
                    }}
                  >
                    {/* Glow Aura - matches Home component style */}
                    <span
                      className="pointer-events-none absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${glowColor}55 0%, transparent 70%)`
                      }}
                    />
                    
                    {/* Border Glow - matches Home component */}
                    <div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#e07a5f]/50 transition-all duration-300 pointer-events-none"
                    />

                    <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
                      {/* Image with glow effect matching Home component */}
                      <div className="group/image relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                        {/* Image Glow Aura */}
                        <span
                          className="pointer-events-none absolute -inset-1 rounded-full blur-md opacity-0 group-hover/image:opacity-60 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle, ${glowColor}55 0%, transparent 70%)`
                          }}
                        />
                        {/* Image Border Glow */}
                        <div
                          className="absolute inset-0 rounded-full border-2 border-transparent group-hover/image:border-[#e07a5f]/50 transition-all duration-300 pointer-events-none"
                        />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover border-2 border-[#3a3a42] group-hover/image:border-[#e07a5f]/50 transition-all duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="text-center md:text-left">
                        <FaQuoteLeft className="text-[#e07a5f] text-xl mb-3 mx-auto md:mx-0" />
                        <motion.p 
                          className="text-stone-300 mb-4 text-sm sm:text-base"
                          whileHover={{
                            textShadow: `0 0 8px ${glowColor}`,
                            transition: { duration: 0.3 }
                          }}
                        >
                          "{testimonial.text}"
                        </motion.p>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-[#e07a5f] transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-stone-400 group-hover:text-stone-300 transition-colors duration-300">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows with glow effect */}
          {testimonials.length > 1 && (
            <>
              <motion.button 
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="group/arrow absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-[#3a3a42] hover:bg-[#e07a5f] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {/* Arrow Glow */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-0 group-hover/arrow:opacity-60 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${glowColor}55 0%, transparent 70%)`
                  }}
                />
                <FaChevronLeft className="text-white text-lg relative" />
              </motion.button>
              <motion.button 
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="group/arrow absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-[#3a3a42] hover:bg-[#e07a5f] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {/* Arrow Glow */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-0 group-hover/arrow:opacity-60 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${glowColor}55 0%, transparent 70%)`
                  }}
                />
                <FaChevronRight className="text-white text-lg relative" />
              </motion.button>
            </>
          )}
        </div>

        {/* Indicators with glow effect */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  resetAutoPlay();
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-[#e07a5f] w-6' : 'bg-[#3a3a42] hover:bg-[#e07a5f]/50'}`}
                whileHover={{ scale: 1.2 }}
              >
                {current === index && (
                  <span className="absolute inset-0 rounded-full opacity-60 blur-[2px] pointer-events-none"
                    style={{ background: glowColor }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSlider;