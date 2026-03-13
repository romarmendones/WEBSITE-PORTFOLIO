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
        description: 'A  Capstone Project full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.',
      image:require('../image/SmartStocks.png'),
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com',
      live: 'https://smart-stacks-manager-web.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Coffee Shop',
      description: 'A coffee shop website with a responsive design and smooth animations.',
      image: require('../image/Coffee.jpg'),
      category: 'web',
      technologies: ['React', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://coffee-shop16.vercel.app/',
      featured: true
},
{
  id: 3,
  title:'Brew & Bean',
    description: ' Coffee Shop',
  image:require('../image/Coffee1.jpg'),
  category: 'web',
  technologies: ['Vue.js', 'Tailwind CSS',''],
  github: 'https://github.com',
  live: 'https://coffee-brew-bean-shop.vercel.app//',
  featured: true
},

    
    
    
    
    
    
  ];

  const filters = [
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Development' },
    
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-100">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
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
                  ? 'bg-sky-500 text-slate-950 shadow-lg shadow-black/30'
                  : 'bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden transition-all duration-300 border bg-white/5 border-white/10 rounded-xl hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-50">
                  <div className="flex space-x-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 transition-colors duration-200 border rounded-full bg-slate-950/60 border-white/10 text-slate-100 hover:text-sky-200"
                    >
                      <FiGithub className="w-6 h-6 text-sky-300" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 transition-colors duration-200 border rounded-full bg-slate-950/60 border-white/10 text-slate-100 hover:text-sky-200"
                    >
                      <FiExternalLink className="w-6 h-6 text-sky-300" />
                    </motion.a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-4 left-4 bg-primary-600">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center mb-3 space-x-2">
                  {project.category === 'mobile' ? (
                    <FiSmartphone className="w-4 h-4 text-sky-300" />
                  ) : (
                    <FiGlobe className="w-4 h-4 text-sky-300" />
                  )}
                  <span className="text-sm capitalize text-slate-400">{project.category}</span>
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-slate-100">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-white/5 border-white/10 text-slate-200"
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
                    className="flex-1 py-2 text-sm font-medium text-center transition-colors duration-200 border rounded-lg bg-white/5 hover:bg-white/10 border-white/10 text-slate-100 hover:text-sky-200"
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-sm font-medium text-center transition-colors duration-200 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950"
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
          className="mt-12 text-center"
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