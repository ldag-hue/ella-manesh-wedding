import { motion } from 'motion/react';
import Button from '../ui/Button';
import { WEDDING } from '../../utils/constants';
import { downloadCalendarEvent } from '../../utils/calendarGenerator';

export default function Footer() {
  return (
    <section id="closure" className="page paper-texture flex items-center justify-center relative overflow-hidden">
      {/* Photo placeholder (background) */}
      <div className="absolute inset-0 bg-sand/20 flex items-center justify-center">
        <div className="w-full h-full max-w-lg max-h-[70vh] mx-auto flex items-center justify-center opacity-30">
          <svg viewBox="0 0 300 400" className="w-48 sm:w-64 text-text/5">
            <rect x="20" y="20" width="260" height="360" rx="4" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="150" cy="160" r="50" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M80 320 L130 260 L170 290 L210 240 L260 310" stroke="currentColor" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
      </div>

      {/* Hand-drawn hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { x: '15%', y: '20%', size: 'w-5', rotate: '-15deg', delay: 0 },
          { x: '80%', y: '15%', size: 'w-4', rotate: '10deg', delay: 0.3 },
          { x: '25%', y: '75%', size: 'w-3', rotate: '20deg', delay: 0.6 },
          { x: '70%', y: '80%', size: 'w-5', rotate: '-10deg', delay: 0.9 },
          { x: '50%', y: '10%', size: 'w-3', rotate: '5deg', delay: 0.4 },
          { x: '88%', y: '50%', size: 'w-4', rotate: '-20deg', delay: 0.7 },
        ].map((heart, i) => (
          <motion.div
            key={i}
            className={`absolute ${heart.size}`}
            style={{ left: heart.x, top: heart.y, rotate: heart.rotate }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: heart.delay, duration: 0.5, type: 'spring' }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full text-pink-dark">
              <path
                d="M12 21C12 21 3 14 3 8.5C3 5 5.5 3 8 3C9.5 3 11 4 12 5.5C13 4 14.5 3 16 3C18.5 3 21 5 21 8.5C21 14 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
                opacity="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="font-script text-2xl sm:text-3xl text-pink-dark mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Avec tout notre amour
        </motion.p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text font-light mb-3">
          {WEDDING.groomName}
          <span className="font-script text-2xl sm:text-3xl text-gold mx-3">&</span>
          {WEDDING.brideName}
        </h2>

        <div className="gold-line w-16 mx-auto my-6" />

        <p className="font-body text-[9px] tracking-ultra uppercase text-text-light mb-2">
          {WEDDING.dateDisplay}
        </p>
        <p className="font-serif text-sm text-text-light italic mb-10">
          {WEDDING.reception.name} &middot; {WEDDING.reception.address}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={downloadCalendarEvent} variant="outline">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Ajouter à mon agenda
          </Button>
        </div>

        <motion.p
          className="mt-12 text-4xl sm:text-5xl tracking-widest text-pink-dark/75"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontFamily: 'serif' }}
        >
          #<span style={{ fontWeight: 900 }}>MAEL</span><span style={{ fontStyle: 'italic' }}>forever</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
