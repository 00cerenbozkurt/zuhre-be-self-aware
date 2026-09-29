'use client';

import React from 'react';
import { Volume2, VolumeX, Sparkles, Smartphone, Globe } from 'lucide-react';
import { PlatformStyle } from '../lib/platformTheme';
import { Language, getTranslations } from '../lib/translations';

interface ThePatternHeaderProps {
  platform: PlatformStyle;
  onTogglePlatform: () => void;
  language?: Language;
  onToggleLanguage: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenSubscription: () => void;
  isSubscribed?: boolean;
  isDark?: boolean;
}

export default function ThePatternHeader({
  platform,
  onTogglePlatform,
  language = 'tr',
  onToggleLanguage,
  isMuted,
  onToggleSound,
  onOpenSubscription,
  isSubscribed = false,
  isDark = false,
}: ThePatternHeaderProps) {
  const t = getTranslations(language);

  // Dynamic styling based on light vs dark view (defaults to black on light/ivory background)
  const pillClass = isDark
    ? 'bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white'
    : 'bg-black/5 hover:bg-black/10 backdrop-blur-md border border-black/15 text-black font-semibold shadow-xs';

  const iconColor = isDark ? 'text-white' : 'text-black';

  const platformLabel =
    platform === 'ios-liquid-glass'
      ? (t?.iosPlatform ?? 'iOS Likit Cam')
      : (t?.androidPlatform ?? 'Android M3');

  return (
    <header className="fixed top-0 left-0 right-0 z-30 pt-safe px-4 py-2.5 transition-all">
      <div className="max-w-md mx-auto flex items-center justify-between text-xs">
        {/* Left: Platform Toggle Pill */}
        <button
          onClick={onTogglePlatform}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all active:scale-95 cursor-pointer ${pillClass}`}
          title="iOS ve Android arayüzleri arasında geçiş yap"
        >
          <Smartphone size={13} className={iconColor} />
          <span className={isDark ? 'text-white/90' : 'text-black font-semibold'}>
            {platformLabel}
          </span>
        </button>

        {/* Right Action Icons: Language + Sound + Subscription Status */}
        <div className="flex items-center gap-2">
          {/* Language Toggle (TR / EN) */}
          <button
            onClick={onToggleLanguage}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-bold transition-all active:scale-95 cursor-pointer ${pillClass}`}
            title="Dili değiştir / Switch language"
          >
            <Globe size={13} className={iconColor} />
            <span className={isDark ? 'text-white' : 'text-black'}>{language.toUpperCase()}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-full transition-all active:scale-95 cursor-pointer ${pillClass}`}
            aria-label="Sesi aç/kapat"
          >
            {isMuted ? (
              <VolumeX size={14} className={iconColor} />
            ) : (
              <Volume2 size={14} className={iconColor} />
            )}
          </button>

          {/* Subscription Upgrade Button */}
          <button
            onClick={onOpenSubscription}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer ${
              isSubscribed
                ? 'bg-black text-white shadow-md'
                : isDark
                ? 'bg-white/15 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md'
                : 'bg-black/5 hover:bg-black/10 text-black border border-black/20 backdrop-blur-md shadow-xs'
            }`}
          >
            <Sparkles
              size={12}
              className={isSubscribed ? 'text-white' : isDark ? 'text-white' : 'text-black'}
            />
            <span className={isSubscribed ? 'text-white' : isDark ? 'text-white' : 'text-black'}>
              {isSubscribed ? t.inDepthActive : t.upgrade}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
