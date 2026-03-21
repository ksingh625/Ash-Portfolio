'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { FadeIn } from '@/components/animations/FadeIn';

export function ExperienceSection() {

  return (
    <section id="experience" className="mb-0 pt-0">
        {`<!-- In a previous life -->\n\n`}
        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        </FadeIn>

        <div className="flex flex-col mt-4 border-t border-border">
          {portfolioData.experience.map((exp, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.15} className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border py-8 hover:bg-white/[0.02] transition-colors cursor-default">
              {/* Period */}
              <div className="font-mono text-sm text-primary">
                {exp.period}
              </div>
              
              {/* Role */}
              <div className="font-mono text-sm font-bold text-foreground">
                {exp.role}
              </div>
              
              {/* Company */}
              <div className="font-mono text-sm text-muted-foreground">
                {exp.company}
              </div>
            </FadeIn>
          ))}
        </div>
    </section>
  );
}
