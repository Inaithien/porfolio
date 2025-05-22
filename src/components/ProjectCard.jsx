// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-800 flex flex-col">
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
  );
};

export default ProjectCard;