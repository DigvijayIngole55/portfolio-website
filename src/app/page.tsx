"use client";
import React from "react";
// Import your sections
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutMe from "../components/about";
import ProjectsSection from "../components/projects";
import Timeline from "../components/timeline";
import ContactSection from "../components/contact";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
      <Header />
      {/* Main content in a flex-1 container so footer sits at bottom */}
      <main className="flex-1">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <Timeline />
        <ContactSection />
      </main>
      <footer className="glass-card text-center py-8 mx-6 mb-6 rounded-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">D</span>
              </div>
              <span className="gradient-text font-semibold">Digvijay Ingole</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Digvijay Ingole. Crafted with passion and innovation.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
