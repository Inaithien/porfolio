// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import projectsData from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen">
        <div className="pt-24 pb-16 flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen">
        <div className="pt-24 pb-16 container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Projet non trouvé</h2>
          <p className="text-gray-300 mb-8">Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
          <Link 
            to="/projects" 
            className="bg-primary-600 text-white py-2 px-6 rounded hover:bg-primary-700 transition duration-300"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Project Header */}
          <div className="mb-10">
            <Link 
              to="/projects" 
              className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
            >
              ← Retour aux projets
            </Link>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <h2 className="text-xl text-gray-300 mb-6">{project.subtitle}</h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools?.map((tool, index) => (
                <span 
                  key={index} 
                  className="bg-gray-700 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project Banner */}
          <div className="mb-10">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Project Description */}
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-primary-400">Contexte</h3>
                <p className="text-gray-300">{project.context}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-primary-400">Description</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </div>
          
          {/* Objectives */}
          <div className="mb-10 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Objectifs</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.objectives?.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
          
          {/* Missions */}
          <div className="mb-10 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Missions</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.missions?.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>
          </div>
          
          {/* Project Steps */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-primary-400">Étapes du Projet</h3>
            <div className="space-y-6">
              {project.steps?.map((step, index) => (
                <div key={index} className="flex bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">{step.name}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-primary-400">Compétences Développées</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <h4 className="text-xl font-bold mb-4 text-primary-600">Compétences Techniques</h4>
                <ul className="space-y-2">
                  {project.skills?.technical.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <h4 className="text-xl font-bold mb-4 text-primary-600">Compétences Transversales</h4>
                <ul className="space-y-2">
                  {project.skills?.transversal.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
                <h4 className="text-xl font-bold mb-4 text-primary-600">Qualités Humaines</h4>
                <ul className="space-y-2">
                  {project.skills?.human.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Digital Responsibility */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-primary-400">Démarche de Numérique Responsable</h3>
            <div className="bg-green-900 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-gray-300">{project.digitalResponsibility}</p>
            </div>
          </div>
          
          {/* Project Images */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-primary-400">Illustrations du Projet</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
              {project.images?.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${project.title} - Illustration ${index + 1}`} 
                  className="rounded-lg shadow-md w-full h-32 object-cover border border-gray-800"
                />
              ))}
            </div>
          </div>
          
          {/* Academic Resources */}
          <div className="mb-10 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Ressources Académiques</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.academicResources?.map((resource, index) => (
                <li key={index}>{resource}</li>
              ))}
            </ul>
          </div>
          
          {/* Conclusion */}
          <div className="mb-10 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Conclusion</h3>
            <p className="text-gray-300">{project.conclusion}</p>
          </div>
          
          {/* Project Link */}
          {project.link && (
            <div className="text-center mb-8">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-600 text-white py-3 px-8 rounded-full hover:bg-primary-700 transition duration-300 inline-block"
              >
                Voir le projet en ligne
              </a>
            </div>
          )}
          
          {/* Navigation between projects */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
            {parseInt(id) > 1 ? (
              <Link 
                to={`/projects/${parseInt(id) - 1}`} 
                className="text-primary-600 hover:text-primary-700"
              >
                ← Projet précédent
              </Link>
            ) : (
              <span></span>
            )}
            
            {parseInt(id) < projectsData.length ? (
              <Link 
                to={`/projects/${parseInt(id) + 1}`} 
                className="text-primary-600 hover:text-primary-700"
              >
                Projet suivant →
              </Link>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;