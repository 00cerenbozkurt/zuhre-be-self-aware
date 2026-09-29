// Tarot Tarihi, Gizli Ezoterik Sembolizmler ve Arketipsel Bilgelik Veritabanı
// Discover (Keşfet) Sekmesi İçin Kapsamlı Rehber

export interface TarotHistoricalPeriod {
  id: string;
  era: string;
  year: string;
  titleTr: string;
  titleEn: string;
  locationTr: string;
  locationEn: string;
  descriptionTr: string;
  descriptionEn: string;
  keyLegacyTr: string;
  keyLegacyEn: string;
}

export interface TarotSymbolicInsight {
  cardId: number;
  cardNameTr: string;
  cardNameEn: string;
  arcanaNumber: string;
  element: 'Ateş' | 'Su' | 'Hava' | 'Toprak' | 'Ruh / Eter' | 'Toprak / Bütünlük';
  zodiacAssociation: string;
  kabbalahLetter: string;
  secretSymbolsTr: {
    symbol: string;
    hiddenMeaning: string;
  }[];
  secretSymbolsEn: {
    symbol: string;
    hiddenMeaning: string;
  }[];
  jungianArchetypeTr: string;
  jungianArchetypeEn: string;
  historicalNoteTr: string;
  historicalNoteEn: string;
  meditativeMottoTr: string;
  meditativeMottoEn: string;
}

export const TAROT_HISTORICAL_PERIODS: TarotHistoricalPeriod[] = [
  {
    id: 'visconti',
    era: 'Rönesans & Aristokrasi',
    year: '1440 - 1450',
    titleTr: 'Visconti-Sforza: İlk Resimli Desteler',
    titleEn: 'Visconti-Sforza: The Earliest Illustrated Decks',
    locationTr: 'Milano Dükalığı, İtalya',
    locationEn: 'Duchy of Milan, Italy',
    descriptionTr: 'Bilinen en eski Tarot destesi olan Visconti-Sforza, altın varakla süslenmiş aristokratik bir alegori oyunuydu (Tarocchi). Rönesans İtalya’sında Hristiyan erdemleri, astrolojik prensipler ve Platonik idealler kartların üzerine ilk kez elle nakşedildi.',
    descriptionEn: 'The oldest known tarot deck, Visconti-Sforza, was a gilded aristocratic allegory game. Christian virtues, astrological principles, and Platonic ideals were first hand-painted onto cards in Renaissance Italy.',
    keyLegacyTr: 'Büyük Arkananın erdem ve kozmik hiyerarşi yapısının temeli atıldı.',
    keyLegacyEn: 'Laid the foundation of Major Arcana virtue and cosmic hierarchy.',
  },
  {
    id: 'marseille',
    era: 'Tahta Baskı & Halk Bilgeliği',
    year: '1650 - 1750',
    titleTr: 'Marsilya Ekolü (Tarot de Marseille)',
    titleEn: 'Tarot de Marseille School',
    locationTr: 'Fransa (Marsilya & Lyon)',
    locationEn: 'France (Marseille & Lyon)',
    descriptionTr: 'Ağaç oyma tahta baskı tekniğiyle üretilen Marsilya destesi, Tarot’yu halkın ve gezgin bilicilerin eline taşıdı. Canlı birincil renkler (kırmızı, mavi, sarı) simyanın kükürt, cıva ve tuz dengelerini gizleyen kodlara dönüştü.',
    descriptionEn: 'Produced via woodblock printing, Marseille tarot brought the deck to travelers and common seekers. Vivid primary colors encoded alchemical balances of sulfur, mercury, and salt.',
    keyLegacyTr: '78 kartlık evrensel yapı standartlaştı ve simyasal renk kodları yerleşti.',
    keyLegacyEn: 'Standardized the 78-card structure and established alchemical color coding.',
  },
  {
    id: 'rider-waite',
    era: 'Hermetik Altın Şafak Ekolü',
    year: '1909',
    titleTr: 'Rider-Waite-Smith: Devrimci Dönüm Noktası',
    titleEn: 'Rider-Waite-Smith: The Revolutionary Turning Point',
    locationTr: 'Londra, İngiltere',
    locationEn: 'London, United Kingdom',
    descriptionTr: 'Ezoterik bilgin Arthur Edward Waite’in kurguladığı ve ressam Pamela Colman Smith’in resmettiği bu deste, tarihte İLK KEZ küçük arkananın (1-10 sayı kartları) tamamını zengin insan hikayeleriyle resimlendirdi. Kabala, astroloji ve masonik sembolizm kusursuzca harmanlandı.',
    descriptionEn: 'Created by occult scholar A.E. Waite and illustrated by Pamela Colman Smith, this deck was the FIRST to illustrate all pip cards with rich human narratives. Kabbalah, astrology, and Masonic symbols were synthesized.',
    keyLegacyTr: 'Bugün dünyada en çok kullanılan ve modern psikolojik tarotun temelini oluşturan deste.',
    keyLegacyEn: 'The world’s most recognizable deck, forming the basis for modern psychological tarot.',
  },
  {
    id: 'jungian',
    era: 'Analitik Psikoloji & Bireyleşme',
    year: '1960 - Günümüz',
    titleTr: 'Carl Jung ve Arketipsel Senkronisite',
    titleEn: 'Carl Jung & Archetypal Synchronicity',
    locationTr: 'Zürih, İsviçre',
    locationEn: 'Zurich, Switzerland',
    descriptionTr: 'Carl Gustav Jung, Tarot’yu "kolektif bilinçdışının resimli aynası" olarak tanımladı. Kartlar kehanet değil, bireyleşme (individuation) sürecinde zihnin bastırılmış gölgelerini ve içsel arketipsel figürlerini bilince çıkaran senkronistik pencerelerdir.',
    descriptionEn: 'Carl Jung recognized tarot as a pictorial mirror of the collective unconscious. Cards are synchronistic tools for individuation, revealing shadows and internal archetypes.',
    keyLegacyTr: 'Tarot’yu batıl inançtan kurtarıp derin bir kişisel farkındalık ve terapi aracına dönüştürdü.',
    keyLegacyEn: 'Transformed tarot from superstition into a profound tool for self-awareness and therapy.',
  }
];

