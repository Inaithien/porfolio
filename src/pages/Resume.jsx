// src/pages/Resume.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  // CV data - your real information
  const personalInfo = {
    name: "NGUYEN Thien Huy",
    title: "Développeur en BUT Informatique",
    subtitle: "En recherche de stage de 8-12 semaines",
    email: "ngthienhuy08@gmail.com",
    phone: "07 67 69 06 10",
    location: "63100 Clermont Ferrand",
    github: "https://github.com/Inaithien",
    about: "Je suis un développeur d'applications et web actuellement en stage chez Comme une Image où je développe une application thermale innovante multi-plateforme. En deuxième année de BUT Informatique, mes atouts incluent mes compétences en développement full-stack et ma maîtrise des technologies modernes comme Tauri, Rust et des frameworks personnalisés comme ATOME. Cette expérience me permet de travailler sur des projets complexes combinant Ruby, JavaScript et des solutions cross-platform. Grâce à mes années à l'université et mon expérience professionnelle, j'ai acquis une solide compréhension des principes de programmation avancée et des architectures multi-plateforme."
  };
  
  const education = [
    {
      degree: "BUT Informatique Graphique",
      institution: "Université Clermont Auvergne",
      location: "Clermont Ferrand",
      period: "2024 - 2026",
      description: "Formation complète en informatique avec spécialisation en développement d'applications et graphisme. Compétences acquises en programmation, bases de données, conception logicielle, réseaux et systèmes.",
      courses: ["Développement d'applications", "Programmation C#/.NET", "Développement web", "Bases de données", "Réseaux & Systèmes"]
    },
    {
      degree: "BTS SIO (Service Informatique Organisation)",
      institution: "EAF Ecole Auvergne Formation",
      location: "Clermont Ferrand",
      period: "2022 - 2024",
      description: "Formation spécialisée en services informatiques aux organisations avec focus sur le développement et l'administration système.",
      courses: ["Administration Windows Server", "Configuration réseaux", "Développement web", "Gestion de projet"]
    }
  ];
  
  const experience = [
    {
      position: "Développeur Full Stack",
      company: "Comme une Image",
      location: "Stage",
      period: "2024 - Présent",
      description: "Stage de développement d'une application thermale multi-plateforme",
      responsibilities: [
        "Développement d'une application thermale compatible iOS, macOS, Linux, Windows et Android",
        "Utilisation du framework personnalisé ATOME pour intégrer des librairies Ruby dans JavaScript",
        "Implémentation avec Tauri pour l'application desktop cross-platform",
        "Développement backend avec Rust et intégration JavaScript",
        "Gestion de base de données avec Objection.js (ORM)",
        "Création d'un script d'installation automatique pour simplifier le déploiement client",
        "Développement d'une solution one-click pour l'installation complète"
      ],
      technologies: ["JavaScript", "Ruby", "Tauri", "Rust", "ATOME", "Objection.js"]
    },
    {
      position: "Développeur application",
      company: "Projet personnel",
      location: "Clermont Ferrand",
      period: "Novembre 2023 - Avril 2024",
      description: "Création d'une application de gestion pour petite société",
      responsibilities: [
        "Conception et développement d'une application de gestion complète",
        "Implémentation de l'architecture en 3 couches",
        "Développement de l'interface utilisateur en C#",
        "Gestion de base de données avec Microsoft SQL Server",
        "Tests et déploiement de l'application"
      ],
      technologies: ["C#", "SQL Server", ".NET"]
    },
    {
      position: "Développeur web",
      company: "Uekani-art ancestral",
      location: "Remote",
      period: "Août 2023 - Novembre 2023",
      description: "Création d'un site vitrine pour une start-up d'art pour promouvoir ses travaux et événements",
      responsibilities: [
        "Conception et développement du site vitrine",
        "Promotion des travaux artistiques et événements",
        "Maintenance et amélioration continue du site",
        "Adaptation aux demandes spécifiques de la start-up",
        "Optimisation pour le référencement et la performance"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "GitHub"]
    }
  ];
  
  const skills = {
    technical: [
      { name: "C#/.NET", level: 90 },
      { name: "HTML/CSS/JS", level: 85 },
      { name: "Microsoft SQL Server", level: 80 },
      { name: "PHP/Symfony", level: 75 },
      { name: "React", level: 70 },
      { name: "Node.js", level: 70 },
      { name: "C++/Qt", level: 65 }
    ],
    networks: [
      "Configuration routeurs/switchs",
      "Administration Windows Server",
      "Wireshark",
      "VirtualBox"
    ],
    tools: [
      "JetBrains (PHP Storm)",
      "Microsoft SQL Server",
      "XAMPP (SQLite3, MySQL)",
      "Framework (.NET, Qt, Express.js, Symfony, React)",
      "Microsoft Office 365",
      "GitHub"
    ],
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "B2 IELTS" },
      { name: "Vietnamien", level: "Natif" }
    ]
  };
  
  const certifications = [
    {
      name: "IELTS (International English Language Testing System)",
      issuer: "British Council",
      date: "Niveau B2",
      level: "B2"
    }
  ];
  
  const interests = [
    {
      title: "Footballeur passionné",
      description: "J'ai participé au tournoi région du futsal à Lyon et actuellement je suis dans une équipe futsal Latino-Américano."
    },
    {
      title: "Badminton amateur",
      description: "Je joue au badminton le mardi et jeudi toutes les semaines."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
            <p className="text-gray-300 mb-8 max-w-3xl">
              Retrouvez ici mon parcours professionnel et académique, ainsi que l'ensemble de mes compétences.
              Vous pouvez consulter mon CV en ligne ou le télécharger au format PDF.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="/CV_NguyenThienHuy.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-600 text-white py-2 px-6 rounded-full flex items-center hover:bg-primary-700 transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger le CV
              </a>
              <Link 
                to="/contact" 
                className="border border-primary-500 text-primary-500 py-2 px-6 rounded-full flex items-center hover:bg-primary-500 hover:text-white transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Me contacter
              </Link>
            </div>
          </div>
          
          {/* Resume Content */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
            {/* Personal Info Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <img 
                    src="https://placehold.co/200x200/1a1a1a/f97316?text=Photo" 
                    alt="Votre photo" 
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
                  <p className="text-xl mb-2">{personalInfo.title}</p>
                  <p className="text-lg mb-4 text-gray-100">{personalInfo.subtitle}</p>
                  <div className="flex flex-wrap gap-y-2">
                    <div className="w-full md:w-1/2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">À propos de moi</h3>
                <p className="text-gray-100">{personalInfo.about}</p>
              </div>
            </div>
            
            {/* Tabs Navigation */}
            <div className="border-b border-gray-700">
              <nav className="flex space-x-8 px-8">
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`py-4 px-1 ${
                    activeTab === 'experience'
                      ? 'border-b-2 border-primary-600 text-primary-400 font-medium'
                      : 'text-gray-400 hover:text-gray-300'
                  } transition duration-300`}
                >
                  Expériences
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`py-4 px-1 ${
                    activeTab === 'education'
                      ? 'border-b-2 border-primary-600 text-primary-400 font-medium'
                      : 'text-gray-400 hover:text-gray-300'
                  } transition duration-300`}
                >
                  Formation
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`py-4 px-1 ${
                    activeTab === 'skills'
                      ? 'border-b-2 border-primary-600 text-primary-400 font-medium'
                      : 'text-gray-400 hover:text-gray-300'
                  } transition duration-300`}
                >
                  Compétences
                </button>
                <button
                  onClick={() => setActiveTab('certifications')}
                  className={`py-4 px-1 ${
                    activeTab === 'certifications'
                      ? 'border-b-2 border-primary-600 text-primary-400 font-medium'
                      : 'text-gray-400 hover:text-gray-300'
                  } transition duration-300`}
                >
                  Certifications
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'experience' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary-400">Expériences Professionnelles</h3>
                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-3 h-3 rounded-full bg-primary-600 mt-2"></div>
                          <div className="w-0.5 h-full bg-gray-600 ml-1.5"></div>
                        </div>
                        <div className="flex-grow pb-8">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                              <p className="text-primary-400 font-medium">{exp.company}, {exp.location}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded">
                                {exp.period}
                              </span>
                            </div>
                          </div>
                          <p className="mt-2 text-gray-300">{exp.description}</p>
                          <ul className="mt-4 list-disc list-inside space-y-1 text-gray-300">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-gray-700 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'education' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary-400">Formation</h3>
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-3 h-3 rounded-full bg-primary-600 mt-2"></div>
                          <div className="w-0.5 h-full bg-gray-600 ml-1.5"></div>
                        </div>
                        <div className="flex-grow pb-8">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                              <p className="text-primary-400 font-medium">{edu.institution}, {edu.location}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded">
                                {edu.period}
                              </span>
                            </div>
                          </div>
                          <p className="mt-2 text-gray-300">{edu.description}</p>
                          <div className="mt-4">
                            <p className="font-semibold text-white">Cours principaux :</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {edu.courses.map((course, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-700 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary-400">Compétences</h3>
                  
                  {/* Technical Skills */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Programmation</h4>
                    <div className="space-y-4">
                      {skills.technical.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-gray-300">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Networks & Systems */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Réseaux & Systèmes</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.networks.map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-700 text-blue-400 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tools */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Outils</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((tool, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-700 text-green-400 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Languages */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-white">Langues</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {skills.languages.map((lang, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                          <h5 className="font-semibold text-white">{lang.name}</h5>
                          <p className="text-gray-300">{lang.level}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'certifications' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary-400">Certifications & Centres d'intérêt</h3>
                  
                  {/* Certifications */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Certifications</h4>
                    <ul className="space-y-4">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="font-semibold text-white">{cert.name}</p>
                            <p className="text-gray-300 text-sm">{cert.issuer} - {cert.date}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Interests */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-white">Centres d'intérêt</h4>
                    <div className="space-y-4">
                      {interests.map((interest, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                          <h5 className="font-semibold text-primary-400 mb-2">{interest.title}</h5>
                          <p className="text-gray-300">{interest.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Intéressé par mon profil ?</h3>
            <p className="text-gray-300 mb-8">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de stage.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary-600 text-white py-3 px-8 rounded-full font-bold hover:bg-primary-700 transition duration-300"
            >
              Me Contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;