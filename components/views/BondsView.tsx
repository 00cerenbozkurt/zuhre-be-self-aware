'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Sparkles,
  User,
  Heart,
  Users,
  RefreshCw,
  Edit3,
  Check,
  X,
  Shield,
  Compass,
  Shuffle
} from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { fetchGeminiReading, ReadingResult } from '../../lib/geminiFortuneService';
import { soundEngine } from '../../lib/soundEngine';
import { getTranslations, Language } from '../../lib/translations';
import tarotDeck from '../../app/data/tarotDeck.json';
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
  const t = getTranslations(language);

  // User Profile State (Zodiac + Tarot)
  const [userName, setUserName] = useState(language === 'tr' ? 'Sen' : 'You');
  const [userSign, setUserSign] = useState(language === 'tr' ? 'Terazi ♎' : 'Libra ♎');
  const [userRising, setUserRising] = useState(language === 'tr' ? 'Akrep ♏' : 'Scorpio ♏');
  const [userTarotCard, setUserTarotCard] = useState('The Lovers');

  // Partner Profile State (Zodiac + Tarot)
  const [partnerName, setPartnerName] = useState('Alex');
  const [partnerSign, setPartnerSign] = useState(language === 'tr' ? 'Koç ♈' : 'Aries ♈');
  const [partnerTarotCard, setPartnerTarotCard] = useState('The Emperor');
  
  // Connection Type
  const [connectionType, setConnectionType] = useState<'Romantic' | 'Friendship' | 'Karmic' | 'Family'>('Romantic');
  
  // UI Edit Modal / Expand State
  const [isEditingProfiles, setIsEditingProfiles] = useState(false);
  const [activeEditTab, setActiveEditTab] = useState<'you' | 'partner'>('partner');

  // Reading state
  const [bondsRemaining, setBondsRemaining] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [bondResult, setBondResult] = useState<ReadingResult | null>(null);

  // Quick Partner Presets with both Signs & Tarot Cards
  const PARTNER_PRESETS = [
    { name: 'Alex', sign: language === 'tr' ? 'Koç ♈' : 'Aries ♈', tarot: 'The Emperor' },
    { name: 'Maya', sign: language === 'tr' ? 'Akrep ♏' : 'Scorpio ♏', tarot: 'The High Priestess' },
    { name: 'Deniz', sign: language === 'tr' ? 'Boğa ♉' : 'Taurus ♉', tarot: 'The Empress' },
    { name: 'Can', sign: language === 'tr' ? 'Aslan ♌' : 'Leo ♌', tarot: 'Strength' },
  ];

  const handleApplyPreset = (preset: { name: string; sign: string; tarot: string }) => {
    soundEngine.playCardFlip();
    setPartnerName(preset.name);
    setPartnerSign(preset.sign);
    setPartnerTarotCard(preset.tarot);
  };

  const handleShuffleUserTarot = () => {
    soundEngine.playCardFlip();
    const random = tarotDeck[Math.floor(Math.random() * Math.min(22, tarotDeck.length))];
    setUserTarotCard(random.name);
  };

  const handleShufflePartnerTarot = () => {
    soundEngine.playCardFlip();
    const random = tarotDeck[Math.floor(Math.random() * Math.min(22, tarotDeck.length))];
    setPartnerTarotCard(random.name);
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
        question: `Run an in-depth ${connectionType.toLowerCase()} relationship dynamic and psychological bond between ${userName} (${userSign} & Tarot Archetype: ${userTarotCard}) and ${partnerName} (${partnerSign} & Tarot Archetype: ${partnerTarotCard}). Synthesize both their astrological elements and Tarot archetypes into a profound mirror reflection.`,
        userProfile: { name: userName, sunSign: `${userSign} (Tarot: ${userTarotCard})`, risingSign: userRising },
        partnerProfile: { name: partnerName, sunSign: `${partnerSign} (Tarot: ${partnerTarotCard})`, connectionType },
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

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between px-4 sm:px-6 pt-20 pb-36 transition-colors relative overflow-hidden">
      <div className="w-full max-w-sm mx-auto space-y-6 my-auto text-center relative z-10">
        
        {/* Top Interlocking Rings Icon */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-black" />
            <div className="w-8 h-8 rounded-full border-2 border-black" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950">
            {language === 'tr' ? 'İlişki Bağları' : 'Relationship Bonds'}
          </h1>
          <p className="text-xs leading-relaxed text-neutral-700 font-normal px-2 max-w-xs">
            {language === 'tr'
              ? 'Hem burçların elementel dengesini hem de çekilen Tarot arketiplerinin aralarındaki psikolojik aynayı incele.'
              : 'Analyze both astrological element chemistry and tarot archetypal dynamics between two souls.'}
          </p>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-neutral-200" />

        {/* Profile Circles & Ampersand */}
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
              title={language === 'tr' ? 'Burcunu ve Tarot Kartını Düzenle' : 'Edit Your Sign & Tarot Card'}
            >
              <span className="text-white font-black text-xl drop-shadow">
                {userName.charAt(0).toUpperCase()}
              </span>
              <span className="text-[10px] text-white/90 font-medium -mt-0.5">
                {userSign.split(' ')[1] || userSign.split(' ')[0]}
              </span>
            </button>
            <div className="mt-2 text-xs font-semibold text-neutral-900">
              <span>{userName}</span>
              <span className="text-neutral-500 text-[11px] block">({userSign.split(' ')[0]})</span>
            </div>
            <span className="mt-0.5 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
              ✦ {userTarotCard}
            </span>
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
              title={language === 'tr' ? 'Partner Burcunu ve Tarot Kartını Düzenle' : 'Edit Partner Sign & Tarot Card'}
            >
              <span className="text-neutral-900 font-black text-xl">
                {partnerName.charAt(0).toUpperCase()}
              </span>
              <span className="text-[10px] text-neutral-600 font-medium -mt-0.5">
                {partnerSign.split(' ')[1] || partnerSign.split(' ')[0]}
              </span>
            </button>
            <div className="mt-2 text-xs font-semibold text-neutral-900">
              <span>{partnerName}</span>
              <span className="text-neutral-500 text-[11px] block">({partnerSign.split(' ')[0]})</span>
            </div>
            <span className="mt-0.5 px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 text-[10px] font-bold">
              ✦ {partnerTarotCard}
            </span>
          </div>
        </div>

        {/* Quick Edit Profiles & Tarot Button */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <button
            onClick={() => {
              setIsEditingProfiles(!isEditingProfiles);
              soundEngine.playCardFlip();
            }}
            className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-[#F5F3EF] hover:bg-[#EAE6DE] border border-black/10 text-xs font-semibold text-neutral-800 transition-all cursor-pointer active:scale-95"
          >
            <Edit3 size={13} className="text-neutral-600" />
            <span>{language === 'tr' ? 'Burç ve Tarot Kartlarını Düzenle' : 'Edit Signs & Tarot Cards'}</span>
          </button>
        </div>

        {/* Expandable Configuration Drawer for BOTH Zodiac & Tarot */}
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
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeEditTab === 'you'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {userName}
                </button>
                <button
                  onClick={() => setActiveEditTab('partner')}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeEditTab === 'partner'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {partnerName}
                </button>
              </div>

              {/* Edit You Profile (Sign + Tarot) */}
              {activeEditTab === 'you' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                      {t.yourName}
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
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

                  {/* Tarot Card for You */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                        {language === 'tr' ? 'Senin Bağ Tarot Kartın' : 'Your Bond Tarot Card'}
                      </label>
                      <button
                        onClick={handleShuffleUserTarot}
                        className="text-[10px] text-amber-700 hover:text-amber-900 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Shuffle size={11} />
                        <span>{language === 'tr' ? 'Rastgele Çek' : 'Draw Random'}</span>
                      </button>
                    </div>
                    <select
                      value={userTarotCard}
                      onChange={(e) => setUserTarotCard(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none cursor-pointer"
                    >
                      {tarotDeck.slice(0, 22).map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.archetype})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Edit Partner Profile (Sign + Tarot) */}
              {activeEditTab === 'partner' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                      {t.partnerName}
                    </label>
                    <input
                      type="text"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {PARTNER_PRESETS.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => handleApplyPreset(p)}
                        className={`py-1 px-2.5 rounded-full text-[10px] font-semibold border transition-all cursor-pointer ${
                          partnerName === p.name
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-neutral-700 border-black/10 hover:bg-neutral-100'
                        }`}
                      >
                        {p.name} ({p.sign.split(' ')[0]} • {p.tarot})
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
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

                  {/* Tarot Card for Partner */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                        {language === 'tr' ? 'Partnerin Bağ Tarot Kartı' : 'Partner Bond Tarot Card'}
                      </label>
                      <button
                        onClick={handleShufflePartnerTarot}
                        className="text-[10px] text-amber-700 hover:text-amber-900 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Shuffle size={11} />
                        <span>{language === 'tr' ? 'Rastgele Çek' : 'Draw Random'}</span>
                      </button>
                    </div>
                    <select
                      value={partnerTarotCard}
                      onChange={(e) => setPartnerTarotCard(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-900 focus:outline-none cursor-pointer"
                    >
                      {tarotDeck.slice(0, 22).map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.archetype})
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

        {/* View Bond Action Pill Button */}
        <RippleButton
          platform={platform}
          onClick={handleRunBond}
          disabled={isLoading}
          className="w-full py-4 px-6 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm transition-all shadow-md active:scale-97 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <RefreshCw size={16} className="animate-spin" />
              <span>{t.analyzingDynamic}</span>
            </>
          ) : (
            <span>
              {language === 'tr'
                ? `${userName} & ${partnerName} Bağını İncele (Burç + Tarot)`
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
            {/* Header Badge: Dual Zodiac + Tarot Archetypes */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                {userSign.split(' ')[0]} ({userTarotCard}) • {partnerSign.split(' ')[0]} ({partnerTarotCard})
              </span>
              <Sparkles size={14} className="text-amber-500" />
            </div>

            <h3 className="text-lg font-extrabold text-neutral-950 leading-tight">
              {bondResult.headline}
            </h3>

            <p className="text-xs text-neutral-700 leading-relaxed">
              {bondResult.dailyVibe}
            </p>

            {bondResult.summary && (
              <div className="p-3 rounded-2xl bg-white/80 border border-black/5 text-xs text-neutral-900 font-medium leading-relaxed">
                <span className="text-[9px] uppercase font-bold text-amber-700 tracking-wider block mb-1">
                  {language === 'tr' ? '✦ BURÇ & TAROT İTTİFAK ANALİZİ' : '✦ ZODIAC & TAROT ALLIANCE'}
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
                  <div key={idx} className="p-2.5 rounded-xl bg-white/60 text-[11px] text-neutral-800 leading-snug">
                    {takeaway}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
