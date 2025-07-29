import React, { useState } from "react";

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
    <section id="contact" className="py-10">
      <div className="max-w-xl mx-auto bg-[#2a2a30] p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-2 rounded-md bg-[#1b1b1f] text-white outline-none focus:ring-2 ring-purple-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-md bg-[#1b1b1f] text-white outline-none focus:ring-2 ring-pink-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="px-4 py-2 rounded-md bg-[#1b1b1f] text-white outline-none focus:ring-2 ring-red-500 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-2 rounded-md text-white font-semibold hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-400 mt-2 text-center">Message sent successfully! ✅</p>
          )}
          {status === "ERROR" && (
            <p className="text-red-400 mt-2 text-center">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
