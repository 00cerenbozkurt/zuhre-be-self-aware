export interface SpreadPosition {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  gridArea?: string; // For Celtic cross layout
}

export interface TarotSpread {
  id: string;
  name: string;
  shortDesc: string;
  cardCount: number;
  positions: SpreadPosition[];
}

export const TAROT_SPREADS: TarotSpread[] = [
  {
    id: 'single',
    name: 'Günün Gölgesi (Tek Kart)',
    shortDesc: 'Bilinçdışının bugün sana fısıldadığı en acil hakikat.',
    cardCount: 1,
    positions: [
      {
        id: 1,
        title: 'Öz Yüzleşme',
        subtitle: 'Gölgenin Aynası',
        description: 'Şu an görmezden geldiğin ama ruhunun tam ortasında duran hakikat.'
      }
    ]
  },
  {
    id: 'three_card',
    name: '3 Kartlık Gölge & Ata Şifası',
    shortDesc: 'Kök yara, şimdiki yüzleşme ve soy karmasını çözen şifa yolu.',
    cardCount: 3,
    positions: [
      {
        id: 1,
        title: 'Kök Yara & Ata Mirası',
        subtitle: 'Geçmişin Sessiz Çığlığı',
        description: 'Soyundan devraldığın, bilinçdışında taşıdığın ilk keder ve kök inanç.'
      },
      {
        id: 2,
        title: 'Şimdiki Gölge & Yüzleşme',
        subtitle: 'Aynadaki Maske',
        description: 'Bugünkü hayatında seni tıkayan, korktuğun için savunduğun gölge tarafın.'
      },
      {
        id: 3,
        title: 'Ruhsal Şifa & Özgürleşme',
        subtitle: 'Karmik Çıkış Yolu',
        description: 'Döngüyü kırmak için atman gereken içsel adım ve ruhuna açılan kapı.'
      }
    ]
  },
  {
    id: 'five_card',
    name: '5 Kartlık Bilinçdışı Labirenti',
    shortDesc: 'Kökten geleceğe, zihnin derinliklerindeki engeller ve dönüşüm anahtarı.',
    cardCount: 5,
    positions: [
      {
        id: 1,
        title: 'Kök Temel',
        subtitle: 'Toprağın Altındaki Tohum',
        description: 'Bu durumun en derinindeki bilinçdışı kaynağı.'
      },
      {
        id: 2,
        title: 'Bilinçdışı Gölge',
        subtitle: 'Karanlık Odadaki Yankı',
        description: 'Kendine bile itiraf etmekten kaçındığın bastırılmış arzu veya korku.'
      },
      {
        id: 3,
        title: 'Karmik Blokaj',
        subtitle: 'Aşılamayan Eşik',
        description: 'İlerlemene engel olan eski savunma mekanizması.'
      },
      {
        id: 4,
        title: 'Dönüşüm Anahtarı',
        subtitle: 'Simyacının Ateşi',
        description: 'Yarayı güce ve bilgeliğe dönüştürecek içsel eylem.'
      },
      {
        id: 5,
        title: 'Gelecek Işığı',
        subtitle: 'Şafağın Ufku',
        description: 'Gölgenle bütünleştiğinde varacağın yüksek bilinç hali.'
      }
    ]
  },
  {
    id: 'celtic_cross',
    name: 'Keltik Çaprazı (10 Kart)',
    shortDesc: 'En kadim ve kapsamlı tarot açılımı: Kader, soy, çevre ve nihai karmik uyanış.',
    cardCount: 10,
    positions: [
      {
        id: 1,
        title: '1. Özbenlik & Mevcut Hal',
        subtitle: 'Merkezdeki Kalp',
        description: 'Şu anki ruh halin, enerjin ve bulunduğun zemin.',
        gridArea: 'center-base'
      },
      {
        id: 2,
        title: '2. Karşıt Güç & Engel',
        subtitle: 'Kılıçların Kesişimi',
        description: 'Sana meydan okuyan, seni zorlayan doğrudan sınav veya kişi.',
        gridArea: 'center-cross'
      },
      {
        id: 3,
        title: '3. Kök & Bilinçdışı Temel',
        subtitle: 'Ata Toprağı',
        description: 'Bu meselenin çocukluğuna veya soyuna dayanan görünmez kökleri.',
        gridArea: 'bottom'
      },
      {
        id: 4,
        title: '4. Geçmişin Gölgesi',
        subtitle: 'Kapanan Kapı',
        description: 'Etkisi henüz geçmemiş, ardında bıraktığın yakın geçmiş.',
        gridArea: 'left'
      },
      {
        id: 5,
        title: '5. Bilinçli Hedef & Tepe',
        subtitle: 'Ulaşılabilecek En Yüce Işık',
        description: 'Aklının ulaşmak istediği nihai sonuç ve ideal vizyon.',
        gridArea: 'top'
      },
      {
        id: 6,
        title: '6. Yakın Gelecek',
        subtitle: 'Eşikte Bekleyen',
        description: 'Çok yakında yüzleşeceğin yeni enerji ve döngü.',
        gridArea: 'right'
      },
      {
        id: 7,
        title: '7. Kendi Tutumun',
        subtitle: 'Aynadaki Duruşun',
        description: 'Bu duruma yaklaşımın, içindeki korku veya güç.',
        gridArea: 'staff-1'
      },
      {
        id: 8,
        title: '8. Dış Etkenler & Çevre',
        subtitle: 'Kolektif Yankı',
        description: 'Ailenin, toplumun ve etrafındaki insanların üzerindeki baskısı.',
        gridArea: 'staff-2'
      },
      {
        id: 9,
        title: '9. Korkular & Umutlar',
        subtitle: 'Ruhun Gizli Arzusu',
        description: 'En çok korktuğun ile en çok arzuladığın şeyin kesiştiği nokta.',
        gridArea: 'staff-3'
      },
      {
        id: 10,
        title: '10. Nihai Dönüşüm',
        subtitle: 'Karmik Çözülüş',
        description: 'Tüm bu yolculuğun ruhuna getireceği nihai bilgelik ve ata şifası.',
        gridArea: 'staff-4'
      }
    ]
  }
];
