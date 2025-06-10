import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6"
      style={{
        background: 'linear-gradient(to right, #00FF7F, #00FA9A)', // gradient green background
      }}
    >
      {/* Left Circle Image Placeholder */}
      <div className="w-64 h-64 bg-transparent border-[10px] border-gray-900 rounded-full shadow-2xl m-6"></div>

      {/* Right Content */}
      <div className="text-center md:text-left max-w-xl">
        <p className="text-black text-lg font-medium mb-2">
          Hi I'm <span className="text-purple-700 font-semibold">Web Developer</span>
        </p>
        <h1 className="text-5xl font-bold text-pink-600 mb-4">Sakshi pawar</h1>
        <p className="text-black mb-6">
          I can provide clean code and pixel perfect design. I also make the website more & more interactive
          with web animations. A responsive design makes your website accessible to all users, regardless of their device.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mb-4">
          <button className="bg-purple-900 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
            download cv
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
            Contact
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <FaFacebook className="text-black text-xl hover:text-blue-600 transition" />
          <FaInstagram className="text-black text-xl hover:text-pink-500 transition" />
          <FaLinkedin className="text-black text-xl hover:text-blue-700 transition" />
        </div>
      </div>
    </section>
  );
};

export default Home;
