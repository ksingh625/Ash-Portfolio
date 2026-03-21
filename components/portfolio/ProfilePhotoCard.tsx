'use client';

import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function ProfilePhotoCard() {
  return (
    <FadeIn delay={0.2} className="flex justify-end">
      <div className="border border-border rounded-sm overflow-hidden bg-[#1a1a1a] flex flex-col w-full max-w-xs hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
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
            <a href="https://www.linkedin.com/in/ashish625" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/ksingh625" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:-translate-y-0.5 transition-all" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
