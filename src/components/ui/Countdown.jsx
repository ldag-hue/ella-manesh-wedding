import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' },
  ];

  return (
    <motion.div
      className="flex justify-center items-center gap-2 sm:gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gold/20 flex items-center justify-center"
              whileHover={{ scale: 1.05, borderColor: 'rgba(154, 123, 79, 0.4)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-gold">
                {String(unit.value).padStart(2, '0')}
              </span>
            </motion.div>
            <span className="mt-2 font-cinzel text-[10px] sm:text-xs tracking-[0.15em] uppercase text-anthracite-light">
              {unit.label}
            </span>
          </div>
          
          {index < timeUnits.length - 1 && (
            <span className="mx-1 sm:mx-2 text-gold/50 text-xl sm:text-2xl font-light">:</span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
