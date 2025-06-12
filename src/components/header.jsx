import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaClock, FaLaptopCode, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: FaHome, link: "#home" },
    { name: "About", icon: FaUserAlt, link: "#about" },
    { name: "Projects", icon: FaLaptopCode, link: "#projects" },
    { name: "Experience & Education", icon: FaClock, link: "#timeline" },
    { name: "Contact", icon: FaEnvelope, link: "#contact" },
  ];

  const handleNavClick = (link) => {
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${scrolled 
            ? 'glass-card backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-black font-bold text-lg">D</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Digvijay</h1>
                <p className="text-xs text-gray-400">Software Engineer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.link)}
                  className="glass-button px-4 py-2 flex items-center gap-2 text-sm font-medium hover:glow-gold transition-all duration-300 group"
                >
                  <item.icon className="text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass-button p-3 hover:glow-gold transition-all duration-300"
            >
              {isOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars className="text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-500
          ${isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div
          className={`
            absolute top-0 right-0 h-full w-80 max-w-[80vw] 
            glass-card border-l border-white/20 p-6
            transform transition-transform duration-500
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-8 pt-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="font-bold gradient-text">Menu</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-4">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.link)}
                className="w-full glass-button p-4 flex items-center gap-4 text-left hover:glow-gold transition-all duration-300 group"
              >
                <div className="w-10 h-10 glass-button rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="text-yellow-400" />
                </div>
                <div>
                  <span className="font-medium text-white group-hover:gradient-text transition-colors">
                    {item.name}
                  </span>
                  <p className="text-xs text-gray-400">
                    {item.name === 'Home' && 'Welcome section'}
                    {item.name === 'About' && 'Learn about me'}
                    {item.name === 'Projects' && 'View my work'}
                    {item.name === 'Experience & Education' && 'Career & academic journey'}
                    {item.name === 'Contact' && 'Get in touch'}
                  </p>
                </div>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="glass-card p-4 text-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
              <p className="text-sm text-gray-400">Available for opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}