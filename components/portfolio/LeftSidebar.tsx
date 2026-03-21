'use client';

import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export function LeftSidebar() {
  const { profile } = portfolioData;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ashish Kumar Singh CV.pdf';
    link.download = 'Ashish Kumar Singh CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.aside 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-12 h-[calc(100vh-48px)] w-full bg-background border-r border-border px-5 py-4 flex flex-col gap-5 my-3"
    >
      {/* Profile Image */}
      <div className="flex justify-start">
        <div className="relative">
          <div className="w-16 h-20 rounded-sm overflow-hidden bg-secondary border border-border my-2">
            <Image
              src="/ashish-profile.jpg"
              alt={profile.name}
              width={64}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div>
        <h2 className="text-base font-bold text-foreground mb-0.5">{profile.name}</h2>
        <p className="text-xs text-muted-foreground">{profile.title}</p>
      </div>

      {/* Bio */}
      <p className="text-xs text-muted-foreground leading-5 my-6">
        I'm a passionate UI/UX designer and front-end developer focused on detail.
      </p>

      {/* Info with Icons */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground my-1">📦 1+ years of experience</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
          <span className="text-xs text-muted-foreground my-1">New Delhi, India</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground my-1">🌐 English, Hindi</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
          <span className="text-xs text-muted-foreground my-1">ksash529@gmail.com</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Phone className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
          <span className="text-xs text-muted-foreground my-1">+91 8595655190</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-1.5 my-25">
        <button
          onClick={handleDownloadCV}
          className="w-full bg-foreground text-background px-3 py-1.5 rounded text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
        >
          Download CV
          <span>↓</span>
        </button>

      </div>
    </motion.aside>
  );
}