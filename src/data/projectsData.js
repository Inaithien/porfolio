// src/data/projectsData.js
// Real projects from CV - replace `link` with the exact GitHub repo URL for each project
const projectsData = [
  {
    id: 1,
    title: "Task Manager",
    subtitle: "Application web full-stack de gestion de tâches",
    brief: "Application web full-stack permettant de gérer tâches, sous-tâches et commentaires avec authentification sécurisée (JWT, bcrypt) et tableau de bord statistique.",
    description: "Projet personnel visant à construire un gestionnaire de tâches complet avec une architecture back-end en couches (Controller → Service → Repository), une base de données MongoDB (Atlas) via Mongoose et un front-end vanilla HTML/CSS/JS.",
    context: "Projet personnel développé pour approfondir l'architecture back-end en couches, la sécurisation des accès utilisateurs et la conception d'une API REST complète.",
    objectives: [
      "Concevoir un back-end structuré en couches (Controller → Service → Repository)",
      "Mettre en place une authentification sécurisée par tokens JWT",
      "Hacher les mots de passe avec bcrypt",
      "Permettre la gestion complète des tâches, sous-tâches et commentaires",
      "Ajouter recherche plein texte, filtres et corbeille avec restauration",
      "Fournir un tableau de bord statistique"
    ],
    missions: [
      "Conception de l'architecture back-end en couches avec Node.js/Express",
      "Modélisation des données avec MongoDB et Mongoose",
      "Implémentation de l'inscription, connexion et sessions par JWT",
      "Sécurisation des mots de passe avec bcrypt",
      "Développement des fonctionnalités CRUD, recherche et filtres",
      "Développement du front-end vanilla HTML/CSS/JS"
    ],
    steps: [
      {
        name: "Architecture back-end",
        description: "Mise en place de l'architecture en couches Controller → Service → Repository"
      },
      {
        name: "Base de données",
        description: "Modélisation MongoDB (Atlas) via Mongoose"
      },
      {
        name: "Authentification",
        description: "Inscription, connexion, sessions JWT et hachage bcrypt"
      },
      {
        name: "Fonctionnalités",
        description: "CRUD tâches/sous-tâches/commentaires, assignation, recherche et filtres"
      },
      {
        name: "Tableau de bord",
        description: "Développement du tableau de bord statistique et de la corbeille avec restauration"
      }
    ],
    skills: {
      technical: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "JavaScript"],
      transversal: ["Architecture en couches", "Conception d'API REST", "Sécurité applicative"],
      human: ["Autonomie", "Rigueur", "Organisation", "Résolution de problèmes"]
    },
    tools: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    academicResources: ["Architecture back-end en couches", "Sécurité des applications web", "Bases de données NoSQL"],
    conclusion: "Ce projet personnel m'a permis de structurer un back-end complet en couches et de maîtriser l'authentification sécurisée par JWT et bcrypt, des compétences directement réutilisables en environnement professionnel.",
    digitalResponsibility: "L'architecture en couches et la base MongoDB Atlas optimisent les requêtes, réduisant la charge serveur et la consommation de ressources.",
    images: [
      "https://placehold.co/800x600/1a1a1a/f97316?text=Task+Manager",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Dashboard+Stats",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Auth+JWT",
      "https://placehold.co/800x600/1a1a1a/f97316?text=CRUD+Taches"
    ],
    link: "https://github.com/Inaithien/BBD",
    image: "https://placehold.co/600x400/1a1a1a/f97316?text=Task+Manager"
  },
  {
    id: 2,
    title: "Application de Gestion",
    subtitle: "Application C#/.NET avec architecture 3 couches",
    brief: "Application de gestion développée en C#/.NET avec système de rôles (Admin, Manager, Employé), hachage des mots de passe et architecture 3 couches (DAO/DTO).",
    description: "Projet individuel réalisé en semestre 4, mettant en œuvre une architecture 3 couches (DAO/DTO) avec une gestion fine des rôles utilisateurs et une base de données Microsoft SQL Server.",
    context: "Projet individuel du BUT Informatique visant à concevoir une application de gestion respectant les bonnes pratiques d'architecture logicielle en environnement Microsoft.",
    objectives: [
      "Concevoir une architecture 3 couches (DAO/DTO)",
      "Mettre en place un système de rôles (Admin, Manager, Employé)",
      "Sécuriser les mots de passe par hachage",
      "Gérer les données via Microsoft SQL Server"
    ],
    missions: [
      "Conception de l'architecture 3 couches en C#/.NET",
      "Implémentation du système de rôles et des permissions",
      "Sécurisation des mots de passe",
      "Conception et requêtage de la base SQL Server"
    ],
    steps: [
      {
        name: "Architecture DAO/DTO",
        description: "Conception de l'architecture 3 couches en C#/.NET"
      },
      {
        name: "Gestion des rôles",
        description: "Implémentation du système de rôles Admin/Manager/Employé"
      },
      {
        name: "Sécurité",
        description: "Hachage des mots de passe"
      },
      {
        name: "Base de données",
        description: "Conception et intégration de Microsoft SQL Server"
      }
    ],
    skills: {
      technical: ["C#", ".NET", "Microsoft SQL Server", "Architecture 3 couches", "DAO/DTO"],
      transversal: ["Architecture logicielle", "Gestion des accès", "Conception de bases de données"],
      human: ["Rigueur", "Autonomie", "Esprit d'analyse"]
    },
    tools: ["C#", ".NET", "Microsoft SQL Server"],
    academicResources: ["Architecture 3 couches", "Bases de données relationnelles", "Programmation orientée objet"],
    conclusion: "Ce projet individuel m'a permis de consolider mes bases en architecture logicielle et en gestion des droits d'accès dans un contexte C#/.NET.",
    digitalResponsibility: "L'architecture en couches facilite la maintenance et limite la duplication de code, réduisant les ressources nécessaires aux évolutions futures.",
    images: [
      "https://placehold.co/800x600/1a1a1a/f97316?text=Gestion+Roles",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Architecture+3+Couches",
      "https://placehold.co/800x600/1a1a1a/f97316?text=SQL+Server",
      "https://placehold.co/800x600/1a1a1a/f97316?text=DAO+DTO"
    ],
    link: "https://github.com/Inaithien",
    image: "https://placehold.co/600x400/1a1a1a/f97316?text=Application+Gestion"
  },
  {
    id: 3,
    title: "Application Thermale Multi-plateforme",
    subtitle: "Stage chez Comme une Image - Développeur application hybride (projet UCA)",
    brief: "Application thermale développée au sein du framework Atome, avec un transpileur Ruby → JavaScript et une architecture multi-BDD via Objection.js.",
    description: "Stage au sein de l'entreprise Comme une Image (projet UCA), portant sur le développement d'une application thermale hybride construite avec le framework Atome. Le cœur du projet consiste en un transpileur convertissant la syntaxe Ruby en JavaScript, permettant de faire fonctionner du code Ruby côté client.",
    context: "Stage réalisé chez Comme une Image dans le cadre d'un projet en partenariat avec l'Université Clermont Auvergne (UCA), visant à développer une application thermale hybride en s'appuyant sur le framework maison Atome.",
    objectives: [
      "Développer un parser/transpileur convertissant la syntaxe Ruby en JavaScript",
      "Intégrer ce transpileur au sein du framework Atome",
      "Assurer la compatibilité multi-BDD via l'ORM Objection.js",
      "Mettre en place un serveur local avec Fastify",
      "Versionner le projet avec Git"
    ],
    missions: [
      "Analyse de la syntaxe Ruby à convertir en JavaScript",
      "Développement du parser/transpileur Ruby → JavaScript",
      "Intégration au framework Atome",
      "Mise en place de l'ORM Objection.js pour la compatibilité multi-BDD",
      "Configuration du serveur local Fastify",
      "Versionnage et suivi du projet avec Git"
    ],
    steps: [
      {
        name: "Analyse syntaxique Ruby",
        description: "Étude de la syntaxe Ruby à transpiler et des équivalences en JavaScript"
      },
      {
        name: "Développement du transpileur",
        description: "Écriture du parser convertissant Ruby en JavaScript"
      },
      {
        name: "Intégration Atome",
        description: "Intégration du transpileur au sein du framework Atome"
      },
      {
        name: "ORM multi-BDD",
        description: "Mise en place d'Objection.js pour la compatibilité multi-bases de données"
      },
      {
        name: "Serveur local",
        description: "Configuration du serveur Fastify et tests d'intégration"
      }
    ],
    skills: {
      technical: ["Ruby", "JavaScript", "Fastify", "Objection.js", "Framework Atome", "Git"],
      transversal: ["Transpilation de langages", "Architecture multi-BDD", "Travail en environnement professionnel"],
      human: ["Adaptabilité", "Apprentissage rapide", "Communication technique", "Rigueur"]
    },
    tools: ["Ruby", "JavaScript", "Fastify", "Objection.js", "Git"],
    academicResources: ["Transpilation de langages", "Frameworks maison", "Architecture multi-BDD"],
    conclusion: "Ce stage chez Comme une Image m'a permis de travailler sur un projet technique exigeant, la conversion de Ruby vers JavaScript au sein du framework Atome, tout en développant mes compétences en environnement professionnel.",
    digitalResponsibility: "Le transpileur permet de réutiliser du code Ruby existant plutôt que de le réécrire, limitant la duplication d'effort et de ressources de développement.",
    images: [
      "https://placehold.co/800x600/1a1a1a/f97316?text=Atome+Framework",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Ruby+to+JS",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Objection.js",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Fastify+Server"
    ],
    link: "https://github.com/atomecorp/a",
    image: "https://placehold.co/600x400/1a1a1a/f97316?text=Application+Thermale"
  },
  {
    id: 4,
    title: "Gestion d'Événements Musicaux",
    subtitle: "Plateforme web Symfony 7 / React",
    brief: "Site web permettant aux administrateurs de tout gérer et aux utilisateurs de créer, s'inscrire ou supprimer des événements musicaux avec artistes ou groupes.",
    description: "Développement d'une plateforme de gestion d'événements musicaux avec un back-end Symfony 7 et un front-end React, offrant des interfaces distinctes pour administrateurs et utilisateurs.",
    context: "Projet réalisé dans un contexte de formation, visant à mettre en pratique le framework Symfony 7 combiné à React pour une application web complète.",
    objectives: [
      "Créer une interface d'administration complète",
      "Développer un système de gestion des utilisateurs",
      "Implémenter la gestion des artistes et groupes",
      "Permettre la création et gestion d'événements"
    ],
    missions: [
      "Conception de l'architecture web avec Symfony 7",
      "Développement du front-end avec React",
      "Création des interfaces utilisateur et administrateur",
      "Tests et déploiement de la plateforme"
    ],
    steps: [
      {
        name: "Conception système",
        description: "Définition de l'architecture et des fonctionnalités"
      },
      {
        name: "Back-end Symfony 7",
        description: "Mise en place du framework et de l'API"
      },
      {
        name: "Front-end React",
        description: "Développement de l'interface utilisateur et d'administration"
      },
      {
        name: "Tests & déploiement",
        description: "Validation des fonctionnalités et mise en ligne"
      }
    ],
    skills: {
      technical: ["PHP", "Symfony 7", "React", "JavaScript", "HTML/CSS"],
      transversal: ["Gestion de projet", "Conception web", "Documentation"],
      human: ["Autonomie", "Organisation", "Communication"]
    },
    tools: ["PHP", "Symfony 7", "React"],
    academicResources: ["Développement web", "Framework Symfony", "Framework React"],
    conclusion: "Ce projet m'a permis de combiner Symfony 7 côté back-end et React côté front-end pour livrer une plateforme complète de gestion d'événements.",
    digitalResponsibility: "L'architecture découplée back/front permet d'optimiser le cache et de réduire la bande passante consommée par les utilisateurs.",
    images: [
      "https://placehold.co/800x600/1a1a1a/f97316?text=Admin+Panel",
      "https://placehold.co/800x600/1a1a1a/f97316?text=React+Frontend",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Event+Management",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Symfony+7"
    ],
    link: "https://github.com/Inaithien/Music",
    image: "https://placehold.co/600x400/1a1a1a/f97316?text=Gestion+Musicale"
  },
  {
    id: 5,
    title: "FlashnFriend",
    subtitle: "Jeu Unity - Photographie, quêtes et NPC agressifs",
    brief: "Jeu vidéo Unity où le joueur photographie des créatures pour gagner des points, échangés en boutique, tout en évitant de viser les NPC agressifs qui attaquent s'ils sont pris en photo.",
    description: "FlashnFriend est un jeu de prise de photo développé sous Unity en C#. Le joueur explore des zones, capture des créatures avec son appareil photo pour gagner des points de trading, et complète des quêtes principales et secondaires pour débloquer de nouvelles zones. Certains NPC sont agressifs : les viser avec la caméra déclenche une attaque, obligeant le joueur à identifier les cibles sûres avant de photographier.",
    context: "Projet personnel de développement de jeu vidéo, pensé et développé seul sous Unity, pour explorer la conception d'un système de gameplay original autour de la photographie plutôt que du combat direct.",
    objectives: [
      "Concevoir une mécanique centrale de prise de photo comme cœur du gameplay",
      "Mettre en place un système de points échangeables en boutique",
      "Créer un système de quêtes principales et secondaires",
      "Développer des NPC agressifs réagissant à la caméra du joueur",
      "Débloquer des zones spécifiques via l'accomplissement de quêtes"
    ],
    missions: [
      "Conception du game design autour de la photographie et de l'économie de points",
      "Développement du système de boutique et de trading de points",
      "Implémentation des quêtes et sous-quêtes avec déblocage de zones",
      "Programmation de l'IA des NPC agressifs (détection de la caméra, déclenchement d'attaque)",
      "Tests et équilibrage du gameplay"
    ],
    steps: [
      {
        name: "Game design",
        description: "Conception du concept de jeu de photographie et de son économie de points"
      },
      {
        name: "Système de caméra",
        description: "Développement de la mécanique de prise de photo et de détection des cibles"
      },
      {
        name: "IA des NPC agressifs",
        description: "Programmation du comportement d'attaque lorsque le joueur vise un NPC hostile avec la caméra"
      },
      {
        name: "Quêtes & sous-quêtes",
        description: "Mise en place du système de quêtes et du déblocage de zones spécifiques"
      },
      {
        name: "Boutique & trading",
        description: "Implémentation du système d'échange de points contre objets et améliorations"
      }
    ],
    skills: {
      technical: ["Unity", "C#", "IA de NPC", "Systèmes de quêtes", "Game Design"],
      transversal: ["Conception de gameplay", "Équilibrage économique du jeu", "Architecture de jeu vidéo"],
      human: ["Créativité", "Autonomie", "Persévérance", "Esprit ludique"]
    },
    tools: ["Unity", "C#"],
    academicResources: ["Développement de jeux vidéo", "Programmation orientée objet en C#", "Game design"],
    conclusion: "FlashnFriend m'a permis d'explorer la conception d'un gameplay original centré sur la photographie plutôt que le combat, en développant seul l'IA des NPC, le système de quêtes et l'économie du jeu sous Unity.",
    digitalResponsibility: "L'IA des NPC et les systèmes de détection de caméra ont été optimisés pour limiter les calculs par frame, réduisant la charge CPU/GPU et la consommation énergétique du jeu.",
    images: [
      "https://placehold.co/800x600/1a1a1a/f97316?text=FlashnFriend",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Photo+Mechanic",
      "https://placehold.co/800x600/1a1a1a/f97316?text=NPC+Agressifs",
      "https://placehold.co/800x600/1a1a1a/f97316?text=Quetes+%26+Boutique"
    ],
    link: "https://github.com/Inaithien/FlashnFriend/tree/main/Assets/Script",
    image: "https://placehold.co/600x400/1a1a1a/f97316?text=FlashnFriend"
  }
];

export default projectsData;