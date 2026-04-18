'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeUpOnScroll } from '@/components/animations/FadeUpOnScroll';
import { portfolioData } from '@/lib/portfolio-data';

const designImages = [
  { src: '/Educational_Trip.png', alt: 'Educational Trip to Jaipur' },
  { src: '/Blinkit_Ambulance.png', alt: 'Blinkit Ambulance Service' },
  { src: '/Clipo_AI_Framing.jpg', alt: 'Clipo AI Auto Framing' },
  { src: '/Mayclor Flyer A3.png', alt: 'Mayclor Flyer A3' },
  { src: '/induction Crew.png', alt: 'Induction Crew' },
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
  { src: '/Orange Yellow Organic Skincare Serum Product Instagram Post.png', alt: 'Skincare Instagram Post' },
  { src: '/creatiwise brand identity.jpg', alt: 'Creatiwise brand identity' },
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
            <h1 className="text-4xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-4">
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
          {/* Gallery - Masonry layout */}
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
      
      {/* Call to Action */}
      <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center border-t border-border mt-12 bg-secondary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        <FadeUpOnScroll>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-primary text-sm font-mono">{'// '}</span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.15em]">
                What's Next
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">amazing</span> together
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-10 font-mono leading-relaxed">
              Loved these designs? Whether you need an engaging social media campaign, a complete brand identity, or an intuitive user interface, I'm here to bring your vision to life.
            </p>
            <a 
              href={portfolioData.profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background text-sm font-bold rounded-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get in Touch
              <span className="text-lg animate-pulse">↗</span>
            </a>
          </div>
        </FadeUpOnScroll>
      </section>

      {/* Bottom spacer */}
      <div className="h-16" />
    </div>
  );
}
