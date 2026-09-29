'use client';

import React, { useState } from 'react';
import { ArrowLeft, Play, Square, Bookmark, BookmarkCheck, Sparkles, Volume2, VolumeX, ShieldAlert, Sun, HelpCircle, Compass } from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { getTranslations, Language } from '../../lib/translations';
import { soundEngine } from '../../lib/soundEngine';
import { synthesizeDailyTarot, getZodiacSign } from '../../lib/tarotZodiacSynthesis';
import RippleButton from '../RippleButton';
import tarotDeck from '../../app/data/tarotDeck.json';

interface InDepthViewProps {
  platform: PlatformStyle;
  language?: Language;
  dominantSign?: string;
  dailyCard?: typeof tarotDeck[0] | null;
  onBack: () => void;
  onOpenConsultation: () => void;
}

export default function InDepthView({
  platform,
  language = 'tr',
  dominantSign = 'libra',
  dailyCard = null,
  onBack,
  onOpenConsultation,
}: InDepthViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Active Card fallback
  const activeCard = dailyCard || tarotDeck[1]; // Default The Magician
  const synthesis = synthesizeDailyTarot(dominantSign, activeCard, language);
  const signInfo = getZodiacSign(dominantSign);

  const handleTogglePlay = () => {
    if (isPlaying) {
      soundEngine.stopSpeaking();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      soundEngine.speakSoothing(
        synthesis.audioScript,
        language,
        () => setIsPlaying(false),
        () => setIsPlaying(true)
      );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between pt-20 pb-32 transition-colors">
      {/* Upper White Header Section */}
      <div className="px-6 pt-3 pb-6 max-w-sm mx-auto w-full space-y-4">
        {/* Top Bar: Back Button & Dominant Sign Pill */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              soundEngine.stopSpeaking();
              onBack();
            }}
            aria-label="Back"
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-black/10 text-xs font-semibold text-neutral-800">
            <span>{signInfo.symbol}</span>
            <span>{language === 'tr' ? signInfo.nameTr : signInfo.nameEn}</span>
            <span className="text-[10px] text-neutral-500">• {language === 'tr' ? 'Baskın Burç' : 'Dominant'}</span>
          </div>
        </div>

        {/* Subtitle with Card Arcana */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-bold tracking-[0.2em] text-neutral-700 uppercase">
            {language === 'tr' ? 'TAROT REHBERLİĞİ & ÖZ FARKINDALIK' : 'TAROT GUIDANCE & SELF-AWARENESS'}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
            {activeCard.name}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight">
          {synthesis.subheadline}
        </h1>

        {/* Listen to Insight Pill Button with Calming Voice */}
        <div className="relative pt-1">
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full border border-black/20 animate-celestial-ripple pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-black/15 animate-celestial-ripple-delayed-1 pointer-events-none" />
            </>
          )}
          <RippleButton
            platform={platform}
            onClick={handleTogglePlay}
            className="w-full py-3.5 px-6 rounded-full border border-black/80 hover:bg-black/5 active:scale-98 transition-all flex items-center justify-center gap-3 relative z-10 cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              {isPlaying ? (
                <Square size={10} className="fill-white" />
              ) : (
                <Play size={11} className="fill-white translate-x-[1px]" />
              )}
            </div>
            <span className="text-sm font-semibold text-neutral-900 tracking-tight">
              {isPlaying
                ? (language === 'tr' ? 'Rehberliği Duraklat' : 'Pause Guidance')
                : (language === 'tr' ? 'Sakin Sesle Dinle (Sesli Rehber)' : 'Listen with Soothing Voice')}
            </span>
          </RippleButton>
        </div>
      </div>

      {/* Lower Warm Beige Container with Deep Self-Awareness Content */}
      <div className="flex-1 bg-[#F5F2EB] px-6 py-8 border-t border-black/5">
        <div className="max-w-sm mx-auto space-y-5">
          {/* Card Summary & Bookmark */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-[0.25em] text-neutral-600 uppercase">
              {language === 'tr' ? 'İÇSEL DÖNÜŞÜM ANALİZİ' : 'INNER TRANSFORMATION ANALYSIS'}
            </span>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="text-neutral-500 hover:text-black transition-colors cursor-pointer"
              title="Kaydet"
            >
              {isBookmarked ? <BookmarkCheck size={18} className="text-black" /> : <Bookmark size={18} />}
            </button>
          </div>

          {/* Core Archetype Narrative */}
          <p className="text-base leading-relaxed text-neutral-800 font-normal">
            {activeCard.meaning}
          </p>

          {/* Three Psychological Awareness Pillars */}
          <div className="space-y-3 pt-2">
            {/* 1. Shadow Warning */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-600/20 text-left">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <ShieldAlert size={14} className="text-amber-700" />
                <span>{language === 'tr' ? 'Gölge Yan & Bilinçdışı Tuzak' : 'Shadow Aspect & Trap'}</span>
              </div>
              <p className="text-xs text-neutral-800 leading-relaxed mt-1.5 font-medium">
                {synthesis.shadowWarning}
              </p>
            </div>

            {/* 2. Light Action Step */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-600/20 text-left">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs uppercase tracking-wider">
                <Sun size={14} className="text-emerald-700" />
                <span>{language === 'tr' ? 'Bilinçli Eylem Adımı' : 'Conscious Action Step'}</span>
              </div>
              <p className="text-xs text-neutral-800 leading-relaxed mt-1.5 font-medium">
                {synthesis.actionAdvice}
              </p>
            </div>

            {/* 3. Deep Self-Inquiry Prompt */}
            <div className="p-4 rounded-2xl bg-white/80 border border-black/10 text-left shadow-xs">
              <div className="flex items-center gap-2 text-neutral-900 font-bold text-xs uppercase tracking-wider">
                <HelpCircle size={14} className="text-indigo-600" />
                <span>{language === 'tr' ? 'Günün Günlük Sorusu' : 'Daily Journal Prompt'}</span>
              </div>
              <p className="text-xs italic text-neutral-700 leading-relaxed mt-1.5">
                {language === 'tr'
                  ? `"${signInfo.nameTr} enerjinle ${activeCard.name} arketipinin sunduğu bu derste: Gerçekten neyi kontrol etmeye çalışıyorsun ve neyi serbest bırakırsan hafiflersin?"`
                  : `"Where are you exerting excessive control, and what boundary needs loving acceptance today?"`}
              </p>
            </div>
          </div>

          {/* Ask AI Consultation Trigger */}
          <div className="pt-4">
            <RippleButton
              platform={platform}
              onClick={onOpenConsultation}
              className="w-full py-3.5 px-5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Sparkles size={14} className="text-amber-300" />
              <span>
                {language === 'tr'
                  ? `Gemini ile ${activeCard.name} Arketipini Derinleştir`
                  : `Explore ${activeCard.name} with Gemini AI`}
              </span>
            </RippleButton>
          </div>
        </div>
      </div>
    </div>
  );
}
