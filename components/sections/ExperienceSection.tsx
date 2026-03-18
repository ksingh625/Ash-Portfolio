'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';

export function ExperienceSection() {
  const { registerSection } = useLineCounter();
  const startLine = registerSection('experience', 50);

  return (
    <section id="experience" className="mb-0 pt-0">
      <IDEWrapper startLine={startLine} lineCount={50}>
        {`<!-- In a previous life -->\n\n`}
        <h2 className="text-3xl font-bold text-foreground">Experience</h2>

        <div className="space-y-8 mt-4">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-6">
              <p className="text-sm text-muted-foreground mb-1 font-code">{exp.period}</p>
              <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
              <p className="text-sm text-primary font-semibold mb-4">{exp.company}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, aidx) => (
                  <li key={aidx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    {achievement}
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
