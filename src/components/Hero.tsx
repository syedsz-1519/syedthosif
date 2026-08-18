import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Linkedin, Mail, MapPin, Award, CheckCircle2, ChevronRight, FileText, Sparkles, Building2, Briefcase, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profile';
import heroDeskSetupImg from '../assets/images/hero_desk_setup_1787015453013.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    rotateX: 4,
    scale: 0.985,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transformPerspective: 1000,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax translation for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profileData.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-14 border-b border-slate-200 overflow-hidden"
    >
      {/* Parallax Background Image Container with Dynamic Gradient Overlay */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[10%] -bottom-[15%] inset-x-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src={heroDeskSetupImg}
          alt="Personal Executive Desk & Ergonomic Workstation"
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        
        {/* Dynamic Multi-Stop Gradient Overlays: reveals personal office setup vividly while keeping text 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 via-45% to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_30%,_rgba(255,255,255,0.75)_0%,_rgba(255,255,255,0.2)_50%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/10" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 sm:px-8 flex-1 flex flex-col justify-center py-8">
        {/* Clean Hero Typography Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Top Badges Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-slate-300 shadow-xs hover:border-[#B8860B] transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                Chicago, IL &middot; Available for US Roles
              </span>
            </div>

            {/* Ex-Apple Credential Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-slate-300 shadow-xs hover:border-[#B8860B] transition-colors">
              <Award className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Ex-Apple (70%+ Avg Exceed)
              </span>
            </div>
          </motion.div>

          {/* Fluid Font Headline */}
          <motion.div variants={itemVariants}>
            <h1
              id="hero-name"
              className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold tracking-tight text-[#0F172A] leading-[1.06] mb-3 font-editorial drop-shadow-xs"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw + 1rem, 4.75rem)' }}
            >
              {profileData.name}
            </h1>
            <div className="w-24 h-1.5 bg-[#B8860B] mb-5 shadow-xs" />
          </motion.div>

          {/* Rotating Specialization Title */}
          <motion.div
            variants={itemVariants}
            className="min-h-11 sm:h-12 flex flex-wrap items-center mb-5"
          >
            <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-slate-800 mr-3 drop-shadow-2xs">
              Specialization:
            </span>
            <div className="overflow-hidden inline-flex relative h-10 sm:h-11 items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#B8860B] whitespace-nowrap drop-shadow-2xs"
                  style={{ fontSize: 'clamp(1.15rem, 2.2vw + 0.5rem, 1.875rem)' }}
                >
                  {profileData.titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Professional Summary Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-900 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            Master’s in IT Project Management with Fortune 50 commercial execution at <strong>Apple</strong> and <strong>Samsung</strong>. Delivering disciplined Agile governance, enterprise IT compliance, and revenue-driving cross-functional alignment.
          </motion.p>

          {/* High-End Professional CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 mb-8"
          >
            {/* Primary CTA */}
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ y: 0, scale: 0.99 }}
              href="#experience"
              id="hero-view-experience-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
            >
              <span>View Experience</span>
              <ChevronRight className="w-4 h-4 text-[#B8860B]" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ y: 0, scale: 0.99 }}
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#B8860B] hover:bg-[#996e06] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </motion.a>

            {/* Tertiary CTA */}
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ y: 0, scale: 0.99 }}
              onClick={onOpenResume}
              id="hero-resume-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-slate-300/80 bg-white/40 backdrop-blur-xs text-slate-800 hover:bg-white/70 hover:border-[#B8860B] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-[#B8860B]" />
              <span>Full Resume</span>
            </motion.button>
          </motion.div>

          {/* Micro Highlights Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-slate-900 drop-shadow-2xs"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
              Authorized to work in US
            </span>
            <span className="text-slate-400">&bull;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
              On-site / Hybrid / Remote
            </span>
            <span className="text-slate-400">&bull;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
              Agile / Scrum &amp; IT Governance
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Metric Strip Below */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={containerVariants}
          className="pt-6 border-t border-slate-300/80 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="p-4 bg-white/45 hover:bg-white/65 backdrop-blur-xs border border-slate-300/80 shadow-xs hover:border-[#B8860B] transition-all hover:-translate-y-1"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              70%+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mt-0.5">
              Sales Target Exceed
            </div>
            <div className="text-[11px] text-slate-700 mt-1 font-semibold">
              Apple India Retail CRM
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-4 bg-white/45 hover:bg-white/65 backdrop-blur-xs border border-slate-300/80 shadow-xs hover:border-[#B8860B] transition-all hover:-translate-y-1"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              500+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mt-0.5">
              Tech Network
            </div>
            <div className="text-[11px] text-slate-700 mt-1 font-semibold">
              Executive &amp; Alumni Contacts
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-4 bg-white/45 hover:bg-white/65 backdrop-blur-xs border border-slate-300/80 shadow-xs hover:border-[#B8860B] transition-all hover:-translate-y-1"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              7+ Yrs
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mt-0.5">
              Combined Experience
            </div>
            <div className="text-[11px] text-slate-700 mt-1 font-semibold">
              Tech PM &amp; Client Relations
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
