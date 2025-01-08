"use client";

import React from "react";

// Experience Component
const Experience = () => {
  const experiences = [
    {
      company: "Chhajed LLC",
      role: "Software Engineer Intern",
      duration: "Aug 2024 – Dec 2024",
      achievements: [
        "Implemented atomic development principles for modular and reusable code.",
        "Designed high-traffic systems, optimizing API usage by synchronizing state across devices.",
        "Collaborated with cross-functional teams to refine UI/UX based on Sigma designs.",
        "Integrated third-party services like Stripe using native channeling in Flutter."
      ],
      techStack: ["Flutter", "Stripe", "Firebase", "Sigma"]
    },
    {
      company: "Mobigic Technologies",
      role: "Software Engineer",
      duration: "Nov 2022 – Jul 2023",
      achievements: [
        "Localized a gold trading app for rural users, improving accessibility and adoption.",
        "Implemented third-party payment services, integrating Razorpay for secure transactions.",
        "Enhanced API efficiency and optimized database queries for scalability during peak usage.",
        "Collaborated closely with product managers and developers, ensuring seamless team workflows."
      ],
      techStack: ["Flutter", "Razorpay", "Firebase", "MySQL"]
    },
    {
      company: "Simba Developers",
      role: "Software Developer Intern",
      duration: "Jun 2021 – Aug 2021",
      achievements: [
        "Led a team of 5 trainees to develop a cross-platform social media application using Flutter.",
        "Facilitated collaboration across team members, ensuring adherence to project milestones and Agile principles.",
        "Designed and implemented key features, including real-time messaging and media uploads, leveraging Firebase and Firestore.",
        "Mentored team members in best coding practices and state management techniques, enhancing code quality."
      ],
      techStack: ["Flutter", "Firebase", "Firestore", "Agile"]
    }
  ];

  return (
    <section className="bg-gray-900 text-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
        02. My Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Company and Role */}
            <div className="mb-4">
              <h3 className="text-xl font-bold">{experience.company}</h3>
              <p className="text-gray-400 text-sm">
                {experience.role} | {experience.duration}
              </p>
            </div>
  
            {/* Achievements */}
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-gray-300"
                >
                  <span className="text-green-400">✔</span>
                  <p>{achievement}</p>
                </li>
              ))}
            </ul>
  
            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Decorative Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-lg"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  
  );
};

export default Experience;
