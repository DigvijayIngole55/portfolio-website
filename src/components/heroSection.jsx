import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing icons

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-[75vh] bg-background text-textMain flex items-center mb-0"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Text Content */}
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">Digvijay Ingole</h1>
            <p className="text-lg md:text-xl text-textSecondary">
  Software Engineer | Expert in building mobile and web applications with a user-first approach.
</p>

            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
              {/* Download CV Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gold text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition flex items-center justify-center"
              >
                Download CV
              </a>
              
              {/* Social Buttons */}
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yourlinkedinprofile" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                
                {/* GitHub */}
                <a
                  href="https://github.com/yourgithubusername" // Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                
                {/* Email */}
                <a
                  href="mailto:youremail@example.com" // Replace with your email
                  className="p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition flex items-center justify-center"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-end">
            <img
              src="/illustration.png"
              alt="Hero Illustration"
              className="w-[300px] md:w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
