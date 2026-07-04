import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FallingPetals from './decorative/FallingPetals';

const GOLD_TONES = ['#D4B585', '#E8D5A8', '#B8956A', '#F5E9C8', '#C9A96B'];

// Tirages aléatoires figés au chargement du module : le render reste pur.
const RAND_POOL = Array.from({ length: 48 }, () => ({
  angle: Math.random() * Math.PI * 2,
  distF: 0.35 + Math.random() * 0.65,
  sizeF: 0.4 + Math.random() * 0.9,
  dur: 0.9 + Math.random() * 0.7,
  delayF: Math.random() * 0.2,
  color: GOLD_TONES[Math.floor(Math.random() * GOLD_TONES.length)],
}));

// Éclats dorés projetés depuis le centre — utilisé quand le sceau se brise
// puis quand la carte s'élève plein écran.
function GoldBurst({ count = 24, spread = 240, size = 6, delay = 0 }) {
  const parts = RAND_POOL.slice(0, count).map((r) => ({
    angle: r.angle,
    dist: spread * r.distF,
    s: size * r.sizeF,
    dur: r.dur,
    delay: delay + r.delayF,
    color: r.color,
  }));
  return (
    <>
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
          style={{
            width: p.s,
            height: p.s,
            marginLeft: -p.s / 2,
            marginTop: -p.s / 2,
            background: p.color,
            boxShadow: `0 0 ${p.s * 2}px ${p.color}`,
          }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{
            x: Math.cos(p.angle) * p.dist,
            y: Math.sin(p.angle) * p.dist,
            scale: [0, 1, 0.3],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: p.dur, delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </>
  );
}

// Le sceau de cire, rendu deux fois (moitié gauche / moitié droite) pour
// pouvoir se briser en deux au moment de l'ouverture.
function SealHalf({ side, cracked }) {
  const isLeft = side === 'left';
  return (
    <motion.div
      className="absolute inset-0"
      style={{ clipPath: isLeft ? 'inset(-15% 50% -15% -15%)' : 'inset(-15% -15% -15% 50%)' }}
      animate={
        cracked
          ? {
              x: isLeft ? -26 : 26,
              y: 34,
              rotate: isLeft ? -32 : 32,
              opacity: 0,
            }
          : { x: 0, y: 0, rotate: 0, opacity: 1 }
      }
      transition={{ duration: 0.65, ease: [0.3, 0.6, 0.4, 1] }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, #EBC7C7 0%, #D4A5A7 50%, #C99597 100%)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.5)',
          border: '3px solid rgba(255,255,255,0.5)',
        }}
      >
        <div
          className="absolute inset-2 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 60%)',
          }}
        />
        <span
          className="text-xl font-bold relative z-10"
          style={{
            fontFamily: 'serif',
            color: '#7A6A4A',
            textShadow: '0 1px 2px rgba(255,255,255,0.5)',
          }}
        >
          E&M
        </span>
      </div>
    </motion.div>
  );
}

