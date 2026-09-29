'use client';

import React from 'react';
import { PlatformStyle } from '../lib/platformTheme';
import { Language, getTranslations } from '../lib/translations';

export type TabType = 'lens' | 'discover' | 'indepth' | 'bonds' | 'meditation' | 'you';

interface ThePatternNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  platform: PlatformStyle;
  language: Language;
}

export default function ThePatternNav({
  activeTab,
  onSelectTab,
  platform,
  language,
}: ThePatternNavProps) {
  const t = getTranslations(language);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'lens', label: t.navLens },
    { id: 'discover', label: t.navDiscover },
    { id: 'indepth', label: t.navInDepth },
    { id: 'bonds', label: t.navBonds },
    { id: 'meditation', label: t.navMeditation },
    { id: 'you', label: t.navYou },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all ${
        platform === 'ios-liquid-glass'
          ? 'bg-black/90 backdrop-blur-2xl border-t border-white/10'
          : 'bg-[#121016] border-t border-white/5'
      }`}
    >
      <div className="max-w-md mx-auto flex items-center justify-around px-2 pt-3 pb-7 md:pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={(e) => {
                onSelectTab(tab.id);
              }}
              className="relative overflow-hidden rounded-xl flex flex-col items-center justify-center py-1 px-1.5 sm:px-2.5 transition-all cursor-pointer focus:outline-none active:scale-95 group"
            >
              {/* Subtle hover/active radial glow */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
                  isActive ? 'bg-white/[0.08] opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}
              />

              <span
                className={`relative z-10 transition-colors text-[11px] sm:text-xs md:text-[13px] font-medium tracking-tight whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-500 group-hover:text-neutral-300'
                }`}
              >
                {tab.label}
              </span>

              {/* Minimalist White Underline matching The Pattern */}
              <div className="relative z-10 h-[3px] mt-1.5 w-full flex items-center justify-center">
                {isActive ? (
                  platform === 'ios-liquid-glass' ? (
                    <div className="w-8 h-[2px] bg-white rounded-full transition-all shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  ) : (
                    <div className="w-6 h-[3px] bg-[#D0BCFF] rounded-full transition-all shadow-[0_0_8px_rgba(208,188,255,0.7)]" />
                  )
                ) : (
                  <div className="w-8 h-[2px] bg-transparent" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
