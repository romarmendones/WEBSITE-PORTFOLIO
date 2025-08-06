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
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led a team of 5 developers in building a customer portal serving 10,000+ users',
        'Improved application performance by 40% through optimization and caching strategies',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateWeb',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client websites and web applications. Collaborated with design and marketing teams to deliver high-quality products.',
      achievements: [
        'Built 15+ client websites with 99.9% uptime',
        'Reduced page load times by 50% through optimization',
        'Implemented responsive design for all projects',
        'Maintained 100% client satisfaction rate'
      ],
      technologies: ['React', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Creations',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive and interactive user interfaces. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Developed 10+ interactive web applications',
        'Created reusable component library used across projects',
        'Achieved 95% accessibility compliance score',
        'Reduced bug reports by 30% through improved code quality'
      ],
      technologies: ['React', 'TypeScript', 'CSS3', 'Sass', 'Webpack']
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'StartUp Inc.',
      location: 'Remote',
      period: '2018 - 2019',
      description: 'Started my professional journey as a junior developer, learning modern web technologies and contributing to various projects.',
      achievements: [
        'Contributed to 5 different projects in first year',
        'Learned React and modern JavaScript frameworks',
        'Participated in code reviews and team meetings',
        'Completed 3 certifications in web development'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-1">
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
                  <div className="flex items-center space-x-1 text-sm text-primary-600 font-medium mt-2 md:mt-0">
                    <FiCalendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-600 leading-relaxed mb-4">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-2 flex items-center space-x-2">
                    <FiAward className="w-4 h-4 text-primary-600" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-secondary-600 flex items-start space-x-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
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
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-secondary-900 mb-2">Bachelor of Computer Science</h4>
              <p className="text-secondary-600 mb-1">University of Technology</p>
              <p className="text-sm text-secondary-500">2015 - 2019</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-secondary-900 mb-2">Certifications</h4>
              <ul className="space-y-1 text-sm text-secondary-600">
                <li>• AWS Certified Developer Associate</li>
                <li>• React Developer Certification</li>
                <li>• Google Cloud Professional Developer</li>
                <li>• MongoDB Database Administrator</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 