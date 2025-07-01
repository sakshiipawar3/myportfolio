import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#0f172a] text-white py-8 px-4 text-center relative"
    >
      <p className="text-gray-400">Made with 💜 by Technical One</p>

      <img
        src="/technical-one-logo.png"
        alt="Technical One Logo"
        className="mx-auto mt-2 h-8"
      />

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4 text-xl">
        <a href="https://github.com/sakshiipawar3" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:sakshidevmail@gmail.com" className="hover:text-red-400 transition">
          <FaEnvelope />
        </a>
      </div>

      {/* Scroll To Top Arrow */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
