import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: '',
      location: '',
      period: '',
      description: '',
      achievements: [
        '',
        '',
        '',
        ''
      ],
      technologies: ['', '', '', '', '']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: '',
      location: '',
      period: '',
      description: '',
      achievements: [
        '',
        '',
        '',
        ''
      ],
      technologies: ['', '', '', '', '']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: '',
      location: '',
      period: '',
      description: '',
      achievements: [
        '',
        '',
        '',
        ''
      ],
      technologies: ['', '', '', '', '']
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: '',
      location: '',
      period: '',
      description: '',
      achievements: [
        '',
        '',
        '',
        ''
      ],
      technologies: ['', '', '', '', '']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary-900">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-600">
            My professional journey and the impact I've made in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg ${
                index % 2 === 0 ? 'left-2 md:left-auto md:right-0 md:mr-[-8px]' : 'left-2 md:left-0 md:ml-[-8px]'
              }`}></div>

              {/* Content Card */}
              <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                {/* Header */}
                <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-secondary-900">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <div className="flex items-center space-x-1">
                        <FiBriefcase className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiMapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-1 text-sm font-medium text-blue-600 md:mt-0">
                    <FiCalendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 leading-relaxed text-secondary-600">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="flex items-center mb-2 space-x-2 text-sm font-semibold text-secondary-900">
                    <FiAward className="w-4 h-4 text-blue-600" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-secondary-600">
                        <span className="mt-1 text-blue-600">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-secondary-900">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="p-8 mt-16 bg-white shadow-lg rounded-xl"
        >
          <h3 className="mb-6 text-2xl font-bold text-center text-secondary-900">
            Education & Certifications
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-lg font-bold text-secondary-900">Bachelor of Information Technology</h4>
              <p className="mb-1 text-secondary-900">Manuel S. Enverga University Foundation</p>
              <p className="text-sm text-secondary-500">2019 - 2025</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-secondary-900">Certifications</h4>
              <ul className="space-y-1 text-sm text-secondary-600">
                <li> </li>
                <li></li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 