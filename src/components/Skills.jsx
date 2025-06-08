import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaComments,
  FaPuzzlePiece,
  FaUsers,
} from 'react-icons/fa';

const technicalSkills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
];

const softSkills = [
  { name: 'Communication', icon: <FaComments className="text-pink-400" /> },
  { name: 'Problem Solving', icon: <FaPuzzlePiece className="text-green-500" /> },
  { name: 'Team Collaboration', icon: <FaUsers className="text-indigo-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 animate-gradient-x z-0 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full text-white">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-white inline-block">
          Skills
        </h2>

        {/* Technical Skills Box */}
        <div className="bg-white/80 text-gray-900 p-6 rounded-2xl shadow-xl mb-12 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-4">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white text-gray-800 px-6 py-4 rounded-xl shadow flex items-center gap-3 hover:bg-blue-100 transition transform hover:scale-105"
              >
                {skill.icon}
                <span className="font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Box */}
        <div className="bg-white/80 text-gray-900 p-6 rounded-2xl shadow-xl backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white text-gray-800 px-6 py-4 rounded-xl shadow flex items-center gap-3 hover:bg-purple-100 transition transform hover:scale-105"
              >
                {skill.icon}
                <span className="font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
