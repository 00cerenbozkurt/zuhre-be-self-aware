// Tarot Tarihi, Gizli Ezoterik Sembolizmler ve Arketipsel Bilgelik Veritabanı
// 22 Büyük Arkana Kartının Tamamı ve Genişletilmiş Tarihsel Hikayeler

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
  longNarrativeTr: string;
  longNarrativeEn: string;
  prominentFigures: string[];
  esotericInnovationsTr: string[];
  esotericInnovationsEn: string[];
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
    locationTr: 'Milano Dükalığı & Ferrara, İtalya',
    locationEn: 'Duchy of Milan & Ferrara, Italy',
    descriptionTr: 'Bilinen en eski Tarot destesi olan Visconti-Sforza, altın varakla süslenmiş aristokratik bir alegori oyunuydu (Tarocchi).',
    descriptionEn: 'The oldest known tarot deck, Visconti-Sforza, was a gilded aristocratic allegory game painted in Renaissance Italy.',
    keyLegacyTr: 'Büyük Arkananın erdem ve kozmik hiyerarşi yapısının temeli atıldı.',
    keyLegacyEn: 'Laid the foundation of Major Arcana virtue and cosmic hierarchy.',
    longNarrativeTr: '15. yüzyılın ortalarında Milano Dükü Filippo Maria Visconti ve damadı Francesco Sforza için saray ressamı Bonifacio Bembo tarafından sipariş edilen bu kartlar, bir kehanet aracından ziyade Rönesans Hümanizminin ve Hristiyan mistisizminin görsel bir ansiklopedisiydi. Kartlar saf altın yapraklar üzerine minyatür tekniğiyle elle işlenmişti. İtalyan Rönesansı sırasında Petrarch’ın "Zaferler" (I Trionfi) şiirinden esinlenilmiş; Aşk, İffet, Ölüm, Şöhret, Zaman ve Sonsuzluk gibi erdem basamakları bu kartlarda kişiselleştirilmiştir. Visconti destesi, insanın dünyevi tutkulardan ilahi sonsuzluğa yükseliş basamaklarını simgeleyen ilk felsefi yolculuk haritasıdır.',
    longNarrativeEn: 'Commissioned by Duke Filippo Maria Visconti and painted by Bonifacio Bembo in Milan around 1450, these cards were a visual encyclopedia of Renaissance humanism rather than fortune-telling. Illuminated with genuine gold leaf, they drew inspiration from Petrarch’s "I Trionfi" (Triumphs), allegorizing the ascent of the human soul through Love, Chastity, Death, Fame, Time, and Eternity.',
    prominentFigures: ['Filippo Maria Visconti', 'Francesco Sforza', 'Bonifacio Bembo', 'Petrarch'],
    esotericInnovationsTr: [
      'Büyük Arkananın (Trionfi) 22 kozmik aşamasının ilk taslakları oluşturuldu.',
      'Platonik 4 temel erdem (Adalet, Güç, Denge, İhtiyat) kartlara taşındı.',
      'Aristokratik saray düğünleri ve diplomatik ittifaklar kartlardaki hanedan armalarıyla mühürlendi.'
    ],
    esotericInnovationsEn: [
      'Early drafting of the 22 cosmic stages of the Major Arcana.',
      'Integration of Platonic virtues (Justice, Strength, Temperance, Prudence).',
      'Heraldic alliances sealed via heraldic symbols on gold leaf.'
    ]
  },
  {
    id: 'marseille',
    era: 'Tahta Baskı & Halk Bilgeliği',
    year: '1650 - 1750',
    titleTr: 'Marsilya Ekolü (Tarot de Marseille)',
    titleEn: 'Tarot de Marseille School',
    locationTr: 'Fransa (Marsilya, Lyon & Paris)',
    locationEn: 'France (Marseille, Lyon & Paris)',
    descriptionTr: 'Ağaç oyma tahta baskı tekniğiyle üretilen Marsilya destesi, Tarot’yu halkın, loncaların ve gezgin simyacıların eline taşıdı.',
    descriptionEn: 'Woodblock printed Marseille tarot democratized cards into the hands of guilds, pilgrims, and alchemists.',
    keyLegacyTr: '78 kartlık evrensel yapı standartlaştı ve simyasal renk kodları yerleşti.',
    keyLegacyEn: 'Standardized the 78-card structure and established alchemical color coding.',
    longNarrativeTr: '17. yüzyılda Fransız kart ustaları (özellikle Nicolas Conver ve Jean Noblet), ahşap kalıplarla seri üretim yaparak Tarot’yu saray duvarlarının dışına çıkardı. Marsilya destesi, görsel sadeliğinin arkasında derin bir Ortaçağ katedral mimarisi ve simya geometrisi saklar. Kartlarda sadece 4 ana renk kullanılır: Kırmızı (kükürt, irade, eril eylem), Mavi (cıva, ruh, alıcı dişil bilinç), Sarı (altın, ilahi zeka) ve Beyaz (saf potansiyel). Marsilya ekolünde küçük arkana kartları insan figürleri içermez; kılıçların kavisi, kupaların kadehleri ve değneklerin filizleri numerolojik ve geometrik bir ritimle konuşur.',
    longNarrativeEn: 'In 17th-century France, master cardmakers like Nicolas Conver and Jean Noblet used hand-carved pearwood blocks. Behind their crude aesthetic lies profound sacred geometry and cathedral symbolism. Restricting colors to primary Red (sulfur/action), Blue (mercury/intuition), Yellow (solar intellect), and White (purity), it became the primary deck of European continental occultism.',
    prominentFigures: ['Jean Noblet (1650)', 'Nicolas Conver (1760)', 'Court de Gébelin (1781)', 'Éliphas Lévi (1854)'],
    esotericInnovationsTr: [
      '78 kartlık standart İtalyan/Fransız takım sistemi (Değnek, Kupa, Kılıç, Tılsım) evrenselleşti.',
      'Fransız okültist Court de Gébelin, Tarot’nun Mısır’ın kayıp "Thoth’un Kitabı" olduğunu ilan etti.',
      'Éliphas Lévi, 22 Büyük Arkana kartını İbrani alfabesinin 22 harfi ve Kabala’nın Yaşam Ağacı yollarıyla eşleştirdi.'
    ],
    esotericInnovationsEn: [
      'Standardization of the four suits (Wands, Cups, Swords, Batons).',
      'Court de Gébelin popularized the Egyptian Book of Thoth connection.',
      'Éliphas Lévi systematically aligned the 22 trumps with the 22 Hebrew letters.'
    ]
  },
  {
    id: 'rider-waite',
    era: 'Hermetik Altın Şafak Ekolü',
    year: '1909',
    titleTr: 'Rider-Waite-Smith: Devrimci Dönüm Noktası',
    titleEn: 'Rider-Waite-Smith: The Revolutionary Turning Point',
    locationTr: 'Londra, İngiltere',
    locationEn: 'London, United Kingdom',
    descriptionTr: 'Ezoterik bilgin Arthur Edward Waite’in kurguladığı ve ressam Pamela Colman Smith’in resmettiği bu deste küçük arkanayı ilk kez resimlendirdi.',
    descriptionEn: 'Devised by occult scholar A.E. Waite and illustrated by Pamela Colman Smith, illustrating all 78 cards.',
    keyLegacyTr: 'Modern psikolojik ve arketipsel tarotun dünya çapındaki temel referansı haline geldi.',
    keyLegacyEn: 'Became the universal global benchmark for modern psychological tarot.',
    longNarrativeTr: '1909 yılında Londra’da yayımlanan Rider-Waite-Smith destesi, Tarot tarihinde yapılmış en radikal devrimdir. Hermetik Altın Şafak Cemiyeti (Hermetic Order of the Golden Dawn) üyesi olan Arthur Edward Waite, kartların arkasındaki gizli ritüel kodlarını halka açmak istedi. Ressam Pamela Colman Smith ("Pixie"), Waite’in mistik vizyonlarını tiyatral ve duygusal derinliği olan 78 sahneye dönüştürdü. En büyük devrim: Tarihte ilk defa küçük arkananın 1-10 arasındaki sayı kartları sadece "4 kılıç" veya "6 kupa" olarak değil; bir teknede yas tutan aile (6 Kılıç) veya uykusuzluk çeken kaygılı figür (9 Kılıç) gibi dramatik insan sahneleriyle resmedildi.',
    longNarrativeEn: 'Published in London in 1909, this deck marked a watershed moment. A.E. Waite and artist Pamela Colman Smith synthesized Kabbalah, Rosicrucian mysticism, and astrological decans. For the first time in history, every pip card was illustrated with emotional human narratives, democratizing intuitive reading across the English-speaking world.',
    prominentFigures: ['Arthur Edward Waite', 'Pamela Colman Smith ("Pixie")', 'William Rider & Son', 'S.L. MacGregor Mathers'],
    esotericInnovationsTr: [
      'Tüm 56 Küçük Arkana kartı ilk defa insan duygusu ve arketipik anlatılarla görselleştirildi.',
      '8 numaralı Adalet ile 11 numaralı Güç kartının astrolojik burç sıralamasına (Aslan ve Terazi) uyması için yerleri değiştirildi.',
      'Kabala, astroloji, simya ve Hristiyan ezoterizmi tek bir tutarlı sembolik dilde birleştirildi.'
    ],
    esotericInnovationsEn: [
      'Every minor pip card was imbued with distinct evocative human scenes.',
      'Strength and Justice swapped positions (8 and 11) to match the zodiacal order.',
      'Harmonization of Golden Dawn astrological decans and Kabbalistic paths.'
    ]
  },
  {
    id: 'jungian',
    era: 'Analitik Psikoloji & Bireyleşme',
    year: '1960 - Günümüz',
    titleTr: 'Carl Jung ve Arketipsel Senkronisite',
    titleEn: 'Carl Jung & Archetypal Synchronicity',
    locationTr: 'Zürih, İsviçre',
    locationEn: 'Zurich, Switzerland',
    descriptionTr: 'Carl Gustav Jung, Tarot’yu kehanetten kurtararak "kolektif bilinçdışının aynası ve bireyleşme pusulası" haline getirdi.',
    descriptionEn: 'Carl Jung emancipated tarot from superstition, viewing it as a mirror of the collective unconscious.',
    keyLegacyTr: 'Tarot’yu bilimsel psikoloji, gölge çalışması ve sezgisel terapi aracına dönüştürdü.',
    keyLegacyEn: 'Transformed tarot into an established psychological tool for shadow work.',
    longNarrativeTr: 'İsviçreli psikanalist Carl Gustav Jung, 1930’lu yıllarda Tarot kartlarını incelerken bunların insan psişesinin evrensel arketiplerini taşıdığını fark etti: Deli (Puer Aeternus), Azize (Anima), İmparator (Animus / Baba), Ermiş (Bilge Yaşlı Adam) ve Dünya (Mandala / Kendilik). Jung’a göre kart çekmek geleceği bilmek değil; o anda bilinçdışında olup biten bastırılmış arzuların, korkuların ve komplekslerin "senkronisite" (anlamlı rastlantı) yasasıyla masaya yansımasıdır. Bugün modern psikologlar ve koçlar Tarot’yu, kişinin kendi içindeki gölgeyle yüzleşmesi ve ruhsal bütünlüğe (Individuation) ulaşması için güçlü bir yansıtma tekniği olarak kullanmaktadır.',
    longNarrativeEn: 'Carl Jung identified the Major Arcana as externalized representations of foundational archetypes of the human psyche. Drawing a card operates through synchronicity—an acausal connecting principle bridging internal subconscious dilemmas with outer symbolic imagery. It serves as an active catalyst for Jungian individuation.',
    prominentFigures: ['Carl Gustav Jung', 'Marie-Louise von Franz', 'Sallie Nichols ("Jung and Tarot")', 'James Hillman'],
    esotericInnovationsTr: [
      '"Senkronisite" (anlamlı tesadüf) kavramı Tarot kart çekiminin bilimsel-felsefi temeli yapıldı.',
      'Geleceği kehanet etme iddiası yerine "anlık psikolojik durum analizi" ve gölge entegrasyonu getirildi.',
      'Büyük Arkana serisi, insanın çocukluk masumiyetinden (Deli) nihai ruhsal olgunluğa (Dünya) uzanan Bireyleşme Yolculuğu (Hero\'s Journey) olarak yorumlandı.'
    ],
    esotericInnovationsEn: [
      'Synchronicity established as the philosophical anchor of card drawing.',
      'Replacement of fatalistic predictions with introspective self-awareness.',
      'Viewing the Major Arcana as the universal Hero’s Journey of Individuation.'
    ]
  }
];

