'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [activeTab, setActiveTab] = useState('ash.info');
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
    <header className="sticky top-0 bg-background border-b border-border flex items-stretch z-40 h-12">
      {/* Left: Welcome text */}
      <div className="px-18 text-xs text-muted-foreground flex items-center h-full whitespace-nowrap">
        Welcome to my world!
      </div>

      {/* Center: Tabs aligned with editor grid */}
      <div className="flex-1 flex items-stretch editor-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 text-xs flex items-center border-l border-border transition-colors ${
              activeTab === tab
                ? 'bg-neutral-900 text-foreground border-b-2 border-b-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right indicators */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground px-6 h-full whitespace-nowrap">
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
    </header>
  );
}