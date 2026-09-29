// Zodiac-Specific Ancestral Karma & Karmic Ties Severing Database
// 12 Burcun Ata Karması ve 3 Adımlı Nefes Rehberliği

export interface BreathingStep {
  step: 1 | 2 | 3;
  name: string;
  durationSeconds: number;
  phase: 'inhale' | 'hold' | 'exhale';
  guidanceText: string;
  voicePrompt: string;
  subtext: string;
  visualCue: string;
}

export interface ZodiacKarmaProfile {
  id: string;
  signNameTr: string;
  signNameEn: string;
  symbol: string;
  element: 'Ateş' | 'Toprak' | 'Hava' | 'Su';
  elementEn: 'Fire' | 'Earth' | 'Air' | 'Water';
  dates: string;
  ancestralThemeTr: string;
  ancestralThemeEn: string;
  karmicWoundTr: string;
  karmicWoundEn: string;
  cordTypeTr: string;
  cordTypeEn: string;
  affirmationTr: string;
  affirmationEn: string;
  ancestralDecreeTr: string;
  ancestralDecreeEn: string;
  breathingSteps: {
    tr: BreathingStep[];
    en: BreathingStep[];
  };
}

export const ZODIAC_KARMA_PROFILES: ZodiacKarmaProfile[] = [
  {
    id: 'aries',
    signNameTr: 'Koç',
    signNameEn: 'Aries',
    symbol: '♈',
    element: 'Ateş',
    elementEn: 'Fire',
    dates: '21 Mart - 19 Nisan',
    ancestralThemeTr: 'Savaşçı Öfkesi & Hayatta Kalma Savaşı Karması',
    ancestralThemeEn: 'Warrior Anger & Survival Struggle Karma',
    karmicWoundTr: 'Soy ağacında hakkı yenmiş, sürekli savaşmak ve savunmada kalmak zorunda bırakılmış ataların bastırılmış öfkesi ve sabırsızlık döngüsü.',
    karmicWoundEn: 'Suppressed rage and impatience inherited from ancestors who constantly had to fight for survival and defend their boundaries.',
    cordTypeTr: 'Sürekli haklı çıkma ve saldırgan savunma karmik bağı',
    cordTypeEn: 'Need to be right and defensive hostility karmic cord',
    affirmationTr: 'Artık savaşmak zorunda değilim. Atalarımın mücadelesini onurlandırıyor, huzur içinde güvende olmayı seçiyorum.',
    affirmationEn: 'I no longer need to fight. I honor my ancestors’ battle and choose to be safe in peace.',
    ancestralDecreeTr: 'Sevgili atalarım; taşıdığınız öfkeyi, haksızlık acısını ve savaş yorgunluğunu saygıyla size iade ediyorum. Kan bağımı sevgiyle arındırıyorum.',
    ancestralDecreeEn: 'Dear ancestors; I respectfully return to you the anger, injustice, and exhaustion of battle. I cleanse my bloodline with love.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Kökleri Hisset',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Derin nefes alırken soyundaki savaşçı ataların varlığını ve içindeki ateşi hisset. Yargılamadan fark et.',
          voicePrompt: 'Derin bir nefes al... Atalarının savaşçı köklerini ve bedenindeki ateşi hisset.',
          subtext: '4 saniye boyunca göğsünü ve kök çakranı genişlet.',
          visualCue: 'Altın-kızıl ışık genişliyor'
        },
        {
          step: 2,
          name: 'Nefes Tut • Bağı İdrak Et',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Bu öfkenin ve savunma zırhının sana ait olmadığını, geçmiş bir hayatta kalma kordonu olduğunu gör.',
          voicePrompt: 'Nefesini tut... Bu öfkenin sana ait olmadığını idrak et. Bağı ışıkla çevrele.',
          subtext: 'Karmik kordonu altın ışıkla sar.',
          visualCue: 'Karmik bağ kristalleşiyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Kordonu Kes & Bırak',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça bırakırken karmik kordonun kesildiğini imgele. "Savaş bitti, artık güvendeyiz" de.',
          voicePrompt: 'Yavaşça nefes ver... Karmik kordonu sevgiyle kes ve serbest bırak.',
          subtext: 'Tüm ağırlığı atalarının onuruna teslim et.',
          visualCue: 'Kordon çözülüyor ve sakinliğe dönüşüyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Connect to Roots',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Inhale deeply and sense the warrior ancestors in your bloodline and the fire within you without judgment.',
          voicePrompt: 'Take a deep breath... Feel the warrior roots and the fire within.',
          subtext: 'Expand your chest and root chakra for 4 seconds.',
          visualCue: 'Golden-red light expanding'
        },
        {
          step: 2,
          name: 'Hold • Recognize the Cord',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Recognize that this rage and defensive armor do not belong to you—they are past survival cords.',
          voicePrompt: 'Hold your breath... Realize this burden is not yours. Envelop the cord in light.',
          subtext: 'Surround the karmic tie in golden light.',
          visualCue: 'Karmic tie crystallizing'
        },
        {
          step: 3,
          name: 'Exhale • Sever & Release Cord',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly and visualize the karmic cord being severed. Say: "The battle is over, we are safe now."',
          voicePrompt: 'Slowly exhale... Lovingly cut the karmic cord and let it go.',
          subtext: 'Return the weight with honor to your ancestors.',
          visualCue: 'Cord dissolves into peace'
        }
      ]
    }
  },
  {
    id: 'taurus',
    signNameTr: 'Boğa',
    signNameEn: 'Taurus',
    symbol: '♉',
    element: 'Toprak',
    elementEn: 'Earth',
    dates: '20 Nisan - 20 Mayıs',
    ancestralThemeTr: 'Kıtlık Bilinci, İflas & Bırakamama Karması',
    ancestralThemeEn: 'Scarcity Mindset, Loss & Clinging Karma',
    karmicWoundTr: 'Toprağını, servetini veya güvenliğini kaybetmiş ataların açlık, yoksulluk korkusu ve tükenme pahasına her şeye tutunma yükü.',
    karmicWoundEn: 'Fear of starvation, bankruptcy, and material devastation inherited from ancestors who lost their land or security.',
    cordTypeTr: 'Maddi güvensizlik ve toksik konfor alanına yapışma bağı',
    cordTypeEn: 'Material insecurity and rigid attachment karmic cord',
    affirmationTr: 'Evren sonsuz bereketle doludur. Atalarımın yokluk acısını şifalandırıyor, akışa güveniyorum.',
    affirmationEn: 'The universe is infinitely abundant. I heal my ancestors’ lack and trust the flow of life.',
    ancestralDecreeTr: 'Geçmişte yokluk çeken tüm atalarım; sizin açlığınızı ve kaybetme korkunuzu sırtımdan indiriyorum. Bereketinizin onurunu sevgiyle kabul ediyorum.',
    ancestralDecreeEn: 'To all ancestors who endured scarcity; I lift your hunger and fear of loss off my shoulders. I honor your legacy with abundance.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Toprak Bereketini Çek',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Topraktan ve atalarından gelen yaşam gücünü bedenine çek. Güvende olduğunu hisset.',
          voicePrompt: 'Derin nefes al... Toprağın ve köklerinin sınırsız bereketini içine çek.',
          subtext: 'Bedeninde sıkışmış tutunma korkusunu hisset.',
          visualCue: 'Zümrüt yeşili toprak enerjisi yükseliyor'
        },
        {
          step: 1,
          name: 'Nefes Tut • Kıtlık İllüzyonunu Çöz',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Yokluk ve kayıp korkusunun geçmişe ait olduğunu, şu anda her ihtiyacının karşılandığını idrak et.',
          voicePrompt: 'Nefesini tut... Kıtlık korkusunun bir geçmiş yankısı olduğunu gör ve dönüştür.',
          subtext: 'Maddi endişe kordonunu zümrüt ışığıyla çöz.',
          visualCue: 'Köklerdeki düğüm gevşiyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Tutunmayı Serbest Bırak',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Yavaşça nefes ver. Kontrol etme ve biriktirme ihtiyacını toprağa bırak. Kordon çözülüyor.',
          voicePrompt: 'Nefesini yavaşça ver... Tutunduğun tüm korkuları toprağın şifasına teslim et.',
          subtext: 'Bırakmanın getirdiği hafifliği deneyimle.',
          visualCue: 'Ağır bağlar toprağa karışıp gübreye dönüşüyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Draw Earth Abundance',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Draw the life force of the Earth and ancestors into your body. Feel safe and anchored.',
          voicePrompt: 'Breathe deeply... Draw the boundless abundance of the earth into your core.',
          subtext: 'Sense the tightness of clinging in your body.',
          visualCue: 'Emerald green earth energy rising'
        },
        {
          step: 2,
          name: 'Hold • Dissolve Scarcity Illusion',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Understand that loss belongs to the past, and all your needs are met in this moment.',
          voicePrompt: 'Hold your breath... Recognize scarcity as an ancestral echo and transmute it.',
          subtext: 'Dissolve the cord of material anxiety with emerald light.',
          visualCue: 'Root knot loosening'
        },
        {
          step: 3,
          name: 'Exhale • Release Attachment',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly. Release the urge to control and hoard into the fertile earth.',
          voicePrompt: 'Slowly exhale... Surrender all clinging to the healing earth.',
          subtext: 'Experience the weightless grace of letting go.',
          visualCue: 'Heavy cords dissolve into fertile humus'
        }
      ]
    }
  },
  {
    id: 'gemini',
    signNameTr: 'İkizler',
    signNameEn: 'Gemini',
    symbol: '♊',
    element: 'Hava',
    elementEn: 'Air',
    dates: '21 Mayıs - 20 Haziran',
    ancestralThemeTr: 'Susulmuş Gerçekler & Yalan/İftira Karması',
    ancestralThemeEn: 'Silenced Truths & Miscommunication Karma',
    karmicWoundTr: 'Soy ağacında konuşması yasaklanmış, iftiraya uğramış veya susturularak sır saklamak zorunda kalmış ataların zihinsel huzursuzluğu.',
    karmicWoundEn: 'Mental restlessness from ancestors who were gagged, falsely accused, or forced to guard traumatic family secrets.',
    cordTypeTr: 'Boğaz çakrasında kilitlenmiş ifade korkusu ve zihinsel kaos bağı',
    cordTypeEn: 'Throat chakra blockage and mental split cord',
    affirmationTr: 'Kendi hakikatimi korkusuzca dile getiriyorum. Atalarımın suskunluğunu sevgi dolu dürüstlükle özgürleştiriyorum.',
    affirmationEn: 'I speak my truth fearlessly. I liberate the silence of my ancestors with loving honesty.',
    ancestralDecreeTr: 'Ailemde susmak zorunda kalan tüm sesler; artık sırların ağırlığını taşımıyorum. Hakikatin berraklığında özgürleşiyoruz.',
    ancestralDecreeEn: 'To all silenced voices in my family tree; I no longer carry the weight of secrets. We are liberated in truth.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Hakikati Solu',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Göğsünü ve boğazını temiz hava ile doldur. Soyundaki susturulmuş sesleri sevgiyle selamla.',
          voicePrompt: 'Derin bir nefes al... Boğazını ve zihnini berrak gökyüzünün havasıyla doldur.',
          subtext: 'Boğazındaki düğümü fark et.',
          visualCue: 'Açık mavi saf gökyüzü ışığı'
        },
        {
          step: 2,
          name: 'Nefes Tut • Sırların Yükünü Gör',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Ailedeki konuşulmamış sırların zihnini dağıtmasına son ver. Bağı saf ışıkla mühürle.',
          voicePrompt: 'Nefesini tut... Geçmişin suskunluk kordonunu berrak safir ışığıyla aydınlat.',
          subtext: 'Zihinsel gevezelik duruluyor.',
          visualCue: 'Boğaz çakrasındaki düğüm ışıldıyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Suskunluk Kordonunu Bırak',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Yavaşça nefes ver. Boğazındaki düğümün çözüldüğünü ve sesinin özgürleştiğini hisset.',
          voicePrompt: 'Nefesini üflercesine yavaşça ver... Suskunluk bağını gökyüzüne savur.',
          subtext: 'Hakikatin ferahlığı yayılıyor.',
          visualCue: 'Mavi ışık kuş gibi gökyüzüne kanatlanıyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Breathe the Truth',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Fill your chest and throat with clear air. Lovingly salute the silenced voices in your lineage.',
          voicePrompt: 'Inhale deeply... Fill your throat and mind with pure celestial air.',
          subtext: 'Acknowledge the tension in your throat.',
          visualCue: 'Pure sky-blue light expanding'
        },
        {
          step: 2,
          name: 'Hold • Witness Hidden Secrets',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Stop unexpressed ancestral secrets from scattering your mind. Seal with pure light.',
          voicePrompt: 'Hold your breath... Illuminate the cord of ancestral silence with sapphire light.',
          subtext: 'Mental chatter calms to still waters.',
          visualCue: 'Throat knot illuminated'
        },
        {
          step: 3,
          name: 'Exhale • Release the Gag',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly. Feel the knot in your throat untangle and your authentic voice liberate.',
          voicePrompt: 'Gently exhale... Blow the bonds of silence into the endless sky.',
          subtext: 'The refreshing breeze of truth settles.',
          visualCue: 'Blue light takes wing like a released bird'
        }
      ]
    }
  },
  {
    id: 'cancer',
    signNameTr: 'Yengeç',
    signNameEn: 'Cancer',
    symbol: '♋',
    element: 'Su',
    elementEn: 'Water',
    dates: '21 Haziran - 22 Temmuz',
    ancestralThemeTr: 'Anne Soyu & Terk Edilme/Gözyaşı Karması',
    ancestralThemeEn: 'Matrilineal Grief & Abandonment Karma',
    karmicWoundTr: 'Anne karnından ve anneannelerden devralınan terk edilme korkusu, evlat yası, duygusal bağımlılık ve kurban rolü.',
    karmicWoundEn: 'Deep abandonment fears, maternal grief, codependency, and victim patterns passed through mothers and grandmothers.',
    cordTypeTr: 'Göbek bağı hizasından uzanan nesiller arası duygusal sömürü kordonu',
    cordTypeEn: 'Intergenerational umbilical grief and emotional entanglement cord',
    affirmationTr: 'Kendi kendimin şefkatli yuvasıyım. Annelerimin döktüğü gözyaşlarını onurlandırıyor ve kendi mutluluğuma izin veriyorum.',
    affirmationEn: 'I am my own sanctuary of compassion. I honor my mothers’ tears and allow myself to thrive in joy.',
    ancestralDecreeTr: 'Anne soyumdaki tüm kadınlar; yaşadığınız yalnızlığı, evlat acısını ve fedakarlık yükünü sevgiyle size iade ediyorum. Yaşamı suçluluk duymadan kucaklıyorum.',
    ancestralDecreeEn: 'To all maternal foremothers; I tenderly return your isolation, grief, and sacrificial martyrdom. I embrace life without guilt.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Anne Rahmi Şefkati',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Nefesi karnına doğru çek. Anne soyundan gelen kadınların sevgisini ve döktükleri gözyaşlarını kalbinde ağırla.',
          voicePrompt: 'Karnına doğru derin bir nefes al... Anne soyunun şefkatini ve derinliğini hisset.',
          subtext: 'Karnındaki duygusal düğümü şefkatle fark et.',
          visualCue: 'Ay ışığı beyaz-gümüş dalgalar yayıyor'
        },
        {
          step: 2,
          name: 'Nefes Tut • Göbek Bağı Kordonunu Gör',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Göbeğinden geriye doğru uzanan duygusal acı kordonunu gör. Bu kordonun acıyı değil sevgiyi taşımasına niyet et.',
          voicePrompt: 'Nefesini tut... Karmik göbek kordonunu gümüş bir ışıkla çevrele.',
          subtext: 'Kurban rolünden özgürleşiyorsun.',
          visualCue: 'Gümüş kordon şeffaflaşıyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Karmik Bağı Çöz',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça verirken göbek kordonunu altın bir sevgi makasıyla kes. Atalarını kutsayarak serbest bırak.',
          voicePrompt: 'Yavaşça nefes ver... Karmik bağı sevgiyle kes. Annelerini onurlandırarak özgürleş.',
          subtext: 'Kendi ruhsal yuvanı inşa ediyorsun.',
          visualCue: 'Kordon saf inci tanelerine dönüşüp denize karışıyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Maternal Compassion',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Breathe into your belly. Welcome the tenderness and unwept tears of your maternal line with unconditional love.',
          voicePrompt: 'Breathe deep into your belly... Feel the maternal warmth and emotional depth of your mothers.',
          subtext: 'Gently notice the knot of grief in your gut.',
          visualCue: 'Silver moonlight waves softly rippling'
        },
        {
          step: 2,
          name: 'Hold • Witness Umbilical Cord',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Witness the ancestral umbilical grief cord. Intend that it carry only love, not sacrifice.',
          voicePrompt: 'Hold your breath... Envelop the karmic umbilical cord in silver luminescence.',
          subtext: 'Stepping out of inherited martyrdom.',
          visualCue: 'Silver cord becoming transparent'
        },
        {
          step: 3,
          name: 'Exhale • Sever the Karmic Tie',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale gently and visualize cutting the karmic umbilical tie with golden scissors of compassion. Bless them and be free.',
          voicePrompt: 'Gently exhale... Cut the karmic cord with golden love. Honor your mothers and stand free.',
          subtext: 'You are now your own sacred sanctuary.',
          visualCue: 'Cord dissolves into lustrous pearls sinking in calm sea'
        }
      ]
    }
  },
  {
    id: 'leo',
    signNameTr: 'Aslan',
    signNameEn: 'Leo',
    symbol: '♌',
    element: 'Ateş',
    elementEn: 'Fire',
    dates: '23 Temmuz - 22 Ağustos',
    ancestralThemeTr: 'Görünme Korkusu & Kırılmış Gurur Karması',
    ancestralThemeEn: 'Invisibility & Broken Pride Karma',
    karmicWoundTr: 'Soy ağacında gururu ayaklar altına alınmış, yetenekleri bastırılmış veya kibir yüzünden yıkılmış ataların takdir açlığı.',
    karmicWoundEn: 'Unhealed shame and hunger for validation from ancestors whose dignity was crushed or who fell through toxic arrogance.',
    cordTypeTr: 'Dış onay bağımlılığı ve kalp çakrasındaki sahte taht kordonu',
    cordTypeEn: 'Validation dependency and solar plexus performance cord',
    affirmationTr: 'Işığım başkalarının onayına bağlı değildir. Kendi kalbimin krallığında güvendeyim.',
    affirmationEn: 'My light does not depend on external praise. I rule peacefully in the sovereign palace of my own heart.',
    ancestralDecreeTr: 'Gururu kırılan ve yok sayılan tüm atalarım; kendinizi kanıtlama savaşınızı bitiriyorum. Işığımı gösteriş için değil, sevgi için parlatıyorum.',
    ancestralDecreeEn: 'To all ancestors whose nobility was degraded; I end your desperate fight for applause. I shine for love, not validation.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • İçsel Güneşi Uyandır',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Kalbine altın sarısı güneş ışığını çek. Atalarının asaletini ve bastırılmış ışıltısını kabul et.',
          voicePrompt: 'Kalbine doğru derin nefes al... İçindeki görkemli güneşi ve ata asaletini uyandır.',
          subtext: 'Kalbindeki onaylanma açlığını gör.',
          visualCue: 'Parlak altın güneş alevi kalbinde parlıyor'
        },
        {
          step: 2,
          name: 'Nefes Tut • Sahte Tahtı Bırak',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Alkışa ve övgüye duyduğun bağımlılığın geçmiş bir yara olduğunu fark et. Kalbini saf sevgiye aç.',
          voicePrompt: 'Nefesini tut... Alkış bağımlılığının bir ata yarası olduğunu gör ve ışıkla şifalandır.',
          subtext: 'Başkalarının gözündeki değer yükü eriyor.',
          visualCue: 'Ağır taç hafif altın bir haleye dönüşüyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Gurur Kordonunu Çöz',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça ver. Kırılgan gururu ve kibir bağını serbest bırak. Saf tevazu ile parla.',
          voicePrompt: 'Yavaşça nefes ver... Kırılmış gurur kordonunu kalbinden sevgiyle söküp at.',
          subtext: 'Kendi öz değerinle dimdik duruyorsun.',
          visualCue: 'Altın kıvılcımlar tüm bedenine huzur yayıyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Awaken Solar Core',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Inhale radiant golden sunlight directly into your heart center. Honor the majesty of your bloodline.',
          voicePrompt: 'Inhale into your radiant heart... Awaken the sovereign inner sun and ancestral dignity.',
          subtext: 'Witness the hunger for applause in your chest.',
          visualCue: 'Blazing golden solar orb igniting in heart'
        },
        {
          step: 2,
          name: 'Hold • Relinquish False Throne',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Acknowledge that the addiction to validation is an ancestral wound. Anchor in intrinsic worth.',
          voicePrompt: 'Hold your breath... Realize that needing validation is an old wound. Rest in sovereign love.',
          subtext: 'The heavy burden of performing dissolves.',
          visualCue: 'Heavy iron crown softens into gentle golden halo'
        },
        {
          step: 3,
          name: 'Exhale • Sever Pride Cord',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly. Cut the cord of wounded pride and fragile ego. Radiate authentic humble warmth.',
          voicePrompt: 'Slowly exhale... Lovingly untie the cord of wounded pride from your heart.',
          subtext: 'Standing tall in peaceful self-sovereignty.',
          visualCue: 'Golden embers bathe your aura in gentle warmth'
        }
      ]
    }
  },
  {
    id: 'virgo',
    signNameTr: 'Başak',
    signNameEn: 'Virgo',
    symbol: '♍',
    element: 'Toprak',
    elementEn: 'Earth',
    dates: '23 Ağustos - 22 Eylül',
    ancestralThemeTr: 'Mükemmeliyetçilik, Kölelik & Suçluluk Karması',
    ancestralThemeEn: 'Perfectionism, Servitude & Guilt Karma',
    karmicWoundTr: 'Hiçbir zaman takdir edilmemiş, ölesiye hizmet etmek zorunda bırakılmış ve en ufak hatada cezalandırılmış ata kadın ve erkeklerinin suçluluk yükü.',
    karmicWoundEn: 'Punitive guilt and somatic anxiety passed down from ancestors who were treated as subservient workhorses and punished for human flaws.',
    cordTypeTr: 'Mükemmel olma zorlantısı ve kendini cezalandırma kordonu',
    cordTypeEn: 'Compulsive perfectionism and unworthiness cord',
    affirmationTr: 'Ben zaten olduğum halimle tam ve yeterliyim. Dinlenmeyi, şefkati ve hata yapabilme özgürlüğünü hak ediyorum.',
    affirmationEn: 'I am whole and enough as I am. I deserve rest, grace, and the sacred freedom of being human.',
    ancestralDecreeTr: 'Hizmetkarlık ve suçluluk içinde ömür tüketen atalarım; kendinizi cezalandırma döngünüzü bitiriyorum. Yaşamayı bir borç değil, bir lütuf olarak kabul ediyorum.',
    ancestralDecreeEn: 'To ancestors who exhausted your lives in servitude and guilt; I end the cycle of self-flagellation. I receive life as grace, not debt.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Bedene Şefkat Doldur',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Bedenine ferah bir nefes al. Omuzlarındaki ata yüklerini ve kusursuz olma baskısını şefkatle hisset.',
          voicePrompt: 'Derin nefes al... Bedenine ve yorgun kaslarına saf şefkat doldur.',
          subtext: 'Sırtındaki ve karnındaki gerilimi fark et.',
          visualCue: 'Berrak kehribar ve lavanta şifa ışığı'
        },
        {
          step: 2,
          name: 'Nefes Tut • Suçluluk İpini Çöz',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Kendini durmadan eleştirmenin sana ait olmadığını, atalarının kölelik korkusu olduğunu gör.',
          voicePrompt: 'Nefesini tut... Yetersizlik hissinin atalarından kalan bir zincir olduğunu idrak et.',
          subtext: 'Hata yapma korkusunu ışıkla sar.',
          visualCue: 'Sıkı düğümler gevşemeye başlıyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Yükleri İade Et',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça verirken omuzlarındaki ağır yükü atalarına teslim et. "Artık yeterliyim" de.',
          voicePrompt: 'Yavaşça nefes ver... Tüm yetersizlik suçluluğunu omuzlarından serbest bırak.',
          subtext: 'Bedeninde derin bir gevşeme ve arınma.',
          visualCue: 'Ağır gri tozlar dökülüp şifalı toprağa karışıyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Pour Compassion into Body',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Breathe spacious fresh air into your physical vessel. Feel the tension of perfectionism with pure tenderness.',
          voicePrompt: 'Take a deep breath... Infuse your exhausted muscles with gentle loving-kindness.',
          subtext: 'Notice tightness across your neck and abdomen.',
          visualCue: 'Luminous amber and lavender healing mist'
        },
        {
          step: 2,
          name: 'Hold • Unravel Guilt Tether',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Recognize that the chronic inner critic is an ancestral servitude reflex. Encircle it in grace.',
          voicePrompt: 'Hold your breath... Realize that feelings of unworthiness are an ancient inherited shackle.',
          subtext: 'Surround the fear of imperfection with light.',
          visualCue: 'Tight karmic knots softening'
        },
        {
          step: 3,
          name: 'Exhale • Return Servitude Burdens',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly, returning the excessive duties off your shoulders with respect to your forebears. Whisper: "I am enough."',
          voicePrompt: 'Slowly exhale... Let go of all inherited unworthiness and rest.',
          subtext: 'Deep systemic relaxation spreads through every cell.',
          visualCue: 'Gray dust clears into golden sparkling morning dew'
        }
      ]
    }
  },
  {
    id: 'libra',
    signNameTr: 'Terazi',
    signNameEn: 'Libra',
    symbol: '♎',
    element: 'Hava',
    elementEn: 'Air',
    dates: '23 Eylül - 22 Ekim',
    ancestralThemeTr: 'Feda Edilen Benlik & Bağımlı İlişki Karması',
    ancestralThemeEn: 'Sacrificed Self & Codependency Karma',
    karmicWoundTr: 'Yalnız kalmamak veya huzur bozulmasın diye kendi sınırlarını, tutkularını ve sesini feda etmiş ataların ilişkisel borçları.',
    karmicWoundEn: 'Loss of sovereign identity from ancestors who silenced their own desires to keep peace and appease abusive partners.',
    cordTypeTr: 'Başkalarını memnun etme ve terk edilme korkusuyla örülmüş bağ',
    cordTypeEn: 'People-pleasing cord and fear of disharmony entanglement',
    affirmationTr: 'Kendi merkezimde tam ve bütünüm. Hayır deme cesaretim, sevgimin en kutsal koruyucusudur.',
    affirmationEn: 'I am sovereign and complete within myself. My courage to say "no" is the sacred guardian of my love.',
    ancestralDecreeTr: 'İlişkiler uğruna kendi ruhunu satan tüm atalarım; ödün verme zincirinizi kırıyorum. Kendimi sevmeden kimseyi kurtaramayacağımı biliyorum.',
    ancestralDecreeEn: 'To ancestors who sacrificed your very soul for relational harmony; I break this chain of appeasement. I honor myself first.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Kendi Merkezine Dön',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Nefesi göğsünün tam ortasına çek. Başkalarına dağıttığın enerjini kendi kutsal merkezine geri çağır.',
          voicePrompt: 'Göğsünün merkezine derin nefes al... Dışarıya saçtığın tüm enerjini kendine geri çağır.',
          subtext: 'Kendi alanının sınırlarını hisset.',
          visualCue: 'Gül pembe ve opal beyaz ahenk küresi'
        },
        {
          step: 2,
          name: 'Nefes Tut • Feda Kordonunu İncele',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Sevgi adına katlandığın tavizlerin ve terk edilme korkunun atalarından aktarıldığını fark et.',
          voicePrompt: 'Nefesini tut... Sevgi bulmak için kendini feda etme kordonunu gör ve ışıkla aydınlat.',
          subtext: 'Kendi bütünlüğünü hatırla.',
          visualCue: 'İki insan arasındaki ince karmik iplik parlıyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Kordonu Kes & Özgürleş',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Yavaşça nefes verirken bağı sevgiyle kes. "Seni seviyorum ama kendi yolumu seçiyorum" de.',
          voicePrompt: 'Nefesini yavaşça ver... Bağımlı ilişki kordonunu kes. Kendi dengene kavuş.',
          subtext: 'Gerçek sevgi özgürlükte yeşerir.',
          visualCue: 'Kesilen bağ gül yaprakları gibi dökülüyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Return to Sacred Center',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Inhale into the very center of your heart. Reclaim your scattered energy from everyone and everything.',
          voicePrompt: 'Breathe into your heart center... Call back all parts of your soul that you gave away.',
          subtext: 'Feel the clear energetic boundary around you.',
          visualCue: 'Rose-pink and iridescent opal sphere of balance'
        },
        {
          step: 2,
          name: 'Hold • Inspect Cord of Compromise',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Discern that people-pleasing and fear of discord were inherited survival tactics.',
          voicePrompt: 'Hold your breath... See the thread of self-betrayal and illuminate it with clarity.',
          subtext: 'Remember your innate wholeness.',
          visualCue: 'Entangled psychic cords shimmering in light'
        },
        {
          step: 3,
          name: 'Exhale • Sever & Return to Self',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly, severing the codependent cord with tender resolve. Speak: "I choose my own path in love."',
          voicePrompt: 'Gently exhale... Cut the codependent tie. Anchor in your own sacred balance.',
          subtext: 'True love flourishes only in freedom.',
          visualCue: 'Cut cord dissolves into fragrant rose petals'
        }
      ]
    }
  },
  {
    id: 'scorpio',
    signNameTr: 'Akrep',
    signNameEn: 'Scorpio',
    symbol: '♏',
    element: 'Su',
    elementEn: 'Water',
    dates: '23 Ekim - 21 Kasım',
    ancestralThemeTr: 'Karanlık İhanetler, Tabular & İntikam Bağı',
    ancestralThemeEn: 'Betrayal, Taboos & Vengeance Cords',
    karmicWoundTr: 'Soy ağacında miras kavgaları, kan davaları, tabular, cinsel travmalar ve affedilememiş derin intikam yeminleri.',
    karmicWoundEn: 'Ancestral trauma around betrayal, stolen heritages, hidden violence, occult taboos, and bitter vows of revenge.',
    cordTypeTr: 'Kuyruk sokumuna kilitlenmiş kara ölüm/ihanet kordonu',
    cordTypeEn: 'Sacral root betrayal and vengeance entanglement cord',
    affirmationTr: 'Geçmişin zehrini arıtan anka kuşuyum. Affetmek unutmak değil, kendimi zincirlerden kurtarmaktır.',
    affirmationEn: 'I am the phoenix transmuting ancient venom into wisdom. Forgiving is my absolute liberation.',
    ancestralDecreeTr: 'İhanete uğramış ve intikam ateşiyle yanmış tüm atalarım; zehrinizi altın şifaya dönüştürüyorum. Soyumuzun karanlık yeminlerini feshediyorum.',
    ancestralDecreeEn: 'To ancestors burned by betrayal and sworn to retribution; I transmute your poison into gold. I annul our bloodline’s dark vows.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Derin Sulara İn',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Kuyruk sokumundan derin bir nefes çek. Soyundaki karanlık sırları ve ihanet acısını korkusuzca karşıla.',
          voicePrompt: 'Kuyruk sokumuna doğru derin bir nefes al... Soyundaki en karanlık yaralarla yüzleşme cesaretini çağır.',
          subtext: 'Bedenindeki intikam ve güvensizlik düğümünü hisset.',
          visualCue: 'Koyu bordo ve mor arındırıcı magma ateşi'
        },
        {
          step: 2,
          name: 'Nefes Tut • İhanet Düğümünü Mühürle',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Şüphecilik ve yıkım döngüsünün senin kaderin olmadığını gör. Bağı anka ateşinin mor aleviyle mühürle.',
          voicePrompt: 'Nefesini tut... Bu intikam kordonunun geçmişe ait olduğunu idrak et. Mor alevle yakıp arındır.',
          subtext: 'Zehir panzehire dönüşüyor.',
          visualCue: 'Karanlık kordon mor ışıkta parlayıp kristalleşiyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Anka Kuşu Gibi Doğ',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça verirken tüm intikam kordonlarının kül olup dağıldığını gör. Küllerinden özgürce doğ.',
          voicePrompt: 'Derin nefes ver... Tüm intikam bağlarını küle dönüştür ve anka kuşu gibi özgürlüğe kanatlan.',
          subtext: 'Ruhun tüm zehirlerden arındı.',
          visualCue: 'Küller altın ışığa dönüşüp göğe yükseliyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Descend into Shadows',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Draw breath deep into your pelvic floor and sacrum. Meet the ancient ancestral secrets and betrayals without fear.',
          voicePrompt: 'Inhale deep into your root... Summon the courage to face the ancient shadow wounds of your bloodline.',
          subtext: 'Sense the knot of suspicion in your core.',
          visualCue: 'Deep burgundy and violet alchemical magma'
        },
        {
          step: 2,
          name: 'Hold • Transmute Venom Cord',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Realize that suspicion and vengeance are not your destiny. Transmute with the violet flame of the phoenix.',
          voicePrompt: 'Hold your breath... Transmute this vow of revenge. Let the violet flame cleanse the dark cord.',
          subtext: 'Poison transmuting into sacred medicine.',
          visualCue: 'Dark cord crystallizing under violet flame'
        },
        {
          step: 3,
          name: 'Exhale • Rebirth of the Phoenix',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly, watching all cords of malice burn into white ashes. Rise pristine from the ashes of your ancestry.',
          voicePrompt: 'Gently exhale... Let every bond of vengeance dissolve to ash. Rise unburdened as the phoenix.',
          subtext: 'Your soul is cleansed of historical malice.',
          visualCue: 'Ashes ignite into golden celestial stars'
        }
      ]
    }
  },
  {
    id: 'sagittarius',
    signNameTr: 'Yay',
    signNameEn: 'Sagittarius',
    symbol: '♐',
    element: 'Ateş',
    elementEn: 'Fire',
    dates: '22 Kasım - 21 Aralık',
    ancestralThemeTr: 'Sürgün, Göç & Kök Salma Korkusu Karması',
    ancestralThemeEn: 'Exile, Migration & Rootlessness Karma',
    karmicWoundTr: 'Doğduğu topraklardan göç etmek zorunda kalmış, sürgün edilmiş ya da inançları yüzünden zulüm görmüş ataların aidiyetsizlik yarası.',
    karmicWoundEn: 'Displaced souls, refugees, and exiles in the family lineage who lost their homelands and passed down an inability to put down roots.',
    cordTypeTr: 'Kaçış dürtüsü ve hiçbir yere ait olamama göçebe bağı',
    cordTypeEn: 'Restless flight instinct and rootless wanderer cord',
    affirmationTr: 'Nerede olursam olayım, evim kendi kalbimdir. Kök salmak beni kısıtlamaz, aksine kanatlarımı besler.',
    affirmationEn: 'Wherever I walk, my home is within. Rooting into life does not cage me—it fuels my soaring wings.',
    ancestralDecreeTr: 'Yurtsuz kalmış, sürgünlerde yitip gitmiş atalarım; kayıp topraklarınızın yasını sevgiyle tutuyor ve artık güvende kök salmayı seçiyorum.',
    ancestralDecreeEn: 'To ancestors exiled and uprooted across foreign horizons; I honor your grieving footsteps and choose to rest in sacred belonging.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Kökleri Yeryüzüne Sal',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Nefesi ayak tabanlarından içeri çek. Göçebe atalarının yorgunluğunu ve yurtsuz kalmışlık acısını kucakla.',
          voicePrompt: 'Ayak tabanlarından derin nefes al... Sürgün edilmiş atalarının yorgunluğunu kabul et.',
          subtext: 'Sürekli kaçma ve uzaklaşma dürtüsünü fark et.',
          visualCue: 'Koyu safir ve çivit mavisi kozmik ok'
        },
        {
          step: 2,
          name: 'Nefes Tut • Göç Yarasını Şifalandır',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Artık kaçmak zorunda olmadığını, bu yeryüzünde kutsal bir yerin olduğunu idrak et.',
          voicePrompt: 'Nefesini tut... Kök salma korkunun atalarının göç yarası olduğunu gör.',
          subtext: 'Kaçış kordonu altın bir çıpayla sabitleniyor.',
          visualCue: 'Kozmik ok kalbin merkezine saplanıp ışık saçıyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Yersizlik Bağını Çöz',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça verirken yurtsuzluk kordonunu çöz. Bulunduğun ana ve mekana köklerini güvenle sal.',
          voicePrompt: 'Yavaşça nefes ver... Kaçış kordonunu serbest bırak. Kendi evine hoş geldin.',
          subtext: 'Bedeninde gerçek bir yuva hissi yeşeriyor.',
          visualCue: 'Işıktan kökler yerkürenin kalbine sarılıyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Anchor Roots Through Soles',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Draw breath upward through the soles of your feet. Hold compassion for the weary feet of exiled ancestors.',
          voicePrompt: 'Inhale up through your feet... Acknowledge the deep exhaustion of your displaced ancestors.',
          subtext: 'Witness the restless urge to run away.',
          visualCue: 'Deep sapphire and indigo celestial arrow'
        },
        {
          step: 2,
          name: 'Hold • Heal Displaced Heritage',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Know you are no longer in exile. Anchor the truth that you have a sovereign right to exist here.',
          voicePrompt: 'Hold your breath... Realize that rootlessness is an ancestral echo. Drop your anchor.',
          subtext: 'Flight cord stabilized with a golden anchor.',
          visualCue: 'Cosmic arrow planting into living fertile earth'
        },
        {
          step: 3,
          name: 'Exhale • Sever Restless Cord',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly, letting the cord of restless exile dissolve. Whisper: "I am home in my own flesh."',
          voicePrompt: 'Slowly exhale... Cut the cord of perpetual running. Welcome yourself home.',
          subtext: 'Luminous roots twine peacefully into the Earth’s core.',
          visualCue: 'Golden light roots anchoring into planetary heart'
        }
      ]
    }
  },
  {
    id: 'capricorn',
    signNameTr: 'Oğlak',
    signNameEn: 'Capricorn',
    symbol: '♑',
    element: 'Toprak',
    elementEn: 'Earth',
    dates: '22 Aralık - 19 Ocak',
    ancestralThemeTr: 'Baba Soyu, Ağır Görev & Duygusuzluk Karması',
    ancestralThemeEn: 'Patrilineal Duty, Coldness & Heavy Burdens',
    karmicWoundTr: 'Sevginin yalnızca başarıyla hak edildiğine inandırılmış, çocukluğunu yaşayamamış, katı kural ve ceza altında ezilmiş ata babalarının mirası.',
    karmicWoundEn: 'Emotional suppression, joyless austerity, and patriarchal weight passed down through cold fathers and unyielding duty.',
    cordTypeTr: 'Sırtı büken katı sorumluluk ve neşesiz görev kordonu',
    cordTypeEn: 'Stoic duty and suppressed vulnerability spinal cord',
    affirmationTr: 'Ben sadece başardıklarımla değil, varlığımla değerliyim. Hayatın neşesini ve kolaylığını kabul ediyorum.',
    affirmationEn: 'My worth is not measured by my achievements. I welcome effortless joy, ease, and gentle tenderness.',
    ancestralDecreeTr: 'Omzunda dünya kadar yük taşıyan tüm baba soyum; katı kurallarınızı ve neşesiz görevinizi sevgiyle size iade ediyorum. Çocuksu neşemi geri alıyorum.',
    ancestralDecreeEn: 'To all patrilineal ancestors who bore agonizing burdens without complaint; I return your joyless duty. I reclaim my playful heart.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Omurgayı Doğrult',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Omurgan boyunca nefesi yukarı çek. Baba soyunun taşıdığı devasa yükleri ve neşesiz görev bilincini fark et.',
          voicePrompt: 'Omurgan boyunca derin bir nefes al... Baba soyunun ağır sorumluluk mirasını şefkatle hisset.',
          subtext: 'Sırtındaki görünmez kayayı fark et.',
          visualCue: 'Granit kaya rengi ve elmas berraklığında dağ ışığı'
        },
        {
          step: 2,
          name: 'Nefes Tut • Katı Zırhı Gör',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Başarısızlık korkusunun ve duygusuz görünme çabasının atalarının hayatta kalma zırhı olduğunu idrak et.',
          voicePrompt: 'Nefesini tut... Bu katı görev kordonunun sana ait olmadığını gör ve altın ışıkla yumuşat.',
          subtext: 'Sırtındaki ağırlık erimeye başlıyor.',
          visualCue: 'Sert kaya çatlayıp içinden berrak su fışkırıyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Sırtındaki Yükü İndir',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça verirken sırtındaki tüm ata kayalarını yere indir. "Artık neşeyle yaşayabilirim" de.',
          voicePrompt: 'Yavaşça nefes ver... Baba soyunun ağır yük kordonunu kesip atalarına emanet et.',
          subtext: 'Omurgan hafifliyor ve esniyor.',
          visualCue: 'Ağır kayalar hafif kristal toza dönüşüyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Lengthen the Spine',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Draw breath straight up your spine. Acknowledge the austere endurance and stoic burdens of your paternal forebears.',
          voicePrompt: 'Breathe up along your spine... Feel the heavy patriarchal duty carried through generations.',
          subtext: 'Notice the invisible boulder on your back.',
          visualCue: 'Granite mountain peak touched by diamond clarity'
        },
        {
          step: 2,
          name: 'Hold • Witness the Rigid Armor',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Know that unyielding coldness was a shield of survival. Encircle the stern cord in warm compassion.',
          voicePrompt: 'Hold your breath... Realize that cold stoicism was an armor, not truth. Soften the cord.',
          subtext: 'Rigid conditioning beginning to thaw.',
          visualCue: 'Cracking granite stone revealing crystal spring waters'
        },
        {
          step: 3,
          name: 'Exhale • Release the Boulder',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale slowly, laying down the ancestral boulders off your back. Speak: "I am allowed to dance in ease."',
          voicePrompt: 'Slowly exhale... Cut the cord of joyless duty and lay it down with reverence.',
          subtext: 'Your spine aligns in supple, buoyant lightness.',
          visualCue: 'Heavy rocks dissolve into shimmering diamond snow'
        }
      ]
    }
  },
  {
    id: 'aquarius',
    signNameTr: 'Kova',
    signNameEn: 'Aquarius',
    symbol: '♒',
    element: 'Hava',
    elementEn: 'Air',
    dates: '20 Ocak - 18 Şubat',
    ancestralThemeTr: 'Dışlanma, Delilik & Sürüden Ayrılma Karması',
    ancestralThemeEn: 'Ostracism, Madness & Alienation Karma',
    karmicWoundTr: 'Farklı düşündüğü, geleneklere uymadığı için ailesi veya toplumu tarafından deli damgası yemiş, sürülmüş ve sevgisiz bırakılmış ataların acısı.',
    karmicWoundEn: 'Ancestors branded as mad, exiled for eccentricity, rejected by tribe or family, passing down deep isolation.',
    cordTypeTr: 'Yakınlaşma korkusu ve duygusal yabancılaşma kordonu',
    cordTypeEn: 'Detached intellectual defense and tribal alienation cord',
    affirmationTr: 'Özgünlüğüm benim en büyük hediyemdir. Farklı kalarak da sevilmeyi ve ait olmayı hak ediyorum.',
    affirmationEn: 'My originality is my highest gift. I am worthy of profound belonging without compromising my truth.',
    ancestralDecreeTr: 'Deli denilerek dışlanan tüm dahi atalarım; yalnızlığınızın yasını bitiriyorum. Farklılığımızı bir lanet değil, bir nur olarak kutluyorum.',
    ancestralDecreeEn: 'To visionary ancestors shunned as mad or dangerous; I release the sting of your loneliness. I celebrate our divergence as a blessing.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Kozmik Zihni Genişlet',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Göğsünü ve tepe çakranı evrenin yıldızlarına aç. Dışlanmış atalarının yalnızlık sızısını şefkatle sar.',
          voicePrompt: 'Göğsünü evrenin sonsuzluğuna açarak derin nefes al... Dışlanmış atalarının yalnızlığını kucakla.',
          subtext: 'İçindeki yabancılaşma hissini fark et.',
          visualCue: 'Elektrik mavisi ve gümüş şimşek frekansları'
        },
        {
          step: 2,
          name: 'Nefes Tut • Yabancılaşma Kordonunu Gör',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Soğuk ve mesafeli kalma zırhının dışlanma korkusundan kaynaklandığını idrak et. Kalbini insanlığa bağla.',
          voicePrompt: 'Nefesini tut... Soğuk duvarlarının bir ata yarası olduğunu gör ve elektrik mavisi ışıkla erit.',
          subtext: 'Zihin ve kalp bir araya geliyor.',
          visualCue: 'Kopuk teller kozmik bir ağda birleşiyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Yalnızlık Bağından Kurtul',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça verirken sürgün ve delilik kordonunu çöz. "Ben bu dünyaya ve bu ana aitim" de.',
          voicePrompt: 'Yavaşça nefes ver... Yalnızlık kordonunu kes ve evrensel birliğin sevgisine katıl.',
          subtext: 'Gerçek aidiyet kendi ruhunda başlar.',
          visualCue: 'Mavi şimşekler sakinleştirici yıldız yağmuruna dönüşüyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Expand Cosmic Mind',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Inhale through your crown chakra into starlight. Welcome the outcast ancestors who dared to think beyond their time.',
          voicePrompt: 'Inhale deeply towards the cosmos... Embrace the lonely brilliance of your exiled visionary forebears.',
          subtext: 'Witness the chronic emotional detachment within.',
          visualCue: 'Electric cyan and silver cosmic lightning currents'
        },
        {
          step: 2,
          name: 'Hold • Witness Alienation Cord',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Know that cynicism and aloof coldness were defenses against abandonment. Bridge heart and intellect.',
          voicePrompt: 'Hold your breath... Realize your aloof walls are an ancient trauma shield. Dissolve them in cyan light.',
          subtext: 'Merging intellect with the warmth of love.',
          visualCue: 'Disconnected neural threads linking into golden web'
        },
        {
          step: 3,
          name: 'Exhale • Sever Tribal Ostracism',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale smoothly, cutting the cord of alienation. Affirm: "I belong to this living universe, cherished as I am."',
          voicePrompt: 'Slowly exhale... Cut the cord of outcast exile. Step into universal belonging.',
          subtext: 'True belonging starts within your own soul.',
          visualCue: 'Electric currents soften into gentle falling stardust'
        }
      ]
    }
  },
  {
    id: 'pisces',
    signNameTr: 'Balık',
    signNameEn: 'Pisces',
    symbol: '♓',
    element: 'Su',
    elementEn: 'Water',
    dates: '19 Şubat - 20 Mart',
    ancestralThemeTr: 'Kolektif Kurbanlık, Bağımlılık & Sınır Kaybı',
    ancestralThemeEn: 'Collective Victimhood, Addiction & Loss of Self',
    karmicWoundTr: 'Ailenin günah keçisi olmuş, bağımlılıklarla dünyadan kaçmış veya başkalarının acısını emerek kendini kurban etmiş ataların döngüsü.',
    karmicWoundEn: 'Martyrdom, addictions, psychic sponge patterns, and drowning in collective trauma inherited from sacrificial ancestors.',
    cordTypeTr: 'Herkesin acısını emen psişik sünger ve kurban kordonu',
    cordTypeEn: 'Psychic sponge entanglement and martyr sacrifice cord',
    affirmationTr: 'Başkalarını kurtarmak benim görevim değildir. Kendi sınırlarımı korumak, en saf merhamet eylemidir.',
    affirmationEn: 'I am not here to save everyone at the cost of my life. Holding boundaries is my purest act of compassion.',
    ancestralDecreeTr: 'Acı denizinde boğulan ve bağımlılıklarla kaçan tüm atalarım; kurban rolünüzü sevgiyle size iade ediyorum. Hayatın ışığında berrak ve ayık kalmayı seçiyorum.',
    ancestralDecreeEn: 'To ancestors who drowned in sorrow and numbed reality; I lovingly return your martyrdom. I choose to stand awake and clear in the light.',
    breathingSteps: {
      tr: [
        {
          step: 1,
          name: 'Nefes Al • Kozmik Okyanustan Arın',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Nefesi kalbine ve ruhuna çek. Üzerine aldığın tüm yabancı acıları ve ata kurbanlıklarını şefkatle fark et.',
          voicePrompt: 'Kalbine doğru derin bir nefes al... Başkalarından emdiğin tüm yükleri ve ata kurbanlığını kabul et.',
          subtext: 'Bedenindeki duygusal sis ve bulanıklığı gör.',
          visualCue: 'Kozmik leylak ve sedefli okyanus suları'
        },
        {
          step: 2,
          name: 'Nefes Tut • Psişik Kordonu Arındır',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Nefesini tut. Başkalarının kurtarıcısı olmanın senin görevin olmadığını idrak et. Bağı kristal berraklığıyla çevrele.',
          voicePrompt: 'Nefesini tut... Kurban olma kordonunu gör ve bunun sana ait olmadığını bilerek ışıkla mühürle.',
          subtext: 'Bulanık sular berrak kristale dönüşüyor.',
          visualCue: 'Karmik kordon kristal bir prizmaya dönüşüyor'
        },
        {
          step: 3,
          name: 'Nefes Ver • Kurban Rolünü Bırak',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Nefesi yavaşça verirken kurbanlık ve kurtarıcılık kordonunu sevgiyle kes. Kendi berrak sınırlarına dön.',
          voicePrompt: 'Yavaşça nefes ver... Tüm kurbanlık kordonlarını kesip okyanusa teslim et. Artık özgürsün.',
          subtext: 'Kendi ruhunun berraklığında nefes alıyorsun.',
          visualCue: 'Dalgalar sakinleşip ayna gibi pürüzsüzleşiyor'
        }
      ],
      en: [
        {
          step: 1,
          name: 'Inhale • Cleanse in Oceanic Waters',
          durationSeconds: 4,
          phase: 'inhale',
          guidanceText: 'Inhale deep into your heart. Witness all foreign grief, psychic sponge absorption, and ancestral martyrdom with mercy.',
          voicePrompt: 'Breathe into your compassionate heart... Acknowledge all the collective sorrows you have absorbed.',
          subtext: 'Notice the emotional fog and boundary blur in your aura.',
          visualCue: 'Cosmic lilac and iridescent pearl tidal mist'
        },
        {
          step: 2,
          name: 'Hold • Purify Martyrdom Cord',
          durationSeconds: 4,
          phase: 'hold',
          guidanceText: 'Hold your breath. Know that saving others at your expense is an ancient illusion. Encircle the martyr cord in crystal truth.',
          voicePrompt: 'Hold your breath... Realize that sacrificing your vitality is an inherited trap. Seal with crystal light.',
          subtext: 'Murky waters settling into glass-like stillness.',
          visualCue: 'Dense cord transforming into clear diamond prism'
        },
        {
          step: 3,
          name: 'Exhale • Sever Sacrificial Cord',
          durationSeconds: 6,
          phase: 'exhale',
          guidanceText: 'Exhale smoothly, cutting the martyr cord with unconditional self-love. Whisper: "I save myself first."',
          voicePrompt: 'Gently exhale... Cut the cords of martyrdom into the sacred sea. Return to sovereign clarity.',
          subtext: 'Resting in pristine clarity and sacred boundary.',
          visualCue: 'Turbulent tides smooth into an immaculate golden mirror'
        }
      ]
    }
  }
];

export const ZODIAC_LIST = ZODIAC_KARMA_PROFILES.map(z => ({
  id: z.id,
  nameTr: z.signNameTr,
  nameEn: z.signNameEn,
  symbol: z.symbol,
  dates: z.dates
}));
