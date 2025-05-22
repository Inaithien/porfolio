// src/pages/Projects.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Get unique tools from all projects for filter options
  const allTools = [...new Set(projectsData.flatMap(project => project.tools))];
  
  // Filter projects based on selected tool
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tools.includes(filter));
  
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-4">Mes Projets</h1>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Découvrez l'ensemble des projets que j'ai réalisés dans le cadre de ma formation et de mes initiatives personnelles. 
            Chaque projet représente une opportunité d'apprentissage et de développement de compétences.
          </p>
          
          {/* Filter */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                } transition duration-300`}
              >
                Tous
              </button>
              {allTools.map((tool) => (
                <button
                  key={tool}
                  onClick={() => setFilter(tool)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    filter === tool
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                  } transition duration-300`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-800 flex flex-col">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.brief}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-700 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/projects/${project.id}`}
                    className="inline-block bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700 transition duration-300 mt-auto text-center"
                  >
                    Voir le projet
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state if no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-4">Aucun projet ne correspond à ce filtre</h3>
              <p className="text-gray-300 mb-6">Essayez un autre filtre ou consultez tous les projets.</p>
              <button
                onClick={() => setFilter('all')}
                className="bg-primary-600 text-white py-2 px-6 rounded hover:bg-primary-700 transition duration-300"
              >
                Voir tous les projets
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;