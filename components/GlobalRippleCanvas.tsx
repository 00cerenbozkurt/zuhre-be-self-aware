'use client';

import React, { useEffect, useState } from 'react';
import { PlatformStyle } from '../lib/platformTheme';

interface ScreenRipple {
  id: number;
  x: number;
  y: number;
}

export default function GlobalRippleCanvas({
  platform,
}: {
  platform: PlatformStyle;
}) {
  const [ripples, setRipples] = useState<ScreenRipple[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      if (clientX === 0 && clientY === 0) return;

      const newRipple: ScreenRipple = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
      };

      setRipples((prev) => [...prev.slice(-8), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1200);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: '180px',
            height: '180px',
            border:
              platform === 'android-m3-expressive'
                ? '1.5px solid rgba(208, 188, 255, 0.4)'
                : '1.5px solid rgba(255, 255, 255, 0.35)',
            boxShadow:
              platform === 'android-m3-expressive'
                ? '0 0 15px rgba(208, 188, 255, 0.25)'
                : '0 0 20px rgba(255, 255, 255, 0.3)',
            animation: 'celestial-ripple 1.1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards',
          }}
        />
      ))}
    </div>
  );
}
