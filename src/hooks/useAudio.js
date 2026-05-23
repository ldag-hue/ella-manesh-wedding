import { useState, useRef, useCallback, useEffect } from 'react';

// Fallback musique libre de droits si fichier local non disponible
const FALLBACK_MUSIC_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-piano-100-bpm-121529.mp3';

export function useAudio(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    // Essayer d'abord le src fourni, sinon fallback
    const audioSrc = currentSrc || FALLBACK_MUSIC_URL;
    
    const audio = new Audio(audioSrc);
    audio.preload = 'auto';
    audio.volume = 0.6; // Volume un peu plus fort pour meilleure immersion
    audio.playbackRate = 1; // Vitesse normale
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
      setError(null);
    });

    audio.addEventListener('play', () => {
      setIsPlaying(true);
    });

    audio.addEventListener('pause', () => {
      setIsPlaying(false);
    });

    audio.addEventListener('error', (e) => {
      console.log('Audio error with src:', audioSrc);
      setError(e);
      
      // Si c'est le src local qui échoue, essayer le fallback
      if (currentSrc !== FALLBACK_MUSIC_URL && !currentSrc?.includes('pixabay')) {
        console.log('Trying fallback audio...');
        setCurrentSrc(FALLBACK_MUSIC_URL);
      }
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      // Loop la musique
      audio.currentTime = 0;
      audio.play().catch(() => {});
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [currentSrc]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    
    try {
      await audioRef.current.play();
    } catch (err) {
      console.log('Audio play blocked - user interaction required');
      throw err;
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
  }, []);

  const fadeOut = useCallback((duration = 2000) => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    const startVolume = audio.volume;
    const steps = 20;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
      currentStep++;
      const newVolume = startVolume * (1 - currentStep / steps);
      audio.volume = Math.max(0, newVolume);

      if (currentStep >= steps) {
        clearInterval(fadeInterval);
        audio.pause();
        audio.volume = startVolume;
      }
    }, stepDuration);
  }, []);

  return {
    play,
    pause,
    fadeOut,
    isPlaying,
    isLoaded,
    error
  };
}

export default useAudio;
