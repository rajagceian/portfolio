import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Virtual Herbal Garden',
    category: 'Educational Platform',
    description:
      'An interactive platform focused on medicinal plants and AYUSH-based learning, designed to make plant knowledge more accessible and engaging.',
    img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200',
    span: 'md:col-span-2',
    height: 'min-h-[420px]',
  },
  {
    id: 2,
    title: 'IoT Smart Dustbin',
    category: 'Hardware + Automation',
    description:
      'A smart waste management project built with sensors and automation, the same idea that helped secure first place at district-level Science Mela.',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    span: 'md:col-span-1',
    height: 'min-h-[420px]',
  },
  {
    id: 3,
    title: 'Transformo Docs',
    category: 'SIH Project',
    description:
      'A machine-readable document management concept created for Smart India Hackathon with a focus on structured information access.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    span: 'md:col-span-1',
    height: 'min-h-[420px]',
  },
];

interface ProjectShowcaseProps {
  reduceMotion?: boolean;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ reduceMotion }) => {
  return (
    <section id="projects" className="bg-[#ff6723] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/55">Projects</p>
          <h2 className="text-4xl font-serif-heading font-bold leading-tight text-white md:text-6xl">
            Projects that reflect curiosity, practical thinking, and a strong desire to build useful systems.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`${project.span} ${project.height} group relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/85`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
              <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                    {project.category}
                  </span>
                  <span className="text-sm font-semibold text-white/45">0{project.id}</span>
                </div>

                <div>
                  <h3 className="text-3xl font-serif-heading font-bold text-white md:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72">{project.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
