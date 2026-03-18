'use client';

import { portfolioData } from '@/lib/portfolio-data';
import Image from 'next/image';
import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function AboutSection() {
  const { about } = portfolioData;
  const { registerSection } = useLineCounter();
  const startLine = registerSection('about', 45);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ashish_Kumar_Singh_CV.pdf';
    link.download = 'Ashish_Kumar_Singh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="mb-0 pt-0">
      <IDEWrapper startLine={startLine} lineCount={45}>
        {`<!-- About me section -->\n\n`}

        <div className="grid grid-cols-5 gap-12 items-start">
          {/* Left: Text content */}
          <div className="col-span-3">
            <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">
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
              <button
                onClick={handleDownloadCV}
                className="bg-secondary border border-border px-5 py-2.5 text-sm font-bold font-mono hover:bg-secondary/80 transition"
              >
                Download CV
              </button>
              <button
                onClick={handleDownloadCV}
                className="bg-secondary border border-border border-l-0 px-4 py-1.5 hover:bg-secondary/80 transition"
              >
                <span className="text-lg">↓</span>
              </button>
            </div>
          </div>

          {/* Right: Photo Card */}
          <div className="col-span-2 flex justify-end">
            <div className="border border-border rounded-sm overflow-hidden bg-[#1a1a1a] flex flex-col w-full max-w-xs">
              {/* Image — no padding, flush to edges */}
              <div className="relative w-full aspect-square">
                <Image
                  src="/ashish-profile.jpg"
                  alt="Ashish Kumar Singh"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Follow me bar */}
              <div className="px-5 py-3.5 border-t border-border flex items-center gap-5">
                <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                  Follow me:
                </span>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IDEWrapper>
    </section>
  );
}