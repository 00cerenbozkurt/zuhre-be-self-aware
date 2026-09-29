// Literary Ancestral Karma & Carl Jung Shadow Synthesis Engine
// Written in the deep, melancholic, poetic voice of N.G. Kabal (Hepimiz Gökyüzü Olmak İstedik)

export interface DrawnCard {
  id: number;
  name: string;
  imageFilename: string;
  archetype: string;
  meaning: string;
  positionTitle?: string;
  positionSubtitle?: string;
}

export interface KarmaSynthesisResult {
  title: string;
  dominantTheme: string;
  suitElement: string;
  analysisSections: {
    heading: string;
    subtitle: string;
    content: string;
  }[];
  meditationGuide: {
    stepNumber: number;
    title: string;
    breathInstruction: string;
    guideText: string;
    spokenMantra: string;
  }[];
  sacredAffirmation: string;
  ancestralMotto: string;
  ritualAdvice: string;
}

export function synthesizeAncestralKarma(cards: DrawnCard[]): KarmaSynthesisResult {
  if (!cards || cards.length === 0) {
    return getDefaultSynthesis();
  }

  // Count suits and archetypes
  let swordCount = 0;
  let cupCount = 0;
  let wandCount = 0;
  let pentacleCount = 0;
  let majorCount = 0;

  cards.forEach(c => {
    const fn = c.imageFilename.toLowerCase();
    if (fn.startsWith('sword')) swordCount++;
    else if (fn.startsWith('cup')) cupCount++;
    else if (fn.startsWith('wand')) wandCount++;
    else if (fn.startsWith('pentacle')) pentacleCount++;
    else if (fn.startsWith('major')) majorCount++;
  });

  const cardNames = cards.map(c => c.name).join(', ');
  const cardArchetypes = cards.map(c => c.archetype).slice(0, 3).join(' ✦ ');

  // Determine dominant energy
  let suitElement = 'Ruhun Kozmik Düğümü (Majör Arkana Baskın)';
  let dominantTheme = 'Kolektif Bilinçdışının Büyük Uyanışı';
  let rootWoundDesc = '';
  let shadowEncounterDesc = '';
  let karmicReleaseDesc = '';
  let affirmation = '';
  let ancestralMotto = '';

  if (swordCount >= cupCount && swordCount >= wandCount && swordCount >= pentacleCount && swordCount > 0) {
    suitElement = 'Hava & Zihin (Kılıçlar Enerjisi)';
    dominantTheme = 'Susulmuş Doğrular ve Nesiller Boyu Taşınan Zihinsel Prangalar';
    rootWoundDesc = `Soy ağacının dallarında en çok tekrarlanan yara; hakikati konuşmanın tehlikeli sayıldığı, kelimelerin gırtlakta düğümlendiği o eski susturuluşlardır. Ataların, hayatta kalabilmek için zihinlerine kalın zırhlar giydirmiş, şüpheyi ve savunmayı bir aile mirası gibi kanına zerk etmiş. Açılan kartların (${cardArchetypes}) fısıldadığı gibi; bugün zihninde durmaksızın dönen o acımasız iç ses aslında sana değil, dedelerinin ve ninelerinin korku dolu fısıltılarına aittir.`;
    shadowEncounterDesc = `Bu kök yara bugünkü hayatında; her an tetikte olma hali, aşırı düşünme krizleri ve duygularını aklın soğuk cerrah bıçağıyla parçalama eğilimi olarak tezahür ediyor. Yaralanmaktan o kadar korkuyorsun ki, kimse seni terk etmeden önce sen zihninde köprüleri yıkıyorsun. Haklı çıkma arzun, sevilmeye layık olduğunu kanıtlama çabandır; ancak kılıç havada kaldığı sürece kalbin kanamaya devam eder.`;
    karmicReleaseDesc = `Karmik düğüm tam burada çözülüyor: Hakikat zırh giymeyi değil, çıplak kalmayı gerektirir. Atalarının susmak zorunda kaldığı her kelimeyi bugün kendi sesinle özgürleştir; ama bunu bir silahla değil, affedişin şefkatiyle yap. Zihnindeki o hayalet mahkemesini lağvet. Sen soyunun gardiyanı değil, o parmaklıkları gökyüzüne açan ilk özgür kuşusun.`;
    affirmation = 'Ben soyumun susturulduğu yerde konuşan ses, karanlığında parlayan hakikat meşalesiyim. Atalarımın korkularını saygıyla toprağa bırakıyor; zihnimi bir hapishane değil, ruhumun sonsuz gökyüzü kılıyorum.';
    ancestralMotto = 'Kılıç indiğinde geriye sadece şefkat kalır.';
  } else if (cupCount >= wandCount && cupCount >= pentacleCount && cupCount > 0) {
    suitElement = 'Su & Duygular (Kupalar Enerjisi)';
    dominantTheme = 'Sevgisizlik Hafızası, Boğulmuş Gözyaşları ve Kalp Şifası';
    rootWoundDesc = `Kanında asırlardır biriken o derin melankoli, soyundaki kadınların ve yalnız bırakılmış erkeklerin akıtamadığı gözyaşlarının gölüdür. Birileri çok erken yaşta kalbini taşlaştırmak zorunda kaldı; birileri sevgisini gösterirse incineceğini düşündü. Bu açılımda yankılanan arketipler (${cardArchetypes}), sevilmek için hep fedakarlık yapman gerektiğine inanan o kadim kurban bilincini gözler önüne seriyor.`;
    shadowEncounterDesc = `Kendi gölgene baktığında görüyorsun: Boş kadehleri doldurmak için kendi ruhunu kurutuyorsun. Başkalarının acısını kendi suçun gibi sırtlanmak, çocukluğunda alamadığın o saf şefkati satın alma çabasıdır. Terk edilme korkusuyla ördüğün o yapay neşenin altında, henüz hiç kimsenin sarılmadığı o küçük kız veya erkek çocuğu sessizce bekliyor.`;
    karmicReleaseDesc = `Şifa, başkalarını kurtarma saplantısından vazgeçtiğin an fışkıracaktır. Atalarının dökemediği o yaşları onurlandır; bırak aksınlar, çünkü gözyaşı ruhun toprağını yıkayan kutsal yağmurdur. Kadehin dışarıdan dolmasını bekleme; sen kendi varlığını koşulsuz şefkatle kucakladığında, soyunun asırlık kuraklığı nihayet son bulur.`;
    affirmation = 'Soyumun döktüğü ve dökemediği tüm gözyaşlarını kutsal bir nehir gibi kalbimden geçiriyorum. Sevilmek için tükenmek zorunda değilim; varlığımın kendisi saf sevgidir ve yuvam kalbimdir.';
    ancestralMotto = 'Taşan kadeh, kuruyan toprağın şifasıdır.';
  } else if (wandCount >= pentacleCount && wandCount > 0) {
    suitElement = 'Ateş & İrade (Değnekler Enerjisi)';
    dominantTheme = 'Bastırılmış Tutkular, Yarım Kalmış Düşler ve Yaşam Kıvılcımı';
    rootWoundDesc = `Senin içinde durmaksızın yanan o huzursuz kıvılcım, soyunun gerçekleştiremediği, korkudan yarıda bıraktığı düşlerin ateşidir. Birileri hayallerini ailesi için feda etti; birileri cesaret edemediği için öfkesini çocuklarına miras bıraktı. Kartlarının dili (${cardArchetypes}), senin sıradan bir hayatla yetinmeyen o hırçın ruhunun aslında atalarının yarım kalmış türküsü olduğunu söylüyor.`;
    shadowEncounterDesc = `Gölgen, dinlenmeyi bir tembellik, durmayı bir ölüm gibi algılayan o yorgun savaşçıdır. Sürekli bir şeyleri başarmak, sürekli cephede olmak zorunda hissediyorsun; çünkü durursan o derin boşluğun seni yutacağından korkuyorsun. Oysa içindeki o öfke düşmanlarına değil, kendi potansiyelini yaşayamamış geçmiş nesillerin çığlığına aittir.`;
    karmicReleaseDesc = `Ateşini dünyayı yakmak için değil, kendi yolunu aydınlatmak için kullanmayı öğrendiğinde zincir kırılır. Atalarına 'Sizin yaşayamadığınız hayatı ben sizin yerinize değil, kendi adıma ve onurunuza yaşayacağım' de. Savaş bitti; kılıcını bırak ve meşaleni kaldır. Sen onların en cesur şafağısın.`;
    affirmation = 'Atalarımın yarım bıraktığı her hayali kendi ışığımla selamlıyorum. Yaşamak bir savaş değil, ruhumun yaratıcı dansıdır; içimdeki ateşi şefkatle dünyayı ısıtmak için parlatıyorum.';
    ancestralMotto = 'Küllerin altında bekleyen kıvılcım, kendi güneşini yaratır.';
  } else if (pentacleCount > 0) {
    suitElement = 'Toprak & Kökler (Tılsımlar Enerjisi)';
    dominantTheme = 'Kıtlık Bilinci, Güvensizlik ve Beden Hafızasının Özgürleşmesi';
    rootWoundDesc = `Hücrelerinde taşıdığın o açıklanamaz 'yetmeyecek' korkusu, kıtlıktan, savaşlardan ve toprağını terk etmek zorunda kalan atalarının göç yollarından sana ulaştı. Açılan semboller (${cardArchetypes}), paranın, bedenin ve güvenliğin her an kaybedilebilecek bir lüks gibi algılandığı derin bir kök travmasına işaret ediyor. Birileri çok çalıştı ama hiçbir zaman gerçekten tok hissedemedi.`;
    shadowEncounterDesc = `Bugün hayata karşı gösterdiğin o aşırı kontrolcülük, cimrilik veya tam tersi savurganlık bu kadim güvensizlikten besleniyor. Bedenini dinlemeyi unutmuşsun; sürekli bir sonraki felakete hazırlanıyorsun. Oysa sımsıkı kapattığın o yumruk, sana sunulacak olan yeni bereketi de içeri alamaz.`;
    karmicReleaseDesc = `Şifa, toprağın koşulsuz cömertliğine yeniden güvenmektir. Ayaklarını çıplak olarak yere bas ve hatırla: Sen bu evrenin istenmeyen bir yabancısı değilsin. Atalarının taşıdığı o açlık hafızasını onlara teşekkür ederek toprağa devret. Sen bolluğun içinde doğdun ve beden senin en kutsal tapınağındır.`;
    affirmation = 'Atalarımın yokluk ve güvensizlik hafızasını sevgiyle toprağa iade ediyorum. Evren beni her nefeste besliyor; köklerim sağlam, bedenim güvende ve ruhum sonsuz bir bereketle sarmalanmış durumda.';
    ancestralMotto = 'Toprak affeder, tohum filizlenir, soy berekete erer.';
  } else {
    // Major Arcana dominant
    suitElement = 'Kozmik Öz (Büyük Arkana Baskın)';
    dominantTheme = 'Kader Sarmalının Kırılışı ve Büyük Ruhsal İnisiyasyon';
    rootWoundDesc = `Bu açılım sıradan bir günlük kaygının değil; soyunun asırlardır beklediği 'Büyük Uyanış' inisiyasyonunun işaretidir. Majör arkana kartlarının ağırlığı (${cardArchetypes}), senin ailenin içinde o kurban zincirini sonlandıracak 'Dönüm Noktası' olduğunu haykırıyor. Atalarının yüzleşmekten kaçtığı o büyük sırlar, tabulaştırılmış karanlıklar senin ellerinde çözülmek için bugüne taşındı.`;
    shadowEncounterDesc = `Kendi gölgenle yüzleştiğinde, hayatının neden bu kadar yoğun, fırtınalı ve derin sınavlarla geçtiğini anlıyorsun. Sen sadece kendi kaderini yaşamıyorsun; arkandaki yüzlerce ruhun sınavını göğsünde taşıyorsun. Yalnızlık hissin bir dışlanma değil, bireyleşme yolunda çıktığın o kutsal çöl yolculuğudur.`;
    karmicReleaseDesc = `Kozmik uyanış teslimiyetle başlar. Çarkın dönüşüne direnme; bırak eski kimliğin, atalarının sana biçtiği roller birer birer dökülsün. Küllerinden korkma, çünkü N.G. Kabal'ın dediği gibi: Hepimiz gökyüzü olmak istedik ama gökyüzü olmak için önce kendi karanlığımızda kaybolmamız gerekirdi. Artık doğma vaktin geldi.`;
    affirmation = 'Ben soyumun kader sarmalını kıran o ulu dönüm noktasıyım. Geçmişin tüm gölgelerini bağışlayarak kalbime alıyor; kendi içimdeki tanrısal özü ve sınırsız gökyüzünü kucaklıyorum.';
    ancestralMotto = 'Karanlığın bittiği yerde sen başlarsın.';
  }

  return {
    title: '✦ Soyun Kırık Aynası: Ata Karması Şifa Çözümlemesi ✦',
    dominantTheme,
    suitElement,
    analysisSections: [
      {
        heading: '1. Kök Yara: Soyunun Dilsiz Acısı',
        subtitle: 'Geçmiş Nesillerden Kanına Akan Keder',
        content: rootWoundDesc
      },
      {
        heading: '2. Aynadaki Yüzleşme: Gölgene Giydirdiğin Zırh',
        subtitle: 'Bugünkü Hayatında Tıkandığın Eşik',
        content: shadowEncounterDesc
      },
      {
        heading: '3. Karmik Mührün Kırılışı: Işığın Doğduğu Çatlak',
        subtitle: 'Döngüyü Sonlandıran Ruhsal Anahtar',
        content: karmicReleaseDesc
      }
    ],
    meditationGuide: [
      {
        stepNumber: 1,
        title: 'Topraklanma & Soy Ağacını Hissetme',
        breathInstruction: '4 Saniye Derin Nefes Al — 4 Saniye Tut — 6 Saniye Yavaşça Ver',
        guideText:
          'Omurganı dikleştir ve gözlerini yavaşça kapat. Ayak tabanlarının altından toprağın merkezine doğru uzanan o kalın, kadim ağaç köklerini hayal et. Arkanda duran yüzlerce anneyi, babayı, dedeyi ve nineyi hisset. Onların döktüğü yaşlar, sustukları kelimeler ve yaşadıkları keder bu toprağa karıştı. Derin bir nefes al ve köklerinden kalbine doğru yükselen o asırlık yaşam enerjisini kabul et.',
        spokenMantra: 'Sizi hissediyorum. Var olabilmem için geçtiğiniz tüm fırtınaları onurlandırıyorum.'
      },
      {
        stepNumber: 2,
        title: 'Yası ve Gölgeyi Onurlandırma',
        breathInstruction: 'Nefesi Kalbinde 5 Saniye Tut — Göğsündeki Ağırlığı Fark Et',
        guideText:
          'Sağ elini göğsünün tam ortasına, kalbinin üzerine koy. İçinde taşıdığın o açıklanamaz suçluluğu, yalnızlığı ve sevgisizlik korkusunu hatırla. Bu acı sadece sana ait değil; bu, atalarının bitiremediği bir yasın kalbindeki yankısı. Onlara kızma, onlardan kaçma. Karanlığına şefkatle bak ve fısılda: Yaranız artık sahipsiz değil.',
        spokenMantra: 'Sizi görüyorum. Acınızı kabul ediyor ve kalbimin şefkatli odasında ağırlıyorum.'
      },
      {
        stepNumber: 3,
        title: 'Karmik Bağı Çözme & Yükü İade Etme',
        breathInstruction: 'Derin Bir Nefes Al — Ağzından Uzun ve Güçlü Bir Şekilde Üfle',
        guideText:
          'Şimdi göğsünden atalarının omuzlarına doğru uzanan o ağır, paslı keder zincirini gör. O zinciri ellerinle sevgiyle tut. Boynundan çıkar ve atalarının ayaklarının dibine, toprağa bırak. Artık onların acısını yaşayarak onlara sadakat göstermek zorunda değilsin. Nefesini dışarı üflerken fısılda: Ben kendi gökyüzümü yaratmayı seçiyorum.',
        spokenMantra: 'Kaderinizi saygıyla selamlıyorum ama yükünüzü size iade ediyorum. Ben artık özgürüm.'
      }
    ],
    sacredAffirmation: affirmation,
    ancestralMotto,
    ritualAdvice:
      '✦ Ritüel Önerisi: Bu gece yatmadan önce cam bir kase suya biraz deniz tuzu at. Suya bakarak: "Bu kase soyumun döktüğü gözyaşlarını toplasın, sabah güneşiyle birlikte toprağa şifa olarak aksın" de. Sabah o suyu canlı bir bitkinin toprağına dökerek ritüeli tamamla.'
  };
}

