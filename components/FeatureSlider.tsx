import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const slides = [
  {
    id: 1,
    total: 4,
    title: 'Achievement Highlights',
    description:
      'I already have a few milestones that show consistency: solving over 100 LeetCode problems, staying regular with daily challenges, and balancing academic progress with hands-on development.',
    accentColor: '#FFE1C2',
    bgText: 'WIN',
    workspaceTitle: 'Momentum',
    features: ['750+ LeetCode problems', 'Daily challenge discipline'],
  },
  {
    id: 2,
    total: 4,
    title: 'Science Mela Recognition',
    description:
      'My IoT Smart Dustbin project earned 1st position at a district-level Science Mela, which reinforced my interest in practical systems that connect ideas to real-world outcomes.',
    accentColor: '#D9F99D',
    bgText: 'IOT',
    workspaceTitle: 'Recognition',
    features: ['1st position district level', 'Sensor-based automation project'],
  },
  {
    id: 3,
    total: 4,
    title: 'Builder Mindset',
    description:
      'I am not only studying concepts but also building them into projects, especially around backend development, educational tools, and structured document systems.',
    accentColor: '#C7D2FE',
    bgText: 'BUILD',
    workspaceTitle: 'Execution',
    features: ['Backend project building', 'Learning by implementation'],
  },
  {
    id: 4,
    total: 4,
    title: 'Long-Term Direction',
    description:
      'My current path is clear: master DSA and system design, grow into a full-stack developer, and earn strong internship and placement opportunities through genuine capability.',
    accentColor: '#FBCFE8',
    bgText: 'GOAL',
    workspaceTitle: 'Roadmap',
    features: ['Full-stack growth', 'Top internship focus'],
  },
];

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(10px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring', stiffness: 260, damping: 30 },
      opacity: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(10px)',
    transition: {
      x: { type: 'spring', stiffness: 260, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

interface FeatureSliderProps {
  reduceMotion?: boolean;
}

export const FeatureSlider: React.FC<FeatureSliderProps> = ({ reduceMotion }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const slideIndex = ((page % slides.length) + slides.length) % slides.length;
  const slide = slides[slideIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="relative overflow-hidden bg-[#ff6723] px-4 py-10 md:px-12 md:py-16">
      <div className="mx-auto flex min-h-[540px] max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-[#121212] shadow-2xl">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid w-full lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="flex flex-col justify-between p-8 md:p-14">
              <div>
                <p className="text-lg font-medium text-zinc-500">
                  {slide.id}/{slide.total}
                </p>
                <h3 className="mt-5 max-w-xl text-3xl font-serif-heading font-bold leading-tight text-white md:text-5xl">
                  {slide.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
                  {slide.description}
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {slide.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6723] text-sm font-black text-black">
                      +
                    </div>
                    <p className="text-base font-semibold text-white">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden p-8 md:p-12" style={{ backgroundColor: slide.accentColor }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <span className="text-[9rem] font-black leading-none text-black md:text-[16rem]">{slide.bgText}</span>
              </div>

              <div className="relative w-full max-w-xl rounded-[2rem] border border-black/10 bg-black/85 p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">Portfolio Data</p>
                    <p className="mt-1 text-lg font-semibold">{slide.workspaceTitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/20" />
                    <div className="h-3 w-3 rounded-full bg-white/12" />
                    <div className="h-3 w-3 rounded-full bg-white/8" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {slide.features.map((feature, index) => (
                    <div key={feature} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Focus 0{index + 1}</p>
                      <p className="mt-3 text-xl font-bold leading-snug text-white">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => paginate(-1)}
                    className="rounded-full border border-white/12 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="btn-liquid-glass px-5 py-3 text-sm font-bold uppercase tracking-[0.18em]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
