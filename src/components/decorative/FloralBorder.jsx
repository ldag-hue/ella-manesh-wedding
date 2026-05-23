export default function FloralBorder({ className = '' }) {
  return (
    <svg viewBox="0 0 400 600" fill="none" className={`pointer-events-none ${className}`}>
      {/* Top-left corner arrangement */}
      <g opacity="0.15">
        {/* Rose */}
        <circle cx="40" cy="50" r="18" fill="var(--color-pink)" opacity="0.3" />
        <path d="M40 35 Q48 42 40 50 Q32 42 40 35Z" fill="var(--color-pink)" opacity="0.4" />
        <path d="M53 50 Q46 57 40 50 Q46 43 53 50Z" fill="var(--color-pink-light)" opacity="0.3" />
        <path d="M40 63 Q32 56 40 50 Q48 56 40 63Z" fill="var(--color-pink)" opacity="0.35" />
        <path d="M27 50 Q34 43 40 50 Q34 57 27 50Z" fill="var(--color-pink-light)" opacity="0.3" />
        {/* Small bud */}
        <circle cx="70" cy="30" r="6" fill="var(--color-pink)" opacity="0.2" />
        <path d="M70 25 Q73 27 70 30 Q67 27 70 25Z" fill="var(--color-pink)" opacity="0.3" />
        {/* Eucalyptus leaves */}
        <ellipse cx="25" cy="80" rx="8" ry="14" fill="var(--color-eucalyptus)" opacity="0.3" transform="rotate(-30 25 80)" />
        <ellipse cx="55" cy="75" rx="6" ry="11" fill="var(--color-eucalyptus)" opacity="0.25" transform="rotate(15 55 75)" />
        <ellipse cx="15" cy="40" rx="5" ry="10" fill="var(--color-eucalyptus)" opacity="0.2" transform="rotate(-45 15 40)" />
        {/* Stems */}
        <path d="M40 50 Q30 65 25 80" stroke="var(--color-eucalyptus)" strokeWidth="0.6" opacity="0.3" />
        <path d="M40 50 Q50 62 55 75" stroke="var(--color-eucalyptus)" strokeWidth="0.5" opacity="0.25" />
        <path d="M70 30 Q65 45 55 55" stroke="var(--color-eucalyptus)" strokeWidth="0.4" opacity="0.2" />
      </g>

      {/* Top-right corner (mirrored) */}
      <g opacity="0.15" transform="translate(400, 0) scale(-1, 1)">
        <circle cx="40" cy="50" r="18" fill="var(--color-pink)" opacity="0.3" />
        <path d="M40 35 Q48 42 40 50 Q32 42 40 35Z" fill="var(--color-pink)" opacity="0.4" />
        <path d="M53 50 Q46 57 40 50 Q46 43 53 50Z" fill="var(--color-pink-light)" opacity="0.3" />
        <path d="M40 63 Q32 56 40 50 Q48 56 40 63Z" fill="var(--color-pink)" opacity="0.35" />
        <circle cx="70" cy="30" r="6" fill="var(--color-pink)" opacity="0.2" />
        <ellipse cx="25" cy="80" rx="8" ry="14" fill="var(--color-eucalyptus)" opacity="0.3" transform="rotate(-30 25 80)" />
        <ellipse cx="55" cy="75" rx="6" ry="11" fill="var(--color-eucalyptus)" opacity="0.25" transform="rotate(15 55 75)" />
        <path d="M40 50 Q30 65 25 80" stroke="var(--color-eucalyptus)" strokeWidth="0.6" opacity="0.3" />
      </g>

      {/* Bottom-left corner */}
      <g opacity="0.12" transform="translate(0, 600) scale(1, -1)">
        <circle cx="50" cy="60" r="14" fill="var(--color-pink)" opacity="0.25" />
        <path d="M50 48 Q56 54 50 60 Q44 54 50 48Z" fill="var(--color-pink)" opacity="0.35" />
        <ellipse cx="30" cy="45" rx="7" ry="12" fill="var(--color-eucalyptus)" opacity="0.25" transform="rotate(20 30 45)" />
        <ellipse cx="70" cy="50" rx="6" ry="10" fill="var(--color-eucalyptus)" opacity="0.2" transform="rotate(-25 70 50)" />
        <path d="M50 60 Q35 55 30 45" stroke="var(--color-eucalyptus)" strokeWidth="0.5" opacity="0.25" />
      </g>

      {/* Bottom-right corner */}
      <g opacity="0.12" transform="translate(400, 600) scale(-1, -1)">
        <circle cx="50" cy="60" r="14" fill="var(--color-pink)" opacity="0.25" />
        <path d="M50 48 Q56 54 50 60 Q44 54 50 48Z" fill="var(--color-pink)" opacity="0.35" />
        <ellipse cx="30" cy="45" rx="7" ry="12" fill="var(--color-eucalyptus)" opacity="0.25" transform="rotate(20 30 45)" />
        <ellipse cx="70" cy="50" rx="6" ry="10" fill="var(--color-eucalyptus)" opacity="0.2" transform="rotate(-25 70 50)" />
        <path d="M50 60 Q35 55 30 45" stroke="var(--color-eucalyptus)" strokeWidth="0.5" opacity="0.25" />
      </g>

      {/* Gold corner lines */}
      <path d="M30 15 L30 5 L80 5" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.2" fill="none" />
      <path d="M370 15 L370 5 L320 5" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.2" fill="none" />
      <path d="M30 585 L30 595 L80 595" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.2" fill="none" />
      <path d="M370 585 L370 595 L320 595" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.2" fill="none" />
    </svg>
  );
}
