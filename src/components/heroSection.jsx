import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-yellow-500">Digvijay Ingole</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Software Engineer specializing in building modern, scalable, and
            user-friendly mobile and web applications.
          </p>
          <div className="flex space-x-4">
            {/* Buttons */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Get in Touch
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/digvijay-sanjay-ingole/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="text-yellow-500" />
            </a>
            <a
              href="https://github.com/DigvijayIngole55"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="text-yellow-500" />
            </a>
            <a
              href="mailto:digvijayingole55@gmail.com"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              aria-label="Email"
            >
              <FaEnvelope size={20} className="text-yellow-500" />
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/illustration.png" // Replace with your custom SVG or image
            alt="Tech Illustration"
            className="w-[300px] md:w-[400px] animate-float"
          />
        </div>
      </div>
    </section>
  );
}
