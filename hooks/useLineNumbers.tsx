'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface LineNumberContextType {
  currentLine: number;
  addLines: (count: number) => void;
  getLineRange: (count: number) => {
    start: number;
    end: number;
    lines: number[];
  };
}

const LineNumberContext = createContext<LineNumberContextType | null>(null);

export function LineNumberProvider({ children }: { children: ReactNode }) {
  const [currentLine, setCurrentLine] = useState<number>(0);

  const addLines = (count: number) => {
    setCurrentLine((prev) => prev + count);
  };

  const getLineRange = (count: number) => {
    const start = currentLine;
    const end = currentLine + count - 1;

    const lines = Array.from({ length: count }, (_, i) => start + i);

    setCurrentLine((prev) => prev + count);

    return { start, end, lines };
  };

  return (
    <LineNumberContext.Provider
      value={{
        currentLine,
        addLines,
        getLineRange,
      }}
    >
      {children}
    </LineNumberContext.Provider>
  );
}

export function useLineNumbers() {
  const context = useContext(LineNumberContext);

  if (!context) {
    throw new Error('useLineNumbers must be used within LineNumberProvider');
  }

  return context;
}

