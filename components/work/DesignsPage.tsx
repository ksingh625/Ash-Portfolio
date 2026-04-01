'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeUpOnScroll } from '@/components/animations/FadeUpOnScroll';

const designImages = [
  { src: '/CLIPO first post (4).png', alt: 'CLIPO first post' },
  { src: '/CR feature @6.png', alt: 'CR feature' },
  { src: '/Clipo Flyer (A4 (Landscape).png', alt: 'Clipo Flyer' },
  { src: '/Clipo Launch Post.png', alt: 'Clipo Launch Post' },
  { src: '/Copy of After.png', alt: 'After Copy' },
  { src: '/German (1).png', alt: 'German' },
  { src: '/Haptitude (1).jpg', alt: 'Haptitude' },
  { src: '/Hiring @Drive_dev.png', alt: 'Hiring Post' },
  { src: '/INSTANT CLIPS.BY KEYWORD MAGIC!.png', alt: 'Instant Clips' },
  { src: '/Life nowadays.png', alt: 'Life nowadays' },
  { src: '/Mayclor Flyer A3.png', alt: 'Mayclor Flyer A3' },
  { src: '/Orange Yellow Organic Skincare Serum Product Instagram Post.png', alt: 'Skincare Instagram Post' },
  { src: '/creatiwise brand identity.jpg', alt: 'Creatiwise brand identity' },
  { src: '/induction Crew.png', alt: 'Induction Crew' },
  { src: '/what if.png', alt: 'What if concept' },
  { src: '/5 Signs.png', alt: '5 Signs' },
  { src: '/5 Tips To Increase Work.png', alt: '5 Tips To Increase Work' },
  { src: '/ai faceless shorts.png', alt: 'ai faceless shorts' },
  { src: '/Leaf bass 2.png', alt: 'Leaf Bass 2 Headphones' },
];

export function DesignsPage() {
  return (
    <div className="py-0 flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUpOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Design Gallery
              </span>
            </div>
          </FadeUpOnScroll>

          <FadeUpOnScroll delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-4">
              Visual Designs
            </h1>
          </FadeUpOnScroll>
          <FadeUpOnScroll delay={0.15}>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground leading-tight max-w-3xl">
              A collection of posters, social media creatives, brand identities, and graphic designs.
            </p>
          </FadeUpOnScroll>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full border-t border-border" />

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {designImages.map((image, idx) => (
              <FadeUpOnScroll key={idx} delay={(idx % 6) * 0.1}>
                <motion.div 
                  className="relative group rounded-xl overflow-hidden bg-secondary border border-border break-inside-avoid"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </FadeUpOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom spacer */}
      <div className="h-24" />
    </div>
  );
}
