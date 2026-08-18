import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { profileData } from '../data/profile';
import executiveSuiteImg from '../assets/images/executive_office_suite_1787015239261.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    rotateX: 5,
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

interface SplitTypeRevealProps {
  text: string;
  className?: string;
  delay?: number;
  boldPhrases?: string[];
}

const SplitTypeReveal: React.FC<SplitTypeRevealProps> = ({
  text,
  className = '',
  delay = 0,
  boldPhrases = [],
}) => {
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.016,
            delayChildren: delay,
          },
        },
      }}
      className={`inline ${className}`}
    >
      {words.map((word, i) => {
        // Check if this word is part of any designated bold phrase
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isBold = boldPhrases.some((phrase) =>
          phrase
            .toLowerCase()
            .split(' ')
            .some((w) => w.replace(/[^a-zA-Z0-9]/g, '') === cleanWord)
        );

        return (
          <span
            key={i}
            className="inline-block whitespace-nowrap overflow-hidden mr-[0.27em] align-baseline"
          >
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                  rotateX: 18,
                  filter: 'blur(3px)',
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className={`inline-block ${
                isBold ? 'font-bold text-[#0F172A]' : ''
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};

export const About: React.FC = () => {
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
      id="about"
      className="relative py-24 sm:py-32 border-b border-slate-200 overflow-hidden"
    >
      {/* Parallax Background Image: AI-Generated Executive Office Suite with Dynamic Gradient Overlays */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[12%] -bottom-[12%] inset-x-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src={executiveSuiteImg}
          alt="Executive Suite & Strategic Command Workspace"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[1.04] contrast-[1.08] saturate-[1.06]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-Stop Gradient: reveals rich architectural depth while protecting reading contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 via-45% to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_25%_25%,_rgba(255,255,255,0.75)_0%,_rgba(255,255,255,0.2)_50%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/10" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header with Staggered Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-[0.18em] text-[#B8860B] block mb-2 font-bold flex items-center gap-2 drop-shadow-2xs"
          >
            <UserCheck className="w-4 h-4" /> 01 &middot; Executive Profile
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0A0F1D] tracking-tight font-editorial leading-[1.15] drop-shadow-xs"
          >
            Bridging Technical Project Delivery &amp; Commercial Leadership
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1.5 bg-[#B8860B] mt-4 mb-3 shadow-xs"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#0A0F1D] leading-[1.7] tracking-[0.01em] font-medium"
          >
            A balanced synthesis of post-graduate IT governance rigor and Fortune 50 enterprise commercial execution.
          </motion.p>
        </motion.div>

        {/* Narrative & Executive Pillars - Staggered Scroll Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Editorial Narrative Section with Translucent Frame */}
          <motion.div
            variants={itemVariants}
            className="border-2 border-slate-300 bg-white/70 hover:bg-white/90 backdrop-blur-xs hover:border-[#B8860B] p-6 sm:p-10 md:p-12 transition-all duration-300 shadow-sm"
          >
            <span className="inline-block text-xs font-mono uppercase tracking-[0.15em] text-[#0A0F1D] mb-5 sm:mb-6 pb-2 border-b border-slate-300 w-full font-bold">
              Background &amp; Executive Philosophy
            </span>

            {/* Editorial Lead Statement with Split Reveal Animation */}
            <div className="text-xl sm:text-2xl md:text-3xl text-[#0A0F1D] leading-[1.38] sm:leading-[1.45] font-black mb-8 font-editorial max-w-4xl tracking-tight">
              <SplitTypeReveal
                text="“Combining rigorous IT project governance with frontline enterprise sales execution to turn complex technical roadmaps into tangible business outcomes.”"
                delay={0.05}
              />
            </div>

            {/* Responsive 3-Column Pillars with Split Type Typography */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 pt-6 sm:pt-8 border-t border-slate-300">
              <div className="p-4 bg-white/60 border border-slate-200 shadow-2xs">
                <h4 className="text-sm font-black uppercase tracking-[0.08em] text-[#0A0F1D] mb-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#B8860B]" /> Academic Rigor
                </h4>
                <p className="text-sm sm:text-base text-[#1E293B] leading-[1.75] font-medium">
                  <SplitTypeReveal
                    text="Completed a Master of Science in Project Management and Information Technology from Indiana Wesleyan University, refining expertise in project initiation, life cycles, budgeting, risk mitigation, and enterprise compliance frameworks."
                    delay={0.1}
                    boldPhrases={['Master', 'Science', 'Project', 'Management', 'Information', 'Technology']}
                  />
                </p>
              </div>

              <div className="p-4 bg-white/60 border border-slate-200 shadow-2xs">
                <h4 className="text-sm font-black uppercase tracking-[0.08em] text-[#0A0F1D] mb-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#B8860B]" /> Fortune 50 Track Record
                </h4>
                <p className="text-sm sm:text-base text-[#1E293B] leading-[1.75] font-medium">
                  <SplitTypeReveal
                    text="Drawing from high-volume technology leadership at Apple and Samsung Electronics, excelling in sales pipeline management, executive client relations, and cross-functional team mentorship."
                    delay={0.15}
                    boldPhrases={['Apple', 'Samsung', 'Electronics']}
                  />
                </p>
              </div>

              <div className="p-4 bg-white/60 border border-slate-200 shadow-2xs">
                <h4 className="text-sm font-black uppercase tracking-[0.08em] text-[#0A0F1D] mb-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#B8860B]" /> Value Delivery
                </h4>
                <p className="text-sm sm:text-base text-[#1E293B] leading-[1.75] font-medium">
                  <SplitTypeReveal
                    text="Leveraging this synergy of technical project discipline and customer-centric acumen to drive on-time, within-budget innovation for technology organizations across the United States."
                    delay={0.2}
                    boldPhrases={['United', 'States']}
                  />
                </p>
              </div>
            </div>

            {/* Core Strategic Governance Blocks */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-5 bg-white/80 hover:bg-white backdrop-blur-xs border-2 border-slate-300 hover:border-[#B8860B] transition-all shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.1em] text-[#0A0F1D]">
                    IT Governance &amp; Compliance
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1E293B] mt-1.5 leading-[1.7] font-medium">
                    <SplitTypeReveal
                      text="Cyberlaw, data regulations (GDPR/HIPAA), systems risk management, and formal project lifecycle governance."
                      delay={0.1}
                    />
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-5 bg-white/80 hover:bg-white backdrop-blur-xs border-2 border-slate-300 hover:border-[#B8860B] transition-all shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.1em] text-[#0A0F1D]">
                    Cross-Functional Stakeholder Alignment
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1E293B] mt-1.5 leading-[1.7] font-medium">
                    <SplitTypeReveal
                      text="Consistently exceeding commercial objectives, bridging technical development teams with executive stakeholders."
                      delay={0.15}
                    />
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Supporting Community Leadership */}
          <motion.div
            variants={itemVariants}
            className="border-2 border-slate-300 bg-white/70 hover:bg-white/90 backdrop-blur-xs hover:border-[#B8860B] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3.5 border border-slate-300 bg-white text-[#B8860B] shrink-0 shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#B8860B] font-black">
                    Beyond Work &middot; Community Leadership
                  </span>
                  <span className="text-xs text-slate-400">&middot;</span>
                  <span className="text-xs font-mono text-[#0A0F1D] font-bold">
                    {profileData.volunteering.period}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A0F1D] font-editorial tracking-tight">
                  {profileData.volunteering.role} &mdash; {profileData.volunteering.organization}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B] mt-2 max-w-3xl leading-[1.75] font-medium">
                  <SplitTypeReveal
                    text={profileData.volunteering.description}
                    delay={0.1}
                  />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 md:max-w-xs shrink-0 w-full md:w-auto">
              {profileData.volunteering.skills.slice(0, 4).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -1, scale: 1.02 }}
                  className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] bg-white border border-slate-300 text-[#0A0F1D] hover:border-[#B8860B] hover:text-[#B8860B] transition-all cursor-default shadow-2xs font-bold"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
