// Web Audio API Procedural Sound Engine
// Zero external files, zero latency, 100% offline and reliable

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambientGain: GainNode | null = null;
  private ambientOscillators: OscillatorNode[] = [];
  private ambientLfo: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private initialized: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public init() {
    if (this.initialized) return;
    const ctx = this.getContext();
    if (!ctx) return;
    this.initialized = true;
  }

  public toggleMute(): boolean {
    const ctx = this.getContext();
    if (!ctx) return true;

    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbient();
    } else {
      this.stopAmbient();
    }

    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // 432Hz Binaural Healing Drone with Organic Filter Breathing
  private startAmbient() {
    const ctx = this.getContext();
    if (!ctx) return;

    this.stopAmbient();

    try {
      this.ambientGain = ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);

      this.filter = ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(450, ctx.currentTime);
      this.filter.Q.setValueAtTime(3, ctx.currentTime);

      // LFO for slow breathing filter sweep (0.07Hz = ~14 second breath cycle)
      this.ambientLfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      this.ambientLfo.frequency.setValueAtTime(0.07, ctx.currentTime);
      lfoGain.gain.setValueAtTime(160, ctx.currentTime);
      this.ambientLfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);
      this.ambientLfo.start();

      // Frequencies centered on 432 Hz and harmonics (216 Hz sub, 432 Hz root, 648 Hz fifth)
      const freqs = [108, 216, 216.5, 432, 433.2, 648];
      this.ambientOscillators = [];

      freqs.forEach((freq, idx) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const volume = idx === 0 ? 0.3 : idx < 3 ? 0.25 : 0.15;
        oscGain.gain.setValueAtTime(volume, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(this.filter!);
        osc.start();
        this.ambientOscillators.push(osc);
      });

      this.filter.connect(this.ambientGain);
      this.ambientGain.connect(ctx.destination);
    } catch (e) {
      console.warn('Ambient audio could not start:', e);
    }
  }

  private stopAmbient() {
    if (this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
        setTimeout(() => {
          this.ambientOscillators.forEach(osc => {
            try { osc.stop(); osc.disconnect(); } catch (e) {}
          });
          this.ambientOscillators = [];
          if (this.ambientLfo) {
            try { this.ambientLfo.stop(); this.ambientLfo.disconnect(); } catch (e) {}
            this.ambientLfo = null;
          }
        }, 900);
      } catch (e) {}
    }
  }

  // Card Flip Whoosh (Organic heavy linen slide & flip)
  public playCardFlip() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const bufferSize = ctx.sampleRate * 0.18;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(600, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.12);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {}
  }

  // Mystic Crystal Singing Bowl / Chime (528Hz Solfeggio Love tone + harmonics)
  public playCrystalChime(baseFreq = 528) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const partials = [
        { f: baseFreq, g: 0.28, d: 2.8 },
        { f: baseFreq * 1.5, g: 0.14, d: 2.2 },
        { f: baseFreq * 2.0, g: 0.08, d: 1.6 },
        { f: baseFreq * 2.76, g: 0.04, d: 1.0 }
      ];

      partials.forEach(p => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(p.f, ctx.currentTime);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(p.g, ctx.currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + p.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + p.d);
      });
    } catch (e) {}
  }

  // Ethereal Fairy Dust Sparkle (Pentatonic celestial cascade)
  public playFairyDust() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const pentatonic = [880, 1046.5, 1174.66, 1318.51, 1567.98, 1760];
      const noteCount = 4;
      for (let i = 0; i < noteCount; i++) {
        const noteFreq = pentatonic[Math.floor(Math.random() * pentatonic.length)];
        const delay = i * 0.05;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + delay + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + delay + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.42);
      }
    } catch (e) {}
  }

  // Deep Ancestral Gong / Tibetan Bowl for Meditation
  public playAncestralGong() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const fund = 136.1; // Om frequency (Earth year tone)
      const freqs = [fund, fund * 1.5, fund * 2.01, fund * 3.14];

      freqs.forEach((f, idx) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        const vol = idx === 0 ? 0.35 : 0.12;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 4.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 4.6);
      });
    } catch (e) {}
  }
}

export const soundEngine = new SoundEngine();
