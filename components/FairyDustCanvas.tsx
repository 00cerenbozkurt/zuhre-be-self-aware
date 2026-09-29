'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxLife: number;
  life: number;
  color: string;
  isStar?: boolean;
  angle?: number;
  spin?: number;
  twinklePhase?: number;
}

export default function FairyDustCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pools
    const particles: Particle[] = [];
    const ambientMotes: Particle[] = [];

    const goldHues = [
      'rgba(255, 230, 160, ',
      'rgba(240, 200, 100, ',
      'rgba(212, 175, 55, ',
      'rgba(230, 190, 255, ',
      'rgba(180, 130, 240, ',
      'rgba(255, 255, 255, '
    ];

    // Seed ambient floating motes
    const ambientCount = 85;
    for (let i = 0; i < ambientCount; i++) {
      ambientMotes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.4,
        size: 0.8 + Math.random() * 2.2,
        maxLife: 100,
        life: 100,
        color: goldHues[Math.floor(Math.random() * goldHues.length)],
        twinklePhase: Math.random() * Math.PI * 2,
        isStar: Math.random() > 0.65
      });
    }

    // Mouse tracking for the Stardust Storm
    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastMouseX = mouseX;
    let lastMouseY = mouseY;
    let isMoving = false;
    let idleTimer: any;

    const spawnMouseTrail = (x: number, y: number, count = 4) => {
      for (let i = 0; i < count; i++) {
        const speed = 0.5 + Math.random() * 3.5;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + 0.3,
          size: 1 + Math.random() * 3.5,
          maxLife: 40 + Math.random() * 45,
          life: 40 + Math.random() * 45,
          color: goldHues[Math.floor(Math.random() * goldHues.length)],
          isStar: Math.random() > 0.4,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.15
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const dist = Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY);
      if (dist > 3) {
        spawnMouseTrail(mouseX, mouseY, Math.min(8, Math.floor(dist / 4) + 2));
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
      isMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 150);
    };

    // Vortex around center when idle or hovering
    let vortexAngle = 0;

    // Burst listener for card flip / reveal
    const handleBurst = (e: any) => {
      const { x, y } = e.detail || { x: width / 2, y: height / 2 };
      const burstCount = 65;
      for (let i = 0; i < burstCount; i++) {
        const speed = 1.5 + Math.random() * 6.5;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.5 + Math.random() * 4.5,
          maxLife: 50 + Math.random() * 50,
          life: 50 + Math.random() * 50,
          color: goldHues[Math.floor(Math.random() * goldHues.length)],
          isStar: Math.random() > 0.3,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('fairy-dust-burst', handleBurst as EventListener);

    // Draw helper: 4-pointed sparkle star
    const drawStar = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render Ambient Motes
      for (let i = 0; i < ambientMotes.length; i++) {
        const mote = ambientMotes[i];
        mote.y += mote.vy;
        mote.x += Math.sin(time + (mote.twinklePhase || 0)) * 0.5;

        if (mote.y < -10) {
          mote.y = height + 10;
          mote.x = Math.random() * width;
        }

        const alpha =
          0.25 + 0.45 * Math.sin(time * 2 + (mote.twinklePhase || 0));
        ctx.fillStyle = `${mote.color}${Math.max(0.05, alpha)})`;
        ctx.shadowColor = 'rgba(230, 200, 140, 0.6)';
        ctx.shadowBlur = 6;

        if (mote.isStar) {
          drawStar(ctx, mote.x, mote.y, 4, mote.size * 1.8, mote.size * 0.4);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Continuous subtle vortex around center
      vortexAngle += 0.025;
      if (Math.random() < 0.35) {
        const rad = 120 + Math.random() * 220;
        const curAngle = vortexAngle + Math.random() * Math.PI * 2;
        particles.push({
          x: width / 2 + Math.cos(curAngle) * rad,
          y: height / 2 + Math.sin(curAngle) * (rad * 0.6),
          vx: -Math.sin(curAngle) * 1.8 + (Math.random() - 0.5) * 0.5,
          vy: Math.cos(curAngle) * 1.1 + (Math.random() - 0.5) * 0.5,
          size: 1 + Math.random() * 2.8,
          maxLife: 40 + Math.random() * 30,
          life: 40 + Math.random() * 30,
          color: goldHues[Math.floor(Math.random() * goldHues.length)],
          isStar: Math.random() > 0.5
        });
      }

      // Render Active Burst & Trail Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.vy += 0.03; // slight gravity

        if (p.angle !== undefined && p.spin !== undefined) {
          p.angle += p.spin;
        }

        const lifeRatio = p.life / p.maxLife;
        const alpha = Math.max(0, lifeRatio);

        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.shadowBlur = 8 * alpha;

        if (p.isStar) {
          ctx.save();
          ctx.translate(p.x, p.y);
          if (p.angle !== undefined) ctx.rotate(p.angle);
          drawStar(ctx, 0, 0, 4, p.size * 2 * alpha, p.size * 0.5 * alpha);
          ctx.fill();
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.5, p.size * alpha), 0, Math.PI * 2);
          ctx.fill();
        }

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('fairy-dust-burst', handleBurst as EventListener);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full"
    />
  );
}
