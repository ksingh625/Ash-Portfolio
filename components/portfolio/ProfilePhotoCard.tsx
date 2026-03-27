'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function ProfilePhotoCard() {
  return (
    <FadeIn delay={0.2} yOffset={40} className="flex justify-center md:justify-end">
      <motion.div 
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="border border-border rounded-sm overflow-hidden bg-[#1a1a1a] flex flex-col w-full max-w-[280px] md:max-w-xs hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group"
      >
        {/* Image — no padding, flush to edges */}
        <div className="relative w-full aspect-square overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src="/ashish-profile.jpg"
              alt="Ashish Kumar Singh"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>

        {/* Follow me bar */}
        <div className="px-5 py-3 border-t border-border flex items-center gap-5">
          <span className="text-[10px] md:text-xs text-muted-foreground font-mono whitespace-nowrap">
            Follow me:
          </span>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/ashish625" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href="https://github.com/ksingh625" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
