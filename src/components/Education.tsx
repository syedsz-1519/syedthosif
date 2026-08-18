import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, Sparkles, Building2, ExternalLink } from 'lucide-react';
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

export const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax translation for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 sm:py-32 border-b border-slate-200 overflow-hidden"
    >
      {/* Parallax Background Image: Prestigious Academic Campus with Dynamic Gradient Overlays */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[12%] -bottom-[12%] inset-x-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2200&q=90"
          alt="Academic Campus Architecture"
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.06]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-Stop Gradient Overlays: reveals rich campus architecture while safeguarding reading clarity */}
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
            <GraduationCap className="w-4 h-4" /> 03 &middot; Academic Credentials &amp; Certifications
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-editorial drop-shadow-xs"
          >
            Advanced Degrees &amp; Qualifications
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-[#B8860B] mt-4 mb-3 shadow-xs"
          />
          <motion.p
            variants={itemVariants}
            className="text-base text-slate-900 max-w-2xl leading-relaxed font-medium"
          >
            Rigorous post-graduate specialization in IT Project Management complemented by foundational business computing applications and enterprise IT compliance.
          </motion.p>
        </motion.div>

        {/* Education Cards Grid with Staggered Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {profileData.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative border border-slate-300/90 bg-white/35 hover:bg-white/50 backdrop-blur-md hover:border-[#B8860B] p-8 flex flex-col justify-between transition-all duration-300 shadow-xs"
            >
              {/* Corner Gold Accent Indicator */}
              <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute transform rotate-45 bg-[#B8860B] right-[-24px] top-[-24px] w-12 h-12" />
              </div>

              <div>
                {/* Card Header Meta */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-300/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-white/80 border border-slate-300 flex items-center justify-center text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors shadow-2xs">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                      Degree 0{idx + 1}
                    </span>
                  </div>
                  {/* Status Pill */}
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-white/90 border border-slate-300 text-[#B8860B] group-hover:border-[#B8860B] transition-colors shadow-2xs">
                    {edu.score}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-1.5 font-editorial group-hover:text-[#B8860B] transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-bold text-[#B8860B] mb-2">
                    {edu.major}
                  </div>
                  <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-slate-600" />
                    <span>{edu.school}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-700 mt-2">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-900 mb-5 leading-relaxed font-normal">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mb-5 space-y-2 text-xs text-slate-900 bg-white/45 backdrop-blur-xs p-3.5 border-l-3 border-[#B8860B] border-y border-r border-slate-300 shadow-2xs">
                    {edu.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-semibold">{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Coursework Tags */}
                <div className="mt-6 pt-4 border-t border-slate-300/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-800 block mb-2.5 font-bold">
                    Key Coursework &amp; Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <motion.span
                        key={course}
                        whileHover={{ y: -1, scale: 1.02 }}
                        className="px-2.5 py-1 text-xs font-semibold bg-white/90 border border-slate-300 text-[#0F172A] hover:border-[#B8860B] hover:text-[#B8860B] transition-all cursor-default shadow-2xs"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
