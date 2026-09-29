import React from 'react';
import { Share2, RefreshCw, Search } from 'lucide-react';
import { PlatformStyle, getAdaptiveClasses } from '../lib/platformTheme';
import { Language } from '../lib/translations';

interface FloatingActionStackProps {
  platform: PlatformStyle;
  onOpenConsultation: () => void;
  onOpenCycles: () => void;
  cycleCount?: number;
  language?: Language;
}

export default function FloatingActionStack({
  platform,
  onOpenConsultation,
  onOpenCycles,
  cycleCount = 7,
  language = 'tr',
}: FloatingActionStackProps) {
  const classes = getAdaptiveClasses(platform);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'tr' ? 'Zühre Kozmik İçgörü' : 'Zühre Pattern Insight',
          text: language === 'tr' ? 'Zühre üzerindeki kozmik transit ve tarot desenime göz at.' : 'Check out my cosmic transit and tarot pattern on Zühre.',
          url: window.location.href,
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'tr' ? 'Bağlantı panoya kopyalandı!' : 'Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed right-5 bottom-24 z-30 flex flex-col items-center gap-3">
      {/* 1. Share Button */}
      <button
        onClick={handleShare}
        aria-label="Share insight"
        className={classes.fab}
      >
        <Share2 size={18} className="translate-x-[0.5px]" />
      </button>

      {/* 2. Cycles / Transits Counter Button with Badge */}
      <button
        onClick={onOpenCycles}
        aria-label="Active transit cycles"
        className={`relative ${classes.fab}`}
      >
        <RefreshCw size={17} />
        {cycleCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3876BF] text-[10px] font-bold text-white shadow-md">
            {cycleCount}
          </span>
        )}
      </button>

      {/* 3. Search / AI Consultation Button */}
      <button
        onClick={onOpenConsultation}
        aria-label="Ask AI about your pattern"
        className={classes.fab}
      >
        <Search size={18} />
      </button>
    </div>
  );
}
