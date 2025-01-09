"use client";
import React from "react";
// Import your sections
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutMe from "../components/about";
import ProjectsSection from "../components/projects";
import Experience from "../components/experince";
import ContactSection from "../components/contact";

export default function Home() {
  return (
    
    <div
      className="
        min-h-screen
        bg-gradient-to-b
        from-gray-900 
        via-gray-800 
        to-gray-900 
        bg-gradient-to-b
        bg-[linear-gradient(to bottom, 
          #1a1a1a 0%, 
          #2a2a2a 12.5%, 
          #1a1a1a 25%, 
          #3a3a3a 37.5%, 
          #1a1a1a 50%, 
          #4a4a4a 62.5%, 
          #1a1a1a 75%, 
          #5a5a5a 87.5%, 
          #1a1a1a 100%)]
        text-white
        flex
        flex-col
      "
    >
      <Header />
      {/* Main content in a flex-1 container so footer sits at bottom */}
      <main className="flex-1">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <Experience />
        <ContactSection />
      </main>
      <footer className="bg-transparent text-center py-4">
        {/* Make it transparent so the global gradient shows behind it */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Digvijay Ingole. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
