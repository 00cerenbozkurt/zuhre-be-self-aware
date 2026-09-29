'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, User, Heart, Users, RefreshCw, Edit3, Check, X, Shield, Compass } from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { fetchGeminiReading, ReadingResult } from '../../lib/geminiFortuneService';
import { soundEngine } from '../../lib/soundEngine';
import { TRANSLATIONS, Language } from '../../lib/translations';
import RippleButton from '../RippleButton';

interface BondsViewProps {
  platform: PlatformStyle;
  onOpenSubscription: () => void;
  language?: Language;
}

export const ZODIAC_SIGNS = [
  { id: 'aries', nameTr: 'Koç ♈', nameEn: 'Aries ♈', symbol: '♈', element: 'Ateş' },
  { id: 'taurus', nameTr: 'Boğa ♉', nameEn: 'Taurus ♉', symbol: '♉', element: 'Toprak' },
  { id: 'gemini', nameTr: 'İkizler ♊', nameEn: 'Gemini ♊', symbol: '♊', element: 'Hava' },
  { id: 'cancer', nameTr: 'Yengeç ♋', nameEn: 'Cancer ♋', symbol: '♋', element: 'Su' },
  { id: 'leo', nameTr: 'Aslan ♌', nameEn: 'Leo ♌', symbol: '♌', element: 'Ateş' },
  { id: 'virgo', nameTr: 'Başak ♍', nameEn: 'Virgo ♍', symbol: '♍', element: 'Toprak' },
  { id: 'libra', nameTr: 'Terazi ♎', nameEn: 'Libra ♎', symbol: '♎', element: 'Hava' },
  { id: 'scorpio', nameTr: 'Akrep ♏', nameEn: 'Scorpio ♏', symbol: '♏', element: 'Su' },
  { id: 'sagittarius', nameTr: 'Yay ♐', nameEn: 'Sagittarius ♐', symbol: '♐', element: 'Ateş' },
  { id: 'capricorn', nameTr: 'Oğlak ♑', nameEn: 'Capricorn ♑', symbol: '♑', element: 'Toprak' },
  { id: 'aquarius', nameTr: 'Kova ♒', nameEn: 'Aquarius ♒', symbol: '♒', element: 'Hava' },
  { id: 'pisces', nameTr: 'Balık ♓', nameEn: 'Pisces ♓', symbol: '♓', element: 'Su' },
];

