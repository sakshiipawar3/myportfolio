import React from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-48 bg-[#0f172a] text-white flex flex-col items-center py-6 shadow-lg z-50">


      {/* Navigation */}
      <nav className="flex flex-col gap-6 w-full text-sm">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center gap-3 px-4 py-2 hover:bg-purple-600 hover:text-white transition rounded-md w-full"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="capitalize font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
