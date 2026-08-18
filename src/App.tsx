import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Enforce crisp white light theme and clean any stale dark mode preferences
    if (typeof window !== 'undefined') {
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#B8860B]/25 selection:text-[#0F172A] relative">
      {/* Fixed Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation (Clean, no theme button) */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Back to Top Control */}
      <BackToTop />

      {/* Interactive Printable Executive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
