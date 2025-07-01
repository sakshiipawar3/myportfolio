import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0f172a] bg-opacity-95 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-purple-400">Portfolio</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm uppercase font-medium">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] text-white px-6 py-4 space-y-4 transition-all duration-300">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="block text-lg hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
