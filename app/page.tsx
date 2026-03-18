'use client';

import { Header } from '@/components/portfolio/Header';
import { LeftSidebar } from '@/components/portfolio/LeftSidebar';
import { RightSidebar } from '@/components/portfolio/RightSidebar';
import { LineCounterProvider } from '@/components/portfolio/ContinuousLineCounter';
import { HeroSection } from '@/components/sections/HeroSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhatIDoSection } from '@/components/sections/WhatIDoSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="bg-background text-foreground h-screen flex flex-col overflow-hidden">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-72 flex-shrink-0 border-r border-border">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <LineCounterProvider>
            <div className="px-12 py-0">
              <HeroSection />
              <WorkSection />
              <AboutSection />
              <WhatIDoSection />
              <TechStackSection />
              <ExperienceSection />
              <AchievementsSection />
              <ContactSection />
            </div>
          </LineCounterProvider>
        </main>

        {/* Right Sidebar */}
        <div className="w-72 flex-shrink-0 border-l border-border">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
