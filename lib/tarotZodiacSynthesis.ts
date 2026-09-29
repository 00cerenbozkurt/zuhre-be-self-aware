// Tarot ve Baskın Burç Bütünleyici Sentez Motoru
// Astroloji destekli Tarot ve Kişisel Farkındalık Modeli

import tarotDeck from '../app/data/tarotDeck.json';
import { ZODIAC_KARMA_PROFILES } from './zodiacKarmaData';

export interface TarotTransitCycle {
  id: string;
  title: string;
  subtitle: string;
  durationMonths: number;
  timeRemainingLabel: string;
  dateRange: string;
  peakDays: number;
  peakLabel: string;
  glyphs: string[];
  themeColor: string;
  description: string;
}

export interface DailyVibeSynthesis {
  headline: string;
  subheadline: string;
  badge: string;
  editorialBody: string;
  audioScript: string;
  archetypeEnergy: string;
  shadowWarning: string;
  actionAdvice: string;
}

export const ZODIAC_SIGNS = [
  { id: 'aries', nameTr: 'Koç', nameEn: 'Aries', symbol: '♈', elementTr: 'Ateş', elementEn: 'Fire' },
  { id: 'taurus', nameTr: 'Boğa', nameEn: 'Taurus', symbol: '♉', elementTr: 'Toprak', elementEn: 'Earth' },
  { id: 'gemini', nameTr: 'İkizler', nameEn: 'Gemini', symbol: '♊', elementTr: 'Hava', elementEn: 'Air' },
  { id: 'cancer', nameTr: 'Yengeç', nameEn: 'Cancer', symbol: '♋', elementTr: 'Su', elementEn: 'Water' },
  { id: 'leo', nameTr: 'Aslan', nameEn: 'Leo', symbol: '♌', elementTr: 'Ateş', elementEn: 'Fire' },
  { id: 'virgo', nameTr: 'Başak', nameEn: 'Virgo', symbol: '♍', elementTr: 'Toprak', elementEn: 'Earth' },
  { id: 'libra', nameTr: 'Terazi', nameEn: 'Libra', symbol: '♎', elementTr: 'Hava', elementEn: 'Air' },
  { id: 'scorpio', nameTr: 'Akrep', nameEn: 'Scorpio', symbol: '♏', elementTr: 'Su', elementEn: 'Water' },
  { id: 'sagittarius', nameTr: 'Yay', nameEn: 'Sagittarius', symbol: '♐', elementTr: 'Ateş', elementEn: 'Fire' },
  { id: 'capricorn', nameTr: 'Oğlak', nameEn: 'Capricorn', symbol: '♑', elementTr: 'Toprak', elementEn: 'Earth' },
  { id: 'aquarius', nameTr: 'Kova', nameEn: 'Aquarius', symbol: '♒', elementTr: 'Hava', elementEn: 'Air' },
  { id: 'pisces', nameTr: 'Balık', nameEn: 'Pisces', symbol: '♓', elementTr: 'Su', elementEn: 'Water' },
];

export function getZodiacSign(id: string) {
  return ZODIAC_SIGNS.find((z) => z.id === id) || ZODIAC_SIGNS[6]; // Default Libra
}

export function synthesizeDailyTarot(
  signId: string,
  card: any,
  lang: 'tr' | 'en' = 'tr'
): DailyVibeSynthesis {
  const sign = getZodiacSign(signId);
  const cardName = card?.name || 'The Magician';
  const cardArchetype = card?.archetype || 'Bilinçli İrade';
  const cardMeaning = card?.meaning || '';

  if (lang === 'tr') {
    return {
      headline: `${sign.nameTr.toUpperCase()} & ${cardName.toUpperCase()}`,
      subheadline: `Sen ve Dönüşümün: ${cardArchetype}`,
      badge: `${sign.symbol} ${sign.nameTr.toUpperCase()} • TAROT SENTEZİ`,
      editorialBody: `Bugün ${sign.nameTr} burcundaki baskın enerjin, çekilen ${cardName} kartının ${cardArchetype} frekansıyla buluşuyor. ${cardMeaning.slice(0, 180)}... Zihnin dışarıdaki koşulları değil, kendi içsel otoriteni uyandırmaya çağrılıyor.`,
      audioScript: `Merhaba. Bugün baskın burcun olan ${sign.nameTr}, çekilen ${cardName} arketipiyle derin bir işbirliği içinde. ${sign.nameTr} enerjisinin getirdiği hassasiyet, ${cardName} kartının bilgeliğiyle dengeleniyor. Bu ses kaydı senin içsel gücünü ve bugün hayatında açılan yeni kapıyı hatırlatmak için burada. Yavaşça nefes al ve kendi merkezinde kal.`,
      archetypeEnergy: cardArchetype,
      shadowWarning: `Aşırı savunmacı veya kontrolcü davranmaktan kaçın. ${sign.nameTr} doğanın aceleciliği yerine ${cardName} kartının derin sabrına güven.`,
      actionAdvice: `Bugün ertelediğin bir konuşmayı veya yaratıcı bir adımı ertelemeden, saf niyetle hayata geçir.`
    };
  }

  return {
    headline: `${sign.nameEn.toUpperCase()} & ${cardName.toUpperCase()}`,
    subheadline: `You & Your Transformation: ${cardArchetype}`,
    badge: `${sign.symbol} ${sign.nameEn.toUpperCase()} • TAROT SYNTHESIS`,
    editorialBody: `Today, your dominant ${sign.nameEn} energy aligns with ${cardName} (${cardArchetype}). This alignment calls you to awaken inner self-awareness rather than reacting to external conditions.`,
    audioScript: `Welcome. Today, your dominant ${sign.nameEn} sign syncs with the wisdom of ${cardName}. Take a deep breath and settle into your authentic presence.`,
    archetypeEnergy: cardArchetype,
    shadowWarning: `Avoid the trap of hyper-vigilance or over-rationalizing your feelings.`,
    actionAdvice: `Step boldly into conscious choice and release past rigid expectations.`
  };
}

