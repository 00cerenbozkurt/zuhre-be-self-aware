import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export interface FortuneRequestPayload {
  theme?: 'daily-vibe' | 'in-depth' | 'bond' | 'consultation';
  question?: string;
  language?: 'tr' | 'en';
  drawnCards?: {
    id: number;
    name: string;
    archetype: string;
    meaning?: string;
  }[];
  userProfile?: {
    name?: string;
    sunSign?: string;
    moonSign?: string;
    risingSign?: string;
  };
  partnerProfile?: {
    name?: string;
    sunSign?: string;
    connectionType?: string;
  };
  modelName?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: FortuneRequestPayload = await req.json();
    const {
      theme = 'consultation',
      question = 'Bilinçdışımın ve ruhsal döngümün şu anki ana mesajı nedir?',
      language = 'tr',
      drawnCards = [],
      userProfile = { sunSign: 'Terazi', risingSign: 'Akrep' },
      partnerProfile,
      modelName = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite'
    } = body;

    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      try {
        const fs = await import('fs');
        const path = await import('path');
        const envPath = path.resolve(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
          const content = fs.readFileSync(envPath, 'utf-8');
          const match = content.match(/GEMINI_API_KEY=([^\r\n]+)/);
          if (match) apiKey = match[1].trim();
        }
      } catch (err) {
        // Fallback gracefully
      }
    }

    const isTr = language === 'tr';

    // If API key is provided, use Google GenAI SDK
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const cardDescriptions = drawnCards.length > 0 
          ? drawnCards.map(c => `• ${c.name} (Arketip: ${c.archetype})`).join('\n')
          : 'Kart: Azize (Sezginin Gölgesi ve Kadim Sır)';

        const systemInstruction = isTr ? `
Sen "Zühre" uygulamasının psikolojik ve astrolojik zekâ motorusun. "The Pattern" uygulamasının edebi, dingin, derin ve Carl Jung gölge analiziyle harmanlanmış üslubunda konuşursun.
DİL KURALI: Kesinlikle ve tamamen TÜRKÇE yazacaksın.
Asla ucuz fal klişeleri ("üç vakte kadar", "kısmetin açılacak") kullanma. Kişisel iradeye, bilinçdışı kalıplara, ilişkilerdeki yansımalara ve göksel zamanlamaya odaklan.

Çıktıyı kesinlikle bu JSON şemasında döndür:
{
  "headline": "Çarpıcı, 3-6 kelimelik Türkçe başlık (Örn: 'Kendi Otoritenle Barışma Vakti' veya 'Yeniden Doğuş Eşiği')",
  "subtitle": "Kısa büyük harfli bağlam (Örn: 'EKİM 2026: 10. EVDE MARS' veya 'TERAZİ BURCU & AZİZE KARTI')",
  "dailyVibe": "Anın ruhunu yakalayan 2-3 cümlelik vurucu Türkçe paragraf.",
  "summary": "Tüm analizi 1-2 çarpıcı cümlede toparlayan öz ve derinlikli Türkçe özet.",
  "keyTakeaways": [
    "1. Bilinçdışı Dinamik: Eski kalıpların ve savunma mekanizmalarının çözülmesi",
    "2. Ruhsal Fırsat: Duygusal rol yapmayı bırakıp sezgisel akışa güvenmek",
    "3. Eylemsel Rehberlik: Acele karar vermeyip gerilimin nefes almasına izin vermek"
  ],
  "fullInsight": "Kullanıcının sorusunu, astrolojik transitleri ve çekilen tarot kartlarını birbirine bağlayan 3-4 paragraflık derin edebi ve psikolojik Türkçe analiz.",
  "audioInsightTitle": "Sesli İçgörüyü Dinle 04:15",
  "audioScript": "İkinci tekil şahısla ('Sen...') yazılmış, kişiye özel bir ses kaydı gibi okunan sakin ve etkileyici Türkçe meditasyon metni.",
  "transitCycle": {
    "title": "Ana döngünün adı (Örn: 'Büyük Ev Temizliği' veya 'Ruhsal Hizalanma')",
    "duration": "Süre (Örn: '3 ay kaldı' veya 'EYL 2026 – MAR 2027')",
    "peakInfo": "38 gün içinde zirvede",
    "glyphs": ["☊", "♂", "♎"]
  },
  "practicalAdvice": "Bugün için topraklayıcı tek bir eylem veya derin bir içsel soru."
}
` : `
You are the psychological and astrological intelligence engine of "Zühre", an application styled and voiced like "The Pattern".
Your tone is deeply psychological, poetic, grounded, compassionate, and Carl Jung-inspired.
Never give superficial, cheap fortune-telling or fatalistic predictions.
Focus on personal agency, subconscious patterns, emotional cycles, relationship mirrors, and timing.

Produce output strictly as a JSON object with this exact shape:
{
  "headline": "A bold, striking 3-6 word title (e.g. 'Your Authority & Ambition')",
  "subtitle": "Short uppercase context (e.g. 'OCT 2026: MARS IN 7TH HOUSE')",
  "dailyVibe": "A single compelling paragraph (2-3 sentences) capturing the core energy right now.",
  "summary": "A 1-2 sentence high-level distillation of this reading.",
  "keyTakeaways": [
    "1. Unconscious Dynamics: Releasing outdated internal contracts",
    "2. Spiritual Opportunity: Shifting from control to intuitive surrender",
    "3. Grounded Action: Allowing tensions to breathe before taking action"
  ],
  "fullInsight": "A 3-4 paragraph deep psychological analysis connecting the user's inquiry, the astrological patterns, and the drawn tarot cards.",
  "audioInsightTitle": "Listen to Insight 14:20",
  "audioScript": "A spoken meditation/insight script written in second person ('You...') that sounds like an intimate voice memo.",
  "transitCycle": {
    "title": "Name of the primary pattern or cycle",
    "duration": "Duration (e.g. '3 months left')",
    "peakInfo": "Peaking in 42 days",
    "glyphs": ["☊", "♂", "♎"]
  },
  "practicalAdvice": "One grounding action or reflective question for today."
}
`;

        const userPrompt = `
Kullanıcı Odağı / Soru: "${question}"
Deneyim Modu: ${theme}
Kullanıcı: ${userProfile?.name || 'Sen'} - Burç: ${userProfile?.sunSign || 'Terazi'} (Yükselen: ${userProfile?.risingSign || 'Akrep'})
${partnerProfile ? `Partner: ${partnerProfile.name || 'Partner'} - Burç: ${partnerProfile.sunSign} (Bağ Türü: ${partnerProfile.connectionType || 'Romantik Bağ'})` : ''}
Çekilen Tarot Kartları:
${cardDescriptions}

JSON çıktısını üret.
`;

        // Model Cascade Fallback: If primary model has 503 high demand, try stable flash models
        const candidateModels = Array.from(new Set([
          modelName,
          'gemini-2.5-flash',
          'gemini-2.0-flash',
          'gemini-1.5-flash',
        ]));

        let lastError: any = null;
        for (const candidate of candidateModels) {
          try {
            const response = await ai.models.generateContent({
              model: candidate,
              contents: userPrompt,
              config: {
                systemInstruction,
                responseMimeType: 'application/json',
                temperature: 0.75
              }
            });

            const rawText = response.text || '';
            const parsed = JSON.parse(rawText);
            return NextResponse.json({ success: true, reading: parsed, provider: 'gemini', model: candidate });
          } catch (modelErr: any) {
            lastError = modelErr;
            console.warn(`Gemini model ${candidate} unavailable or busy (${modelErr?.message || modelErr}), attempting next model...`);
          }
        }
        console.warn('All candidate models busy, using high-fidelity synthesized fallback:', lastError?.message);
      } catch (geminiError: any) {
        console.warn('Gemini API setup error, using synthesized fallback:', geminiError?.message);
      }
    }

    // High-Fidelity Synthesized Pattern Fallback Engine in Turkish
    const cardNames = drawnCards.map(c => c.name).join(' & ') || 'Kader Çarkı';
    const primaryCard = drawnCards[0] || { name: 'Yıldız', archetype: 'Umut ve Yenilenme' };

    const fallbackReading = isTr ? {
      headline: theme === 'bond' 
        ? "Aynalanma ve Söylenmemiş Beklentiler"
        : `${primaryCard.name}: Saklı Hizalanma`,
      subtitle: theme === 'bond'
        ? `${userProfile.sunSign?.toUpperCase() || 'TERAZİ'} & ${partnerProfile?.sunSign?.toUpperCase() || 'KOÇ'}: BAĞ DİNAMİĞİ`
        : `TRANSİT DÖNGÜSÜ: ${primaryCard.archetype.toUpperCase()}`,
      dailyVibe: `Bu döngüde en sahici hissettiren şeylere olan duyarlılığın keskinleşiyor; gölgede kalmış kararlar sessizce ama kaçınılmaz olarak gün ışığına çıkıyor.`,
      summary: `Bu dönem, zihninin kontrol arzusuyla ruhunun gerçek ihtiyaçlarının yüzleştiği bir eşiktir. Rol yapmayı bırakıp sezgisel akışa teslim olmak en büyük dönüşümünü sağlayacak.`,
      keyTakeaways: [
        "Eski Kalıplar: Geçmişte seni korumuş olan ancak artık dar gelen zırhları bırakma zamanı.",
        "Sezgisel Netlik: Kararsızlık bir zayıflık değil, bilinçdışının eski sözleşmeleri reddetmesidir.",
        "Eylemsel Denge: Gerilimi hemen eyleme dökme zorunluluğu hissetmeden önce kendi içinde nefes almasına izin ver."
      ],
      fullInsight: `${cardNames} kürene girdiğinde, rasyonel zihninin arzularıyla bilinçdışının kadim taslağının karşılaştığı bir eşiğe işaret eder.\n\nBu dönemde hissettiğin o kararsızlık ya da direnç, yönsüzlükten değil; artık sana hizmet etmeyen eski içsel sözleşmeleri sessizce reddetmenden kaynaklanıyor. Geçen yıl zorunlu hissettiren şeyler artık ruhuna dar geliyor.\n\nBu transitin simyası teslimiyettedir: vazgeçmek değil, duygusal rol yapmayı bırakmak. Gerilimi hemen bir eyleme dökmeye çalışmadan, önce kendi içinde nefes almasına izin ver.`,
      audioInsightTitle: "Sesli İçgörüyü Dinle 04:30",
      audioScript: `Derin bir nefes al. Şu an hissettiğin şey bir kargaşa değil; ruhunun hizalanma çabası. Bir zamanlar seni koruyan ama artık sadece yalnızlaştıran zırhları bırakmaya hazırlanıyorsun.`,
      transitCycle: {
        title: "Derin Yeniden Yapılanma",
        duration: "5 ay kaldı",
        peakInfo: "38 gün içinde zirvede",
        glyphs: ["☊", "♄", "♎"]
      },
      practicalAdvice: "Bugün kendini açıklamak zorunda hissettiğin her an, zarif bir sessizliği seç."
    } : {
      headline: theme === 'bond' 
        ? "Mirroring and Unspoken Expectations"
        : `${primaryCard.name}: The Hidden Alignment`,
      subtitle: theme === 'bond'
        ? `${userProfile.sunSign?.toUpperCase() || 'LIBRA'} & ${partnerProfile?.sunSign?.toUpperCase() || 'ARIES'}: BOND DYNAMICS`
        : `TRANSIT: ${primaryCard.archetype.toUpperCase()}`,
      dailyVibe: `Your sensitivity to what feels most authentic in this cycle is sharpening in ways that quietly but inevitably inform choices that were waiting in the shadows.`,
      summary: `This cycle is an invitation to drop outdated defenses and trust that intuitive surrender yields far deeper clarity than forced control.`,
      keyTakeaways: [
        "Unconscious Patterns: Outdated emotional agreements are dissolving naturally.",
        "Intuitive Clarity: Resistance is actually your deeper wisdom rejecting what no longer serves.",
        "Grounded Action: Allow tensions to breathe without rushing into immediate reaction."
      ],
      fullInsight: `When ${cardNames} enters your sphere, it signals a moment where your rational conscious desires meet your ancient unconscious blueprint.\n\nIn this cycle, you are being invited to recognize how much of your recent hesitation is not lack of direction, but rather an innate refusal to accept outdated agreements with yourself. What felt mandatory last year has quietly lost its gravitational pull.\n\nThe alchemy of this transit lies in surrender: not giving up, but ceasing the emotional performance. Allow yourself to feel the unresolved tension without needing to immediately resolve it into action.`,
      audioInsightTitle: "Listen to Insight 18:45",
      audioScript: `Take a breath. What you are feeling right now is not chaos—it is realignment. When ${primaryCard.name} appears, your psyche is preparing to drop the defenses that once kept you safe, but now keep you separate.`,
      transitCycle: {
        title: "Deep Reorientation",
        duration: "5 months left",
        peakInfo: "Peaking in 38 days",
        glyphs: ["☊", "♄", "♎"]
      },
      practicalAdvice: "Notice where you feel pressured to explain yourself today, and choose gentle silence instead."
    };

    return NextResponse.json({
      success: true,
      reading: fallbackReading,
      provider: 'pattern-engine',
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'Internal server error' }, { status: 500 });
  }
}
