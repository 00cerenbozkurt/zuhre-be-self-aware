import React, { useState } from 'react';
import { Bell, MoreHorizontal, ChevronUp, ChevronDown, X, Play, ChevronRight, Disc, Sparkles } from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { getTranslations, Language } from '../../lib/translations';

import RippleButton from '../RippleButton';

interface YouProfileViewProps {
  platform: PlatformStyle;
  onOpenInDepth: () => void;
  onOpenConsultation: () => void;
  onOpenBonds: () => void;
  onOpenMeditation?: () => void;
  language?: Language;
}

export default function YouProfileView({
  platform,
  onOpenInDepth,
  onOpenConsultation,
  onOpenBonds,
  onOpenMeditation,
  language = 'tr',
}: YouProfileViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);
  const [isCardExpanded, setIsCardExpanded] = useState(true);
  const [isCardDismissed, setIsCardDismissed] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black px-6 pt-18 pb-32 transition-colors">
      <div className="max-w-sm mx-auto space-y-5">
        {/* Top Profile Header with Ambient Avatar Ripple (Exact Match to Screenshot 5) */}
        <div className="flex items-center justify-between pt-2">
          {/* Avatar & Handle with Ripple Aura */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 rounded-full border border-amber-500/25 animate-celestial-ripple pointer-events-none" />
              <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 shadow-sm bg-gradient-to-b from-amber-400 via-orange-300 to-indigo-900 flex items-center justify-center relative z-10">
                <div className="w-full h-[1px] bg-white/40 mt-2" />
              </div>
            </div>
            <span className="text-sm font-semibold text-neutral-900">
              @sornkaze
            </span>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 text-neutral-800">
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Disc size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Catchphrase */}
        <p className="text-base font-medium text-neutral-900 leading-snug">
          {t.profileLibraryQuote}
        </p>

        {/* Profile Pill Buttons Row with Touch Ripples */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {onOpenMeditation && (
            <RippleButton
              platform={platform}
              onClick={onOpenMeditation}
              className="py-2.5 px-4 rounded-full bg-neutral-900 text-white text-xs font-semibold whitespace-nowrap hover:bg-black active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles size={12} className="text-amber-400" />
              <span>{language === 'tr' ? 'Ata Karması Meditasyonu' : 'Ancestral Meditation'}</span>
            </RippleButton>
          )}
          <RippleButton
            platform={platform}
            onClick={onOpenBonds}
            className="py-2.5 px-4 rounded-full bg-black text-white text-xs font-semibold whitespace-nowrap hover:bg-neutral-800 active:scale-95 transition-all"
          >
            {t.viewFriends}
          </RippleButton>
          <RippleButton
            platform={platform}
            onClick={onOpenBonds}
            className="py-2.5 px-4 rounded-full bg-black text-white text-xs font-semibold whitespace-nowrap hover:bg-neutral-800 active:scale-95 transition-all"
          >
            {t.runBond}
          </RippleButton>
          <RippleButton
            platform={platform}
            onClick={onOpenConsultation}
            className="py-2.5 px-4 rounded-full bg-black text-white text-xs font-semibold whitespace-nowrap hover:bg-neutral-800 active:scale-95 transition-all"
          >
            {t.addCustomFriend}
          </RippleButton>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-neutral-200" />

        {/* Featured "New" Collapsible Card (Exact Match to Screenshot 5) */}
        {!isCardDismissed && (
          <div className="p-5 rounded-3xl bg-[#ECE7DC] border border-black/5 shadow-sm space-y-3 transition-all">
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                {t.inDepthSubtitle}
              </span>
              <h3 className="text-xl font-extrabold text-[#1B56D2] leading-tight">
                {t.inDepthHeadline}
              </h3>
            </div>

            {isCardExpanded && (
              <div className="space-y-3 pt-1">
                <p className="text-xs text-neutral-800 leading-relaxed line-clamp-3">
                  {t.inDepthSummary1}
                </p>
                <RippleButton
                  platform={platform}
                  onClick={onOpenInDepth}
                  className="py-2.5 px-5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Play size={12} className="fill-white" />
                  <span>{t.listenNow}</span>
                </RippleButton>
              </div>
            )}
          </div>
        )}

        {/* Section Heading: "Your Transits >" */}
        <div className="pt-2 space-y-1">
          <div
            onClick={onOpenConsultation}
            className="flex items-center gap-1 cursor-pointer group"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950 group-hover:text-amber-700 transition-colors">
              {t.yourTransitsTitle}
            </h2>
            <ChevronRight size={20} className="text-neutral-900 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-neutral-600 font-medium">
            {t.transitsSubtitle}
          </p>
        </div>

        {/* Horizontal Carousel of Transit Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none">
          {/* Card 1: Housecleaning */}
          <div className="min-w-[270px] max-w-[280px] p-4 rounded-3xl bg-[#ECE7DC] border border-black/5 flex flex-col justify-between space-y-4 shadow-sm snap-start">
            <div className="flex items-start justify-between">
              {/* Circular Meter (5 months left) */}
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-neutral-400" />
                <div className="absolute inset-0 rounded-full border-2 border-t-[#00897B] border-r-[#00897B] border-transparent" />
                <div className="text-center">
                  <span className="text-sm font-bold text-neutral-900 block leading-none">5</span>
                  <span className="text-[8px] text-neutral-600 uppercase font-semibold">{t.monthsLeft}</span>
                </div>
              </div>

              {/* Astrological Glyphs Pill */}
              <div className="px-2.5 py-1 rounded-lg bg-[#00897B] text-white text-xs font-bold tracking-widest flex items-center gap-1">
                <span>☊</span>
                <span>♂</span>
                <span>♄</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#00897B]">
                {language === 'tr' ? 'Arınma & Sadeleşme' : 'Housecleaning'}
              </h4>
              <p className="text-[11px] font-semibold text-neutral-600 mt-0.5">
                {language === 'tr' ? '6 EYL 2026 – 8 MAR 2027' : '6 SEP 2026 – 8 MAR 2027'}
              </p>
              <p className="text-xs font-bold text-neutral-900 mt-1">
                {language === 'tr' ? '55 gün içinde zirvede' : 'Peaking in 55 days'}
              </p>
            </div>
          </div>

          {/* Card 2: Upcoming Cycle */}
          <div className="min-w-[270px] max-w-[280px] p-4 rounded-3xl bg-[#ECE7DC] border border-black/5 flex flex-col justify-between space-y-4 shadow-sm snap-start">
            <div className="flex items-start justify-between">
              {/* Circular Meter (in 4 months) */}
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dotted border-neutral-400" />
                <div className="text-center">
                  <span className="text-[8px] text-neutral-600 block uppercase font-medium">{language === 'tr' ? '' : 'in'}</span>
                  <span className="text-sm font-bold text-neutral-900 block leading-none">4</span>
                  <span className="text-[8px] text-neutral-600 uppercase font-semibold">{language === 'tr' ? 'ay sonra' : 'months'}</span>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-lg bg-neutral-800 text-white text-xs font-bold tracking-widest flex items-center gap-1">
                <span>☿</span>
                <span>♃</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-neutral-800">
                {language === 'tr' ? 'Zihinsel Berraklık & Hakikat' : 'Mental Clarity & Truth'}
              </h4>
              <p className="text-[11px] font-semibold text-neutral-600 mt-0.5">
                {language === 'tr' ? '14 OCA 2027 – 20 HAZ 2027' : '14 JAN 2027 – 20 JUN 2027'}
              </p>
              <p className="text-xs font-bold text-neutral-900 mt-1">
                {language === 'tr' ? '130 gün içinde zirvede' : 'Peaking in 130 days'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
