'use client';

import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  duration: string;
  features: string[];
}

export function ProjectCard({ title, duration, features }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer mb-8">
      <div className="bg-secondary rounded-lg p-8 mb-4 hover:bg-muted transition-colors">
        <div className="aspect-video bg-border rounded flex items-center justify-center mb-4">
          <div className="text-muted-foreground text-sm">Project Preview</div>
        </div>
      </div>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
      </div>
      <ul className="space-y-1">
        {features.map((feature, idx) => (
          <li key={idx} className="text-sm text-muted-foreground">
            • {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
