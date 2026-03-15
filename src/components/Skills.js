import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiCloud } from 'react-icons/fi';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiSupabase,
  SiGit,


} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      skills: [
        { name: 'React.js', },
        { name: 'JavaScript', },
        { name: 'TypeScript' },
        { name: 'Laravel', },
        { name: 'Tailwind CSS', },

      ]
    },
    {
      title: 'Backend Development',
      icon: FiDatabase,
      skills: [
        { name: 'Node.js', },
        { name: 'Python', },
        { name: 'Supabase', },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      skills: [
        { name: 'Git', },

      ]
    },
  ];

  const skillIconMap = {
    'React.js': SiReact,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    'Laravel': SiLaravel,
    'Node.js': SiNodedotjs,
    'Python': SiPython,
    'Supabase': SiSupabase,
    'Git': SiGit,


  };

  // Build a flat, unique skill list for the icon carousel
  const allSkills = Array.from(
    new Map(
      skillCategories
        .flatMap((c) => c.skills)
        .map((s) => [s.name, s])
    ).values()
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden section-padding bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900"
    >
      {/* Animated background accents */}
      <motion.span
        aria-hidden
        className="absolute rounded-full pointer-events-none -top-24 -left-24 h-80 w-80 bg-indigo-500/10 blur-3xl"
        initial={{ scale: 0.9, rotate: 0, opacity: 0.5 }}
        animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, 30, 0], opacity: [0.45, 0.6, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden
        className="absolute rounded-full pointer-events-none -bottom-24 -right-24 h-96 w-96 bg-fuchsia-500/10 blur-3xl"
        initial={{ scale: 1.1, rotate: 0, opacity: 0.5 }}
        animate={{ scale: [1.1, 0.95, 1.1], rotate: [0, -25, 0], opacity: [0.45, 0.6, 0.45] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-100">
            MY <span className="gradient-text">SKILLS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">

          </p>
        </motion.div>

        <div className="relative">
          <div
            className="p-4 mx-auto border rounded-full shadow-inner bg-white/5 backdrop-blur border-white/10 overflow-hidden"
            style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
            <div className="flex gap-8 group">
              <div className="flex gap-8 px-6 py-2 animate-scroll min-w-max group-hover:[animation-play-state:paused]">
                {allSkills.map((skill, idx) => {
                  const Icon = skillIconMap[skill.name];
                  return (
                    <div key={`${skill.name}-1-${idx}`} className="shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] flex flex-col items-center justify-center gap-3">
                      <div className="flex items-center justify-center w-20 h-20 border rounded-2xl bg-white/5 border-white/10">
                        {Icon ? (
                          <Icon className="w-10 h-10 text-slate-100" />
                        ) : (
                          <span className="text-lg text-slate-100">{skill.name[0]}</span>
                        )}
                      </div>
                      <div className="text-sm font-medium text-slate-200">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
              <div aria-hidden="true" className="flex gap-8 px-6 py-2 animate-scroll min-w-max group-hover:[animation-play-state:paused]">
                {allSkills.map((skill, idx) => {
                  const Icon = skillIconMap[skill.name];
                  return (
                    <div key={`${skill.name}-2-${idx}`} className="shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] flex flex-col items-center justify-center gap-3">
                      <div className="flex items-center justify-center w-20 h-20 border rounded-2xl bg-white/5 border-white/10">
                        {Icon ? (
                          <Icon className="w-10 h-10 text-slate-100" />
                        ) : (
                          <span className="text-lg text-slate-100">{skill.name[0]}</span>
                        )}
                      </div>
                      <div className="text-sm font-medium text-slate-200">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills; 