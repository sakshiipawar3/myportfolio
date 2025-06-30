import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImg from '../assets/profile.jpg'; // ✅ Replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6"
    >
      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full opacity-20 blur-3xl z-0"></div>

      <motion.div
        className="w-full max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10 border border-purple-500/20 bg-[#1e293b]/50 shadow-lg rounded-2xl px-6 py-12 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={250}>
            <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg hover:shadow-purple-400 transition">
              <img src={profileImg} alt="Sakshi Pawar" className="w-full h-full object-cover" />
            </div>
          </Tilt>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-purple-400">About Me</h2>

          <h3 className="text-lg text-cyan-300 font-semibold mb-4">
            <Typewriter
              words={['Front-End Developer', 'React Enthusiast', 'UI/UX Designer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="text-purple-300 font-medium">Sakshi Pawar</span>, a BCA graduate passionate about building sleek, high-performance web apps with <span className="text-cyan-400">React.js</span> and <span className="text-pink-400">Tailwind CSS</span>.
            <br /><br />
            Skilled in <span className="text-yellow-400 font-medium">JavaScript, HTML, CSS, Bootstrap</span>, and completed 6 months of experience at <span className="text-purple-300 font-semibold">IT Education Center</span>.
            I’ve built real-world student projects that shaped my frontend and freelance journey. I enjoy crafting clean interfaces and fast, interactive user experiences.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
