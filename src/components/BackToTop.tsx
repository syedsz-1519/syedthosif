import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Reveal button once scrolled past hero section (approx 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility(); // Check initial state

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-btn"
          aria-label="Back to top of page"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-white/95 backdrop-blur-md border border-slate-300 hover:border-[#B8860B] text-[#0F172A] hover:text-[#B8860B] shadow-lg hover:shadow-xl transition-colors cursor-pointer group flex items-center justify-center"
        >
          <ArrowUp className="w-4 h-4 text-[#0F172A] group-hover:text-[#B8860B] transition-colors" />
          <span className="sr-only">Back to Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
