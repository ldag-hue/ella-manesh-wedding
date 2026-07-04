import { useState } from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../ui/PageWrapper';
import Button from '../ui/Button';
import VenueModal from '../ui/VenueModal';
import { WEDDING } from '../../utils/constants';
import JourneyMap from '../decorative/JourneyMap';

// Photo en arche de chapelle : double liseré doré, zoom Ken Burns lent,
// légère inclinaison au survol.
function ArchPhoto({ src, alt, caption, position = 'object-center', tilt = -0.8, delay = 0 }) {
  return (
    <motion.figure
      className="mx-auto w-52 sm:w-60"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="p-2 border border-gold/30 bg-white/70 shadow-lg"
        style={{ borderRadius: '999px 999px 10px 10px' }}
        whileHover={{ scale: 1.025, rotate: tilt }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
      >
        <div
          className="aspect-[3/4] overflow-hidden"
          style={{ borderRadius: '999px 999px 6px 6px' }}
        >
          <motion.img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${position}`}
            initial={{ scale: 1.18 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.6, ease: 'easeOut' }}
          />
        </div>
      </motion.div>
      <figcaption className="font-serif italic text-xs text-text-light mt-3 text-center">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

export default function Venue() {
  const [selected, setSelected] = useState(null);

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
            {/* Éclat des alliances */}
            <motion.path
              d="M36 12 L38 9 L36 6 L34 9 Z"
              fill="currentColor"
              animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.25, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '36px 9px' }}
            />
            <motion.path
              d="M64 12 L66 9 L64 6 L62 9 Z"
              fill="currentColor"
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.25, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
              style={{ transformOrigin: '64px 9px' }}
            />
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
          De la cérémonie à la fête
        </motion.p>

        {/* Script title */}
        <motion.h2
          className="font-script text-5xl sm:text-6xl text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Les Lieux
        </motion.h2>

        {/* Gold line */}
        <motion.div
          className="gold-line w-12 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Cérémonie */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-cinzel text-[9px] tracking-ultra uppercase text-pink-dark mb-1">
            {WEDDING.ceremony.role}
          </p>
          <h3 className="font-script text-3xl text-text mb-1">{WEDDING.ceremony.name}</h3>
          <p className="font-cinzel text-[9px] tracking-ultra uppercase text-text-light mb-6">
            {WEDDING.ceremony.address}
          </p>
        </motion.div>
        <ArchPhoto
          src="/eglise.jpg"
          alt="Église Brother Home"
          caption="L'église Brother Home, où tout commence"
          position="object-top"
          tilt={-0.8}
        />

        {/* Carte illustrée du trajet église → hôtel */}
        <JourneyMap onSelect={setSelected} />

        {/* Réception */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-cinzel text-[9px] tracking-ultra uppercase text-pink-dark mb-1">
            {WEDDING.reception.role}
          </p>
          <h3 className="font-script text-3xl text-text">{WEDDING.reception.name}</h3>
          <p className="font-serif text-sm italic text-text-light mt-1 mb-6">
            {WEDDING.reception.subtitle}
          </p>
        </motion.div>
        <ArchPhoto
          src="/sarakawa.jpg"
          alt="Hôtel Sarakawa"
          caption="L'hôtel Sarakawa, face au golfe de Guinée"
          tilt={0.8}
          delay={0.1}
        />

        {/* Maps button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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

      <VenueModal venue={selected} onClose={() => setSelected(null)} />
    </PageWrapper>
  );
}
