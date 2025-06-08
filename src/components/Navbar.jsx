import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-indigo-700 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#home" className="hover:text-indigo-300">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-300">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-300">Projects</a></li>
          <li><a href="#projects" className="hover:text-indigo-300">contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
