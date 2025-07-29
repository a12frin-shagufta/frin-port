import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mkndbqrp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.ok || res.status === 200) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      console.error(err);
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="w-full flex justify-center pt-16 pb-20 px-4">
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,#2d2d35,transparent)] z-0" />

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 p-10 bg-[#2a2a30]/90 backdrop-blur-md rounded-3xl border border-white/5"
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#e07a5f] to-[#f5b461] bg-clip-text text-transparent">
            Contact Me
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl bg-[#1b1b1f] text-white outline-none focus:ring-2 ring-pink-400 border border-white/5"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-xl bg-[#1b1b1f] text-white outline-none focus:ring-2 ring-purple-400 border border-white/5"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              name="message"
              rows="5"
              placeholder="Your Message"
              className="px-4 py-3 rounded-xl bg-[#1b1b1f] text-white outline-none focus:ring-2 ring-red-400 border border-white/5 resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>

            {status === "SUCCESS" && (
              <p className="text-green-400 mt-2 text-center">✅ Message sent successfully!</p>
            )}
            {status === "ERROR" && (
              <p className="text-red-400 mt-2 text-center">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
