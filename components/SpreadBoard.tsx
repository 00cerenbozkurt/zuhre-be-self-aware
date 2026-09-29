'use client';

import React from 'react';
import { TarotSpread } from '../lib/tarotSpreads';
import { DrawnCard } from '../lib/karmaSynthesis';
import TarotCardView from './TarotCardView';
import { Sparkles, RefreshCw, Wand2 } from 'lucide-react';
import { soundEngine } from '../lib/soundEngine';

interface SpreadBoardProps {
  spread: TarotSpread;
  drawnCards: DrawnCard[];
  flippedMap: Record<number, boolean>;
  onFlipCard: (index: number, e: React.MouseEvent) => void;
  onClickCardDetail: (card: DrawnCard) => void;
  onStartKarmaHealing: () => void;
  onResetSpread: () => void;
}

export default function SpreadBoard({
  spread,
  drawnCards,
  flippedMap,
  onFlipCard,
  onClickCardDetail,
  onStartKarmaHealing,
  onResetSpread
}: SpreadBoardProps) {
  const allFlipped =
    drawnCards.length > 0 &&
    drawnCards.every((_, idx) => !!flippedMap[idx]);

  const flippedCount = Object.values(flippedMap).filter(Boolean).length;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
      {/* Board Info & Controls */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-4 mb-6 px-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-purple-300">
            Açılan Kartlar: {flippedCount} / {spread.cardCount}
          </span>
          <p className="text-xs text-gray-400 mt-0.5">
            {allFlipped
              ? 'Tüm kartlar uyanışa erdi. Ata karması kapısı açık.'
              : 'Gölgenle yüzleşmek için kartların üzerine dokun.'}
          </p>
        </div>

        <button
          onClick={() => {
            soundEngine.playCardFlip();
            onResetSpread();
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-gray-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
        >
          <RefreshCw size={12} />
          Yeniden Dağıt
        </button>
      </div>

      {/* CARDS DISPLAY CONTAINER */}
      {spread.id === 'celtic_cross' ? (
        // CELTIC CROSS DEDICATED LAYOUT
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full py-4">
          {/* LEFT: THE CROSS (Cards 1 to 6) */}
          <div className="relative flex flex-col items-center justify-center min-h-[480px] w-full max-w-xl">
            {/* Top (Card 5 - Bilinçli Hedef) */}
            {drawnCards[4] && (
              <div className="mb-4">
                <TarotCardView
                  card={drawnCards[4]}
                  position={spread.positions[4]}
                  isFlipped={!!flippedMap[4]}
                  onFlip={(e) => onFlipCard(4, e)}
                  onClickDetail={() => onClickCardDetail(drawnCards[4])}
                />
              </div>
            )}

            {/* Middle Row (Cards 4, 1, 2, 6) */}
            <div className="flex items-center justify-center gap-6 md:gap-10 w-full">
              {/* Left (Card 4 - Geçmiş) */}
              {drawnCards[3] && (
                <div>
                  <TarotCardView
                    card={drawnCards[3]}
                    position={spread.positions[3]}
                    isFlipped={!!flippedMap[3]}
                    onFlip={(e) => onFlipCard(3, e)}
                    onClickDetail={() => onClickCardDetail(drawnCards[3])}
                  />
                </div>
              )}

              {/* Center Crossed (Card 1 Base + Card 2 Crossed) */}
              <div className="relative flex items-center justify-center w-36 md:w-44 h-64 md:h-80">
                {/* Base Card (Card 1) */}
                {drawnCards[0] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TarotCardView
                      card={drawnCards[0]}
                      position={spread.positions[0]}
                      isFlipped={!!flippedMap[0]}
                      onFlip={(e) => onFlipCard(0, e)}
                      onClickDetail={() => onClickCardDetail(drawnCards[0])}
                    />
                  </div>
                )}

                {/* Crossed Card (Card 2) */}
                {drawnCards[1] && (
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-auto">
                    <TarotCardView
                      card={drawnCards[1]}
                      position={spread.positions[1]}
                      isFlipped={!!flippedMap[1]}
                      onFlip={(e) => onFlipCard(1, e)}
                      onClickDetail={() => onClickCardDetail(drawnCards[1])}
                      isCrossed={true}
                    />
                  </div>
                )}
              </div>

              {/* Right (Card 6 - Yakın Gelecek) */}
              {drawnCards[5] && (
                <div>
                  <TarotCardView
                    card={drawnCards[5]}
                    position={spread.positions[5]}
                    isFlipped={!!flippedMap[5]}
                    onFlip={(e) => onFlipCard(5, e)}
                    onClickDetail={() => onClickCardDetail(drawnCards[5])}
                  />
                </div>
              )}
            </div>

            {/* Bottom (Card 3 - Kök Bilinçdışı) */}
            {drawnCards[2] && (
              <div className="mt-4">
                <TarotCardView
                  card={drawnCards[2]}
                  position={spread.positions[2]}
                  isFlipped={!!flippedMap[2]}
                  onFlip={(e) => onFlipCard(2, e)}
                  onClickDetail={() => onClickCardDetail(drawnCards[2])}
                />
              </div>
            )}
          </div>

          {/* RIGHT: THE STAFF / COLUMN (Cards 7, 8, 9, 10) */}
          <div className="flex flex-col-reverse md:flex-col lg:flex-col items-center gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
            {[9, 8, 7, 6].map((idx) => {
              const card = drawnCards[idx];
              const pos = spread.positions[idx];
              if (!card || !pos) return null;
              return (
                <div key={idx}>
                  <TarotCardView
                    card={card}
                    position={pos}
                    isFlipped={!!flippedMap[idx]}
                    onFlip={(e) => onFlipCard(idx, e)}
                    onClickDetail={() => onClickCardDetail(card)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // HORIZONTAL / GRID LAYOUT FOR 1, 3, 5 CARDS
        <div
          className={`grid gap-6 md:gap-8 justify-items-center w-full py-4 ${
            spread.cardCount === 1
              ? 'grid-cols-1'
              : spread.cardCount === 3
              ? 'grid-cols-1 md:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
          }`}
        >
          {drawnCards.map((card, idx) => {
            const pos = spread.positions[idx];
            if (!pos) return null;
            return (
              <TarotCardView
                key={idx}
                card={card}
                position={pos}
                isFlipped={!!flippedMap[idx]}
                onFlip={(e) => onFlipCard(idx, e)}
                onClickDetail={() => onClickCardDetail(card)}
              />
            );
          })}
        </div>
      )}

      {/* ANCESTRAL KARMA HEALING BUTTON */}
      <div className="mt-12 flex flex-col items-center text-center">
        {allFlipped ? (
          <button
            onClick={() => {
              soundEngine.playAncestralGong();
              onStartKarmaHealing();
            }}
            className="group relative inline-flex items-center gap-3 rounded-full border-2 border-amber-400/80 bg-gradient-to-r from-amber-600/40 via-purple-700/50 to-amber-600/40 px-10 py-4 text-sm md:text-base font-medium uppercase tracking-[0.25em] text-amber-200 shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:scale-105 hover:border-amber-300 transition-all cursor-pointer animate-pulse"
          >
            <Sparkles className="text-amber-300 animate-spin" size={18} />
            <span>✦ ATA KARMASINI ÇÖZÜMLE & ŞİFALANDIR ✦</span>
            <Sparkles className="text-amber-300 animate-spin" size={18} />
          </button>
        ) : (
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
            <Wand2 size={14} />
            Şifa ritüelini açmak için tüm kartları çevir ({flippedCount}/{spread.cardCount})
          </div>
        )}
      </div>
    </div>
  );
}
