import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="
        py-16 
        text-gray-100 
        relative
      "
    >
      <div 
        className="
          max-w-7xl 
          mx-auto 
          px-6 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          items-center 
          gap-10 
          relative 
          z-10
        "
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="/digvijay.jpg" // Replace with your actual image
              alt="Digvijay Ingole"
              className="
                w-[300px] 
                h-[400px] 
                rounded-lg
                object-cover 
                shadow-lg
                hover:scale-105 
                transition-transform 
                duration-300 
                ease-in-out
              "
            />
            <div 
              className="
                absolute 
                inset-0 
                bg-yellow-500 
                rounded-lg 
                opacity-0 
                group-hover:opacity-20 
                transition 
                duration-300
              "
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <p className="text-md md:text-lg text-gray-300 leading-relaxed">
            Hi! I’m <span className="text-yellow-500 font-bold">Digvijay Ingole</span>, a dynamic Software Engineer passionate about crafting seamless, scalable, and efficient applications. My expertise lies in building feature-rich mobile and web platforms using <span className="text-yellow-500 font-bold">Flutter</span>, <span className="text-yellow-500 font-bold">Swift</span>, and other cutting-edge technologies. 
          </p>
          <p className="text-md md:text-lg text-gray-300 leading-relaxed">
            With a strong foundation in backend development using <span className="text-yellow-500 font-bold">Node.js</span> and <span className="text-yellow-500 font-bold">Python</span>, I excel at integrating robust architectures and ensuring performance optimization. I’m adept at working with databases such as <span className="text-yellow-500 font-bold">Firebase</span> and <span className="text-yellow-500 font-bold">MongoDB</span>, delivering seamless data synchronization and storage solutions.
          </p>
          <p className="text-md md:text-lg text-gray-300 leading-relaxed">
            My goal is to continually innovate by exploring new technologies and leveraging my skills in both frontend and backend systems to create user-centric solutions that truly make an impact.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-100">Core Skills:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {[
                "Flutter",
                "Swift",
                "Dart",
                "Objective-C",
                "Java",
                "Python",
                "React",
                "Node.js",
                "Firebase",
                "Firestore",
                "SQL",
                "MongoDB",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="
                    px-3 
                    py-1 
                    bg-gray-800 
                    text-yellow-500 
                    text-sm 
                    rounded-lg 
                    shadow-md 
                    hover:shadow-[0_0_10px_5px_rgba(255,215,0,0.5)] 
                    hover:scale-105 
                    transition 
                    duration-300
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
