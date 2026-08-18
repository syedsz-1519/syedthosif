import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle,
  Calendar,
  Sparkles,
  Building2,
  RotateCw,
  Clock,
  Layers,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { profileData } from '../data/profile';
import executiveLoungeImg from '../assets/images/executive_lounge_1787015267068.jpg';

export const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [bachelorRevealed, setBachelorRevealed] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [masterFlipped, setMasterFlipped] = useState(false);
  const [bachelorFlipped, setBachelorFlipped] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax translation for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  // Handle in-view detection & 5-second sequential timer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 5-second countdown timer for revealing Bachelor degree
  useEffect(() => {
    if (!inView || bachelorRevealed) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setBachelorRevealed(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [inView, bachelorRevealed]);

  const mastersEdu = profileData.education[0];
  const bachelorsEdu = profileData.education[1];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 sm:py-32 border-b border-slate-200 overflow-hidden"
    >
      {/* Parallax Background Image: AI-Generated Luxury Innovation Lounge & Collaborative Space */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[12%] -bottom-[12%] inset-x-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src={executiveLoungeImg}
          alt="Open Innovation Lounge & Architectural Collaborative Hub"
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-Stop Gradient Overlays: reveals rich campus architecture while safeguarding reading clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 via-45% to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_30%_30%,_rgba(255,255,255,0.75)_0%,_rgba(255,255,255,0.2)_50%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/10" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header with Staggered Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] block mb-2 font-bold flex items-center gap-2 drop-shadow-2xs">
            <GraduationCap className="w-4 h-4" /> 03 &middot; Academic Credentials &amp; Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-editorial drop-shadow-xs">
            Advanced Degrees &amp; Qualifications
          </h2>
          <div className="w-16 h-1 bg-[#B8860B] mt-4 mb-3 shadow-xs" />
          <p className="text-base text-slate-900 max-w-2xl leading-relaxed font-medium">
            Rigorous post-graduate specialization in IT Project Management complemented by foundational business computing applications and enterprise IT compliance.
          </p>
        </motion.div>

        {/* Dynamic Dual-Degree Flip Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* ============================================================ */}
          {/* 1. MASTER'S DEGREE (Immediate Scroll Reveal + Interactive 3D Flip) */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, rotateY: -25, y: 30 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
            className="w-full flex flex-col"
          >
            <div className="relative w-full flex-1 flex flex-col">
              <motion.div
                animate={{ rotateY: masterFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full flex-1 flex flex-col"
              >
                {/* ---------------- FRONT FACE (Overview & Highlights) ---------------- */}
                <div
                  style={{ backfaceVisibility: 'hidden' }}
                  className={`border-2 border-[#B8860B] bg-white/25 hover:bg-white/35 backdrop-blur-xs p-7 sm:p-8 flex flex-col justify-between shadow-md transition-all duration-300 h-full ${
                    masterFlipped ? 'pointer-events-none' : ''
                  }`}
                >
                  {/* Top Gold Corner Accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden pointer-events-none">
                    <div className="absolute transform rotate-45 bg-[#B8860B] right-[-24px] top-[-24px] w-12 h-12" />
                  </div>

                  <div>
                    {/* Card Header Meta */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-300/80">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-white/40 border border-[#B8860B]/40 flex items-center justify-center text-[#B8860B] shadow-2xs">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-[#B8860B] font-bold block">
                            Graduate Specialization
                          </span>
                          <span className="text-[11px] font-mono text-slate-700 font-semibold">
                            Degree 01 &middot; Master of Science
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-white/40 border border-[#B8860B]/50 text-[#B8860B] shadow-2xs">
                        {mastersEdu.score}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-1.5 font-editorial">
                        {mastersEdu.degree}
                      </h3>
                      <div className="text-base font-bold text-[#B8860B] mb-2">
                        {mastersEdu.major}
                      </div>
                      <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-700" />
                        <span>{mastersEdu.school}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-700 mt-2">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                          {mastersEdu.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-900 mb-5 leading-relaxed font-normal">
                      {mastersEdu.description}
                    </p>

                    {/* Highlights */}
                    {mastersEdu.highlights && (
                      <div className="mb-5 space-y-2 text-xs text-slate-900 bg-white/25 backdrop-blur-xs p-3.5 border-l-3 border-[#B8860B] border-y border-r border-slate-300/80 shadow-2xs">
                        {mastersEdu.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-semibold">{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Controls */}
                  <div className="pt-4 border-t border-slate-300/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" /> Verified Master&rsquo;s Credential
                    </span>
                    <button
                      type="button"
                      onClick={() => setMasterFlipped(true)}
                      className="px-3 py-1.5 text-xs font-mono uppercase font-bold text-[#0F172A] hover:text-[#B8860B] bg-white/40 hover:bg-white/60 border border-slate-300/80 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                    >
                      <RotateCw className="w-3 h-3 text-[#B8860B]" />
                      <span>Flip for Coursework</span>
                    </button>
                  </div>
                </div>

                {/* ---------------- BACK FACE (Detailed Coursework) ---------------- */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  className={`absolute inset-0 border-2 border-[#B8860B] bg-white/30 hover:bg-white/40 backdrop-blur-xs p-7 sm:p-8 flex flex-col justify-between shadow-md transition-all duration-300 ${
                    !masterFlipped ? 'pointer-events-none' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-300/80">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#B8860B]" />
                        <span className="text-xs font-mono uppercase tracking-wider text-[#B8860B] font-bold">
                          Master&rsquo;s Curriculum &amp; Disciplines
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setMasterFlipped(false)}
                        className="px-2.5 py-1 text-xs font-mono font-bold text-slate-700 hover:text-[#B8860B] bg-white/40 border border-slate-300/80 flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCw className="w-3 h-3" /> Back
                      </button>
                    </div>

                    <h4 className="text-xl font-bold text-[#0F172A] mb-3 font-editorial">
                      Graduate Curriculum Focus
                    </h4>
                    <p className="text-xs text-slate-900 mb-6 leading-relaxed">
                      Specialized coursework in high-stakes IT program administration, compliance audits, agile transformation, and enterprise risk mitigations:
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {mastersEdu.coursework.map((course, cIdx) => (
                        <div
                          key={course}
                          className="p-2.5 bg-white/35 backdrop-blur-xs border border-slate-300/80 flex items-center gap-2.5 text-xs text-[#0F172A] font-semibold"
                        >
                          <span className="w-5 h-5 bg-[#B8860B]/20 text-[#B8860B] font-mono text-[10px] flex items-center justify-center font-bold">
                            0{cIdx + 1}
                          </span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-300/80 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setMasterFlipped(false)}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] flex items-center gap-2 cursor-pointer shadow-2xs"
                    >
                      <RotateCw className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Flip to Overview</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 2. BACHELOR'S DEGREE (Sequential 5s Discovery & 3D Flip Entry) */}
          {/* ============================================================ */}
          <div style={{ perspective: 1200 }} className="w-full flex flex-col">
            <AnimatePresence mode="wait">
              {!bachelorRevealed ? (
                /* ---------------- STAGING STATE: 5-Second Interactive Timer ---------------- */
                <motion.div
                  key="locked-stage"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, rotateY: 90, transition: { duration: 0.45 } }}
                  className="border border-slate-300/80 border-dashed bg-white/15 hover:bg-white/25 backdrop-blur-xs p-8 flex flex-col justify-between items-center text-center shadow-xs transition-all duration-300 min-h-[460px] flex-1"
                >
                  <div className="w-full">
                    {/* Staging Top Meta */}
                    <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-300/60 w-full text-left">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#B8860B] animate-spin" />
                        <span className="text-xs font-mono uppercase tracking-wider text-[#B8860B] font-bold">
                          Sequential Portfolio Discovery
                        </span>
                      </div>
                      <span className="text-xs font-mono uppercase text-slate-700 font-semibold">
                        Degree 02 &middot; Foundation
                      </span>
                    </div>

                    {/* Circular Timer & Countdown Graphic */}
                    <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="stroke-slate-300/50"
                          strokeWidth="5"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="stroke-[#B8860B]"
                          strokeWidth="5"
                          strokeDasharray={264}
                          animate={{
                            strokeDashoffset: (264 * (5 - secondsRemaining)) / 5,
                          }}
                          transition={{ duration: 1, ease: 'linear' }}
                          fill="transparent"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-extrabold text-[#0F172A] font-mono leading-none">
                          {secondsRemaining}s
                        </span>
                        <span className="text-[10px] font-mono uppercase text-slate-600 font-bold mt-1">
                          Auto-Flip
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2 font-editorial">
                      Bachelor of Commerce (B.Com)
                    </h3>
                    <p className="text-xs font-mono text-[#B8860B] font-bold uppercase tracking-wider mb-3">
                      Osmania University &middot; Computer Applications
                    </p>
                    <p className="text-xs text-slate-700 max-w-sm mx-auto leading-relaxed mb-6">
                      Foundational degree in commercial systems, digital databases, programming, and financial accounting. Unlocking in {secondsRemaining} seconds...
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-slate-300/60 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setBachelorRevealed(true)}
                      className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#0F172A] hover:bg-[#1E293B] text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all hover:scale-102"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Reveal Instantly</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* ---------------- REVEALED 3D FLIP CARD (B.COM) ---------------- */
                <motion.div
                  key="unlocked-card"
                  initial={{ opacity: 0, rotateY: -90, scale: 0.96 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full flex-1 flex flex-col"
                >
                  <motion.div
                    animate={{ rotateY: bachelorFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative w-full flex-1 flex flex-col"
                  >
                    {/* ---------------- FRONT FACE (Overview) ---------------- */}
                    <div
                      style={{ backfaceVisibility: 'hidden' }}
                      className={`border border-slate-300/70 bg-white/20 hover:bg-white/35 backdrop-blur-xs hover:border-[#B8860B] p-7 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 h-full ${
                        bachelorFlipped ? 'pointer-events-none' : ''
                      }`}
                    >
                      {/* Corner Gold Accent Indicator */}
                      <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute transform rotate-45 bg-[#B8860B] right-[-24px] top-[-24px] w-12 h-12" />
                      </div>

                      <div>
                        {/* Card Header Meta */}
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-300/80">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-white/40 border border-slate-300 flex items-center justify-center text-[#B8860B] shadow-2xs">
                              <GraduationCap className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold block">
                                Undergraduate Foundation
                              </span>
                              <span className="text-[11px] font-mono text-slate-600 font-semibold">
                                Degree 02 &middot; Bachelor of Commerce
                              </span>
                            </div>
                          </div>
                          {/* Status Pill */}
                          <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-white/40 border border-slate-300 text-[#B8860B] shadow-2xs">
                            {bachelorsEdu.score}
                          </span>
                        </div>

                        <div className="mb-4">
                          <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-1.5 font-editorial">
                            {bachelorsEdu.degree}
                          </h3>
                          <div className="text-base font-bold text-[#B8860B] mb-2">
                            {bachelorsEdu.major}
                          </div>
                          <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-slate-700" />
                            <span>{bachelorsEdu.school}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-700 mt-2">
                            <span className="flex items-center gap-1.5 font-semibold">
                              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                              {bachelorsEdu.period}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-slate-900 mb-5 leading-relaxed font-normal">
                          {bachelorsEdu.description}
                        </p>

                        {/* Highlights */}
                        {bachelorsEdu.highlights && (
                          <div className="mb-5 space-y-2 text-xs text-slate-900 bg-white/25 backdrop-blur-xs p-3.5 border-l-3 border-[#B8860B] border-y border-r border-slate-300/80 shadow-2xs">
                            {bachelorsEdu.highlights.map((hl, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="font-semibold">{hl}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom Controls */}
                      <div className="pt-4 border-t border-slate-300/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Verified Foundation Degree
                        </span>
                        <button
                          type="button"
                          onClick={() => setBachelorFlipped(true)}
                          className="px-3 py-1.5 text-xs font-mono uppercase font-bold text-[#0F172A] hover:text-[#B8860B] bg-white/40 hover:bg-white/60 border border-slate-300/80 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                        >
                          <RotateCw className="w-3 h-3 text-[#B8860B]" />
                          <span>Flip for Coursework</span>
                        </button>
                      </div>
                    </div>

                    {/* ---------------- BACK FACE (Coursework) ---------------- */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                      className={`absolute inset-0 border border-slate-300/70 bg-white/25 hover:bg-white/35 backdrop-blur-xs p-7 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 ${
                        !bachelorFlipped ? 'pointer-events-none' : ''
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-300/80">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-[#B8860B]" />
                            <span className="text-xs font-mono uppercase tracking-wider text-[#B8860B] font-bold">
                              Bachelor&rsquo;s Curriculum &amp; Disciplines
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setBachelorFlipped(false)}
                            className="px-2.5 py-1 text-xs font-mono font-bold text-slate-700 hover:text-[#B8860B] bg-white/40 border border-slate-300/80 flex items-center gap-1 cursor-pointer"
                          >
                            <RotateCw className="w-3 h-3" /> Back
                          </button>
                        </div>

                        <h4 className="text-xl font-bold text-[#0F172A] mb-3 font-editorial">
                          Computer Applications &amp; Commercial Systems
                        </h4>
                        <p className="text-xs text-slate-900 mb-6 leading-relaxed">
                          Core disciplines spanning commercial database systems, accounting analytics, e-commerce infrastructure, and financial programming:
                        </p>

                        <div className="space-y-2.5 mb-6">
                          {bachelorsEdu.coursework.map((course, cIdx) => (
                            <div
                              key={course}
                              className="p-2.5 bg-white/35 backdrop-blur-xs border border-slate-300/80 flex items-center gap-2.5 text-xs text-[#0F172A] font-semibold"
                            >
                              <span className="w-5 h-5 bg-[#0F172A]/10 text-[#0F172A] font-mono text-[10px] flex items-center justify-center font-bold">
                                0{cIdx + 1}
                              </span>
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-300/80 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setBachelorFlipped(false)}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] flex items-center gap-2 cursor-pointer shadow-2xs"
                        >
                          <RotateCw className="w-3.5 h-3.5 text-[#B8860B]" />
                          <span>Flip to Overview</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
