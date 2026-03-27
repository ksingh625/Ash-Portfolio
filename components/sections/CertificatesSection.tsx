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
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-border rounded p-5 flex items-start gap-3 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group block"
            >
              <span className="text-primary mt-0.5 font-bold group-hover:translate-x-1 transition-transform">▸</span>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{cert.name}</p>
              </div>
              <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View <span className="text-[10px]">↗</span>
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
