import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaStar, FaCode } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "digvijayingole55@gmail.com",
      href: "mailto:digvijayingole55@gmail.com",
      color: "from-yellow-400 to-yellow-600",
      description: "Best way to reach me"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Digvijay Ingole",
      href: "https://www.linkedin.com/in/digvijay-sanjay-ingole/",
      color: "from-yellow-500 to-orange-500",
      description: "Let's connect professionally"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "@DigvijayIngole55",
      href: "https://github.com/DigvijayIngole55",
      color: "from-gray-600 to-gray-800",
      description: "Check out my code"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="liquid-orb w-80 h-80 top-20 right-20" style={{ animationDelay: '1s' }} />
      <div className="liquid-orb w-96 h-96 bottom-10 -left-40" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20 reveal-up">
          <p className="text-sm font-medium text-yellow-400 tracking-wider uppercase">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal-up delay-1">
            <div className="glass-card p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="glass-button p-3">
                  <FaPaperPlane className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                  <p className="text-gray-400 text-sm">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 glass-button focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 glass-button focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 glass-button focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 resize-none transition-all"
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full glass-button bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold py-4 flex items-center justify-center gap-3 group hover:glow-gold transition-all duration-300"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Additional Cards */}
          <div className="space-y-6 reveal-up delay-2">
            {/* Contact Methods */}
            <div className="glass-card p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="glass-button p-3">
                  <FaEnvelope className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <p className="text-gray-400 text-sm">Choose your preferred way to connect</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 glass-button hover:bg-white/10 transition-all group hover-lift"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform shadow-lg`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{info.label}</p>
                      <p className="text-sm text-gray-400">{info.value}</p>
                      <p className="text-xs text-gray-500">{info.description}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <span className="font-semibold text-lg">Currently Available</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                I'm open to freelance projects, full-time opportunities, and exciting collaborations. 
                Let's create something amazing together!
              </p>
              <div className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="text-green-400" />
                <span className="text-gray-300">Responding within 24 hours</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-6 hover-lift">
              <h4 className="font-semibold mb-4 text-lg">Why Work With Me?</h4>
              <div className="space-y-3">
                {[
                  { icon: FaStar, text: "3+ years of experience", color: "text-yellow-400" },
                  { icon: FaCheckCircle, text: "25+ projects completed", color: "text-green-400" },
                  { icon: FaCode, text: "Modern tech stack expertise", color: "text-yellow-400" },
                  { icon: FaPaperPlane, text: "Fast and reliable delivery", color: "text-orange-400" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className={`${item.color} text-sm`} />
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal-up delay-3">
          <div className="glass-card p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss your ideas and bring them to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:digvijayingole55@gmail.com"
                className="glass-button px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold hover:glow-gold transition-all duration-300 group"
              >
                <span>Start a Project</span>
                <FaPaperPlane className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-8 py-3 font-semibold hover:glow-gold transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}