'use client';

import React, { useState, useEffect } from 'react';
import ThePatternNav, { TabType } from '../components/ThePatternNav';
import ThePatternHeader from '../components/ThePatternHeader';
import FloatingActionStack from '../components/FloatingActionStack';
import LensView from '../components/views/LensView';
import DiscoverView from '../components/views/DiscoverView';
import InDepthView from '../components/views/InDepthView';
import BondsView from '../components/views/BondsView';
import MeditationView from '../components/views/MeditationView';
import YouProfileView from '../components/views/YouProfileView';
import AiConsultationModal from '../components/AiConsultationModal';
import SubscriptionPaywallModal from '../components/SubscriptionPaywallModal';
import GlobalRippleCanvas from '../components/GlobalRippleCanvas';
import { PlatformStyle, getSystemPlatform } from '../lib/platformTheme';
import { soundEngine } from '../lib/soundEngine';
import { ReadingResult } from '../lib/geminiFortuneService';
import { Language } from '../lib/translations';

export default function ZuhreApp() {
  const [activeTab, setActiveTab] = useState<TabType>('lens');
  const [platform, setPlatform] = useState<PlatformStyle>('ios-liquid-glass');
  const [language, setLanguage] = useState<Language>('tr');
  const [isMuted, setIsMuted] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [latestReading, setLatestReading] = useState<ReadingResult | null>(null);

  // Auto-detect platform on mount
  useEffect(() => {
    const sys = getSystemPlatform();
    setPlatform(sys);
    soundEngine.init();
  }, []);

  const handleTogglePlatform = () => {
    soundEngine.playCardFlip();
    setPlatform((prev) =>
      prev === 'ios-liquid-glass' ? 'android-m3-expressive' : 'ios-liquid-glass'
    );
  };

  const handleToggleLanguage = () => {
    soundEngine.playCardFlip();
    setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const handleToggleSound = () => {
    soundEngine.init();
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundEngine.playCrystalChime(528);
    }
  };

  const handleReadingGenerated = (reading: ReadingResult) => {
    setLatestReading(reading);
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors ${
        activeTab === 'discover'
          ? 'bg-[#0A0A0D] text-white'
          : activeTab === 'lens' || activeTab === 'meditation'
          ? 'bg-[#F4F1EA] text-[#141317]'
          : 'bg-white text-black'
      }`}
    >
      {/* Global Interactive Tap Ripple Canvas */}
      <GlobalRippleCanvas platform={platform} />
      {/* Dynamic Top Header with Platform Switcher & Sound */}
      <ThePatternHeader
        platform={platform}
        onTogglePlatform={handleTogglePlatform}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        onOpenSubscription={() => setIsPaywallOpen(true)}
        isSubscribed={isSubscribed}
        isDark={activeTab === 'discover'}
      />

      {/* Main View Switcher matching The Pattern's Screens */}
      <main className="w-full">
        {activeTab === 'lens' && (
          <LensView
            platform={platform}
            language={language}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenInDepth={() => setActiveTab('indepth')}
          />
        )}

        {activeTab === 'discover' && (
          <DiscoverView
            platform={platform}
            language={language}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenInDepth={() => setActiveTab('indepth')}
          />
        )}

        {activeTab === 'indepth' && (
          <InDepthView
            platform={platform}
            language={language}
            onBack={() => setActiveTab('lens')}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeTab === 'bonds' && (
          <BondsView
            platform={platform}
            language={language}
            onOpenSubscription={() => setIsPaywallOpen(true)}
          />
        )}

        {activeTab === 'meditation' && (
          <MeditationView
            platform={platform}
            language={language}
            onOpenSubscription={() => setIsPaywallOpen(true)}
          />
        )}

        {activeTab === 'you' && (
          <YouProfileView
            platform={platform}
            language={language}
            onOpenInDepth={() => setActiveTab('indepth')}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenBonds={() => setActiveTab('bonds')}
            onOpenMeditation={() => setActiveTab('meditation')}
          />
        )}
      </main>

      {/* Floating Action Button Stack (Share, Transit Sync Badge, Search / Ask AI) */}
      <FloatingActionStack
        platform={platform}
        language={language}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenCycles={() => setActiveTab('you')}
        cycleCount={activeTab === 'indepth' ? 9 : 7}
      />

      {/* The Pattern Persistent Bottom Navigation Bar */}
      <ThePatternNav
        activeTab={activeTab}
        language={language}
        onSelectTab={(tab) => {
          soundEngine.playCardFlip();
          setActiveTab(tab);
        }}
        platform={platform}
      />

      {/* Concept 1, 2, 3: AI Consultation & Tarot Oracle Modal */}
      <AiConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        platform={platform}
        language={language}
        onReadingGenerated={handleReadingGenerated}
      />

      {/* Subscription Paywall Modal (In-Depth Pass) */}
      <SubscriptionPaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        platform={platform}
        language={language}
        onSubscribeSuccess={() => setIsSubscribed(true)}
      />
    </div>
  );
}