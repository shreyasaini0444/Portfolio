import React, { useState } from 'react';
import { projects } from '../../constants/data';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <button
                  onClick={() => toggleProject(project.id)}
                  className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center"
                >
                  {activeProject === project.id ? 'View Less' : 'View Details'}
                  <Code className="ml-1" size={16} />
                </button>
                
                {activeProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">Highlights:</h4>
                    <ul className="space-y-1 text-gray-600">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-purple-600">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex justify-end">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm text-gray-500 hover:text-purple-600 transition-colors"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Project Details
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;