'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';

export function WorkSection() {
  const { registerSection } = useLineCounter();
  const startLine = registerSection('work', 30);

  return (
    <section id="work" className="mb-0 pt-0">
      <IDEWrapper startLine={startLine} lineCount={30}>
        {`<!-- Featured work -->\n\n`}
        <span className="hero-body">
          My Creative Showcase
        </span>
        {`\n\n`}
        <div className="grid grid-cols-2 gap-8 mt-4">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="border border-border rounded-lg p-6 hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.duration}</p>
              <ul className="space-y-2">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {feature}
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
