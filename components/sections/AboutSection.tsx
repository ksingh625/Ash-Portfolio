'use client';

import { portfolioData } from '@/lib/portfolio-data';
import Image from 'next/image';

import { FadeIn } from '@/components/animations/FadeIn';

export function AboutSection() {
  const { about } = portfolioData;


  return (
    <section id="about" className="mb-0 pt-0">
      {`<!-- About me section -->\n\n`}

      {/* Left: Text content */}
      <FadeIn className="w-full">
        <h2 className="text-3xl font-bold text-foreground mb-8 leading-tight">
          {about.title.split(' ')[0]}{' '}
          <span className="text-muted-foreground">
            {about.title.split(' ').slice(1, -1).join(' ')}
          </span>
          <br />
          <span className="text-muted-foreground">
            {about.title.split(' ').slice(-1)}
          </span>
        </h2>

        <div className="space-y-5 font-mono text-sm leading-7">
          {about.description.split('\n\n').map((para, idx) => (
            <p key={idx} className="text-foreground/80">
              {para.split(/(\*\*.*?\*\*)/).map((part, i) =>
                part.startsWith('**') && part.endsWith('**') ? (
                  <mark
                    key={i}
                    className="bg-[#3a3a2a] text-foreground px-1 rounded-sm not-italic"
                  >
                    {part.slice(2, -2)}
                  </mark>
                ) : (
                  part
                )
              )}
            </p>
          ))}
        </div>

        {/* Download CV button */}
        <div className="mt-10 flex items-center gap-0">
          <a
            href="/Ashish Kumar Singh CV.pdf"
            download="Ashish Kumar Singh CV.pdf"
            className="bg-secondary border border-border px-5 py-2.5 text-sm font-bold font-mono hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center"
          >
            Download CV
          </a>
          <a
            href="/Ashish Kumar Singh CV.pdf"
            download="Ashish Kumar Singh CV.pdf"
            className="bg-secondary border border-border border-l-0 px-4 py-1.5 hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center"
          >
            <span className="text-lg">↓</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}