// 22 Büyük Arkana Kartının Eksiksiz Ezoterik ve Psikolojik Sembolizm Veritabanı
export const TAROT_SECRET_INSIGHTS: TarotSymbolicInsight[] = [
  {
    cardId: 0,
    cardNameTr: 'Deli (The Fool)',
    cardNameEn: 'The Fool',
    arcanaNumber: '0',
    element: 'Hava',
    zodiacAssociation: 'Uranüs (Ani Aydınlanma & Özgürlük)',
    kabbalahLetter: 'Alef (İlahi Nefes)',
    jungianArchetypeTr: 'İlahi Çocuk & Puer Aeternus',
    jungianArchetypeEn: 'The Divine Child & Puer Aeternus',
    historicalNoteTr: 'Tüm sayıların öncesindeki sıfır sayısıdır; hem hiçlik hem de tüm potansiyellerin kaynağıdır.',
    historicalNoteEn: 'Preceding all numbers as zero; representing absolute emptiness and boundless potential.',
    meditativeMottoTr: 'Hiçbir şeye tutunmadığında, evrenin tüm akışına güvenirsin.',
    meditativeMottoEn: 'When you cling to nothing, you trust the total flow of existence.',
    secretSymbolsTr: [
      { symbol: 'Uçurum Kenarı', hiddenMeaning: 'Korku ile inancın kesişim noktası. Bilinen dünyadan bilinmeyene atılacak cesaret adımı.' },
      { symbol: 'Beyaz Gül', hiddenMeaning: 'Tutku ve arzulardan arınmış saf zihin, başlangıç masumiyeti.' },
      { symbol: 'Küçük Beyaz Köpek', hiddenMeaning: 'Sadık içgüdüler ve sezgisel koruyucu rehber.' },
      { symbol: 'Sırtındaki Çanta', hiddenMeaning: 'Atalardan taşınan ancak henüz açılmamış gizli yetenekler ve hatıralar.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Cliff Edge', hiddenMeaning: 'The boundary between rational certainty and the leap of faith.' },
      { symbol: 'White Rose', hiddenMeaning: 'Purity of intent unburdened by worldly cunning.' },
      { symbol: 'Small White Dog', hiddenMeaning: 'Animal instinct acting as a faithful inner guardian.' },
      { symbol: 'Knapsack', hiddenMeaning: 'Dormant ancestral talents yet to be unwrapped.' }
    ]
  },
  {
    cardId: 1,
    cardNameTr: 'Büyücü (The Magician)',
    cardNameEn: 'The Magician',
    arcanaNumber: 'I',
    element: 'Ruh / Eter',
    zodiacAssociation: 'Merkür (Zihin, İfade & Simya)',
    kabbalahLetter: 'Bet (Yaratılış Kapısı)',
    jungianArchetypeTr: 'Bilinçli İrade, Simyacı & Yaratıcı Güç',
    jungianArchetypeEn: 'The Conscious Will & The Alchemist',
    historicalNoteTr: 'Hermes Trismegistus’un "Yukarıda olan neyse, aşağıda olan da odur" prensibinin resmedilmiş halidir.',
    historicalNoteEn: 'Direct embodiment of the Hermetic axiom: "As above, so below".',
    meditativeMottoTr: 'Zihninde netleştirdiğin her vizyon, dünyada somutlaşacak güce sahiptir.',
    meditativeMottoEn: 'Every clear vision in mind possesses the innate power to materialize.',
    secretSymbolsTr: [
      { symbol: 'Sonsuzluk İşareti (Lemniscate)', hiddenMeaning: 'Başının üzerindeki yatay sekiz; tükenmez zihinsel ve ruhsal enerji.' },
      { symbol: 'Masadaki Dört Element Aracı', hiddenMeaning: 'Asa (Ateş/İrade), Kupa (Su/Duygu), Kılıç (Hava/Zihin), Tılsım (Toprak/Beden).' },
      { symbol: 'Sağ El Göğe, Sol El Yere', hiddenMeaning: 'Kozmik evrensel enerjiyi madde boyutuna indiren iletken kanal.' },
      { symbol: 'Kırmızı Gül & Beyaz Zambak Bahçesi', hiddenMeaning: 'Gül insan arzusunu, zambak ise saf ruhani amacı simgeler.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Lemniscate', hiddenMeaning: 'Infinite mental capacity channeling cosmic vitality.' },
      { symbol: 'Four Elemental Weapons', hiddenMeaning: 'Wand (Will), Cup (Emotion), Sword (Intellect), Pentacle (Physical manifestation).' },
      { symbol: 'Right Hand Up, Left Hand Down', hiddenMeaning: 'Acting as an open lightning rod for spiritual manifestation.' },
      { symbol: 'Roses and Lilies', hiddenMeaning: 'Desire harmonized with divine aspiration.' }
    ]
  },
  {
    cardId: 2,
    cardNameTr: 'Azize (The High Priestess)',
    cardNameEn: 'The High Priestess',
    arcanaNumber: 'II',
    element: 'Su',
    zodiacAssociation: 'Ay (Bilinçdışı, Gece & Gel-Gitler)',
    kabbalahLetter: 'Gimel (Deve / Çölü Aşan İçsel Güç)',
    jungianArchetypeTr: 'Anima, Sezgi Tapınağı & Gizli Bilinçdışı',
    jungianArchetypeEn: 'The Anima & The Oracle of the Unconscious',
    historicalNoteTr: 'Tarihteki kadın Papa Joan efsanesine ve tapınak bilicilerine atıfta bulunur.',
    historicalNoteEn: 'Echoes the medieval legend of Papess Joan and ancient mystery sanctuary priestesses.',
    meditativeMottoTr: 'Cevapları dışarıda arama; mutlak sessizlikte ruhun zaten her şeyi bilir.',
    meditativeMottoEn: 'Cease external queries; in sacred stillness your soul already knows.',
    secretSymbolsTr: [
      { symbol: 'Boaz (B) ve Jachin (J) Sütunları', hiddenMeaning: 'Karanlık ve aydınlık, pasif ve aktif kutupların tam merkezinde oturma dengesi.' },
      { symbol: 'Narlı Perde', hiddenMeaning: 'Persefoni’nin yeraltı sırrı; bilincin arkasındaki bilinçdışını örter.' },
      { symbol: 'TORA Parşömeni', hiddenMeaning: 'Yarı kapalı ilahi yasa; sadece sezgisel olarak hazır olana açılan hakikat.' },
      { symbol: 'Ayak Ucundaki Hilal', hiddenMeaning: 'Duygusal dalgalanmaların ve yanılsamaların üzerinde kurulan tam hâkimiyet.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Pillars of Boaz and Jachin', hiddenMeaning: 'Serene equilibrium seated exactly between dualities.' },
      { symbol: 'Pomegranate Veil', hiddenMeaning: 'The veil screening the deeper subterranean mysteries.' },
      { symbol: 'TORA Scroll', hiddenMeaning: 'Occult truth concealed from superficial intellectualism.' },
      { symbol: 'Crescent Moon', hiddenMeaning: 'Mastery over the instinctual lunar tides.' }
    ]
  },
  {
    cardId: 3,
    cardNameTr: 'İmparatoriçe (The Empress)',
    cardNameEn: 'The Empress',
    arcanaNumber: 'III',
    element: 'Toprak',
    zodiacAssociation: 'Venüs (Güzellik, Doğurganlık & Sevgi)',
    kabbalahLetter: 'Dalet (Kapı / Yaşama Açılan Rahim)',
    jungianArchetypeTr: 'Büyük Anne, Doğa Ana & Koşulsuz Kabul',
    jungianArchetypeEn: 'The Great Mother & Abundant Nature',
    historicalNoteTr: 'Antik çağın anaerkil ana tanrıçaları İsis, Demeter ve Venüs’ün tahtta bedenlenmiş halidir.',
    historicalNoteEn: 'Incarnation of primal fertility goddesses: Isis, Demeter, and Venus.',
    meditativeMottoTr: 'Varlık çaba ile kazanılmaz; sen var oluşun kendisiyle değerlisin.',
    meditativeMottoEn: 'Worth is not earned through toil; you are sacred simply by being.',
    secretSymbolsTr: [
      { symbol: '12 Yıldızlı Taç', hiddenMeaning: '12 Zodyak burcu ve 12 ayı yöneten kozmik döngülerin egemenliği.' },
      { symbol: 'Venüs Sembollü Kalkan', hiddenMeaning: 'Sevgi, şefkat ve kabulün en büyük koruma kalkanı olduğunu gösterir.' },
      { symbol: 'Olgunlaşmış Buğday Tarlası', hiddenMeaning: 'Emeklerin berekete ve somut doyuma dönüştüğü hasat zamanı.' },
      { symbol: 'Akan Çağlayan & Su', hiddenMeaning: 'Bilinçdışından gelen hayat suyunun doğayı ve yaratıcılığı beslemesi.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Twelve-Starred Diadem', hiddenMeaning: 'Dominion over the twelve zodiac houses and seasonal cycles.' },
      { symbol: 'Venusian Shield', hiddenMeaning: 'Unconditional love serving as the ultimate protective armor.' },
      { symbol: 'Golden Wheat Field', hiddenMeaning: 'Abundance springing effortlessly from fertile soil.' },
      { symbol: 'Flowing Waterfall', hiddenMeaning: 'Creative life-force irrigating physical reality.' }
    ]
  },
  {
    cardId: 4,
    cardNameTr: 'İmparator (The Emperor)',
    cardNameEn: 'The Emperor',
    arcanaNumber: 'IV',
    element: 'Ateş',
    zodiacAssociation: 'Koç (Öncülük, Otorite & İrade)',
    kabbalahLetter: 'He (Pencere / Gören Göz)',
    jungianArchetypeTr: 'Babanın Yasası, Animus & Düzen Kurucu',
    jungianArchetypeEn: 'The Father Law, Animus & The Sovereign',
    historicalNoteTr: 'Roma İmparatorluk kültü ve dünyevi yasaların, askeri disiplinin arketipidir.',
    historicalNoteEn: 'Embodiment of Roman civic sovereignty, boundaries, and patriarchal structure.',
    meditativeMottoTr: 'Sınır koymak sevgisizlik değil; kendi ruhunu ve enerjini koruma erdemidir.',
    meditativeMottoEn: 'Setting clear boundaries is not cruelty, but the highest form of self-respect.',
    secretSymbolsTr: [
      { symbol: 'Taştan Taht ve 4 Koç Başı', hiddenMeaning: 'Koç burcunun öncü ateşi ve sarsılmaz, duygusallıktan arınmış sağlam temel.' },
      { symbol: 'Ankh Asası', hiddenMeaning: 'Mısır yaşam anahtarı; otoritenin yıkmak için değil yaşatmak için var oluşu.' },
      { symbol: 'Zırh Üzerine Kırmızı Pelerin', hiddenMeaning: 'Sürekli savaşa ve savunmaya hazır, eylem odaklı eril güç.' },
      { symbol: 'Arka Plandaki Çorak Dağlar', hiddenMeaning: 'Duygusal rehavete kapılmayan katı realizm ve soğukkanlı mantık.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Stone Throne with Ram Heads', hiddenMeaning: 'Unyielding foundation ignited by Aries pioneering fire.' },
      { symbol: 'Crux Ansata (Ankh)', hiddenMeaning: 'Authority dedicated to preserving and protecting life.' },
      { symbol: 'Armor Beneath Red Robe', hiddenMeaning: 'Preparedness for sovereign responsibility.' },
      { symbol: 'Barren Mountains', hiddenMeaning: 'Unsentimental realism and disciplined structure.' }
    ]
  },
  {
    cardId: 5,
    cardNameTr: 'Aziz / Hierophant (The Hierophant)',
    cardNameEn: 'The Hierophant',
    arcanaNumber: 'V',
    element: 'Toprak',
    zodiacAssociation: 'Boğa (Kökleşme, Gelenek & Ahlak)',
    kabbalahLetter: 'Vav (Çivi / Gök ile Yeri Bağlayan Köprü)',
    jungianArchetypeTr: 'Gelenek, Kolektif Ahlak & Ruhsal Öğretmen',
    jungianArchetypeEn: 'The Spiritual Teacher & Collective Norm',
    historicalNoteTr: 'Tarihte Papa (Le Pape) olarak adlandırılan bu kart, ezoterik bilginin kurumsallaşmış köprüsüdür.',
    historicalNoteEn: 'Originally designated "The Pope" in Marseille, mediating esoteric lore through structured doctrine.',
    meditativeMottoTr: 'Dışsal dogmalar sana dar geldiğinde, tapınağı kendi kalbinde yeniden inşa et.',
    meditativeMottoEn: 'When outer dogma suffocates your spirit, construct the sanctuary in your heart.',
    secretSymbolsTr: [
      { symbol: 'Üç Katlı Haç Asası', hiddenMeaning: 'Fiziksel, zihinsel ve ruhsal üç boyutta geçerli evrensel yasa.' },
      { symbol: 'İki Çapraz Anahtar', hiddenMeaning: 'Bilinç ve bilinçaltının kapılarını açan ezoterik simyasal anahtarlar.' },
      { symbol: 'Önündeki İki Mürit', hiddenMeaning: 'Kişisel egonun evrensel kadim bilgi karşısında tevazu ile öğrenmeye açılması.' },
      { symbol: 'Gri Taş Sütunlar', hiddenMeaning: 'Zamanın yıpratamadığı geleneksel kurumlar ve toplumsal hafıza.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Triple Cross Staff', hiddenMeaning: 'Cosmic law harmonizing physical, mental, and spiritual planes.' },
      { symbol: 'Crossed Keys of Peter', hiddenMeaning: 'Unlocking the dual thresholds of consciousness and mystery.' },
      { symbol: 'Two Initiates', hiddenMeaning: 'Humility required to receive timeless wisdom.' },
      { symbol: 'Twin Grey Pillars', hiddenMeaning: 'Institutions safeguarding intergenerational memory.' }
    ]
  },
  {
    cardId: 6,
    cardNameTr: 'Âşıklar (The Lovers)',
    cardNameEn: 'The Lovers',
    arcanaNumber: 'VI',
    element: 'Hava',
    zodiacAssociation: 'İkizler (İletişim, Seçim & Zıtlıkların Birliği)',
    kabbalahLetter: 'Zayin (Kılıç / Ayırt Etme Gücü)',
    jungianArchetypeTr: 'Anima ve Animus’un Kutsal Birliği (Coniunctio)',
    jungianArchetypeEn: 'Sacred Inner Marriage (Mysterium Coniunctionis)',
    historicalNoteTr: 'Rönesans destelerinde bir gencin erdem ile dünyevi zevk arasında yaptığı kritik ahlaki seçimdi.',
    historicalNoteEn: 'Originally depicted a young youth choosing between Virtue and Vice.',
    meditativeMottoTr: 'Karşındakinde gördüğün şey senin kendi aynandır; seçim dışarıda değil, içindedir.',
    meditativeMottoEn: 'The other is your holy mirror; the supreme choice is radical self-acceptance.',
    secretSymbolsTr: [
      { symbol: 'Başmelek Raphael (İsrafil)', hiddenMeaning: 'Şifa ve hava meleği; gerçek sevginin zihinsel berraklık ve şifa getirdiğini gösterir.' },
      { symbol: 'Yaşam Ağacı ve Bilgi Ağacı', hiddenMeaning: 'Kadının arkasında 12 meyveli meyve ağacı, erkeğin arkasında 12 alevli hayat ağacı.' },
      { symbol: 'Kadının Erkeğe, Erkeğin Meleğe Bakışı', hiddenMeaning: 'Bilinçdışının bilince, bilincin ise yüksek benliğe bakış hiyerarşisi.' },
      { symbol: 'Arka Plandaki Kızıl Dağ', hiddenMeaning: 'Tutkunun ve iki ruhun birleştiğinde aşacağı yüce zirve.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Archangel Raphael', hiddenMeaning: 'Bringer of mental clarity, divine healing, and conscious union.' },
      { symbol: 'Tree of Life & Tree of Knowledge', hiddenMeaning: 'Feminine fruitfulness paired with masculine spiritual fire.' },
      { symbol: 'Triadic Gaze', hiddenMeaning: 'Subconscious gazing at conscious ego, ego gazing upward to Superconscious.' },
      { symbol: 'Red Phallic Mountain', hiddenMeaning: 'Primal life-energy catalyzed through profound communion.' }
    ]
  },
  {
    cardId: 7,
    cardNameTr: 'Savaş Arabası (The Chariot)',
    cardNameEn: 'The Chariot',
    arcanaNumber: 'VII',
    element: 'Su',
    zodiacAssociation: 'Yengeç (Duygusal Zırh, Odak & Koruma)',
    kabbalahLetter: 'Chet (Çit / Sınır Koyan Güç)',
    jungianArchetypeTr: 'Zıt Kutupları Yöneten İrade & Ego Entegrasyonu',
    jungianArchetypeEn: 'The Disciplined Ego & Harmonized Drives',
    historicalNoteTr: 'Antik Roma’daki muzaffer generallerin törensel geçiş arabalarından esinlenilmiştir.',
    historicalNoteEn: 'Modeled after triumphal Roman charioteers celebrating victorious conquests.',
    meditativeMottoTr: 'İçindeki siyah ve beyaz atları savaştırma; onları aynı amaca koştuğunda durdurulamazsın.',
    meditativeMottoEn: 'Do not pit your light against your dark; yoke them to the same chariot.',
    secretSymbolsTr: [
      { symbol: 'Siyah ve Beyaz Sfenksler', hiddenMeaning: 'Ruhun zıt içgüdüleri (öfke ve merhamet, gölge ve ışık). Dizginleri yoktur; zihinle yönetilir.' },
      { symbol: 'Yıldızlı Gölgelik (Kanopi)', hiddenMeaning: 'Dünyevi savaşın ilahi kozmik yasaların koruması altında gerçekleştiği.' },
      { symbol: 'Omuzlarındaki Hilaller (Urim ve Tummim)', hiddenMeaning: 'Duygusal iniş çıkışların birer zırh süsü gibi kontrol altına alınışı.' },
      { symbol: 'Taşlaşmış Araba Gövdesi', hiddenMeaning: 'Maddenin ağırlığına rağmen iradenin onu ileri taşıma zaferi.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Black and White Sphinxes', hiddenMeaning: 'Opposing instinctual forces directed purely via will without physical reins.' },
      { symbol: 'Star-Spangled Canopy', hiddenMeaning: 'Protection of celestial law over terrestrial endeavors.' },
      { symbol: 'Lunar Pauldrons', hiddenMeaning: 'Mastery over nocturnal vacillations and emotional vulnerabilities.' },
      { symbol: 'Cubical Chariot Body', hiddenMeaning: 'Spirit mastering solid matter.' }
    ]
  },
  {
    cardId: 8,
    cardNameTr: 'Güç (Strength)',
    cardNameEn: 'Strength',
    arcanaNumber: 'VIII',
    element: 'Ateş',
    zodiacAssociation: 'Aslan (Yürek Gücü, Cömertlik & Tutku)',
    kabbalahLetter: 'Tet (Yılan / Kundalini Enerjisi)',
    jungianArchetypeTr: 'Gölgenin Ehlileştirilmesi & Şefkatin Zaferi',
    jungianArchetypeEn: 'Integration of the Primal Beast & Compassion',
    historicalNoteTr: 'Waite, kartı 11 numaradan 8 numaraya çekerek Aslan burcuyla eşleştirmiştir.',
    historicalNoteEn: 'Waite shifted Strength to VIII to align directly with astrological Leo.',
    meditativeMottoTr: 'Gerçek güç kılıç çekmekte değil, kendi içindeki vahşi aslanı sevgiyle okşamaktadır.',
    meditativeMottoEn: 'True power uses no weapon; it gentles the roaring lion through tender grace.',
    secretSymbolsTr: [
      { symbol: 'Kızıl Aslanın Çenesi', hiddenMeaning: 'İnsanın bastırılmış hayvani dürtüleri, öfkesi ve cinselliği. Öldürülmez, evcilleştirilir.' },
      { symbol: 'Sonsuzluk İşareti (Lemniscate)', hiddenMeaning: 'Fiziksel kaba kuvvetin yerine sonsuz ruhani şefkatin geçişi.' },
      { symbol: 'Çiçeklerden Örülü Zincir', hiddenMeaning: 'Zorbalıkla değil, zarafet ve yumuşaklıkla kurulan sarsılmaz kontrol.' },
      { symbol: 'Beyaz Elbise', hiddenMeaning: 'Bencil çıkarlardan arınmış saf sevgi niyetinin gücü.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Closing the Lion\'s Jaws', hiddenMeaning: 'Taming animal passions through patience rather than violent repression.' },
      { symbol: 'Lemniscate Halo', hiddenMeaning: 'Infinite spiritual vitality transcending brute physical muscle.' },
      { symbol: 'Floral Garland', hiddenMeaning: 'Binding raw aggression with subtle beauty and gentleness.' },
      { symbol: 'White Robe', hiddenMeaning: 'Innocence that disarms fear and hostility.' }
    ]
  },
  {
    cardId: 9,
    cardNameTr: 'Ermiş (The Hermit)',
    cardNameEn: 'The Hermit',
    arcanaNumber: 'IX',
    element: 'Toprak',
    zodiacAssociation: 'Başak (Ayıklama, İçsel Hizmet & Derinleşme)',
    kabbalahLetter: 'Yod (Kozmik Tohum & Kıvılcım)',
    jungianArchetypeTr: 'Bilge Yaşlı Adam (Senex) & İçsel Işık',
    jungianArchetypeEn: 'The Wise Old Man (Senex) & Inner Beacon',
    historicalNoteTr: 'Diogenes’in fenerle hakikati arayışı veya zaman tanrısı Chronos alegorisidir.',
    historicalNoteEn: 'Echoes Diogenes carrying a lantern seeking genuine truth through ascetic contemplation.',
    meditativeMottoTr: 'Işığını dış dünyada arama; karanlık patikayı aydınlatacak tek fener senin kendi içindedir.',
    meditativeMottoEn: 'Seek no torch in the crowd; the lamp for your dark path is within.',
    secretSymbolsTr: [
      { symbol: 'Altı Köşeli Yıldızlı Fener', hiddenMeaning: 'Süleyman Mührü; fener tüm yolu değil, sadece bir sonraki adımı aydınlatır.' },
      { symbol: 'Altın Asa', hiddenMeaning: 'Deneyim ve disiplin sütunu; bilincin derin vadilerinde sağlam adımlarla ilerlemeyi sağlar.' },
      { symbol: 'Karlı Zirve', hiddenMeaning: 'Yalnızlık değil; dünyevi gürültüden arınmış en saf farkındalık platosu.' },
      { symbol: 'Gri Pelerin', hiddenMeaning: 'Egonun görünmezliği; kendini gösterme arzusundan vazgeçiş.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Lantern with Hexagram', hiddenMeaning: 'The Seal of Solomon; reveals only the next immediate step.' },
      { symbol: 'Golden Staff', hiddenMeaning: 'Experiential wisdom grounding the spiritual path.' },
      { symbol: 'Snowy Summit', hiddenMeaning: 'High altitude consciousness detached from trivial drama.' },
      { symbol: 'Grey Cloak', hiddenMeaning: 'Ego humility and self-effacing concentration.' }
    ]
  },
  {
    cardId: 10,
    cardNameTr: 'Kader Çarkı (Wheel of Fortune)',
    cardNameEn: 'Wheel of Fortune',
    arcanaNumber: 'X',
    element: 'Ateş',
    zodiacAssociation: 'Jüpiter (Genişleme, Şans & Kozmik Döngüler)',
    kabbalahLetter: 'Kaf (Avuç / Kaderi Tutan El)',
    jungianArchetypeTr: 'Kader, Senkronisite & Yaşamın Döngüsel Yasası',
    jungianArchetypeEn: 'Fate, Synchronicity & Cyclical Wholeness',
    historicalNoteTr: 'Ortaçağ felsefesindeki "Rota Fortunae" (Şans Çarkı) doktrininin ezoterik versiyonudur.',
    historicalNoteEn: 'The medieval philosophical concept of Rota Fortunae encoding cyclical turns of destiny.',
    meditativeMottoTr: 'Çarkın kenarındaysan savrulursun; çarkın tam merkezinde durursan huzur bulursun.',
    meditativeMottoEn: 'At the wheel’s rim you are thrown; rest at its silent hub to find peace.',
    secretSymbolsTr: [
      { symbol: 'Çarkın Üzerindeki Sfenks', hiddenMeaning: 'Çark dönerken dengede kalan tek figür; bilgelik ve bilincin değişmezliği.' },
      { symbol: 'Yükselen Hermanubis ve İnen Typhon', hiddenMeaning: 'Yükseliş ve iniş döngüleri; hiçbir kriz sonsuz değildir, hiçbir zafer ebedi değildir.' },
      { symbol: 'TAROT / TORA / ROTA Harfleri', hiddenMeaning: 'Harflerin döngüsü; Tarot (kart), Rota (çark), Tora (yasa), Orat (konuşur).' },
      { symbol: 'Dört Köşedeki Kanatlı Varlıklar', hiddenMeaning: '4 sabit burç (Boğa, Aslan, Akrep, Kova); kozmik bilginin kitaplarını okurlar.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Top Sphinx', hiddenMeaning: 'Immovable wisdom sitting serenely at the axis of change.' },
      { symbol: 'Anubis Ascending, Typhon Descending', hiddenMeaning: 'The perpetual alternating rhythms of evolution and dissolution.' },
      { symbol: 'Letters T-A-R-O', hiddenMeaning: 'Anagrammatic cycle: TAROT, ROTA (wheel), TORA (law), ORAT (speaks).' },
      { symbol: 'Four Winged Creatures', hiddenMeaning: 'The four fixed astrological signs studying eternal cosmic scriptures.' }
    ]
  },
  {
    cardId: 11,
    cardNameTr: 'Adalet (Justice)',
    cardNameEn: 'Justice',
    arcanaNumber: 'XI',
    element: 'Hava',
    zodiacAssociation: 'Terazi (Denge, Hakikat & Sebep-Sonuç)',
    kabbalahLetter: 'Lamed (Öğreten Değnek / İlahi Denge)',
    jungianArchetypeTr: 'Öz Sorumluluk, Netlik & Karmik Denge',
    jungianArchetypeEn: 'Self-Responsibility & Karmic Equilibrium',
    historicalNoteTr: 'Roma adalet tanrıçası Justitia ve Mısır’ın hakikat tüyü tanrıçası Ma’at ile özdeştir.',
    historicalNoteEn: 'Incarnation of Justitia and Egyptian Ma’at weighing hearts against truth.',
    meditativeMottoTr: 'Evren seni yargılamaz; sadece ektiğin tohumun meyvesini önüne koyar.',
    meditativeMottoEn: 'The universe never condemns; it simply harvests what you sowed.',
    secretSymbolsTr: [
      { symbol: 'İki Kenarlı Dik Kılıç', hiddenMeaning: 'Sağ eldeki kılıç; illüzyonları kesip atan keskin zihinsel hakikat.' },
      { symbol: 'Sol Eldeki Altın Terazi', hiddenMeaning: 'Sezgisel ve ahlaki tartı; eylemlerin karmik ağırlığını ölçer.' },
      { symbol: 'Kırmızı Cübbe ve Yeşil Pelerin', hiddenMeaning: 'Eylemin gücü (kırmızı) ile bilgeliğin dengesi (yeşil).' },
      { symbol: 'Sütunlar Arasındaki Mor Perde', hiddenMeaning: 'Ruhsal derinlik ve tarafsız yüksek bilincin korunması.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Double-Edged Upright Sword', hiddenMeaning: 'Discriminating intellect severing illusion from objective fact.' },
      { symbol: 'Golden Scales in Left Hand', hiddenMeaning: 'Intuitive moral calibration measuring inner consequences.' },
      { symbol: 'Red Robe with Green Mantle', hiddenMeaning: 'Decisive active enforcement harmonized with organic balance.' },
      { symbol: 'Purple Veil', hiddenMeaning: 'Spiritual detachment ensuring incorruptible neutrality.' }
    ]
  },
  {
    cardId: 12,
    cardNameTr: 'Asılan Adam (The Hanged Man)',
    cardNameEn: 'The Hanged Man',
    arcanaNumber: 'XII',
    element: 'Su',
    zodiacAssociation: 'Neptün (Fedakarlık, Teslimiyet & Aydınlanma)',
    kabbalahLetter: 'Mem (Kozmik Su / Arınma)',
    jungianArchetypeTr: 'Teslimiyet, Bakış Açısı Dönüşümü & Kurban',
    jungianArchetypeEn: 'Surrender, Metanoia & The Willing Sacrifice',
    historicalNoteTr: 'İskandinav tanrısı Odin’in Yggdrasil ağacında runik bilgeliği almak için 9 gün asılı kalışıdır.',
    historicalNoteEn: 'Myth of Odin hung from Yggdrasil for nine nights to win the runic wisdom.',
    meditativeMottoTr: 'Direnci bıraktığında düşmezsin; dünyayı bambaşka bir berraklıkla görmeye başlarsın.',
    meditativeMottoEn: 'When resistance ceases, you do not fall; reality inverts into sublime clarity.',
    secretSymbolsTr: [
      { symbol: 'T-Haçı Canlı Ağaç', hiddenMeaning: 'Ölü bir darağacı değil, yaprak açan canlı yaşam ağacı; kurbanın yeniden doğuş getirişi.' },
      { symbol: 'Başının Etrafındaki Altın Işık Haresi (Halo)', hiddenMeaning: 'Acı çekme değil, derin aydınlanma ve zihinsel uyanış.' },
      { symbol: 'Ters Çapraz Bacak (4 Sayısı) ve Kollar (Üçgen)', hiddenMeaning: 'Maddenin (4) üzerine yükselen ilahi ruhun (3) simgesi.' },
      { symbol: 'Huzurlu Yüz İfadesi', hiddenMeaning: 'Zorunlu bir ceza değil, gönüllü bir teslimiyet ve meditasyon hali.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Living T-Cross Tree', hiddenMeaning: 'Sprouting living wood proving voluntary surrender bears fertile fruit.' },
      { symbol: 'Golden Halo Around Head', hiddenMeaning: 'Enlightenment resulting from profound mental stillness.' },
      { symbol: 'Crossed Legs Forming 4 and 3', hiddenMeaning: 'Spirit (triangle) liberating itself above physical matter (cross).' },
      { symbol: 'Tranquil Countenance', hiddenMeaning: 'Voluntary pause transcending neurotic panic.' }
    ]
  },
  {
    cardId: 13,
    cardNameTr: 'Ölüm (Death)',
    cardNameEn: 'Death',
    arcanaNumber: 'XIII',
    element: 'Su',
    zodiacAssociation: 'Akrep (Dönüşüm, Yeniden Doğuş & Kriz)',
    kabbalahLetter: 'Nun (Balık / Karanlık Sulardaki Yaşam Tohumu)',
    jungianArchetypeTr: 'Psikolojik Ölüm, Metamorfoz & Dönüşüm',
    jungianArchetypeEn: 'Psychological Metamorphosis & Radical Rebirth',
    historicalNoteTr: 'Ortaçağdaki "Danse Macabre" (Ölüm Dansı); kralların da dilencilerin de eşitlendiği son.',
    historicalNoteEn: 'Medieval Danse Macabre; death leveler of kings and beggars alike.',
    meditativeMottoTr: 'Son bir felaket değildir; tohum çatlamadıkça filiz göğe uzanamaz.',
    meditativeMottoEn: 'An ending is no catastrophe; the seed must fracture for the flower to rise.',
    secretSymbolsTr: [
      { symbol: 'Siyah Zırhlı İskelet Süvari', hiddenMeaning: 'Yok oluş değil; eskiyen, çürüyen formları temizleyen arındırıcı güç.' },
      { symbol: 'Siyah Bayraktaki Beş Yapraklı Beyaz Gül', hiddenMeaning: 'Akrep’in simyasal gülü; ölümün içinde saklanan ölümsüz saf yaşam tohumu.' },
      { symbol: 'Ufukta Doğan Altın Güneş', hiddenMeaning: 'İki sütun arasından doğan yeni gün; her ölümün arkasındaki kaçınılmaz doğum.' },
      { symbol: 'Yerde Yatan Kral ve Dua Eden Çocuk', hiddenMeaning: 'Egonun kibri yıkılırken, saf çocuksu masumiyet korkusuzca ayakta kalır.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Armored Skeleton Cavalier', hiddenMeaning: 'Inexorable natural law clearing outdated stagnant structures.' },
      { symbol: 'Five-Petaled Mystic Rose', hiddenMeaning: 'Immortal life-force pulsing through dissolution.' },
      { symbol: 'Rising Solar Dawn on Horizon', hiddenMeaning: 'Perpetual dawn guaranteed beyond every psychological night.' },
      { symbol: 'Fallen King and Child', hiddenMeaning: 'False ego pride collapses; pure innocence endures.' }
    ]
  },
  {
    cardId: 14,
    cardNameTr: 'Denge (Temperance)',
    cardNameEn: 'Temperance',
    arcanaNumber: 'XIV',
    element: 'Ateş',
    zodiacAssociation: 'Yay (Arayış, Entegrasyon & Uyum)',
    kabbalahLetter: 'Samekh (Destek / Sarsılmaz Temel)',
    jungianArchetypeTr: 'Zıtlıkların Simyası, İtidaller & İyileşme',
    jungianArchetypeEn: 'Alchemical Tempering & Middle Way Integration',
    historicalNoteTr: 'Simyacıların "Solve et Coagula" (Ayrıştır ve Birleştir) formülünün resmidir.',
    historicalNoteEn: 'Pictorial glyph of the Great Alchemical Work: Solve et Coagula.',
    meditativeMottoTr: 'Aşırılıklarda kaybolma; şifa iki zıt kutbun ortasındaki yumuşak akıştadır.',
    meditativeMottoEn: 'Avoid the frenzy of extremes; miraculous healing resides in the measured flow.',
    secretSymbolsTr: [
      { symbol: 'İki Kadeh Arasındaki Akış', hiddenMeaning: 'Bilinç ve bilinçdışı arasındaki kesintisiz, yerçekimine meydan okuyan enerji aktarımı.' },
      { symbol: 'Bir Ayağı Suda, Bir Ayağı Karada Melek', hiddenMeaning: 'Duygusal alem (su) ile somut gerçekliği (kara) aynı anda dengeleme ustalığı.' },
      { symbol: 'Göğsündeki Üçgen ve Kare', hiddenMeaning: 'Kutsal ruhani üçgenin (3) dünyevi beden karesi (4) içinde barınması.' },
      { symbol: 'Arka Plandaki Dağ Yolu ve Taç', hiddenMeaning: 'Sabırla yürünmesi gereken içsel olgunluk ve aydınlanma yolu.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Flowing Chalices', hiddenMeaning: 'Seamless transmutation of conscious insight and unconscious depth.' },
      { symbol: 'One Foot on Earth, One in Water', hiddenMeaning: 'Equally grounded in everyday reality and deep psychic currents.' },
      { symbol: 'Square Encasing Triangle', hiddenMeaning: 'Spirit comfortably tabernacled within physical form.' },
      { symbol: 'Golden Crown Over Distant Peaks', hiddenMeaning: 'The luminous crown awaiting disciplined patience.' }
    ]
  },
  {
    cardId: 15,
    cardNameTr: 'Şeytan (The Devil)',
    cardNameEn: 'The Devil',
    arcanaNumber: 'XV',
    element: 'Toprak',
    zodiacAssociation: 'Oğlak (Maddeye Bağımlılık, Hırs & Korku)',
    kabbalahLetter: 'Ayin (Göz / Aldatıcı Dış Görünüş)',
    jungianArchetypeTr: 'Gölge (Shadow), Bağımlılık & Sahte Güvenlik',
    jungianArchetypeEn: 'The Shadow & Self-Imposed Enslavement',
    historicalNoteTr: 'Pan ve Baphomet figürlerinin sentezidir; bedensel arzuların zindana dönüşüşü.',
    historicalNoteEn: 'Synthesis of Pan and Eliphas Lévi’s Baphomet, representing material entrapment.',
    meditativeMottoTr: 'Boynundaki zincirler gevşektir; hapsedildiğin tek zindan kendi inandığın korkularındır.',
    meditativeMottoEn: 'The chains are loose; the only prison that holds you is self-imposed terror.',
    secretSymbolsTr: [
      { symbol: 'Gevşek Boyun Zincirleri', hiddenMeaning: 'Boyunlarındaki halkalar o kadar geniştir ki istedikleri an çıkarabilirler; bağımlılık rızayla sürer.' },
      { symbol: 'Ters Pentagram', hiddenMeaning: 'Ruhun maddenin altına indirilmesi; maneviyatın dünyevi hırslara köle edilmesi.' },
      { symbol: 'Aşağı Dönük Meşale', hiddenMeaning: 'Yaşam enerjisini yaratıcı üretim yerine tüketici tutkulara harcamak.' },
      { symbol: 'Yarı Hayvan Yarı İnsan Figürler', hiddenMeaning: 'Kişinin kendi içgüdüsel gölgesini inkar edip ona teslim olması.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Loose Neck Chains', hiddenMeaning: 'The collars can be slipped off at any moment; bondage is self-inflicted.' },
      { symbol: 'Inverted Pentagram', hiddenMeaning: 'Spirit subjected beneath raw material compulsions.' },
      { symbol: 'Downward Flame', hiddenMeaning: 'Life-force consumed in suffocating attachments.' },
      { symbol: 'Chained Satyr Figures', hiddenMeaning: 'Unconscious identification with lower instinctual fears.' }
    ]
  },
  {
    cardId: 16,
    cardNameTr: 'Kule (The Tower)',
    cardNameEn: 'The Tower',
    arcanaNumber: 'XVI',
    element: 'Ateş',
    zodiacAssociation: 'Mars (Ani Yıkım, Arınma & Katarsis)',
    kabbalahLetter: 'Pe (Ağız / Sırrı Açığa Çıkaran Şimşek)',
    jungianArchetypeTr: 'Ego Çöküşü, İllüzyonun Yıkılışı & Katarsis',
    jungianArchetypeEn: 'Cataclysmic Ego Shattering & Liberation',
    historicalNoteTr: 'Babil Kulesi miti; insanın kibrinin ilahi şimşekle yerle bir edilişidir.',
    historicalNoteEn: 'The Tower of Babel myth where artificial pride is struck down by undeniable lightning.',
    meditativeMottoTr: 'Yıkılan şey gerçek sen değilsin; yıkılan sadece içine sıkıştığın sahte duvardır.',
    meditativeMottoEn: 'What falls is not your essence, only the prison you mistook for sanctuary.',
    secretSymbolsTr: [
      { symbol: 'Göksel Şimşek', hiddenMeaning: 'Aşağıdan gelmeyen, yukarıdan inen ani farkındalık ve inkâr edilemez hakikat.' },
      { symbol: 'Devrilen Altın Taç', hiddenMeaning: 'Egonun kendini yanılmaz ilan ettiği sahte tahtın devrilişi.' },
      { symbol: '22 Alev Damlası', hiddenMeaning: '22 İbrani harfi ve arkana; yıkımın ortasında bile ilahi planın tohumları korunur.' },
      { symbol: 'Aşağı Düşen Figürler', hiddenMeaning: 'Yeniden doğuş için toprağa, çıplak hakikate geri dönmek.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Downward Lightning Stroke', hiddenMeaning: 'Flash of inescapable breakthrough tearing through rationalizations.' },
      { symbol: 'Dethroned Crown', hiddenMeaning: 'Shattering of arrogant intellectual supremacy.' },
      { symbol: '22 Falling Yods', hiddenMeaning: 'Sacred order preserved intact even amidst chaotic collapse.' },
      { symbol: 'Plummeting Figures', hiddenMeaning: 'Humbling return to fertile, vulnerable earth.' }
    ]
  },
  {
    cardId: 17,
    cardNameTr: 'Yıldız (The Star)',
    cardNameEn: 'The Star',
    arcanaNumber: 'XVII',
    element: 'Hava',
    zodiacAssociation: 'Kova (Gelecek Vizyonu, Umut & Kozmik Şifa)',
    kabbalahLetter: 'Tzaddi (Kanca / Ruh Balıkçısı)',
    jungianArchetypeTr: 'Öz (The Self), Arınma & Kozmik Grace',
    jungianArchetypeEn: 'The Self, Unconditional Grace & Renewal',
    historicalNoteTr: 'Eski Mısır’da Nil taşkınlarını ve bereketi müjdeleyen Sirius yıldızıdır.',
    historicalNoteEn: 'Associated with Egyptian Sirius (Sothis) heralding the life-restoring Nile inundation.',
    meditativeMottoTr: 'Karanlık en koyu anındayken gökyüzündeki ilk yıldız sana yol gösterir.',
    meditativeMottoEn: 'When the night is darkest, the solitary star whispers of dawn.',
    secretSymbolsTr: [
      { symbol: 'Büyük 8 Köşeli Yıldız', hiddenMeaning: 'Sirius; ruhun pusulası ve ilahi rehberliğe olan koşulsuz güven.' },
      { symbol: 'Çıplak Su Taşıyıcısı Kadın', hiddenMeaning: 'Hiçbir maskesi ve savunması kalmamış ruhun saf şifa gücü.' },
      { symbol: 'Biri Suya Biri Karaya Dökülen Testiler', hiddenMeaning: 'Bilinçdışının şifasını hem duygulara hem somut hayata eşit akıtmak.' },
      { symbol: 'Ağaçtaki İbis Kuşu', hiddenMeaning: 'Bilgelik tanrısı Thoth’un simgesi; zihnin berraklıkla dolması.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Eight-Pointed Star', hiddenMeaning: 'Cosmic compass pointing straight toward spiritual alignment.' },
      { symbol: 'Naked Maiden', hiddenMeaning: 'Soul stripped of artificial defense acting as a pure healing conduit.' },
      { symbol: 'Dual Pitchers', hiddenMeaning: 'Replenishing both emotional subconscious depths and physical grounds.' },
      { symbol: 'Sacred Ibis Bird', hiddenMeaning: 'Emblem of Thoth; herald of awakened mental lucidity.' }
    ]
  },
  {
    cardId: 18,
    cardNameTr: 'Ay (The Moon)',
    cardNameEn: 'The Moon',
    arcanaNumber: 'XVIII',
    element: 'Su',
    zodiacAssociation: 'Balık (Hayaller, İllüzyonlar & Kolektif Bilinçdışı)',
    kabbalahLetter: 'Kof (Maymun / Taklit & İllüzyon)',
    jungianArchetypeTr: 'Kolektif Bilinçdışının Labirenti & Gece Denizi',
    jungianArchetypeEn: 'The Unconscious Labyrinth & The Night Sea Journey',
    historicalNoteTr: 'Ay tanrıçası Hekate ve yeraltı dünyasının eşiğinde duran bekçilerdir.',
    historicalNoteEn: 'Associated with Hecate guarding the uncanny threshold of spectral night.',
    meditativeMottoTr: 'Korkuların sadece karanlığın yarattığı gölgelerdir; ışık doğduğunda sis dağılır.',
    meditativeMottoEn: 'Fears are merely phantoms cast by mist; walk calmly until the sun rises.',
    secretSymbolsTr: [
      { symbol: 'Sudan Çıkan Kerevit (Istakoz)', hiddenMeaning: 'Bilinçdışının en derin, ilkel ve karanlık hatıralarının yüzeye çıkışı.' },
      { symbol: 'Uluyan Kurt ve Köpek', hiddenMeaning: 'İnsanın vahşi doğası (kurt) ile evcilleşmiş kişiliği (köpek); bilinmeyenin karşısındaki tedirginlik.' },
      { symbol: 'İki Gözetleme Kulesi', hiddenMeaning: 'Bilinçli dünyanın sınır kapıları; ardı bilinmeyenin tekinsiz diyarıdır.' },
      { symbol: 'Damlayan Yod Işıkları', hiddenMeaning: 'Karanlık gecede bile bilincin uyandığı ilahi ışık tohumları.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Emerging Crustacean', hiddenMeaning: 'Primitive primordial fears crawling up from subconscious abysses.' },
      { symbol: 'Wolf and Dog Howling', hiddenMeaning: 'Wild untamed instinct alongside civilized domestic fear.' },
      { symbol: 'Twin Watchtowers', hiddenMeaning: 'The threshold beyond which known reality dissolves.' },
      { symbol: 'Descending Moisture Droplets', hiddenMeaning: 'Dew of divine grace sustaining the soul through delusion.' }
    ]
  },
  {
    cardId: 19,
    cardNameTr: 'Güneş (The Sun)',
    cardNameEn: 'The Sun',
    arcanaNumber: 'XIX',
    element: 'Ateş',
    zodiacAssociation: 'Güneş (Canlılık, Neşe & Bilinç Işığı)',
    kabbalahLetter: 'Resh (Baş / Güneşin Aydınlattığı Bilinç)',
    jungianArchetypeTr: 'Aydınlanmış Bilinç & Yeniden Doğmuş Masumiyet',
    jungianArchetypeEn: 'Illuminated Consciousness & Reclaimed Wholeness',
    historicalNoteTr: 'Apollo, Ra ve Sol Invictus gibi zafer kazanan ışık tanrılarının arketipidir.',
    historicalNoteEn: 'Echoes Apollo, Ra, and Sol Invictus celebrating triumphant clarity over night.',
    meditativeMottoTr: 'Gerçek güç gölgeden kaçmak değil, kendi öz ışığını cesaretle yaymaktır.',
    meditativeMottoEn: 'Authentic power flees no shadow; it shines effortlessly from innate dawn.',
    secretSymbolsTr: [
      { symbol: 'Beyaz Ata Binen Çıplak Çocuk', hiddenMeaning: 'Yeniden kazanılmış çocuksu saflık ve içgüdüleri (beyaz at) efor sarf etmeden yönetiş.' },
      { symbol: 'Dört Ayçiçeği', hiddenMeaning: 'Dört elementin güneş ışığı altında tam bir bereketle olgunlaşması.' },
      { symbol: 'Kırmızı Tüy ve Bayrak', hiddenMeaning: 'Deli kartındaki küçük tüyün burada muzaffer bir bayrağa dönüşmesi.' },
      { symbol: 'Düşük Taş Duvar', hiddenMeaning: 'Geçmişin yapay kısıtlamalarının artık arkada bırakıldığını gösterir.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Naked Child on White Steed', hiddenMeaning: 'Reclaimed primal innocence guiding animal nature without saddle or bridle.' },
      { symbol: 'Four Sunflowers', hiddenMeaning: 'The four elements brought to flourishing fruition.' },
      { symbol: 'Red Feather Banner', hiddenMeaning: 'The Fool’s humble feather realized as a triumphant banner of life.' },
      { symbol: 'Low Stone Wall', hiddenMeaning: 'Past artificial psychological barriers left comfortably behind.' }
    ]
  },
  {
    cardId: 20,
    cardNameTr: 'Mahkeme (Judgement)',
    cardNameEn: 'Judgement',
    arcanaNumber: 'XX',
    element: 'Ateş',
    zodiacAssociation: 'Plüton (Dönüşüm, Çağrı & Diriliş)',
    kabbalahLetter: 'Shin (Ateş Dişi / Kutsal Dönüşüm Alevi)',
    jungianArchetypeTr: 'Yüksek Çağrı, Uyanış & Geçmişin Affı',
    jungianArchetypeEn: 'The Awakening & Transmutation of Past',
    historicalNoteTr: 'Kıyamet ve Sur borusunun çalınışı alegorisi; eski benliğin tabutundan çıkışı.',
    historicalNoteEn: 'The Last Trumpet sounding the final awakening from the sleep of material death.',
    meditativeMottoTr: 'Geçmiş seni mahkûm edemez; duyduğun çağrı yeni bir yaşamın davetidir.',
    meditativeMottoEn: 'The past holds no verdict; the trumpet calls you to live with total presence.',
    secretSymbolsTr: [
      { symbol: 'Başmelek Gabriel (Cebrail) ve Altın Borusu', hiddenMeaning: 'Yüksek benliğin uyanış çağrısı; zihinsel gaflet uykusundan diriliş.' },
      { symbol: 'Tabutlardan Kalkan Çıplak İnsanlar', hiddenMeaning: 'Eski yargıların, suçluluk duygularının ve travmaların mezarından çıkıp özgürleşme.' },
      { symbol: 'Kızıl Haçlı Beyaz Bayrak', hiddenMeaning: 'Zıtlıkların uzlaşması ve ruhani dirilişin mührü.' },
      { symbol: 'Karla Kaplı Dağlar', hiddenMeaning: 'Zirvedeki soğuk durağanlığın ilahi nefesle çözülüp hayat suyuna dönüşmesi.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Archangel Gabriel and Trumpet', hiddenMeaning: 'The inescapable clarion call awakening the soul from mortal hypnosis.' },
      { symbol: 'Figures Rising from Coffins', hiddenMeaning: 'Shedding outdated identities, guilts, and ancestral burdens.' },
      { symbol: 'Solar Cross Banner', hiddenMeaning: 'Sacred reconciliation of vertical spirit and horizontal reality.' },
      { symbol: 'Glacial Mountain Peaks', hiddenMeaning: 'Melting of rigid frozen dogmas into life-giving rivers.' }
    ]
  },
  {
    cardId: 21,
    cardNameTr: 'Dünya (The World)',
    cardNameEn: 'The World',
    arcanaNumber: 'XXI',
    element: 'Toprak / Bütünlük',
    zodiacAssociation: 'Satürn (Zamanın Ustalığı, Bütünlük & Tamamlanma)',
    kabbalahLetter: 'Tav (Mühür / Kozmik İmza)',
    jungianArchetypeTr: 'Bireyleşmenin Tamamlanışı, Kendilik (The Self) & Mandala',
    jungianArchetypeEn: 'Completion of Individuation & The Cosmic Mandala',
    historicalNoteTr: 'Kozmik dansçı, Tarot yolculuğunun (Deliden Dünyaya) nihai zirvesi ve evrensel birliğidir.',
    historicalNoteEn: 'The cosmic dancer celebrating the glorious consummation of the Fool’s entire journey.',
    meditativeMottoTr: 'Sen evrenin içinde küçük bir parça değilsin; koca evren senin içinde tam bir danstır.',
    meditativeMottoEn: 'You are not a drop in the ocean; you are the entire ocean in a drop.',
    secretSymbolsTr: [
      { symbol: 'Yeşil Defne Çelengi (Ouroboros)', hiddenMeaning: 'Sonsuz yaşam döngüsü ve zafer tacı; bir döngünün tamamlanışı ve yeni bilince geçiş.' },
      { symbol: 'Dört Köşedeki Figürler (İnsan, Kartal, Aslan, Boğa)', hiddenMeaning: 'Dört sabit burç (Kova, Akrep, Aslan, Boğa); evrenin sarsılmaz 4 sütunu.' },
      { symbol: 'Dans Eden Androjen Figür', hiddenMeaning: 'Eril ve dişil enerjilerin (Animus ve Anima) kusursuz içsel evliliği.' },
      { symbol: 'İki Elindeki Çift Asa', hiddenMeaning: 'Büyücü’nün tek asasının burada ikiye katlanması; hem yaratım hem tezahür ustalığı.' }
    ],
    secretSymbolsEn: [
      { symbol: 'Laurel Wreath', hiddenMeaning: 'The triumphant circle of eternity; wholeness realized.' },
      { symbol: 'Four Living Creatures', hiddenMeaning: 'The four fixed signs stabilizing cosmic consciousness.' },
      { symbol: 'Dancing Figure', hiddenMeaning: 'Sacred marriage of conscious and unconscious into harmonious grace.' },
      { symbol: 'Twin Wands', hiddenMeaning: 'Total sovereignty over both internal invokation and external manifestation.' }
    ]
  }
];
