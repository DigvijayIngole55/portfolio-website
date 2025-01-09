import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        h-screen 
        text-white 
        flex 
        items-center 
        relative 
        overflow-hidden
        py-16
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-yellow-500 hover:animate-pulse transition duration-300">
              Digvijay Ingole
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-[90%]">
            A passionate Software Engineer who specializes in creating modern, scalable, and user-friendly mobile and web applications.
          </p>
          <p className="text-gray-400 text-base md:text-lg max-w-[85%]">
            Let’s collaborate and bring innovative ideas to life!
          </p>

          <div className="flex space-x-4">
            {/* Buttons */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 
                py-3 
                bg-yellow-500 
                text-black 
                font-medium 
                rounded-lg 
                shadow-md 
                hover:bg-yellow-600 
                transition 
                duration-300
                hover:scale-105
              "
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="
                px-6 
                py-3 
                border 
                border-yellow-500 
                text-yellow-500 
                rounded-lg 
                hover:bg-yellow-500 
                hover:text-black 
                transition 
                duration-300
                hover:scale-105
              "
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
              className="
                p-3 
                bg-gray-700 
                rounded-full 
                hover:bg-gray-600 
                transition 
                duration-300
              "
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="text-yellow-500" />
            </a>
            <a
              href="https://github.com/DigvijayIngole55"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3 
                bg-gray-700 
                rounded-full 
                hover:bg-gray-600 
                transition 
                duration-300
              "
              aria-label="GitHub"
            >
              <FaGithub size={20} className="text-yellow-500" />
            </a>
            <a
              href="mailto:digvijayingole55@gmail.com"
              className="
                p-3 
                bg-gray-700 
                rounded-full 
                hover:bg-gray-600 
                transition 
                duration-300
              "
              aria-label="Email"
            >
              <FaEnvelope size={20} className="text-yellow-500" />
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div
          className="
            flex 
            justify-center 
            md:justify-end
            relative
          "
        >
          <img
            src="/illustration.png"
            alt="Tech Illustration"
            className="
              w-[280px] 
              md:w-[380px] 
              animate-float
            "
          />
        </div>
      </div>
    </section>
  );
}
