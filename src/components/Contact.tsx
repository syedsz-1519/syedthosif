import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Linkedin, Copy, Check, Send, MapPin, ArrowUpRight, Clock, Phone, Sparkles, ExternalLink, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';

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

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax translation for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subjectText = formState.subject.trim() || 'Hiring & Project Management Opportunity - Syed Thousif';
    const bodyContent = `Dear Syed Thousif,

I am reaching out regarding a project management / leadership opportunity with our team.

Contact Details:
• Name: ${formState.name}
• Email: ${formState.email}
• Subject: ${subjectText}

Message:
${formState.message}

Looking forward to connecting with you.

Best regards,
${formState.name}`;

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyContent)}`;

    // Immediately redirect user's device to their default email client with all details pre-filled
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 border-t border-slate-200 text-[#0F172A] overflow-hidden"
    >
      {/* Parallax Background Image: Skyline & Modern Executive Architecture with Dynamic Gradient Overlays */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-[12%] -bottom-[12%] inset-x-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
          alt="Modern Architectural Skyline"
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.06]"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-Stop Gradient Overlays: reveals rich skyline architecture while protecting text contrast */}
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
          className="max-w-3xl mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-[#B8860B] block mb-2 font-bold flex items-center gap-2 drop-shadow-2xs"
          >
            <MessageSquare className="w-4 h-4" /> 04 &middot; Direct Engagement
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-4 leading-tight font-editorial drop-shadow-xs"
          >
            Let&rsquo;s Connect &amp; Collaborate
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-[#B8860B] mb-4 shadow-xs"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium"
          >
            I am actively exploring Project Management, IT Operations, and Technical Account leadership opportunities across the United States. Connect directly via LinkedIn, email, or send a message below.
          </motion.p>
        </motion.div>

        {/* Dedicated Quick-Connect Link Bar with Staggered Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* LinkedIn Icon Link Card */}
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-slate-300/90 bg-white/35 hover:bg-white/55 backdrop-blur-md hover:border-[#B8860B] p-5 flex items-center justify-between shadow-xs transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/90 border border-slate-300 group-hover:border-[#B8860B] group-hover:bg-[#B8860B] text-[#0F172A] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8860B] font-bold block">
                  Professional Network
                </span>
                <span className="text-base font-bold text-[#0F172A] group-hover:text-[#B8860B] transition-colors">
                  LinkedIn Profile
                </span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-[#B8860B]/10 flex items-center justify-center text-slate-500 group-hover:text-[#B8860B] transition-colors shadow-2xs">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* Email Icon Link Card */}
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            href={`mailto:${profileData.email}?subject=Project%20Management%20Inquiry%20-%20Syed%20Thousif`}
            className="group border border-slate-300/90 bg-white/35 hover:bg-white/55 backdrop-blur-md hover:border-[#B8860B] p-5 flex items-center justify-between shadow-xs transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/90 border border-slate-300 group-hover:border-[#B8860B] group-hover:bg-[#B8860B] text-[#0F172A] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8860B] font-bold block">
                  Direct Inbox
                </span>
                <span className="text-base font-bold text-[#0F172A] group-hover:text-[#B8860B] transition-colors">
                  Send Direct Email
                </span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-[#B8860B]/10 flex items-center justify-center text-slate-500 group-hover:text-[#B8860B] transition-colors shadow-2xs">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* Location & Availability Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="group border border-slate-300/90 bg-white/35 hover:bg-white/55 backdrop-blur-md hover:border-[#B8860B] p-5 flex items-center justify-between shadow-xs transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/90 border border-slate-300 group-hover:border-[#B8860B] group-hover:bg-[#B8860B] text-[#0F172A] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                <MapPin className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8860B] font-bold block">
                  Current Base &middot; US Work Auth
                </span>
                <span className="text-base font-bold text-[#0F172A]">
                  Chicago, IL (Open to Relocate)
                </span>
              </div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Active for hire" />
          </motion.div>
        </motion.div>

        {/* Two-Column Grid: Contact Information & Direct Message Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14"
        >
          {/* Left Column: Direct Channels */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              {/* Primary Email Card */}
              <div className="border border-slate-300/90 bg-white/35 hover:bg-white/50 backdrop-blur-md p-6 flex flex-col justify-between shadow-xs hover:border-[#B8860B] transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                    Direct Email Address
                  </span>
                  <Mail className="w-4 h-4 text-[#B8860B]" />
                </div>
                <div className="font-mono text-base sm:text-lg font-bold text-[#0F172A] break-all mb-4">
                  {profileData.email}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-300/80">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider border border-slate-300 hover:border-[#B8860B] text-slate-800 hover:text-[#0F172A] transition-colors cursor-pointer bg-white/90 shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#B8860B]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${profileData.email}?subject=Project%20Management%20Inquiry%20-%20Syed%20Thousif`}
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#B8860B] hover:bg-[#996e06] text-white transition-colors shadow-2xs"
                  >
                    <span>Open Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* LinkedIn Network Detail */}
              <div className="border border-slate-300/90 bg-white/35 hover:bg-white/50 backdrop-blur-md p-6 shadow-xs hover:border-[#B8860B] transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                    Executive Network
                  </span>
                  <Linkedin className="w-4 h-4 text-[#B8860B]" />
                </div>
                <div className="text-sm text-slate-900 mb-4 leading-relaxed font-normal">
                  Connect with 500+ tech leaders, hiring managers, and alumni on LinkedIn for verified recommendations and credentials.
                </div>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-colors bg-white/90 shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location & Relocation */}
              <div className="p-5 border border-slate-300/90 bg-white/35 backdrop-blur-md text-xs font-mono text-slate-900 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-slate-950">
                  <MapPin className="w-4 h-4 text-[#B8860B]" />
                  <strong className="uppercase font-bold">Location:</strong>
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-950 font-bold">Target Markets:</span>{' '}
                    <span className="font-medium">{profileData.openToWorkCities.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-700 font-semibold">
              Response Time: Typically within 24 business hours.
            </div>
          </motion.div>

          {/* Right Column: Direct Message Composer */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="border border-slate-300/90 bg-white/35 hover:bg-white/50 backdrop-blur-md p-8 sm:p-10 shadow-xs hover:border-slate-400 transition-colors">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] block mb-2 font-bold">
                Send a Message
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 font-editorial">
                Start a Conversation
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 border border-emerald-500 bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0F172A] font-editorial">
                    Redirecting to Your Email Client
                  </h4>
                  <p className="text-sm text-slate-900 max-w-md mx-auto leading-relaxed font-medium">
                    Your message draft has been formatted for <strong>{profileData.email}</strong>. If your email app did not open automatically, click the button below:
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${profileData.email}?subject=${encodeURIComponent(
                        formState.subject || 'Hiring Inquiry - Syed Thousif'
                      )}&body=${encodeURIComponent(
                        `Dear Syed Thousif,\n\nI am reaching out regarding a project management / leadership opportunity.\n\nSender: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}\n\nBest regards,\n${formState.name}`
                      )}`}
                      className="px-6 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Open Mail Client Again</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-3 border border-slate-300 bg-white text-slate-800 text-xs font-bold uppercase tracking-wider hover:border-[#0F172A] hover:text-[#0F172A] transition-colors cursor-pointer"
                    >
                      New Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-800 mb-2 font-bold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-white/90 border border-slate-300 focus:border-[#B8860B] focus:bg-white text-[#0F172A] px-4 py-3 text-sm focus:outline-hidden transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-800 mb-2 font-bold">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full bg-white/90 border border-slate-300 focus:border-[#B8860B] focus:bg-white text-[#0F172A] px-4 py-3 text-sm focus:outline-hidden transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-800 mb-2 font-bold">
                      Inquiry Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Project Manager Role / Interview Invitation"
                      className="w-full bg-white/90 border border-slate-300 focus:border-[#B8860B] focus:bg-white text-[#0F172A] px-4 py-3 text-sm focus:outline-hidden transition-colors shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-800 mb-2 font-bold">
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe the opportunity, project context, or inquiry..."
                      className="w-full bg-white/90 border border-slate-300 focus:border-[#B8860B] focus:bg-white text-[#0F172A] px-4 py-3 text-sm focus:outline-hidden transition-colors resize-none shadow-2xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Preparing Submission...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#B8860B]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
