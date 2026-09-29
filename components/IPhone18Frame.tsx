'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Maximize2, Wifi, Sparkles } from 'lucide-react';
import { PlatformStyle } from '../lib/platformTheme';
import { soundEngine } from '../lib/soundEngine';

interface IPhone18FrameProps {
  children: React.ReactNode;
  platform: PlatformStyle;
  isMuted?: boolean;
}

export default function IPhone18Frame({
  children,
  platform,
  isMuted = false,
}: IPhone18FrameProps) {
  // Desktop frame active by default; user can toggle to full-width anytime
  const [isFrameActive, setIsFrameActive] = useState(true);
  const [titaniumColor, setTitaniumColor] = useState<'black' | 'natural' | 'gold'>('black');
  const [currentTime, setCurrentTime] = useState('9:41');

  // Dynamic real-time iOS clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const colorStyles = {
    black: {
      chassis: 'from-[#2F2D38] via-[#1A1820] to-[#100F15]',
      border: 'border-[#3D3A49]',
      accent: 'border-white/10',
      label: 'Obsidyen Titanyum',
    },
    natural: {
      chassis: 'from-[#585560] via-[#393740] to-[#201F25]',
      border: 'border-[#6A6674]',
      accent: 'border-white/15',
      label: 'Doğal Titanyum',
    },
    gold: {
      chassis: 'from-[#655437] via-[#3E3320] to-[#201B12]',
      border: 'border-[#826C47]',
      accent: 'border-amber-300/20',
      label: 'Çöl / Kozmik Altın',
    },
  };

  const currentTheme = colorStyles[titaniumColor];

  // If user disabled frame on desktop, render normal full screen
  if (!isFrameActive) {
    return (
      <div className="relative w-full min-h-screen">
        {/* Floating Toggle Button to re-enable iPhone 18 Frame */}
        <div className="fixed top-3 right-3 z-50">
          <button
            onClick={() => {
              soundEngine.playCardFlip();
              setIsFrameActive(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md shadow-xl border border-white/20 transition-all cursor-pointer active:scale-95"
            title="iPhone 18 Kadrajını Aç"
          >
            <Smartphone size={13} className="text-amber-300" />
            <span>iPhone 18 Kadrajı</span>
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060509] text-neutral-100 flex flex-col items-center justify-center p-0 md:p-6 lg:p-8 relative overflow-x-hidden selection:bg-amber-400 selection:text-black">
      
      {/* Background Cosmic Starfield Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-radial from-indigo-900/20 via-purple-950/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Top Desktop Showcase Bar */}
      <header className="hidden md:flex items-center justify-between w-full max-w-[440px] mb-3 px-3 py-1.5 z-20 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold tracking-wider text-neutral-300 text-[11px] uppercase">
            iPhone 18 Pro Max
          </span>
          <span className="text-[10px] text-neutral-500 font-medium">✦ Zühre OS</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Titanium Color Switchers */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            {(['black', 'natural', 'gold'] as const).map((c) => (
              <button
                key={c}
                onClick={() => {
                  soundEngine.playCardFlip();
                  setTitaniumColor(c);
                }}
                className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer ${
                  c === 'black'
                    ? 'bg-[#1C1A22]'
                    : c === 'natural'
                    ? 'bg-[#605D68]'
                    : 'bg-[#B5945B]'
                } ${titaniumColor === c ? 'scale-125 ring-1 ring-white shadow-sm' : 'opacity-60 hover:opacity-100'}`}
                title={colorStyles[c].label}
              />
            ))}
          </div>

          {/* Minimize / Full Screen Toggle */}
          <button
            onClick={() => {
              soundEngine.playCardFlip();
              setIsFrameActive(false);
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-all cursor-pointer"
            title="Geniş Ekrana Geç"
          >
            <Maximize2 size={13} />
          </button>
        </div>
      </header>

      {/* Physical iPhone 18 Device Body (Flawless on Desktop & Mobile) */}
      <div className="relative z-10 w-full max-w-[420px] md:w-[412px] h-[100dvh] md:h-[870px] md:max-h-[94vh] flex flex-col items-center">
        
        {/* Left Side Physical Buttons (Action button, Volume up/down) - Desktop only */}
        <div className="hidden md:block absolute -left-[7px] top-[108px] w-[5px] h-[26px] bg-[#3B3944] rounded-l-sm border-l border-y border-white/20 pointer-events-none" title="Action Button" />
        <div className="hidden md:block absolute -left-[7px] top-[152px] w-[5px] h-[50px] bg-[#3B3944] rounded-l-sm border-l border-y border-white/20 pointer-events-none" title="Volume Up" />
        <div className="hidden md:block absolute -left-[7px] top-[214px] w-[5px] h-[50px] bg-[#3B3944] rounded-l-sm border-l border-y border-white/20 pointer-events-none" title="Volume Down" />

        {/* Right Side Physical Power Button - Desktop only */}
        <div className="hidden md:block absolute -right-[7px] top-[168px] w-[5px] h-[78px] bg-[#3B3944] rounded-r-sm border-r border-y border-white/20 pointer-events-none" title="Power / Siri Button" />

        {/* Outer Titanium Frame (Adaptive: Sleek rounded titanium bezel on both desktop & mobile) */}
        <div
          className={`w-full h-full rounded-[38px] md:rounded-[56px] p-[5px] md:p-[10px] bg-gradient-to-b ${currentTheme.chassis} ${currentTheme.border} border-[2.5px] md:border-[3.5px] shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] flex flex-col relative overflow-hidden transition-all duration-300`}
        >
          {/* Subtle Outer Titanium Bevel Glare Line */}
          <div className="absolute inset-0 rounded-[34px] md:rounded-[52px] border border-white/10 pointer-events-none" />

          {/* Inner OLED Display Glass */}
          <div
            className="w-full h-full rounded-[32px] md:rounded-[46px] bg-[#0A0A0D] overflow-hidden relative flex flex-col shadow-inner"
            style={{
              transform: 'translate3d(0, 0, 0)',
              contain: 'paint',
            }}
          >
            {/* Top iOS Status Bar & Dynamic Island (CRITICAL: pointer-events-none to NEVER block buttons) */}
            <div className="absolute top-0 left-0 right-0 z-40 px-6 pt-3 pb-1 flex items-center justify-between text-neutral-800 dark:text-white pointer-events-none select-none transition-colors">
              {/* Left: Time */}
              <div className="text-[13px] font-semibold tracking-tight w-14 text-left font-mono pointer-events-none drop-shadow-xs">
                {currentTime}
              </div>

              {/* Center: Dynamic Island (Non-blocking pill) */}
              <div
                className="pointer-events-none bg-black text-white rounded-full flex items-center justify-between px-3 w-28 h-7 shadow-lg border border-white/15"
              >
                {/* Front Camera & FaceID Sensors */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#110F18] border border-[#2D2A3B] relative flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#3B2C63] opacity-80" />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0E0C13]" />
                </div>

                {/* Mini Pulsing Audio Waveform / Star Indicator */}
                <div className="flex items-center gap-1">
                  <Sparkles size={10} className="text-amber-300 animate-spin-slow" />
                  {!isMuted && (
                    <div className="flex items-end gap-0.5 h-2.5">
                      <span className="w-0.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                      <span className="w-0.5 h-2.5 bg-amber-300 rounded-full animate-pulse delay-75" />
                      <span className="w-0.5 h-1 bg-amber-400 rounded-full animate-pulse delay-150" />
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Cellular, Wi-Fi & Battery */}
              <div className="flex items-center justify-end gap-1.5 w-14 pointer-events-none drop-shadow-xs">
                <span className="text-[10px] font-bold tracking-tighter">5G</span>
                <Wifi size={13} className="stroke-[2.5]" />
                <div className="flex items-center">
                  <div className="w-5 h-2.5 rounded-xs border border-current p-0.5 flex items-center">
                    <div className="w-full h-full bg-current rounded-2xs" />
                  </div>
                  <div className="w-0.5 h-1 bg-current rounded-r-xs -ml-[1px]" />
                </div>
              </div>
            </div>

            {/* Inner Content Area: App Views Scroll Seamlessly Inside Display */}
            <div
              className="w-full h-full overflow-y-auto overflow-x-hidden relative flex flex-col no-scrollbar overscroll-y-contain"
              style={{
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {children}
            </div>

            {/* iOS Bottom Home Bar */}
            <div className="absolute bottom-1.5 left-0 right-0 z-40 pointer-events-none flex justify-center py-1">
              <div className="w-36 h-1 bg-neutral-900/60 dark:bg-white/60 rounded-full shadow-xs backdrop-blur-xs" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
