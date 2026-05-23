import { motion } from 'motion/react';
import PageWrapper from '../ui/PageWrapper';
import Button from '../ui/Button';
import { WEDDING } from '../../utils/constants';

export default function Venue() {
  return (
    <PageWrapper id="venue" tornTop tornBottom>
      <div className="w-full max-w-md mx-auto text-center">
        {/* Intertwined rings illustration */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <svg viewBox="0 0 100 50" className="w-20 sm:w-24 mx-auto text-gold">
            <circle cx="36" cy="25" r="15" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="64" cy="25" r="15" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="36" cy="25" r="11" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
            <circle cx="64" cy="25" r="11" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
            {/* Diamond accents */}
            <path d="M36 12 L38 9 L36 6 L34 9 Z" fill="currentColor" opacity="0.5" />
            <path d="M64 12 L66 9 L64 6 L62 9 Z" fill="currentColor" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Section label */}
        <motion.p
          className="font-cinzel text-[9px] tracking-ultra uppercase text-gold mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lieu de Réception
        </motion.p>

        {/* Script title */}
        <motion.h2
          className="font-script text-5xl sm:text-6xl text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Le Lieu
        </motion.h2>

        {/* Gold line */}
        <motion.div
          className="gold-line w-12 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Venue photo */}
        <motion.div
          className="w-full aspect-[16/10] rounded-sm border border-gold/20 mb-8 overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img src="/sarakawa.jpg" alt="Hôtel Sarakawa" className="w-full h-full object-cover" />
        </motion.div>

        {/* Ceremony venue */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="font-cinzel text-[9px] tracking-ultra uppercase text-pink-dark mb-1">
            {WEDDING.ceremony.role}
          </p>
          <h3 className="font-script text-3xl text-text mb-1">
            {WEDDING.ceremony.name}
          </h3>
          <p className="font-cinzel text-[9px] tracking-ultra uppercase text-text-light mb-4">
            {WEDDING.ceremony.address}
          </p>
          {/* Church photo */}
          <div className="w-full aspect-[16/10] rounded-sm border border-gold/20 overflow-hidden shadow-md">
            <img src="/eglise.jpg" alt="Église Brother Home" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

        {/* Divider dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1 h-1 rounded-full bg-gold/40" />
          <span className="w-1 h-1 rounded-full bg-gold/40" />
          <span className="w-1 h-1 rounded-full bg-gold/40" />
        </div>

        {/* Reception venue */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="font-cinzel text-[9px] tracking-ultra uppercase text-pink-dark mb-1">
            {WEDDING.reception.role}
          </p>
          <h3 className="font-script text-3xl text-text">
            {WEDDING.reception.name}
          </h3>
          <p className="font-serif text-sm italic text-text-light mt-1">
            {WEDDING.reception.subtitle}
          </p>
          <p className="font-cinzel text-[9px] tracking-ultra uppercase text-text-light mt-1">
            {WEDDING.reception.address}
          </p>
        </motion.div>

        {/* Maps button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button href={WEDDING.reception.mapsUrl} variant="pink">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Ouvrir dans Google Maps
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
