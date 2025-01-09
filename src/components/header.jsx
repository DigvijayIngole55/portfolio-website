// header.jsx
import React from "react";
import { FaHome, FaUserAlt, FaBriefcase, FaLaptopCode, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full 
        bg-gradient-to-r from-gray-900 to-black
        bg-opacity-90 
        text-white 
        z-50 
        shadow-md 
        backdrop-blur-md 
        transition-shadow 
        duration-300 
        hover:shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="
            text-2xl 
            font-extrabold 
            text-yellow-500 
            flex 
            items-center
            hover:scale-105 
            transition-all 
            duration-300
          "
        >
          <span className="mr-2">⚡</span>
          Digvijay
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {[
            { name: "Home", icon: FaHome, link: "#home" },
            { name: "About", icon: FaUserAlt, link: "#about" },
            { name: "Projects", icon: FaLaptopCode, link: "#projects" }, // Shifted "Projects" above "Experience"
            { name: "Experience", icon: FaBriefcase, link: "#experience" },
            { name: "Contact", icon: FaEnvelope, link: "#contact" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="
                flex 
                items-center 
                space-x-2 
                text-gray-300 
                hover:text-yellow-400
                transition 
                duration-300
              "
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.link)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <item.icon size={16} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (Placeholder) */}
        <button
          className="
            md:hidden 
            flex 
            items-center 
            text-gray-300 
            hover:text-yellow-500 
            transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
