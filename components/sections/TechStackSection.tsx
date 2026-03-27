'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

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

  return (
    <section id="tech-stack" className="mb-0 pt-0">
        <div className="py-4 px-2">
          <p className="text-muted-foreground text-xs font-mono mb-6">{'<!-- My tech stack -->'}</p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border-l border-t border-border">
            {techItems.map((item, idx) => (
              <FadeIn
                key={item.name}
                delay={0.1 + idx * 0.15}
                className="flex flex-col items-start justify-between border-r border-b border-border p-3 md:p-4 gap-3 md:gap-4 hover:-translate-y-1 hover:shadow-lg hover:bg-neutral-900 transition-all duration-300 cursor-default group"
              >
                {/* Name */}
                <span className="text-xs text-foreground font-mono">{item.name}</span>

                {/* Icon */}
                <div className="w-8 h-8 md:w-10 md:h-10 relative saturate-0 group-hover:saturate-100 transition-all duration-300">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
    </section>
  );
}