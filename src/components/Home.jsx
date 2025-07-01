import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4"
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <motion.div
          className="w-full border border-purple-500/20 rounded-xl p-8 sm:p-12 shadow-2xl bg-[#1e293b]/50 backdrop-blur-md"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-4">
            Hi, I'm <span className="text-white">Sakshi Pawar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold mb-6">
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'ReactJS Enthusiast', 'UI/UX Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            I design and build beautiful websites using modern web technologies like ReactJS and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-6">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-700 px-6 py-2 rounded-full text-white font-semibold transition shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-full text-white font-semibold transition shadow-lg"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 justify-center text-2xl">
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
        </motion.div>

        {/* Scroll Down Arrow */}
        <a
          href="#footer"
          className="mt-10 animate-bounce text-purple-400 hover:text-purple-600 transition text-3xl"
        >
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Home;
