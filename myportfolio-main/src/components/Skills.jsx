import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6"
    >
      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full opacity-20 blur-3xl z-0"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto border border-purple-500/20 rounded-2xl bg-[#1e293b]/50 backdrop-blur-md p-10 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12 underline underline-offset-8">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#0f172a] hover:shadow-lg hover:shadow-purple-500/30 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-white font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
