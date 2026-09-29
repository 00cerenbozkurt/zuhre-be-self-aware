'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Maximize2, Minimize2, Wifi, Battery, Sparkles, Music } from 'lucide-react';
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
  // Desktop frame active by default, user can toggle to full-width anytime
  const [isFrameActive, setIsFrameActive] = useState(true);
  const [titaniumColor, setTitaniumColor] = useState<'black' | 'natural' | 'gold'>('black');
  const [isIslandExpanded, setIsIslandExpanded] = useState(false);

  // Time display (defaults to 9:41 like classic Apple mockups or current time)
  const [currentTime, setCurrentTime] = useState('9:41');

  React.useEffect(() => {
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
      chassis: 'from-[#3A3842] via-[#1E1C24] to-[#121117]',
      border: 'border-[#43404E]',
      accent: 'border-white/10',
      label: 'Obsidyen Titanyum',
    },
    natural: {
      chassis: 'from-[#605D68] via-[#3E3C45] to-[#24232A]',
      border: 'border-[#726E7C]',
      accent: 'border-white/15',
      label: 'Doğal Titanyum',
    },
    gold: {
      chassis: 'from-[#6E5C3D] via-[#453823] to-[#251E14]',
      border: 'border-[#8F774E]',
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

      {/* Physical iPhone 18 Device Body */}
      <div className="relative z-10 w-full md:w-[412px] h-screen md:h-[860px] md:max-h-[92vh] flex flex-col items-center">
        
        {/* Left Side Physical Buttons (Action button, Volume up/down) */}
        <div className="hidden md:block absolute -left-[7px] top-[108px] w-[5px] h-[26px] bg-[#3B3944] rounded-l-sm border-l border-y border-white/20" title="Action Button" />
        <div className="hidden md:block absolute -left-[7px] top-[152px] w-[5px] h-[50px] bg-[#3B3944] rounded-l-sm border-l border-y border-white/20" title="Volume Up" />
        <div className="hidden md:block absolute -left-[7px] top-[214px] w-[5px] h-[50px] bg-[#3B3944] rounded-l-sm border-l border-y border-white/20" title="Volume Down" />

        {/* Right Side Physical Power Button */}
        <div className="hidden md:block absolute -right-[7px] top-[168px] w-[5px] h-[78px] bg-[#3B3944] rounded-r-sm border-r border-y border-white/20" title="Power / Siri Button" />

        {/* Outer Titanium Frame */}
        <div
          className={`w-full h-full md:rounded-[56px] p-0 md:p-[10px] bg-gradient-to-b ${currentTheme.chassis} ${currentTheme.border} md:border-[3.5px] shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.08)] flex flex-col relative overflow-hidden transition-all duration-300`}
        >
          {/* Subtle Outer Titanium Bevel Glare Line */}
          <div className="hidden md:block absolute inset-0 rounded-[52px] border border-white/10 pointer-events-none" />

          {/* Inner OLED Display Glass */}
          <div
            className="w-full h-full md:rounded-[46px] bg-[#0A0A0D] overflow-hidden relative flex flex-col shadow-inner"
            style={{
              transform: 'translate3d(0, 0, 0)',
              contain: 'paint',
            }}
          >
            {/* Top iOS Status Bar & Dynamic Island */}
            <div className="absolute top-0 left-0 right-0 z-50 px-7 pt-3.5 pb-2 flex items-center justify-between text-neutral-800 dark:text-white pointer-events-none select-none transition-colors">
              {/* Left: Time (9:41) */}
              <div className="text-[14px] font-semibold tracking-tight w-14 text-left font-mono">
                {currentTime}
              </div>

              {/* Center: Dynamic Island (Interactive) */}
              <motion.div
                layout
                onClick={() => {
                  soundEngine.playCardFlip();
                  setIsIslandExpanded(!isIslandExpanded);
                }}
                className={`pointer-events-auto cursor-pointer bg-black text-white rounded-full flex items-center justify-between px-3 transition-all duration-300 shadow-lg border border-white/15 ${
                  isIslandExpanded
                    ? 'w-64 h-11 py-1.5'
                    : 'w-28 h-7'
                }`}
              >
                {!isIslandExpanded ? (
                  <>
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
                  </>
                ) : (
                  /* Expanded Dynamic Island showing Live Zühre Aura State */
                  <div className="w-full flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-b from-amber-400 to-orange-500 flex items-center justify-center shadow-xs">
                        <Sparkles size={11} className="text-black" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold text-neutral-100">Zühre Kozmik Akış</div>
                        <div className="text-[8px] text-amber-300 font-medium">
                          {!isMuted ? 'Lofi Frekans & Rezonans Aktif' : 'Sessiz Mod'}
                        </div>
                      </div>
                    </div>
                    <div className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white">
                      528 Hz
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Right: Cellular, Wi-Fi & Battery */}
              <div className="flex items-center justify-end gap-1.5 w-14">
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
            <div className="w-full h-full overflow-y-auto overflow-x-hidden relative flex flex-col no-scrollbar">
              {children}
            </div>

            {/* iOS Bottom Home Bar */}
            <div className="absolute bottom-1 left-0 right-0 z-50 pointer-events-none flex justify-center py-1">
              <div className="w-36 h-1 bg-neutral-900/60 dark:bg-white/60 rounded-full shadow-xs backdrop-blur-xs" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
