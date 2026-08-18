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
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-Stop Gradient: reveals rich architectural depth while protecting reading contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 via-45% to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_25%_25%,_rgba(255,255,255,0.75)_0%,_rgba(255,255,255,0.2)_50%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/10" />
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
            className="text-xs font-mono uppercase tracking-[0.18em] text-[#B8860B] block mb-2 font-bold flex items-center gap-2 drop-shadow-2xs"
          >
            <UserCheck className="w-4 h-4" /> 01 &middot; Executive Profile
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] tracking-[-0.02em] font-editorial leading-[1.18] drop-shadow-xs"
          >
            Bridging Technical Project Delivery &amp; Commercial Leadership
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-[#B8860B] mt-4 mb-3 shadow-xs"
          />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-900 leading-[1.8] tracking-[0.015em] font-medium"
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
          className="space-y-8"
        >
          {/* Main Editorial Narrative Section with Translucent Frame */}
          <motion.div
            variants={itemVariants}
            className="border border-slate-300/70 bg-white/20 hover:bg-white/35 backdrop-blur-xs hover:border-[#B8860B] p-8 sm:p-12 transition-all duration-300 shadow-xs"
          >
            <span className="inline-block text-xs font-mono uppercase tracking-[0.15em] text-slate-800 mb-6 pb-2 border-b border-slate-300/80 w-full font-bold">
              Background &amp; Executive Philosophy
            </span>

            {/* Editorial Lead Statement with Split Reveal Animation */}
            <div className="text-xl sm:text-2xl md:text-3xl text-[#0F172A] leading-[1.42] sm:leading-[1.48] font-bold mb-8 font-editorial max-w-4xl tracking-[-0.01em] drop-shadow-2xs">
              <SplitTypeReveal
                text="“Combining rigorous IT project governance with frontline enterprise sales execution to turn complex technical roadmaps into tangible business outcomes.”"
                delay={0.05}
              />
            </div>

            {/* Responsive 3-Column Pillars with Split Type Typography */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-8 border-t border-slate-300/80">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-[#0F172A] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B8860B]" /> Academic Rigor
                </h4>
                <p className="text-[0.95rem] sm:text-base text-slate-900 leading-[1.82] tracking-[0.015em]">
                  <SplitTypeReveal
                    text="Completed a Master of Science in Project Management and Information Technology from Indiana Wesleyan University, refining expertise in project initiation, life cycles, budgeting, risk mitigation, and enterprise compliance frameworks."
                    delay={0.1}
                    boldPhrases={['Master', 'Science', 'Project', 'Management', 'Information', 'Technology']}
                  />
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-[#0F172A] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B8860B]" /> Fortune 50 Track Record
                </h4>
                <p className="text-[0.95rem] sm:text-base text-slate-900 leading-[1.82] tracking-[0.015em]">
                  <SplitTypeReveal
                    text="Drawing from high-volume technology leadership at Apple and Samsung Electronics, excelling in sales pipeline management, executive client relations, and cross-functional team mentorship."
                    delay={0.15}
                    boldPhrases={['Apple', 'Samsung', 'Electronics']}
                  />
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-[#0F172A] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B8860B]" /> Value Delivery
                </h4>
                <p className="text-[0.95rem] sm:text-base text-slate-900 leading-[1.82] tracking-[0.015em]">
                  <SplitTypeReveal
                    text="Leveraging this synergy of technical project discipline and customer-centric acumen to drive on-time, within-budget innovation for technology organizations across the United States."
                    delay={0.2}
                    boldPhrases={['United', 'States']}
                  />
                </p>
              </div>
            </div>

            {/* Core Strategic Governance Blocks */}
            <div className="mt-10 pt-8 border-t border-slate-300/80 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-5 bg-white/30 hover:bg-white/50 backdrop-blur-xs border border-slate-300/80 hover:border-[#B8860B] transition-all shadow-2xs"
              >
                <ShieldCheck className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0F172A]">
                    IT Governance &amp; Compliance
                  </h4>
                  <p className="text-xs sm:text-[0.875rem] text-slate-900 mt-1.5 leading-[1.75] tracking-[0.012em] font-normal">
                    <SplitTypeReveal
                      text="Cyberlaw, data regulations (GDPR/HIPAA), systems risk management, and formal project lifecycle governance."
                      delay={0.1}
                    />
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-5 bg-white/30 hover:bg-white/50 backdrop-blur-xs border border-slate-300/80 hover:border-[#B8860B] transition-all shadow-2xs"
              >
                <TrendingUp className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0F172A]">
                    Cross-Functional Stakeholder Alignment
                  </h4>
                  <p className="text-xs sm:text-[0.875rem] text-slate-900 mt-1.5 leading-[1.75] tracking-[0.012em] font-normal">
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
            className="border border-slate-300/70 bg-white/20 hover:bg-white/35 backdrop-blur-xs hover:border-[#B8860B] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3.5 border border-slate-300/80 bg-white/40 backdrop-blur-xs text-[#B8860B] shrink-0 shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#B8860B] font-bold">
                    Beyond Work &middot; Community Leadership
                  </span>
                  <span className="text-xs text-slate-400">&middot;</span>
                  <span className="text-xs font-mono text-slate-700 font-medium">
                    {profileData.volunteering.period}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-editorial tracking-[-0.01em]">
                  {profileData.volunteering.role} &mdash; {profileData.volunteering.organization}
                </h3>
                <p className="text-xs sm:text-[0.925rem] text-slate-900 mt-2 max-w-3xl leading-[1.8] tracking-[0.012em]">
                  <SplitTypeReveal
                    text={profileData.volunteering.description}
                    delay={0.1}
                  />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 md:max-w-xs shrink-0">
              {profileData.volunteering.skills.slice(0, 4).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -1, scale: 1.02 }}
                  className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] bg-white/40 backdrop-blur-xs border border-slate-300/80 text-[#0F172A] hover:border-[#B8860B] hover:text-[#B8860B] transition-all cursor-default shadow-2xs font-medium"
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
