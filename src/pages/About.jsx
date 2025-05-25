// src/pages/About.jsx
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/pfpicture.jpg';

const About = () => {
  // Personal information - customize this with your actual information
  const personalInfo = {
    name: "NGUYEN Thien Huy",
    title: "Développeur Full Stack",
    location: "Clermont-Ferrand, France",
    email: "ngthienhuy08@gmail.com",
    introduction: "Je suis un développeur d'applications et web actuellement en deuxième année de BUT Informatique. Mes atouts ? En plus de mes compétences en développement d'applications, je maîtrise également des technologies du web, ce qui me permet de travailler sur des projets full-stack. Grâce à mes années à l'université, j'ai acquis une solide compréhension des principes de programmation. Je recherche activement un stage de 8 semaines qui me permettra de valider mon année universitaire tout en mettant en pratique mes compétences dans un environnement professionnel",
    description: "Actuellement en formation BUT Informatique au Puy-en-Velay, je me spécialise dans le développement d'applications complètes et la conception de solutions techniques innovantes. Mon parcours m'a permis d'acquérir des compétences solides tant en développement qu'en gestion de projet, avec une sensibilité particulière pour l'accessibilité et le numérique responsable."
  };
  
  // Educational journey
  const education = [
    {
      period: "2024 - Présent",
      degree: "BUT Informatique",
      institution: "Le Puy-en-Velay, France",
      description: "Formation complète en informatique avec spécialisation en développement d'applications et technologies avancées. Cursus incluant le développement d'applications desktop et web, la conception et gestion de bases de données, l'algorithmique avancée, les mathématiques appliquées à l'informatique, et le développement web full-stack avec des frameworks modernes."
    },
    {
      period: "2022 - 2024",
      degree: "BTS SIO (Services Informatiques aux Organisations)",
      institution: "Clermont-Ferrand, France",
      description: "Formation spécialisée en développement et gestion des systèmes d'information couvrant le développement web et applications, la cybersécurité, les réseaux informatiques, et l'algorithmique. Acquisition d'une base solide en programmation et en architecture système."
    }
  ];
  
  // Skills categorized - matching with Home page
  const skills = {
    technical: [
      "JavaScript", "PHP", "C#", ".NET", "Node.js", "Ruby", "C++", 
      "MySQL", "SQLite", "NoSQL", "Microsoft SQL Server", 
      "Symfony", "Unity", "Tauri", "Rust", "Qt", "Git", "Objection.js"
    ],
    transversal: [
      "Gestion de projet", "Analyse des besoins", "Documentation technique", 
      "Architecture logicielle", "Tests logiciels", "Conception de bases de données",
       "Développement Full Stack Applications", "Développement Full Stack Web"
    ],
    human: [
      "Persévérance", "Assiduité", "Discipline", "Communication", "Autonomie", 
      "Créativité", "Résolution de problèmes", "Travail en équipe", "Rigueur",
      "Écoute", "Empathie", "Organisation", "Esprit d'analyse"
    ]
  };
  
  // Career goals - extended version
  const careerGoals = [
    {
      title: "Vision Professionnelle",
      description: "Mon objectif est de devenir un développeur full-stack expert, capable de concevoir et développer des applications complètes de haute qualité. Je souhaite me spécialiser dans la création de solutions techniques innovantes qui allient performance, accessibilité et impact environnemental minimal. Mon ambition est d'intégrer une entreprise technologique dynamique où je pourrai contribuer à des projets stimulants tout en continuant à développer mon expertise technique et mes compétences en leadership.",
      actions: [
        "Approfondir ma maîtrise des technologies modernes (React, Vue.js, frameworks backend avancés)",
        "Développer une expertise en architecture de systèmes distribués et microservices",
        "Acquérir une expérience professionnelle concrète à travers des stages en entreprise et des projets collaboratifs",
        "Me spécialiser dans l'accessibilité web (WCAG), l'éco-conception et le développement durable",
        "Développer des compétences en DevOps et en déploiement d'applications (Docker, CI/CD)",
        "Participer à des projets open source pour contribuer à la communauté développeur"
      ]
    },
    {
      title: "Objectifs à Court Terme",
      description: "Dans les 2-3 prochaines années, je vise à consolider mes compétences techniques à travers des projets concrets et des expériences professionnelles enrichissantes. Je souhaite également développer ma capacité à gérer des projets de bout en bout et acquérir une vision business plus approfondie.",
      actions: [
        "Réaliser un stage en entreprise dans le développement d'applications métier",
        "Contribuer à des projets étudiants ambitieux en équipe multidisciplinaire",
        "Obtenir des certifications techniques reconnues (AWS, Azure, ou Google Cloud)",
        "Développer un portfolio de projets personnels démontrant ma polyvalence technique"
      ]
    },
    {
      title: "Vision à Long Terme",
      description: "À terme, j'aspire à évoluer vers des responsabilités de lead developer ou d'architecte logiciel, où je pourrai guider des équipes techniques et prendre des décisions stratégiques sur l'architecture des systèmes. Je souhaite également rester à la pointe des innovations technologiques et potentiellement créer ma propre entreprise spécialisée dans le développement de solutions durables.",
      actions: [
        "Développer des compétences en management et leadership technique",
        "Me former aux nouvelles technologies émergentes (IA, blockchain, IoT)",
        "Construire un réseau professionnel solide dans l'écosystème tech",
        "Envisager une spécialisation en entrepreneuriat technologique"
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src={profileImage} 
                  alt="NGUYEN Thien Huy" 
                  className="rounded-lg shadow-lg w-full max-w-sm object-cover border border-gray-800"
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
                <h2 className="text-2xl text-primary-400 mb-6">{personalInfo.title}</h2>
                
                <p className="text-lg mb-6 text-gray-300">{personalInfo.introduction}</p>
                <p className="text-gray-300 mb-8">{personalInfo.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">{personalInfo.email}</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    to="/cv" 
                    className="bg-primary-600 text-white py-2 px-6 rounded hover:bg-primary-700 transition duration-300"
                  >
                    Voir mon CV
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border border-primary-500 text-primary-500 py-2 px-6 rounded hover:bg-primary-500 hover:text-white transition duration-300"
                  >
                    Me contacter
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary-400">Parcours académique</h2>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-3 h-3 rounded-full bg-primary-600 mt-2"></div>
                      {index < education.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-600 ml-1.5"></div>
                      )}
                    </div>
                    <div className="flex-grow pb-8">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-primary-400 font-medium">{edu.institution}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary-400">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Technical Skills */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Compétences Techniques</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-700 text-primary-400 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Transversal Skills */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Compétences Transversales</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.transversal.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-700 text-green-400 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Human Skills */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Qualités Humaines</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.human.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-700 text-purple-400 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Career Goals Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary-400">Projet Professionnel</h2>
            <div className="space-y-8">
              {careerGoals.map((goal, index) => (
                <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-primary-400">{goal.title}</h3>
                  <p className="text-gray-300 mb-6">{goal.description}</p>
                  
                  <h4 className="font-semibold mb-3 text-white">Actions concrètes :</h4>
                  <ul className="space-y-2">
                    {goal.actions.map((action, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          {/* Projects Preview Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary-400">Découvrir mes projets</h2>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Envie d'en savoir plus sur mes réalisations ?</h3>
              <p className="text-lg mb-8 text-gray-100">
                Explorez mes projets pour découvrir mon approche, ma méthodologie et mes compétences en action.
              </p>
              <Link 
                to="/projets" 
                className="bg-white text-primary-700 py-3 px-8 rounded-full font-medium hover:bg-gray-100 transition duration-300 inline-block"
              >
                Voir mes projets
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;