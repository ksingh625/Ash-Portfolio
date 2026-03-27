'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/portfolio/Header';
import { LeftSidebar } from '@/components/portfolio/LeftSidebar';
import { RightSidebar } from '@/components/portfolio/RightSidebar';
import { GlobalIDEWrapper } from '@/components/portfolio/GlobalIDEWrapper';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhatIDoSection } from '@/components/sections/WhatIDoSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { CertificatesSection } from '@/components/sections/CertificatesSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ProfilePhotoCard } from '@/components/portfolio/ProfilePhotoCard';
import { ClipoWorkPage } from '@/components/work/ClipoWorkPage';
import { BootLoader } from '@/components/animations/BootLoader';
import { MobileMenu } from '@/components/portfolio/MobileMenu';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ash.info');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  const handleNavigate = (id: string) => {
    setActiveTab('ash.info');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {isBooting && <BootLoader onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>

      <div className={`bg-background text-foreground h-screen flex flex-col overflow-hidden transition-opacity duration-1000 ${isBooting ? 'opacity-0' : 'opacity-100'}`}>
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onMenuToggle={() => setIsMenuOpen(true)}
      />

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={handleNavigate}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Desktop Only) */}
        <div className="w-68 flex-shrink-0 border-r border-border hidden md:block">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto" id="main-scroll-container">
          {activeTab === 'ash.info' && (
            <GlobalIDEWrapper>
              <div className="py-0 flex flex-col gap-8 md:gap-28">
                <HeroSection />
                
                {/* Mobile Photo Card */}
                <div className="md:hidden">
                  <ProfilePhotoCard />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start relative">
                  {/* Left side: The flowing sections */}
                  <div className="md:col-span-3 flex flex-col gap-8 md:gap-28">
                    <AboutSection />
                    <ExperienceSection />
                  </div>
                  
                  {/* Right side: Sticky Photo (Desktop Only) */}
                  <div className="md:col-span-2 relative hidden md:block h-full">
                    <div className="sticky top-24">
                      <ProfilePhotoCard />
                    </div>
                  </div>
                </div>

                <WhatIDoSection />
                <TechStackSection />
                <ProjectsSection />
                <CertificatesSection />
                <AchievementsSection />
                <EducationSection />
                <ContactSection />
              </div>
            </GlobalIDEWrapper>
          )}

          {activeTab === 'work.done' && (
            <ClipoWorkPage />
          )}

          {activeTab === 'blog.share' && (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground font-mono text-sm text-center">Coming soon...</p>
            </div>
          )}
        </main>

        {/* Right Sidebar (Desktop Only) */}
        <div className="w-48 flex-shrink-0 border-l border-border hidden md:block">
          <RightSidebar onNavigateToContact={() => {
            setActiveTab('ash.info');
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} />
        </div>
      </div>
      </div>
    </>
  );
}
