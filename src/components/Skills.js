import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiCloud, FiSmartphone, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
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
        { name: 'React.js', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        
      ]
    },
    {
      title: 'Backend Development',
      icon: FiDatabase,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        
        { name: 'Supabase', level: 70 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      skills: [
      { name: 'Git', level: 90 },
       
      ]
    },
    {
      title: 'Mobile Development',
      icon: FiSmartphone,
      skills: [
        { name: 'React Native', level: 75 },
       
       
        
      ]
    },
    
  ];

  const skillIconMap = {
    'React.js': SiReact,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'HTML/CSS': SiCss3,
    'Tailwind CSS': SiTailwindcss,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'Python': SiPython,
    'Supabase': SiSupabase,
    'Git': SiGit,
    'React Native': SiReact,
    
    
  };

  // Build a flat, unique skill list for the icon carousel
  const allSkills = Array.from(
    new Map(
      skillCategories
        .flatMap((c) => c.skills)
        .map((s) => [s.name, s])
    ).values()
  );

  const scrollRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const recalc = () => {
      const container = scrollRef.current;
      if (!container || container.children.length === 0) return;
      const firstChild = container.children[0];
      const childWidth = firstChild.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(container).columnGap || '0');
      const per = Math.max(1, Math.floor((container.clientWidth + gap) / (childWidth + gap)));
      setItemsPerView(per);
      setCurrentPage(Math.round(container.scrollLeft / container.clientWidth));
    };
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  const totalPages = Math.max(1, Math.ceil(allSkills.length / itemsPerView));

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCurrentPage(Math.round(container.scrollLeft / container.clientWidth));
  };

  const goToPage = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(totalPages - 1, index));
    container.scrollTo({ left: clamped * container.clientWidth, behavior: 'smooth' });
    setCurrentPage(clamped);
  };

  return (
    <section id="skills" className="relative overflow-hidden section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      {/* Animated background accents */}
      <motion.span
        aria-hidden
        className="absolute rounded-full pointer-events-none -top-24 -left-24 h-80 w-80 bg-primary-300/30 blur-3xl"
        initial={{ scale: 0.9, rotate: 0, opacity: 0.5 }}
        animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, 30, 0], opacity: [0.45, 0.6, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden
        className="absolute rounded-full pointer-events-none -bottom-24 -right-24 h-96 w-96 bg-secondary-300/30 blur-3xl"
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
          <h2 className="mb-4 text-4xl font-bold text-secondary-900">
            MY <span className="gradient-text">SKILLS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-600">
           
          </p>
        </motion.div>

        <div className="relative">
          <div className="p-4 mx-auto border rounded-full shadow-inner bg-white/70 backdrop-blur border-white/40">
            <div className="relative">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => goToPage(currentPage - 1)}
                className="absolute z-10 items-center justify-center hidden p-2 -translate-y-1/2 border rounded-full shadow -left-3 top-1/2 bg-white/90 md:flex hover:bg-white border-white/50"
              >
                <FiChevronLeft className="w-4 h-4 text-secondary-900" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => goToPage(currentPage + 1)}
                className="absolute z-10 items-center justify-center hidden p-2 -translate-y-1/2 border rounded-full shadow -right-3 top-1/2 bg-white/90 md:flex hover:bg-white border-white/50"
              >
              <FiChevronRight className="w-4 h-4 text-secondary-900" />
              </button>

              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-8 px-6 py-2 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
              >
                {allSkills.map((skill) => {
                  const Icon = skillIconMap[skill.name];
                  return (
                    <div key={skill.name} className="snap-start shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] flex flex-col items-center justify-center gap-3">
                      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary-100 text-secondary-800">
                        {Icon ? <Icon className="w-10 h-10" /> : <span className="text-lg">{skill.name[0]}</span>}
                      </div>
                      <div className="text-sm font-medium text-secondary-800">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goToPage(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${i === currentPage ? 'w-3 bg-secondary-900' : 'bg-secondary-400/60'}`}
                />)
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Skills; 