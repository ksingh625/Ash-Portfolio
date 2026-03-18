'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';

export function HeroSection() {
  const { registerSection } = useLineCounter();
  const startLine = registerSection('home', 15);
  const [headlineTop, headlineBottom] = portfolioData.hero.headline.split('\n');
  const subtext = portfolioData.hero.subtext;

  return (
    <section id="home" className="mb-0 pb-0">
      <IDEWrapper startLine={startLine} lineCount={15}>
        {`<!-- Hero section -->\n\n`}
        <span className="hero-title hero-title-primary">{headlineTop}</span>
        {`\n`}
        <span className="hero-title hero-title-secondary">{headlineBottom}</span>
        {`\n\n`}
        <span className="hero-body">{subtext}</span>
      </IDEWrapper>
    </section>
  );
}
