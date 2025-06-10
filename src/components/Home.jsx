import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-white"
      style={{
        background: 'linear-gradient(to right, #00FF7F, #00FA9A)', // Bright green gradient
      }}
    >
      {/* Profile Image Circle */}
      <div className="w-64 h-64 rounded-full shadow-2xl border-[10px] border-gray-900 overflow-hidden m-6">
        <img
          src="/profile.jpg"
          alt="Sakshi Pawar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="text-center md:text-left max-w-xl">
        <p className="text-black text-lg font-medium mb-2">
          Hi I'm <span className="text-purple-700 font-semibold">Frontend Developer</span>
        </p>
        <h1 className="text-5xl font-bold text-pink-600 mb-4">Sakshi Pawar</h1>
        <p className="text-black mb-6">
          I’m a Frontend Developer. I create responsive, user-friendly web interfaces using React, Vite, and Tailwind CSS. I focus on clean code, smooth animations, and modern design that works on every device.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mb-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-900 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="bg-black text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-black text-xl hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black text-xl hover:text-pink-500 transition" />
          </a>
          <a href="https://linkedin.com/in/sakshiipawar3" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black text-xl hover:text-blue-700 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
