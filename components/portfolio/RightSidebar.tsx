'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

interface RightSidebarProps {
  onNavigateToContact?: () => void;
}

export function RightSidebar({ onNavigateToContact }: RightSidebarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navItems = portfolioData.navigation;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const container = document.getElementById('main-scroll-container');
        if (!container) return;

        // 1. Check if user is scrolled to the absolute bottom
        const { scrollTop, scrollHeight, clientHeight } = container;
        // If within 20px of the bottom, just activate the very last item!
        if (Math.abs(scrollHeight - clientHeight - scrollTop) < 20) {
          setActiveSection(navItems[navItems.length - 1].id);
          return;
        }

        // 2. Otherwise, find the section closest to the top-middle of the screen
        let closestSection = activeSection;
        let minDistance = Infinity;

        navItems.forEach((item) => {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // We want the element whose top is closest to 30% down the screen
            const targetY = window.innerHeight * 0.3;
            // Only consider elements that are actually on screen
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const distance = Math.abs(rect.top - targetY);
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = item.id;
              }
            }
          }
        });

        if (closestSection && closestSection !== activeSection) {
          setActiveSection(closestSection);
        }
      }, 50); // Small debounce for performance
    };

    const container = document.getElementById('main-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      // Trigger once on load
      handleScroll();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, [navItems, activeSection]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.aside
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-12 h-[calc(100vh-48px)] border-l border-border bg-background w-full py-4 flex flex-col overflow-y-auto"
    >
      <div className="px-4 mb-4 pb-3 border-b border-border/50">
        <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          Index
        </h3>
      </div>

      <nav className="space-y-3 flex-1 relative px-4">
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={`${item.id}-${idx}`}
              onClick={() => handleClick(item.id)}
              className={`relative block w-full text-sm font-mono transition-all duration-200 text-left py-0.5 ${isActive
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {/* Sliding Active Bar on the Edge */}
              {isActive && (
                <motion.span
                  layoutId="sidebarActiveBar"
                  className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-[2px] h-[20px] rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="px-3 mt-4 space-y-2">
        <button className="w-full bg-foreground text-background px-3 py-1.5 rounded text-xs font-semibold hover:opacity-90 transition-opacity">
          Schedule a call
        </button>
        <button
          onClick={() => onNavigateToContact ? onNavigateToContact() : handleClick('contact')}
          className="w-full border border-foreground text-foreground px-3 py-1.5 rounded text-xs font-semibold hover:bg-foreground/5 transition-colors"
        >
          Work with me
        </button>
      </div>
    </motion.aside>
  );
}