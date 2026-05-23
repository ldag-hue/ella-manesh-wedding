export default function PampasGrass({ side = 'left', className = '' }) {
  const flip = side === 'right' ? 'scale-x-[-1]' : '';

  return (
    <svg
      viewBox="0 0 150 400"
      fill="none"
      className={`${flip} ${className}`}
    >
      {/* Main stem */}
      <path
        d="M75 400 Q73 350 70 300 Q65 250 68 200 Q72 150 60 100 Q50 60 55 20"
        stroke="var(--color-sand)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Pampas plume - left wisps */}
      <path d="M55 20 Q30 30 15 60" stroke="var(--color-sand)" strokeWidth="0.6" opacity="0.25" />
      <path d="M55 25 Q35 28 20 45" stroke="var(--color-sand)" strokeWidth="0.5" opacity="0.2" />
      <path d="M58 30 Q40 35 25 55" stroke="var(--color-sand)" strokeWidth="0.4" opacity="0.2" />
      <path d="M55 15 Q28 22 10 50" stroke="var(--color-sand)" strokeWidth="0.5" opacity="0.15" />
      <path d="M57 22 Q38 18 22 35" stroke="var(--color-sand)" strokeWidth="0.4" opacity="0.15" />
      {/* Pampas plume - right wisps */}
      <path d="M55 20 Q75 15 95 35" stroke="var(--color-sand)" strokeWidth="0.6" opacity="0.25" />
      <path d="M58 25 Q78 22 90 40" stroke="var(--color-sand)" strokeWidth="0.5" opacity="0.2" />
      <path d="M56 18 Q80 10 100 25" stroke="var(--color-sand)" strokeWidth="0.4" opacity="0.2" />
      <path d="M57 28 Q72 25 85 42" stroke="var(--color-sand)" strokeWidth="0.4" opacity="0.15" />
      {/* Pampas plume fill (soft feathery area) */}
      <ellipse cx="55" cy="30" rx="35" ry="22" fill="var(--color-sand)" opacity="0.06" />
      <ellipse cx="58" cy="25" rx="28" ry="18" fill="var(--color-sand)" opacity="0.04" />
      {/* Leaf on stem */}
      <path
        d="M68 200 Q50 180 42 150 Q55 170 68 195"
        fill="var(--color-eucalyptus)"
        opacity="0.08"
      />
      <path
        d="M70 280 Q85 260 95 230 Q82 255 70 275"
        fill="var(--color-eucalyptus)"
        opacity="0.06"
      />
      {/* Second stem (thinner) */}
      <path
        d="M85 400 Q87 360 90 320 Q93 280 88 240 Q82 200 90 160 Q95 130 85 90 Q78 60 82 30"
        stroke="var(--color-sand)"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Second plume */}
      <path d="M82 30 Q65 25 50 40" stroke="var(--color-sand)" strokeWidth="0.4" opacity="0.15" />
      <path d="M82 30 Q98 20 110 35" stroke="var(--color-sand)" strokeWidth="0.4" opacity="0.15" />
      <ellipse cx="82" cy="35" rx="25" ry="16" fill="var(--color-sand)" opacity="0.04" />
    </svg>
  );
}
