'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { DrawnCard } from '../lib/karmaSynthesis';

interface CardDetailModalProps {
  card: DrawnCard | null;
  onClose: () => void;
}

export default function CardDetailModal({ card, onClose }: CardDetailModalProps) {
  if (!card) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl border border-purple-500/30 bg-[#120c1d] p-8 text-center text-[#e8dcc5] shadow-[0_0_50px_rgba(139,92,246,0.2)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white"
          >
            <X size={16} />
          </button>

          {/* Position Info */}
          {card.positionTitle && (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-3.5 py-1 text-[11px] uppercase tracking-[0.25em] text-purple-300 mb-4">
              <Sparkles size={12} />
              {card.positionTitle}
            </div>
          )}

          {/* Card Name */}
          <h2 className="text-3xl font-light tracking-[0.2em] text-amber-200 uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            {card.name}
          </h2>

          {/* Archetype */}
          <h3 className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400 opacity-80">
            {card.archetype}
          </h3>

          <div className="my-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

          {/* Meaning / N.G. Kabal Text */}
          <p className="text-sm md:text-base leading-relaxed text-[#ded4c3] font-serif italic mb-8">
            "{card.meaning}"
          </p>

          <button
            onClick={onClose}
            className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-purple-300 transition-colors"
          >
            Kapat [X]
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
