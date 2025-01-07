"use client";

import Header from "../components/header";
import HeroSection from "../components/heroSection"; 
import AboutMe from "../components/about";
import ProjectSection from "../components/projects";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <HeroSection /> 
        <AboutMe />
        <ProjectSection/>
      </main>
      <footer className="bg-gray-800 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Digvijay Ingole. All Rights Reserved.
      </footer>
    </div>
  );
}
