import React, { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div
      className="
        relative 
        bg-gray-800/50 
        backdrop-blur-sm 
        rounded-xl 
        overflow-hidden 
        group
        border 
        border-gray-700 
        hover:border-yellow-500 
        transition 
        duration-300
        hover:-translate-y-1 
        hover:shadow-lg 
        hover:shadow-yellow-500/20
      "
    >
      {/* Image Carousel */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-[400px] flex justify-center items-center bg-black"
            >
              <img
                src={image.src}
                alt={`${project.title} Screenshot ${idx + 1}`}
                className={`
                  ${
                    image.orientation === "portrait"
                      ? "max-h-full w-auto object-contain"
                      : "h-auto max-w-full object-contain"
                  }
                  transition-transform 
                  duration-500 
                `}
              />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="
                absolute 
                top-1/2 
                left-4 
                -translate-y-1/2 
                bg-gray-700 
                text-white 
                p-2 
                rounded-full 
                hover:bg-gray-600 
                transition 
                duration-300
              "
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="
                absolute 
                top-1/2 
                right-4 
                -translate-y-1/2 
                bg-gray-700 
                text-white 
                p-2 
                rounded-full 
                hover:bg-gray-600 
                transition 
                duration-300
              "
            >
              ❯
            </button>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <h3
          className="
            text-xl 
            font-bold 
            text-gray-100 
            group-hover:text-yellow-500 
            transition-colors
            duration-300
          "
        >
          {project.title}
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {project.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* Tech Keywords */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.keywords.map((tech, idx) => (
            <span
              key={idx}
              className="
                px-3 
                py-1 
                bg-gray-700/50 
                text-yellow-500 
                text-xs 
                rounded-lg 
                hover:bg-gray-700 
                transition-colors 
                duration-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="projects" className="py-24 relative z-10 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            My <span className="text-yellow-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects where I've applied modern technologies to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