export const TAROT_SECRET_INSIGHTS: TarotSymbolicInsight[] = [
  {
    cardId: 0,
    cardNameTr: 'Deli (The Fool)',
    cardNameEn: 'The Fool',
    arcanaNumber: '0',
    element: 'Hava',
    zodiacAssociation: 'Uranüs (Özgürleşme & Ani Aydınlanma)',
    kabbalahLetter: 'Alef (İlahi Soluk)',
    jungianArchetypeTr: 'İlahi Çocuk & Puer Aeternus (Sonsuz Başlangıç)',
    jungianArchetypeEn: 'The Divine Child & Puer Aeternus',
    historicalNoteTr: 'Ortaçağ destelerinde kralın soytarısı olarak değil, dünyevi hırsları terk etmiş derviş ve gezgin ruh olarak tasvir edilirdi.',
    historicalNoteEn: 'In medieval decks, depicted not as a king jester, but as an ascetic wanderer renouncing worldly illusions.',
    meditativeMottoTr: 'Hiçbir şeye sahip olmadığında, her şeyi keşfedebilirsin.',
    meditativeMottoEn: 'When you possess nothing, you can explore everything.',
    secretSymbolsTr: [
      {
        symbol: 'Uçurumun Kenarı',
        hiddenMeaning: 'Korkunun değil, güvenin sınırıdır. Bilinçten bilinçdışına atılacak cesaret adımını temsil eder.'
      },
      {
        symbol: 'Beyaz Gül',
        hiddenMeaning: 'Arzu ve hırslardan arınmış saf zihni, lekesiz başlangıcı ve ruhani masumiyeti simgeler.'
      },
      {
        symbol: 'Küçük Beyaz Köpek',
        hiddenMeaning: 'Kişinin hayvan doğası ve sadık sezgisel koruyucusudur. Tehlikede havlayarak uyarır ama yürümeyi engellemez.'
      },
      {
        symbol: 'Sırtındaki Çanta (Bohça)',
        hiddenMeaning: 'Önceki yaşamlardan ve atalardan getirilen henüz açılmamış gizli yetenekler ve karmik miras.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Cliff Edge',
        hiddenMeaning: 'The boundary of trust rather than fear, symbolizing the leap into the unconscious.'
      },
      {
        symbol: 'White Rose',
        hiddenMeaning: 'Represents pure uncorrupted desire, mental purity, and spiritual innocence.'
      },
      {
        symbol: 'Small White Dog',
        hiddenMeaning: 'Instinctual nature and faithful animal protector guiding the seeker.'
      },
      {
        symbol: 'Unopened Knapsack',
        hiddenMeaning: 'Ancestral memories and dormant gifts carried into the present journey.'
      }
    ]
  },
  {
    cardId: 1,
    cardNameTr: 'Büyücü (The Magician)',
    cardNameEn: 'The Magician',
    arcanaNumber: 'I',
    element: 'Ruh / Eter',
    zodiacAssociation: 'Merkür (İletişim, Zihin & Simya)',
    kabbalahLetter: 'Bet (Ev & Yaratılış Kapısı)',
    jungianArchetypeTr: 'Bilinçli İrade, Anima/Animus Aracısı & Simyacı',
    jungianArchetypeEn: 'Conscious Will, Mediator & Alchemist',
    historicalNoteTr: 'Hermetizmin kurucusu Hermes Trismegistus’un "Yukarıda olan neyse, aşağıda olan da odur" ilkesinin görsel manifestosudur.',
    historicalNoteEn: 'Visual manifestation of Hermes Trismegistus principle: "As above, so below".',
    meditativeMottoTr: 'Zihnin gördüğü her vizyon, dünyada maddeleşme gücüne sahiptir.',
    meditativeMottoEn: 'Whatever vision the mind conceives holds the power to manifest.',
    secretSymbolsTr: [
      {
        symbol: 'Sonsuzluk İşareti (Lemniscate)',
        hiddenMeaning: 'Başının üzerindeki yatay sekiz sayısı, sınırsız zihinsel enerjiyi ve tükenmez ilahi kaynağı gösterir.'
      },
      {
        symbol: 'Masadaki Dört Nesne (Asa, Kupa, Kılıç, Tılsım)',
        hiddenMeaning: '4 ana element: Ateş (irade), Su (duygu), Hava (akıl) ve Toprak (beden). Büyücü dördünü de dengeler.'
      },
      {
        symbol: 'Sağ El Göğe, Sol El Yere',
        hiddenMeaning: 'Kozmik evrensel enerjiyi gökten alıp yere (somut maddeye) topraklayan bir kanal olma görevi.'
      },
      {
        symbol: 'Kırmızı Pelerin & Beyaz Cübbe',
        hiddenMeaning: 'Kırmızı tutkulu eylemi, beyaz ise saf niyeti simgeler; eylem ile erdemin birliği.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Infinity Sign (Lemniscate)',
        hiddenMeaning: 'Signifies boundless mental potential and direct connection to universal vitality.'
      },
      {
        symbol: 'Four Alchemical Tools',
        hiddenMeaning: 'Wand (Fire/Will), Cup (Water/Emotion), Sword (Air/Intellect), Pentacle (Earth/Body).'
      },
      {
        symbol: 'As Above, So Below Gesture',
        hiddenMeaning: 'Channeling divine spiritual energy down into physical tangible reality.'
      },
      {
        symbol: 'Red Robe over White Tunic',
        hiddenMeaning: 'Passion for creation united with purity of intention.'
      }
    ]
  },
  {
    cardId: 2,
    cardNameTr: 'Azize (The High Priestess)',
    cardNameEn: 'The High Priestess',
    arcanaNumber: 'II',
    element: 'Su',
    zodiacAssociation: 'Ay (Bilinçdışı, Hafıza & Gel-Gitler)',
    kabbalahLetter: 'Gimel (Deve / Çölü Aşan Bilgelik)',
    jungianArchetypeTr: 'Anima, Sezgi Tapınağı & Gizli Bilinçdışı',
    jungianArchetypeEn: 'The Anima, Intuitive Oracle & Unconscious Matrix',
    historicalNoteTr: 'Tarihte kadın Papa Joan efsanesine atıf yapan bu kart, patriyarkal dinin arkasında saklanan dişil bilgeliği korur.',
    historicalNoteEn: 'Referencing the medieval myth of Pope Joan, preserving feminine esoteric wisdom.',
    meditativeMottoTr: 'Cevapları dışarıda arama; sessiz kaldığında ruhun zaten biliyor.',
    meditativeMottoEn: 'Cease seeking outside; in absolute silence, your soul already knows.',
    secretSymbolsTr: [
      {
        symbol: 'Siyah (B) ve Beyaz (J) Sütunlar',
        hiddenMeaning: 'Süleyman Tapınağı’nın Boaz (karanlık/pasif) ve Jachin (aydınlık/aktif) sütunları. İki kutbun tam ortasında oturur.'
      },
      {
        symbol: 'Narlı & Hurmalı Perde',
        hiddenMeaning: 'Persefoni’nin yeraltı dünyasına iniş sırrı. Perde bilincin arkasındaki bilinçdışını perdeler.'
      },
      {
        symbol: 'TORA (veya ROTA) Parşömeni',
        hiddenMeaning: 'Kadim ilahi yasa. Yarı gizlidir, çünkü gerçek bilgi herkese değil, ancak sezgisel olarak hazır olana açılır.'
      },
      {
        symbol: 'Ayaklarının Altındaki Hilal',
        hiddenMeaning: 'Duygusal ve sezgisel dalgalanmaların üzerinde tam bir denge ve hükümranlık kurduğunu gösterir.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Pillars of Boaz & Jachin',
        hiddenMeaning: 'The duality of dark/light, passive/active; she sits serenely between polarities.'
      },
      {
        symbol: 'Pomegranate Veil',
        hiddenMeaning: 'The veil of Persephone screening the mysteries of the deep unconscious.'
      },
      {
        symbol: 'Partially Hidden Scroll',
        hiddenMeaning: 'Esoteric sacred truth revealed only to those who attune inward.'
      },
      {
        symbol: 'Crescent Moon at Her Feet',
        hiddenMeaning: 'Mastery over nocturnal tides, illusions, and subconscious emotional surges.'
      }
    ]
  },
  {
    cardId: 9,
    cardNameTr: 'Ermiş (The Hermit)',
    cardNameEn: 'The Hermit',
    arcanaNumber: 'IX',
    element: 'Toprak',
    zodiacAssociation: 'Başak (Ayıklama, Analiz & İçsel Hizmet)',
    kabbalahLetter: 'Yod (Kozmik Kıvılcım & Tohum)',
    jungianArchetypeTr: 'Bilge Yaşlı Adam (Senex) & İçsel Rehber',
    jungianArchetypeEn: 'The Wise Old Man (Senex) & Inner Guide',
    historicalNoteTr: 'Zaman tanrısı Chronos veya Diogenes’in gündüz vakti fenerle "dürüst bir insan arayışı" alegorisiyle ilişkilendirilir.',
    historicalNoteEn: 'Associated with Chronos (Saturn/Time) and Diogenes holding a lantern seeking genuine truth.',
    meditativeMottoTr: 'Işığını dışarıdan bekleme; karanlık yolu aydınlatacak fener senin kendi içindedir.',
    meditativeMottoEn: 'Seek no torch without; the lantern that guides your dark path is within.',
    secretSymbolsTr: [
      {
        symbol: 'Altı Köşeli Yıldızlı Fener',
        hiddenMeaning: 'Süleyman’ın Mührü (Hermetik birlik). Fener sadece bir sonraki adımı aydınlatır, tüm yolu değil.'
      },
      {
        symbol: 'Altın Asa (Üç Boğumlu)',
        hiddenMeaning: 'Bilinçdışının derinliklerine dayanarak yürümeyi sağlayan kişisel deneyim ve disiplin sütunu.'
      },
      {
        symbol: 'Karlı Dağın Zirvesi',
        hiddenMeaning: 'Yalnızlık ve izolasyon değil; dünyevi gürültüden arınmış en yüksek farkındalık platosu.'
      },
      {
        symbol: 'Gri Pelerin',
        hiddenMeaning: 'Kişinin egosunu görünmez kılması, dikkat çekmekten vazgeçip özün hakikatine odaklanması.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Lantern with Six-Pointed Star',
        hiddenMeaning: 'The Seal of Solomon; illuminates only the next immediate step, requiring continuous trust.'
      },
      {
        symbol: 'Golden Staff',
        hiddenMeaning: 'The pillar of experiential wisdom supporting the spiritual journey.'
      },
      {
        symbol: 'Snow-Capped Peak',
        hiddenMeaning: 'High spiritual altitude attained through solitude and rigorous contemplation.'
      },
      {
        symbol: 'Grey Cloak',
        hiddenMeaning: 'Invisibility of the ego, discarding vanity to focus on raw authentic truth.'
      }
    ]
  },
  {
    cardId: 16,
    cardNameTr: 'Kule (The Tower)',
    cardNameEn: 'The Tower',
    arcanaNumber: 'XVI',
    element: 'Ateş',
    zodiacAssociation: 'Mars (Ani Yıkım & Arındırıcı Güç)',
    kabbalahLetter: 'Pe (Ağız / Sırrı İfşa Eden Şimşek)',
    jungianArchetypeTr: 'Ego Çöküşü, Katarsis & Aydınlanma Krizi',
    jungianArchetypeEn: 'Ego Dissolution, Catharsis & Breakthrough',
    historicalNoteTr: 'Babil Kulesi mitolojisinden beslenir. İnsanın kibrinin ve sahte güvenlik duvarlarının ilahi bir müdahaleyle yerle bir edilişidir.',
    historicalNoteEn: 'Rooted in the myth of the Tower of Babel; false constructs shattering under divine insight.',
    meditativeMottoTr: 'Yıkılan şey gerçek sen değilsin; yıkılan sadece içine hapsolduğun illüzyondur.',
    meditativeMottoEn: 'What falls is not your true essence, only the prison you mistook for sanctuary.',
    secretSymbolsTr: [
      {
        symbol: 'Göksel Şimşek Çarpması',
        hiddenMeaning: 'Aşağıdan gelen bir patlama değil, yukarıdan inen ani aydınlanma ve hakikat ışığı.'
      },
      {
        symbol: 'Düşen Altın Taç',
        hiddenMeaning: 'Egonun kendini tanrı ilan ettiği sahte tahtının devrilişi ve kibrin sonu.'
      },
      {
        symbol: 'Havada Uçuşan 22 Alev Damlası',
        hiddenMeaning: 'İbrani alfabesinin 22 harfi ve 22 Büyük Arkana. Yıkımın içinde bile kozmik düzenin tohumları korunur.'
      },
      {
        symbol: 'Aşağı Düşen İki Figür',
        hiddenMeaning: 'Bilinç ve bilinçaltının kibir kulesinden toprağa geri dönmesi; yeniden doğuş için çıplak kalmak.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Downward Lightning Strike',
        hiddenMeaning: 'Sudden flash of undeniable higher truth tearing through self-deception.'
      },
      {
        symbol: 'Falling Golden Crown',
        hiddenMeaning: 'Dethroning of false pride and superficial control structures.'
      },
      {
        symbol: '22 Yod Flame Droplets',
        hiddenMeaning: 'Representing the 22 paths of the Tree of Life; sacred order preserved even in collapse.'
      },
      {
        symbol: 'Falling Figures',
        hiddenMeaning: 'Humbling return to the fertile ground of raw human vulnerability.'
      }
    ]
  },
  {
    cardId: 17,
    cardNameTr: 'Yıldız (The Star)',
    cardNameEn: 'The Star',
    arcanaNumber: 'XVII',
    element: 'Hava',
    zodiacAssociation: 'Kova (Gelecek Vizyonu, Umut & Kolektif Şifa)',
    kabbalahLetter: 'Tzaddi (Kanca / Ruh Balıkçısı)',
    jungianArchetypeTr: 'Öz (The Self), Arınma & Kozmik Umut',
    jungianArchetypeEn: 'The Self, Purification & Cosmic Grace',
    historicalNoteTr: 'Eski Mısır’da Nil nehrinin taşmasını haber veren ve bereketi müjdeleyen Sirius (Sothis) yıldızıyla özdeşleştirilir.',
    historicalNoteEn: 'Associated with Sirius (Sothis) in Ancient Egypt, heralded the annual life-giving Nile flood.',
    meditativeMottoTr: 'Karanlık en koyu anındayken gökyüzündeki ilk yıldız sana yol gösterir.',
    meditativeMottoEn: 'When the night is deepest, the solitary star whispers of dawn.',
    secretSymbolsTr: [
      {
        symbol: 'Büyük 8 Köşeli Altın Yıldız',
        hiddenMeaning: 'Sirius yıldızı ve içsel pusula. İnsanın ilahi rehberliğe koşulsuz güvenini simgeler.'
      },
      {
        symbol: 'Çıplak Su Taşıyıcısı Kadın',
        hiddenMeaning: 'Savunmasızlık, maskesizlik ve doğallık. Hiçbir şeyi saklamayan ruhun saf iyileşme gücü.'
      },
      {
        symbol: 'İki Testiden Biri Suya, Biri Toprağa',
        hiddenMeaning: 'Kolektif bilinçdışının şifasını hem duygulara (su) hem de somut yaşama (toprak) aynı anda akıtma dengesi.'
      },
      {
        symbol: 'Ağaçtaki İbis Kuşu',
        hiddenMeaning: 'Mısır bilgelik ve yazı tanrısı Thoth’un simgesi; zihnin arındıktan sonra bilgelikle dolması.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Eight-Pointed Star',
        hiddenMeaning: 'The star of Sirius; represents renewal, spiritual destination, and quiet trust.'
      },
      {
        symbol: 'Naked Female Figure',
        hiddenMeaning: 'Soul stripped of artificial personas, acting as pure vessel for healing waters.'
      },
      {
        symbol: 'Two Pitchers (Earth & Water)',
        hiddenMeaning: 'Balancing conscious worldly duties with rich subconscious replenishment.'
      },
      {
        symbol: 'Ibis Bird in Tree',
        hiddenMeaning: 'Sacred symbol of Thoth, god of wisdom, signifying the dawn of higher clarity.'
      }
    ]
  },
  {
    cardId: 19,
    cardNameTr: 'Güneş (The Sun)',
    cardNameEn: 'The Sun',
    arcanaNumber: 'XIX',
    element: 'Ateş',
    zodiacAssociation: 'Güneş (Yaşam Enerjisi, Berraklık & Canlılık)',
    kabbalahLetter: 'Resh (Baş / Güneşin Aydınlattığı Akıl)',
    jungianArchetypeTr: 'Aydınlanmış Bilinç, Saf Yaşam Sevinci & Bütünlük',
    jungianArchetypeEn: 'Illuminated Consciousness & Archetypal Wholeness',
    historicalNoteTr: 'Tüm antik kültürlerde Apollo, Ra ve Sol Invictus gibi hayat veren tanrısal güneş arketiplerinin birleşimidir.',
    historicalNoteEn: 'Harmonizes life-giving solar deities: Apollo, Ra, and Sol Invictus across antiquity.',
    meditativeMottoTr: 'Gerçek güç gölgeden kaçmakta değil, kendi ışığını korkusuzca yaymaktadır.',
    meditativeMottoEn: 'True power lies not in fleeing shadow, but in radiating your innate dawn.',
    secretSymbolsTr: [
      {
        symbol: 'Beyaz Ata Binen Çıplak Çocuk',
        hiddenMeaning: 'Yeniden kazanılmış çocuksu masumiyet ve zihnin evcilleşmiş içgüdüler (beyaz at) üzerinde özgürce yol alması.'
      },
      {
        symbol: 'Kırmızı Tüy ve Bayrak',
        hiddenMeaning: 'Deli kartındaki kırmızı tüyün burada muzaffer bir bayrağa dönüşmesi; yolculuğun başarıyla tamamlanışı.'
      },
      {
        symbol: 'Dört Ayçiçeği',
        hiddenMeaning: '4 elementin (ateş, su, hava, toprak) güneşin ışığı altında tam bir bereketle olgunlaşması.'
      },
      {
        symbol: 'Taş Duvar',
        hiddenMeaning: 'Eski kısıtlayıcı yapıların artık arkada bırakıldığını ve geride kaldığını gösterir.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Naked Child on White Horse',
        hiddenMeaning: 'Reclaimed innocence riding pure integrated instinct with effortless poise.'
      },
      {
        symbol: 'Red Feather & Banner',
        hiddenMeaning: 'The Fool’s modest feather transformed into a triumphant banner of awakened life.'
      },
      {
        symbol: 'Four Sunflowers',
        hiddenMeaning: 'The 4 elements reaching blooming maturation beneath conscious truth.'
      },
      {
        symbol: 'Low Stone Wall',
        hiddenMeaning: 'Past artificial psychological barriers left behind in favor of expansive radiance.'
      }
    ]
  },
  {
    cardId: 21,
    cardNameTr: 'Dünya (The World)',
    cardNameEn: 'The World',
    arcanaNumber: 'XXI',
    element: 'Toprak / Bütünlük',
    zodiacAssociation: 'Satürn (Zamanın Tamamlanışı & Ustalık)',
    kabbalahLetter: 'Tav (Mühür / Kozmik İmza)',
    jungianArchetypeTr: 'Bireyleşmenin Tamamlanışı & Mandala / Kendilik',
    jungianArchetypeEn: 'Individuation Completed & Cosmic Mandala',
    historicalNoteTr: 'Kozmik dansçı, evrenin sonsuz ritmini kutlar; tarot yolculuğunun (Deliden Dünyaya) nihai zirvesidir.',
    historicalNoteEn: 'The cosmic dancer celebrating eternal rhythm; the triumphant completion of the archetypal journey.',
    meditativeMottoTr: 'Sen evrenin içinde küçük bir parça değilsin; evren senin içinde tam bir danstır.',
    meditativeMottoEn: 'You are not a grain in the universe; the entire cosmos dances within you.',
    secretSymbolsTr: [
      {
        symbol: 'Yeşil Defne Çelengi (Ouroboros)',
        hiddenMeaning: 'Sonsuz yaşam döngüsü ve zafer tacı. Bir döngünün başarıyla bitip yeni bir bilincin başlaması.'
      },
      {
        symbol: 'Dört Köşedeki Figürler (İnsan, Kartal, Aslan, Boğa)',
        hiddenMeaning: '4 sabit burç (Kova, Akrep, Aslan, Boğa) ve 4 İncil yazarı; evrensel kozmik dengenin 4 ayağı.'
      },
      {
        symbol: 'Dans Eden Çift Cinsiyetli / Androjen Figür',
        hiddenMeaning: 'Eril ve dişil enerjilerin (Animus ve Anima) kusursuz içsel evliliği (Mysterium Coniunctionis).'
      },
      {
        symbol: 'İki Elindeki Çift Asa',
        hiddenMeaning: 'Büyücü kartındaki tek asanın burada ikiye katlanması; hem yaratım hem tezahür gücünün tam ustalığı.'
      }
    ],
    secretSymbolsEn: [
      {
        symbol: 'Laurel Wreath (Ouroboros)',
        hiddenMeaning: 'The victory wreath of wholeness; completion of one cycle and sovereign rebirth.'
      },
      {
        symbol: 'Four Living Creatures in Corners',
        hiddenMeaning: 'The four fixed signs (Aquarius, Scorpio, Leo, Taurus) grounding cosmic stability.'
      },
      {
        symbol: 'Dancing Center Figure',
        hiddenMeaning: 'The sacred inner marriage of masculine and feminine principles.'
      },
      {
        symbol: 'Dual Magic Wands',
        hiddenMeaning: 'Mastery over both the invokation and execution of conscious destiny.'
      }
    ]
  }
];
