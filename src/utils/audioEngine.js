// Web Audio API Synthesizer for Procedural Ambient Nursery Sounds
class NurseryAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.volumeNode = null;
    this.breezeNode = null;
    this.birdTimer = null;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    
    this.ctx = new AudioCtx();
    this.volumeNode = this.ctx.createGain();
    this.volumeNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
    this.volumeNode.connect(this.ctx.destination);
  }

  start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;

    // Create procedural wind breeze generator (filtered pink noise)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.05; // Soft volume
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, this.ctx.currentTime);

    // LFO to modulate breeze intensity smoothly
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.15; // 0.15 Hz slow breath wave
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 150;
    lfo.connect(filter.frequency);
    lfo.start();

    whiteNoise.connect(filter);
    filter.connect(this.volumeNode);
    whiteNoise.start();

    this.breezeNode = whiteNoise;

    // Periodic gentle bird chirps
    this.scheduleBirdChirps();
  }

  scheduleBirdChirps() {
    if (!this.isPlaying) return;

    const nextChirpIn = 4000 + Math.random() * 8000;
    this.birdTimer = setTimeout(() => {
      if (this.isPlaying) {
        this.playBirdChirp();
        this.scheduleBirdChirps();
      }
    }, nextChirpIn);
  }

  playBirdChirp() {
    if (!this.ctx || !this.isPlaying) return;

    const osc = this.ctx.createOscillator();
    const chirpGain = this.ctx.createGain();

    const startFreq = 2200 + Math.random() * 800;
    const endFreq = startFreq + 600;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + 0.1);
    osc.frequency.exponentialRampToValueAtTime(startFreq - 200, this.ctx.currentTime + 0.2);

    chirpGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    chirpGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.05);
    chirpGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

    osc.connect(chirpGain);
    chirpGain.connect(this.volumeNode);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.23);
  }

  stop() {
    this.isPlaying = false;
    if (this.birdTimer) clearTimeout(this.birdTimer);
    if (this.breezeNode) {
      try { this.breezeNode.stop(); } catch (e) {}
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const audioEngine = new NurseryAudioEngine();
