import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5'
          : 'bg-white/90 backdrop-blur-xs py-4.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') || (link.href === '#home' && activeSection === 'home');
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative py-1 text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#B8860B]'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8860B]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions (Resume, Professional CTA - Theme button removed) */}
        <div className="hidden lg:flex items-center gap-3.5">
          {/* Quick Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] border border-slate-300 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Resume</span>
          </button>

          {/* Contact Direct Link */}
          <a
            href="#contact"
            id="nav-contact-cta"
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all shadow-xs"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B8860B]" />
          </a>
        </div>

        {/* Mobile Hamburger & Quick Action */}
        <div className="flex md:hidden items-center justify-between w-full">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] border border-slate-300 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Resume</span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation menu"
            className="p-2 border border-slate-300 bg-white text-slate-800 cursor-pointer shadow-2xs"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-200 bg-white px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold">
                  {profileData.status}
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-1.5 transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#B8860B]'
                      : 'text-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider border border-slate-300 text-slate-900 bg-white"
                >
                  <FileText className="w-4 h-4 text-[#B8860B]" />
                  <span>View Full Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white"
                >
                  <span>Connect With Syed</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
