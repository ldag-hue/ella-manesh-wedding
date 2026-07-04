import { motion } from 'motion/react';

// Carte illustrée « faire-part » du trajet : Église Brother Home → Hôtel
// Sarakawa, au bord du golfe de Guinée. Le tracé doré se dessine au scroll,
// puis un petit cœur voyage le long de la route (SMIL animateMotion).
const ROUTE = 'M 92 92 C 132 138 176 74 210 110 S 254 168 286 150';

function Marker({ x, y, label, sublabel, delay, onClick, children }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: 'spring', bounce: 0.45 }}
      style={{ transformOrigin: `${x}px ${y}px`, cursor: 'pointer' }}
      onClick={onClick}
    >
      {/* Halo pulsant */}
      <circle cx={x} cy={y} r="14" fill="none" stroke="#9A7B4F" strokeWidth="0.8" opacity="0.5">
        <animate attributeName="r" values="10;18;10" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3.2s" repeatCount="indefinite" />
      </circle>
      {/* Flottement subtil de l'icône */}
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay }}>
        <circle cx={x} cy={y} r="11" fill="#FFFEFB" stroke="#D9ADAD" strokeWidth="1" />
        {children}
      </motion.g>
      <text x={x} y={y + 26} textAnchor="middle" fontFamily="Cinzel, serif" fontSize="8.5" fontWeight="600" letterSpacing="1" fill="#2A2A2A">
        {label}
      </text>
      <text x={x} y={y + 36} textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="7" fill="#7A7A7A">
        {sublabel}
      </text>
    </motion.g>
  );
}

export default function JourneyMap({ onSelect }) {
  return (
    <motion.div
      className="w-full my-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8 }}
    >
      <svg viewBox="0 0 400 270" className="w-full" aria-label="Carte du trajet entre l'église et l'hôtel">
        {/* Fond parchemin + cadre doré */}
        <rect x="6" y="6" width="388" height="258" rx="8" fill="#FBF8F1" stroke="rgba(154,123,79,0.3)" strokeWidth="1" />
        <rect x="12" y="12" width="376" height="246" rx="5" fill="none" stroke="rgba(154,123,79,0.15)" strokeWidth="0.7" />

        {/* Lomé, en écriture manuscrite */}
        <text x="30" y="46" fontFamily="Alex Brush, cursive" fontSize="24" fill="#9A7B4F" opacity="0.65">
          Lomé
        </text>

        {/* Rose des vents */}
        <g transform="translate(354 40)" opacity="0.7">
          <path d="M0 -14 L3 0 L0 14 L-3 0 Z" fill="#9A7B4F" />
          <path d="M-14 0 L0 -3 L14 0 L0 3 Z" fill="#B8956A" opacity="0.6" />
          <circle r="2" fill="#FBF8F1" stroke="#9A7B4F" strokeWidth="0.8" />
          <text y="-18" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="7" fill="#9A7B4F">N</text>
        </g>

        {/* Golfe de Guinée : vagues et rivage */}
        <path d="M6 222 Q 40 214 74 222 T 142 222 T 210 222 T 278 222 T 346 222 T 400 222 L 394 264 L 6 264 Z" fill="#E4EBE7" opacity="0.7" />
        <path d="M20 234 Q 45 229 70 234 T 120 234" fill="none" stroke="#A8B8A8" strokeWidth="0.8" opacity="0.7" strokeLinecap="round" />
        <path d="M250 240 Q 275 235 300 240 T 350 240" fill="none" stroke="#A8B8A8" strokeWidth="0.8" opacity="0.7" strokeLinecap="round" />
        <text x="200" y="252" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="8.5" fill="#8B9E8B" letterSpacing="2">
          Golfe de Guinée
        </text>

        {/* Palmiers stylisés */}
        <g stroke="#8B9E8B" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.75">
          <path d="M52 208 C 53 200 52 196 51 192 M51 192 C 47 190 44 190 41 192 M51 192 C 50 188 47 186 44 186 M51 192 C 54 188 58 187 61 188 M51 192 C 55 190 59 191 61 194" />
          <path d="M338 204 C 339 197 338 193 337 190 M337 190 C 333 188 331 188 328 190 M337 190 C 336 186 334 185 331 185 M337 190 C 340 186 343 186 346 187" />
        </g>

        {/* Route : ombre blush + tracé doré qui se dessine */}
        <path d={ROUTE} fill="none" stroke="#EBC7C7" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
        <motion.path
          d={ROUTE}
          fill="none"
          stroke="#9A7B4F"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="0.06 0.035"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, delay: 0.5, ease: 'easeInOut' }}
        />

        {/* Petit cœur doré qui voyage le long de la route */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3 }}
        >
          <path
            d="M0 -1.2 C -1.4 -3.4 -4.4 -2.6 -4.4 0 C -4.4 2.2 -1.8 4 0 5.6 C 1.8 4 4.4 2.2 4.4 0 C 4.4 -2.6 1.4 -3.4 0 -1.2 Z"
            fill="#C9A96B"
          >
            <animateMotion dur="6s" repeatCount="indefinite" path={ROUTE} rotate="0" begin="3s" />
          </path>
        </motion.g>

        {/* Marqueur : Église Brother Home */}
        <Marker x={92} y={82} label="Église Brother Home" sublabel="Cérémonie · 15h30" delay={0.3} onClick={() => onSelect?.('ceremony')}>
          <g stroke="#9A7B4F" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M87 87 L87 81 L92 77 L97 81 L97 87 Z" />
            <path d="M92 77 L92 73 M90.4 74.6 L93.6 74.6" />
            <path d="M92 87 L92 83.5" />
          </g>
        </Marker>

        {/* Marqueur : Hôtel Sarakawa */}
        <Marker x={286} y={160} label="Hôtel Sarakawa" sublabel="Réception · 18h00" delay={2.6} onClick={() => onSelect?.('reception')}>
          <g stroke="#9A7B4F" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M280 165 L280 157 L292 157 L292 165 Z" />
            <path d="M283 160 L283 161.5 M286 160 L286 161.5 M289 160 L289 161.5" />
            <path d="M278.5 165 L293.5 165" />
          </g>
        </Marker>
      </svg>
      <motion.p
        className="font-cinzel text-[8px] tracking-[0.3em] uppercase text-gold/70 mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3.4, duration: 1 }}
      >
        Touchez un lieu pour découvrir les détails
      </motion.p>
    </motion.div>
  );
}
