import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle,
  Calendar,
  Sparkles,
  Building2,
  Layers,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { profileData } from '../data/profile';
import executiveLoungeImg from '../assets/images/executive_lounge_1787015267068.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTabMasters, setActiveTabMasters] = useState<'overview' | 'coursework'>('overview');
  const [activeTabBachelors, setActiveTabBachelors] = useState<'overview' | 'coursework'>('overview');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax translation for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const mastersEdu = profileData.education[0];
  const bachelorsEdu = profileData.education[1];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 sm:py-32 border-b border-slate-200 overflow-hidden"
    >
      {/* Parallax Lazy-Loaded High-Quality Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[12%] -bottom-[12%] inset-x-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src={executiveLoungeImg}
          alt="Open Innovation Lounge & Architectural Collaborative Hub"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[1.04] contrast-[1.08] saturate-[1.06]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-Stop Gradient Overlays: keeps background crisp and translucent while protecting readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 via-45% to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_30%_30%,_rgba(255,255,255,0.75)_0%,_rgba(255,255,255,0.2)_50%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/10" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] block mb-2 font-bold flex items-center gap-2 drop-shadow-2xs">
            <GraduationCap className="w-4 h-4" /> 03 &middot; Academic Credentials &amp; Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0A0F1D] tracking-tight font-editorial leading-[1.15] drop-shadow-xs">
            Advanced Degrees &amp; Qualifications
          </h2>
          <div className="w-16 h-1.5 bg-[#B8860B] mt-4 mb-3 shadow-xs" />
          <p className="text-base sm:text-lg text-[#0A0F1D] max-w-2xl leading-relaxed font-medium">
            Rigorous post-graduate specialization in IT Project Management complemented by foundational business computing applications and enterprise IT compliance.
          </p>
        </motion.div>

        {/* Dual-Degree Executive Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 items-stretch"
        >
          {/* ============================================================ */}
          {/* 1. MASTER'S DEGREE */}
          {/* ============================================================ */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative border-2 border-[#B8860B] bg-white/80 hover:bg-white/95 backdrop-blur-xs p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Top Gold Corner Accent */}
            <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden pointer-events-none">
              <div className="absolute transform rotate-45 bg-[#B8860B] text-white right-[-24px] top-[-24px] w-12 h-12" />
            </div>

            <div>
              {/* Card Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-white border border-[#B8860B] flex items-center justify-center text-[#B8860B] shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#B8860B] font-black block">
                      Graduate Specialization
                    </span>
                    <span className="text-[11px] font-mono text-[#0A0F1D] font-bold">
                      Degree 01 &middot; Master of Science
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-mono font-black uppercase tracking-wider bg-white border-2 border-[#B8860B] text-[#B8860B] shadow-2xs">
                  {mastersEdu.score}
                </span>
              </div>

              {/* View Mode Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-5 p-1 bg-white border border-slate-300">
                <button
                  type="button"
                  onClick={() => setActiveTabMasters('overview')}
                  className={`flex-1 py-2 px-2.5 sm:px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[38px] text-center ${
                    activeTabMasters === 'overview'
                      ? 'bg-[#0A0F1D] text-white shadow-2xs'
                      : 'text-slate-700 hover:text-[#0A0F1D] bg-transparent'
                  }`}
                >
                  Overview &amp; Highlights
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTabMasters('coursework')}
                  className={`flex-1 py-2 px-2.5 sm:px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[38px] text-center ${
                    activeTabMasters === 'coursework'
                      ? 'bg-[#B8860B] text-white shadow-2xs'
                      : 'text-slate-700 hover:text-[#B8860B] bg-transparent'
                  }`}
                >
                  Curriculum &amp; Modules
                </button>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F1D] mb-1 font-editorial">
                  {mastersEdu.degree}
                </h3>
                <div className="text-base font-bold text-[#B8860B] mb-2">
                  {mastersEdu.major}
                </div>
                <div className="text-base font-black text-[#0A0F1D] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-700" />
                  <span>{mastersEdu.school}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-700 mt-2">
                  <span className="flex items-center gap-1.5 font-bold text-[#0A0F1D]">
                    <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                    {mastersEdu.period}
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeTabMasters === 'overview' ? (
                  <motion.div
                    key="masters-overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-xs sm:text-sm text-[#1E293B] mb-4 leading-relaxed font-medium">
                      {mastersEdu.description}
                    </p>

                    {/* Highlights */}
                    {mastersEdu.highlights && (
                      <div className="mb-5 space-y-2 text-xs text-[#0A0F1D] bg-white/70 backdrop-blur-xs p-3.5 border-l-4 border-[#B8860B] border-y border-r border-slate-300 shadow-2xs">
                        {mastersEdu.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-bold">{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="masters-coursework"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8860B] font-black block mb-1">
                        Core Graduate Disciplines
                      </span>
                      <p className="text-xs text-[#1E293B] leading-relaxed mb-3 font-medium">
                        Specialized modules in high-stakes IT program governance, risk architecture, and enterprise delivery:
                      </p>
                    </div>

                    <div className="space-y-2 mb-5">
                      {mastersEdu.coursework.map((course, cIdx) => (
                        <div
                          key={course}
                          className="p-2.5 bg-white border border-slate-300 flex items-center gap-2.5 text-xs text-[#0A0F1D] font-bold shadow-2xs"
                        >
                          <span className="w-5 h-5 bg-[#B8860B]/15 text-[#B8860B] font-mono text-[10px] flex items-center justify-center font-black">
                            0{cIdx + 1}
                          </span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="pt-4 border-t border-slate-300 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" /> Verified Master&rsquo;s Credential
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveTabMasters((prev) => (prev === 'overview' ? 'coursework' : 'overview'))
                }
                className="px-3 py-1.5 text-xs font-mono uppercase font-bold text-[#0A0F1D] hover:text-[#B8860B] bg-white hover:bg-slate-50 border border-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs min-h-[36px]"
              >
                <BookOpen className="w-3 h-3 text-[#B8860B]" />
                <span>{activeTabMasters === 'overview' ? 'View Coursework' : 'View Overview'}</span>
              </button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 2. BACHELOR'S DEGREE */}
          {/* ============================================================ */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative border-2 border-slate-300 bg-white/80 hover:bg-white/95 backdrop-blur-xs hover:border-[#B8860B] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Corner Gold Accent Indicator */}
            <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute transform rotate-45 bg-[#B8860B] text-white right-[-24px] top-[-24px] w-12 h-12" />
            </div>

            <div>
              {/* Card Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-white border border-slate-300 flex items-center justify-center text-[#B8860B] shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0A0F1D] font-black block">
                      Undergraduate Foundation
                    </span>
                    <span className="text-[11px] font-mono text-slate-700 font-bold">
                      Degree 02 &middot; Bachelor of Commerce
                    </span>
                  </div>
                </div>
                {/* Status Pill */}
                <span className="px-3 py-1 text-xs font-mono font-black uppercase tracking-wider bg-white border-2 border-slate-300 text-[#0A0F1D] shadow-2xs">
                  {bachelorsEdu.score}
                </span>
              </div>

              {/* View Mode Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-5 p-1 bg-white border border-slate-300">
                <button
                  type="button"
                  onClick={() => setActiveTabBachelors('overview')}
                  className={`flex-1 py-2 px-2.5 sm:px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[38px] text-center ${
                    activeTabBachelors === 'overview'
                      ? 'bg-[#0A0F1D] text-white shadow-2xs'
                      : 'text-slate-700 hover:text-[#0A0F1D] bg-transparent'
                  }`}
                >
                  Overview &amp; Highlights
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTabBachelors('coursework')}
                  className={`flex-1 py-2 px-2.5 sm:px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[38px] text-center ${
                    activeTabBachelors === 'coursework'
                      ? 'bg-[#B8860B] text-white shadow-2xs'
                      : 'text-slate-700 hover:text-[#B8860B] bg-transparent'
                  }`}
                >
                  Curriculum &amp; Modules
                </button>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F1D] mb-1 font-editorial">
                  {bachelorsEdu.degree}
                </h3>
                <div className="text-base font-bold text-[#B8860B] mb-2">
                  {bachelorsEdu.major}
                </div>
                <div className="text-base font-black text-[#0A0F1D] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-700" />
                  <span>{bachelorsEdu.school}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-700 mt-2">
                  <span className="flex items-center gap-1.5 font-bold text-[#0A0F1D]">
                    <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                    {bachelorsEdu.period}
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeTabBachelors === 'overview' ? (
                  <motion.div
                    key="bachelors-overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-xs sm:text-sm text-[#1E293B] mb-4 leading-relaxed font-medium">
                      {bachelorsEdu.description}
                    </p>

                    {/* Highlights */}
                    {bachelorsEdu.highlights && (
                      <div className="mb-5 space-y-2 text-xs text-[#0A0F1D] bg-white/70 backdrop-blur-xs p-3.5 border-l-4 border-[#B8860B] border-y border-r border-slate-300 shadow-2xs">
                        {bachelorsEdu.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-bold">{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="bachelors-coursework"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8860B] font-black block mb-1">
                        Commercial &amp; Computing Systems Focus
                      </span>
                      <p className="text-xs text-[#1E293B] leading-relaxed mb-3 font-medium">
                        Core disciplines spanning commercial database systems, accounting analytics, e-commerce infrastructure, and financial programming:
                      </p>
                    </div>

                    <div className="space-y-2 mb-5">
                      {bachelorsEdu.coursework.map((course, cIdx) => (
                        <div
                          key={course}
                          className="p-2.5 bg-white border border-slate-300 flex items-center gap-2.5 text-xs text-[#0A0F1D] font-bold shadow-2xs"
                        >
                          <span className="w-5 h-5 bg-[#0A0F1D]/10 text-[#0A0F1D] font-mono text-[10px] flex items-center justify-center font-black">
                            0{cIdx + 1}
                          </span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="pt-4 border-t border-slate-300 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Verified Foundation Degree
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveTabBachelors((prev) => (prev === 'overview' ? 'coursework' : 'overview'))
                }
                className="px-3 py-1.5 text-xs font-mono uppercase font-bold text-[#0A0F1D] hover:text-[#B8860B] bg-white hover:bg-slate-50 border border-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs min-h-[36px]"
              >
                <BookOpen className="w-3 h-3 text-[#B8860B]" />
                <span>{activeTabBachelors === 'overview' ? 'View Coursework' : 'View Overview'}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
