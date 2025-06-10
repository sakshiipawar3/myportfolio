import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg'; // Make sure this exists

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white"
    >
      {/* Left - Profile Picture Circle */}
      <div className="w-64 h-64 rounded-full shadow-2xl border-[10px] border-gray-900 overflow-hidden m-6">
        <img
          src={profilePic}
          alt="Sakshi Pawar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="text-center md:text-left max-w-xl">
        <p className="text-black text-lg font-medium mb-2">
          Hi I'm <span className="text-purple-700 font-semibold">Web Developer</span>
        </p>
        <h1 className="text-5xl font-bold text-pink-600 mb-4">Sakshi Pawar</h1>
        <p className="text-black mb-6">
          I can provide clean code and pixel-perfect design. I also make the website more and more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mb-4">
          <a
            href="/resume.pdf"
            download
            className="bg-purple-800 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
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
        <div className="flex gap-4 justify-center md:justify-start text-black text-2xl">
          <a href="https://github.com/sakshiipawar3" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-800 transition" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://www.linkedin.com/feed" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
