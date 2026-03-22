import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiUser,
  FiMapPin,
  FiMail,
  FiBriefcase,
  FiBook,
  FiHeart,

} from 'react-icons/fi';
import Romar from '../image/Romar.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalInfo = [
    { label: 'Full Name', value: 'Rodanto Mari Novis Mendones', icon: FiUser },
    { label: 'Location', value: 'Philippines', icon: FiMapPin },
    { label: 'Email', value: 'romarmendones@gmail.com', icon: FiMail },
    { label: 'Role', value: 'Frontend Developer', icon: FiBriefcase },
    { label: 'Education', value: 'BS Information Technology', icon: FiBook },
    { label: 'Interests', value: 'Tech, Coffee & Creativity', icon: FiHeart },
  ];

  const stats = [
    
  ];

  const socialLinks = [

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="container-custom">

        {/* ── Section Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-widest uppercase rounded-full text-sky-300 bg-sky-500/10 border border-sky-500/20"
          >
            Get To Know Me
          </motion.span>
          <h2 className="text-4xl font-bold sm:text-5xl text-slate-100">
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Me
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* ── LEFT: Photo + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo card */}
            <div className="relative group">
              {/* Glow ring */}
              <div
                className="absolute inset-0 transition-opacity duration-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(56,189,248,0.35) 0%, rgba(129,140,248,0.35) 100%)',
                }}
              />
              <div
                className="relative p-1 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                }}
              >
                <img
                  src={Romar}
                  alt="Romar Mendones"
                  className="object-cover w-56 h-56 rounded-xl sm:w-72 sm:h-72"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute px-4 py-2 text-sm font-semibold border shadow-lg -bottom-4 -right-4 rounded-xl text-sky-300 bg-slate-800 border-sky-500/30"
              >
                💻 Frontend Dev
              </motion.div>
            </div>

            {/* Stats grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid w-full grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                  className="flex flex-col items-center justify-center p-4 text-center transition-colors duration-200 border rounded-xl bg-white/5 border-white/10 hover:border-sky-500/40"
                >
                  <span className="text-3xl font-bold text-sky-300">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-medium text-slate-400">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 border rounded-full text-slate-300 bg-white/5 hover:bg-sky-500/15 hover:text-sky-300 border-white/10 hover:border-sky-500/40"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Bio + Personal Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-100">
                Hi there! I'm{' '}
                <span className="text-sky-300">Romar</span> 👋
              </h3>
              <div className="space-y-3 text-base leading-relaxed text-slate-400">
                <p>
                  I'm a passionate <span className="font-medium text-slate-200">Frontend Developer</span> from the Philippines with a love for crafting beautiful, intuitive, and performant web applications. I enjoy turning complex problems into simple, elegant digital experiences.
                </p>
                <p>
                  My journey in tech started with curiosity and a cup of coffee ☕ — and it hasn't stopped since. I specialize in <span className="font-medium text-slate-200">React.js</span>, modern JavaScript (ES6+), and responsive UI design. I believe great code should not only work but also tell a story.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, working on personal projects, or simply enjoying the beauty of a well-crafted design. I'm always open to new opportunities and collaborations!
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Personal Info Cards */}
            <div>
              <h3 className="mb-5 text-lg font-semibold tracking-wide text-slate-200">
                Personal Information
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="grid gap-3 sm:grid-cols-2"
              >
                {personalInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 transition-all duration-200 border rounded-xl bg-white/5 border-white/10 hover:border-sky-500/30"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 border rounded-lg w-9 h-9 bg-sky-500/10 border-sky-500/20">
                      <info.icon className="w-4 h-4 text-sky-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-wider uppercase text-slate-500">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium truncate text-slate-200">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >


            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;