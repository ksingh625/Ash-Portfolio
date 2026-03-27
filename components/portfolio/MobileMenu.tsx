'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Mail, Phone, Globe, Award, BookOpen, User, Briefcase, Code, Send } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const { profile, navigation } = portfolioData;

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    },
    opened: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    opened: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed right-0 top-0 bottom-0 w-[300px] bg-background border-l border-border z-[101] md:hidden flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">Menu</span>
              <button onClick={onClose} className="p-2 hover:bg-secondary rounded-sm transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Section (Quick view) */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-sm overflow-hidden bg-secondary border border-border">
                   <Image
                    src="/ashish-profile.jpg"
                    alt={profile.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{profile.name}</h3>
                  <p className="text-[10px] text-muted-foreground">{profile.title}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <Mail className="w-3 h-3" />
                  <span>{profile.email}</span>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="p-4 flex-1">
              <nav className="space-y-1">
                {navigation.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    custom={idx}
                    variants={itemVariants}
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left px-4 py-3 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-sm transition-all flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-border bg-secondary/20 space-y-2">
              <a 
                href="/Ashish Kumar Singh CV.pdf" 
                download="Ashish Kumar Singh CV.pdf"
                className="w-full bg-foreground text-background py-2.5 rounded-sm text-xs font-bold hover:opacity-90 transition-opacity text-center block"
              >
                Download CV
              </a>
              <button 
                onClick={() => handleLinkClick('contact')}
                className="w-full border border-foreground text-foreground py-2.5 rounded-sm text-xs font-bold hover:bg-foreground/5 transition-colors"
                >
                Work with me
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
