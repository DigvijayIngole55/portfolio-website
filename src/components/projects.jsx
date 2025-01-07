import React, { useEffect, useState } from 'react';
import Carousel from './carousel';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-background text-textMain py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Carousel images={project.images} />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-lg text-textSecondary">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 text-sm rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
