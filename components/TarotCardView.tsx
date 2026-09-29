'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DrawnCard } from '../lib/karmaSynthesis';
import { SpreadPosition } from '../lib/tarotSpreads';

interface TarotCardViewProps {
  card: DrawnCard;
  position: SpreadPosition;
  isFlipped: boolean;
  onFlip: (e: React.MouseEvent) => void;
  onClickDetail: () => void;
  isCrossed?: boolean;
}

export default function TarotCardView({
  card,
  position,
  isFlipped,
  onFlip,
  onClickDetail,
  isCrossed = false
}: TarotCardViewProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (!isFlipped) {
      onFlip(e);
    } else {
      onClickDetail();
    }
  };

  return (
    <div className="flex flex-col items-center group">
      {/* Position Header Tag */}
      <div className="mb-2 text-center">
        <span className="block text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-amber-300/90 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
          {position.title}
        </span>
        <span className="hidden md:block text-[9px] uppercase tracking-widest text-gray-400 opacity-60">
          {position.subtitle}
        </span>
      </div>

      {/* 3D Card Container */}
      <div
        onClick={handleClick}
        style={{ perspective: 1200 }}
        className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 ${
          isCrossed ? 'rotate-90 z-20 shadow-2xl' : 'z-10'
        }`}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative h-56 w-36 md:h-72 md:w-44 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          {/* BACK OF CARD (Hidden state) */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className="absolute inset-0 flex flex-col items-center justify-between rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-[#180f26] via-[#0d0716] to-[#08030d] p-4 text-center shadow-[0_0_20px_rgba(139,92,246,0.15)] overflow-hidden"
          >
            {/* Ornate inner border */}
            <div className="absolute inset-2 rounded-xl border border-amber-400/20" />
            <div className="absolute inset-3 rounded-lg border border-purple-500/10" />

            {/* Top Mystic Symbol */}
            <div className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 z-10">
              ✦ ZÜHRE ✦
            </div>

            {/* Sacred Geometry Mandala Center */}
            <div className="relative flex items-center justify-center my-auto z-10">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-amber-400/40 flex items-center justify-center animate-[spin_25s_linear_infinite]">
                <div className="h-10 w-10 md:h-14 md:w-14 rotate-45 border border-purple-400/40" />
              </div>
              <div className="absolute h-6 w-6 rounded-full bg-amber-400/20 blur-sm" />
              <span className="absolute text-sm text-amber-300/80">☾</span>
            </div>

            {/* Bottom Invitation */}
            <div className="z-10">
              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 group-hover:text-amber-300 transition-colors animate-pulse">
                Açmak İçin Dokun
              </span>
            </div>
          </div>

          {/* FRONT OF CARD (Revealed state) */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
            className="absolute inset-0 flex flex-col items-center justify-between rounded-2xl border-2 border-amber-400/70 bg-gradient-to-b from-[#1d122e] via-[#12081f] to-[#07030c] p-4 text-center shadow-[0_0_35px_rgba(212,175,55,0.3)] overflow-hidden"
          >
            {/* Inner Gold Foil Frame */}
            <div className="absolute inset-2 rounded-xl border border-amber-400/30" />

            {/* Card ID / Suit Tag */}
            <div className="text-[10px] uppercase tracking-[0.25em] text-amber-300/90 z-10">
              № {card.id}
            </div>

            {/* Center Card Title and Archetype */}
            <div className="my-auto z-10 px-1">
              <h4 className="text-sm md:text-base font-light tracking-[0.15em] text-amber-200 uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                {card.name}
              </h4>
              <p className="mt-1 text-[10px] md:text-xs text-purple-300/90 font-serif italic tracking-wide">
                {card.archetype}
              </p>
            </div>

            {/* Card Meaning Teaser */}
            <div className="z-10 border-t border-amber-400/20 pt-2 w-full">
              <p className="text-[9px] md:text-[10px] leading-tight text-gray-300 line-clamp-2 italic font-serif">
                "{card.meaning}"
              </p>
              <span className="mt-1 block text-[8px] uppercase tracking-widest text-amber-400/80 hover:text-amber-200">
                Detayı Oku [✦]
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
