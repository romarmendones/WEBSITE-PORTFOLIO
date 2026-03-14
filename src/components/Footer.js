import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiGithub, name: 'GitHub', url: 'https://github.com/romarmendones', color: 'hover:text-white hover:bg-[#333333]' },
    { icon: FiLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/romarmendones', color: 'hover:text-white hover:bg-[#0A66C2]' },
    { icon: FiTwitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-white hover:bg-[#1DA1F2]' },
  ];

  return (
    <footer className="relative bg-secondary-900 border-t border-secondary-800 text-secondary-300 pt-16 pb-8 overflow-hidden z-10">
      {/* Subtle Background Glow/Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
              Rodanto<span className="text-secondary-500">.</span>
            </h2>
            <p className="text-secondary-400 mb-8 max-w-sm leading-relaxed text-sm">
              Crafting elegant digital experiences through clean code and modern design. Always eager to explore new technologies and solve real-world problems.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-secondary-800/80 flex items-center justify-center text-secondary-400 transition-all duration-300 shadow-sm border border-secondary-700/50 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:ml-8">
            {footerLinks.map((group, groupIdx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + groupIdx * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-6 tracking-wider text-xs uppercase">{group.title}</h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-secondary-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 lg:ml-auto"
          >
            <h3 className="text-white font-semibold mb-6 tracking-wider text-xs uppercase">Get in Touch</h3>
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-secondary-800/50 flex items-center justify-center text-secondary-400 group-hover:text-primary-50 group-hover:bg-secondary-700/80 transition-all duration-300 mr-4 flex-shrink-0">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-secondary-400 text-sm mt-1">Mauban, Quezon, Philippines</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-secondary-800/50 flex items-center justify-center text-secondary-400 group-hover:text-primary-50 group-hover:bg-secondary-700/80 transition-all duration-300 mr-4 flex-shrink-0">
                  <FiMail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:romarmendones24@gmail.com" className="text-secondary-400 text-sm mt-1 hover:text-white transition-colors duration-200 block">
                    romarmendones24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-secondary-800/50 flex items-center justify-center text-secondary-400 group-hover:text-primary-50 group-hover:bg-secondary-700/80 transition-all duration-300 mr-4 flex-shrink-0">
                  <FiPhone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a href="tel:09618105592" className="text-secondary-400 text-sm mt-1 hover:text-white transition-colors duration-200 block">
                    +63 961 810 5592
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-secondary-800/80 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-secondary-500 text-sm">
            © {currentYear} Rodanto Mari N. Mendones. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-secondary-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-secondary-500 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 