'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeUpOnScroll } from '@/components/animations/FadeUpOnScroll';

const contributions = [
  {
    icon: '🎨',
    title: 'Social Media Creatives',
    description: 'Designed engaging social media creatives and promotional content aligned with brand identity.',
  },
  {
    icon: '📐',
    title: 'UI/UX Design',
    description: 'Worked on wireframes, interface layouts, and user flows to improve digital experiences.',
  },
  {
    icon: '🧩',
    title: 'Usability Improvements',
    description: 'Enhanced usability and overall user experience across digital platforms.',
  },
  {
    icon: '🎯',
    title: 'Brand Consistency',
    description: 'Maintained consistent brand identity, typography, and visual hierarchy across all designs.',
  },
  {
    icon: '✨',
    title: 'Visual Storytelling',
    description: 'Applied visual storytelling, layout principles, and color balance to create impactful designs.',
  },
];

export function ClipoWorkPage() {
  return (
    <div className="py-0 flex flex-col">

      {/* — Hero Section — */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUpOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#7c5cfc] shadow-[0_0_12px_rgba(124,92,252,0.5)]" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Case Study
              </span>
            </div>
          </FadeUpOnScroll>

          <FadeUpOnScroll delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-2">
              Clipo
            </h1>
          </FadeUpOnScroll>
          <FadeUpOnScroll delay={0.15}>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground leading-tight mb-8">
              Graphic Design & UI/UX Design
            </h2>
          </FadeUpOnScroll>

          <FadeUpOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-0">
              {['UI/UX Design', 'Graphic Design', 'Wireframing', 'Brand Identity', 'Figma'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono rounded-full border border-white/10 bg-white/[0.03] text-foreground/70 hover:bg-white/[0.07] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUpOnScroll>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto w-full border-t border-white/[0.06]" />

      {/* — Role Overview — */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUpOnScroll>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-primary text-sm font-mono">{'// '}</span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em]">
                Role Overview
              </span>
            </div>
          </FadeUpOnScroll>

          <div className="space-y-6 max-w-3xl">
            <FadeUpOnScroll delay={0.1}>
              <p className="text-sm leading-7 text-foreground/80 font-mono">
                At Clipo, I worked on both{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">visual design</mark>{' '}
                and{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">user experience</mark>,
                contributing to the overall digital presence of the brand. My role involved designing
                engaging social media creatives, promotional assets, and marketing visuals while ensuring
                consistency with the brand&apos;s identity.
              </p>
            </FadeUpOnScroll>

            <FadeUpOnScroll delay={0.15}>
              <p className="text-sm leading-7 text-foreground/80 font-mono">
                Alongside graphic design, I was actively involved in the{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">UI/UX design process</mark>.
                I worked on creating wireframes, interface layouts, and improving user flows to make
                digital experiences more intuitive and user-friendly. My focus was on balancing aesthetics
                with usability—ensuring that designs were not only visually appealing but also functional
                and easy to navigate.
              </p>
            </FadeUpOnScroll>

            <FadeUpOnScroll delay={0.2}>
              <p className="text-sm leading-7 text-foreground/80 font-mono">
                I translated concepts and briefs into impactful designs by focusing on{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">typography</mark>,{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">layout structure</mark>,{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">color balance</mark>, and{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">visual hierarchy</mark>.
                I also contributed to refining user interactions and enhancing overall user
                experience across digital platforms.
              </p>
            </FadeUpOnScroll>

            <FadeUpOnScroll delay={0.25}>
              <p className="text-sm leading-7 text-foreground/80 font-mono">
                Through this role, I developed a strong understanding of{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">design thinking</mark>,{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">user-centered design</mark>, and{' '}
                <mark className="bg-[#3a3a2a] text-foreground px-1 rounded-sm">brand consistency</mark>,
                while delivering creative solutions that supported both user engagement and business goals.
              </p>
            </FadeUpOnScroll>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto w-full border-t border-white/[0.06]" />

      {/* — Key Contributions — */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUpOnScroll>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm font-mono">{'// '}</span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em]">
                Key Contributions
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-12">
              What I Delivered
            </h3>
          </FadeUpOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributions.map((item, idx) => (
              <FadeUpOnScroll key={idx} delay={0.08 * idx}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="clipo-contribution-card group"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-5 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </FadeUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto w-full border-t border-white/[0.06]" />

      {/* — High-Fidelity Homepage Wireframe Section — */}
      <section className="py-24 px-6 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <FadeUpOnScroll>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-primary text-sm font-mono">{'// '}</span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em]">
                  Prototype
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                High-Fidelity Homepage Wireframe
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto font-mono leading-relaxed">
                Scrollable high-fidelity prototype of the homepage showcasing layout structure,
                feature hierarchy, and conversion flow.
              </p>
            </div>
          </FadeUpOnScroll>

          <FadeUpOnScroll delay={0.2}>
            {/* Desktop Monitor Frame */}
            <div className="clipo-monitor-frame">
              {/* Monitor Top Bezel */}
              <div className="clipo-monitor-bezel-top">
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>

              {/* Browser Chrome */}
              <div className="clipo-browser-chrome">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                {/* URL Bar */}
                <div className="clipo-url-bar">
                  <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                  <span className="text-white/40 text-[11px] font-mono truncate">clipo.ai</span>
                </div>

                {/* Right side buttons */}
                <div className="flex items-center gap-2 opacity-30">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>

              {/* Browser Viewport — Scrollable */}
              <div className="clipo-browser-viewport">
                <Image
                  src="/Desktop - 1.jpg"
                  alt="Homepage High Fidelity Wireframe"
                  width={1440}
                  height={5000}
                  quality={100}
                  priority
                  className="w-full h-auto"
                />
              </div>

              {/* Monitor Bottom Bezel */}
              <div className="clipo-monitor-bezel-bottom" />

              {/* Monitor Stand */}
              <div className="clipo-monitor-stand">
                <div className="clipo-monitor-neck" />
                <div className="clipo-monitor-base" />
              </div>
            </div>
          </FadeUpOnScroll>
        </div>
      </section>

      {/* — Takeaways & Conclusion — */}
      <section className="py-24 px-6 bg-secondary/20 text-foreground mt-16 rounded-t-2xl border-t border-l border-r border-border relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#7c5cfc]/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUpOnScroll>
            <div className="inline-flex items-center justify-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7c5cfc]/70" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Project Conclusion
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#7c5cfc]/70" />
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Design is not just how it looks.<br/>
              It's how it <span className="text-[#7c5cfc] italic">works.</span>
            </h2>
            
            <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl mx-auto mb-14 leading-relaxed">
              Working on Clipo allowed me to seamlessly merge visual aesthetics with functional user experience, creating a cohesive journey that connected the brand's creative identity with its core product interface.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const el = document.getElementById('main-scroll-container') || document.documentElement;
                  el.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background text-muted-foreground transition-all duration-500 group"
                aria-label="Scroll to top"
              >
                <svg className="w-5 h-5 group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </FadeUpOnScroll>
        </div>
      </section>
    </div>
  );
}
