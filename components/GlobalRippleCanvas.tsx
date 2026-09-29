'use client';

import React, { useEffect, useState } from 'react';
import { PlatformStyle } from '../lib/platformTheme';

interface ScreenRipple {
  id: number;
  x: number;
  y: number;
  color: string;
  shadow: string;
}

export default function GlobalRippleCanvas({
  platform,
}: {
  platform: PlatformStyle;
}) {
  const [ripples, setRipples] = useState<ScreenRipple[]>([]);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // Don't spawn ripples if clicking interactive controls that already have local ripples
      const target = e.target as HTMLElement | null;
      
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (!clientX && !clientY) return;

      const isAndroid = platform === 'android-m3-expressive';

      // Rich, high-visibility celestial colors
      const rippleColor = isAndroid
        ? 'rgba(175, 135, 255, 0.65)' // M3 Expressive vivid lavender
        : 'rgba(200, 145, 25, 0.55)'; // iOS Liquid Glass warm amber-gold

      const rippleShadow = isAndroid
        ? '0 0 24px rgba(175, 135, 255, 0.45)'
        : '0 0 24px rgba(212, 160, 23, 0.35)';

      const newRipple: ScreenRipple = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
        color: rippleColor,
        shadow: rippleShadow,
      };

      setRipples((prev) => [...prev.slice(-6), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 950);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [platform]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {ripples.map((ripple) => (
        <React.Fragment key={ripple.id}>
          {/* Primary Rapid Expanding Ripple Ring */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: '140px',
              height: '140px',
              border: `2px solid ${ripple.color}`,
              boxShadow: ripple.shadow,
              animation: 'celestial-ripple 0.85s cubic-bezier(0.1, 0.8, 0.25, 1) forwards',
            }}
          />

          {/* Secondary Echo Ripple Ring */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: '80px',
              height: '80px',
              border: `1.5px solid ${ripple.color}`,
              animation: 'celestial-ripple 0.95s cubic-bezier(0.15, 0.7, 0.3, 1) forwards 0.12s',
            }}
          />

          {/* Center Glow Flash */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: '18px',
              height: '18px',
              backgroundColor: ripple.color,
              filter: 'blur(3px)',
              animation: 'touch-ripple 0.5s ease-out forwards',
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
