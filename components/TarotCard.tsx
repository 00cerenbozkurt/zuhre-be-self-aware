// @ts-nocheck
'use client';

import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function TarotCard({ onReveal }: { onReveal: () => void }) {
  const mesh = useRef<any>(null);
  const [isHovered, setHovered] = useState(false);
  const [isFlipped, setFlipped] = useState(false);

  // Vektörel (SVG) çizimi kodun içinde yaratıp dokuya çeviren büyü
  const { frontTexture, backTexture } = useMemo(() => {
    const canvasFront = document.createElement('canvas');
    canvasFront.width = 512;
    canvasFront.height = 800;
    const ctxF = canvasFront.getContext('2d');
    
    if (ctxF) {
      // Ön Yüz Arka Planı (Gece Mavisi/Lavanta)
      const gradF = ctxF.createLinearGradient(0, 0, 0, 800);
      gradF.addColorStop(0, '#1a1025');
      gradF.addColorStop(1, '#0a0510');
      ctxF.fillStyle = gradF;
      ctxF.fillRect(0, 0, 512, 800);
      
      // Altın Çerçeve
      ctxF.strokeStyle = '#d4af37';
      ctxF.lineWidth = 12;
      ctxF.strokeRect(30, 30, 452, 740);
      ctxF.lineWidth = 4;
      ctxF.strokeRect(45, 45, 422, 710);
      
      // Ortaya Mistik Geometrik Desen (Dönüşüm Sembolü)
      ctxF.beginPath();
      ctxF.arc(256, 400, 120, 0, Math.PI * 2);
      ctxF.moveTo(256, 200);
      ctxF.lineTo(376, 500);
      ctxF.lineTo(136, 500);
      ctxF.closePath();
      ctxF.stroke();
      
      // Yazı
      ctxF.fillStyle = '#d4af37';
      ctxF.font = 'bold 36px serif';
      ctxF.textAlign = 'center';
      ctxF.letterSpacing = '8px';
      ctxF.fillText('DÖNÜŞÜM', 256, 120);
      ctxF.fillText('XIII', 256, 700);
    }

    const canvasBack = document.createElement('canvas');
    canvasBack.width = 512;
    canvasBack.height = 800;
    const ctxB = canvasBack.getContext('2d');
    
    if (ctxB) {
      // Arka Yüz Arka Planı (Kozmik Siyah)
      ctxB.fillStyle = '#0a0a0a';
      ctxB.fillRect(0, 0, 512, 800);
      
      // Arka Yüz Desen (Yıldızlar / Noktalar)
      ctxB.fillStyle = '#e8dcc5';
      for(let i=0; i<150; i++) {
        ctxB.beginPath();
        ctxB.arc(Math.random()*512, Math.random()*800, Math.random()*2, 0, Math.PI*2);
        ctxB.fill();
      }
      
      // Arka Yüz Çerçeve
      ctxB.strokeStyle = '#3a1c4a';
      ctxB.lineWidth = 8;
      ctxB.strokeRect(20, 20, 472, 760);
    }

    return {
      frontTexture: new THREE.CanvasTexture(canvasFront),
      backTexture: new THREE.CanvasTexture(canvasBack)
    };
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    if (!isFlipped) {
      const t = state.clock.getElapsedTime();
      mesh.current.position.y = Math.sin(t * 2) * 0.1;
      mesh.current.rotation.x = Math.sin(t * 1) * 0.05;
      mesh.current.rotation.y = Math.sin(t * 0.5) * 0.05;
    } else {
      mesh.current.rotation.y += 0.1;
      if (mesh.current.rotation.y > Math.PI) {
        mesh.current.rotation.y = Math.PI; 
      }
    }
  });

  const handleClick = () => {
    if (!isFlipped) {
      setFlipped(true);
      setTimeout(() => onReveal(), 1200); 
    }
  };

  return (
    <mesh
      ref={mesh}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={isHovered && !isFlipped ? 1.05 : 1}
    >
      <boxGeometry args={[2.2, 3.8, 0.05]} />
      <meshStandardMaterial attach="material-0" color="#050505" /> 
      <meshStandardMaterial attach="material-1" color="#050505" /> 
      <meshStandardMaterial attach="material-2" color="#050505" /> 
      <meshStandardMaterial attach="material-3" color="#050505" /> 
      {/* Ön Yüz */}
      <meshStandardMaterial attach="material-4" map={frontTexture} roughness={0.5} metalness={0.2} /> 
      {/* Arka Yüz */}
      <meshStandardMaterial attach="material-5" map={backTexture} roughness={0.8} /> 
    </mesh>
  );
}