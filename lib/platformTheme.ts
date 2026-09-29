'use client';

export type PlatformStyle = 'ios-liquid-glass' | 'android-m3-expressive';

export const getSystemPlatform = (): PlatformStyle => {
  if (typeof window === 'undefined') return 'ios-liquid-glass';
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) {
    return 'android-m3-expressive';
  }
  return 'ios-liquid-glass';
};

export const getAdaptiveClasses = (platform: PlatformStyle) => {
  if (platform === 'android-m3-expressive') {
    return {
      card: 'm3-surface-container transition-all duration-300',
      cardHigh: 'm3-surface-container-high transition-all duration-300',
      pill: 'rounded-full bg-[#2A2834] text-[#E2DFEC] border border-white/5 active:scale-95 transition-all',
      pillActive: 'rounded-full bg-[#D0BCFF] text-[#381E72] font-semibold shadow-md active:scale-95 transition-all',
      actionBtn: 'rounded-full bg-[#D0BCFF] text-[#381E72] font-semibold py-3.5 px-6 shadow-lg active:scale-95 transition-all',
      secondaryBtn: 'rounded-full border border-white/20 text-neutral-200 py-3.5 px-6 hover:bg-white/5 active:scale-95 transition-all',
      bottomNav: 'bg-[#141218]/95 backdrop-blur-md border-t border-white/5',
      navIndicator: 'h-1 w-8 rounded-full bg-[#D0BCFF] mx-auto',
      fab: 'w-12 h-12 rounded-[18px] bg-[#2B2930] border border-white/10 text-neutral-200 shadow-xl flex items-center justify-center active:scale-90 transition-all'
    };
  }

  // iOS Liquid Glass (Default)
  return {
    card: 'ios-glass-card transition-all duration-300',
    cardHigh: 'ios-glass-card bg-white/[0.12] transition-all duration-300',
    pill: 'ios-glass-pill text-neutral-200 active:scale-95 transition-all',
    pillActive: 'rounded-full bg-white text-black font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.3)] active:scale-95 transition-all',
    actionBtn: 'rounded-full bg-white text-black font-semibold py-3.5 px-6 shadow-[0_4px_24px_rgba(255,255,255,0.25)] active:scale-95 transition-all',
    secondaryBtn: 'rounded-full border border-white/30 text-white py-3.5 px-6 hover:bg-white/10 active:scale-95 transition-all backdrop-blur-md',
    bottomNav: 'ios-glass-nav',
    navIndicator: 'h-[2px] w-6 rounded-full bg-white mx-auto',
    fab: 'w-11 h-11 rounded-full bg-black/70 backdrop-blur-xl border border-white/20 text-white shadow-2xl flex items-center justify-center active:scale-90 transition-all'
  };
};
