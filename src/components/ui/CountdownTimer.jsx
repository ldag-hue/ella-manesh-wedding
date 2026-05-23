import { motion } from 'motion/react';
import { useCountdown } from '../../hooks/useCountdown';

const units = [
  { key: 'days', label: 'Jours' },
  { key: 'hours', label: 'Heures' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Sec' },
];

export default function CountdownTimer({ targetDate, light = false }) {
  const timeLeft = useCountdown(targetDate);

  if (timeLeft.isExpired) {
    return (
      <p className="font-script text-2xl text-gold">
        Le grand jour est arrivé !
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-6" aria-live="polite" role="timer">
      {units.map(({ key, label }) => (
        <div key={key} className="flex flex-col items-center">
          <span className={`font-serif text-3xl sm:text-4xl font-bold leading-none drop-shadow-lg ${light ? 'text-white' : 'text-text'}`}>
            {String(timeLeft[key]).padStart(2, '0')}
          </span>
          <span className="w-6 gold-line my-1.5" />
          <span className={`font-body text-[8px] tracking-ultra uppercase drop-shadow ${light ? 'text-white/80' : 'text-text-light'}`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
