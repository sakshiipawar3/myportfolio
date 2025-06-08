import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 to-pink-600 text-white text-center px-4"
    >
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Portfolio"
        className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-lg object-cover"
      />

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Pawar Sakshi</h1>

      {/* Description */}
      <p className="text-xl max-w-xl mb-6">
        I'm a Frontend Developer specialized in React, Vite, Tailwind CSS and creating responsive, animated websites.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6 text-3xl mb-6">
        <a
          href="https://www.linkedin.com/feed"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sakshiipawar3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300 mb-6"
      >
        Resume
      </a>
    </section>
  );
};

export default Home;
