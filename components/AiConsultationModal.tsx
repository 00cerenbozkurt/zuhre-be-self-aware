'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowLeft, 
  Sparkles, 
  Wand2, 
  ChevronRight, 
  Play, 
  Square, 
  CheckCircle2, 
  Eye, 
  Compass, 
  Moon, 
  Sun,
  RefreshCw,
  BookOpen,
  Copy,
  Check
} from 'lucide-react';
import tarotDeck from '../app/data/tarotDeck.json';
import { soundEngine } from '../lib/soundEngine';
import { PlatformStyle, getAdaptiveClasses } from '../lib/platformTheme';
import { fetchGeminiReading, ReadingResult } from '../lib/geminiFortuneService';
import { getTranslations, Language } from '../lib/translations';
import RippleButton from './RippleButton';

const DEFAULT_TAKEAWAYS_TR = [
  "Bilinçdışı Kalıp: Eski kalıpların ve geçmişten devralınan zırhların çözülme süreci.",
  "Ruhsal Fırsat: Kontrol çabasından sıyrılarak sezgisel akışa ve kalbin sesine güvenmek.",
  "Eylemsel Rehberlik: İçsel gerilimi hemen eyleme dökmeden önce kendi içinde nefes almasına izin vermek."
];

const DEFAULT_TAKEAWAYS_EN = [
  "Unconscious Pattern: Releasing outdated defenses that no longer serve your growth.",
  "Spiritual Opportunity: Trusting intuitive flow rather than forcing mental control.",
  "Grounded Guidance: Allowing internal tension to breathe before rushing into action."
];

interface AiConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: PlatformStyle;
  onReadingGenerated?: (reading: ReadingResult) => void;
  language?: Language;
}

const ZODIAC_SIGNS_TR = [
  'Koç ♈', 'Boğa ♉', 'İkizler ♊', 'Yengeç ♋',
  'Aslan ♌', 'Başak ♍', 'Terazi ♎', 'Akrep ♏',
  'Yay ♐', 'Oğlak ♑', 'Kova ♒', 'Balık ♓'
];

const ZODIAC_SIGNS_EN = [
  'Aries ♈', 'Taurus ♉', 'Gemini ♊', 'Cancer ♋',
  'Leo ♌', 'Virgo ♍', 'Libra ♎', 'Scorpio ♏',
  'Sagittarius ♐', 'Capricorn ♑', 'Aquarius ♒', 'Pisces ♓'
];

// Rich Turkish Tarot Major Arcana names
const TAROT_NAMES_TR: Record<string, string> = {
  'The Fool': 'Deli / Mecnun',
  'The Magician': 'Büyücü',
  'The High Priestess': 'Başrahibe',
  'The Empress': 'İmparatoriçe',
  'The Emperor': 'İmparator',
  'The Hierophant': 'Aziz',
  'The Lovers': 'Aşıklar',
  'The Chariot': 'Savaş Arabası',
  'Strength': 'Güç',
  'The Hermit': 'Ermiş',
  'Wheel of Fortune': 'Kader Çarkı',
  'Justice': 'Adalet',
  'The Hanged Man': 'Asılan Adam',
  'Death': 'Dönüşüm / Ölüm',
  'Temperance': 'Denge',
  'The Devil': 'Şeytan / Gölge',
  'The Tower': 'Yıkılan Kule',
  'The Star': 'Yıldız',
  'The Moon': 'Ay / Bilinçdışı',
  'The Sun': 'Güneş',
  'Judgement': 'Uyanış / Mahkeme',
  'The World': 'Dünya / Tamamlanma'
};

const ROMAN_NUMERALS = ['I', 'II', 'III'];

