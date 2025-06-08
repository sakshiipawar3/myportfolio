import React from 'react';
import amazonClone from '../assets/amazon.gif'; // Replace with actual animated image
import furnitureShop from '../assets/furniture.gif'; // Replace with actual animated image

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
    <section id="projects" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10 text-purple-700">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
              <div className="flex justify-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-900 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
