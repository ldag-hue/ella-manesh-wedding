import { motion, AnimatePresence } from 'motion/react';
import { WEDDING } from '../../utils/constants';

const CONTENT = {
  ceremony: {
    role: WEDDING.ceremony.role,
    name: WEDDING.ceremony.name,
    subtitle: 'Échange des vœux et cérémonie religieuse',
    address: WEDDING.ceremony.address,
    time: '15h30',
    photo: '/eglise.jpg',
    position: 'object-top',
    mapsUrl: WEDDING.ceremony.mapsUrl,
  },
  reception: {
    role: WEDDING.reception.role,
    name: WEDDING.reception.name,
    subtitle: WEDDING.reception.subtitle,
    address: WEDDING.reception.address,
    time: '18h00',
    photo: '/sarakawa.jpg',
    position: 'object-center',
    mapsUrl: WEDDING.reception.mapsUrl,
  },
};

export default function VenueModal({ venue, onClose }) {
  const c = venue ? CONTENT[venue] : null;
  const days = Math.max(0, Math.ceil((WEDDING.date.getTime() - Date.now()) / 86400000));

  return (
    <AnimatePresence>
      {c && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6">
          {/* Voile avec flou progressif */}
          <motion.div
            className="absolute inset-0 bg-black/45"
            style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />

          {/* Panneau */}
          <motion.div
            className="relative w-full max-w-sm bg-cream rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl"
            initial={{ y: 80, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', duration: 0.65, bounce: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-label={c.name}
          >
            {/* Photo en arche */}
            <div className="pt-8 px-8 pb-2 flex justify-center">
              <div
                className="p-1.5 border border-gold/30 bg-white/70 shadow-md"
                style={{ borderRadius: '999px 999px 8px 8px' }}
              >
                <div
                  className="w-44 sm:w-48 aspect-[3/4] overflow-hidden"
                  style={{ borderRadius: '999px 999px 5px 5px' }}
                >
                  <motion.img
                    src={c.photo}
                    alt={c.name}
                    className={`w-full h-full object-cover ${c.position}`}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="font-cinzel text-[9px] tracking-ultra uppercase text-pink-dark mt-4 mb-1">
                  {c.role}
                </p>
                <h3 className="font-script text-4xl text-gold mb-1">{c.name}</h3>
                <p className="font-serif text-sm italic text-text-light">{c.subtitle}</p>

                <div className="gold-line w-14 mx-auto my-4" />

                {/* Heure · adresse · compte à rebours */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-text font-semibold">
                    {c.time}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold/50" />
                  <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-text-light">
                    {c.address}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold/50" />
                  <span
                    className="font-cinzel text-[10px] tracking-[0.2em] font-bold text-gold border border-gold/40 rounded-full px-2.5 py-1"
                  >
                    J−{days}
                  </span>
                </div>

                {/* Itinéraire */}
                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-cinzel text-[10px] tracking-[0.25em] uppercase font-semibold text-cream bg-gold hover:bg-gold-dark transition-colors rounded-full px-6 py-3"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  Itinéraire
                </a>
              </motion.div>
            </div>

            {/* Fermer */}
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 transition-colors text-xl leading-none"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
