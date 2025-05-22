// src/pages/DigitalResponsibility.jsx
const DigitalResponsibility = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-6">Numérique Responsable</h1>
          <p className="text-xl text-center mb-4 text-gray-300 max-w-4xl mx-auto">
            Le numérique responsable vise à réduire l'empreinte environnementale, sociale et éthique des technologies.
          </p>
          <p className="text-lg text-center mb-16 text-gray-400 max-w-4xl mx-auto">
            Cette page présente mon approche et mes compétences dans ce domaine essentiel pour un avenir durable.
          </p>

          {/* Principles Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Principes Fondamentaux</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Environmental Impact */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">Impact Environnemental</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Concevoir des services numériques qui minimisent leur empreinte environnementale et 
                  favorisent la sobriété numérique.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Optimisation des images et ressources
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Réduction du poids des pages web
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Minimisation des requêtes serveur
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Utilisation de thèmes sombres pour économiser l'énergie sur les écrans OLED
                  </li>
                </ul>
              </div>

              {/* Accessibility */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">Accessibilité</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Rendre les services numériques accessibles à tous les utilisateurs, y compris les 
                  personnes en situation de handicap.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Respect des normes WCAG
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Utilisation de contrastes adéquats
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Structure sémantique HTML correcte
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Alternatives textuelles pour les contenus non-textuels
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">Sécurité des Données</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Assurer la confidentialité et la sécurité des données personnelles des utilisateurs.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Chiffrement des données sensibles
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Respect du RGPD
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Minimisation de la collecte de données
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Transparence sur l'utilisation des données
                  </li>
                </ul>
              </div>

              {/* Digital Inclusion */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-orange-400">Inclusion Numérique</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Veiller à ce que les services numériques soient utilisables par tous, indépendamment 
                  des compétences techniques ou des équipements.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Conception simple et intuitive
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Compatibilité avec les anciens navigateurs
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Fonctionnement sur connexions lentes
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    Support multi-plateforme
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* My Approach Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-400">Mon Approche</h2>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary-400">Dans mes Projets</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Utilisation de frameworks légers et optimisés
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Compression et optimisation des assets
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Code propre et efficace
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Tests de performance réguliers
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary-400">Formation Continue</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Veille technologique sur l'éco-conception
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Participation à des projets open source
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Sensibilisation aux enjeux environnementaux
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      Apprentissage des bonnes pratiques
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tools and Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-400">Outils et Technologies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Mesure d'Impact</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Lighthouse</li>
                  <li>WebPageTest</li>
                  <li>EcoIndex</li>
                  <li>Carbon Calculator</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Optimisation</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Webpack</li>
                  <li>Vite</li>
                  <li>ImageOptim</li>
                  <li>Gzip/Brotli</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Accessibilité</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Axe DevTools</li>
                  <li>WAVE</li>
                  <li>Screen Readers</li>
                  <li>Color Contrast</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-white">Mon Engagement</h2>
              <p className="text-xl mb-6 text-gray-100">
                Je m'engage à intégrer les principes du numérique responsable dans tous mes projets, 
                contribuant ainsi à un avenir numérique plus durable et inclusif.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Éco-conception
                </span>
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Accessibilité
                </span>
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Performance
                </span>
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Sécurité
                </span>
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Inclusion
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalResponsibility;