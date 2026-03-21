'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { FadeIn } from '@/components/animations/FadeIn';

export function HeroSection() {
  const [headlineTop, headlineBottom] = portfolioData.hero.headline.split('\n');
  const subtext = portfolioData.hero.subtext;

  return (
    <section id="home" className="mb-0 pb-0">
        {`<!-- Hero section -->\n\n`}
        <FadeIn delay={0.1}>
          <span className="hero-title hero-title-primary">{headlineTop}</span>
        </FadeIn>
        {`\n`}
        <FadeIn delay={0.2}>
          <span className="hero-title hero-title-secondary">{headlineBottom}</span>
        </FadeIn>
        {`\n\n`}
        <FadeIn delay={0.3}>
          <span className="hero-body">{subtext}</span>
        </FadeIn>
    </section>
  );
}
