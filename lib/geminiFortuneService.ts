export interface ReadingResult {
  headline: string;
  subtitle: string;
  dailyVibe: string;
  fullInsight: string;
  summary?: string;
  keyTakeaways?: string[];
  audioInsightTitle: string;
  audioScript: string;
  transitCycle: {
    title: string;
    duration: string;
    peakInfo: string;
    glyphs: string[];
  };
  practicalAdvice: string;
}

export async function fetchGeminiReading(params: {
  theme?: 'daily-vibe' | 'in-depth' | 'bond' | 'consultation';
  question?: string;
  language?: 'tr' | 'en';
  drawnCards?: { id: number; name: string; archetype: string }[];
  userProfile?: { name?: string; sunSign?: string; risingSign?: string };
  partnerProfile?: { name?: string; sunSign?: string; connectionType?: string };
  modelName?: string;
}): Promise<ReadingResult> {
  const res = await fetch('/api/fortune', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch reading: ${res.statusText}`);
  }

  const data = await res.json();
  if (!data.success || !data.reading) {
    throw new Error(data.error || 'Invalid reading response');
  }

  return data.reading as ReadingResult;
}
