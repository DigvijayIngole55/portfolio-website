import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Chhajed LLC",
      role: "Software Engineer Intern",
      duration: "Aug 2024 – Present",
      achievements: [
        "Developed AlienInUsa, a cutting-edge immigration app in Flutter, implementing the Provider architecture for scalability and maintainability.",
        "Built a Jain matrimonial app in Swift using MVC architecture, SwiftUI, and CoreData, facilitating seamless matchmaking and data management.",
        "Designed and implemented a secure document Vault system using AES-256 encryption, increasing user adoption by 40%.",
        "Integrated third-party services like Stripe using native channeling in Flutter for secure and efficient payment processing.",
        "Enhanced app responsiveness using MediaQuery and Flutter animations, boosting user engagement by 30%.",
        "Collaborated with cross-functional teams using Figma designs to refine UI/UX, ensuring a user-friendly experience.",
      ],
      techStack: [
        "Flutter",
        "Swift",
        "Stripe",
        "Firebase",
        "Provider",
        "REST APIs",
        "Git",
        "Jira",
        "Linear",
        "Slack",
      ],
    },
    {
      company: "Mobigic Technologies",
      role: "Software Engineer",
      duration: "Nov 2022 – Jul 2023",
      achievements: [
        "Localized a digital gold trading app for rural users, increasing accessibility and adoption by 20%.",
        "Integrated Razorpay for secure and seamless payment processing, improving transaction reliability.",
        "Optimized API efficiency and database queries, ensuring scalability during peak user activity.",
        "Revamped grocery delivery app UI/UX, enhancing user retention by 25%.",
        "Collaborated with product managers and developers to implement Agile workflows, improving project delivery timelines.",
      ],
      techStack: [
        "Flutter",
        "Razorpay",
        "Redux",
        "Firebase",
        "MySQL",
        "React",
        "Node.js",
        "Python",
      ],
    },
    {
      company: "Simba Developers",
      role: "Software Developer Intern",
      duration: "Jun 2021 – Aug 2021",
      achievements: [
        "Led a team of 5 trainees to develop a cross-platform social media application using Flutter.",
        "Facilitated collaboration across team members, ensuring adherence to Agile principles and timely project delivery.",
        "Designed and implemented real-time messaging and media upload features, leveraging Firebase and Firestore.",
        "Mentored team members on state management techniques, enhancing code quality and team efficiency.",
      ],
      techStack: [
        "Flutter",
        "Firebase",
        "Firestore",
        "AWS",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="
        py-16 
        text-gray-100 
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
  <span className="text-white">My</span>{" "}
  <span className="text-yellow-500">Experience</span>
</h2>


        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="
                mb-10 
                ml-6 
                relative 
                group 
                hover:-translate-y-1 
                transition-transform 
                duration-300
              "
            >
              {/* Timeline Bullet */}
              <div 
                className="
                  absolute 
                  w-4 
                  h-4 
                  bg-yellow-500 
                  rounded-full 
                  -left-2 
                  border-2 
                  border-gray-800
                  group-hover:shadow-[0_0_10px_rgba(255,215,0,0.6)]
                  transition 
                  duration-300
                "
              ></div>

              {/* Experience Card */}
              <div 
                className="
                  bg-gray-800 
                  p-6 
                  rounded-lg 
                  shadow-lg 
                  hover:shadow-xl 
                  hover:shadow-yellow-500/30 
                  transition-shadow 
                  duration-300
                "
              >
                <h3 className="text-xl font-bold">{experience.company}</h3>
                <p className="text-sm text-gray-400 mt-1">{experience.role}</p>
                <p className="text-sm text-gray-400">{experience.duration}</p>
                
                {/* Achievements */}
                <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-400">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experience.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="
                          px-3 
                          py-1 
                          bg-gray-700 
                          text-yellow-500 
                          text-xs 
                          rounded-lg 
                          shadow 
                          hover:shadow-yellow-500/50 
                          transition-shadow 
                          duration-300
                        "
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
    </section>
  );
}
