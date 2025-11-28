import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalInfo = [
    { icon: FiUser, label: 'Name', value: 'Rodanto Mari N. Mendones' },
    { icon: FiCalendar, label: 'Age', value: '25 years old' },
    { icon: FiMapPin, label: 'Location', value: 'Mauban, Quezon' },
    { icon: FiMail, label: 'Email', value: 'romarmendones24@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '09618105592' },
  ];

  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary-900">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-600">
            Get to know me better and understand my journey in the world of technology
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-secondary-900">
              Personal Information
            </h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                    <info.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-500">{info.label}</p>
                    <p className="font-semibold text-secondary-900">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-secondary-900">
                MY STORY
              </h3>
              <p className="mb-4 leading-relaxed text-secondary-600">
               Motivated Junior Web Developer with hands-on experience in building responsive and user-friendly web and mobile applications. Skilled in frontend and backend development, mobile app frameworks, and version control. Knowledgeable in Agile methodologies and experienced in delivering end-to-end software solutions.
              </p>
              <p className="leading-relaxed text-secondary-600">
               Adept at collaborating in team environments and committed to continuous learning and professional growth. Eager to contribute technical skills and creativity to a dynamic development team.
              </p>    
             
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="p-4 text-center rounded-lg bg-blue-50"
              >
                <div className="mb-2 text-3xl font-bold text-blue-600"></div>
                <div className="text-sm text-secondary-600"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="p-4 text-center rounded-lg bg-secondary-50"
              >
                <div className="mb-2 text-3xl font-bold text-secondary-600"></div>
                <div className="text-sm text-secondary-600"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="p-4 text-center rounded-lg bg-blue-50"
              >
                <div className="mb-2 text-3xl font-bold text-blue-600"></div>
                <div className="text-sm text-secondary-600"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="p-4 text-center rounded-lg bg-secondary-50"
              >
                <div className="mb-2 text-3xl font-bold text-secondary-600"></div>
                <div className="text-sm text-secondary-600"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 