import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight, Mail, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-300 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-xs py-4 border-b border-slate-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand / Name Tag */}
        <a
          href="#home"
          className="flex items-center gap-2 group mr-4"
        >
          <span className="w-7 h-7 bg-[#0A0F1D] text-white flex items-center justify-center font-editorial font-extrabold text-sm border border-[#B8860B]/60 shadow-2xs group-hover:bg-[#B8860B] transition-colors">
            ST
          </span>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#0A0F1D] group-hover:text-[#B8860B] transition-colors leading-none">
              Syed Thousif
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8860B] font-bold mt-0.5">
              MS &middot; IT Project Manager
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') || (link.href === '#home' && activeSection === 'home');
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative py-1 text-sm font-bold tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#B8860B]'
                    : 'text-[#1E293B] hover:text-[#0A0F1D]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#B8860B]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#0A0F1D] border border-slate-300 bg-white hover:border-[#B8860B] hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Resume</span>
          </button>

          {/* Contact Direct Link */}
          <a
            href="#contact"
            id="nav-contact-cta"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#0A0F1D] hover:bg-[#1E293B] text-white transition-all shadow-xs"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B8860B]" />
          </a>
        </div>

        {/* Mobile Buttons (Resume + Menu toggle) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 px-2.5 py-2 text-[11px] font-bold uppercase tracking-wider text-[#0A0F1D] border border-slate-300 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-2xs min-h-[40px]"
          >
            <FileText className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Resume</span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation menu"
            className="p-2 border border-slate-300 bg-white text-slate-900 cursor-pointer shadow-2xs min-h-[40px] min-w-[40px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#0A0F1D]" /> : <Menu className="w-5 h-5 text-[#0A0F1D]" />}
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
            className="md:hidden border-b border-slate-300 bg-white/98 backdrop-blur-md px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {/* Status Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0A0F1D] font-bold">
                    {profileData.status}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-700 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Chicago, IL</span>
                </div>
              </div>

              {/* Navigation Links with Large Touch Targets */}
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-bold py-2.5 px-3 border transition-colors flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? 'bg-[#B8860B]/10 border-[#B8860B] text-[#B8860B]'
                          : 'bg-slate-50 border-slate-200 text-[#0A0F1D] hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 bg-[#B8860B]" />}
                    </a>
                  );
                })}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-3 mt-1 border-t border-slate-200 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider border-2 border-slate-300 text-[#0A0F1D] bg-white hover:border-[#B8860B] transition-colors min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-[#B8860B]" />
                  <span>View &amp; Print Full Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider bg-[#0A0F1D] text-white hover:bg-[#1E293B] transition-colors min-h-[44px]"
                >
                  <span>Connect With Syed</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B8860B]" />
                </a>

                <div className="flex items-center justify-center gap-4 pt-2 text-xs font-mono text-slate-700">
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#0A0F1D] hover:text-[#B8860B] font-bold p-1"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>LinkedIn</span>
                  </a>
                  <span>&bull;</span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-1.5 text-[#0A0F1D] hover:text-[#B8860B] font-bold p-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

