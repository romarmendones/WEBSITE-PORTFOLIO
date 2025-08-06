import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiSmartphone, FiGlobe } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SmartStocks',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com',
      live: 'https://smartstocks.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'A React Native mobile app for fitness tracking with workout plans, progress monitoring, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux Toolkit'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimal performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8b6def?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather application with real-time data, interactive maps, and detailed forecasts for multiple locations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard with analytics, scheduling, and content management features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Explore my latest work and creative solutions across various technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-700'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                    >
                      <FiGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  {project.category === 'mobile' ? (
                    <FiSmartphone className="w-4 h-4 text-primary-600" />
                  ) : (
                    <FiGlobe className="w-4 h-4 text-primary-600" />
                  )}
                  <span className="text-sm text-secondary-500 capitalize">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{project.title}</h3>
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary-100 hover:bg-primary-100 text-secondary-700 hover:text-primary-700 text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 