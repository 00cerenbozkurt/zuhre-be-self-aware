'use client';

import React, { useState } from 'react';
import { ArrowLeft, Play, Square, Bookmark, BookmarkCheck, Sparkles } from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import RippleButton from '../RippleButton';

import { Language, TRANSLATIONS } from '../../lib/translations';

interface InDepthViewProps {
  platform: PlatformStyle;
  language: Language;
  onBack: () => void;
  onOpenConsultation: () => void;
}

export default function InDepthView({
  platform,
  language = 'tr',
  onBack,
  onOpenConsultation,
}: InDepthViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = TRANSLATIONS[language] || TRANSLATIONS.tr;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const insightScript = language === 'tr'
    ? `${t.inDepthSummary1} ${t.inDepthSummary2}`
    : `This audio dives deeply into a part of your personality that is Libra. Libra is considerate, thoughtful, and collaborative. You're learning about finding fulfilling relationships and balancing your concern for others with being your own best partner. The intention is to prioritize your relationship with yourself and to find friends and partners who truly see and understand you.`;

  const handleTogglePlay = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(insightScript);
        utterance.lang = language === 'tr' ? 'tr-TR' : 'en-US';
        utterance.rate = 0.88;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between pt-16 pb-28 transition-colors">
      {/* Upper White Header Section */}
      <div className="px-6 pt-4 pb-8 max-w-sm mx-auto w-full space-y-5">
        {/* Back Button */}
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Subtitle with Astrological Glyphs */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-800 uppercase">
            {t.inDepthSubtitle}
          </span>
          <span className="text-sm font-semibold text-neutral-700 tracking-wider">
            ♂ ♎
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight">
          {t.inDepthHeadline}
        </h1>

        {/* Listen to Insight Pill Button with Acoustic Ripples */}
        <div className="relative">
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full border border-black/30 animate-celestial-ripple pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-black/20 animate-celestial-ripple-delayed-1 pointer-events-none" />
            </>
          )}
          <RippleButton
            platform={platform}
            onClick={handleTogglePlay}
            className="w-full py-3.5 px-6 rounded-full border border-black/80 hover:bg-black/5 active:scale-98 transition-all flex items-center justify-center gap-3 relative z-10"
          >
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              {isPlaying ? (
                <Square size={10} className="fill-white" />
              ) : (
                <Play size={11} className="fill-white translate-x-[1px]" />
              )}
            </div>
            <span className="text-sm font-semibold text-neutral-900 tracking-tight">
              {isPlaying ? t.pauseInsightBtn : t.listenToInsightBtn}
            </span>
          </RippleButton>
        </div>
      </div>

      {/* Lower Warm Beige Container with Summary */}
      <div className="flex-1 bg-[#F5F2EB] px-6 py-8 border-t border-black/5">
        <div className="max-w-sm mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-[0.25em] text-neutral-600 uppercase">
              {t.summaryTag}
            </span>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="text-neutral-500 hover:text-black transition-colors"
            >
              {isBookmarked ? <BookmarkCheck size={18} className="text-black" /> : <Bookmark size={18} />}
            </button>
          </div>

          <p className="text-base leading-relaxed text-neutral-800 font-normal">
            {t.inDepthSummary1}
          </p>

          <p className="text-base leading-relaxed text-neutral-800/80 font-normal">
            {t.inDepthSummary2}
          </p>

          {/* Ask AI Consultation Trigger */}
          <div className="pt-6">
            <RippleButton
              platform={platform}
              onClick={onOpenConsultation}
              className="w-full py-3.5 px-5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles size={14} className="text-amber-300" />
              <span>{t.askAiAboutPlacement}</span>
            </RippleButton>
          </div>
        </div>
      </div>
    </div>
  );
}
