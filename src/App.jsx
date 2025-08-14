import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";



const App = () => {
  // put this string at the top of both files
const CONTAINER = "w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased bg-[#1b1b1f] min-h-screen">
      {/* Background Glow */}
      

      {/* Page Content */}
      <div className="px-6 sm:px-10 max-w-6xl mx-auto">
        <Navbar />

        {/* Section Anchors */}
        <div id="home">
          <Hero />
        </div>

        <div id="service">
          <Services/>
        </div>

        <div id="tools">
          <Skill />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="testimonials">
          <Testimonial />
        </div>

        <div id="contact">
          <Contact />
        </div>

         <div id="footer">
          <Footer/>
        </div>

         
        
      </div>
    </div>
  );
};

export default App;
