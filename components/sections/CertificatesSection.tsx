'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { FadeIn } from '@/components/animations/FadeIn';

export function CertificatesSection() {
  return (
    <section id="certificates" className="mb-0 pt-0">
      {`<!-- Certificates -->\n\n`}
      <FadeIn delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground">Certificates</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {portfolioData.certificates.map((cert, idx) => (
          <FadeIn key={idx} delay={0.2 + idx * 0.1}>
            <div className="border border-border rounded p-5 flex items-start gap-3 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <span className="text-primary mt-0.5 font-bold">▸</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{cert}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
