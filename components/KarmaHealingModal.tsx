'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  KarmaSynthesisResult,
  DrawnCard,
  synthesizeAncestralKarma
} from '../lib/karmaSynthesis';
import { soundEngine } from '../lib/soundEngine';
import {
  Sparkles,
  Wind,
  Scroll,
  Copy,
  Check,
  X,
  Flame,
  Feather,
  HeartHandshake
} from 'lucide-react';

interface KarmaHealingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: DrawnCard[];
}

export default function KarmaHealingModal({
  isOpen,
  onClose,
  cards
}: KarmaHealingModalProps) {
  const [activeTab, setActiveTab] = useState<'synthesis' | 'meditation' | 'affirmation'>('synthesis');
  const [meditationStep, setMeditationStep] = useState(0);
  const [breathPhase, setBreathPhase] = useState<'Nefes Al' | 'Tut' | 'Ver'>('Nefes Al');
  const [copied, setCopied] = useState(false);
  const [synthesis, setSynthesis] = useState<KarmaSynthesisResult | null>(null);

  useEffect(() => {
    if (isOpen) {
      const result = synthesizeAncestralKarma(cards);
      setSynthesis(result);
      setActiveTab('synthesis');
      setMeditationStep(0);
      setCopied(false);
      soundEngine.playAncestralGong();
    }
  }, [isOpen, cards]);

  // Breathing circle timer for meditation
  useEffect(() => {
    if (!isOpen || activeTab !== 'meditation') return;

    let timer: NodeJS.Timeout;
    const cycleBreathing = () => {
      setBreathPhase('Nefes Al');
      timer = setTimeout(() => {
        setBreathPhase('Tut');
        timer = setTimeout(() => {
          setBreathPhase('Ver');
          timer = setTimeout(() => {
            cycleBreathing();
          }, 6000);
        }, 4000);
      }, 4000);
    };

    cycleBreathing();
    return () => clearTimeout(timer);
  }, [isOpen, activeTab, meditationStep]);

  if (!isOpen || !synthesis) return null;

  const handleCopy = () => {
    if (!synthesis) return;
    navigator.clipboard.writeText(synthesis.sacredAffirmation);
    setCopied(true);
    soundEngine.playFairyDust();

    // Trigger visual burst
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('fairy-dust-burst', {
          detail: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        })
      );
    }

    setTimeout(() => setCopied(false), 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl md:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-amber-500/30 bg-[#0d0914] p-6 md:p-10 shadow-[0_0_80px_rgba(212,175,55,0.18)] text-[#e8dcc5]">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Header Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-amber-300">
            <Sparkles size={14} className="animate-pulse" />
            Ata Karması Şifa Tapınağı
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-light tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#e8dcc5] to-purple-300">
            {synthesis.title}
          </h2>
          <p className="mt-2 text-xs md:text-sm text-purple-300/80 tracking-widest uppercase">
            {synthesis.suitElement} — {synthesis.dominantTheme}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-white/10 pb-4 mb-8 gap-3 md:gap-6">
          <button
            onClick={() => {
              setActiveTab('synthesis');
              soundEngine.playCrystalChime(528);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm tracking-wider uppercase transition-all ${
              activeTab === 'synthesis'
                ? 'bg-amber-500/20 border border-amber-400/50 text-amber-200 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                : 'text-gray-400 hover:text-gray-200 border border-transparent'
            }`}
          >
            <Scroll size={15} />
            Karmik Çözümleme
          </button>

          <button
            onClick={() => {
              setActiveTab('meditation');
              soundEngine.playCrystalChime(648);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm tracking-wider uppercase transition-all ${
              activeTab === 'meditation'
                ? 'bg-purple-500/20 border border-purple-400/50 text-purple-200 shadow-[0_0_15px_rgba(180,130,240,0.2)]'
                : 'text-gray-400 hover:text-gray-200 border border-transparent'
            }`}
          >
            <Wind size={15} />
            3 Adımlı Meditasyon
          </button>

          <button
            onClick={() => {
              setActiveTab('affirmation');
              soundEngine.playCrystalChime(852);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm tracking-wider uppercase transition-all ${
              activeTab === 'affirmation'
                ? 'bg-amber-400/20 border border-amber-400/50 text-amber-200 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                : 'text-gray-400 hover:text-gray-200 border border-transparent'
            }`}
          >
            <Sparkles size={15} />
            Şifa Olumlaması
          </button>
        </div>

        {/* TAB 1: KARMİK ÇÖZÜMLEME */}
        {activeTab === 'synthesis' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {synthesis.analysisSections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md hover:border-amber-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  {idx === 0 && <Feather size={18} className="text-amber-400" />}
                  {idx === 1 && <Flame size={18} className="text-purple-400" />}
                  {idx === 2 && <HeartHandshake size={18} className="text-emerald-400" />}
                  <h3 className="text-lg md:text-xl font-light text-amber-200 tracking-wider">
                    {sec.heading}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-4 opacity-75">
                  {sec.subtitle}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-[#dfd6c6] font-serif italic">
                  "{sec.content}"
                </p>
              </div>
            ))}

            <div className="pt-4 text-center">
              <button
                onClick={() => {
                  setActiveTab('meditation');
                  soundEngine.playCrystalChime(648);
                }}
                className="inline-flex items-center gap-3 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-600/30 via-purple-600/30 to-amber-600/30 px-8 py-3.5 text-xs md:text-sm uppercase tracking-[0.25em] text-amber-200 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:scale-105 hover:border-amber-300 transition-all cursor-pointer"
              >
                <Wind size={16} />
                3 Adımlı Şifa Meditasyonuna Geç
              </button>
            </div>
          </motion.div>
        )}

        {/* TAB 2: 3 ADIMLI MEDİTASYON */}
        {activeTab === 'meditation' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center space-y-8 py-2"
          >
            {/* Step Progress Indicators */}
            <div className="flex items-center gap-3">
              {[0, 1, 2].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setMeditationStep(s);
                    soundEngine.playFairyDust();
                  }}
                  className={`h-3 w-12 rounded-full transition-all ${
                    meditationStep === s
                      ? 'bg-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.8)]'
                      : meditationStep > s
                      ? 'bg-purple-600'
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            {/* Glowing Breathing Sphere */}
            <div className="relative flex items-center justify-center h-48 w-48 my-2">
              <motion.div
                animate={{
                  scale: breathPhase === 'Nefes Al' ? 1.4 : breathPhase === 'Tut' ? 1.4 : 0.85,
                  opacity: breathPhase === 'Nefes Al' ? 0.9 : breathPhase === 'Tut' ? 1 : 0.6
                }}
                transition={{
                  duration: breathPhase === 'Nefes Al' ? 4 : breathPhase === 'Tut' ? 4 : 6,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-purple-600/30 to-amber-300/20 blur-xl"
              />
              <motion.div
                animate={{
                  scale: breathPhase === 'Nefes Al' ? 1.3 : breathPhase === 'Tut' ? 1.3 : 0.9,
                  borderColor:
                    breathPhase === 'Nefes Al'
                      ? 'rgba(212, 175, 55, 0.7)'
                      : breathPhase === 'Tut'
                      ? 'rgba(180, 130, 240, 0.8)'
                      : 'rgba(212, 175, 55, 0.4)'
                }}
                transition={{
                  duration: breathPhase === 'Nefes Al' ? 4 : breathPhase === 'Tut' ? 4 : 6,
                  ease: 'easeInOut'
                }}
                className="relative flex flex-col items-center justify-center h-36 w-36 rounded-full border-2 border-amber-400/40 bg-black/60 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <span className="text-xs uppercase tracking-widest text-gray-400">Nefes</span>
                <span className="text-base font-medium tracking-wider text-amber-200 mt-1">
                  {breathPhase}
                </span>
              </motion.div>
            </div>

            {/* Current Step Content */}
            <div className="max-w-2xl bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
                Adım {synthesis.meditationGuide[meditationStep].stepNumber} / 3
              </span>
              <h3 className="text-xl md:text-2xl font-light text-amber-200 mt-2 tracking-wider">
                {synthesis.meditationGuide[meditationStep].title}
              </h3>
              <p className="text-xs text-purple-300 tracking-widest mt-1 mb-6 uppercase">
                {synthesis.meditationGuide[meditationStep].breathInstruction}
              </p>

              <p className="text-sm md:text-base leading-relaxed text-[#ded4c3] font-serif italic mb-6">
                "{synthesis.meditationGuide[meditationStep].guideText}"
              </p>

              {/* Spoken Mantra */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs md:text-sm tracking-wide text-amber-300 font-serif">
                <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                  İçinden veya Sesli Fısılda:
                </span>
                "{synthesis.meditationGuide[meditationStep].spokenMantra}"
              </div>
            </div>

            {/* Step Controls */}
            <div className="flex items-center gap-4">
              {meditationStep > 0 && (
                <button
                  onClick={() => {
                    setMeditationStep(meditationStep - 1);
                    soundEngine.playFairyDust();
                  }}
                  className="px-6 py-2.5 rounded-full border border-white/10 text-xs uppercase tracking-widest text-gray-400 hover:text-white"
                >
                  Önceki Adım
                </button>
              )}

              {meditationStep < 2 ? (
                <button
                  onClick={() => {
                    setMeditationStep(meditationStep + 1);
                    soundEngine.playCrystalChime(700 + meditationStep * 80);
                  }}
                  className="px-8 py-3 rounded-full border border-amber-400/50 bg-amber-500/20 text-xs md:text-sm uppercase tracking-widest text-amber-200 hover:bg-amber-500/30 shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all cursor-pointer"
                >
                  Sonraki Adım
                </button>
              ) : (
                <button
                  onClick={() => {
                    setActiveTab('affirmation');
                    soundEngine.playCrystalChime(963);
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-600/40 via-purple-600/40 to-amber-600/40 text-xs md:text-sm uppercase tracking-[0.2em] text-amber-200 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all cursor-pointer"
                >
                  <Sparkles size={16} />
                  Kutsal Olumlama Kartını Al
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* TAB 3: ŞİFA OLUMLAMASI KARTI */}
        {activeTab === 'affirmation' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center space-y-8 py-4"
          >
            {/* The Gold Foil Sealed Affirmation Card */}
            <div className="relative w-full max-w-xl rounded-3xl border-2 border-amber-400/50 bg-gradient-to-b from-[#181126] to-[#0a0512] p-8 md:p-12 shadow-[0_0_60px_rgba(212,175,55,0.25)]">
              {/* Inner Ornamental Border */}
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-amber-400/20" />

              <div className="inline-block border border-amber-400/30 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-amber-300 mb-6">
                ✦ Ata Karması Şifa Mührü ✦
              </div>

              <blockquote className="text-lg md:text-2xl leading-relaxed text-[#f4edd9] font-serif italic mb-8 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                "{synthesis.sacredAffirmation}"
              </blockquote>

              <div className="border-t border-amber-400/20 pt-6">
                <span className="block text-[11px] uppercase tracking-[0.3em] text-purple-300/80 mb-1">
                  Karmik Şiar
                </span>
                <span className="text-sm font-light tracking-widest text-amber-200 uppercase">
                  "{synthesis.ancestralMotto}"
                </span>
              </div>
            </div>

            {/* Copy Button & Feedback */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-3 rounded-full border border-amber-400/60 bg-amber-500/20 px-8 py-3.5 text-xs md:text-sm uppercase tracking-[0.25em] text-amber-200 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 hover:bg-amber-500/30 transition-all cursor-pointer"
              >
                {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                {copied ? 'Ruhuna Mühürlendi (Panoya Kopyalandı)' : 'Olumlamayı Panoya Kopyala'}
              </button>

              <p className="text-xs text-gray-400 font-serif max-w-lg italic opacity-80 mt-2">
                {synthesis.ritualAdvice}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-widest text-gray-500 hover:text-amber-300 transition-colors"
              >
                Şifa Ritüelini Tamamla ve Masaya Dön [X]
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
