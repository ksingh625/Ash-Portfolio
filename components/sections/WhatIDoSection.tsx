'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { FadeIn } from '@/components/animations/FadeIn';

export function WhatIDoSection() {

  return (
    <section id="what-i-do" className="mb-0 pt-0">
        {`<!-- What I do -->\n\n`}
        
        <div className="flex flex-col gap-12 mt-2">
          {portfolioData.whatIDo.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-foreground">
                {idx + 1}. {item.category}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6">
                {item.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="text-sm text-muted-foreground flex items-start gap-3 font-mono">
                    <span className="text-muted-foreground">•</span>
                    <span className="leading-relaxed hover:text-foreground transition-colors cursor-default">{skill}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
    </section>
  );
}