export function getDynamicTarotTransits(
  signId: string,
  card: any,
  lang: 'tr' | 'en' = 'tr'
): TarotTransitCycle[] {
  const sign = getZodiacSign(signId);
  const cardName = card?.name || 'The Magician';
  const cardId = card?.id ?? 1;

  if (lang === 'tr') {
    return [
      {
        id: 'primary-cycle',
        title: `${cardName} & ${sign.nameTr} Döngüsü`,
        subtitle: 'Kişisel İrade & Sınırları Yeniden Çizme',
        durationMonths: 5,
        timeRemainingLabel: '5 AY KALDI',
        dateRange: '6 EYL 2026 – 8 MAR 2027',
        peakDays: 55,
        peakLabel: '55 gün içinde zirvede',
        glyphs: [sign.symbol, '✦', 'I', '☿'],
        themeColor: '#00897B',
        description: `${sign.nameTr} burcunun ilişkisel kalıpları, ${cardName} arketipleriyle arınma ve sadeleşme fazına giriyor.`
      },
      {
        id: 'secondary-cycle',
        title: 'Bilinçli Hakikat & Sezgi Fazı',
        subtitle: 'Bilinçdışının Açığa Çıkışı',
        durationMonths: 4,
        timeRemainingLabel: '4 AY SONRA',
        dateRange: '14 OCA 2027 – 20 HAZ 2027',
        peakDays: 130,
        peakLabel: '130 gün içinde zirvede',
        glyphs: ['II', '☽', sign.symbol],
        themeColor: '#3949AB',
        description: 'Geçmişten taşınan duygusal bağların çözülerek zihinsel berraklığa evrileceği yeni döngü.'
      },
      {
        id: 'karmic-resolution',
        title: 'Ata Karması Serbest Bırakılışı',
        subtitle: 'Kordon Kesimi & Bütünlük',
        durationMonths: 2,
        timeRemainingLabel: '2 AY KALDI',
        dateRange: '1 KAS 2026 – 1 OCA 2027',
        peakDays: 22,
        peakLabel: '22 gün içinde zirvede',
        glyphs: ['XXI', '♄', '∞'],
        themeColor: '#D81B60',
        description: 'Soy ağacından devralınan yetersizlik ve onaylanma ihtiyacının tam kabule dönüşmesi.'
      }
    ];
  }

  return [
    {
      id: 'primary-cycle',
      title: `${cardName} & ${sign.nameEn} Cycle`,
      subtitle: 'Conscious Will & Reclaiming Boundaries',
      durationMonths: 5,
      timeRemainingLabel: '5 MONTHS LEFT',
      dateRange: 'SEP 6, 2026 – MAR 8, 2027',
      peakDays: 55,
      peakLabel: 'Peaking in 55 days',
      glyphs: [sign.symbol, '✦', 'I'],
      themeColor: '#00897B',
      description: `Your ${sign.nameEn} relational patterns are entering an organic purification phase alongside ${cardName}.`
    },
    {
      id: 'secondary-cycle',
      title: 'Intuitive Clarity Cycle',
      subtitle: 'Unconscious Integration',
      durationMonths: 4,
      timeRemainingLabel: 'IN 4 MONTHS',
      dateRange: 'JAN 14, 2027 – JUN 20, 2027',
      peakDays: 130,
      peakLabel: 'Peaking in 130 days',
      glyphs: ['II', '☽', sign.symbol],
      themeColor: '#3949AB',
      description: 'Clearing inherited emotional cords to make room for sovereign clarity.'
    }
  ];
}
