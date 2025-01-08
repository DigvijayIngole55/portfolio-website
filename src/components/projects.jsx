"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Carousel Component
const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center">
          <img
            src={image.src}
            alt={`Project Image ${index + 1}`}
            className={`${
              image.orientation === "portrait"
                ? "h-auto max-h-[500px] mx-auto"
                : "w-full max-w-[800px]"
            } object-cover rounded-lg shadow-md`}
          />
        </div>
      ))}
    </Slider>
  );
};

// Projects Component
const Projects = () => {
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
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-background text-textMain py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          Some of My Work
        </h2>
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Project Info */}
              <div className="flex flex-col space-y-4 order-2 md:order-1">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <ul className="list-disc list-inside text-lg text-textSecondary">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Carousel */}
              <div className="order-1 md:order-2">
                <Carousel images={project.images} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