export const ARCHETYPAL_POOL_TR = [
  "Şu an ilişkilerimdeki gizli gölge ve karmik ayna ne söylüyor?",
  "Kariyerim ve otoritem konusunda bir kavşaktayım. Yeni döngüm nedir?",
  "Bu mevsim benim için hangi ruhsal ders zirveye ulaşıyor?",
  "Savunmasız kalmaktan korkmadan kontrolü nasıl serbest bırakabilirim?",
  "Bilinçdışımda bastırdığım 'Gölge Benlik' bugün benden ne talep ediyor?",
  "Ata soyumdan devraldığım hangi duygusal borcu artık tamamlamalıyım?",
  "İçimdeki 'Anima / Animus' dengesi şu anki partner seçimlerimi nasıl etkiliyor?",
  "Ruhsal olarak bir krizde miyim, yoksa bir uyanış eşiğinde miyim?",
  "Hangi korkum bana kendimi koruma kılığına girmiş bir engel gibi davranıyor?",
  "Maddi ve dünyevi konularda bolluk akışımı tıkayan kök inanç nedir?",
  "Bugün kalbimin en derin köşesindeki yarayı şifalandırmak için neye ihtiyacım var?",
  "Hayatımdaki tekrar eden döngü bana hangi farkındalığı öğretmeye çalışıyor?",
  "Beni tüketen bir bağı sevgiyle ve suçluluk duymadan nasıl özgürleştirebilirim?",
  "İçsel rehberim ve sezgilerim bana şu an hangi adımı atmamı fısıldıyor?",
  "Kendi gücümü başkalarına teslim ettiğim alanlar hangileri?",
  "Zihinsel kaosun altında yatan gerçek ruhsal arzum nedir?"
];

export const ARCHETYPAL_POOL_EN = [
  "What is the hidden shadow and karmic mirror in my relationships right now?",
  "I feel at a crossroads in my career and authority. What is my next cycle?",
  "What spiritual lesson is peaking for me this season?",
  "How can I surrender control without feeling vulnerable?",
  "What demands is my repressed 'Shadow Self' making on me today?",
  "Which ancestral emotional burden am I ready to resolve and release?",
  "How is my inner Anima / Animus dynamic shaping my current connections?",
  "Am I going through a spiritual crisis or the threshold of an awakening?",
  "Which fear is masquerading as self-protection while blocking my path?",
  "What core belief is currently restricting my earthly abundance and flow?",
  "What does the deepest wound in my heart need today to begin healing?",
  "What pattern or recurring cycle is trying to bring me into awareness?",
  "How can I untie an exhausting cord with love and without guilt?",
  "What step is my quiet intuitive voice whispering to me right now?",
  "In what areas of my life am I unconsciously handing my power away?",
  "What true soul desire lies beneath my mental chaos and overthinking?"
];

