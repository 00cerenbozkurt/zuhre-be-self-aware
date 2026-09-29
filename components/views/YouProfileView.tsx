'use client';

import React, { useState } from 'react';
import {
  Bell,
  MoreHorizontal,
  ChevronUp,
  ChevronDown,
  X,
  Play,
  Square,
  ChevronRight,
  Disc,
  Sparkles,
  Check,
  Volume2,
  VolumeX
} from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { getTranslations, Language } from '../../lib/translations';
import { soundEngine } from '../../lib/soundEngine';
import {
  ZODIAC_SIGNS,
  getZodiacSign,
  synthesizeDailyTarot,
  getDynamicTarotTransits,
} from '../../lib/tarotZodiacSynthesis';
import tarotDeck from '../../app/data/tarotDeck.json';
import RippleButton from '../RippleButton';

interface YouProfileViewProps {
  platform: PlatformStyle;
  language?: Language;
  dominantSign?: string;
  onSelectDominantSign?: (signId: string) => void;
  dailyCard?: typeof tarotDeck[0] | null;
  onOpenInDepth: () => void;
  onOpenConsultation: () => void;
  onOpenBonds: () => void;
  onOpenMeditation?: () => void;
}

export default function YouProfileView({
  platform,
  language = 'tr',
  dominantSign = 'libra',
  onSelectDominantSign,
  dailyCard = null,
  onOpenInDepth,
  onOpenConsultation,
  onOpenBonds,
  onOpenMeditation,
}: YouProfileViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);
  const [isCardExpanded, setIsCardExpanded] = useState(true);
  const [isCardDismissed, setIsCardDismissed] = useState(false);
  const [isSignPickerOpen, setIsSignPickerOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeSign = getZodiacSign(dominantSign);
  const activeCard = dailyCard || tarotDeck[1]; // Default The Magician

  const synthesis = synthesizeDailyTarot(dominantSign, activeCard, language);
  const dynamicTransits = getDynamicTarotTransits(dominantSign, activeCard, language);

  const handleTogglePlayVoice = () => {
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

  const handleSelectSign = (signId: string) => {
    soundEngine.playCardFlip();
    if (onSelectDominantSign) {
      onSelectDominantSign(signId);
    }
    setIsSignPickerOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 pt-18 pb-36 transition-colors">
      <div className="max-w-sm mx-auto space-y-5">
        {/* Top Profile Header with Ambient Avatar Ripple */}
        <div className="flex items-center justify-between pt-2">
          {/* Avatar & Handle with Dominant Sign */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 rounded-full border border-amber-500/25 animate-celestial-ripple pointer-events-none" />
              <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 shadow-sm bg-gradient-to-b from-amber-400 via-orange-300 to-indigo-900 flex items-center justify-center relative z-10">
                <div className="w-full h-[1px] bg-white/40 mt-2" />
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-neutral-900 block leading-tight">
                @sornkaze
              </span>
              <button
                onClick={() => setIsSignPickerOpen(!isSignPickerOpen)}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
              >
                <span>{activeSign.symbol} {language === 'tr' ? `${activeSign.nameTr} (Baskın)` : `${activeSign.nameEn}`}</span>
                <ChevronDown size={11} />
              </button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 text-neutral-800">
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer">
              <Disc size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Dropdown for Changing Dominant Zodiac Sign */}
        {isSignPickerOpen && (
          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-md space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-1 pb-1 border-b border-neutral-200">
              {language === 'tr' ? 'Baskın Burcunu Değiştir' : 'Change Dominant Sign'}
            </div>
            <div className="grid grid-cols-2 gap-1 pt-1 max-h-48 overflow-y-auto no-scrollbar">
              {ZODIAC_SIGNS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectSign(s.id)}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium cursor-pointer ${
                    s.id === dominantSign
                      ? 'bg-black text-white font-bold'
                      : 'hover:bg-neutral-200 text-neutral-800'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <span>{s.symbol}</span>
                    <span>{language === 'tr' ? s.nameTr : s.nameEn}</span>
                  </span>
                  {s.id === dominantSign && <Check size={12} className="text-amber-300" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Catchphrase */}
        <p className="text-base font-medium text-neutral-900 leading-snug">
          {t.profileLibraryQuote}
        </p>

        {/* Profile Pill Buttons Row with Touch Ripples */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {onOpenMeditation && (
            <RippleButton
              platform={platform}
              onClick={onOpenMeditation}
              className="py-2.5 px-4 rounded-full bg-neutral-900 text-white text-xs font-semibold whitespace-nowrap hover:bg-black active:scale-95 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Sparkles size={12} className="text-amber-400" />
              <span>{language === 'tr' ? 'Ata Karması Meditasyonu' : 'Ancestral Meditation'}</span>
            </RippleButton>
          )}
          <RippleButton
            platform={platform}
            onClick={onOpenBonds}
            className="py-2.5 px-4 rounded-full bg-black text-white text-xs font-semibold whitespace-nowrap hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
          >
            {t.viewFriends}
          </RippleButton>
          <RippleButton
            platform={platform}
            onClick={onOpenBonds}
            className="py-2.5 px-4 rounded-full bg-black text-white text-xs font-semibold whitespace-nowrap hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
          >
            {t.runBond}
          </RippleButton>
          <RippleButton
            platform={platform}
            onClick={onOpenConsultation}
            className="py-2.5 px-4 rounded-full bg-black text-white text-xs font-semibold whitespace-nowrap hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
          >
            {t.addCustomFriend}
          </RippleButton>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-neutral-200" />

        {/* Featured Collapsible Card (Exact Match to User's Uploaded Screenshot) */}
        {!isCardDismissed && (
          <div className="p-5 rounded-3xl bg-[#ECE7DC] border border-black/5 shadow-sm space-y-3 transition-all text-left">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#1A73E8] text-white text-[11px] font-bold tracking-wide">
                {t.newBadge}
              </span>
              <div className="flex items-center gap-1 text-neutral-700">
                <button
                  onClick={() => setIsCardExpanded(!isCardExpanded)}
                  className="p-1 hover:text-black transition-colors cursor-pointer"
                >
                  {isCardExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <button
                  onClick={() => setIsCardDismissed(true)}
                  className="p-1 hover:text-black transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                {activeSign.nameTr.toUpperCase()} • {activeCard.name.toUpperCase()}
              </span>
              <h3 className="text-xl font-extrabold text-[#1B56D2] leading-tight">
                {language === 'tr'
                  ? `Sen ve İlişkilerin: ${activeSign.nameTr} & ${activeCard.name} Niteliklerin`
                  : `You & Your Relationships: ${activeSign.nameEn} & ${activeCard.name}`}
              </h3>
            </div>

            {isCardExpanded && (
              <div className="space-y-3 pt-1">
                <p className="text-xs text-neutral-800 leading-relaxed line-clamp-3">
                  {synthesis.editorialBody}
                </p>
                <div className="flex gap-2">
                  <RippleButton
                    platform={platform}
                    onClick={handleTogglePlayVoice}
                    className="py-2.5 px-5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Square size={10} className="fill-white" />
                        <span>{language === 'tr' ? 'Duraklat' : 'Pause'}</span>
                      </>
                    ) : (
                      <>
                        <Play size={12} className="fill-white" />
                        <span>{t.listenNow}</span>
                      </>
                    )}
                  </RippleButton>
                  <RippleButton
                    platform={platform}
                    onClick={onOpenInDepth}
                    className="py-2.5 px-4 rounded-full border border-black/20 text-black text-xs font-semibold hover:bg-black/5 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>{language === 'tr' ? 'Derin Bakış' : 'In-Depth'}</span>
                    <ChevronRight size={13} />
                  </RippleButton>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section Heading: "Your Transits >" (Matches User's Screenshot) */}
        <div className="pt-2 space-y-1 text-left">
          <div
            onClick={onOpenConsultation}
            className="flex items-center gap-1 cursor-pointer group"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950 group-hover:text-amber-700 transition-colors">
              {t.yourTransitsTitle}
            </h2>
            <ChevronRight size={20} className="text-neutral-900 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-neutral-600 font-medium">
            {t.transitsSubtitle}
          </p>
        </div>

        {/* Dynamic Horizontal Carousel of Transit Cards (Driven by Drawn Tarot Card + Sign) */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none no-scrollbar">
          {dynamicTransits.map((transit, idx) => (
            <div
              key={transit.id}
              className="min-w-[270px] max-w-[280px] p-4 rounded-3xl bg-[#ECE7DC] border border-black/5 flex flex-col justify-between space-y-4 shadow-sm snap-start text-left"
            >
              <div className="flex items-start justify-between">
                {/* Circular Meter */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-neutral-400" />
                  <div
                    className="absolute inset-0 rounded-full border-2 border-t-teal-700 border-r-teal-700 border-transparent"
                    style={{ borderColor: idx === 0 ? '#00897B' : '#3949AB' }}
                  />
                  <div className="text-center">
                    <span className="text-sm font-bold text-neutral-900 block leading-none">
                      {transit.durationMonths}
                    </span>
                    <span className="text-[8px] text-neutral-600 uppercase font-semibold">
                      {idx === 0 ? t.monthsLeft : t.inMonths}
                    </span>
                  </div>
                </div>

                {/* Tarot & Astrological Glyphs Pill */}
                <div
                  className="px-2.5 py-1 rounded-lg text-white text-xs font-bold tracking-widest flex items-center gap-1"
                  style={{ backgroundColor: transit.themeColor }}
                >
                  {transit.glyphs.map((g, i) => (
                    <span key={i}>{g}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4
                  className="text-lg font-bold leading-snug"
                  style={{ color: transit.themeColor }}
                >
                  {transit.title}
                </h4>
                <p className="text-[11px] font-semibold text-neutral-600 mt-0.5">
                  {transit.dateRange}
                </p>
                <p className="text-xs font-bold text-neutral-900 mt-1">
                  {transit.peakLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
