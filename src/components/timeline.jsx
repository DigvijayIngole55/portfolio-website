import React, { useEffect, useRef } from "react";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaAward, FaCode, FaUniversity } from "react-icons/fa";

export default function Timeline() {
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    // Current Experience
    {
      type: "experience",
      title: "Chhajed LLC",
      subtitle: "Software Engineer Intern",
      duration: "Aug 2024 – May 2025",
      location: "Remote, US",
      logo: "🚀",
      color: "from-yellow-500 to-orange-500",
      achievements: [
        "Developed AlienInUsa, a cutting-edge immigration app in Flutter, implementing the Provider architecture for scalability and maintainability.",
        "Built a Jain matrimonial app in Swift using MVC architecture, SwiftUI, and CoreData, facilitating seamless matchmaking and data management.",
        "Designed and implemented a secure document Vault system using AES-256 encryption, increasing user adoption by 40%.",
        "Integrated third-party services like Stripe using native channeling in Flutter for secure and efficient payment processing.",
      ],
      techStack: ["Flutter", "Swift", "Stripe", "Firebase", "Provider", "REST APIs"],
    },
    
    // Education - Master's Degree
    {
      type: "education",
      title: "Master's in Computer Science",
      subtitle: "California State University, East Bay",
      duration: "2022 – 2024",
      location: "Hayward, CA, USA",
      logo: "🎓",
      color: "from-amber-500 to-yellow-500",
      achievements: [],
      techStack: ["Adv. Algorithms", "Web Systems", "Cybersecurity", "Operating Systems", "Computer Networks", "Database Systems", "Artificial Intelligence", "Machine Learning"],
    },

    // Previous Experience
    {
      type: "experience",
      title: "Mobigic Technologies",
      subtitle: "Software Engineer",
      duration: "Nov 2022 – Jul 2023",
      location: "Pune, India",
      logo: "💡",
      color: "from-orange-500 to-amber-500",
      achievements: [
        "Localized a digital gold trading app for rural users, increasing accessibility and adoption by 20%.",
        "Integrated Razorpay for secure and seamless payment processing, improving transaction reliability.",
        "Optimized API efficiency and database queries, ensuring scalability during peak user activity.",
        "Revamped grocery delivery app UI/UX, enhancing user retention by 25%.",
      ],
      techStack: ["Flutter", "Razorpay", "Redux", "Firebase", "MySQL", "React"],
    },

    // Education - Bachelor's Degree
    {
      type: "education",
      title: "Bachelor's in Computer Engineering",
      subtitle: "Savitribai Phule Pune University",
      duration: "2018 – 2022",
      location: "Pune, India",
      logo: "🎓",
      color: "from-yellow-500 to-amber-500",
      achievements: [],
      techStack: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
    },

    // Early Experience
    {
      type: "experience",
      title: "Simba Developers",
      subtitle: "Software Developer Intern",
      duration: "Jun 2021 – Aug 2021",
      location: "Pune, India",
      logo: "🌟",
      color: "from-amber-500 to-orange-500",
      achievements: [
        "Led a team of 5 trainees to develop a cross-platform social media application using Flutter.",
        "Facilitated collaboration across team members, ensuring adherence to Agile principles and timely project delivery.",
        "Designed and implemented real-time messaging and media upload features, leveraging Firebase and Firestore.",
      ],
      techStack: ["Flutter", "Firebase", "Firestore", "AWS"],
    },
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="liquid-orb w-96 h-96 top-10 -right-20" style={{ animationDelay: '1s' }} />
      <div className="liquid-orb w-64 h-64 bottom-20 -left-32" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20 reveal-up">
          <p className="text-sm font-medium text-yellow-400 tracking-wider uppercase">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive timeline of my professional experience and educational background, 
            showcasing growth and learning in technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-amber-500 to-orange-500 opacity-50"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (timelineRef.current[index] = el)}
              className={`
                timeline-item opacity-0 relative flex items-center mb-20
                ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
              `}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 z-20">
                <div className="relative group">
                  <div className={`w-16 h-16 glass-card rounded-full flex items-center justify-center text-2xl hover-lift bg-gradient-to-r ${item.color} shadow-2xl`}>
                    {item.logo}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse`}></div>
                  
                  {/* Type Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="glass-card px-2 py-1 rounded-full">
                      {item.type === 'experience' ? (
                        <FaBriefcase className="text-yellow-400 text-xs" />
                      ) : (
                        <FaGraduationCap className="text-yellow-400 text-xs" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`ml-24 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <div className="glass-card p-8 hover-lift group">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-3xl blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700 -z-10`} />
                  
                  {/* Header */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold gradient-text mb-2">{item.title}</h3>
                        <p className="text-xl font-semibold text-white mb-1">{item.subtitle}</p>
                      </div>
                      <div className="glass-button p-3">
                        {item.type === 'experience' ? (
                          <FaBuilding className="text-yellow-400" />
                        ) : (
                          <FaUniversity className="text-yellow-400" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-2 text-gray-400">
                        <FaCalendarAlt className="text-yellow-400" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-2 text-gray-400">
                        <FaMapMarkerAlt className="text-orange-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements/Coursework */}
                  {item.type === 'experience' && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <FaAward className="text-yellow-400" />
                        <h4 className="font-semibold text-gray-300">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 mr-3 group-hover/item:scale-150 transition-transform" />
                            <span className="text-sm text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack / Subjects */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FaCode className="text-amber-400" />
                      <h4 className="font-semibold text-gray-300">
                        {item.type === 'experience' ? 'Technologies' : 'Key Subjects'}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="glass-button px-3 py-2 text-xs font-medium hover:glow-gold transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 reveal-up delay-2">
          {[
            { icon: FaBriefcase, label: "Years Experience", value: "3+", description: "Professional development", color: "from-yellow-500 to-orange-500" },
            { icon: FaGraduationCap, label: "Degrees", value: "2", description: "Academic qualifications", color: "from-amber-500 to-yellow-500" },
            { icon: FaBuilding, label: "Companies", value: "3", description: "Professional experience", color: "from-orange-500 to-amber-500" },
            { icon: FaCode, label: "Technologies", value: "15+", description: "Technical expertise", color: "from-yellow-500 to-amber-500" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-card p-6 text-center hover-lift">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                <stat.icon className="text-white text-xl" />
              </div>
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-item {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(30px);
        }
        
        .timeline-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}