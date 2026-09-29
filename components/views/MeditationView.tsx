'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wind,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  CheckCircle2,
  Shield,
  Heart,
  Flame,
  Droplets,
  Feather,
  Mountain
} from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { soundEngine } from '../../lib/soundEngine';
import { getTranslations, Language } from '../../lib/translations';
import { ZODIAC_KARMA_PROFILES, ZodiacKarmaProfile, BreathingStep } from '../../lib/zodiacKarmaData';
import RippleButton from '../RippleButton';

interface MeditationViewProps {
  platform: PlatformStyle;
  language?: Language;
  onOpenSubscription?: () => void;
}

export default function MeditationView({
  platform,
  language = 'tr',
  onOpenSubscription,
}: MeditationViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);

  // Selected Zodiac Sign (Default: Terazi / Libra)
  const [selectedZodiacId, setSelectedZodiacId] = useState('libra');
  const activeProfile: ZodiacKarmaProfile =
    ZODIAC_KARMA_PROFILES.find((z) => z.id === selectedZodiacId) || ZODIAC_KARMA_PROFILES[6];

  const steps: BreathingStep[] =
    language === 'tr' ? activeProfile.breathingSteps.tr : activeProfile.breathingSteps.en;

  // 3-Step Navigation & Timer State
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [currentCycle, setCurrentCycle] = useState<number>(1); // 1, 2, 3
  const [isActive, setIsActive] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(steps[0].durationSeconds);
  const [voiceGuidanceEnabled, setVoiceGuidanceEnabled] = useState<boolean>(true);
  const [isRitualCompleted, setIsRitualCompleted] = useState<boolean>(false);

  const currentStep = steps[currentStepIndex];

  // Web Speech API Voice synthesis
  const speakGuidance = (text: string) => {
    if (!voiceGuidanceEnabled || typeof window === 'undefined') return;
    if (!('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'tr' ? 'tr-TR' : 'en-US';
      utterance.rate = 0.88; // Calm, meditative pace
      utterance.pitch = 0.95;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  };

  // Sound cue on step change
  const triggerStepSound = (phase: 'inhale' | 'hold' | 'exhale') => {
    soundEngine.init();
    if (phase === 'inhale') {
      soundEngine.playAncestralGong();
    } else if (phase === 'hold') {
      soundEngine.playCrystalChime(528); // 528Hz Solfeggio repair tone
    } else if (phase === 'exhale') {
      soundEngine.playCrystalChime(432); // 432Hz release tone
    }
  };

  // Timer loop for active breathing
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isActive && !isRitualCompleted) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            // Advance to next step
            handleStepAdvance();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, currentStepIndex, currentCycle, isRitualCompleted]);

  // Handle advancing through the 3 steps
  const handleStepAdvance = () => {
    if (currentStepIndex < 2) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setSecondsRemaining(steps[nextIndex].durationSeconds);
      triggerStepSound(steps[nextIndex].phase);
      speakGuidance(steps[nextIndex].voicePrompt);
    } else {
      // Completed all 3 steps of current cycle
      if (currentCycle < 3) {
        const nextCycle = currentCycle + 1;
        setCurrentCycle(nextCycle);
        setCurrentStepIndex(0);
        setSecondsRemaining(steps[0].durationSeconds);
        triggerStepSound(steps[0].phase);
        speakGuidance(
          language === 'tr'
            ? `${nextCycle}. döngüye geçiyoruz. Derin nefes al...`
            : `Starting cycle ${nextCycle}. Take a deep breath...`
        );
      } else {
        // Complete ritual
        setIsActive(false);
        setIsRitualCompleted(true);
        soundEngine.playFairyDust();
        speakGuidance(
          language === 'tr'
            ? 'Ata karması çözüldü ve karmik bağ sevgiyle serbest bırakıldı.'
            : 'Ancestral karma is resolved and karmic ties are severed in love.'
        );
      }
    }
  };

  // Manual Step Navigation
  const goToStep = (index: number) => {
    soundEngine.playCardFlip();
    setCurrentStepIndex(index);
    setSecondsRemaining(steps[index].durationSeconds);
    triggerStepSound(steps[index].phase);
    speakGuidance(steps[index].voicePrompt);
  };

  const handleStartPause = () => {
    soundEngine.init();
    if (!isActive) {
      setIsActive(true);
      triggerStepSound(currentStep.phase);
      speakGuidance(currentStep.voicePrompt);
    } else {
      setIsActive(false);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handleReset = () => {
    soundEngine.playCardFlip();
    setIsActive(false);
    setIsRitualCompleted(false);
    setCurrentStepIndex(0);
    setCurrentCycle(1);
    setSecondsRemaining(steps[0].durationSeconds);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleSelectZodiac = (id: string) => {
    soundEngine.playCardFlip();
    setSelectedZodiacId(id);
    handleReset();
  };

  // Element icon helper
  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Ateş':
      case 'Fire':
        return <Flame size={14} className="text-amber-600" />;
      case 'Su':
      case 'Water':
        return <Droplets size={14} className="text-sky-600" />;
      case 'Hava':
      case 'Air':
        return <Feather size={14} className="text-indigo-600" />;
      case 'Toprak':
      case 'Earth':
        return <Mountain size={14} className="text-emerald-700" />;
      default:
        return <Sparkles size={14} className="text-neutral-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#141317] flex flex-col justify-between px-4 sm:px-6 pt-20 pb-36 transition-colors relative overflow-hidden">
      {/* Background Ambient Cosmic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-200/40 via-purple-200/30 to-teal-100/40 blur-3xl" />
      </div>

      <div className="w-full max-w-md mx-auto space-y-5 relative z-10">
        {/* Header Title & Theme */}
        <div className="text-center space-y-1.5 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-black/5 text-[10px] font-bold tracking-widest uppercase text-neutral-600">
            <Wind size={12} className="text-teal-600 animate-pulse" />
            <span>{t.meditationHeader}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
            {language === 'tr' ? `${activeProfile.signNameTr} Burcu Ata Karması` : `${activeProfile.signNameEn} Ancestral Karma`}
          </h1>
          <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
            {t.meditationSubtitle}
          </p>
        </div>

        {/* 12 Zodiac Sign Horizontal Pill Selector */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">
              {t.selectZodiacSign}
            </span>
            <span className="text-[10px] font-semibold text-neutral-500">
              {activeProfile.dates}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {ZODIAC_KARMA_PROFILES.map((z) => {
              const isSelected = z.id === selectedZodiacId;
              const signName = language === 'tr' ? z.signNameTr : z.signNameEn;

              return (
                <button
                  key={z.id}
                  onClick={() => handleSelectZodiac(z.id)}
                  className={`flex items-center gap-1.5 py-2 px-3 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer active:scale-95 ${
                    isSelected
                      ? 'bg-neutral-900 text-white shadow-md'
                      : 'bg-white/80 hover:bg-white text-neutral-800 border border-black/5'
                  }`}
                >
                  <span className="text-sm">{z.symbol}</span>
                  <span>{signName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ancestral Karma & Karmic Cord Overview Card */}
        <div className="p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-black/5 shadow-sm space-y-3 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {getElementIcon(language === 'tr' ? activeProfile.element : activeProfile.elementEn)}
              <span className="text-xs font-bold text-neutral-900">
                {language === 'tr' ? activeProfile.ancestralThemeTr : activeProfile.ancestralThemeEn}
              </span>
            </div>
            <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-neutral-100 font-bold text-neutral-600">
              {language === 'tr' ? activeProfile.element : activeProfile.elementEn}
            </span>
          </div>

          <div className="space-y-2 text-xs text-neutral-700 leading-relaxed border-t border-black/5 pt-2.5">
            <div>
              <span className="font-bold text-neutral-900 block text-[11px] mb-0.5">
                ✦ {t.ancestralWound}:
              </span>
              <p>{language === 'tr' ? activeProfile.karmicWoundTr : activeProfile.karmicWoundEn}</p>
            </div>
            <div>
              <span className="font-bold text-neutral-900 block text-[11px] mb-0.5">
                ✦ {t.karmicCord}:
              </span>
              <p className="text-neutral-800 font-medium">
                {language === 'tr' ? activeProfile.cordTypeTr : activeProfile.cordTypeEn}
              </p>
            </div>
          </div>
        </div>

        {/* 3-Step Breathing Navigation Bar (Adım 1 - Adım 2 - Adım 3) */}
        <div className="p-1 rounded-2xl bg-black/5 grid grid-cols-3 gap-1">
          {steps.map((st, idx) => {
            const isCurrent = currentStepIndex === idx;
            const isDone = currentStepIndex > idx;

            return (
              <button
                key={`step-${st.step}-${idx}`}
                onClick={() => goToStep(idx)}
                className={`py-2 px-1.5 rounded-xl text-center transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-white text-black shadow-sm font-bold'
                    : isDone
                    ? 'bg-white/40 text-neutral-800 font-semibold'
                    : 'text-neutral-500 hover:text-black font-medium'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider text-neutral-500">
                  {t.stepOf} {st.step}
                </div>
                <div className="text-[11px] truncate">
                  {st.phase === 'inhale'
                    ? language === 'tr'
                      ? 'Nefes Al'
                      : 'Inhale'
                    : st.phase === 'hold'
                    ? language === 'tr'
                      ? 'Nefes Tut'
                      : 'Hold'
                    : language === 'tr'
                    ? 'Nefes Ver'
                    : 'Exhale'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Cosmic Breathing Sphere & Visualizer */}
        <div className="relative py-8 flex flex-col items-center justify-center">
          {/* Concentric Breathing Resonance Circles */}
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* Outer animated halo expanding / contracting */}
            <motion.div
              animate={{
                scale:
                  currentStep.phase === 'inhale'
                    ? [1, 1.45]
                    : currentStep.phase === 'hold'
                    ? [1.45, 1.42, 1.45]
                    : [1.45, 0.95],
                opacity:
                  currentStep.phase === 'inhale'
                    ? [0.4, 0.8]
                    : currentStep.phase === 'hold'
                    ? [0.8, 0.9, 0.8]
                    : [0.8, 0.25],
              }}
              transition={{
                duration: currentStep.durationSeconds,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full border border-teal-500/30 bg-gradient-to-tr from-teal-400/10 via-amber-300/15 to-purple-500/10 pointer-events-none"
            />

            {/* Middle Liquid Glass ring */}
            <motion.div
              animate={{
                scale:
                  currentStep.phase === 'inhale'
                    ? [0.9, 1.25]
                    : currentStep.phase === 'hold'
                    ? [1.25, 1.22, 1.25]
                    : [1.25, 0.9],
              }}
              transition={{
                duration: currentStep.durationSeconds,
                ease: 'easeInOut',
              }}
              className="absolute w-44 h-44 rounded-full border-2 border-white/60 shadow-lg pointer-events-none"
            />

            {/* Core Interactive Center Orb */}
            <motion.div
              animate={{
                scale:
                  currentStep.phase === 'inhale'
                    ? [0.85, 1.12]
                    : currentStep.phase === 'hold'
                    ? [1.12, 1.1]
                    : [1.12, 0.85],
              }}
              transition={{
                duration: currentStep.durationSeconds,
                ease: 'easeInOut',
              }}
              className={`w-32 h-32 rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-3 transition-colors ${
                currentStep.phase === 'inhale'
                  ? 'bg-gradient-to-br from-teal-600 via-teal-700 to-indigo-900 text-white'
                  : currentStep.phase === 'hold'
                  ? 'bg-gradient-to-br from-amber-500 via-orange-600 to-purple-900 text-white'
                  : 'bg-gradient-to-br from-purple-700 via-indigo-800 to-neutral-900 text-white'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/80">
                {currentStep.phase === 'inhale'
                  ? language === 'tr'
                    ? 'İÇE ÇEK'
                    : 'INHALE'
                  : currentStep.phase === 'hold'
                  ? language === 'tr'
                    ? 'TUT'
                    : 'HOLD'
                  : language === 'tr'
                  ? 'SERBEST BIRAK'
                  : 'EXHALE'}
              </span>
              <span className="text-3xl font-black tracking-tight my-0.5">
                {secondsRemaining}s
              </span>
              <span className="text-[9px] text-white/90 font-medium">
                {t.cycleOf} {currentCycle}/3
              </span>
            </motion.div>
          </div>

          {/* Current Step Guidance Text Card */}
          <div className="mt-5 w-full text-center space-y-1.5 px-4">
            <h3 className="text-base font-bold text-neutral-950">
              {currentStep.name}
            </h3>
            <p className="text-xs text-neutral-700 leading-relaxed font-normal">
              {currentStep.guidanceText}
            </p>
            <span className="inline-block text-[11px] font-semibold text-neutral-500">
              ✦ {currentStep.subtext}
            </span>
          </div>
        </div>

        {/* Action Controls: Start/Pause, Reset, Voice Toggle */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            onClick={() => setVoiceGuidanceEnabled(!voiceGuidanceEnabled)}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              voiceGuidanceEnabled
                ? 'bg-white text-neutral-900 border-black/10 shadow-sm'
                : 'bg-neutral-200 text-neutral-500 border-transparent'
            }`}
            title={voiceGuidanceEnabled ? 'Sesli Rehber Açık' : 'Sesli Rehber Kapalı'}
          >
            {voiceGuidanceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <RippleButton
            platform={platform}
            onClick={handleStartPause}
            className={`flex-1 max-w-xs py-3.5 px-6 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
              isActive
                ? 'bg-neutral-900 text-white hover:bg-black'
                : 'bg-black text-white hover:bg-neutral-800'
            }`}
          >
            {isActive ? (
              <>
                <Pause size={16} />
                <span>{t.pauseBreathingBtn}</span>
              </>
            ) : (
              <>
                <Play size={16} fill="white" />
                <span>{t.startBreathingBtn}</span>
              </>
            )}
          </RippleButton>

          <button
            onClick={handleReset}
            className="p-3 rounded-full bg-white hover:bg-neutral-100 border border-black/10 text-neutral-700 transition-all cursor-pointer"
            title="Döngüyü Sıfırla"
          >
            <RotateCcw size={18} />
          </button>
        </div>

        {/* Step Forward / Backward Quick Navigation */}
        <div className="flex items-center justify-between px-2 pt-1 text-xs">
          <button
            onClick={() => goToStep(Math.max(0, currentStepIndex - 1))}
            disabled={currentStepIndex === 0}
            className="inline-flex items-center gap-1 text-neutral-600 hover:text-black disabled:opacity-30 disabled:pointer-events-none cursor-pointer font-semibold"
          >
            <ChevronLeft size={16} />
            <span>{t.prevStepBtn}</span>
          </button>

          <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
            {currentCycle === 1
              ? t.cycle1
              : currentCycle === 2
              ? t.cycle2
              : t.cycle3}
          </span>

          <button
            onClick={() => goToStep(Math.min(2, currentStepIndex + 1))}
            disabled={currentStepIndex === 2 && currentCycle === 3}
            className="inline-flex items-center gap-1 text-neutral-600 hover:text-black disabled:opacity-30 disabled:pointer-events-none cursor-pointer font-semibold"
          >
            <span>{t.nextStepBtn}</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Ancestral Release Decree & Ritual Closure Card */}
        <div className="p-4 rounded-3xl bg-[#EAE6DE] border border-black/10 text-left space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-700">
              {t.ritualDecree}
            </span>
            <Shield size={14} className="text-neutral-700" />
          </div>

          <p className="text-xs text-neutral-900 italic font-serif leading-relaxed">
            "{language === 'tr' ? activeProfile.ancestralDecreeTr : activeProfile.ancestralDecreeEn}"
          </p>

          <div className="p-3 rounded-2xl bg-white/70 text-xs text-neutral-800 space-y-1">
            <span className="font-bold text-[10px] uppercase tracking-wider text-neutral-500 block">
              ✦ {language === 'tr' ? 'Ruhsal Olumlama' : 'Spiritual Affirmation'}
            </span>
            <p className="font-medium">
              "{language === 'tr' ? activeProfile.affirmationTr : activeProfile.affirmationEn}"
            </p>
          </div>

          {isRitualCompleted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} className="text-emerald-700" />
              <span>{t.ritualCompleted}</span>
            </motion.div>
          ) : (
            <button
              onClick={() => {
                setIsRitualCompleted(true);
                setIsActive(false);
                soundEngine.playFairyDust();
                speakGuidance(
                  language === 'tr'
                    ? 'Ata karması ve bağları sevgiyle mühürlendi.'
                    : 'Ancestral karma and cords sealed in love.'
                );
              }}
              className="w-full py-2.5 px-4 rounded-2xl bg-neutral-900 hover:bg-black text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
            >
              <Sparkles size={14} className="text-amber-400" />
              <span>{t.finishRitualBtn}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
