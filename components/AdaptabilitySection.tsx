import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Problem Solving', 'Backend', 'Core Concepts', 'Platforms'];

const contentData = {
  'Problem Solving': {
    title: 'Daily repetition is sharpening my logic.',
    description:
      'I use LeetCode and DSA practice to build clarity around patterns, edge cases, and clean reasoning. My focus areas include arrays, recursion, dynamic programming, and time-space tradeoffs.',
    stats: ['750+ questions solved', 'LeetCode daily practice', 'C, C++ and Python'],
    accent: 'from-[#fff0d6] to-[#ffb07d]',
  },
  Backend: {
    title: 'I enjoy building backend systems that feel structured and dependable.',
    description:
      'My backend stack currently centers on Node.js, Express.js, MySQL, MongoDB, and REST APIs. I like thinking through routing, database design, request flow, and how a service should behave under real usage.',
    stats: ['Node.js', 'Express.js', 'MySQL + MongoDB'],
    accent: 'from-[#d9ffe5] to-[#5dd39e]',
  },
  'Core Concepts': {
    title: 'Fundamentals are the engine behind everything I build.',
    description:
      'I spend time understanding complexity analysis, recursion, dynamic programming, and system design basics so that my decisions are grounded in solid computer science reasoning.',
    stats: ['Time & Space Complexity', 'Recursion + DP', 'System Design Basics'],
    accent: 'from-[#e3e8ff] to-[#90a8ff]',
  },
  Platforms: {
    title: 'I learn in public and build with modern developer tools.',
    description:
      'GitHub, LinkedIn, LeetCode, React, and frontend fundamentals like HTML, CSS, and JavaScript are part of the ecosystem around my work. They support how I ship projects, connect professionally, and keep improving.',
    stats: ['HTML / CSS / JavaScript', 'React', 'GitHub / LinkedIn'],
    accent: 'from-[#ffe0ec] to-[#ff84ac]',
  },
} as const;

interface AdaptabilitySectionProps {
  reduceMotion?: boolean;
}

export const AdaptabilitySection: React.FC<AdaptabilitySectionProps> = ({ reduceMotion }) => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Problem Solving');
  const active = contentData[activeTab];

  return (
    <section id="skills" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#ff6723] py-20 text-center">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl px-6"
      >
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/55">Technical Profile</p>
        <h2 className="mx-auto max-w-4xl text-4xl font-serif-heading font-bold leading-tight text-white md:text-6xl">
          My portfolio is being built on consistent fundamentals, focused learning, and real execution.
        </h2>

        <div className="mt-10 flex justify-center">
          <motion.div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 p-2 shadow-2xl backdrop-blur-xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-black' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {isActive && !reduceMotion && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 rounded-full bg-white -z-10"
                      transition={{ type: 'spring', bounce: 0.28, duration: 0.55 }}
                    />
                  )}
                  {isActive && reduceMotion && <div className="absolute inset-0 -z-10 rounded-full bg-white" />}
                  {tab}
                </button>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <div className="relative mt-12 w-full max-w-[1100px] px-4 md:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(8px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid min-h-[420px] md:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="flex flex-col justify-between p-8 text-left md:p-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">Current Focus Area</p>
                  <h3 className="mt-4 max-w-xl text-3xl font-serif-heading font-bold leading-tight text-white md:text-5xl">
                    {active.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{active.description}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  {active.stats.map((stat) => (
                    <span key={stat} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/78">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`relative flex items-center justify-center bg-gradient-to-br ${active.accent} p-8 text-black`}>
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.22) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
                <div className="relative w-full max-w-sm rounded-[1.8rem] border border-black/10 bg-white/75 p-6 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/45">Snapshot</p>
                  <div className="mt-6 space-y-4">
                    {active.stats.map((stat, index) => (
                      <div key={stat} className="flex items-center justify-between rounded-2xl border border-black/8 bg-black/5 px-4 py-4">
                        <span className="text-sm font-medium text-black/65">0{index + 1}</span>
                        <span className="text-sm font-bold uppercase tracking-[0.12em] text-black">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
