
import React, { useState, useEffect } from 'react';
import { motion, MotionConfig, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NakulaHero } from './components/NakulaHero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AdaptabilitySection } from './components/AdaptabilitySection';
import { FeatureSlider } from './components/FeatureSlider';
import { ServicesSection } from './components/ServicesSection';
import { ScrollingBanner } from './components/ScrollingBanner';
import { MissionSection } from './components/MissionSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [showFloatingUI, setShowFloatingUI] = useState(false);
  const { scrollY } = useScroll();

  // Show floating buttons only after scrolling past the initial hero view (approx 700px)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 700) {
      if (!showFloatingUI) setShowFloatingUI(true);
    } else {
      if (showFloatingUI) setShowFloatingUI(false);
    }
  });

  useEffect(() => {
    if (reduceMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [reduceMotion]);

  return (
    <MotionConfig transition={reduceMotion ? { duration: 0 } : undefined}>
      <div className="min-h-screen bg-[#000000] text-white selection:bg-[#ffffff] selection:text-black">
        <div 
          className="fixed top-0 left-0 right-0 h-[25vh] z-[105] pointer-events-none opacity-80"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)'
          }}
        />

        <Navbar />
        
        <main>
          <NakulaHero reduceMotion={reduceMotion} />

          <div className="bg-[#ff6723]">
            <Hero reduceMotion={reduceMotion} />

            <ProjectShowcase reduceMotion={reduceMotion} />

            <ScrollingBanner reduceMotion={reduceMotion} />

            <AdaptabilitySection reduceMotion={reduceMotion} />

            <FeatureSlider reduceMotion={reduceMotion} />

            <ServicesSection reduceMotion={reduceMotion} />
            
            <MissionSection reduceMotion={reduceMotion} />
          </div>
        </main>

        <Footer reduceMotion={reduceMotion} />

        <AnimatePresence>
          {showFloatingUI && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={reduceMotion ? {} : { scale: 1.1 }}
                whileTap={reduceMotion ? {} : { scale: 0.9 }}
                className="btn-liquid-glass p-4 rounded-full text-white shadow-2xl flex items-center justify-center"
                title="Jump to contact"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <button 
                onClick={() => setReduceMotion(!reduceMotion)}
                className="btn-liquid-glass px-6 py-3 text-xs font-semibold tracking-wide rounded-full text-white shadow-xl"
              >
                {reduceMotion ? 'Enable motion' : 'Reduce motion'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default App;
