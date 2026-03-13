import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalInfo = [
    
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
        
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-100">
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
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-white/5 border-white/10">
                    <info.icon className="w-5 h-5 text-sky-300" />
                  </div>
                  <div>
                   
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

      
           

         
        </div>
      </div>
    </section>
  );
};

export default About; 