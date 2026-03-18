'use client';

import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';
import Image from 'next/image';

const techItems = [
  { name: 'C++',        icon: 'https://cdn.simpleicons.org/cplusplus',   },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript',  },
  { name: 'C',          icon: 'https://cdn.simpleicons.org/c',           },
  { name: 'PHP',        icon: 'https://cdn.simpleicons.org/php',         },
  { name: 'Python',     icon: 'https://cdn.simpleicons.org/python',      },
  { name: 'HTML',       icon: 'https://cdn.simpleicons.org/html5',       },
  { name: 'CSS',        icon: 'https://cdn.simpleicons.org/css',        },
  { name: 'Tailwind',   icon: 'https://cdn.simpleicons.org/tailwindcss', },
  { name: 'NodeJS',     icon: 'https://cdn.simpleicons.org/nodedotjs',   },
  { name: 'ReactJS',    icon: 'https://cdn.simpleicons.org/react',       },
  { name: 'Figma',      icon: 'https://cdn.simpleicons.org/figma',       },
  { name: 'MySQL',      icon: 'https://cdn.simpleicons.org/mysql',       },
];

export function TechStackSection() {
  const { registerSection } = useLineCounter();
  const startLine = registerSection('tech-stack', 30);

  return (
    <section id="tech-stack" className="mb-0 pt-0">
      <IDEWrapper startLine={startLine} lineCount={30}>
        <div className="py-4 px-2">
          <p className="text-muted-foreground text-xs font-mono mb-6">{'<!-- My tech stack -->'}</p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border-l border-t border-border">
            {techItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-start justify-between border-r border-b border-border p-4 gap-4"
              >
                {/* Name */}
                <span className="text-xs text-foreground font-mono">{item.name}</span>

                {/* Icon */}
                <div className="w-10 h-10 relative">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </IDEWrapper>
    </section>
  );
}