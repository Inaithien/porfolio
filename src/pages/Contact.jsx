// src/pages/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  // Social links - Only GitHub and LinkedIn to match your design
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Inaithien/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thien-huy-nguyen-50a582281/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    }
  ];
  
  // Contact information - Updated to match your home page
  const contactInfo = {
    email: "ngthienhuy08@gmail.com",
    phone: "07 67 69 06 10",
    location: "Clermont-Ferrand, France"
  };
  
  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send the form data to a server
    // For this example, we'll just simulate a successful submission
    
    // Validation (basic)
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Veuillez remplir tous les champs obligatoires.'
      });
      return;
    }
    
    // Simulate successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Vous souhaitez me contacter pour discuter d'une opportunité professionnelle, 
              d'un projet de collaboration ou simplement pour échanger ? 
              N'hésitez pas à m'envoyer un message via le formulaire ci-dessous.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-gray-900 rounded-lg shadow-lg p-8 h-full border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-primary-400">Informations de contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
                      <p className="text-gray-300">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1 text-white">Téléphone</h3>
                      <p className="text-gray-300">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1311.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1 text-white">Localisation</h3>
                      <p className="text-gray-300">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4 text-white">Retrouvez-moi en ligne</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-gray-800 p-3 rounded-full text-gray-300 hover:bg-primary-600 hover:text-white transition duration-300 border border-gray-700"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-primary-400">Envoyez-moi un message</h2>
                
                {formStatus.submitted ? (
                  <div className={`p-4 mb-6 rounded-lg ${formStatus.error ? 'bg-red-900 text-red-300 border border-red-700' : 'bg-green-900 text-green-300 border border-green-700'}`}>
                    {formStatus.message}
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Nom <span className="text-red-400">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                      Sujet
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-white placeholder-gray-400"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition duration-300"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Additional Information Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Discutons de votre projet</h2>
              <p className="text-lg mb-6 text-gray-100 max-w-3xl mx-auto">
                Que vous ayez une idée de projet, une opportunité de stage, ou simplement l'envie d'échanger 
                sur le développement web et les technologies, je serais ravi de vous répondre rapidement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Projets Web
                </span>
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Opportunités de Stage
                </span>
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Collaborations
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;