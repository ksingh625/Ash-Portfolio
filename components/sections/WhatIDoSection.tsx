'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';

export function WhatIDoSection() {
  const { registerSection } = useLineCounter();
  const startLine = registerSection('what-i-do', 25);

  return (
    <section id="what-i-do" className="mb-0 pt-0">
      <IDEWrapper startLine={startLine} lineCount={25}>
        {`<!-- What I do -->\n\n`}
        <h2 className="text-3xl font-bold text-foreground">What I Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {portfolioData.whatIDo.map((item, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 hover:border-primary/50 transition">
              <h3 className="text-lg font-bold text-foreground mb-4">{item.category}</h3>
              <ul className="space-y-2">
                {item.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </IDEWrapper>
    </section>
  );
}
