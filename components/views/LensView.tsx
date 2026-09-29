'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';
import tarotDeck from '../../app/data/tarotDeck.json';
import { soundEngine } from '../../lib/soundEngine';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';

import RippleButton from '../RippleButton';

import { Language, TRANSLATIONS } from '../../lib/translations';

interface LensViewProps {
  platform: PlatformStyle;
  language: Language;
  onOpenConsultation: () => void;
  onOpenInDepth: () => void;
}

export default function LensView({
  platform,
  language,
  onOpenConsultation,
  onOpenInDepth,
}: LensViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = TRANSLATIONS[language];
  const [dailyCard, setDailyCard] = useState<typeof tarotDeck[0] | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rippleBurst, setRippleBurst] = useState(false);

  // Formatted date matching The Pattern in TR and EN
  const today = new Date();
  const monthNamesTr = ['OCA', 'ŞUB', 'MAR', 'NİS', 'MAY', 'HAZ', 'TEM', 'AĞU', 'EYL', 'EKİ', 'KAS', 'ARA'];
  const dayNamesTr = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const monthNamesEn = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dateStr = language === 'tr' 
    ? `${today.getDate()} ${monthNamesTr[today.getMonth()]}`
    : `${monthNamesEn[today.getMonth()]} ${today.getDate()}`;

  const dayStr = language === 'tr'
    ? dayNamesTr[today.getDay()]
    : dayNamesEn[today.getDay()];

  const handlePullDailyCard = () => {
    soundEngine.playCardFlip();
    setRippleBurst(true);
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    setDailyCard(card);
    setIsFlipped(true);
    setTimeout(() => {
      soundEngine.playCrystalChime(528);
    }, 150);
    setTimeout(() => {
      setRippleBurst(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#161519] flex flex-col items-center justify-between px-6 pt-24 pb-32 transition-colors relative overflow-hidden">
      <div className="w-full max-w-sm flex flex-col items-center text-center my-auto space-y-6 relative z-10">
        
        {/* Sunset Sky Vignette Circle with Concentric Celestial Ripple Rings */}
        <div className="flex flex-col items-center space-y-2 relative">
          <div className="relative flex items-center justify-center">
            {/* Concentric Ambient Ripples */}
            <div className="absolute w-14 h-14 rounded-full border border-amber-500/30 animate-celestial-ripple pointer-events-none" />
            <div className="absolute w-14 h-14 rounded-full border border-amber-600/20 animate-celestial-ripple-delayed-1 pointer-events-none" />
            <div className="absolute w-14 h-14 rounded-full border border-indigo-500/15 animate-celestial-ripple-delayed-2 pointer-events-none" />
            
            {/* Core Circle */}
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm border border-black/5 bg-gradient-to-b from-amber-400 via-orange-300 to-indigo-900 flex items-center justify-center relative z-10">
              <div className="w-full h-[1px] bg-white/40 mt-3" />
            </div>
          </div>

          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#161519]/70 uppercase">
            {t.dailyVibeTag}
          </span>
        </div>

        {/* Date & Main Headline */}
        <div className="space-y-1">
          <div className="text-xs font-semibold tracking-[0.2em] text-[#161519]/60 uppercase">
            {dateStr}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#141317]">
            {t.dailyVibeTitle}
            <br />
            {dayStr}
          </h1>
        </div>

        {/* The Pattern Signature Editorial Paragraph */}
        <p className="text-base md:text-lg leading-relaxed text-[#1F1E24]/90 font-normal px-2 max-w-xs">
          {t.dailyVibeDefaultBody}
        </p>

        {/* Interactive Tarot Integration with Touch Ripples */}
        <div className="w-full pt-4">
          {!dailyCard ? (
            <RippleButton
              platform={platform}
              onClick={handlePullDailyCard}
              className="w-full py-4 px-6 rounded-full bg-[#16151A] text-white hover:bg-black font-semibold text-sm shadow-md active:scale-97 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={16} className="text-amber-300" />
              <span>{t.revealTarotBtn}</span>
            </RippleButton>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-[#EBE7DD] border border-black/5 text-left shadow-sm space-y-2 relative"
            >
              {rippleBurst && (
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-400/60 animate-ping pointer-events-none" />
              )}
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#16151A]/60 font-bold">
                  {t.cardAlignmentTag}
                </span>
                <span className="text-xs font-bold text-[#16151A]">{dailyCard.name}</span>
              </div>
              <p className="text-xs leading-relaxed text-[#2C2A34] line-clamp-3">
                {dailyCard.meaning}
              </p>
              <div className="pt-2 flex gap-2">
                <RippleButton
                  platform={platform}
                  onClick={onOpenInDepth}
                  className="flex-1 py-2 px-3 rounded-full bg-[#16151A] text-white text-[11px] font-semibold hover:bg-black transition-all text-center"
                >
                  {t.listenFullInsight}
                </RippleButton>
                <RippleButton
                  platform={platform}
                  onClick={onOpenConsultation}
                  className="py-2 px-3 rounded-full border border-black/15 text-[11px] font-semibold text-[#16151A] hover:bg-black/5 transition-all flex items-center gap-1"
                >
                  <Eye size={12} />
                  <span>{t.askAi}</span>
                </RippleButton>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
