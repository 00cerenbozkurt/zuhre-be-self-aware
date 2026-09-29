'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, ChevronRight, ChevronDown, Check, Volume2, VolumeX } from 'lucide-react';
import tarotDeck from '../../app/data/tarotDeck.json';
import { soundEngine } from '../../lib/soundEngine';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { Language, getTranslations } from '../../lib/translations';
import {
  ZODIAC_SIGNS,
  getZodiacSign,
  synthesizeDailyTarot,
  getDynamicTarotTransits,
} from '../../lib/tarotZodiacSynthesis';
import RippleButton from '../RippleButton';

interface LensViewProps {
  platform: PlatformStyle;
  language: Language;
  dominantSign?: string;
  onSelectDominantSign?: (signId: string) => void;
  dailyCard?: typeof tarotDeck[0] | null;
  onSetDailyCard?: (card: typeof tarotDeck[0]) => void;
  onOpenConsultation: () => void;
  onOpenInDepth: () => void;
}

export default function LensView({
  platform,
  language,
  dominantSign = 'libra',
  onSelectDominantSign,
  dailyCard = null,
  onSetDailyCard,
  onOpenConsultation,
  onOpenInDepth,
}: LensViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);

  const [isSignPickerOpen, setIsSignPickerOpen] = useState(false);
  const [rippleBurst, setRippleBurst] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

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

  const activeSign = getZodiacSign(dominantSign);
  const activeCard = dailyCard || null;

  // Synthesize daily guidance based on dominant sign + daily tarot card
  const synthesis = activeCard
    ? synthesizeDailyTarot(dominantSign, activeCard, language)
    : null;

  // Dynamic transits linked to drawn card
  const dynamicTransits = activeCard
    ? getDynamicTarotTransits(dominantSign, activeCard, language)
    : [];

  const handlePullDailyCard = () => {
    soundEngine.playCardFlip();
    setRippleBurst(true);
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    if (onSetDailyCard) {
      onSetDailyCard(card);
    }
    setTimeout(() => {
      soundEngine.playCrystalChime(528);
    }, 150);
    setTimeout(() => {
      setRippleBurst(false);
    }, 1000);
  };

  const handleSelectSign = (signId: string) => {
    soundEngine.playCardFlip();
    if (onSelectDominantSign) {
      onSelectDominantSign(signId);
    }
    setIsSignPickerOpen(false);
  };

  const handlePlayDailyVoice = () => {
    if (!synthesis) return;
    if (isPlayingAudio) {
      soundEngine.stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      soundEngine.speakSoothing(
        synthesis.audioScript,
        language,
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(true)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#161519] flex flex-col items-center justify-between px-4 sm:px-6 pt-20 pb-36 transition-colors relative overflow-hidden">
      <div className="w-full max-w-sm flex flex-col items-center text-center my-auto space-y-6 relative z-10">
        
        {/* Dominant Zodiac Sign Picker Pill */}
        <div className="relative">
          <button
            onClick={() => setIsSignPickerOpen(!isSignPickerOpen)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-black/10 shadow-xs hover:bg-white text-xs font-semibold text-neutral-800 transition-all cursor-pointer active:scale-95"
          >
            <span>{activeSign.symbol}</span>
            <span>{language === 'tr' ? `${activeSign.nameTr} (Baskın Burcun)` : `${activeSign.nameEn} (Dominant)`}</span>
            <ChevronDown size={14} className="text-neutral-500" />
          </button>

          {/* Dropdown Modal for Selecting Dominant Sign */}
          <AnimatePresence>
            {isSignPickerOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-64 p-3 rounded-3xl bg-white border border-black/15 shadow-2xl z-40 space-y-1 text-left"
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-100 pb-1.5 mb-1">
                  {language === 'tr' ? 'Baskın Burcunu Seç' : 'Select Dominant Sign'}
                </div>
                <div className="grid grid-cols-2 gap-1 max-h-56 overflow-y-auto no-scrollbar">
                  {ZODIAC_SIGNS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleSelectSign(s.id)}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                        s.id === dominantSign
                          ? 'bg-black text-white font-bold'
                          : 'hover:bg-neutral-100 text-neutral-800'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span>{s.symbol}</span>
                        <span>{language === 'tr' ? s.nameTr : s.nameEn}</span>
                      </span>
                      {s.id === dominantSign && <Check size={12} className="text-amber-300" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
            {synthesis ? synthesis.badge : t.dailyVibeTag}
          </span>
        </div>

        {/* Date & Main Headline */}
        <div className="space-y-1">
          <div className="text-xs font-semibold tracking-[0.2em] text-[#161519]/60 uppercase">
            {dateStr}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#141317]">
            {synthesis ? synthesis.headline : t.dailyVibeTitle}
            <br />
            {dayStr}
          </h1>
        </div>

        {/* The Pattern Signature Editorial Paragraph */}
        <p className="text-base md:text-lg leading-relaxed text-[#1F1E24]/90 font-normal px-2 max-w-xs">
          {synthesis ? synthesis.editorialBody : t.dailyVibeDefaultBody}
        </p>

        {/* Interactive Tarot Card Reveal / Status */}
        <div className="w-full pt-2">
          {!activeCard ? (
            <RippleButton
              platform={platform}
              onClick={handlePullDailyCard}
              className="w-full py-4 px-6 rounded-full bg-[#16151A] text-white hover:bg-black font-semibold text-sm shadow-md active:scale-97 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles size={16} className="text-amber-300" />
              <span>{language === 'tr' ? 'Günün Tarot Kartını Çek' : 'Draw Your Daily Card'}</span>
            </RippleButton>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-3xl bg-[#EBE7DD] border border-black/5 text-left shadow-sm space-y-3 relative"
            >
              {rippleBurst && (
                <div className="absolute inset-0 rounded-3xl border-2 border-amber-400/60 animate-ping pointer-events-none" />
              )}
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#16151A]/60 font-bold">
                  {t.cardAlignmentTag}
                </span>
                <span className="text-xs font-bold text-[#16151A]">{activeCard.name}</span>
              </div>
              <p className="text-xs leading-relaxed text-[#2C2A34] line-clamp-3">
                {activeCard.meaning}
              </p>

              {/* Action Buttons: Listen Soothing Voice / In-Depth Guidance */}
              <div className="pt-1 flex gap-2">
                <RippleButton
                  platform={platform}
                  onClick={handlePlayDailyVoice}
                  className="flex-1 py-2.5 px-3 rounded-full bg-[#16151A] text-white text-[11px] font-semibold hover:bg-black transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX size={12} className="text-amber-300" />
                      <span>{language === 'tr' ? 'Duraklat' : 'Pause'}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 size={12} className="text-amber-300" />
                      <span>{language === 'tr' ? 'Sakin Sesle Dinle' : 'Listen with Voice'}</span>
                    </>
                  )}
                </RippleButton>

                <RippleButton
                  platform={platform}
                  onClick={onOpenInDepth}
                  className="py-2.5 px-3.5 rounded-full border border-black/15 text-[11px] font-semibold text-[#16151A] hover:bg-black/5 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>{language === 'tr' ? 'Derin Bakış' : 'In-Depth'}</span>
                  <ChevronRight size={13} />
                </RippleButton>
              </div>

              {/* Pull Another Card button */}
              <button
                onClick={handlePullDailyCard}
                className="w-full text-center text-[10px] text-neutral-500 hover:text-black transition-colors pt-1 cursor-pointer"
              >
                {language === 'tr' ? '✦ Akıştan Başka Bir Kart Çek' : '✦ Draw Another Card'}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
