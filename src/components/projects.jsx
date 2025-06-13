import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaPlay, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
      className="relative group reveal-up hover-lift"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      <div className="relative glass-card overflow-hidden">
        {/* Image Carousel */}
        <div className="relative h-72 overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-900/50 to-black/50">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {project.images.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full h-full flex items-center justify-center p-4"
              >
                <img
                  src={image.src}
                  alt={`${project.title} Screenshot ${idx + 1}`}
                  loading="lazy"
                  className={`
                    ${image.orientation === "portrait" ? "h-full w-auto" : "w-full h-auto"}
                    object-contain rounded-lg shadow-2xl
                  `}
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          {project.images.length > 1 && isHovered && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 glass-button p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft className="text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 glass-button p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight className="text-white" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${idx === currentImageIndex 
                      ? 'w-8 bg-gradient-to-r from-yellow-400 to-orange-500' 
                      : 'w-2 bg-white/40 hover:bg-white/60'}
                  `}
                />
              ))}
            </div>
          )}

          {/* Project Type Badge */}
          <div className="absolute top-4 left-4 glass-card px-3 py-1">
            <span className="text-xs font-semibold gradient-text">
              {project.category || 'Featured'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
              <p className="text-sm text-gray-400">
                {project.year || '2024'} • {project.type || 'Full Stack'}
              </p>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <a 
                  href={project.github} 
                  className="glass-button p-3 hover:glow-gold group/btn"
                  aria-label="View on GitHub"
                >
                  <FaGithub className="text-gray-300 group-hover/btn:text-yellow-400 transition-colors" />
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  className="glass-button p-3 hover:glow-orange group/btn"
                  aria-label="View Live Demo"
                >
                  <FaExternalLinkAlt className="text-gray-300 group-hover/btn:text-orange-400 transition-colors" />
                </a>
              )}
              <button className="glass-button p-3 hover:glow-amber group/btn">
                <FaPlay className="text-gray-300 group-hover/btn:text-amber-400 transition-colors" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            {project.description.slice(0, 3).map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 group/item">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                <p className="text-sm text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-400">Technologies Used</p>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((tech, idx) => (
                <span
                  key={idx}
                  className="glass-button px-3 py-1 text-xs font-medium hover:glow-blue transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-white/10">
            <button className="w-full glass-button py-3 font-semibold hover:glow-purple transition-all duration-300 group/cta">
              <span className="gradient-text">View Project Details</span>
              <FaArrowRight className="inline ml-2 group-hover/cta:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const categories = [
    { id: "all", name: "All Projects", count: projectsData.length },
    { id: "mobile", name: "Mobile Apps", count: 2 },
    { id: "web", name: "Web Apps", count: 1 },
    { id: "featured", name: "Featured", count: 3 }
  ];

  const filteredProjects = projectsData.filter(project => 
    filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="liquid-orb w-80 h-80 top-20 right-10" style={{ animationDelay: '2s' }} />
      <div className="liquid-orb w-64 h-64 bottom-40 -left-32" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 reveal-up">
          <p className="text-sm font-medium text-yellow-400 tracking-wider uppercase">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work, demonstrating expertise in modern technologies 
            and innovative problem-solving approaches.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 reveal-up delay-1">
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`
                    px-6 py-3 rounded-xl font-medium transition-all duration-300 group
                    ${filter === category.id 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'}
                  `}
                >
                  <span>{category.name}</span>
                  {category.count > 0 && (
                    <span className={`
                      ml-2 text-xs px-2 py-1 rounded-full
                      ${filter === category.id 
                        ? 'bg-white/20' 
                        : 'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500/30'}
                    `}>
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-16 reveal-up delay-3">
            <button className="glass-button px-8 py-4 font-semibold hover:glow-gold transition-all duration-300 group">
              <span>View All Projects</span>
              <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 reveal-up">
            <div className="glass-card p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <FaPlay className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">No Projects Found</h3>
              <p className="text-gray-400 mb-6">
                No projects match the selected filter. Try selecting a different category.
              </p>
              <button 
                onClick={() => setFilter("all")}
                className="glass-button px-6 py-3 font-semibold hover:glow-gold"
              >
                Show All Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;