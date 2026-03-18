'use client';

interface LineNumbersProps {
  lineCount: number;
  startLine?: number;
}

export function LineNumbers({ lineCount, startLine = 1 }: LineNumbersProps) {
  return (
    <div className="flex-shrink-0 select-none text-muted-foreground font-code pr-6 text-right border-r border-border" style={{ width: '1px' }}>
      {Array.from({ length: lineCount }, (_, i) => (
        <div key={`line-${startLine + i}`} className="h-6 leading-6 text-sm">
          {startLine + i}
        </div>
      ))}
    </div>
  );
}
