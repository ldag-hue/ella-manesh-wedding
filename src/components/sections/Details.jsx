import { motion } from 'motion/react';
import PageWrapper from '../ui/PageWrapper';
import PampasGrass from '../decorative/PampasGrass';
import { WEDDING } from '../../utils/constants';

const sections = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L9 9H3l5 4-2 7 6-4 6 4-2-7 5-4h-6L12 2z" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    title: 'Dress Code',
    text: WEDDING.details.dressCode,
  },
];

export default function Details() {
  return (
    <PageWrapper id="details" tornTop tornBottom>
      {/* Pampas decorations */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 h-80 pointer-events-none opacity-40">
        <PampasGrass side="left" className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-80 pointer-events-none opacity-30">
        <PampasGrass side="right" className="w-full h-full" />
      </div>

      <div className="w-full max-w-md mx-auto text-center relative z-10">
        {/* Section label */}
        <motion.p
          className="font-body text-[9px] tracking-ultra uppercase text-gold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Informations
        </motion.p>

        {/* Script title */}
        <motion.h2
          className="font-script text-4xl sm:text-5xl text-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Les Détails
        </motion.h2>

        {/* Detail sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          >
            <div className="flex items-center justify-center gap-2 text-gold mb-2">
              {section.icon}
              <h3 className="font-body text-[10px] tracking-ultra uppercase">
                {section.title}
              </h3>
            </div>
            <p className="font-serif text-sm sm:text-base text-text-light italic leading-relaxed max-w-xs mx-auto">
              {section.text}
            </p>
            {index < sections.length - 1 && (
              <div className="flex items-center justify-center gap-3 mt-8">
                <span className="w-1 h-1 rounded-full bg-gold/30" />
                <span className="w-1 h-1 rounded-full bg-gold/30" />
                <span className="w-1 h-1 rounded-full bg-gold/30" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Children note */}
        <motion.div
          className="mt-10 pt-8 border-t border-gold/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="font-body text-[9px] tracking-ultra uppercase text-pink-dark mb-2">
            Note importante
          </p>
          <p className="font-serif text-sm text-text-light italic max-w-xs mx-auto">
            {WEDDING.details.childrenNote}
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
