import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="h-auto bg-background text-textMain flex items-center mt-0 py-16"

    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Image Section */}
          <div className="flex justify-start">
            <img
              src="/digvijay.jpg" // Ensure this path is correct
              alt="Digvijay Ingole"
              className="w-[300px] md:w-[400px] rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold">About Me</h2>
            <p className="text-lg md:text-xl text-textSecondary">
              I'm Digvijay Ingole, a dedicated Software Engineer with a passion for creating innovative solutions. With a strong foundation in web development and a keen eye for detail, I strive to build applications that are both functional and user-friendly. My journey in technology has equipped me with the skills to tackle complex challenges and continuously learn new technologies.
            </p>
            <p className="text-lg md:text-xl text-textSecondary">
              When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and honing my skills in various programming languages. I'm always eager to collaborate on exciting projects and expand my horizons in the ever-evolving field of software development.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
