import React from 'react';
import { ArrowUp, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-base tracking-wider uppercase text-[#0F172A]">
              SYED THOUSIF
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
            <span className="text-xs text-slate-500 font-medium">
              &middot; IT Project Management &amp; Sales Leadership
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
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

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 border border-slate-300 bg-slate-50 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:border-[#B8860B] transition-colors cursor-pointer shadow-2xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B8860B]" />
          </button>
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
