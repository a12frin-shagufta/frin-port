import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Background Glow - matches Testimonial */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a42] via-transparent to-transparent opacity-60 z-0" />

        {/* Content - same padding as Testimonial */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 bg-[#2a2a30]/90 backdrop-blur-sm rounded-3xl">
          {/* Header - matches Testimonial styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 text-center sm:text-left"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#e07a5f] mb-2">Get In Touch</h2>
            <p className="text-stone-400 max-w-2xl mx-auto sm:mx-0">
              Have a project in mind? Let's make it happen!
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Form inputs - matching Testimonial card spacing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-[#1e1e24] border border-[#3a3a42] text-white outline-none focus:ring-2 focus:ring-[#e07a5f] transition-all duration-300"
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
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-[#1e1e24] border border-[#3a3a42] text-white outline-none focus:ring-2 focus:ring-[#e07a5f] transition-all duration-300"
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
            >
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-[#1e1e24] border border-[#3a3a42] text-white outline-none focus:ring-2 focus:ring-[#e07a5f] resize-none transition-all duration-300"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Button - matches Testimonial button styling */}
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
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-[#3a3a42] cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#e07a5f] to-[#d45a3a] hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Status messages - matching Testimonial text styling */}
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
      </div>
    </section>
  );
};

export default Contact;