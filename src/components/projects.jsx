"use client";

import React, { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-300">Loading...</div>;
  }

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-gray-100 relative">
  {/* Transition from About */}
  <div className="wave-divider"></div>

  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-yellow-500">
      My Projects
    </h2>
    <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
      Explore some of my featured projects where I’ve applied modern technologies to solve complex problems.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="relative group">
            <img
              src={project.images[0]?.src}
              alt={project.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-50 transition duration-300"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description[0]}</p>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 text-yellow-500 text-xs rounded-lg shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Transition to Experience */}
  <div className="transition-bottom"></div>
</section>

  );
}