export default function BondsView({
  platform,
  onOpenSubscription,
  language = 'tr',
}: BondsViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = TRANSLATIONS[language];

  // User Profile State
  const [userName, setUserName] = useState(language === 'tr' ? 'Sen' : 'You');
  const [userSign, setUserSign] = useState(language === 'tr' ? 'Terazi ♎' : 'Libra ♎');
  const [userRising, setUserRising] = useState(language === 'tr' ? 'Akrep ♏' : 'Scorpio ♏');

  // Partner Profile State
  const [partnerName, setPartnerName] = useState('Alex');
  const [partnerSign, setPartnerSign] = useState(language === 'tr' ? 'Koç ♈' : 'Aries ♈');
  
  // Connection Type
  const [connectionType, setConnectionType] = useState<'Romantic' | 'Friendship' | 'Karmic' | 'Family'>('Romantic');
  
  // UI Edit Modal / Expand State
  const [isEditingProfiles, setIsEditingProfiles] = useState(false);
  const [activeEditTab, setActiveEditTab] = useState<'you' | 'partner'>('partner');

  // Reading state
  const [bondsRemaining, setBondsRemaining] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [bondResult, setBondResult] = useState<ReadingResult | null>(null);

  // Quick Partner Presets
  const PARTNER_PRESETS = [
    { name: 'Alex', sign: language === 'tr' ? 'Koç ♈' : 'Aries ♈' },
    { name: 'Maya', sign: language === 'tr' ? 'Akrep ♏' : 'Scorpio ♏' },
    { name: 'Deniz', sign: language === 'tr' ? 'Boğa ♉' : 'Taurus ♉' },
    { name: 'Can', sign: language === 'tr' ? 'Aslan ♌' : 'Leo ♌' },
  ];

  const handleApplyPreset = (preset: { name: string; sign: string }) => {
    soundEngine.playCardFlip();
    setPartnerName(preset.name);
    setPartnerSign(preset.sign);
  };

  const handleRunBond = async () => {
    if (bondsRemaining <= 0) {
      onOpenSubscription();
      return;
    }

    setIsLoading(true);
    soundEngine.playCardFlip();

    try {
      const result = await fetchGeminiReading({
        theme: 'bond',
        question: `Run an in-depth ${connectionType.toLowerCase()} relationship dynamic and psychological bond between ${userName} (${userSign}) and ${partnerName} (${partnerSign})`,
        userProfile: { name: userName, sunSign: userSign, risingSign: userRising },
        partnerProfile: { name: partnerName, sunSign: partnerSign, connectionType },
        language,
      });

      setBondResult(result);
      setBondsRemaining(prev => Math.max(0, prev - 1));
      soundEngine.playCrystalChime(600);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getConnectionTypeLabel = () => {
    switch (connectionType) {
      case 'Romantic':
        return t.romanticConnection;
      case 'Friendship':
        return t.friendshipConnection;
      case 'Karmic':
        return t.karmicConnection;
      case 'Family':
        return t.familyConnection;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between px-6 pt-20 pb-32 transition-colors relative overflow-hidden">
      <div className="w-full max-w-sm mx-auto space-y-6 my-auto text-center relative z-10">
        {/* Top Interlocking Rings Icon */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-black" />
            <div className="w-8 h-8 rounded-full border-2 border-black" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950">
            {t.bondsTitle}
          </h1>
          <p className="text-sm leading-relaxed text-neutral-800 font-normal px-4 max-w-xs">
            {t.bondsSubtitle}
          </p>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-neutral-200" />

        {/* Profile Circles & Ampersand with Intersecting Cosmic Ripples */}
        <div className="relative flex items-center justify-center gap-6 py-2">
          {/* Subtle Ambient Resonance Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 rounded-full border border-amber-500/15 animate-celestial-ripple" />
            <div className="w-56 h-56 rounded-full border border-indigo-500/10 animate-celestial-ripple-delayed-1" />
          </div>

          {/* Left: You Profile Circle */}
          <div className="relative flex flex-col items-center z-10 group">
            <div className="absolute w-20 h-20 rounded-full border border-amber-400/30 animate-celestial-ripple pointer-events-none" />
            <button
              onClick={() => {
                setActiveEditTab('you');
                setIsEditingProfiles(true);
                soundEngine.playCardFlip();
              }}
              className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-b from-amber-400 via-orange-300 to-indigo-900 flex flex-col items-center justify-center relative z-10 cursor-pointer active:scale-95 transition-transform"
              title={language === 'tr' ? 'Profilini ve Burcunu Düzenle' : 'Edit Your Profile & Sign'}
            >
              <span className="text-white font-black text-xl drop-shadow">
                {userName.charAt(0).toUpperCase()}
              </span>
              <span className="text-[10px] text-white/90 font-medium -mt-0.5">
                {userSign.split(' ')[1] || userSign.split(' ')[0]}
              </span>
            </button>
            <div className="mt-2 text-xs font-semibold text-neutral-900 flex items-center gap-1">
              <span>{userName}</span>
              <span className="text-neutral-500 text-[11px]">({userSign.split(' ')[0]})</span>
            </div>
          </div>

          <span className="text-2xl font-light text-neutral-400 z-10">&</span>

          {/* Right: Partner Profile Circle */}
          <div className="relative flex flex-col items-center z-10 group">
            <div className="absolute w-20 h-20 rounded-full border border-neutral-400/30 animate-celestial-ripple-delayed-1 pointer-events-none" />
            <button
              onClick={() => {
                setActiveEditTab('partner');
                setIsEditingProfiles(true);
                soundEngine.playCardFlip();
              }}
              className="w-20 h-20 rounded-full bg-[#EAE8E4] hover:bg-[#E0DDD8] border-2 border-white shadow-inner flex flex-col items-center justify-center text-neutral-800 relative z-10 cursor-pointer active:scale-95 transition-transform"
              title={language === 'tr' ? 'Partner Adı ve Burcunu Düzenle' : 'Edit Partner Name & Sign'}
            >
              <span className="text-neutral-900 font-black text-xl">
                {partnerName.charAt(0).toUpperCase()}
              </span>
              <span className="text-[10px] text-neutral-600 font-medium -mt-0.5">
                {partnerSign.split(' ')[1] || partnerSign.split(' ')[0]}
              </span>
            </button>
            <div className="mt-2 text-xs font-semibold text-neutral-900 flex items-center gap-1">
              <span>{partnerName}</span>
              <span className="text-neutral-500 text-[11px]">({partnerSign.split(' ')[0]})</span>
            </div>
          </div>
        </div>

        {/* Quick Edit Pills Bar */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <button
            onClick={() => {
              setIsEditingProfiles(!isEditingProfiles);
              soundEngine.playCardFlip();
            }}
            className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-[#F5F3EF] hover:bg-[#EAE6DE] border border-black/5 text-[11px] font-semibold text-neutral-800 transition-all cursor-pointer active:scale-95"
          >
            <Edit3 size={12} className="text-neutral-600" />
            <span>{t.editProfiles}</span>
          </button>
        </div>

        {/* Expandable Name & Zodiac Configuration Drawer */}
        <AnimatePresence>
          {isEditingProfiles && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.96 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.96 }}
              className="overflow-hidden p-4 rounded-3xl bg-[#F7F5F0] border border-black/10 text-left shadow-lg space-y-4"
            >
              {/* Tab Selector: Sen / Partner */}
              <div className="flex items-center rounded-2xl bg-black/5 p-1">
                <button
                  onClick={() => setActiveEditTab('you')}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeEditTab === 'you'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {userName} ({t.yourSign.split(' ')[0]})
                </button>
                <button
                  onClick={() => setActiveEditTab('partner')}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeEditTab === 'partner'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {partnerName} ({t.partnerSign.split(' ')[0]})
                </button>
              </div>

              {/* Edit You Profile */}
              {activeEditTab === 'you' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1">
                      {t.yourName}
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder={language === 'tr' ? 'Kendi adını yaz...' : 'Your name...'}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1">
                      {t.yourSign}
                    </label>
                    <select
                      value={userSign}
                      onChange={(e) => setUserSign(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none cursor-pointer"
                    >
                      {ZODIAC_SIGNS.map((z) => (
                        <option key={z.id} value={language === 'tr' ? z.nameTr : z.nameEn}>
                          {language === 'tr' ? z.nameTr : z.nameEn} ({z.element})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Edit Partner Profile */}
              {activeEditTab === 'partner' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1">
                      {t.partnerName}
                    </label>
                    <input
                      type="text"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      placeholder={t.enterPartnerName}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {PARTNER_PRESETS.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => handleApplyPreset(p)}
                        className={`py-1 px-2.5 rounded-full text-[10px] font-semibold border transition-all ${
                          partnerName === p.name
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-neutral-700 border-black/10 hover:bg-neutral-100'
                        }`}
                      >
                        {p.name} ({p.sign.split(' ')[0]})
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1">
                      {t.partnerSign}
                    </label>
                    <select
                      value={partnerSign}
                      onChange={(e) => setPartnerSign(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none cursor-pointer"
                    >
                      {ZODIAC_SIGNS.map((z) => (
                        <option key={z.id} value={language === 'tr' ? z.nameTr : z.nameEn}>
                          {language === 'tr' ? z.nameTr : z.nameEn} ({z.element})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Save / Close Drawer */}
              <div className="pt-1 flex items-center justify-end">
                <button
                  onClick={() => {
                    setIsEditingProfiles(false);
                    soundEngine.playCardFlip();
                  }}
                  className="py-1.5 px-4 rounded-full bg-black text-white text-xs font-bold inline-flex items-center gap-1.5 hover:bg-neutral-800 cursor-pointer active:scale-95"
                >
                  <Check size={13} />
                  <span>{t.saveProfiles}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dropdown Pickers Row (You & Partner Quick Pill Bar) */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setActiveEditTab('you');
              setIsEditingProfiles(true);
              soundEngine.playCardFlip();
            }}
            className="py-2.5 px-3.5 rounded-full bg-[#EAE8E4] hover:bg-[#E2DFD8] text-xs font-semibold text-neutral-900 flex items-center justify-between shadow-sm cursor-pointer transition-all"
          >
            <span className="truncate">{userName} ({userSign.split(' ')[0]})</span>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 ml-1" />
          </button>

          <button
            onClick={() => {
              setActiveEditTab('partner');
              setIsEditingProfiles(true);
              soundEngine.playCardFlip();
            }}
            className="py-2.5 px-3.5 rounded-full bg-[#EAE8E4] hover:bg-[#E2DFD8] text-xs font-semibold text-neutral-900 flex items-center justify-between shadow-sm cursor-pointer transition-all"
          >
            <span className="truncate">{partnerName} ({partnerSign.split(' ')[0]})</span>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 ml-1" />
          </button>
        </div>

        {/* Connection Type Selector Pill */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {(['Romantic', 'Friendship', 'Karmic', 'Family'] as const).map((type) => {
            const isActive = connectionType === type;
            let label = t.romanticConnection;
            if (type === 'Friendship') label = t.friendshipConnection;
            if (type === 'Karmic') label = t.karmicConnection;
            if (type === 'Family') label = t.familyConnection;

            return (
              <button
                key={type}
                onClick={() => {
                  setConnectionType(type);
                  soundEngine.playCardFlip();
                }}
                className={`py-1.5 px-3 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-[#F5F3EF] hover:bg-[#ECE8E0] text-neutral-700'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* View Bond Action Pill Button with Dynamic Ripple */}
        <RippleButton
          platform={platform}
          onClick={handleRunBond}
          disabled={isLoading}
          className="w-full py-4 px-6 rounded-full bg-[#757579] hover:bg-black text-white font-semibold text-base transition-all shadow-md active:scale-97 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <RefreshCw size={16} className="animate-spin" />
              <span>{t.analyzingDynamic}</span>
            </>
          ) : (
            <span>
              {language === 'tr'
                ? `${userName} & ${partnerName} Bağını İncele`
                : `View Bond: ${userName} & ${partnerName}`}
            </span>
          )}
        </RippleButton>

        {/* Bonds Remaining Info */}
        <div className="space-y-1 pt-1">
          <p className="text-xs font-bold text-neutral-900">
            {bondsRemaining} {t.bondsRemainingText}
          </p>
          <button
            onClick={onOpenSubscription}
            className="text-xs font-semibold text-neutral-900 underline hover:text-black cursor-pointer"
          >
            {t.viewRecentOrUnlimited}
          </button>
        </div>

        {/* Dynamic Bond Result Modal/Card */}
        {bondResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-5 rounded-3xl bg-[#F5F2EB] border border-black/10 text-left space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                {bondResult.subtitle || `${userName} (${userSign}) & ${partnerName} (${partnerSign})`}
              </span>
              <Sparkles size={14} className="text-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-neutral-950">
              {bondResult.headline}
            </h3>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {bondResult.dailyVibe}
            </p>
            {bondResult.summary && (
              <div className="p-3 rounded-2xl bg-white/70 border border-black/5 text-xs text-neutral-900 font-medium leading-relaxed">
                <span className="text-[9px] uppercase font-bold text-neutral-500 tracking-wider block mb-1">
                  {language === 'tr' ? '✦ BAĞ ÖZETİ & ANA DİNAMİK' : '✦ BOND SUMMARY & CORE DYNAMIC'}
                </span>
                {bondResult.summary}
              </div>
            )}
            {bondResult.keyTakeaways && bondResult.keyTakeaways.length > 0 && (
              <div className="space-y-1.5 pt-1">
                <span className="text-[9px] uppercase font-bold text-neutral-500 tracking-wider block">
                  {language === 'tr' ? '✦ İLİŞKİ DİNAMİĞİ ÇIKARIMLARI' : '✦ RELATIONSHIP TAKEAWAYS'}
                </span>
                {bondResult.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-white/50 text-[11px] text-neutral-800 leading-snug">
                    {takeaway}
                  </div>
                ))}
              </div>
            )}
            <div className="text-[11px] text-neutral-600 space-y-2 border-t border-black/5 pt-2">
              <p>{bondResult.fullInsight.split('\n\n')[0]}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
