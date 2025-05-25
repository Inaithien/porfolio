// src/App.js - Fixed version with proper French routing
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import DigitalResponsibility from './pages/DigitalResponsibility';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home routes - both root and /accueil */}
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Home />} />
            
            {/* About routes - French */}
            <Route path="/a-propos" element={<About />} />
            <Route path="/about" element={<Navigate to="/a-propos" replace />} />
            
            {/* Projects routes - French */}
            <Route path="/projets" element={<Projects />} />
            <Route path="/projets/:id" element={<ProjectDetail />} />
            <Route path="/projects" element={<Navigate to="/projets" replace />} />
            <Route path="/projects/:id" element={<Navigate to="/projets/:id" replace />} />
            
            {/* Digital Responsibility - French */}
            <Route path="/numerique-responsable" element={<DigitalResponsibility />} />
            <Route path="/digital-responsibility" element={<Navigate to="/numerique-responsable" replace />} />
            
            {/* Resume/CV routes */}
            <Route path="/cv" element={<Resume />} />
            <Route path="/resume" element={<Navigate to="/cv" replace />} />
            
            {/* Contact route */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Catch-all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;