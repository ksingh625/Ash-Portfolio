'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';

export function AchievementsSection() {
  const { registerSection } = useLineCounter();
  const startLine = registerSection('awards', 40);

  return (
    <section id="awards" className="mb-0 pt-0">
      <IDEWrapper startLine={startLine} lineCount={40}>
        {`<!-- Achievements & Awards -->\n\n`}
        <h2 className="text-3xl font-bold text-foreground">Achievements & Awards</h2>

        <div className="space-y-6 mt-4">
          {portfolioData.achievements.map((achievement, idx) => (
            <div key={idx} className="border border-border rounded p-6 hover:border-primary/50 transition">
              <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground mb-3">{achievement.description}</p>

              {achievement.school && (
                <p className="text-sm text-primary font-semibold mb-1">{achievement.school}</p>
              )}

              {achievement.cgpa && (
                <p className="text-sm text-muted-foreground">CGPA: {achievement.cgpa}</p>
              )}

              {achievement.certs && (
                <ul className="mt-3 space-y-1">
                  {achievement.certs.map((cert, cidx) => (
                    <li key={cidx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">▸</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </IDEWrapper>
    </section>
  );
}
