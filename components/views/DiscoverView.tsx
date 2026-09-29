'use client';

import React from 'react';
import { Users, ChevronRight, Sparkles } from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import RippleButton from '../RippleButton';

import { Language, getTranslations } from '../../lib/translations';

interface DiscoverViewProps {
  platform: PlatformStyle;
  language: Language;
  onOpenConsultation: () => void;
  onOpenInDepth: () => void;
}

export default function DiscoverView({
  platform,
  language,
  onOpenConsultation,
  onOpenInDepth,
}: DiscoverViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);

  return (
    <div className="relative min-h-screen bg-[#0A0A0D] text-white flex flex-col justify-between px-6 pt-24 pb-32 overflow-hidden">
      {/* Dark Atmospheric Mist / Nebula Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-900/15 via-slate-700/20 to-amber-500/10 blur-[90px]" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-950/20 blur-[80px]" />
      </div>

      {/* Top Header: Audience Count */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex items-center justify-end">
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
          <Users size={15} />
          <span>10</span>
        </div>
      </div>

      {/* Main Discover Pattern Content */}
      <div className="relative z-10 w-full max-w-sm mx-auto my-auto space-y-6 text-left">
        <div className="text-center">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-400 uppercase">
            {t.aboutYouTag}
          </span>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            {t.discoverSubtitle}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.discoverHeadline}
          </h1>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-neutral-300 font-normal">
          {t.discoverBody}
        </p>

        {/* Action Button: "Go Deeper" Outline Pill Button with Ripple */}
        <div className="pt-4 flex flex-col items-center gap-3">
          <RippleButton
            platform={platform}
            onClick={onOpenConsultation}
            className="w-full max-w-xs py-3.5 px-6 rounded-full border border-white/60 hover:border-white bg-transparent hover:bg-white/10 text-white font-medium text-sm transition-all text-center active:scale-97 flex items-center justify-center gap-2"
          >
            <Sparkles size={15} className="text-amber-300" />
            <span>{t.goDeeperBtn}</span>
          </RippleButton>

          <button
            onClick={onOpenInDepth}
            className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer pt-1"
          >
            <span>{t.viewFullCycleInsight}</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
}
