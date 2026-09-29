'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Sparkles, ShieldCheck, HeartHandshake, Headphones, Orbit } from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../lib/platformTheme';
import { soundEngine } from '../lib/soundEngine';
import { TRANSLATIONS, Language } from '../lib/translations';

interface SubscriptionPaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: PlatformStyle;
  onSubscribeSuccess: () => void;
  language?: Language;
}

export default function SubscriptionPaywallModal({
  isOpen,
  onClose,
  platform,
  onSubscribeSuccess,
  language = 'tr',
}: SubscriptionPaywallModalProps) {
  const classes = getAdaptiveClasses(platform);
  const t = TRANSLATIONS[language];
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = () => {
    setIsProcessing(true);
    soundEngine.playCardFlip();

    setTimeout(() => {
      soundEngine.playCrystalChime(720);
      setIsProcessing(false);
      onSubscribeSuccess();
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={`w-full max-w-md max-h-[92vh] overflow-y-auto ${
          platform === 'ios-liquid-glass'
            ? 'bg-[#14131A]/95 border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.85)] backdrop-blur-2xl rounded-3xl'
            : 'bg-[#181620] border border-white/10 rounded-[28px] shadow-2xl'
        } p-6 text-neutral-100 flex flex-col relative`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer z-10"
        >
          <X size={16} />
        </button>

        {/* Top Vignette / Badge */}
        <div className="text-center pt-3 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[11px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={12} className="text-amber-300" />
            <span>{t.paywallBadge}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {t.paywallTitle}
          </h2>
          <p className="text-xs text-neutral-400 max-w-xs mx-auto mt-2 leading-relaxed">
            {t.paywallDesc}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 my-4 py-2 border-y border-white/10">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-full bg-white/10 text-amber-300 flex-shrink-0 mt-0.5">
              <Sparkles size={14} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">{t.feature1Title}</h4>
              <p className="text-[11px] text-neutral-400">{t.feature1Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-full bg-white/10 text-amber-300 flex-shrink-0 mt-0.5">
              <HeartHandshake size={14} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">{t.feature2Title}</h4>
              <p className="text-[11px] text-neutral-400">{t.feature2Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-full bg-white/10 text-amber-300 flex-shrink-0 mt-0.5">
              <Headphones size={14} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">{t.feature3Title}</h4>
              <p className="text-[11px] text-neutral-400">{t.feature3Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-full bg-white/10 text-amber-300 flex-shrink-0 mt-0.5">
              <Orbit size={14} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">{t.feature4Title}</h4>
              <p className="text-[11px] text-neutral-400">{t.feature4Desc}</p>
            </div>
          </div>
        </div>

        {/* Plan Selectors */}
        <div className="grid grid-cols-2 gap-3 my-3">
          {/* Annual Plan */}
          <div
            onClick={() => setSelectedPlan('annual')}
            className={`p-3.5 rounded-2xl border cursor-pointer transition-all relative ${
              selectedPlan === 'annual'
                ? 'border-amber-300 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <span className="absolute -top-2.5 right-2 px-2 py-0.5 rounded-full bg-amber-300 text-black text-[9px] font-bold uppercase tracking-wider">
              {t.save50}
            </span>
            <div className="text-xs font-semibold text-white">{t.annualPlan}</div>
            <div className="text-lg font-bold text-amber-200 mt-0.5">$39.99</div>
            <div className="text-[10px] text-neutral-400">{language === 'tr' ? '$3.33 / ay' : '$3.33 / month'}</div>
            <div className="text-[10px] text-amber-300/90 font-medium mt-1">{t.freeTrialText}</div>
          </div>

          {/* Monthly Plan */}
          <div
            onClick={() => setSelectedPlan('monthly')}
            className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
              selectedPlan === 'monthly'
                ? 'border-amber-300 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="text-xs font-semibold text-white">{t.monthlyPlan}</div>
            <div className="text-lg font-bold text-neutral-200 mt-0.5">$6.99</div>
            <div className="text-[10px] text-neutral-400">{language === 'tr' ? 'Aylık faturalandırılır' : 'Billed monthly'}</div>
            <div className="text-[10px] text-neutral-400 font-medium mt-1">{t.cancelAnytime}</div>
          </div>
        </div>

        {/* Subscribe Action Button */}
        <button
          onClick={handleSubscribe}
          disabled={isProcessing}
          className={`w-full ${classes.actionBtn} mt-2 flex items-center justify-center gap-2 cursor-pointer text-sm`}
        >
          <Sparkles size={16} />
          <span>
            {isProcessing
              ? (language === 'tr' ? 'StoreKit Bağlanıyor...' : 'Connecting to StoreKit...')
              : t.startTrialBtn}
          </span>
        </button>

        {/* Safe Sandbox notice */}
        <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-neutral-400">
          <ShieldCheck size={12} className="text-emerald-400" />
          <span>{t.sandboxNotice}</span>
        </div>
      </motion.div>
    </div>
  );
}
