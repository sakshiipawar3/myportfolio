import React from 'react';
import { motion } from 'framer-motion';
import amazonClone from '../assets/amazon.gif';
import furnitureShop from '../assets/furniture.gif';

const Project = () => {
  const projects = [
    {
      title: 'Amazon Clone',
      image: amazonClone,
      github: 'https://github.com/sakshiipawar3/Amazonclone',
      live: 'https://sakshiipawar3.github.io/Amazonclone/',
    },
    {
      title: 'Furniture Shop',
      image: furnitureShop,
      github: 'https://github.com/sakshiipawar3/furnitureshop',
      live: 'https://sakshiipawar3.github.io/furnitureshop/',
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6"
    >
      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full opacity-20 blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12 underline underline-offset-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b]/60 border border-purple-500/20 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-purple-500/30 transform transition duration-500 hover:scale-105 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide">
                  {project.title}
                </h3>
                <div className="flex justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded-full shadow-md transition duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-purple-500 hover:bg-purple-600 text-purple-300 hover:text-white rounded-full shadow-md transition duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
