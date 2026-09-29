'use client';

import React, { useState } from 'react';
import { PlatformStyle } from '../lib/platformTheme';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  platform?: PlatformStyle;
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
}

export default function RippleButton({
  platform = 'ios-liquid-glass',
  children,
  className = '',
  rippleColor,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    const newRipple: Ripple = { x, y, size, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 650);
  };

  // High-visibility dynamic ripple colors:
  // Android: Expressive luminous lavender
  // iOS: Celestial liquid gold wave
  const defaultRippleColor =
    platform === 'android-m3-expressive'
      ? 'rgba(195, 155, 255, 0.55)'
      : 'rgba(215, 165, 30, 0.48)';

  return (
    <button
      {...props}
      onPointerDown={(e) => {
        handlePointerDown(e);
        props.onPointerDown?.(e);
      }}
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer active:scale-97 transition-transform ${className}`}
    >
      {/* Dynamic Ripple waves */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="touch-ripple-effect pointer-events-none"
          style={{
            top: ripple.y - ripple.size / 2,
            left: ripple.x - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor || defaultRippleColor,
            boxShadow: `0 0 18px ${rippleColor || defaultRippleColor}`,
          }}
        />
      ))}
      <span className="relative z-10 flex items-center justify-center gap-2 w-full">
        {children}
      </span>
    </button>
  );
}
