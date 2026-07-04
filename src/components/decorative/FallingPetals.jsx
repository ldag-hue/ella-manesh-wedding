import { useEffect, useRef } from 'react';

// Pétales de rose dérivant doucement, dessinés sur canvas pour ne coûter
// quasiment rien en performance (une seule couche composite, pas de re-render React).
const COLORS = [
  'rgba(235, 199, 199, 0.85)', // pink
  'rgba(217, 173, 173, 0.75)', // pink-dark
  'rgba(243, 223, 223, 0.9)',  // pink-light
  'rgba(212, 181, 133, 0.55)', // gold-light
  'rgba(232, 213, 168, 0.6)',  // champagne
];

export default function FallingPetals({ count = 14, opacity = 1, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let raf = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();

    const spawn = (anywhere) => ({
      x: Math.random() * W,
      y: anywhere ? Math.random() * H : -20,
      r: 5 + Math.random() * 7,
      tilt: Math.random() * Math.PI * 2,
      tiltSpeed: (0.006 + Math.random() * 0.014) * (Math.random() < 0.5 ? -1 : 1),
      vy: 0.35 + Math.random() * 0.6,
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 0.008 + Math.random() * 0.012,
      swayAmp: 0.3 + Math.random() * 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const petals = Array.from({ length: count }, () => spawn(true));

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tilt);
      // Effet de voltige : le pétale « se replie » selon son angle
      ctx.scale(1, 0.45 + 0.55 * Math.abs(Math.sin(p.tilt * 0.9 + p.swayPhase)));
      ctx.beginPath();
      ctx.moveTo(0, -p.r);
      ctx.quadraticCurveTo(p.r * 0.85, -p.r * 0.25, 0, p.r);
      ctx.quadraticCurveTo(-p.r * 0.85, -p.r * 0.25, 0, -p.r);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
    };

    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 16.67, 3);
      last = now;
      ctx.clearRect(0, 0, W, H);
      for (const p of petals) {
        p.y += p.vy * dt;
        p.swayPhase += p.swaySpeed * dt;
        p.x += Math.sin(p.swayPhase) * p.swayAmp * dt;
        p.tilt += p.tiltSpeed * dt;
        if (p.y > H + 24) Object.assign(p, spawn(false));
        drawPetal(p);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
