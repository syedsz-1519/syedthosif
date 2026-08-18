import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 h-[3.5px] z-50 bg-slate-200/50 pointer-events-none"
    >
      <motion.div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] origin-left shadow-xs"
        style={{ scaleX }}
      />
    </div>
  );
};
