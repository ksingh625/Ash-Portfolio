'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { FadeIn } from '@/components/animations/FadeIn';

export function EducationSection() {
  return (
    <section id="education" className="mb-0 pt-0">
      {`<!-- Education -->\n\n`}
      <FadeIn delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground">Education</h2>
      </FadeIn>

      <div className="space-y-6 mt-6">
        {portfolioData.education.map((edu, idx) => (
          <FadeIn key={idx} delay={0.2 + idx * 0.15}>
            <div className="border-l-2 border-primary pl-6 hover:border-l-4 transition-all duration-300 py-2">
              <h3 className="text-xl font-bold text-foreground mb-1">{edu.title}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{edu.school}</p>
              <p className="text-sm font-mono text-muted-foreground bg-white/[0.03] inline-block px-2 py-1 rounded">CGPA: {edu.cgpa}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
