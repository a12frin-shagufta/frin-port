import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length); 
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { name, role, text, image } = testimonials[current];

  return (
    <section className="w-full flex justify-center pt-12 pb-20">
      <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#2d2d35,transparent)] z-0" />

        {/* Content */}
        <div className="relative z-10 p-8 bg-[#2a2a30] rounded-2xl">
          <h2 className="text-xl font-semibold text-[#e07a5f] mb-6">Testimonials</h2>

          <div className="flex flex-col sm:flex-row gap-6 items-center text-white">
            {/* Text */}
            <div className="flex-1 bg-[#1e1e24] p-4 rounded-xl border border-[#333] text-stone-300">
              <h3 className="text-white font-semibold text-base mb-1">{name}</h3>
              <p className="text-sm text-stone-400 mb-2">{role}</p>
              <p className="text-sm italic">“{text}”</p>
            </div>

            {/* Image */}
            <img
              src={image}
              alt={name}
              className="w-40 h-52 rounded-xl object-cover border border-stone-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;