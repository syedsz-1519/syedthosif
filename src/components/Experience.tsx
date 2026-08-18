import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Briefcase, Building2, Calendar, MapPin, Award, CheckCircle2, Layers, Sparkles, BarChart3, ChevronRight, ArrowUpRight, Cpu } from 'lucide-react';
import { profileData } from '../data/profile';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Experience: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax translation for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const allSkills = profileData.skillsByCategory.flatMap((c) =>
    c.skills.map((s) => ({ name: s, category: c.category }))
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32 border-b border-slate-200 overflow-hidden"
    >
      {/* Parallax Background Image: Modern Tech Corporate Hub with Dynamic Gradient Overlays */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[12%] -bottom-[12%] inset-x-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2200&q=90"
          alt="Modern Corporate Innovation Center"
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.06]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-Stop Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/45 via-45% to-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_30%_30%,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0.35)_50%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-white/25" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header with Staggered Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="mb-16 max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-[#B8860B] block mb-2 font-bold flex items-center gap-2 drop-shadow-2xs"
          >
            <Briefcase className="w-4 h-4" /> 02 &middot; Professional Journey
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-editorial drop-shadow-xs"
          >
            Career Timeline &amp; Measurable Impact
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-[#B8860B] mt-4 mb-3 shadow-xs"
          />
          <motion.p
            variants={itemVariants}
            className="text-base text-slate-900 max-w-2xl leading-relaxed font-medium"
          >
            A track record spanning agile project management, technical governance, and high-volume commercial revenue growth across multinational organizations.
          </motion.p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative mb-24">
          {/* Vertical central line (Desktop) / Left line (Mobile) */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-slate-300/90 pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="space-y-12"
          >
            {profileData.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12 pl-12 md:pl-0`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-9 h-9 bg-white/95 border-2 border-[#0F172A] flex items-center justify-center z-10 shadow-sm transition-transform hover:scale-110">
                    <span className="font-mono text-xs font-bold text-[#B8860B]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Spacer for desktop symmetry */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Container with Glass Frame */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ y: -3, transition: { duration: 0.25 } }}
                      className="group border border-slate-300/90 bg-white/35 hover:bg-white/50 backdrop-blur-md hover:border-[#B8860B] p-6 sm:p-8 transition-all duration-300 shadow-xs relative"
                    >
                      {/* Top Gold Corner Accent on Hover */}
                      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute transform rotate-45 bg-[#B8860B] text-white right-[-24px] top-[-24px] w-12 h-12" />
                      </div>

                      {/* Card Top Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-300/80">
                        <div className="flex items-center gap-3">
                          {/* Logo Badge */}
                          <div
                            className={`w-9 h-9 flex items-center justify-center text-xs font-bold text-white font-mono bg-gradient-to-br ${exp.logoColor} border border-black/10 shadow-2xs`}
                          >
                            {exp.company === 'Apple' ? (
                              <span className="text-base leading-none"></span>
                            ) : exp.company === 'Samsung Electronics' ? (
                              <span className="text-xs font-sans font-black tracking-tighter">SAM</span>
                            ) : (
                              <span>PS</span>
                            )}
                          </div>
                          <div>
                            <span className="text-xl font-bold text-[#0F172A] group-hover:text-[#B8860B] transition-colors block">
                              {exp.company}
                            </span>
                            <span className="text-xs font-mono text-slate-700 font-medium">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Work Mode Pill */}
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/90 border border-slate-300 text-[#0F172A] font-bold group-hover:border-[#B8860B]/60 transition-colors shadow-2xs">
                            {exp.workMode}
                          </span>
                        </div>
                      </div>

                      {/* Role & Period */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-[#0F172A] mb-1 font-editorial">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-700">
                          <span className="flex items-center gap-1 font-semibold">
                            <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 font-semibold">
                            <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      {exp.summary && (
                        <p className="text-sm text-slate-900 mb-4 leading-relaxed font-normal">
                          {exp.summary}
                        </p>
                      )}

                      {/* Key Accomplishments Highlights */}
                      {exp.accomplishments && exp.accomplishments.length > 0 && (
                        <div className="mb-4 p-3.5 bg-white/45 backdrop-blur-xs border-l-3 border-[#B8860B] border-y border-r border-slate-300 shadow-2xs group-hover:border-r-[#B8860B]/60 transition-colors">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8860B] font-bold block mb-1.5 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5" /> Key Accomplishments
                          </span>
                          <ul className="space-y-1.5 text-xs text-[#0F172A]">
                            {exp.accomplishments.map((acc, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B8860B] shrink-0 mt-1.5" />
                                <span className="font-semibold">{acc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Responsibilities Bullets */}
                      <div className="space-y-2 mb-5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-800 block mb-1 font-bold">
                          Core Responsibilities
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-900">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#0F172A] group-hover:bg-[#B8860B] transition-colors shrink-0 mt-1.5" />
                              <span className="leading-relaxed font-normal">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skill Tags with Hover Lift */}
                      <div className="pt-4 border-t border-slate-300/80 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ y: -1, scale: 1.02 }}
                            className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/90 border border-slate-300 text-slate-800 font-semibold hover:border-[#B8860B] hover:text-[#B8860B] transition-all cursor-default shadow-2xs"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}

            {/* Featured Project Case Study */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col md:flex-row items-start md:flex-row-reverse gap-6 md:gap-12 pl-12 md:pl-0"
            >
              {/* Timeline Badge Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-9 h-9 bg-[#B8860B] border-2 border-[#0F172A] flex items-center justify-center z-10 shadow-sm text-white">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Spacer for desktop symmetry */}
              <div className="hidden md:block md:w-1/2" />

              {/* Project Card with Translucent Frame */}
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group border-2 border-[#B8860B] bg-white/40 hover:bg-white/55 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Category Banner */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/80">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#B8860B]" />
                      <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold">
                        Featured Analytical Case Study
                      </span>
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/30 font-bold">
                      CapStone Project
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-1 font-editorial">
                    {profileData.featuredProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-700 mb-6 font-semibold">
                    {profileData.featuredProject.tagline}
                  </p>

                  {/* Problem → Approach → Outcome */}
                  <div className="space-y-3.5 text-xs sm:text-sm mb-6">
                    <div className="bg-white/55 backdrop-blur-xs p-3.5 border-l-3 border-[#0F172A] border-y border-r border-slate-300/80">
                      <strong className="font-mono text-xs uppercase tracking-wider text-[#0F172A] block mb-1 font-bold">
                        1. Problem Statement
                      </strong>
                      <p className="text-slate-900 leading-relaxed font-normal">
                        {profileData.featuredProject.problem}
                      </p>
                    </div>

                    <div className="bg-white/55 backdrop-blur-xs p-3.5 border-l-3 border-[#B8860B] border-y border-r border-slate-300/80">
                      <strong className="font-mono text-xs uppercase tracking-wider text-[#B8860B] block mb-1 font-bold">
                        2. Analytical Approach &amp; Execution
                      </strong>
                      <p className="text-slate-900 leading-relaxed font-normal">
                        {profileData.featuredProject.approach}
                      </p>
                    </div>

                    <div className="bg-white/55 backdrop-blur-xs p-3.5 border-l-3 border-emerald-600 border-y border-r border-slate-300/80">
                      <strong className="font-mono text-xs uppercase tracking-wider text-emerald-700 block mb-1 font-bold">
                        3. Business Outcome &amp; ROI
                      </strong>
                      <p className="text-slate-900 leading-relaxed font-normal">
                        {profileData.featuredProject.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Impact Metric Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
                    {profileData.featuredProject.impactMetrics.map((im, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-white/80 backdrop-blur-xs border border-slate-300 text-center hover:border-[#B8860B] transition-colors shadow-2xs"
                      >
                        <div className="text-sm font-extrabold text-[#0F172A]">
                          {im.value}
                        </div>
                        <div className="text-[10px] font-mono text-slate-700 uppercase font-bold">
                          {im.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools & Skills Tags */}
                  <div className="pt-4 border-t border-slate-300/80 flex flex-wrap gap-1.5">
                    {profileData.featuredProject.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -1, scale: 1.02 }}
                        className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/90 border border-[#B8860B]/40 text-[#0F172A] font-semibold hover:border-[#B8860B] hover:text-[#B8860B] transition-all cursor-default shadow-2xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Competency Matrix */}
        <div id="skills" className="relative pt-16 border-t border-slate-300/80">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          >
            <div>
              <motion.span
                variants={itemVariants}
                className="text-xs font-mono uppercase tracking-widest text-[#B8860B] block mb-2 font-bold flex items-center gap-2 drop-shadow-2xs"
              >
                <Cpu className="w-4 h-4" /> Competency Matrix
              </motion.span>
              <motion.h3
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-editorial drop-shadow-xs"
              >
                Categorized Core Skills
              </motion.h3>
            </div>

            {/* Quick Category Filters */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSkillCategory('all')}
                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer shadow-2xs ${
                  activeSkillCategory === 'all'
                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                    : 'bg-white/90 text-slate-800 border-slate-300 hover:border-[#0F172A] hover:text-[#0F172A]'
                }`}
              >
                All Skills ({allSkills.length})
              </button>
              {profileData.skillsByCategory.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveSkillCategory(cat.category)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer shadow-2xs ${
                    activeSkillCategory === cat.category
                      ? 'bg-[#B8860B] text-white border-[#B8860B]'
                      : 'bg-white/90 text-slate-800 border-slate-300 hover:border-[#B8860B] hover:text-[#B8860B]'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* 3 Grouped Columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {profileData.skillsByCategory.map((cat) => {
              const isSelected = activeSkillCategory === 'all' || activeSkillCategory === cat.category;
              return (
                <motion.div
                  key={cat.category}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`border ${
                    isSelected ? 'border-slate-300/90 hover:border-[#B8860B] bg-white/35 hover:bg-white/50' : 'border-slate-300/40 bg-white/20 opacity-60'
                  } backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8860B] font-bold">
                        {cat.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-700 font-bold">
                        {cat.skills.length} Skills
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#0F172A] mb-2 font-editorial">
                      {cat.category}
                    </h4>
                    <p className="text-xs text-slate-900 mb-6 leading-relaxed font-normal">
                      {cat.description}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ y: -1.5, scale: 1.03 }}
                          className="px-2.5 py-1.5 text-xs font-semibold bg-white/90 border border-slate-300 text-[#0F172A] hover:border-[#B8860B] hover:text-[#B8860B] hover:bg-white transition-all duration-200 cursor-default shadow-2xs"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
