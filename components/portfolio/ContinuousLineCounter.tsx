'use client';

import { createContext, useContext, useRef, ReactNode } from 'react';

interface LineCounterContextType {
  registerSection: (key: string, lineCount: number) => number;
}

const LineCounterContext = createContext<LineCounterContextType | undefined>(undefined);

export function LineCounterProvider({ children }: { children: ReactNode }) {
  const currentLineRef = useRef(1);
  const sectionMapRef = useRef<Record<string, number>>({});

  const registerSection = (key: string, lineCount: number): number => {
    if (typeof sectionMapRef.current[key] === 'number') {
      return sectionMapRef.current[key];
    }
    const start = currentLineRef.current;
    sectionMapRef.current[key] = start;
    currentLineRef.current += lineCount;
    return start;
  };

  return (
    <LineCounterContext.Provider value={{ registerSection }}>
      {children}
    </LineCounterContext.Provider>
  );
}

export function useLineCounter() {
  const context = useContext(LineCounterContext);
  if (!context) throw new Error('useLineCounter must be used within LineCounterProvider');
  return context;
}

// Drop this wherever you need a numbered gutter
export function LineNumbers({ sectionKey, count }: { sectionKey: string; count: number }) {
  const { registerSection } = useLineCounter();
  const start = registerSection(sectionKey, count);

  return (
    <div className="flex flex-col items-end pr-4 select-none" style={{ boxSizing: 'border-box' }}>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={{
            height: '22px',
            lineHeight: '22px',
            color: 'rgb(157, 157, 157)',
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0em',
            fontWeight: 400,
            textAlign: 'right',
            userSelect: 'none',
            whiteSpace: 'pre',
          }}
        >
          {start + i}
        </span>
      ))}
    </div>
  );
}