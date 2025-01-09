import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        py-16 
        text-gray-100 
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-yellow-500">Get</span> in Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaboration, inquiries, or just to say
            hi!
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:digvijayingole55@gmail.com"
            className="
              flex 
              items-center 
              gap-2 
              px-6 
              py-3 
              bg-gray-800 
              text-gray-300 
              border 
              border-gray-600 
              rounded-md 
              hover:text-yellow-500 
              hover:border-yellow-500 
              transition 
              duration-300
            "
            aria-label="Email"
          >
            <FaEnvelope size={20} className="text-yellow-500" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/digvijay-sanjay-ingole/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex 
              items-center 
              gap-2 
              px-6 
              py-3 
              bg-gray-800 
              text-gray-300 
              border 
              border-gray-600 
              rounded-md 
              hover:text-yellow-500 
              hover:border-yellow-500 
              transition 
              duration-300
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} className="text-yellow-500" />
            LinkedIn
          </a>

          <a
            href="https://github.com/DigvijayIngole55"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex 
              items-center 
              gap-2 
              px-6 
              py-3 
              bg-gray-800 
              text-gray-300 
              border 
              border-gray-600 
              rounded-md 
              hover:text-yellow-500 
              hover:border-yellow-500 
              transition 
              duration-300
            "
            aria-label="GitHub"
          >
            <FaGithub size={20} className="text-yellow-500" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
