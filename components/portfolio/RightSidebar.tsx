'use client';
import { useState, useEffect, useRef } from 'react';

export function RightSidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navItems = [
    { key: 'nav-home', id: 'home', label: 'Home' },
    { key: 'nav-work', id: 'work', label: 'Work' },
    { key: 'nav-about', id: 'about', label: 'About me' },
    { key: 'nav-what-i-do', id: 'what-i-do', label: 'What I do' },
    { key: 'nav-tech-stack', id: 'tech-stack', label: 'Tech stack' },
    { key: 'nav-awards', id: 'awards', label: 'Awards' },
    { key: 'nav-contact', id: 'contact', label: 'Contact me' },
  ];

  useEffect(() => {
    // Track which sections are currently visible and how much
    const visibilityMap = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Pick the section with the highest visibility ratio
        let maxRatio = 0;
        let mostVisible = activeSection;

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(mostVisible);
        }
      },
      {
        // Fire at every 1% change in visibility for fine-grained tracking
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        // Shrink the root viewport so sections activate as they enter the middle
        rootMargin: '-10% 0px -60% 0px',
      }
    );

    const sectionIds = navItems.map((item) => item.id);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="sticky top-12 h-[calc(100vh-48px)] w-full bg-background border-l border-border px-5 py-4 flex flex-col overflow-y-auto">
      <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-6 font-semibold">
        Index
      </h3>

      <nav className="space-y-5 flex-1">
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={`${item.key}-${idx}`}
              onClick={() => handleClick(item.id)}
              className={`relative block w-full text-sm transition-all duration-200 text-left pl-4 py-0.5 ${
                isActive
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {/* Animated left bar */}
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full bg-foreground transition-all duration-300 ease-out"
                style={{
                  height: isActive ? '20px' : '0px',
                  opacity: isActive ? 1 : 0,
                }}
              />
              {item.label}
            </button>
          );
        })}
      </nav>
      <button className="w-full bg-foreground text-background px-3 py-1.5 my-3 rounded text-xs font-semibold hover:opacity-90 transition-opacity">
          Schedule a call
        </button>
        <button className="w-full border border-foreground text-foreground px-3 py-1.5 rounded text-xs font-semibold hover:bg-foreground/5 transition-colors">
          Work with me
        </button>
    </aside>
  );
}