import React from 'react';
import { profileData } from '../data/profile';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-700 pb-8 border-b border-slate-200">
          <a href="#about" className="hover:text-[#B8860B] transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-[#B8860B] transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-[#B8860B] transition-colors">
            Skills
          </a>
          <a href="#education" className="hover:text-[#B8860B] transition-colors">
            Education
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-[#B8860B] transition-colors cursor-pointer"
          >
            Resume
          </button>
          <a href="#contact" className="hover:text-[#B8860B] transition-colors">
            Contact
          </a>
        </div>

        {/* Bottom copyright and status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>{profileData.status}</span>
          </div>
          <div>
            Typeset in Plus Jakarta Sans &amp; Newsreader &middot; &copy; {new Date().getFullYear()} Syed Thousif
          </div>
        </div>
      </div>
    </footer>
  );
};
