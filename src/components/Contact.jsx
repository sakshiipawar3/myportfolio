import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6"
    >
      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full opacity-20 blur-3xl z-0"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto border border-purple-500/20 bg-[#1e293b]/50 shadow-lg rounded-2xl px-6 py-12 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-400 underline underline-offset-8">
          Contact Me
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
            >
              📩 Send Message
            </button>
          </div>
        </form>

        {/* Contact Info / Socials */}
        <div className="mt-10 text-center space-y-3">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-md text-gray-300">
            <a href="mailto:sakshipawar@email.com" className="hover:text-purple-400 flex items-center gap-2">
              <FaEnvelope /> sakshipawar@email.com
            </a>
            <a href="tel:+918888888888" className="hover:text-purple-400 flex items-center gap-2">
              <FaPhoneAlt /> +91-88888-88888
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-4 text-xl text-gray-400">
            <a
              href="https://linkedin.com/in/sakshii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sakshiipawar3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