function getDefaultSynthesis(): KarmaSynthesisResult {
  return {
    title: '✦ Soyun Kırık Aynası: Ata Karması Şifa Çözümlemesi ✦',
    dominantTheme: 'Kolektif Bilinçdışının Büyük Uyanışı',
    suitElement: 'Kozmik Öz',
    analysisSections: [
      {
        heading: '1. Kök Yara',
        subtitle: 'Ataların Sessizliği',
        content:
          'Soyundan devraldığın kadim korkular, senin bugün görmezden gelmeye çalıştığın o derin içsel fısıltılardır.'
      },
      {
        heading: '2. Aynadaki Yüzleşme',
        subtitle: 'Gölgenin Çağrısı',
        content:
          'Kendine koyduğun sınırlar dışarıdan gelmedi; atalarının emniyet sandığı o dar duvarları sen miras aldın.'
      },
      {
        heading: '3. Karmik Mührün Kırılışı',
        subtitle: 'Şifanın Kapısı',
        content:
          'Geçmişi affettiğin ve kendi sesini bulduğun an, arkandaki tüm nesillerin zinciri aynı anda kırılır.'
      }
    ],
    meditationGuide: [
      {
        stepNumber: 1,
        title: 'Topraklanma',
        breathInstruction: 'Derin Nefes Al ve Köklerine Odaklan',
        guideText: 'Ayaklarının altındaki toprağa ve arkandaki ata zincirine odaklan.',
        spokenMantra: 'Köklerimi onurlandırıyorum.'
      },
      {
        stepNumber: 2,
        title: 'Onurlandırma',
        breathInstruction: 'Nefesini Kalbinde Tut',
        guideText: 'İçindeki acının sadece sana ait olmadığını kabul et.',
        spokenMantra: 'Sizi görüyorum ve kabul ediyorum.'
      },
      {
        stepNumber: 3,
        title: 'Özgürleşme',
        breathInstruction: 'Uzun Bir Nefes Ver',
        guideText: 'Keder zincirini sevgiyle bırak.',
        spokenMantra: 'Kendi gökyüzümü yazıyorum.'
      }
    ],
    sacredAffirmation:
      'Ben soyumun sustuğu kelime, karanlığında yaktığı meşaleyim. Atalarımın kederini sevgiyle toprağa iade ediyor; kendi ışığımı korkusuzca gökyüzüne yazıyorum.',
    ancestralMotto: 'Karanlığın bittiği yerde sen başlarsın.',
    ritualAdvice:
      '✦ Bu gece sessiz bir alanda birkaç dakika kalbinin ritmini dinle ve derin nefeslerle şifanın hücrelerine aktığını hisset.'
  };
}
