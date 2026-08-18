import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check, Download, ExternalLink, MapPin, Mail, Linkedin, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
SYED THOUSIF
${profileData.headline}
Location: ${profileData.location}
Email: ${profileData.email} | LinkedIn: ${profileData.linkedinUrl}
Status: ${profileData.status}

SUMMARY:
${profileData.about}

KEY METRICS:
- Sales Target Overachievement: 70%+ average at Apple
- Professional Network: 500+ Connections
- Combined Industry Experience: 7+ Years

PROFESSIONAL EXPERIENCE:
1. Pioneer Solutions — Junior Project Manager (Aug 2025 – Present | Remote, GA)
${profileData.experiences[0].bullets.map((b) => `  - ${b}`).join('\n')}

2. Apple — Sales Associate (iPro) (Aug 2020 – Dec 2022 | India)
${profileData.experiences[1].bullets.map((b) => `  - ${b}`).join('\n')}
  Accomplishments:
${profileData.experiences[1].accomplishments?.map((a) => `  * ${a}`).join('\n')}

3. Samsung Electronics — Samsung Experience Consultant (Oct 2017 – Aug 2020 | India)
${profileData.experiences[2].bullets.map((b) => `  - ${b}`).join('\n')}

EDUCATION:
- Indiana Wesleyan University: Master of Science in IT Project Management (Mar 2023 – Aug 2024)
- Osmania University: Bachelor of Commerce (BCom) in Computer Applications (Jun 2017 – Nov 2021)

FEATURED PROJECT:
Data Analysis for Marketing Campaign Effectiveness
- Problem: ${profileData.featuredProject.problem}
- Approach: ${profileData.featuredProject.approach}
- Outcome: ${profileData.featuredProject.outcome}

VOLUNTEERING:
Namdhari Event N Promotions — Event Coordinator (Jun 2021 – Oct 2021)
${profileData.volunteering.description}

SKILLS:
- Project Management: ${profileData.skillsByCategory[0].skills.join(', ')}
- IT & Governance: ${profileData.skillsByCategory[1].skills.join(', ')}
- Sales & Business: ${profileData.skillsByCategory[2].skills.join(', ')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white text-[#0F172A] border border-slate-300 shadow-2xl overflow-hidden"
        >
          {/* Action Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B8860B]" />
              <span className="font-bold text-xs uppercase tracking-wider text-[#0F172A]">
                Official Executive Resume &middot; Syed Thousif
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-white hover:border-[#B8860B] transition-colors cursor-pointer shadow-2xs"
                title="Copy plain text resume"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors cursor-pointer shadow-2xs"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 border border-slate-200 hover:border-slate-800 text-slate-500 hover:text-slate-900 transition-colors ml-2 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Printable Document View */}
          <div id="printable-resume" className="overflow-y-auto p-8 sm:p-12 space-y-8 text-left">
            {/* Header / Contact Info */}
            <div className="border-b-2 border-[#0F172A] pb-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-1">
                {profileData.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#B8860B] font-bold uppercase tracking-wider mb-3">
                {profileData.headline}
              </p>
              <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-slate-500">
                <span>{profileData.location}</span>
                <span>&bull;</span>
                <span>{profileData.email}</span>
                <span>&bull;</span>
                <span>{profileData.phone}</span>
                <span>&bull;</span>
                <span className="text-emerald-700 font-bold">{profileData.status}</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold border-b border-slate-200 pb-1 mb-2">
                Executive Profile &amp; Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {profileData.about}
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold border-b border-slate-200 pb-1 mb-4">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {profileData.experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <h3 className="text-base font-bold text-[#0F172A]">
                        {exp.role} &mdash; <span>{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-500">
                        {exp.period} | {exp.location} ({exp.workMode})
                      </span>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 mt-2">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>

                    {exp.accomplishments && (
                      <div className="mt-2 text-xs text-[#0F172A] font-semibold bg-slate-50 p-2.5 border-l-2 border-[#B8860B]">
                        <strong>Key Impact:</strong> {exp.accomplishments.join('; ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold border-b border-slate-200 pb-1 mb-3">
                Featured Technical Case Study
              </h2>
              <div className="bg-slate-50 p-4 border border-slate-200">
                <h3 className="text-base font-bold text-[#0F172A] mb-1">
                  {profileData.featuredProject.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono mb-2">
                  {profileData.featuredProject.tagline}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">
                  <strong>Approach:</strong> {profileData.featuredProject.approach}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Outcome:</strong> {profileData.featuredProject.outcome}
                </p>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold border-b border-slate-200 pb-1 mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {profileData.education.map((edu) => (
                  <div key={edu.id} className="flex flex-wrap justify-between items-start gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        {edu.degree} &mdash; {edu.major}
                      </h3>
                      <p className="text-xs text-slate-600">
                        {edu.school} &middot; Coursework: {edu.coursework.join(', ')}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#B8860B]">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Governance */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold border-b border-slate-200 pb-1 mb-3">
                Skills &amp; Methodologies
              </h2>
              <div className="space-y-2 text-xs">
                {profileData.skillsByCategory.map((cat) => (
                  <p key={cat.category} className="text-slate-700">
                    <strong className="text-[#0F172A]">{cat.category}:</strong>{' '}
                    {cat.skills.join(', ')}
                  </p>
                ))}
              </div>
            </div>

            {/* Volunteering */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold border-b border-slate-200 pb-1 mb-2">
                Leadership &amp; Community
              </h2>
              <p className="text-xs text-slate-700">
                <strong>{profileData.volunteering.role}</strong> &mdash; {profileData.volunteering.organization} ({profileData.volunteering.period}): {profileData.volunteering.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
