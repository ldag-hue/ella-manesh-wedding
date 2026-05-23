import { useRef, useCallback } from 'react';

// URLs de sons libres de droits (fallbacks)
const SOUND_URLS = {
  // Craquement de cire/scellé
  waxBreak: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=crack-101728.mp3',
  // Froissement papier soyeux
  paperRustle: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=paper-rustle-10617.mp3',
  // Glissement papier (extraction)
  paperSlide: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_558bce2a8d.mp3?filename=slide-101009.mp3',
  // Souffle/vent doux (ambiance)
  ambience: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio_2789f83602.mp3?filename=wind-soft-117908.mp3'
};

export function useSoundEffects() {
  const soundsRef = useRef({});
  const loadedRef = useRef(false);

  // Préchargement des sons
  const preload = useCallback(async () => {
    if (loadedRef.current) return;
    
    const loadPromises = Object.entries(SOUND_URLS).map(([key, url]) => {
      return new Promise((resolve) => {
        const audio = new Audio(url);
        audio.preload = 'auto';
        audio.volume = key === 'ambience' ? 0.15 : 0.6;
        
        audio.addEventListener('canplaythrough', () => {
          soundsRef.current[key] = audio;
          resolve();
        }, { once: true });
        
        audio.addEventListener('error', () => {
          console.log(`Failed to load sound: ${key}`);
          resolve(); // Continue même si un son échoue
        }, { once: true });
        
        // Timeout de sécurité
        setTimeout(resolve, 2000);
      });
    });

    await Promise.all(loadPromises);
    loadedRef.current = true;
  }, []);

  // Jouer un son avec options
  const play = useCallback(async (soundKey, options = {}) => {
    const {
      volume = 1,
      rate = 1,
      delay = 0,
      fadeIn = 0,
      loop = false
    } = options;

    const originalSound = soundsRef.current[soundKey];
    if (!originalSound) {
      console.log(`Sound not loaded: ${soundKey}`);
      return;
    }

    // Créer une copie pour permettre les superpositions
    const sound = originalSound.cloneNode();
    sound.volume = Math.max(0, Math.min(1, originalSound.volume * volume));
    sound.playbackRate = rate;
    sound.loop = loop;

    const playSound = async () => {
      try {
        if (fadeIn > 0) {
          sound.volume = 0;
          await sound.play();
          
          // Fade in progressif
          const steps = 20;
          const stepDuration = fadeIn / steps;
          const targetVolume = originalSound.volume * volume;
          
          for (let i = 1; i <= steps; i++) {
            await new Promise(r => setTimeout(r, stepDuration));
            sound.volume = targetVolume * (i / steps);
          }
        } else {
          await sound.play();
        }
      } catch (err) {
        // Les navigateurs bloquent souvent l'audio sans interaction
        console.log('Sound playback blocked:', err.message);
      }
    };

    if (delay > 0) {
      setTimeout(playSound, delay);
    } else {
      await playSound();
    }

    return sound;
  }, []);

  // Sons spécifiques de l'enveloppe
  const playWaxBreak = useCallback(() => {
    return play('waxBreak', {
      volume: 0.8,
      rate: 0.9 + Math.random() * 0.2 // Variation légère
    });
  }, [play]);

  const playPaperRustle = useCallback((intensity = 'soft') => {
    const rates = {
      soft: 0.7,
      medium: 1,
      loud: 1.3
    };
    return play('paperRustle', {
      volume: intensity === 'soft' ? 0.4 : 0.7,
      rate: rates[intensity] || 1,
      fadeIn: 200
    });
  }, [play]);

  const playPaperSlide = useCallback(() => {
    return play('paperSlide', {
      volume: 0.5,
      rate: 0.6, // Plus lent pour l'extraction
      fadeIn: 100
    });
  }, [play]);

  const startAmbience = useCallback(() => {
    return play('ambience', {
      volume: 0.2,
      loop: true,
      fadeIn: 2000
    });
  }, [play]);

  return {
    preload,
    play,
    playWaxBreak,
    playPaperRustle,
    playPaperSlide,
    startAmbience,
    isLoaded: () => loadedRef.current
  };
}

export default useSoundEffects;
