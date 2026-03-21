'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeUpOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeUpOnScroll({
  children,
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
}: FadeUpOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
