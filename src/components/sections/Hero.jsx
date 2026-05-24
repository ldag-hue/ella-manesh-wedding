import { motion } from 'motion/react';
import FloralBorder from '../decorative/FloralBorder';
import CountdownTimer from '../ui/CountdownTimer';
import { WEDDING } from '../../utils/constants';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const child = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section id="cover" className="page flex items-center justify-center relative overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="/couple.jpg"
          alt="Ella & Manesh"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'blur(3px)', transform: 'scale(1.05)' }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
        <div className="absolute inset-0 bg-pink-dark/10" />
      </div>

      {/* Floral border overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <FloralBorder className="w-full h-full" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Family intro */}
        <motion.p
          className="font-body text-[9px] sm:text-[10px] tracking-ultra uppercase text-white font-bold mb-8 max-w-sm mx-auto leading-relaxed drop-shadow-lg"
          variants={child}
        >
          {WEDDING.familyIntro}
        </motion.p>



        {/* Couple names */}
        <motion.h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight drop-shadow-lg" variants={child}>
          {WEDDING.groomName}
          <span className="block font-script text-4xl sm:text-5xl text-white font-bold my-1 sm:my-2">
            &
          </span>
          {WEDDING.brideName}
        </motion.h1>

        {/* Gold line */}
        <motion.div className="gold-line w-20 mx-auto my-6 sm:my-8" variants={child} />

        {/* Date - Cinzel uppercase */}
        <motion.p
          className="font-cinzel text-[11px] sm:text-xs tracking-ultra uppercase text-white font-bold mb-10 sm:mb-14 drop-shadow-lg"
          variants={child}
        >
          {WEDDING.dateUppercase}
        </motion.p>

        {/* Countdown */}
        <motion.div variants={child}>
          <CountdownTimer targetDate={WEDDING.date} light />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 20 28" className="w-4 text-gold/30">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1" fill="none" />
          <motion.circle
            cx="10"
            cy="8"
            r="2"
            fill="currentColor"
            animate={{ cy: [8, 16, 8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
