import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background text-textMain flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">Digvijay Ingole</h1>
            <p className="text-lg md:text-xl text-textSecondary">
              Software Engineer | Passionate Innovator
            </p>
            <div className="flex space-x-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gold text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
              >
                Contact Info
              </a>
            </div>
          </div>

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