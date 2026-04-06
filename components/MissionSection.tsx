import React from 'react';
import { motion } from 'framer-motion';

interface MissionSectionProps {
  reduceMotion?: boolean;
}

const stats = [
  { label: 'LeetCode Problems', value: '750+' },
  { label: 'Science Mela Rank', value: '1st' },
  { label: 'Current Goal', value: 'Top Internships' },
];

export const MissionSection: React.FC<MissionSectionProps> = ({ reduceMotion }) => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#ff6723] px-6 py-28 md:py-36">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative mx-auto max-w-[1400px] rounded-[2.5rem] border border-white/15 bg-black/85 p-8 md:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/50">Next Chapter</p>
            <h2 className="max-w-3xl text-4xl font-serif-heading font-bold leading-tight text-white md:text-6xl">
              I&apos;m still early in the journey, but the direction is clear and the work is already in motion.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72">
              I&apos;m focused on becoming a strong software developer by combining academic consistency, daily problem solving, and practical project building. My goal is to keep improving in DSA, backend development, and system design while creating work that reflects real progress.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:raja.kumar.gce@gmail.com" className="btn-liquid-glass px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] no-underline">
                Email Me
              </a>
              <a href="#top" className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white no-underline transition hover:bg-white hover:text-black">
                Back to Top
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">{stat.label}</p>
                <p className="mt-3 text-4xl font-black text-white">{stat.value}</p>
              </div>
            ))}

            <div className="rounded-[1.8rem] border border-[#ff6723]/35 bg-[#ff6723] p-6 text-black">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/55">Mindset</p>
              <p className="mt-3 text-lg font-semibold leading-relaxed">
                I believe strong careers are built through consistency, curiosity, and the willingness to keep learning by doing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