// Séquence : idle → seal (le sceau se brise) → flap (le rabat s'ouvre en 3D)
// → card (la carte s'élève hors de l'enveloppe) → zoom (elle emplit l'écran
// dans une pluie d'éclats dorés, fondu vers le site).
export default function EnvelopeOpening({ onOpen, startMusic }) {
  const [phase, setPhase] = useState('idle');
  const isIdle = phase === 'idle';
  const flapOpen = phase !== 'idle' && phase !== 'seal';
  const cardOut = phase === 'card' || phase === 'zoom';

  const handleOpen = async () => {
    if (!isIdle) return;
    startMusic();
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    setPhase('seal');
    await wait(650);
    setPhase('flap');
    await wait(700);
    setPhase('card');
    await wait(2000);
    setPhase('zoom');
    await wait(500);
    onOpen();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, #FFFEFB 0%, #F7F1E8 100%)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Pétales en arrière-plan */}
      <FallingPetals count={12} opacity={0.55} />

      {/* Titre en haut */}
      <AnimatePresence>
        {isIdle && (
          <motion.div
            className="absolute top-20 text-center z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[11px] tracking-[0.5em] uppercase mb-3 font-bold"
              style={{ fontFamily: 'Cinzel, serif', color: '#9A7B4F' }}
            >
              Une invitation vous attend
            </p>
            <p className="text-3xl" style={{ fontFamily: 'Alex Brush, cursive', color: '#9A7B4F' }}>
              Ella & Manesh
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enveloppe */}
      <motion.div
        className="relative z-20"
        onClick={handleOpen}
        style={{ cursor: isIdle ? 'pointer' : 'default' }}
        whileHover={isIdle ? { scale: 1.02 } : {}}
        animate={isIdle ? { y: [0, -7, 0] } : { y: 0 }}
        transition={
          isIdle
            ? { y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
            : { duration: 0.4 }
        }
      >
        {/* Ombre portée */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 bg-black/40 rounded-full"
          style={{ filter: 'blur(20px)' }}
          animate={{ scale: cardOut ? 1.2 : 1, opacity: cardOut ? 0.15 : 0.4 }}
        />

        {/* Corps de l'enveloppe */}
        <motion.div
          className="relative w-80 h-56 sm:w-96 sm:h-64"
          animate={flapOpen ? { scale: 1.04 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            perspective: '1200px',
            background: 'linear-gradient(145deg, #D9A0A8 0%, #E5A8AD 40%, #D9A0A8 100%)',
            borderRadius: '2px',
            boxShadow: `
              inset 0 1px 2px rgba(255,255,255,0.3),
              0 30px 60px rgba(0,0,0,0.5),
              0 15px 30px rgba(0,0,0,0.4)
            `,
          }}
        >
          {/* Rabat supérieur — s'ouvre en 3D puis passe derrière la carte */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-36 origin-top"
            animate={flapOpen ? { rotateX: -178 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.45, 0, 0.2, 1] }}
            style={{
              zIndex: flapOpen ? 1 : 30,
              background: 'linear-gradient(to bottom, #C98890 0%, #D9A0A8 100%)',
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              boxShadow: flapOpen ? 'none' : '0 4px 8px rgba(0,0,0,0.2)',
              backfaceVisibility: 'hidden',
            }}
          />

          {/* Carte d'invitation — glisse hors de l'enveloppe puis emplit l'écran */}
          <motion.div
            className="absolute top-2 left-3 right-3 bottom-2"
            initial={false}
            animate={
              phase === 'zoom'
                ? { y: -100, scale: 2.4, opacity: 1 }
                : cardOut
                ? { y: -175, scale: 1, opacity: 1 }
                : { y: 10, scale: 1, opacity: flapOpen ? 1 : 0 }
            }
            transition={
              phase === 'zoom'
                ? { duration: 1.2, ease: [0.5, 0, 0.3, 1] }
                : { duration: 1.1, ease: [0.25, 0.6, 0.3, 1] }
            }
            style={{
              zIndex: phase === 'zoom' ? 40 : 10,
              background: '#FFFEFB',
              borderRadius: '3px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.28)',
            }}
          >
            <div
              className="absolute inset-2 border-2 rounded"
              style={{ borderColor: 'rgba(154, 123, 79, 0.25)' }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 overflow-hidden">
              <motion.div
                initial={false}
                animate={cardOut ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: cardOut ? 0.45 : 0, duration: 0.7 }}
                className="text-center"
              >
                <p
                  className="text-[9px] tracking-[0.4em] uppercase mb-4 font-bold"
                  style={{ fontFamily: 'Cinzel, serif', color: '#2A2A2A' }}
                >
                  Vous êtes invité au mariage de
                </p>
                <h2
                  className="text-4xl sm:text-5xl mb-2 gold-shimmer"
                  style={{ fontFamily: 'Alex Brush, cursive' }}
                >
                  Ella & Manesh
                </h2>
                <div
                  className="w-20 h-0.5 mx-auto my-4"
                  style={{ backgroundColor: 'rgba(154, 123, 79, 0.5)' }}
                />
                <p
                  className="text-xs tracking-[0.3em] uppercase font-bold"
                  style={{ fontFamily: 'Cinzel, serif', color: '#3A3A3A' }}
                >
                  15 Août 2026
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Rabat inférieur + rabats latéraux : la « poche » devant la carte */}
          <div
            className="absolute bottom-0 left-0 right-0 h-36 z-20"
            style={{
              background: 'linear-gradient(to top, #A06870 0%, #B87880 50%, #C98890 100%)',
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.3)',
            }}
          />
          <div
            className="absolute top-16 bottom-0 left-0 w-28 z-20"
            style={{
              background: 'linear-gradient(to right, #A06870 0%, #B87880 100%)',
              clipPath: 'polygon(0 0, 100% 35%, 100% 100%, 0 100%)',
            }}
          />
          <div
            className="absolute top-16 bottom-0 right-0 w-28 z-20"
            style={{
              background: 'linear-gradient(to left, #A06870 0%, #B87880 100%)',
              clipPath: 'polygon(100% 0, 0 35%, 0 100%, 100% 100%)',
            }}
          />

          {/* Sceau de cire en deux moitiés + halo doré */}
          {phase !== 'flap' && !cardOut && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-20 h-20">
              {isIdle && (
                <motion.div
                  className="absolute -inset-3 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(212,181,133,0.5) 0%, transparent 70%)' }}
                  animate={{ opacity: [0.3, 0.75, 0.3], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <SealHalf side="left" cracked={phase === 'seal'} />
              <SealHalf side="right" cracked={phase === 'seal'} />
              {phase === 'seal' && <GoldBurst count={12} spread={90} size={5} />}
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Pluie d'éclats dorés quand la carte s'élève */}
      {phase === 'zoom' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <GoldBurst count={30} spread={Math.min(window.innerWidth, 560)} size={7} />
          </div>
        </div>
      )}

      {/* Texte "Toucher pour ouvrir" */}
      <AnimatePresence>
        {isIdle && (
          <motion.div
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase font-bold whitespace-nowrap"
              style={{ fontFamily: 'Cinzel, serif', color: '#9A7B4F' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Toucher pour ouvrir
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
