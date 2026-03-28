'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_SEQUENCES = [
  { text: 'Initializing portfolio kernel...', delay: 150 },
  { text: 'Checking system integrity...', delay: 300 },
  { text: 'Loading IntelliSense subsystems...', delay: 400 },
  { text: 'Building file system tree...', delay: 350 },
  { text: 'Loading modules: [Hero, About, Projects, Experience]', delay: 500 },
  { text: 'Indexing creative assets...', delay: 300 },
  { text: 'Loading extensions: [Git, Debugger, Tailwind, Framer]', delay: 450 },
  { text: 'Syncing remote repositories...', delay: 300 },
  { text: 'Optimizing UI rendering engine...', delay: 200 },
  { text: 'Connection established. Boot sequence complete.', delay: 400 },
];

export const BootLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentLine < BOOT_SEQUENCES.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setProgress(((currentLine + 1) / BOOT_SEQUENCES.length) * 100);
      }, BOOT_SEQUENCES[currentLine].delay);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        setTimeout(onComplete, 800);
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0d0d0d] flex flex-col items-center justify-center font-mono p-6"
        >
          <div className="w-full max-w-2xl">
            {/* IDE Style Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex justify-center mb-16"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-6 py-3 bg-[#111] ring-1 ring-zinc-800 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    A
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-200 font-bold tracking-tight text-sm">ASHISH IDE</span>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Professional Edition</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-xs ml-2 text-zinc-500">ashish-os — zsh — 80x24</span>
            </div>

            {/* Terminal Content */}
            <div className="space-y-1.5 mb-12 min-h-[220px]">
              {BOOT_SEQUENCES.slice(0, currentLine + 1).map((seq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-green-500 shrink-0">
                    {index === BOOT_SEQUENCES.length - 1 ? '✔' : '[ OK ]'}
                  </span>
                  <span className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {seq.text}
                    {index === currentLine && currentLine < BOOT_SEQUENCES.length - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-zinc-400 ml-1 align-middle"
                      />
                    )}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Progress Section */}
            <div className="space-y-4">
              <div className="flex justify-between text-xs text-zinc-500 mb-1">
                <span>SYSTEM BOOT PROGRESS</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="flex justify-center mt-12">
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]"
                >
                  Unauthorized access prohibited
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
