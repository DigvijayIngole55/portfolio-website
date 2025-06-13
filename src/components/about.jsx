import React, { useEffect, useRef } from "react";
import { FaCode, FaMobile, FaDatabase, FaCloud, FaBrain } from "react-icons/fa";

export default function AboutMe() {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    skillsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Flutter", level: 95, color: "from-yellow-400 to-yellow-600", icon: FaMobile },
    { name: "Swift", level: 90, color: "from-orange-400 to-red-500", icon: FaCode },
    { name: "React", level: 85, color: "from-orange-400 to-amber-500", icon: FaCode },
    { name: "Node.js", level: 88, color: "from-green-400 to-green-600", icon: FaDatabase },
    { name: "Python", level: 82, color: "from-yellow-400 to-yellow-600", icon: FaCode },
    { name: "Firebase", level: 92, color: "from-amber-400 to-orange-500", icon: FaCloud },
  ];

  const achievements = [
    { label: "Projects Completed", value: "15+", description: "Mobile & Web Applications" },
    { label: "Years Experience", value: "3+", description: "Professional Development" },
    { label: "Technologies", value: "10+", description: "Modern Tech Stack" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="liquid-orb w-72 h-72 top-10 right-10" style={{ animationDelay: '1s' }} />
      <div className="liquid-orb w-96 h-96 bottom-20 -left-20" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 reveal-up">
          <p className="text-sm font-medium text-yellow-400 tracking-wider uppercase">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming ideas into innovative solutions through code, creativity, and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image & Info Section */}
          <div className="relative group reveal-up delay-1">
            <div className="glass-card p-8 hover-lift relative">
              <div className="relative">
                <img
                  src="/digvijay.jpg"
                  alt="Digvijay Ingole"
                  loading="lazy"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                
                {/* Floating Achievement Badges */}
                <div className="absolute -top-6 -right-6 glass-card p-4 animate-float">
                  <div className="text-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full mx-auto mb-2" />
                    <p className="text-xs font-semibold gradient-text">Available</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 glass-card p-6 animate-float" style={{ animationDelay: '1s' }}>
                  <p className="text-sm font-medium text-gray-300 mb-1">Currently Building</p>
                  <p className="text-lg font-bold gradient-text">Next-Gen Apps</p>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-3xl -z-10 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-700" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 reveal-up delay-2">
            {/* Description */}
            <div className="space-y-6">
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Software Engineer with expertise in building innovative mobile and web applications. 
                  My journey spans across cutting-edge technologies, always pushing the boundaries of what's possible.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both frontend and backend development, I create seamless, 
                  scalable solutions that make a real impact on users' lives.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4 gradient-text">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FaMobile, text: "Mobile Development" },
                    { icon: FaCode, text: "Web Development" },
                    { icon: FaDatabase, text: "Backend Systems" },
                    { icon: FaCloud, text: "Cloud Integration" },
                    { icon: FaBrain, text: "AI Integration" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/3 hover:bg-white/6 transition-colors">
                      <item.icon className="text-yellow-400 text-lg" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 text-center hover-lift reveal-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-white mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 reveal-up delay-3">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks, constantly learning and adapting to new trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                ref={(el) => (skillsRef.current[idx] = el)}
                className="glass-card p-6 hover-lift opacity-0 translate-y-4 transition-all duration-700"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="glass-button p-3">
                      <skill.icon className="text-yellow-400 text-lg" />
                    </div>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
                </div>
                
                <div className="relative h-3 glass-card rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: '0%',
                      animation: 'fillProgress 1.5s ease-out forwards',
                      animationDelay: `${idx * 100 + 500}ms`,
                      '--fill-width': `${skill.level}%`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}