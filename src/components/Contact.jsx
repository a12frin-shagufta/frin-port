import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const glowColor = "#e07a5f"; // Matching your brand color

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mkndbqrp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      console.error(err);
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="select-none">
      <section id="contact" className="relative w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8 text-white"
        style={{ "--glow": glowColor }}>
        
        {/* Background Elements - matches Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--glow)]/10 blur-3xl" />
        </div>

        {/* Main Container with glow effects */}
        <motion.div 
          className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl group/contact"
          whileHover={{ 
            boxShadow: `0 0 30px 5px ${glowColor}55`,
            transition: { duration: 0.3 }
          }}
        >
          {/* Background gradient - matches Hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
            {/* Header with glow effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 text-center sm:text-left relative"
            >
              {/* Glow behind header */}
              <span className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full opacity-0 group-hover/contact:opacity-40 blur-xl transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
              />
              
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--glow)] mb-2 relative">Get In Touch</h2>
              <p className="text-stone-400 max-w-2xl mx-auto sm:mx-0">
                Have a project in mind? Let's make it happen!
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Form inputs with glow focus */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group/input"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#1e1e24] border border-[#3a3a42] text-white outline-none focus:ring-2 focus:ring-[var(--glow)] transition-all duration-300 group-hover/input:border-[var(--glow)]/30"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group/input"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-[#1e1e24] border border-[#3a3a42] text-white outline-none focus:ring-2 focus:ring-[var(--glow)] transition-all duration-300 group-hover/input:border-[var(--glow)]/30"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="group/input"
              >
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-[#1e1e24] border border-[#3a3a42] text-white outline-none focus:ring-2 focus:ring-[var(--glow)] resize-none transition-all duration-300 group-hover/input:border-[var(--glow)]/30"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              {/* Submit button with Hero-style glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-2 text-center"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden ${
                    isSubmitting 
                      ? 'bg-[#3a3a42] cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[var(--glow)] to-[#d45a3a] hover:shadow-[0_0_20px_5px_var(--glow)]'
                  }`}
                >
                  {/* Button glow */}
                  <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${glowColor}55 0%, transparent 70%)`
                    }}
                  />
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend className="text-lg relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Status messages */}
              {status === "SUCCESS" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 mt-4 text-sm text-green-400"
                >
                  <FiCheckCircle className="text-lg" />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}
              {status === "ERROR" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 mt-4 text-sm text-red-400"
                >
                  <FiAlertCircle className="text-lg" />
                  <p>Something went wrong. Please try again or email me directly.</p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;