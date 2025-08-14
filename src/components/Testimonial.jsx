import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Afandal Clothing Brand",
    role: "Brand Owner",
    text: "Working with her was an amazing experience! She understood my clothing brand's vision perfectly and brought it to life with a beautiful, modern website.",
    image: "./image/ai3.png",
  },
  {
    name: "Irfan Siddique",
    role: "Video Editor",
    text: "Shagufta did a fantastic job bringing my website to life. The design is clean, responsive, and exactly what I needed. Professional and communicative.",
    image: "https://pbs.twimg.com/profile_images/1887402146737627136/2oOF8p4x_400x400.jpg",
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e07a5f] mb-3">Client Testimonials</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            What my clients say about working with me
          </p>
        </div>

        <div className="relative">
          {/* Slider Content */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#2a2a30] rounded-2xl p-6 sm:p-8 shadow-lg border border-[#3a3a42] hover:border-[#e07a5f]/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      {/* Image - Smaller and centered */}
                      <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover border-2 border-[#3a3a42] hover:border-[#e07a5f] transition-all duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="text-center md:text-left">
                        <FaQuoteLeft className="text-[#e07a5f] text-xl mb-3 mx-auto md:mx-0" />
                        <p className="text-stone-300 mb-4 text-sm sm:text-base">"{testimonial.text}"</p>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-sm text-stone-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-[#3a3a42] hover:bg-[#e07a5f] transition-all duration-300 shadow-lg"
              >
                <FaChevronLeft className="text-white text-lg" />
              </button>
              <button 
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-[#3a3a42] hover:bg-[#e07a5f] transition-all duration-300 shadow-lg"
              >
                <FaChevronRight className="text-white text-lg" />
              </button>
            </>
          )}
        </div>

        {/* Indicators */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  resetAutoPlay();
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-[#e07a5f] w-6' : 'bg-[#3a3a42] hover:bg-[#e07a5f]/50'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSlider;