'use client';

import React from 'react';

interface IDEWrapperProps {
  children: React.ReactNode;
  startLine?: number;
  lineCount?: number;
}

export function IDEWrapper({ children, startLine = 1, lineCount: fixedLineCount }: IDEWrapperProps) {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [measuredLineCount, setMeasuredLineCount] = React.useState(30);

  React.useEffect(() => {
    if (typeof fixedLineCount === 'number') return;
    const node = contentRef.current;
    if (!node) return;
    const text = node.innerText.replace(/\n+$/g, '');
    const lines = text.split('\n').length;
    setMeasuredLineCount(Math.max(lines, 30));
  }, [children, fixedLineCount]);

  const lineCount = typeof fixedLineCount === 'number' ? fixedLineCount : measuredLineCount;

  return (
    <div className="editor-grid">
      <div className="editor-line-numbers">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={startLine + i} className="editor-line-number">
            {startLine + i}
          </div>
        ))}
      </div>

      <div ref={contentRef} className="editor-content">
        {children}
      </div>
    </div>
  );
}