export function getRandomArchetypes(lang: Language, count = 4): string[] {
  const pool = lang === 'tr' ? ARCHETYPAL_POOL_TR : ARCHETYPAL_POOL_EN;
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function AiConsultationModal({
  isOpen,
  onClose,
  platform,
  onReadingGenerated,
  language = 'tr',
}: AiConsultationModalProps) {
  const classes = getAdaptiveClasses(platform);
  const t = getTranslations(language);
  const zodiacList = language === 'tr' ? ZODIAC_SIGNS_TR : ZODIAC_SIGNS_EN;

  // Step 1: Talk to AI (Inquiry)
  // Step 2: Draw Tarot & Select Signs
  // Step 3: AI Fortune Generation (Gemini)
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [userInquiry, setUserInquiry] = useState('');
  const [selectedSign, setSelectedSign] = useState(language === 'tr' ? 'Terazi ♎' : 'Libra ♎');
  const [drawnCards, setDrawnCards] = useState<typeof tarotDeck>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([true, true, true]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [generatedReading, setGeneratedReading] = useState<ReadingResult | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeInsightMode, setActiveInsightMode] = useState<'summary' | 'full'>('summary');
  const [isSummaryCopied, setIsSummaryCopied] = useState(false);
  const [activePresets, setActivePresets] = useState<string[]>(() => getRandomArchetypes(language, 4));

  useEffect(() => {
    if (isOpen) {
      setActivePresets(getRandomArchetypes(language, 4));
    }
  }, [isOpen, language]);

  const handleCopySummary = async () => {
    if (!generatedReading) return;
    soundEngine.playCardFlip();

    const title = generatedReading.headline;
    const summaryText = generatedReading.summary || generatedReading.dailyVibe;
    const items = (generatedReading.keyTakeaways && generatedReading.keyTakeaways.length > 0)
      ? generatedReading.keyTakeaways
      : (language === 'tr' ? DEFAULT_TAKEAWAYS_TR : DEFAULT_TAKEAWAYS_EN);

    const textToCopy = `✦ ${title}\n\n${summaryText}\n\n${items.map((it, i) => `${i + 1}. ${it}`).join('\n')}\n\n— Zühre Kozmik Rehberlik`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsSummaryCopied(true);
      soundEngine.playCrystalChime(600);
      setTimeout(() => setIsSummaryCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard copy failed', err);
    }
  };

  if (!isOpen) return null;

  const handleDrawCards = () => {
    setIsShuffling(true);
    soundEngine.playCardFlip();
    setRevealedCards([false, false, false]);

    setTimeout(() => {
      // Pick 3 random cards
      const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
      const chosen = shuffled.slice(0, 3);
      setDrawnCards(chosen);
      setIsShuffling(false);
      setRevealedCards([true, true, true]);
      soundEngine.playCrystalChime(528);
    }, 450);
  };

  const toggleCardReveal = (index: number) => {
    soundEngine.playCardFlip();
    setRevealedCards(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleGeneratePrediction = async () => {
    setIsLoadingAi(true);
    setStep(3);

    try {
      const reading = await fetchGeminiReading({
        theme: 'consultation',
        question: userInquiry || (language === 'tr' ? 'Genel hayat transiti ve arketipsel örüntü' : 'General life transit and archetypal pattern'),
        drawnCards: drawnCards.map(c => ({ id: c.id, name: c.name, archetype: c.archetype })),
        userProfile: { sunSign: selectedSign.split(' ')[0] },
        language,
      });

      setGeneratedReading(reading);
      soundEngine.playCrystalChime(640);
      if (onReadingGenerated) {
        onReadingGenerated(reading);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingAi(false);
    }
  };

  const handleToggleAudioInsight = () => {
    if (!generatedReading) return;

    if (isPlayingAudio) {
      soundEngine.stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      soundEngine.speakSoothing(
        generatedReading.audioScript,
        language,
        () => setIsPlayingAudio(false),
        () => setIsPlayingAudio(true)
      );
    }
  };

  const handleResetToNewQuestion = () => {
    soundEngine.playCardFlip();
    soundEngine.stopSpeaking();
    setIsPlayingAudio(false);
    setUserInquiry('');
    setGeneratedReading(null);
    setStep(1);
  };

  const handleClose = () => {
    soundEngine.stopSpeaking();
    setIsPlayingAudio(false);
    onClose();
  };

  const getCardTitle = (cardName: string) => {
    if (language === 'tr') {
      return TAROT_NAMES_TR[cardName] || cardName;
    }
    return cardName;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F4F1EA] text-[#141317] flex flex-col justify-between transition-colors">
      {/* Sticky Top Header with Pattern Styling */}
      <header className="sticky top-0 z-30 px-6 py-3.5 flex items-center justify-between bg-[#F4F1EA]/90 backdrop-blur-md border-b border-black/5">
        {/* Left Action: Back or Close */}
        {step > 1 ? (
          <button
            onClick={() => {
              soundEngine.playCardFlip();
              setStep((prev) => (prev === 3 ? 2 : 1));
            }}
            aria-label="Back"
            className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
          </button>
        ) : (
          <button
            onClick={handleClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-[#EAE8E4] text-neutral-800 flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
        )}

        {/* Center: Step Indicator & Title */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
            {t.oracleTitle}
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === s
                    ? 'w-6 bg-black'
                    : step > s
                    ? 'w-3 bg-neutral-400'
                    : 'w-2 bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Close X Button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="w-9 h-9 rounded-full bg-[#EAE8E4] text-neutral-800 flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition-all cursor-pointer"
        >
          <X size={16} />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-between px-6 pt-6 pb-12">
        {/* STEP 1: TALK TO AI */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 my-auto"
          >
            {/* The Pattern Celestial Sunset Vignette */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 rounded-full border border-amber-500/25 animate-celestial-ripple pointer-events-none" />
                <div className="absolute w-20 h-20 rounded-full border border-indigo-500/15 animate-celestial-ripple-delayed-1 pointer-events-none" />
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm border border-black/5 bg-gradient-to-b from-amber-400 via-orange-300 to-indigo-900 flex items-center justify-center relative z-10">
                  <div className="w-full h-[1px] bg-white/40 mt-3" />
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
                {t.concept1Step}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950">
                {t.concept1Title}
              </h1>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal max-w-xs">
                {t.concept1Desc}
              </p>
            </div>

            {/* Inquiry Input Card */}
            <div className="p-4 rounded-3xl bg-white border border-black/10 shadow-sm focus-within:border-black/50 transition-all">
              <textarea
                value={userInquiry}
                onChange={(e) => setUserInquiry(e.target.value)}
                placeholder={t.inquiryPlaceholder}
                rows={3}
                className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Archetypal Theme Suggestions - Dynamic Random Pool with Refresh */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">
                  {t.archetypalTheme}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playCardFlip();
                    setActivePresets(getRandomArchetypes(language, 4));
                  }}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-neutral-700 hover:text-black transition-colors cursor-pointer active:scale-95 py-0.5 px-2 rounded-full bg-black/5 hover:bg-black/10"
                  title={language === 'tr' ? 'Seçenekleri Yenile' : 'Refresh Options'}
                >
                  <RefreshCw size={11} className="text-neutral-600" />
                  <span>{language === 'tr' ? 'Yenile' : 'Refresh'}</span>
                </button>
              </div>
              <div className="space-y-2">
                {activePresets.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      soundEngine.playCardFlip();
                      setUserInquiry(topic);
                    }}
                    className="w-full text-left p-3.5 rounded-2xl bg-[#ECE7DC] hover:bg-[#E2DDD2] border border-black/5 text-xs text-neutral-900 font-medium transition-all flex items-center justify-between cursor-pointer active:scale-98 shadow-sm"
                  >
                    <span className="line-clamp-2 leading-relaxed">{topic}</span>
                    <ChevronRight size={14} className="text-neutral-500 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Zodiac Sign Chips */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase block px-1">
                {t.zodiacAnchor}
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto py-1">
                {zodiacList.map((sign) => (
                  <button
                    key={sign}
                    onClick={() => {
                      soundEngine.playCardFlip();
                      setSelectedSign(sign);
                    }}
                    className={`py-2 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedSign === sign
                        ? 'bg-black text-white shadow-md active:scale-95'
                        : 'bg-[#ECE7DC] text-neutral-800 hover:bg-[#E0DAD0]'
                    }`}
                  >
                    {sign}
                  </button>
                ))}
              </div>
            </div>

            {/* Continue to Tarot Draw Button */}
            <div className="pt-2">
              <RippleButton
                platform={platform}
                onClick={() => {
                  soundEngine.playCardFlip();
                  setStep(2);
                  if (drawnCards.length === 0) {
                    handleDrawCards();
                  }
                }}
                className="w-full py-4 px-6 rounded-full bg-black text-white hover:bg-neutral-800 font-semibold text-sm shadow-md active:scale-97 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.continueToDraw}</span>
                <ChevronRight size={16} />
              </RippleButton>
            </div>
          </motion.div>
        )}

        {/* STEP 2: PULL OUT TAROT CARDS */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 my-auto"
          >
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 rounded-full border border-amber-500/25 animate-celestial-ripple pointer-events-none" />
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-black/5 bg-[#16151A] flex items-center justify-center text-amber-300">
                  <Moon size={22} />
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
                {t.concept2Step}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950">
                {t.concept2Title}
              </h1>
            </div>

            {/* Inquiry Quote Card */}
            <div className="p-3.5 rounded-2xl bg-[#ECE7DC] border border-black/5 text-xs text-neutral-800 italic leading-relaxed text-center shadow-sm">
              "{userInquiry || (language === 'tr' ? 'Mevcut Kozmik Döngü & Yaşam Enerjisi' : 'Current Cosmic Transit & Life Theme')}"
            </div>

            {/* 3 Luxury Tarot Cards Display */}
            <div className="grid grid-cols-3 gap-2.5 py-2">
              {drawnCards.map((card, idx) => {
                const isRevealed = revealedCards[idx];
                return (
                  <motion.div
                    key={card.id + '-' + idx}
                    initial={{ rotateY: 90, scale: 0.8 }}
                    animate={{ rotateY: 0, scale: 1 }}
                    transition={{ delay: idx * 0.12 }}
                    onClick={() => toggleCardReveal(idx)}
                    className="aspect-[2/3] rounded-2xl shadow-md border cursor-pointer relative overflow-hidden transition-all duration-300 select-none flex flex-col justify-between p-2.5 group"
                    style={{
                      background: isRevealed
                        ? 'linear-gradient(180deg, #FFFFFF 0%, #F5F2EB 100%)'
                        : 'linear-gradient(135deg, #1C1A24 0%, #0F0E13 100%)',
                      borderColor: isRevealed ? 'rgba(0,0,0,0.1)' : 'rgba(212,175,55,0.4)',
                    }}
                  >
                    {isRevealed ? (
                      /* Face Up (Revealed) */
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-neutral-500">
                            {ROMAN_NUMERALS[idx]}
                          </span>
                          <Sparkles size={11} className="text-amber-500" />
                        </div>

                        <div className="my-auto text-center space-y-1">
                          <div className="w-8 h-8 mx-auto rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-700">
                            {idx === 0 ? <Eye size={15} /> : idx === 1 ? <Compass size={15} /> : <Sparkles size={15} />}
                          </div>
                          <h4 className="text-[11px] font-bold text-neutral-900 line-clamp-2 leading-tight">
                            {getCardTitle(card.name)}
                          </h4>
                        </div>

                        <div className="pt-1 border-t border-black/5 text-center">
                          <span className="text-[8px] uppercase tracking-wider font-semibold text-neutral-500 line-clamp-1">
                            {card.archetype.split(' ')[0]}
                          </span>
                        </div>
                      </>
                    ) : (
                      /* Face Down (Card Back with Sacred Geometry) */
                      <div className="h-full flex flex-col items-center justify-between text-amber-300/80">
                        <span className="text-[9px] font-bold text-amber-300/60">
                          {ROMAN_NUMERALS[idx]}
                        </span>
                        <div className="relative flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full border border-dashed border-amber-400/40 flex items-center justify-center">
                              <Moon size={12} className="text-amber-300" />
                            </div>
                          </div>
                        </div>
                        <span className="text-[8px] uppercase tracking-widest text-amber-200/50 font-semibold">
                          ZÜHRE
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Shuffle & Redraw Button */}
            <div className="flex justify-center">
              <RippleButton
                platform={platform}
                onClick={handleDrawCards}
                disabled={isShuffling}
                className="py-3 px-5 rounded-full bg-[#ECE7DC] hover:bg-[#E0DAD0] text-neutral-900 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-black/5 active:scale-95 cursor-pointer"
              >
                <RefreshCw size={14} className={isShuffling ? 'animate-spin' : ''} />
                <span>
                  {isShuffling
                    ? (language === 'tr' ? 'Desteyi Karıştırıyor...' : 'Shuffling...')
                    : t.reshuffleDeck}
                </span>
              </RippleButton>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="py-4 px-5 rounded-full border border-black/15 text-neutral-800 text-xs font-semibold hover:bg-black/5 transition-all cursor-pointer"
              >
                {t.backBtn}
              </button>
              <RippleButton
                platform={platform}
                onClick={handleGeneratePrediction}
                className="flex-1 py-4 px-6 rounded-full bg-black text-white hover:bg-neutral-800 font-semibold text-sm shadow-md active:scale-97 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={16} className="text-amber-300" />
                <span>{t.consultGeminiBtn}</span>
              </RippleButton>
            </div>
          </motion.div>
        )}

        {/* STEP 3: PREDICTION FROM AI */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5 my-auto"
          >
            {isLoadingAi ? (
              /* Loading State matching The Pattern aesthetic */
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative flex items-center justify-center w-28 h-28">
                  <div className="absolute w-28 h-28 rounded-full border border-amber-500/25 animate-celestial-ripple pointer-events-none" />
                  <div className="absolute w-36 h-36 rounded-full border border-indigo-500/15 animate-celestial-ripple-delayed-1 pointer-events-none" />
                  <div className="w-16 h-16 rounded-full border-2 border-black/20 border-t-black animate-spin flex items-center justify-center">
                    <Sparkles size={20} className="text-amber-600 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-1.5 px-4">
                  <h3 className="text-2xl font-extrabold tracking-tight text-neutral-950">
                    {t.synthesizingPattern}
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
                    {t.synthesizingDesc}
                  </p>
                </div>

                {/* Floating astrological symbols */}
                <div className="flex items-center gap-3 text-sm text-neutral-400 font-serif">
                  <span>☉</span>
                  <span>☽</span>
                  <span>☿</span>
                  <span>♀</span>
                  <span>♂</span>
                  <span>♃</span>
                  <span>♄</span>
                </div>
              </div>
            ) : generatedReading ? (
              /* Generated Insight matching In-Depth & Daily Vibe Screen Layout */
              <div className="space-y-4">
                {/* Header Tag & Main Headline */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-600 uppercase">
                    {generatedReading.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight">
                    {generatedReading.headline}
                  </h2>
                </div>

                {/* 3 Drawn Cards Mini Recap Pills */}
                {drawnCards.length > 0 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {drawnCards.map((card, i) => (
                      <div
                        key={i}
                        className="py-1.5 px-3 rounded-full bg-[#ECE7DC] border border-black/5 text-[10px] font-bold text-neutral-800 whitespace-nowrap flex items-center gap-1.5 shadow-sm"
                      >
                        <span className="text-amber-700">{ROMAN_NUMERALS[i]}</span>
                        <span>{getCardTitle(card.name)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Spoken Audio Memo Pill (Exact Match to Screenshot 4 in In-Depth) */}
                <RippleButton
                  platform={platform}
                  onClick={handleToggleAudioInsight}
                  className="w-full py-3.5 px-5 rounded-full bg-white border border-black/15 shadow-sm hover:border-black/30 active:scale-98 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
                      {isPlayingAudio ? (
                        <Square size={11} className="fill-white" />
                      ) : (
                        <Play size={12} className="fill-white translate-x-[1px]" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-neutral-900">
                      {isPlayingAudio
                        ? (language === 'tr' ? 'İçgörüyü Duraklat' : 'Pause Audio Memo')
                        : generatedReading.audioInsightTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                    {isPlayingAudio ? t.audioMemoPlaying : t.audioMemoLabel}
                  </span>
                </RippleButton>

                {/* Mode Switcher Pill: Kozmik Özet vs Tam Analiz */}
                <div className="flex items-center p-1 rounded-full bg-[#EAE8E4] border border-black/5 shadow-inner">
                  <button
                    onClick={() => {
                      soundEngine.playCardFlip();
                      setActiveInsightMode('summary');
                    }}
                    className={`flex-1 py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeInsightMode === 'summary'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    <Sparkles size={12} className={activeInsightMode === 'summary' ? 'text-amber-300' : ''} />
                    <span>{language === 'tr' ? 'Kozmik Özet' : 'Cosmic Summary'}</span>
                  </button>

                  <button
                    onClick={() => {
                      soundEngine.playCardFlip();
                      setActiveInsightMode('full');
                    }}
                    className={`flex-1 py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeInsightMode === 'full'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    <BookOpen size={12} />
                    <span>{language === 'tr' ? 'Tam Analiz' : 'Full Analysis'}</span>
                  </button>
                </div>

                {/* Conditional Content: Summary vs Full Analysis */}
                {activeInsightMode === 'summary' ? (
                  <motion.div
                    key="summary-mode"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    {/* 1-Sentence High-Level Distillation Card */}
                    <div className="p-4 rounded-3xl bg-[#ECE7DC] border border-black/5 shadow-sm space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase">
                          {language === 'tr' ? 'ÖZET DÖNGÜ MESAJI' : 'CYCLE SUMMARY'}
                        </span>
                        <button
                          onClick={handleCopySummary}
                          className="inline-flex items-center gap-1 py-1 px-2.5 rounded-full bg-white text-[10px] font-bold text-neutral-800 hover:bg-neutral-100 transition-all border border-black/10 shadow-xs cursor-pointer active:scale-95"
                        >
                          {isSummaryCopied ? (
                            <>
                              <Check size={11} className="text-emerald-600" />
                              <span>{language === 'tr' ? 'Kopyalandı' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={11} />
                              <span>{language === 'tr' ? 'Özeti Kopyala' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-neutral-900 leading-relaxed">
                        {generatedReading.summary || generatedReading.dailyVibe}
                      </p>
                    </div>

                    {/* 3 Core Takeaway Cards */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase block px-1">
                        {language === 'tr' ? '3 TEMEL İÇGÖRÜ & REHBERLİK' : '3 KEY TAKEAWAYS & LESSONS'}
                      </span>
                      {((generatedReading.keyTakeaways && generatedReading.keyTakeaways.length > 0)
                        ? generatedReading.keyTakeaways
                        : (language === 'tr' ? DEFAULT_TAKEAWAYS_TR : DEFAULT_TAKEAWAYS_EN)
                      ).map((takeaway, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="p-3.5 rounded-2xl bg-white border border-black/10 shadow-sm flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            {idx + 1}
                          </div>
                          <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                            {takeaway}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Reflection Point Card */}
                    <div className="p-4 rounded-2xl bg-[#ECE7DC] border-l-4 border-black space-y-1">
                      <span className="text-xs font-bold text-neutral-900 block">
                        {t.reflectionPoint}
                      </span>
                      <p className="text-xs text-neutral-800 leading-relaxed">
                        {generatedReading.practicalAdvice}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="full-mode"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    {/* Daily Vibe / Cosmic Essence Card */}
                    <div className="p-4 rounded-3xl bg-[#ECE7DC] border border-black/5 shadow-sm">
                      <p className="text-xs md:text-sm text-neutral-900 leading-relaxed font-normal">
                        {generatedReading.dailyVibe}
                      </p>
                    </div>

                    {/* In-Depth Multi-Paragraph Reading Card */}
                    <div className="p-5 rounded-3xl bg-white border border-black/10 shadow-sm space-y-3 max-h-56 overflow-y-auto">
                      {generatedReading.fullInsight.split('\n\n').map((para, i) => (
                        <p key={i} className="text-xs leading-relaxed text-neutral-800">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Reflection Point Card with Left Border Accent */}
                    <div className="p-4 rounded-2xl bg-[#ECE7DC] border-l-4 border-black space-y-1">
                      <span className="text-xs font-bold text-neutral-900 block">
                        {t.reflectionPoint}
                      </span>
                      <p className="text-xs text-neutral-800 leading-relaxed">
                        {generatedReading.practicalAdvice}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Bottom Action Buttons Row */}
                <div className="space-y-2 pt-2">
                  <RippleButton
                    platform={platform}
                    onClick={handleClose}
                    className="w-full py-4 px-6 rounded-full bg-black text-white hover:bg-neutral-800 font-semibold text-sm shadow-md active:scale-97 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    <span>{t.acceptInsight}</span>
                  </RippleButton>

                  <button
                    onClick={handleResetToNewQuestion}
                    className="w-full py-3 px-6 rounded-full bg-[#ECE7DC] hover:bg-[#E0DAD0] text-neutral-900 font-semibold text-xs border border-black/5 transition-all cursor-pointer"
                  >
                    {t.askNewQuestion}
                  </button>
                </div>
              </div>
            ) : null}
          </motion.div>
        )}
      </main>
    </div>
  );
}
