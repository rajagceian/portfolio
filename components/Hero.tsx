import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  reduceMotion: boolean;
}

export const Hero: React.FC<HeroProps> = ({ reduceMotion }) => {
  const scrollRequestId = useRef<number | null>(null);

  const startAutoScroll = () => {
    if (scrollRequestId.current) {
      cancelAnimationFrame(scrollRequestId.current);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      const scrollSpeed = 3.2;

      const step = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY < maxScroll - 1) {
          window.scrollBy(0, scrollSpeed);
          scrollRequestId.current = requestAnimationFrame(step);
        } else {
          scrollRequestId.current = null;
        }
      };

      scrollRequestId.current = requestAnimationFrame(step);
    }, 1000);

    const stopScroll = () => {
      if (scrollRequestId.current) {
        cancelAnimationFrame(scrollRequestId.current);
        scrollRequestId.current = null;
        window.removeEventListener('wheel', stopScroll);
        window.removeEventListener('touchstart', stopScroll);
      }
    };

    window.addEventListener('wheel', stopScroll, { once: true });
    window.addEventListener('touchstart', stopScroll, { once: true });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: reduceMotion ? 'none' : 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-none"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-[9rem] lg:text-[10rem] font-serif-heading font-bold leading-[0.9] tracking-tight mb-8 md:mb-14"
        >
          Raja&apos;s portfolio
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl lg:text-4xl font-serif-heading italic font-medium mb-12 opacity-90 tracking-tight"
        >
          (CSE student, backend learner, problem solver)
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-normal leading-relaxed mb-12"
        >
          I&apos;m Raja Kumar, a third-year Computer Science Engineering student focused on DSA, backend development, and building projects that solve real problems.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          <button
            onClick={startAutoScroll}
            className="btn-liquid-glass text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl"
          >
            Let&apos;s Start
          </button>

          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>by</span>
            <span className="font-bold text-white/80 text-lg tracking-tighter">Raja Kumar</span>
          </div>
        </motion.div>
      </motion.div>

      {!reduceMotion && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-zinc-900/20 to-transparent blur-[120px]" />
        </div>
      )}
    </section>
  );
};
