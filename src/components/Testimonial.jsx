import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Afandal Clothing Brand",
    role: "Brand Owner",
    text: "Working with her was an amazing experience! She understood my clothing brand’s vision perfectly and brought it to life with a beautiful, modern website. She was patient, creative, and always willing to go the extra mile to make everything perfect. I’m so happy with the result and highly recommend her to anyone looking for a professional website – Afandal Clothing Brand",
    image: "./image/aaa.JPG",
  },
  {
    name: "Irfan Siddique",
    role: "Video Editor",
    text:
      "Shagufta did a fantastic job bringing my website to life. The design is clean, responsive, and exactly what I needed. She was professional, communicative, and delivered everything on time.",
    image: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/510135681_1394954105049725_4014972503922412318_n.jpg?ccb=11-4&oh=01_Q5Aa2AFx8FcF4zhZjnBa0v7iFUOChShcLAQH5YJ5VwewhnfI2A&oe=6895CA75&_nc_sid=5e03e0&_nc_cat=109",
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center pt-16 pb-20 px-4">
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,#2d2d35,transparent)] z-0" />

        {/* Card */}
        <div className="relative z-10 p-10 bg-[#2a2a30]/90 backdrop-blur-md rounded-3xl border border-white/5">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#e07a5f] to-[#f5b461] bg-clip-text text-transparent">
            Testimonials
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-8 text-white"
            >
              {/* Testimonial Text */}
              <div className="flex-1 bg-[#1e1e24]/80 p-6 rounded-2xl border border-white/10 shadow-md">
                <h3 className="font-semibold text-lg mb-1">{testimonials[current].name}</h3>
                <p className="text-sm text-stone-400 mb-3">{testimonials[current].role}</p>
                <p className="text-sm italic leading-relaxed">“{testimonials[current].text}”</p>
              </div>

              {/* Image */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-40 h-52 rounded-2xl object-cover border border-white/10 shadow-md"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
