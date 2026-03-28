'use client';

import React, { useEffect, useState, useRef } from 'react';

export function GlobalIDEWrapper({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(50);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        // Measure exact height of the inner content, ignoring grid stretches
        const height = contentRef.current.getBoundingClientRect().height;
        // Add padding and exactly 3 lines of trailing numbers
        const lines = Math.max(10, Math.ceil((height + 80) / 24));
        setLineCount(lines);
      }
    };

    updateHeight();
    
    // ResizeObserver watches for changes to layout size dynamically (eg window resize, lazy loads)
    const observer = new ResizeObserver(() => {
      updateHeight();
    });
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="editor-grid min-h-full">
      <div className="editor-line-numbers overflow-hidden pointer-events-none select-none">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i + 1} className="editor-line-number">
            {i + 1}
          </div>
        ))}
      </div>
      <div className="editor-content relative">
        <div ref={contentRef} className="w-full flex-col flex">
          {children}
        </div>
      </div>
    </div>
  );
}
