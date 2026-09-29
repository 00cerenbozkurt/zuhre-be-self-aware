'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  History,
  ChevronDown,
  ChevronUp,
  Eye,
  Search,
  BookOpen,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../../lib/platformTheme';
import { Language, getTranslations } from '../../lib/translations';
import { soundEngine } from '../../lib/soundEngine';
import {
  TAROT_HISTORICAL_PERIODS,
  TAROT_SECRET_INSIGHTS,
  TarotSymbolicInsight,
  TarotHistoricalPeriod
} from '../../lib/tarotEsotericHistory';
import RippleButton from '../RippleButton';

interface DiscoverViewProps {
  platform: PlatformStyle;
  language: Language;
  onOpenConsultation: () => void;
  onOpenInDepth: () => void;
}

export default function DiscoverView({
  platform,
  language,
  onOpenConsultation,
  onOpenInDepth,
}: DiscoverViewProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);

  const [activeTab, setActiveTab] = useState<'symbols' | 'history'>('symbols');
  const [selectedCard, setSelectedCard] = useState<TarotSymbolicInsight | null>(
    TAROT_SECRET_INSIGHTS[0] // Deli (The Fool)
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEraId, setExpandedEraId] = useState<string | null>('visconti');

  const filteredCards = TAROT_SECRET_INSIGHTS.filter((c) => {
    const name = language === 'tr' ? c.cardNameTr : c.cardNameEn;
    const archetype = language === 'tr' ? c.jungianArchetypeTr : c.jungianArchetypeEn;
    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      archetype.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.arcanaNumber.includes(searchQuery) ||
      c.element.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleCardSelect = (card: TarotSymbolicInsight) => {
    soundEngine.playCardFlip();
    setSelectedCard(card);
  };

  const handleToggleEra = (eraId: string) => {
    soundEngine.playCardFlip();
    setExpandedEraId((prev) => (prev === eraId ? null : eraId));
  };

  return (
    <div className="relative min-h-screen bg-[#0E0D12] text-neutral-100 flex flex-col justify-between px-4 sm:px-6 pt-20 pb-36 overflow-hidden">
      {/* Subtle Esoteric Nebula Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-600/10 via-purple-900/15 to-indigo-900/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-emerald-950/15 blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto space-y-5">
        {/* Header Title with Esoteric Badge */}
        <div className="space-y-1.5 text-center pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles size={12} className="text-amber-300" />
            <span>{language === 'tr' ? '22 BÜYÜK ARKANA & TAROT TARİHİ' : '22 MAJOR ARCANA & TAROT HISTORY'}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {language === 'tr' ? 'Tarot Sırları & Semboller' : 'Tarot Secrets & Symbols'}
          </h1>
          <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
            {language === 'tr'
              ? 'Tüm 22 Büyük Arkana kartının gizli sembollerini keşfet; bloklara dokunarak 600 yıllık tarihi derinlemesine oku.'
              : 'Discover the secret symbolisms of all 22 Major Arcana and tap historical eras for deep narratives.'}
          </p>
        </div>

        {/* Section Switcher Pill */}
        <div className="flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <button
            onClick={() => {
              soundEngine.playCardFlip();
              setActiveTab('symbols');
            }}
            className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'symbols'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Eye size={13} />
            <span>{language === 'tr' ? '22 Gizli Sembolik' : '22 Secret Symbols'}</span>
          </button>
          <button
            onClick={() => {
              soundEngine.playCardFlip();
              setActiveTab('history');
            }}
            className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'history'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <History size={13} />
            <span>{language === 'tr' ? 'Tarot’nun Tarihi' : 'History of Tarot'}</span>
          </button>
        </div>

        {/* TAB 1: Secret Symbols of All 22 Major Arcana */}
        {activeTab === 'symbols' && (
          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'tr'
                    ? '22 kart içinde ara (örn: Büyücü, Kule, Ay, Güç, 0, VIII)...'
                    : 'Search 22 cards (e.g. Magician, Tower, Moon, 0, VIII)...'
                }
                className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-400/50 transition-all"
              />
            </div>

            {/* Horizontal Mini Card Selector for All 22 Cards */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none snap-x no-scrollbar">
              {filteredCards.map((card) => {
                const isSelected = selectedCard?.cardId === card.cardId;
                return (
                  <button
                    key={card.cardId}
                    onClick={() => handleCardSelect(card)}
                    className={`px-3 py-2 rounded-2xl border text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer snap-start ${
                      isSelected
                        ? 'bg-amber-400/15 border-amber-300 text-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.2)]'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-bold text-amber-300">
                      {card.arcanaNumber}
                    </span>
                    <span>{language === 'tr' ? card.cardNameTr.split(' (')[0] : card.cardNameEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Selected Card Insight Sheet (No TTS as requested) */}
            {selectedCard && (
              <motion.div
                key={selectedCard.cardId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-3xl bg-[#16151D] border border-white/10 shadow-2xl space-y-4"
              >
                {/* Card Header & Badges */}
                <div className="flex items-start justify-between">
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                        ARKANA {selectedCard.arcanaNumber}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                        {selectedCard.element}
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold text-white mt-0.5">
                      {language === 'tr' ? selectedCard.cardNameTr : selectedCard.cardNameEn}
                    </h2>
                  </div>

                  <span className="text-sm font-bold px-2.5 py-1 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-200">
                    {selectedCard.kabbalahLetter}
                  </span>
                </div>

                {/* Jungian Archetype Banner */}
                <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-300/20 text-left">
                  <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                    {language === 'tr' ? '✦ Jungian Psikolojik Arketip' : '✦ Jungian Archetype'}
                  </div>
                  <p className="text-xs font-medium text-amber-100 mt-0.5">
                    {language === 'tr'
                      ? selectedCard.jungianArchetypeTr
                      : selectedCard.jungianArchetypeEn}
                  </p>
                </div>

                {/* Astrological & Kabbalistic Anchor */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-left">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase">
                      {language === 'tr' ? 'Astrolojik Bağ' : 'Astrological Link'}
                    </span>
                    <span className="text-neutral-200 font-semibold">
                      {selectedCard.zodiacAssociation}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-neutral-400 block text-[10px] uppercase">
                      {language === 'tr' ? 'Tarihsel Köken' : 'Historical Origin'}
                    </span>
                    <span className="text-neutral-300 font-medium text-[10px] leading-tight line-clamp-2">
                      {language === 'tr' ? selectedCard.historicalNoteTr : selectedCard.historicalNoteEn}
                    </span>
                  </div>
                </div>

                {/* Secret Symbols Breakdown */}
                <div className="space-y-2.5 pt-1 text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Eye size={13} className="text-amber-300" />
                    <span>{language === 'tr' ? 'Karttaki Gizli Sembolikler' : 'Hidden Symbolisms'}</span>
                  </div>

                  <div className="space-y-2">
                    {(language === 'tr'
                      ? selectedCard.secretSymbolsTr
                      : selectedCard.secretSymbolsEn
                    ).map((sym, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{sym.symbol}</span>
                        </h4>
                        <p className="text-[11px] text-neutral-300 leading-relaxed mt-1">
                          {sym.hiddenMeaning}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meditative Motto */}
                <div className="pt-2 border-t border-white/10 text-center">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    {language === 'tr' ? '✦ Öz Farkındalık Hatırlatıcısı' : '✦ Self-Awareness Mantra'}
                  </span>
                  <p className="text-xs italic text-neutral-300 mt-1 px-3">
                    "{language === 'tr' ? selectedCard.meditativeMottoTr : selectedCard.meditativeMottoEn}"
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* TAB 2: Historical Eras with Expandable Deep Stories */}
        {activeTab === 'history' && (
          <div className="space-y-4 text-left">
            <p className="text-xs text-neutral-400 px-1">
              {language === 'tr'
                ? 'İncelemek istediğin döneme tıkla; 15. yüzyıl saraylarından modern psikanalize uzanan hikaye ve ezoterik kırılmalar açılsın.'
                : 'Tap any era to expand its rich narrative, historical figures, and esoteric innovations.'}
            </p>

            <div className="space-y-3">
              {TAROT_HISTORICAL_PERIODS.map((period) => {
                const isExpanded = expandedEraId === period.id;

                return (
                  <motion.div
                    key={period.id}
                    layout
                    className={`rounded-3xl border transition-all overflow-hidden ${
                      isExpanded
                        ? 'bg-[#181622] border-amber-300/40 shadow-xl'
                        : 'bg-[#16151D] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Clickable Header Bar */}
                    <button
                      onClick={() => handleToggleEra(period.id)}
                      className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold tracking-wider uppercase">
                            {period.year}
                          </span>
                          <span className="text-[11px] text-neutral-400">
                            {language === 'tr' ? period.locationTr : period.locationEn}
                          </span>
                        </div>
                        <h3 className="text-base font-extrabold text-white">
                          {language === 'tr' ? period.titleTr : period.titleEn}
                        </h3>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors shrink-0">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>

                    {/* Short Description */}
                    {!isExpanded && (
                      <p className="px-4 pb-4 text-xs text-neutral-400 line-clamp-2">
                        {language === 'tr' ? period.descriptionTr : period.descriptionEn}
                      </p>
                    )}

                    {/* Expandable Deep Narrative Body */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-4 pb-5 space-y-4 border-t border-white/10 pt-3"
                        >
                          {/* Long Narrative Story */}
                          <div>
                            <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block mb-1">
                              {language === 'tr' ? '✦ Tarihsel Hikaye & Felsefe' : '✦ Historical Narrative'}
                            </span>
                            <p className="text-xs text-neutral-200 leading-relaxed font-normal">
                              {language === 'tr' ? period.longNarrativeTr : period.longNarrativeEn}
                            </p>
                          </div>

                          {/* Key Historical Figures */}
                          <div>
                            <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block mb-1.5">
                              {language === 'tr' ? 'Önemli Figürler & Ressamlar' : 'Prominent Figures'}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {period.prominentFigures.map((fig, idx) => (
                                <span
                                  key={idx}
                                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                                >
                                  {fig}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Esoteric Innovations */}
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
                            <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">
                              {language === 'tr' ? '✦ Bu Ekolün Ezoterik Mirası' : '✦ Esoteric Innovations'}
                            </span>
                            <ul className="space-y-1 text-xs text-neutral-300">
                              {(language === 'tr'
                                ? period.esotericInnovationsTr
                                : period.esotericInnovationsEn
                              ).map((inno, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-amber-400 font-bold">•</span>
                                  <span>{inno}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Consultation Shortcut */}
        <div className="pt-2">
          <RippleButton
            platform={platform}
            onClick={onOpenConsultation}
            className="w-full py-3.5 px-5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <Sparkles size={14} className="text-amber-600" />
            <span>
              {language === 'tr'
                ? 'Bu Kartlarla Kendi Açılımını Yap'
                : 'Consult Gemini with These Cards'}
            </span>
          </RippleButton>
        </div>
      </div>
    </div>
  );
}
