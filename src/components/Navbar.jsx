import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-yellow-300 font-bold' : 'text-white hover:text-yellow-300';
  };
  
  return (
    <nav className="bg-primary-700 shadow-md py-4 px-6 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Home</Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`${isActive('/')} transition duration-300`}>Accueil</Link>
          <Link to="/about" className={`${isActive('/about')} transition duration-300`}>À Propos</Link>
          <Link to="/projects" className={`${isActive('/projects')} transition duration-300`}>Projets</Link>
          <Link to="/digital-responsibility" className={`${isActive('/digital-responsibility')} transition duration-300`}>Numérique Responsable</Link>
          <Link to="/resume" className={`${isActive('/resume')} transition duration-300`}>CV</Link>
          <Link to="/contact" className={`${isActive('/contact')} transition duration-300`}>Contact</Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
        <div className="flex flex-col space-y-3 px-4">
          <Link to="/" 
                className={`${isActive('/')} py-2 transition duration-300`} 
                onClick={() => setIsMenuOpen(false)}>
            Accueil
          </Link>
          <Link to="/about" 
                className={`${isActive('/about')} py-2 transition duration-300`} 
                onClick={() => setIsMenuOpen(false)}>
            À Propos
          </Link>
          <Link to="/projects" 
                className={`${isActive('/projects')} py-2 transition duration-300`} 
                onClick={() => setIsMenuOpen(false)}>
            Projets
          </Link>
          <Link to="/digital-responsibility" 
                className={`${isActive('/digital-responsibility')} py-2 transition duration-300`} 
                onClick={() => setIsMenuOpen(false)}>
            Numérique Responsable
          </Link>
          <Link to="/resume" 
                className={`${isActive('/resume')} py-2 transition duration-300`} 
                onClick={() => setIsMenuOpen(false)}>
            CV
          </Link>
          <Link to="/contact" 
                className={`${isActive('/contact')} py-2 transition duration-300`} 
                onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;