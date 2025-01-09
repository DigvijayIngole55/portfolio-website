import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100 relative"
    >
      {/* Transition from Hero */}
      <div className="wave-divider"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="/profile-image.jpg" // Replace with your actual image
              alt="Digvijay Ingole"
              className="w-[300px] h-[300px] rounded-full object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-20 transition duration-300"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m Digvijay Ingole, a passionate Software Engineer with a focus on
            crafting modern, scalable, and user-friendly applications. With
            expertise in mobile and web development, I enjoy solving complex
            challenges and staying at the forefront of emerging technologies.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond coding, I thrive on exploring cutting-edge tools and
            collaborating with teams to deliver impactful solutions. My
            philosophy is to blend innovation with functionality to create
            seamless user experiences.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              Core Skills:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Flutter",
                "React",
                "Node.js",
                "Firebase",
                "Python",
                "Tailwind CSS",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-gray-800 text-yellow-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transition to Projects */}
      <div className="transition-bottom"></div>
    </section>
  );
}

