import { motion } from 'motion/react';

export default function WaxSeal({ initials = 'É & A', className = '', onClick }) {
  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24">
        {/* Wax drips */}
        <path
          d="M60,5 Q65,0 70,5 Q78,3 80,10 Q88,8 88,16 Q95,15 93,22 Q100,24 96,30 Q102,34 97,40 Q103,45 98,50 Q104,55 98,60 Q103,65 97,70 Q102,74 96,78 Q100,84 93,86 Q95,93 88,92 Q88,100 80,98 Q78,105 70,103 Q65,108 60,103 Q55,108 50,103 Q42,105 40,98 Q32,100 32,92 Q25,93 27,86 Q20,84 24,78 Q18,74 23,70 Q17,65 22,60 Q16,55 22,50 Q17,45 23,40 Q18,34 24,30 Q20,24 27,22 Q25,15 32,16 Q32,8 40,10 Q42,3 50,5 Q55,0 60,5Z"
          fill="url(#sealGradient)"
          stroke="none"
        />
        <defs>
          <radialGradient id="sealGradient" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#D4A5A5" />
            <stop offset="60%" stopColor="#C9918F" />
            <stop offset="100%" stopColor="#B07B79" />
          </radialGradient>
        </defs>
        {/* Inner ring */}
        <circle cx="60" cy="55" r="30" fill="none" stroke="#B07B79" strokeWidth="0.8" opacity="0.5" />
        <circle cx="60" cy="55" r="25" fill="none" stroke="#D4B87A" strokeWidth="0.5" opacity="0.4" />
        {/* Initials */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#F3E0DE"
          fontSize="14"
          fontFamily="'Great Vibes', cursive"
          opacity="0.9"
        >
          {initials}
        </text>
        {/* Subtle shine */}
        <ellipse cx="48" cy="42" rx="12" ry="8" fill="white" opacity="0.08" transform="rotate(-20 48 42)" />
      </svg>
    </motion.div>
  );
}
