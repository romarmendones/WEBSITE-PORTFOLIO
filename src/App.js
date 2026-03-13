import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, );

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-brand">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 border-4 rounded-full border-primary-600 border-t-transparent animate-spin"></div>
          <h2 className="text-2xl font-bold text-secondary-800">Loading Portfolio...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
      <Contact />
      </main>
    
    </div>
  );
}

export default App; 