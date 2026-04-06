import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const strengths = [
  {
    id: '01.',
    title: 'Problem Solving',
    description: 'Building algorithmic thinking through regular LeetCode practice, pattern recognition, and disciplined reasoning.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1200',
    tags: ['C', 'C++', 'PYTHON', 'DSA'],
  },
  {
    id: '02.',
    title: 'Backend Development',
    description: 'Learning how to structure APIs, handle data flow, and create dependable backend systems using modern JavaScript tooling.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200',
    tags: ['NODE.JS', 'EXPRESS.JS', 'MYSQL', 'MONGODB'],
  },
  {
    id: '03.',
    title: 'Frontend Foundations',
    description: 'Building interfaces with core web technologies and React so projects are not only functional in the backend but also usable on the frontend.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
  },
  {
    id: '04.',
    title: 'Project Execution',
    description: 'Turning ideas into working prototypes across education, IoT, and document management instead of stopping at theory.',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=1200',
    tags: ['SYSTEM DESIGN', 'LEARNING', 'INTERNSHIPS', 'DELIVERY'],
  },
];

type ServicesSectionProps = {
  reduceMotion?: boolean;
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ reduceMotion }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black px-6 pb-60 pt-40 text-white md:px-16">
      <div className="relative mb-32 flex items-start justify-start">
        <h2 className="select-none whitespace-nowrap text-[12vw] font-condensed font-bold uppercase leading-none tracking-[0.01em] text-[#d6d6d6]">
          WHAT DEFINES ME
        </h2>
        <span className="ml-4 mt-[2.2vw] text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-[12px]">
          (STRENGTHS)
        </span>
      </div>

      <div className="flex w-full flex-col border-t border-white/10">
        {strengths.map((strength, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={strength.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative w-full cursor-pointer overflow-hidden border-b border-white/10 transition-colors duration-500"
            >
              <div className="grid w-full grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-[0.5fr_1.5fr_1.5fr] md:gap-4 md:py-16">
                <div className="flex items-center gap-2">
                  <span className={`text-4xl font-black tracking-tighter transition-colors duration-500 md:text-6xl ${isHovered ? 'text-white' : 'text-zinc-600'}`}>
                    {strength.id}
                  </span>
                  <div className="mt-2 h-2 w-2 rounded-sm bg-[#ff6723]" />
                </div>

                <div className="flex w-full items-center justify-center overflow-hidden">
                  <AnimatePresence mode="sync">
                    {isHovered ? (
                      <motion.div
                        key="expanded-img"
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -6 }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="aspect-video w-full max-w-[500px] overflow-hidden rounded-3xl border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                      >
                        <img src={strength.image} className="h-full w-full object-cover" alt={strength.title} />
                      </motion.div>
                    ) : (
                      <div className="h-0 md:h-[100px]" />
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col items-end text-right">
                  <h3 className={`text-4xl font-bold leading-none tracking-tighter transition-all duration-500 md:text-7xl ${isHovered ? 'text-white' : 'text-zinc-300'}`}>
                    {strength.title}
                  </h3>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -6 }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-md pt-8">
                          <p className="text-lg font-medium leading-snug text-zinc-400 md:text-xl">{strength.description}</p>
                          <div className="mt-8 grid grid-cols-2 gap-3 justify-items-end">
                            {strength.tags.map((tag) => (
                              <span
                                key={tag}
                                className="w-fit whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:bg-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className={`pointer-events-none absolute inset-0 bg-white/[0.02] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
