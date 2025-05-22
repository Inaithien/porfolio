// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { 
  SiJavascript, SiPhp, SiSymfony, SiNodedotjs, 
  SiDotnet, SiGit, SiMysql, SiSqlite, SiMongodb 
} from 'react-icons/si';

const Home = () => {
  // Updated project data with your specific projects
  const projectsData = [
    {
      id: 1,
      title: "Application Thermale Universitaire",
      subtitle: "Développement d'application en cours",
      brief: "Application en développement pour la gestion thermale universitaire utilisant des technologies modernes.",
      tools: ["Ruby", "JavaScript", "Tauri", "Rust", "Node.js", "GitHub", "Objection.js"],
      details: "Projet en cours de développement..."
    },
    {
      id: 2,
      title: "Site Web de Gestion Musicale",
      subtitle: "Plateforme de gestion d'événements musicaux",
      brief: "Site web permettant aux administrateurs de tout contrôler et aux utilisateurs de créer, s'inscrire ou supprimer des événements musicaux avec des artistes ou groupes de la base de données.",
      tools: ["PHP", "Symfony", "SQLite3"],
      details: "Système complet de gestion d'événements musicaux avec gestion des artistes et des groupes."
    },
    {
      id: 3,
      title: "Jeu VR Paint Ball",
      subtitle: "Jeu de devinettes en réalité virtuelle",
      brief: "Jeu vidéo développé avec Unity utilisant la réalité virtuelle pour une expérience de paint ball immersive.",
      tools: ["Unity", "C#", "VR"],
      details: "Jeu de paint ball avec mécaniques de devinettes en réalité virtuelle."
    },
    {
      id: 4,
      title: "Projet Vapeur",
      subtitle: "Gestionnaire de liste de jeux vidéo",
      brief: "Application de gestion d'une liste de jeux vidéo utilisant des technologies web modernes.",
      tools: ["PHP", "Node.js", "Express.js", "NoSQL"],
      details: "Plateforme de gestion de collection de jeux vidéo avec base de données NoSQL."
    },
    {
      id: 5,
      title: "Application de Gestion d'Entreprise",
      subtitle: "Solution pour PME (hôtels, restaurants, magasins)",
      brief: "Application permettant aux petites entreprises de gérer leurs activités : enregistrement des clients, paiements, disponibilité des tables/chambres, suivi des revenus et gestion complète de la base de données.",
      tools: ["C#", ".NET", "Microsoft SQL Server"],
      details: "Solution complète de gestion d'entreprise avec tableau de bord analytique et gestion en temps réel."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Modern Hero Section */}
      <section className="hero-section bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="intro-name mb-2">
                Salut, je suis<br />
                <span className="intro-accent">NGUYEN Thien Huy</span>
              </h1>
              
              <div className="mt-8 space-y-3">
                <div className="info-icon">
                  <div className="icon-container">
                    <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <span>Basé au Clermont-Ferrand, France</span>
                </div>
                
                <div className="info-icon">
                  <div className="icon-container">
                    <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span>Développeur Full Stack</span>
                </div>
                
                <div className="info-icon">
                  <div className="icon-container">
                    <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>Étudiant BUT Informatique</span>
                </div>
              </div>

              <p className="mt-8 text-gray-300 text-lg leading-relaxed">
                En tant que développeur passionné basé au Puy-en-Velay, j'apporte précision et innovation créative 
                à chaque projet. Je me spécialise dans la création d'applications web robustes et évolutives qui 
                combinent des technologies de pointe avec des expériences utilisateur intuitives.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="bg-primary-600 text-white py-3 px-8 rounded-full hover:bg-primary-700 transition duration-300 font-semibold"
                >
                  Mes Projets
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-primary-500 text-primary-500 py-3 px-8 rounded-full hover:bg-primary-500 hover:text-white transition duration-300 font-semibold"
                >
                  Me Contacter
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-8 text-center">Compétences Techniques</h2>
                
                {/* Programming Languages & Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-6 text-primary-400">Langages & Technologies</h3>
                  <div className="skills-grid">
                    {/* JavaScript */}
                    <div className="skill-icon bg-yellow-500 text-black">
                      <SiJavascript className="w-6 h-6" />
                    </div>
                    
                    {/* PHP */}
                    <div className="skill-icon bg-purple-500 text-white">
                      <SiPhp className="w-6 h-6" />
                    </div>
                    
                    {/* Symfony */}
                    <div className="skill-icon bg-gray-800 text-white border border-gray-600">
                      <SiSymfony className="w-6 h-6" />
                    </div>
                    
                    {/* Node.js */}
                    <div className="skill-icon bg-green-600 text-white">
                      <SiNodedotjs className="w-6 h-6" />
                    </div>
                    
                    {/* C# */}
                    <div className="skill-icon bg-purple-600 text-white font-bold">
                      C#
                    </div>
                    
                    {/* .NET */}
                    <div className="skill-icon bg-blue-600 text-white">
                      <SiDotnet className="w-6 h-6" />
                    </div>
                    
                    {/* C++ */}
                    <div className="skill-icon bg-blue-500 text-white font-bold text-xs">
                      C++
                    </div>
                    
                    {/* Qt */}
                    <div className="skill-icon bg-green-400 text-black font-bold">
                      Qt
                    </div>
                    
                    {/* Git */}
                    <div className="skill-icon bg-orange-500 text-white">
                      <SiGit className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Databases */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-6 text-primary-400">Bases de Données</h3>
                  <div className="skills-grid">
                    {/* MySQL */}
                    <div className="skill-icon bg-blue-500 text-white">
                      <SiMysql className="w-6 h-6" />
                    </div>
                    
                    {/* SQLite */}
                    <div className="skill-icon bg-gray-500 text-white">
                      <SiSqlite className="w-6 h-6" />
                    </div>
                    
                    {/* MongoDB (NoSQL) */}
                    <div className="skill-icon bg-green-500 text-white">
                      <SiMongodb className="w-6 h-6" />
                    </div>
                    
                    {/* Microsoft SQL Server */}
                    <div className="skill-icon bg-red-600 text-white font-bold text-xs">
                      MSSQL
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-primary-400">Services</h3>
                  <div className="service-list space-y-3">
                    <div className="service-item">
                      <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Développement Full Stack Applications</span>
                    </div>
                    <div className="service-item">
                      <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Développement Full Stack Web</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Education Section - Changed from bg-gray-900 to bg-black */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Mon Parcours</h2>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {/* Timeline Item 1 - LEFT */}
            <ScrollReveal className="timeline-item left dark-card">
              <div className="timeline-point-small"></div>
              <div className="year-color-1 text-3xl font-bold mb-2">2024 - Présent</div>
              <h3 className="text-2xl font-bold mb-2">BUT Informatique</h3>
              <p className="text-gray-300">Le Puy-en-Velay, France</p>
              <p className="mt-4 text-gray-300">
                Formation complète en informatique avec spécialisation en développement d'applications et technologies avancées.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Développement d'applications avancées</span>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Timeline Item 2 - RIGHT */}
            <ScrollReveal className="timeline-item right dark-card">
              <div className="timeline-point-small"></div>
              <div className="year-color-2 text-3xl font-bold mb-2">2022 - 2024</div>
              <h3 className="text-2xl font-bold mb-2">BTS SIO</h3>
              <p className="text-gray-300">Services Informatiques aux Organisations</p>
              <p className="mt-4 text-gray-300">
                Formation spécialisée en développement et gestion des systèmes d'information.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Développement web et applications</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cybersécurité</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Réseaux informatiques</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Algorithmique</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Projects Timeline Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Projets Récents</h2>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {projectsData.map((project, index) => (
              <ScrollReveal 
                key={project.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} dark-card`}
              >
                <div className="timeline-point-small"></div>
                <div className={`text-2xl font-bold mb-2 ${index % 3 === 0 ? 'year-color-1' : index % 3 === 1 ? 'year-color-2' : 'year-color-3'}`}>
                  Projet {project.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-700 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">{project.brief}</p>
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-block bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700 transition duration-300"
                >
                  Voir le projet
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-block bg-primary-600 text-white py-2 px-6 rounded-full hover:bg-primary-700 transition duration-300"
            >
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>

      {/* Updated Footer - Pure Black Theme */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Intéressé par mon profil ?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Vous pouvez me contacter via mes réseaux sociaux ou consulter mon GitHub pour voir mes projets.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
               className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 transition duration-300 border border-gray-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
               className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 transition duration-300 border border-gray-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <Link 
            to="/contact" 
            className="bg-primary-600 text-white py-3 px-8 rounded-full font-bold hover:bg-primary-700 transition duration-300"
          >
            Me Contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;