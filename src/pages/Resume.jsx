// src/pages/Resume.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/pfpicture.jpg';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  // CV data - your real information
  const personalInfo = {
    name: "NGUYEN Thien Huy",
    title: "Développeur",
    subtitle: "En recherche d'alternance - Rentrée 2026 (cycle ingénieur informatique)",
    email: "ngthienhuy08@gmail.com",
    phone: "07 67 69 06 10",
    location: "Clermont-Ferrand",
    github: "https://github.com/Inaithien",
    about: "Développeur issu d'un BUT Informatique, orienté back-end et données. Je conçois des back-ends structurés en couches avec API REST, et je maîtrise le SQL, de la modélisation des schémas à l'extraction, la transformation et l'agrégation de données sur plusieurs SGBD. J'accompagne systématiquement mon travail de tests, de contrôles et d'une documentation permettant à un tiers de le reprendre. Rigoureux et méthodique, j'aime analyser un problème pour en comprendre l'origine. Anglais professionnel B2 (IELTS). Je recherche une alternance de développeur back-end pour la rentrée 2026, dans le cadre d'un cycle ingénieur informatique."
  };
  
  const education = [
    {
      degree: "BUT Informatique",
      institution: "IUT du Puy-en-Velay, Université Clermont Auvergne",
      location: "Le Puy-en-Velay",
      period: "2024 - 2026",
      description: "Formation complète en informatique orientée back-end et données : architecture en couches, API REST, modélisation et requêtage de bases de données, scripting.",
      courses: ["API REST & architecture en couches", "Bases de données (SQL/NoSQL)", "Scripting Python/Bash", "Git & Docker"]
    },
    {
      degree: "BTS SIO option SLAM",
      institution: "École Auvergne Formation",
      location: "Clermont-Ferrand",
      period: "2022 - 2024",
      description: "Formation spécialisée en solutions logicielles et applications métiers (SLAM), avec un focus sur le développement et les bases de données.",
      courses: ["Développement d'applications", "Bases de données", "Gestion de projet"]
    },
    {
      degree: "Baccalauréat général",
      institution: "Lycée Thu Duc",
      location: "Hô-Chi-Minh-Ville, Vietnam",
      period: "2016",
      description: "Baccalauréat général obtenu au Vietnam.",
      courses: []
    }
  ];
  
  const experience = [
    {
      position: "Développeur full-stack",
      company: "Aubière Ambulance",
      location: "Stage de fin d'études",
      period: "Mai - Août 2026",
      description: "Développement complet d'un ERP métier (courses, plannings, facturation) en application web progressive.",
      responsibilities: [
        "Conception ERP : développement complet d'un ERP métier (courses, plannings, facturation)",
        "Architecture & déploiement : front React, back Node.js/Express, base PostgreSQL, API REST",
        "Conteneurisation Docker et reverse-proxy Nginx",
        "Qualité : suite de tests automatisés et documentation technique complète (cahier des charges, procédures)"
      ],
      technologies: ["React", "Node.js/Express", "PostgreSQL", "Docker", "Nginx", "API REST"]
    },
    {
      position: "Développeur application hybride",
      company: "Comme une Image",
      location: "Projet UCA",
      period: "Mai - Juil. 2025",
      description: "Développement d'un transpileur Ruby vers JavaScript au sein du framework Atome.",
      responsibilities: [
        "Transpileur Ruby → JavaScript : développement d'un parser convertissant la syntaxe Ruby en JavaScript",
        "Architecture : ORM Objection.js pour compatibilité multi-BDD",
        "Serveur local Fastify, versionnage via Git"
      ],
      technologies: ["Ruby", "JavaScript", "Fastify", "Objection.js", "Git"]
    }
  ];
  
  const skills = {
    technical: [
      { name: "Node.js / Express", level: 85 },
      { name: "SQL (PostgreSQL, MySQL, SQL Server, SQLite)", level: 85 },
      { name: "Python / Java / C#", level: 75 },
      { name: "PHP / Symfony 7", level: 70 },
      { name: "C++", level: 80 },
      { name: "API REST & architecture en couches", level: 85 },
      { name: "Git / Docker", level: 75 }
    ],
    security: [
      { name: "Sécurité applicative (OWASP Top 10, SQL Injection, XSS, CSRF)", level: 80 },
      { name: "Architecture réseau (OSI, TCP/IP, VLANs, DMZ, IPSec)", level: 70 },
      { name: "Authentification & contrôle d'accès (JWT, RBAC, bcrypt)", level: 85 },
      { name: "Protocoles réseau (TCP/UDP, DNS, DHCP, HTTP/S, ARP)", level: 70 },
      { name: "Administration Linux & Windows Server", level: 65 },
      { name: "Conformité & réglementation (RGPD, CNIL, DPIA)", level: 70 }
    ],
    securityTags: [
      "Audit OWASP",
      "Hardening Docker/Nginx",
      "Chiffrement TLS/SSL",
      "Virtualisation VirtualBox",
      "Gestion des incidents",
      "Veille CVE/ANSSI"
    ],
    networkTags: [
      "Routeurs & commutateurs",
      "Topologies (étoile, maillée, anneau)",
      "Segmentation VLAN",
      "Pare-feu & DMZ",
      "IPv4/IPv6",
      "CSMA/CD & CSMA/CA"
    ],
    networks: [
      "Modélisation des schémas",
      "Requêtage SQL & agrégation",
      "Extraction & transformation de données",
      "Contrôle d'intégrité",
      "Scripting Python & Bash"
    ],
    tools: [
      "Node.js / Express",
      "PostgreSQL, MySQL, SQL Server, SQLite, MongoDB",
      "PHP / Symfony 7",
      "Git / Docker",
      "Tests & recette",
      "Documentation & procédures"
    ],
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "B2 IELTS" },
      { name: "Vietnamien", level: "Langue maternelle" }
    ]
  };
  
  const certifications = [
    {
      name: "Anglais professionnel B2",
      issuer: "IELTS",
      date: "Niveau B2",
      level: "B2"
    }
  ];
  
  const interests = [
    {
      title: "Rigueur & détermination",
      description: "Maintien d'un haut niveau de performance malgré 4h de trajet quotidien Clermont ↔ Le Puy pendant deux ans."
    },
    {
      title: "Sport & esprit d'équipe",
      description: "Futsal en compétition départementale, badminton, natation."
    },
    {
      title: "Engagement associatif",
      description: "Membre actif de l'Union des Étudiants Vietnamiens de Clermont-Ferrand."
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
                href="/cv/NGUYENDEV.pdf" 
                download="CV_NGUYEN_Thien_Huy.pdf"
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
                    src={profileImage} 
                    alt="NGUYEN Thien Huy" 
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
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
                  
                  {/* Security & Network Skills */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Sécurité & Réseaux</h4>
                    <div className="space-y-4">
                      {skills.security.map((skill, index) => (
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

                  {/* Security Tags */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Sécurité</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.securityTags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-700 text-blue-400 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Network Tags */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Réseaux</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.networkTags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-700 text-blue-400 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Networks & Systems */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Données & Traitement</h4>
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
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités d'alternance.
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