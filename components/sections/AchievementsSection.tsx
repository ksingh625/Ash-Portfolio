'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { FadeIn } from '@/components/animations/FadeIn';

export function AchievementsSection() {

  return (
    <section id="awards" className="mb-0 pt-0">
        {`<!-- Achievements & Awards -->\n\n`}
        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-bold text-foreground">Achievements & Awards</h2>
        </FadeIn>

        <div className="space-y-6 mt-4">
          {portfolioData.achievements.map((achievement, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.15}>
              <div className="border border-border rounded p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
    </section>
  );
}
