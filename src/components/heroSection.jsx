import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-28 pb-16"
    >
      {/* Liquid Background Orbs */}
      <div className="liquid-orb w-96 h-96 top-20 -left-48" style={{ animationDelay: '0s' }} />
      <div className="liquid-orb w-80 h-80 top-40 -right-40" style={{ animationDelay: '2s' }} />
      <div className="liquid-orb w-64 h-64 bottom-20 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
          {/* Main Heading */}
          <div className="space-y-4 reveal-up">
            <p className="text-sm font-medium text-yellow-400 tracking-wider uppercase opacity-80">
              Software Engineer
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Digvijay
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Crafting innovative digital experiences with{" "}
              <span className="text-white font-semibold">modern technologies</span> and{" "}
              <span className="text-white font-semibold">creative solutions</span>
            </p>
          </div>

          {/* Description */}
          <div className="reveal-up delay-1">
            <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Specializing in mobile and web applications that push the boundaries of what's possible.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal-up delay-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-8 py-4 flex items-center justify-center gap-3 group"
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span className="font-semibold">Download Resume</span>
            </a>
            <a
              href="#contact"
              className="glass-button px-8 py-4 flex items-center justify-center gap-3 group border-2 border-yellow-500/30 hover:border-yellow-400/50"
            >
              <span className="font-semibold">Let's Connect</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start reveal-up delay-3">
            <a
              href="https://www.linkedin.com/in/digvijay-sanjay-ingole/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-4 hover:glow-gold group"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/DigvijayIngole55"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-4 hover:glow-amber group"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="text-yellow-500 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:digvijayingole55@gmail.com"
              className="glass-button p-4 hover:glow-orange group"
              aria-label="Email"
            >
              <FaEnvelope size={20} className="text-orange-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Status Badge */}
          <div className="reveal-up delay-4">
            <div className="glass-card inline-flex items-center gap-3 px-6 py-3 mx-auto lg:mx-0">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="flex justify-center lg:justify-end relative reveal-up delay-2">
          <div className="relative group">
            {/* Floating Glass Container */}
            <div className="glass-card p-8 hover-lift">
              <img
                src="/tech-illustration.svg"
                alt="Tech Illustration"
                className="w-[280px] lg:w-[400px] animate-float filter drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xs font-semibold gradient-text">React</span>
              </div>
              <div className="absolute top-1/4 -left-8 glass-card p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-xs font-semibold gradient-text">Flutter</span>
              </div>
              <div className="absolute bottom-1/4 -right-8 glass-card p-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-xs font-semibold gradient-text">Swift</span>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-3xl -z-10 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-700" />
          </div>
        </div>
      </div>


    </section>
  );
}