import React from 'react';
import { FaHome, FaUserAlt, FaCode, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa'; // Import icons

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background text-textMain shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-gold">🌟</span>
          Digvijay Ingole
        </div>

        <nav className="flex space-x-6 text-base font-medium">
          <a
            href="#home"
            className="flex items-center text-textSecondary hover:text-gold transition duration-300"
          >
            <FaHome className="mr-2" /> Home
          </a>
          <a
            href="#about"
            className="flex items-center text-textSecondary hover:text-gold transition duration-300"
          >
            <FaUserAlt className="mr-2" /> About
          </a>
          <a
            href="#skills"
            className="flex items-center text-textSecondary hover:text-gold transition duration-300"
          >
            <FaCode className="mr-2" /> Skills
          </a>
          <a
            href="#work"
            className="flex items-center text-textSecondary hover:text-gold transition duration-300"
          >
            <FaProjectDiagram className="mr-2" /> Work
          </a>
          <a
            href="#contact"
            className="flex items-center text-textSecondary hover:text-gold transition duration-300"
          >
            <FaPhoneAlt className="mr-2" /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}