'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, ExternalLink } from 'lucide-react';
import { PlatformStyle } from '../lib/platformTheme';
import { Language } from '../lib/translations';

interface AmbientAudioPlayerProps {
  isMuted: boolean;
  onToggleMute: () => void;
  platform?: PlatformStyle;
  language?: Language;
}

export default function AmbientAudioPlayer({
  isMuted,
  onToggleMute,
  platform = 'ios-liquid-glass',
  language = 'tr',
}: AmbientAudioPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(!isMuted);
  const [showPlayerPill, setShowPlayerPill] = useState(true);

  // Sync with global isMuted prop
  useEffect(() => {
    setIsPlaying(!isMuted);
    sendIframeCommand(!isMuted ? 'playVideo' : 'pauseVideo');
  }, [isMuted]);

  // Listen to custom audio play events from soundEngine
  useEffect(() => {
    const handleCustomAudio = (e: any) => {
      const shouldMute = e.detail?.isMuted ?? isMuted;
      setIsPlaying(!shouldMute);
      sendIframeCommand(!shouldMute ? 'playVideo' : 'pauseVideo');
    };

    window.addEventListener('zuhre-audio-play', handleCustomAudio);
    return () => window.removeEventListener('zuhre-audio-play', handleCustomAudio);
  }, [isMuted]);

  const sendIframeCommand = (func: 'playVideo' | 'pauseVideo') => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func }),
        '*'
      );
    }
  };

  const handleToggle = () => {
    onToggleMute();
  };

  return (
    <>
      {/* Hidden YouTube Audio Stream Player (Lulu Is the Cat I Like Best - pATCHES) */}
      <div className="hidden pointer-events-none opacity-0 fixed bottom-0 left-0 w-1 h-1 overflow-hidden" aria-hidden="true">
        <iframe
          ref={iframeRef}
          width="10"
          height="10"
          src="https://www.youtube-nocookie.com/embed/4mBzUNsAIl4?enablejsapi=1&autoplay=0&loop=1&playlist=4mBzUNsAIl4&controls=0&playsinline=1"
          title="Lulu Is the Cat I Like Best - pATCHES"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Floating Ambient Track Banner (Discreet & Calm) */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-white shadow-xl text-xs transition-all hover:bg-black">
          <button
            onClick={handleToggle}
            className="flex items-center gap-2 cursor-pointer group"
            title={language === 'tr' ? 'Müziği Duraklat / Başlat' : 'Play / Pause Music'}
          >
            {isPlaying ? (
              <div className="flex items-center gap-0.5 h-3 text-amber-300">
                <span className="w-0.5 h-2.5 bg-amber-300 animate-pulse rounded-full" />
                <span className="w-0.5 h-3.5 bg-amber-300 animate-pulse rounded-full delay-75" />
                <span className="w-0.5 h-2 bg-amber-300 animate-pulse rounded-full delay-150" />
              </div>
            ) : (
              <Play size={12} className="text-neutral-400 group-hover:text-white" />
            )}
            <span className="text-[11px] font-medium text-neutral-200 truncate max-w-[170px] sm:max-w-[220px]">
              {isPlaying
                ? (language === 'tr' ? 'Çalıyor: Lulu (Akustik Lo-Fi)' : 'Playing: Lulu (Acoustic Lo-Fi)')
                : (language === 'tr' ? 'Akustik Ambiyans: Lulu' : 'Acoustic Ambience: Lulu')}
            </span>
          </button>

          <button
            onClick={handleToggle}
            className="p-1 rounded-full text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
            aria-label="Sesi Aç/Kapat"
          >
            {isPlaying ? <Volume2 size={13} className="text-amber-300" /> : <VolumeX size={13} />}
          </button>
        </div>
      </div>
    </>
  );
}
