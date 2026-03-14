import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'romarmendones24@gmail.com',
      link: ':romarmendones24@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '09618105592',
      link: 'tel:+639618105592'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Mauban, Quezon',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/romarmendones',
      color: 'hover:text-gray-800'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/romarmendones/',
      color: 'hover:text-blue-600'
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://x.com/romarmendones',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">
                Let's Connect
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8 text-center">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 border rounded-lg bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 border rounded-lg flex items-center justify-center bg-white/5 border-white/10 group-hover:bg-white/10 transition-colors duration-200">
                    <info.icon className="w-6 h-6 text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">{info.title}</h4>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold text-slate-100 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 border rounded-full flex items-center justify-center transition-all duration-200 bg-white/5 hover:bg-white/10 border-white/10 text-slate-100 hover:text-sky-200"
                  >
                    <social.icon className="w-6 h-6 text-sky-300" />
                  </motion.a>
                ))}
              </div>
            </div>


          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact; 