'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onMenuToggle?: () => void;
}

export function Header({ activeTab, onTabChange, onMenuToggle }: HeaderProps) {
  const [time, setTime] = useState('');

  const tabs = ['ash.info', 'work.done', 'blog.share'];

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border flex items-stretch z-50 h-12"
    >
      {/* Left: Hamburger (Mobile Only) */}
      <button 
        onClick={onMenuToggle}
        className="md:hidden px-6 flex items-center border-r border-border hover:bg-secondary/50 transition-colors active:bg-secondary h-full"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Left: Welcome text (Desktop Only) */}
      <div className="hidden md:flex w-68 px-6 text-[10px] text-muted-foreground items-center h-full whitespace-nowrap border-r border-border shrink-0 font-mono uppercase tracking-wider">
        Portfolio.exe
      </div>

      {/* Center: Tabs (Desktop) / Active Tab (Mobile) */}
      <div className="flex-1 flex items-stretch">
        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-1 items-stretch editor-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-8 text-xs flex items-center border-l border-border transition-colors last:border-r ${
                activeTab === tab
                  ? 'bg-neutral-900 text-foreground border-b-2 border-b-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Active Tab Indicator */}
        <div className="md:hidden flex items-center px-4">
          <span className="text-[10px] font-mono text-muted-foreground bg-secondary/30 px-2 py-1 rounded-sm border border-border/50">
            {activeTab}
          </span>
        </div>
      </div>

      {/* Right indicators (Desktop Only) */}
      <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground px-6 h-full whitespace-nowrap">
        <div className="flex items-center gap-1.5">
        <div className="relative flex items-center justify-center w-2 h-2">
        <div className="absolute w-4 h-4 rounded-full bg-green-500 opacity-30 animate-ping"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(49,238,51,0.6)]"></div>
        </div>
          <span className="mx-0.5 text-foreground text-green-500">Open to new work</span>
        </div>
        <span>New Delhi, India</span>
        <span>My time: {time}</span>
      </div>
    </motion.header>
  );
}