export type Language = 'tr' | 'en';

export const TRANSLATIONS = {
  tr: {
    // Header & Platform
    iosPlatform: 'iOS Likit Cam',
    androidPlatform: 'Android M3',
    soundOn: 'Ses Açık',
    soundOff: 'Sessiz',
    upgrade: 'Yükselt',
    inDepthActive: 'Derinlik Aktif',
    
    // Bottom Nav
    navLens: 'Günün Akışı',
    navDiscover: 'Keşfet',
    navInDepth: 'Derin Bakış',
    navBonds: 'Bağlar',
    navMeditation: 'Meditasyon',
    navYou: 'Sen',

    // Lens View (Daily Vibe)
    dailyVibeTag: 'GÜNÜN AKIŞI',
    dailyVibeTitle: 'Günün Enerjisi:',
    dailyVibeDefaultBody:
      'İlişkilerinde en sahici hissettiren şeylere olan duyarlılığın, henüz verilmeyi bekleyen kararları sessizce ve kaçınılmaz olarak şekillendirecek şekilde keskinleşiyor.',
    revealTarotBtn: "Günün Tarot Uyumunu Aç",
    cardAlignmentTag: 'KART UYUMU',
    listenFullInsight: 'Sesli İçgörüyü Dinle',
    askAi: 'Yapay Zekaya Danış',

    // Discover View
    aboutYouTag: 'SENİN HAKKINDA',
    discoverSubtitle: '29 EYL: 10. EVDE GÜNEY AY DÜĞÜMÜ',
    discoverHeadline: 'Otoriten ve Tutkun',
    discoverBody:
      'Güney Ay Düğümün 10. Evdeyken, ilişkilerine disiplinli ve hedef odaklı bir enerji getirebilirsin; ancak en derin duygularınla temasın zayıflayabilir. Gelişim yolun, özellikle özel hayatında duygularınla bağ kurmayı öğrenmekten geçiyor.',
    goDeeperBtn: 'Gemini Yapay Zekasıyla Derinleş',
    viewFullCycleInsight: 'Tüm Döngü Sesli İçgörüsünü İncele',

    // In-Depth View
    inDepthSubtitle: 'TERAZİ MARS',
    inDepthHeadline: 'Sen ve İlişkilerin: Terazi Niteliklerin',
    listenToInsightBtn: 'Sesli İçgörüyü Dinle 22:29',
    pauseInsightBtn: 'İçgörüyü Duraklat',
    summaryTag: 'ÖZET',
    inDepthSummary1:
      'Bu ses kaydı, kişiliğinin Terazi olan yönünün derinliklerine iner. Terazi düşünceli, incelikli ve işbirlikçidir. Başkalarına gösterdiğin özen ile kendi kendinin en iyi yoldaşı olmak arasındaki dengeyi öğreniyorsun.',
    inDepthSummary2:
      'Asıl amaç, kendinle olan ilişkini önceliklendirmek ve seni gerçekten gören, anlayan dostlar ve partnerler bulmaktır.',
    askAiAboutPlacement: 'Bu Konum Hakkında Yapay Zekaya Danış',

    // Bonds View
    bondsTitle: 'Bağlar',
    bondsSubtitle:
      'İki profil seçerek Romantik, Arkadaşlık veya Karmik Bağ oluştur ve aranızdaki ilişki dinamiğini gör.',
    youLabel: 'Sen (Terazi)',
    selectPartner: 'Partner Seç',
    romanticConnection: 'Romantik Bağ',
    friendshipConnection: 'Arkadaşlık Bağı',
    karmicConnection: 'Karmik & Ruh Bağı',
    familyConnection: 'Aile & Soy Bağı',
    viewBondBtn: 'Bağı İncele',
    analyzingDynamic: 'Dinamik Analiz Ediliyor...',
    bondsRemainingText: 'Bağ Hakkı Kaldı',
    viewRecentOrUnlimited: 'Son Bağları Gör veya Sınırsız Aç',
    editProfiles: 'İsim & Burç Ayarları',
    yourName: 'Senin Adın',
    yourSign: 'Senin Burcun',
    partnerName: 'Partnerin Adı',
    partnerSign: 'Partnerin Burcu',
    enterPartnerName: 'Partnerinin adını yaz...',
    saveProfiles: 'Kaydet & Uygula',
    customProfile: 'Özel Profil',

    // Meditation View (Ata Karması & 3 Adımlı Nefes)
    meditationHeader: 'Ata Karması & 3 Adımlı Nefes',
    meditationSubtitle: 'Burcuna özel ata karması yükünü çözümle, geçmişten gelen karmik bağları 3 adımlı nefesle sonlandır.',
    selectZodiacSign: 'Burç Seçimi & Karmik Harita',
    ancestralWound: 'Ata Karması & Nesiller Boyu Yük',
    karmicCord: 'Karmik Kordon & Bağ Deseni',
    startBreathingBtn: '3 Adımlı Nefes Navigasyonunu Başlat',
    pauseBreathingBtn: 'Nefesi Duraklat',
    resumeBreathingBtn: 'Devam Et',
    nextStepBtn: 'Sonraki Adım',
    prevStepBtn: 'Önceki Adım',
    stepOf: 'Adım',
    cycleOf: 'Döngü',
    cycle1: '1. Döngü: Ata Köklerini Tanıma & Kabul',
    cycle2: '2. Döngü: Karmik Bağı İdrak Etme & Dönüştürme',
    cycle3: '3. Döngü: Kordon Kesimi & Özgürleşme',
    ritualDecree: '✦ Ata Karması Fesih Bildirisi',
    finishRitualBtn: 'Karmik Bağı Tamamla & Mühürle',
    ritualCompleted: '✦ Karmik Bağ Sevgiyle Sonlandırıldı',
    audioGuidance: 'Sesli Rehber',
    breathingActive: 'Nefes Döngüsü Aktif',

    // You Profile View
    profileLibraryQuote: 'Senin hikayene dair günden güne büyüyen bir kütüphane',
    viewFriends: 'Arkadaşları Gör',
    runBond: 'Bağ Çalıştır',
    addCustomFriend: 'Özel Profil Ekle',
    newBadge: 'Yeni',
    listenNow: 'Hemen dinle',
    yourTransitsTitle: 'Transitlerin',
    transitsSubtitle: 'Geçici Döngüler Değişim Getiriyor',
    monthsLeft: 'ay kaldı',
    inMonths: 'ay sonra',
    peakingIn: 'gün içinde zirvede',

    // AI Consultation Modal
    oracleTitle: 'Kozmik Kehanet & Rehberlik',
    concept1Step: '1. Adım: Yapay Zeka ile Konuş',
    concept1Title: 'Neyi keşfetmek istiyorsun?',
    concept1Desc: 'Merak ettiğin bir ilişki dinamiğini, karar aşamasını veya içsel gölgeni yaz.',
    inquiryPlaceholder: 'Örn: Neden bu dönemde ilişkilerimde bir geri çekilme hissediyorum ya da bu bağlantı neden karmik bir ayna gibi?',
    archetypalTheme: 'Veya bir arketipsel tema seç:',
    zodiacAnchor: 'Birincil Burç Dayanağın:',
    continueToDraw: 'Kart Çekmeye Geç',

    concept2Step: '2. Adım: Tarot Kartlarını Çek',
    concept2Title: 'Kozmik Uyumunu Çek',
    concept2Desc: 'Desteye dokunarak bilinçdışı rezonansını çağır:',
    reshuffleDeck: 'Desteyi Yeniden Karıştır',
    consultGeminiBtn: 'Gemini 3.5 Yapay Zekasına Danış',
    backBtn: 'Geri',

    concept3Step: '3. Adım: Yapay Zeka Öngörüsü',
    synthesizingPattern: 'Kozmik Model Sentezleniyor...',
    synthesizingDesc: 'Google AI Studio (Gemini 3.5 Flash Lite), sorunu astrolojik evler ve çekilen tarot arketipleriyle eşleştiriyor...',
    audioMemoPlaying: 'Çalıyor',
    audioMemoLabel: 'Sesli Not',
    reflectionPoint: '✦ Günün Yansıma Sorusu:',
    acceptInsight: 'Kozmik İçgörüyü Kabul Et',
    askNewQuestion: 'Yeni Bir Soru Sor',
    tapToRevealCard: 'Kartı açmak için dokun',
    cardRecapTitle: 'Açılan Tarot Kartların',
    stepLabel: 'Adım',

    // Paywall Modal
    paywallBadge: 'ZÜHRE DERİNLİK KARTI',
    paywallTitle: 'Kendi Hikayeni Bütünüyle Keşfet',
    paywallDesc: 'Yapay zeka tarot danışmanlığına, sınırsız ilişki bağlarına ve kişisel transit zamanlamalarına tam erişim kazan.',
    feature1Title: 'Sınırsız Gemini 3.5 Yapay Zeka Falı',
    feature1Desc: 'Hayatın, kariyerin ve bilinçdışı gölgelerin hakkında sınırsız soru sor.',
    feature2Title: 'Sonsuz İlişki Bağları',
    feature2Desc: 'İstediğin kişiyle derin astrolojik bağ dinamiklerini incele.',
    feature3Title: 'Sesli İçgörü Kütüphanesi',
    feature3Desc: 'Kişisel kart çekilişlerin ve arketipsel analizler için derin rehberlikleri dinle.',
    feature4Title: 'Karmik Döngü & Arketip Zamanlaması',
    feature4Desc: 'Karmik döngülerinin ve arketipsel dönüşümlerinin ne zaman zirveye ulaşacağını öğren.',
    annualPlan: 'Yıllık',
    monthlyPlan: 'Aylık',
    save81: '%81 İndirim',
    freeTrialText: '7 Gün Ücretsiz Deneme',
    cancelAnytime: 'İstediğin an iptal et',
    startTrialBtn: '7 Günlük Ücretsiz Denemeyi Başlat',
    sandboxNotice: 'StoreKit Sandbox Hazır • Test modunda ücret alınmaz',

    // Preset topics in Turkish
    presetTopics: [
      "Şu an ilişkilerimdeki gizli gölge ve karmik ayna ne söylüyor?",
      "Kariyerim ve otoritem konusunda bir kavşaktayım. Yeni döngüm nedir?",
      "Bu mevsim benim için hangi ruhsal ders zirveye ulaşıyor?",
      "Savunmasız kalmaktan korkmadan kontrolü nasıl serbest bırakabilirim?"
    ]
  },
  en: {
    // Header & Platform
    iosPlatform: 'iOS Liquid Glass',
    androidPlatform: 'Android M3',
    soundOn: 'Sound On',
    soundOff: 'Muted',
    upgrade: 'Upgrade',
    inDepthActive: 'In-Depth Active',

    // Bottom Nav
    navLens: 'Lens',
    navDiscover: 'Discover',
    navInDepth: 'In-Depth',
    navBonds: 'Bonds',
    navMeditation: 'Meditation',
    navYou: 'You',

    // Lens View
    dailyVibeTag: 'DAILY VIBE',
    dailyVibeTitle: 'Your Daily Vibe:',
    dailyVibeDefaultBody:
      'Your sensitivity to what feels most true in your relationships might be sharpening in ways that are quietly and inevitably informing the choices that are still waiting to be made.',
    revealTarotBtn: "Reveal Today's Tarot Alignment",
    cardAlignmentTag: 'CARD ALIGNMENT',
    listenFullInsight: 'Listen to Full Insight',
    askAi: 'Ask AI',

    // Discover View
    aboutYouTag: 'ABOUT YOU',
    discoverSubtitle: 'SEP 29: SOUTH NODE IN 10TH HOUSE',
    discoverHeadline: 'Your Authority & Ambition',
    discoverBody:
      'With your South Node in the Tenth House, you may bring a disciplined, goal-oriented energy to your relationships – but be disconnected from your innermost feelings. Your path to growth may involve learning to connect with your emotions, especially around your private life.',
    goDeeperBtn: 'Go Deeper with Gemini AI',
    viewFullCycleInsight: 'View Full Cycle Audio Insight',

    // In-Depth View
    inDepthSubtitle: 'LIBRA MARS',
    inDepthHeadline: 'You And Your Relationships: Your Libra Qualities',
    listenToInsightBtn: 'Listen to Insight 22:29',
    pauseInsightBtn: 'Pause Audio Insight',
    summaryTag: 'SUMMARY',
    inDepthSummary1:
      'This audio dives deeply into a part of your personality that is Libra. Libra is considerate, thoughtful, and collaborative. You’re learning about finding fulfilling relationships and balancing your concern for others with being your own best partner.',
    inDepthSummary2:
      'The intention is to prioritize your relationship with yourself and to find friends and partners who truly see and understand you.',
    askAiAboutPlacement: 'Ask AI About This Placement',

    // Bonds View
    bondsTitle: 'Bonds',
    bondsSubtitle:
      'Select two profiles to create a Romantic, Friendship, or Karmic Bond and see the relationship dynamics.',
    youLabel: 'You (Libra)',
    selectPartner: 'Select Partner',
    romanticConnection: 'Romantic Connection',
    friendshipConnection: 'Friendship Connection',
    karmicConnection: 'Karmic & Soul Bond',
    familyConnection: 'Family & Ancestral Bond',
    viewBondBtn: 'View Bond',
    analyzingDynamic: 'Analyzing Dynamic...',
    bondsRemainingText: 'Bonds Remaining',
    viewRecentOrUnlimited: 'View Recent Bonds or Get Unlimited',
    editProfiles: 'Name & Sign Settings',
    yourName: 'Your Name',
    yourSign: 'Your Sign',
    partnerName: 'Partner Name',
    partnerSign: 'Partner Sign',
    enterPartnerName: 'Enter partner name...',
    saveProfiles: 'Save & Apply',
    customProfile: 'Custom Profile',

    // Meditation View (Ancestral Karma & 3-Step Breath)
    meditationHeader: 'Ancestral Karma & 3-Step Breath',
    meditationSubtitle: 'Resolve ancestral burdens and dissolve karmic cords through 3-step breath navigation tailored to your sign.',
    selectZodiacSign: 'Zodiac Selection & Karmic Map',
    ancestralWound: 'Ancestral Wound & Generational Burden',
    karmicCord: 'Karmic Cord & Entanglement Type',
    startBreathingBtn: 'Start 3-Step Breath Navigation',
    pauseBreathingBtn: 'Pause Breath',
    resumeBreathingBtn: 'Resume',
    nextStepBtn: 'Next Step',
    prevStepBtn: 'Previous Step',
    stepOf: 'Step',
    cycleOf: 'Cycle',
    cycle1: 'Cycle 1: Recognizing Ancestral Roots & Acceptance',
    cycle2: 'Cycle 2: Discerning & Transmuting Karmic Cord',
    cycle3: 'Cycle 3: Severing Cord & Liberation',
    ritualDecree: '✦ Ancestral Release Decree',
    finishRitualBtn: 'Complete & Seal Karmic Release',
    ritualCompleted: '✦ Karmic Cord Severed in Love',
    audioGuidance: 'Voice Guidance',
    breathingActive: 'Breathing Cycle Active',

    // You Profile View
    profileLibraryQuote: 'An ever-growing library on the story of you',
    viewFriends: 'View Friends',
    runBond: 'Run Bond',
    addCustomFriend: 'Add Custom Friend',
    newBadge: 'New',
    listenNow: 'Listen now',
    yourTransitsTitle: 'Your Transits',
    transitsSubtitle: 'Temporary Cycles Bringing Change',
    monthsLeft: 'months left',
    inMonths: 'in months',
    peakingIn: 'days left to peak',

    // AI Consultation Modal
    oracleTitle: 'Oracle Consultation',
    concept1Step: 'Concept 1: Talk to AI',
    concept1Title: 'What do you want to find out?',
    concept1Desc: 'Share an inquiry, relationship dynamic, or emotional crossroads you are navigating.',
    inquiryPlaceholder: 'E.g., Why do I feel resistance in my creative work, or why does this connection feel like a mirror?',
    archetypalTheme: 'Or choose an archetypal theme:',
    zodiacAnchor: 'Your Primary Zodiac Anchor:',
    continueToDraw: 'Continue to Draw Cards',

    concept2Step: 'Concept 2: Pull Out Tarot Cards',
    concept2Title: 'Draw Your Cosmic Alignment',
    concept2Desc: 'Tapping the deck channels unconscious resonance for:',
    reshuffleDeck: 'Reshuffle Deck',
    consultGeminiBtn: 'Consult Gemini 3.5 AI',
    backBtn: 'Back',

    concept3Step: 'Concept 3: Prediction from AI',
    synthesizingPattern: 'Synthesizing Cosmic Pattern...',
    synthesizingDesc: 'Google AI Studio (Gemini 3.5 Flash Lite) is analyzing your inquiry against astrological houses and drawn tarot archetypes...',
    audioMemoPlaying: 'Playing',
    audioMemoLabel: 'Audio Memo',
    reflectionPoint: '✦ Reflection Point:',
    acceptInsight: 'Accept Pattern Insight',
    askNewQuestion: 'Ask Another Question',
    tapToRevealCard: 'Tap card to reveal',
    cardRecapTitle: 'Drawn Tarot Cards',
    stepLabel: 'Step',

    // Paywall Modal
    paywallBadge: 'ZÜHRE IN-DEPTH PASS',
    paywallTitle: 'Unlock the Complete Story of You',
    paywallDesc: 'Gain unlimited access to AI consultations, romantic bonds, and personal transit timings.',
    feature1Title: 'Unlimited Gemini 3.5 AI Tarot Oracle',
    feature1Desc: 'Ask unlimited questions about your life, career, and subconscious shadows.',
    feature2Title: 'Infinite Relationship Bonds',
    feature2Desc: 'Run in-depth compatibility and astrological dynamics with anyone.',
    feature3Title: 'Full Audio Insight Library',
    feature3Desc: 'Listen to immersive spoken memos for every card pull and psychological insight.',
    feature4Title: 'Karmic Cycles & Archetype Timing',
    feature4Desc: 'Track when your karmic themes and psychological transformations peak.',
    annualPlan: 'Annual',
    monthlyPlan: 'Monthly',
    save81: 'Save 81%',
    freeTrialText: '7 Days Free Trial',
    cancelAnytime: 'Cancel anytime',
    startTrialBtn: 'Start 7-Day Free Trial',
    sandboxNotice: 'StoreKit Sandbox Ready • No payment charged in test mode',

    presetTopics: [
      "What is the hidden shadow in my relationships right now?",
      "I feel a crossroads in my career and authority. What is my next cycle?",
      "What karmic lesson is peaking for me this season?",
      "How can I surrender control without feeling vulnerable?"
    ]
  }
};

export function getTranslations(lang?: string | null): typeof TRANSLATIONS['tr'] {
  if (lang && lang === 'en') {
    return TRANSLATIONS.en;
  }
  return TRANSLATIONS.tr;
}

