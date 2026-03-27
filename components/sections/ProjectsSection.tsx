'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { FadeIn } from '@/components/animations/FadeIn';

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-0 pt-0">
        {`<!-- Featured Projects -->\n\n`}
        <FadeIn>
          <span className="hero-body">
            My Featured Projects
          </span>
        </FadeIn>
        {`\n\n`}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {portfolioData.projects.map((project, idx) => (
            <FadeIn key={project.id} delay={0.1 * idx}>
              <div className="border border-border rounded-lg p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
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
            </FadeIn>
          ))}
        </div>
    </section>
  );
}
