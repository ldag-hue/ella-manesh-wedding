import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WEDDING } from '../../utils/constants';

/**
 * Enveloppe plein-écran style "cadeau" avec 4 rabats croisés
 * qui s'écartent lorsque le sceau de cire doré est cliqué.
 */
export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Laisser l'animation jouer avant de révéler la suite
    setTimeout(() => onOpen?.(), 1600);
  };

  // Couleur vert sauge mat (inspirée de la référence)
  const sage = '#6E7D5E';
  const sageDark = '#556148';
  const sageLight = '#8A9778';

  // Easing lent/luxe pour l'ouverture
  const ease = [0.7, 0, 0.3, 1];

  return (
    <section
      id="envelope"
      className="page relative overflow-hidden"
      style={{ backgroundColor: sageDark }}
    >
      {/* Carte d'invitation révélée sous les rabats */}
      <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none">
        <motion.div
          className="relative w-full max-w-xs aspect-[3/4] bg-cream rounded-sm shadow-2xl flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={opening ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          {/* Cadre doré intérieur */}
          <div className="absolute inset-3 border border-gold/30 rounded-sm" />
          <div className="absolute inset-4 border border-gold/15 rounded-sm" />

          {/* Motifs dorés délicats aux coins */}
          <svg className="absolute top-2 left-2 w-10 h-10 text-gold/60" viewBox="0 0 40 40" fill="none">
            <path d="M4 20 Q4 4 20 4" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" opacity="0.6" />
            <path d="M10 12 Q14 10 18 14" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <svg className="absolute top-2 right-2 w-10 h-10 text-gold/60 -scale-x-100" viewBox="0 0 40 40" fill="none">
            <path d="M4 20 Q4 4 20 4" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" opacity="0.6" />
            <path d="M10 12 Q14 10 18 14" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <svg className="absolute bottom-2 left-2 w-10 h-10 text-gold/60 -scale-y-100" viewBox="0 0 40 40" fill="none">
            <path d="M4 20 Q4 4 20 4" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" opacity="0.6" />
          </svg>
          <svg className="absolute bottom-2 right-2 w-10 h-10 text-gold/60 -scale-100" viewBox="0 0 40 40" fill="none">
            <path d="M4 20 Q4 4 20 4" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" opacity="0.6" />
          </svg>

          <div className="text-center px-6">
            <p className="font-cinzel text-[8px] tracking-ultra uppercase text-gold mb-3">
              Save the Date
            </p>
            <p className="font-script text-4xl text-gold leading-none">{WEDDING.groomName}</p>
            <p className="font-script text-xl text-pink-dark my-1">&amp;</p>
            <p className="font-script text-4xl text-gold leading-none">{WEDDING.brideName}</p>
            <div className="gold-line w-12 mx-auto my-4" />
            <p className="font-cinzel text-[8px] tracking-ultra uppercase text-text-light">
              {WEDDING.dateUppercase}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Quatre rabats croisés (pinwheel) qui s'ouvrent */}
      <Flap
        position="top"
        color={sage}
        colorLight={sageLight}
        colorDark={sageDark}
        opening={opening}
        ease={ease}
      />
      <Flap
        position="right"
        color={sage}
        colorLight={sageLight}
        colorDark={sageDark}
        opening={opening}
        ease={ease}
      />
      <Flap
        position="bottom"
        color={sage}
        colorLight={sageLight}
        colorDark={sageDark}
        opening={opening}
        ease={ease}
      />
      <Flap
        position="left"
        color={sage}
        colorLight={sageLight}
        colorDark={sageDark}
        opening={opening}
        ease={ease}
      />

      {/* Sceau de cire doré au centre exact */}
      <button
        onClick={handleOpen}
        disabled={opening}
        aria-label="Ouvrir l'invitation"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-transparent border-none p-0 cursor-pointer"
      >
        <motion.div
          className="relative w-28 h-28 sm:w-32 sm:h-32"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: 'backOut' }}
          whileHover={!opening ? { scale: 1.05 } : undefined}
          whileTap={!opening ? { scale: 0.95 } : undefined}
        >
          {/* Moitié gauche du sceau */}
          <motion.div
            className="absolute inset-0"
            style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}
            animate={
              opening
                ? { x: -60, y: 10, rotate: -18, opacity: 0 }
                : { x: 0, y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <SealHalf side="left" />
          </motion.div>
          {/* Moitié droite du sceau */}
          <motion.div
            className="absolute inset-0"
            style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
            animate={
              opening
                ? { x: 60, y: 10, rotate: 18, opacity: 0 }
                : { x: 0, y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <SealHalf side="right" />
          </motion.div>

          {/* Micro-éclat au moment de la fissure */}
          <AnimatePresence>
            {opening && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: [0, 0.6, 0], scale: [0.4, 1.2, 1.5] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-full h-[2px]"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,240,200,0.9), transparent)',
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>

      {/* Indication tactile */}
      <AnimatePresence>
        {!opening && (
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex flex-col items-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/60 mb-2 mx-auto">
                <path
                  d="M9 11.5V6a3 3 0 016 0v8l-2 1M9 11.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .6.2 1.1.5 1.5l3.5 5c.7 1 2 2 4 2h2a4 4 0 004-4v-2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <p className="font-cinzel text-[9px] tracking-ultra uppercase text-white/70">
              Appuyez sur le sceau
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Sous-composants ---------- */

function Flap({ position, color, colorLight, colorDark, opening, ease }) {
  const configs = {
    top: {
      clip: 'polygon(0% 0%, 100% 0%, 50% 50%)',
      gradient: `linear-gradient(180deg, ${colorLight} 0%, ${color} 60%, ${colorDark} 100%)`,
      shadow: 'inset 0 -1px 2px rgba(0,0,0,0.25)',
      animate: opening ? { y: '-100%', rotate: -1, opacity: 0.95 } : { y: 0, rotate: 0, opacity: 1 },
      script: { text: WEDDING.groomName, x: 200, y: 110, rotate: 0 },
    },
    bottom: {
      clip: 'polygon(0% 100%, 100% 100%, 50% 50%)',
      gradient: `linear-gradient(0deg, ${colorLight} 0%, ${color} 60%, ${colorDark} 100%)`,
      shadow: 'inset 0 1px 2px rgba(0,0,0,0.25)',
      animate: opening ? { y: '100%', rotate: 1, opacity: 0.95 } : { y: 0, rotate: 0, opacity: 1 },
      script: { text: WEDDING.brideName, x: 200, y: 690, rotate: 0 },
    },
    left: {
      clip: 'polygon(0% 0%, 0% 100%, 50% 50%)',
      gradient: `linear-gradient(90deg, ${colorLight} 0%, ${color} 60%, ${colorDark} 100%)`,
      shadow: 'inset -1px 0 2px rgba(0,0,0,0.25)',
      animate: opening ? { x: '-100%', rotate: -1, opacity: 0.95 } : { x: 0, rotate: 0, opacity: 1 },
      script: null,
    },
    right: {
      clip: 'polygon(100% 0%, 100% 100%, 50% 50%)',
      gradient: `linear-gradient(270deg, ${colorLight} 0%, ${color} 60%, ${colorDark} 100%)`,
      shadow: 'inset 1px 0 2px rgba(0,0,0,0.25)',
      animate: opening ? { x: '100%', rotate: 1, opacity: 0.95 } : { x: 0, rotate: 0, opacity: 1 },
      script: null,
    },
  };

  const cfg = configs[position];

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        clipPath: cfg.clip,
        WebkitClipPath: cfg.clip,
        backgroundImage: cfg.gradient,
        boxShadow: cfg.shadow,
      }}
      initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
      animate={cfg.animate}
      transition={{ duration: 1.2, ease, delay: opening ? 0.15 : 0 }}
    >
      {/* Texture fibreuse subtile */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 3px)',
        }}
      />
      {/* Liseré doré sur les diagonales intérieures */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            position === 'top' || position === 'bottom'
              ? 'linear-gradient(transparent 70%, rgba(212,175,100,0.15))'
              : 'linear-gradient(90deg, transparent 70%, rgba(212,175,100,0.15))',
        }}
      />
      {/* Calligraphie dorée optionnelle (prénoms apparaissant sur les seams) */}
      {cfg.script && (
        <svg
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <text
            x={cfg.script.x}
            y={cfg.script.y}
            textAnchor="middle"
            fontFamily="'Great Vibes', cursive"
            fontSize="36"
            fill="rgba(212,175,100,0.55)"
            transform={`rotate(${cfg.script.rotate} ${cfg.script.x} ${cfg.script.y})`}
          >
            {cfg.script.text}
          </text>
        </svg>
      )}
    </motion.div>
  );
}

function SealHalf() {
  // SVG complet du sceau - on l'affiche en entier puis on le clippe côté parent
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <radialGradient id="waxGold" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F2D58A" />
          <stop offset="30%" stopColor="#D4A24A" />
          <stop offset="70%" stopColor="#8B5E25" />
          <stop offset="100%" stopColor="#4A2E10" />
        </radialGradient>
        <radialGradient id="waxShine" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* Forme irrégulière de cire fondue */}
      <path
        d="M50,6 Q58,2 64,9 Q74,7 77,17 Q87,18 86,28 Q94,32 89,40 Q96,48 89,55 Q95,64 86,69 Q88,78 78,80 Q77,90 67,89 Q62,96 52,93 Q42,97 36,89 Q26,90 24,80 Q14,78 16,69 Q7,64 13,55 Q6,48 13,40 Q8,32 16,28 Q15,18 25,17 Q28,7 38,9 Q44,2 50,6Z"
        fill="url(#waxGold)"
        stroke="#2E1A08"
        strokeWidth="0.8"
      />

      {/* Anneaux gravés */}
      <circle cx="50" cy="50" r="34" fill="none" stroke="#2E1A08" strokeWidth="0.6" opacity="0.35" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#2E1A08" strokeWidth="0.4" opacity="0.25" />

      {/* Monogramme E | M */}
      <text
        x="28"
        y="62"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="30"
        fontWeight="700"
        fill="#2E1A08"
        opacity="0.85"
      >
        E
      </text>
      <line x1="50" y1="32" x2="50" y2="68" stroke="#2E1A08" strokeWidth="1.2" opacity="0.55" />
      <text
        x="55"
        y="62"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="30"
        fontWeight="700"
        fill="#2E1A08"
        opacity="0.85"
      >
        M
      </text>

      {/* Éclat lumineux */}
      <ellipse cx="38" cy="32" rx="16" ry="10" fill="url(#waxShine)" transform="rotate(-20 38 32)" />
    </svg>
  );
}
