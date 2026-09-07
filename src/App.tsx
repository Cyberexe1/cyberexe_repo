import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DeveloperSkills from './components/DeveloperSkills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import AllProjects from './components/AllProjects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem('darkMode');
    return isDark === null ? true : isDark === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
      }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Routes>
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/" element={
            <main className="relative z-10">
              <Hero />
              <About />
              <Projects />
              <Internship />
              <DeveloperSkills />
              <Achievements />
              <Certificates />
              <Contact />
            </main>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;