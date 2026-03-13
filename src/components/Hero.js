import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload, FiFacebook, FiInstagram } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900"></div>
      <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-indigo-500/15 filter blur-3xl opacity-70 animate-bounce-slow"></div>
      <div className="absolute rounded-full bottom-20 right-10 w-72 h-72 bg-fuchsia-500/15 filter blur-3xl opacity-70 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 px-4 container-custom sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-lg font-medium text-sky-300">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-bold sm:text-5xl lg:text-7xl text-slate-50"
          >
            <span className="gradient-text">Rodanto Mari N. Mendones</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-xl sm:text-2xl lg:text-3xl text-slate-300"
          >
            Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8 text-lg text-slate-300"
          >
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, innovative design, and building products that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                             onClick={() => {
                 const link = document.createElement('a');
                 link.href = '/Rodanto_Mendones_Resume_OnePage.pdf';
                 link.download = 'Rodanto_Mendones_Resume_OnePage.pdf';
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
               }}
              className="flex items-center space-x-2 btn-primary"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="flex items-center space-x-2 btn-secondary"
            >
              <span>Learn More</span>
              <FiArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/romarmendones"
              target="https://github.com/romarmendones"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full text-slate-100 bg-white/5 hover:bg-white/10 border-white/10"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/romarmendones/ "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full text-slate-100 bg-white/5 hover:bg-white/10 border-white/10"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full text-slate-100 bg-white/5 hover:bg-white/10 border-white/10"
            >
              <SiGmail className="w-6 h-6" />,
              
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/romarmendones"
              target="https://www.facebook.com/romar.mendones"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full text-slate-100 bg-white/5 hover:bg-white/10 border-white/10"
            >
              <FiFacebook className="w-6 h-6" />

            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/roooo_mmmaarrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full text-slate-100 bg-white/5 hover:bg-white/10 border-white/10"
            >
              <FiInstagram className="w-6 h-6" />
            </motion.a>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sky-300 transition-colors duration-200 hover:text-sky-200"
        >
          <FiArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 