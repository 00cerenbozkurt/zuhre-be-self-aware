'use client';

import React, { useState } from 'react';
import {
  ChevronUp,
  ChevronDown,
  X,
  Play,
  Square,
  ChevronRight,
  Sparkles,
  Check,
  Edit3,
  User,
  Heart,
  Moon,
  Sun,
  Compass,
  Palette
} from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { getTranslations, Language } from '../../lib/translations';
import { soundEngine } from '../../lib/soundEngine';
import {
  ZODIAC_SIGNS,
  getZodiacSign,
  synthesizeDailyTarot,
} from '../../lib/tarotZodiacSynthesis';
import tarotDeck from '../../app/data/tarotDeck.json';
import RippleButton from '../RippleButton';

interface YouProfileViewProps {
  platform: PlatformStyle;
  language?: Language;
  dominantSign?: string;
  onSelectDominantSign?: (signId: string) => void;
  dailyCard?: typeof tarotDeck[0] | null;
  onOpenInDepth: () => void;
  onOpenConsultation: () => void;
  onOpenBonds: () => void;
  onOpenMeditation?: () => void;
}

export default function YouProfileView({
  platform,
  language = 'tr',
  dominantSign = 'libra',
  onSelectDominantSign,
  dailyCard = null,
  onOpenInDepth,
  onOpenConsultation,
  onOpenBonds,
  onOpenMeditation,
}: YouProfileViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);

  // Profile Customization State
  const [userName, setUserName] = useState('Ceren');
  const [userHandle, setUserHandle] = useState('@sornkaze');
  const [risingSign, setRisingSign] = useState('scorpio');
  const [moonSign, setMoonSign] = useState('pisces');
  const [soulTarotCard, setSoulTarotCard] = useState('The High Priestess');
  const [personalBio, setPersonalBio] = useState(
    language === 'tr'
      ? 'Kendi gölgemi kabul ediyor, içsel ışığımı ve sezgilerimi korkusuzca dinliyorum.'
      : 'Embracing my shadow and trusting the quiet voice of my intuition.'
  );
  const [avatarTheme, setAvatarTheme] = useState<'sunset' | 'indigo' | 'emerald' | 'lavender'>('sunset');

  // UI state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(true);
  const [isCardDismissed, setIsCardDismissed] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeSign = getZodiacSign(dominantSign);
  const activeRising = getZodiacSign(risingSign);
  const activeMoon = getZodiacSign(moonSign);
  const activeCard = dailyCard || tarotDeck[1]; // Default The Magician

  const synthesis = synthesizeDailyTarot(dominantSign, activeCard, language);

  const handleTogglePlayVoice = () => {
    if (isPlayingAudio) {
      soundEngine.stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      soundEngine.speakSoothing(
        synthesis.audioScript,
        language,
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(true)
      );
    }
  };

  const getAuraGradient = () => {
    switch (avatarTheme) {
      case 'indigo':
        return 'from-indigo-600 via-purple-600 to-slate-900';
      case 'emerald':
        return 'from-emerald-500 via-teal-600 to-slate-900';
      case 'lavender':
        return 'from-pink-400 via-purple-400 to-indigo-900';
      case 'sunset':
      default:
        return 'from-amber-400 via-orange-400 to-indigo-900';
    }
  };

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 pt-20 pb-36 transition-colors">
      <div className="max-w-sm mx-auto space-y-5">
        
        {/* Profile Card Header with Customizable Aura */}
        <div className="p-5 rounded-3xl bg-[#FAF8F5] border border-black/5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar Aura with Ripple */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-14 h-14 rounded-full border border-black/10 animate-celestial-ripple pointer-events-none" />
                <div
                  className={`w-14 h-14 rounded-full overflow-hidden border border-black/10 shadow-sm bg-gradient-to-b ${getAuraGradient()} flex items-center justify-center relative z-10`}
                >
                  <span className="text-white text-lg font-bold font-serif">
                    {userName.slice(0, 1).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Name & Handle */}
              <div className="text-left">
                <h2 className="text-base font-extrabold text-neutral-900 leading-tight">
                  {userName}
                </h2>
                <span className="text-xs text-neutral-500 font-medium block">
                  {userHandle}
                </span>
              </div>
            </div>

            {/* Profile Customization Action Button */}
            <button
              onClick={() => {
                soundEngine.playCardFlip();
                setIsEditingProfile(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Edit3 size={12} />
              <span>{language === 'tr' ? 'Profili Düzenle' : 'Edit Profile'}</span>
            </button>
          </div>

          {/* Personal Intention / Bio */}
          <p className="text-xs italic text-neutral-700 leading-relaxed text-left border-l-2 border-amber-400/60 pl-3">
            "{personalBio}"
          </p>

          {/* Three Sacred Anchors: Dominant Sign • Rising Sign • Moon Sign */}
          <div className="grid grid-cols-3 gap-1.5 text-center pt-1 border-t border-black/5">
            <div className="p-2 rounded-2xl bg-white border border-black/5">
              <span className="text-[9px] uppercase font-bold text-neutral-400 block">
                {language === 'tr' ? 'Baskın Burç' : 'Dominant'}
              </span>
              <span className="text-xs font-bold text-neutral-900 mt-0.5 block truncate">
                {activeSign.symbol} {language === 'tr' ? activeSign.nameTr : activeSign.nameEn}
              </span>
            </div>

            <div className="p-2 rounded-2xl bg-white border border-black/5">
              <span className="text-[9px] uppercase font-bold text-neutral-400 block">
                {language === 'tr' ? 'Yükselen' : 'Rising'}
              </span>
              <span className="text-xs font-bold text-neutral-900 mt-0.5 block truncate">
                {activeRising.symbol} {language === 'tr' ? activeRising.nameTr : activeRising.nameEn}
              </span>
            </div>

            <div className="p-2 rounded-2xl bg-white border border-black/5">
              <span className="text-[9px] uppercase font-bold text-neutral-400 block">
                {language === 'tr' ? 'Ay Burcu' : 'Moon'}
              </span>
              <span className="text-xs font-bold text-neutral-900 mt-0.5 block truncate">
                {activeMoon.symbol} {language === 'tr' ? activeMoon.nameTr : activeMoon.nameEn}
              </span>
            </div>
          </div>

          {/* Soul Tarot Card Archetype */}
          <div className="p-2.5 rounded-2xl bg-[#ECE7DC] border border-black/5 flex items-center justify-between text-left">
            <div>
              <span className="text-[9px] uppercase font-bold text-neutral-500 block">
                {language === 'tr' ? '✦ Ruh / Doğum Tarot Arketipin' : '✦ Soul Tarot Archetype'}
              </span>
              <span className="text-xs font-extrabold text-neutral-900">
                {soulTarotCard}
              </span>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-black/10 text-neutral-800">
              Arketip
            </span>
          </div>
        </div>

        {/* Action Buttons: Only real, functional shortcuts */}
        <div className="grid grid-cols-2 gap-2 text-left">
          {onOpenMeditation && (
            <RippleButton
              platform={platform}
              onClick={onOpenMeditation}
              className="p-3.5 rounded-2xl bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex flex-col justify-between shadow-xs cursor-pointer active:scale-98"
            >
              <Sparkles size={14} className="text-amber-300 mb-1" />
              <div>
                <span className="block font-bold text-sm">
                  {language === 'tr' ? 'Ata Karması' : 'Karma Ritual'}
                </span>
                <span className="text-[10px] text-neutral-300">
                  {language === 'tr' ? '3 Adımlı Nefes' : '3-Step Breath'}
                </span>
              </div>
            </RippleButton>
          )}

          <RippleButton
            platform={platform}
            onClick={onOpenBonds}
            className="p-3.5 rounded-2xl bg-white text-black border border-black/15 text-xs font-semibold hover:bg-neutral-50 transition-all flex flex-col justify-between shadow-xs cursor-pointer active:scale-98"
          >
            <Heart size={14} className="text-rose-500 mb-1" />
            <div>
              <span className="block font-bold text-sm">
                {language === 'tr' ? 'İlişki Bağları' : 'Relationship Bonds'}
              </span>
              <span className="text-[10px] text-neutral-500">
                {language === 'tr' ? 'Tarot & Burç Uyumu' : 'Tarot & Zodiac Match'}
              </span>
            </div>
          </RippleButton>
        </div>

        {/* Featured Daily Reading Card */}
        {!isCardDismissed && (
          <div className="p-5 rounded-3xl bg-[#ECE7DC] border border-black/5 shadow-sm space-y-3 transition-all text-left">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#1A73E8] text-white text-[11px] font-bold tracking-wide">
                {t.newBadge}
              </span>
              <div className="flex items-center gap-1 text-neutral-700">
                <button
                  onClick={() => setIsCardExpanded(!isCardExpanded)}
                  className="p-1 hover:text-black transition-colors cursor-pointer"
                >
                  {isCardExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <button
                  onClick={() => setIsCardDismissed(true)}
                  className="p-1 hover:text-black transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                {activeSign.nameTr.toUpperCase()} • {activeCard.name.toUpperCase()}
              </span>
              <h3 className="text-xl font-extrabold text-[#1B56D2] leading-tight">
                {language === 'tr'
                  ? `Sen ve İlişkilerin: ${activeSign.nameTr} & ${activeCard.name} Niteliklerin`
                  : `You & Your Relationships: ${activeSign.nameEn} & ${activeCard.name}`}
              </h3>
            </div>

            {isCardExpanded && (
              <div className="space-y-3 pt-1">
                <p className="text-xs text-neutral-800 leading-relaxed line-clamp-3">
                  {synthesis.editorialBody}
                </p>
                <div className="flex gap-2">
                  <RippleButton
                    platform={platform}
                    onClick={handleTogglePlayVoice}
                    className="py-2.5 px-5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Square size={10} className="fill-white" />
                        <span>{language === 'tr' ? 'Duraklat' : 'Pause'}</span>
                      </>
                    ) : (
                      <>
                        <Play size={12} className="fill-white" />
                        <span>{t.listenNow}</span>
                      </>
                    )}
                  </RippleButton>
                  <RippleButton
                    platform={platform}
                    onClick={onOpenInDepth}
                    className="py-2.5 px-4 rounded-full border border-black/20 text-black text-xs font-semibold hover:bg-black/5 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>{language === 'tr' ? 'Derin Bakış' : 'In-Depth'}</span>
                    <ChevronRight size={13} />
                  </RippleButton>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Profile Customization Modal */}
        {isEditingProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="w-full max-w-sm max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-5 border border-black/10 shadow-2xl space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <h3 className="text-base font-extrabold text-neutral-900">
                  {language === 'tr' ? 'Profili Özelleştir' : 'Customize Profile'}
                </h3>
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:text-black cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Name & Handle Input */}
              <div className="space-y-2">
                <div>
                  <label className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {language === 'tr' ? 'İsim' : 'Name'}
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-neutral-500 block">
                    {language === 'tr' ? 'Kullanıcı Adı' : 'Handle'}
                  </label>
                  <input
                    type="text"
                    value={userHandle}
                    onChange={(e) => setUserHandle(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Dominant Zodiac Sign Picker */}
              <div>
                <label className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                  {language === 'tr' ? 'Baskın Güneş Burcu' : 'Dominant Sun Sign'}
                </label>
                <div className="grid grid-cols-3 gap-1 max-h-32 overflow-y-auto no-scrollbar border border-neutral-200 rounded-xl p-1">
                  {ZODIAC_SIGNS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        if (onSelectDominantSign) onSelectDominantSign(s.id);
                      }}
                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        s.id === dominantSign
                          ? 'bg-black text-white'
                          : 'bg-neutral-50 text-neutral-800 hover:bg-neutral-100'
                      }`}
                    >
                      {s.symbol} {language === 'tr' ? s.nameTr : s.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rising Sign Picker */}
              <div>
                <label className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                  {language === 'tr' ? 'Yükselen Burç' : 'Rising Sign'}
                </label>
                <div className="grid grid-cols-3 gap-1 max-h-28 overflow-y-auto no-scrollbar border border-neutral-200 rounded-xl p-1">
                  {ZODIAC_SIGNS.map((s) => (
                    <button
                      key={`rising-${s.id}`}
                      onClick={() => setRisingSign(s.id)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        s.id === risingSign
                          ? 'bg-black text-white'
                          : 'bg-neutral-50 text-neutral-800 hover:bg-neutral-100'
                      }`}
                    >
                      {s.symbol} {language === 'tr' ? s.nameTr : s.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Moon Sign Picker */}
              <div>
                <label className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                  {language === 'tr' ? 'Ay Burcu' : 'Moon Sign'}
                </label>
                <div className="grid grid-cols-3 gap-1 max-h-28 overflow-y-auto no-scrollbar border border-neutral-200 rounded-xl p-1">
                  {ZODIAC_SIGNS.map((s) => (
                    <button
                      key={`moon-${s.id}`}
                      onClick={() => setMoonSign(s.id)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        s.id === moonSign
                          ? 'bg-black text-white'
                          : 'bg-neutral-50 text-neutral-800 hover:bg-neutral-100'
                      }`}
                    >
                      {s.symbol} {language === 'tr' ? s.nameTr : s.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Soul Tarot Card Selection */}
              <div>
                <label className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                  {language === 'tr' ? 'Ruh / Doğum Tarot Kartın' : 'Soul Tarot Card'}
                </label>
                <select
                  value={soulTarotCard}
                  onChange={(e) => setSoulTarotCard(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-900 focus:outline-none"
                >
                  {tarotDeck.slice(0, 22).map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.archetype})
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Bio / Intention */}
              <div>
                <label className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                  {language === 'tr' ? 'Kişisel Niyet / Biyografi' : 'Personal Intention / Bio'}
                </label>
                <textarea
                  rows={2}
                  value={personalBio}
                  onChange={(e) => setPersonalBio(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-black"
                />
              </div>

              {/* Avatar Aura Color */}
              <div>
                <label className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                  {language === 'tr' ? 'Aura Renk Teması' : 'Aura Color Theme'}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['sunset', 'indigo', 'emerald', 'lavender'] as const).map((aura) => (
                    <button
                      key={aura}
                      onClick={() => setAvatarTheme(aura)}
                      className={`h-8 rounded-xl border flex items-center justify-center cursor-pointer transition-all ${
                        avatarTheme === aura
                          ? 'border-black ring-2 ring-black/20'
                          : 'border-transparent'
                      } ${
                        aura === 'sunset'
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                          : aura === 'indigo'
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600'
                          : aura === 'emerald'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600'
                          : 'bg-gradient-to-r from-pink-400 to-indigo-500'
                      }`}
                    >
                      {avatarTheme === aura && <Check size={14} className="text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    soundEngine.playCrystalChime(720);
                    setIsEditingProfile(false);
                  }}
                  className="w-full py-3 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-all cursor-pointer shadow-md"
                >
                  {language === 'tr' ? 'Değişiklikleri Kaydet' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
