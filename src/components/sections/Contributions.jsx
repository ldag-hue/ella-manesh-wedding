import { motion } from 'motion/react';
import PageWrapper from '../ui/PageWrapper';
import { WEDDING } from '../../utils/constants';

export default function Contributions() {
  const { title, label, text, envelopeNote, platforms } = WEDDING.contributions;
  const textParts = text.split('\n\n');

  return (
    <PageWrapper id="contributions" tornTop tornBottom>
      <div className="w-full max-w-md mx-auto text-center">
        {/* Section label */}
        <motion.p
          className="font-body text-[9px] tracking-ultra uppercase text-gold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {label}
        </motion.p>

        {/* Script title */}
        <motion.h2
          className="font-script text-4xl sm:text-5xl text-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="gold-line w-12 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* Text paragraphs */}
        {textParts.map((para, i) => (
          <motion.p
            key={i}
            className="font-serif text-sm sm:text-base text-text-light italic leading-relaxed mb-5 px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
          >
            {para}
          </motion.p>
        ))}

        {/* Payment platforms */}
        <motion.div
          className="mt-8 space-y-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <span className="font-body text-[10px] tracking-ultra uppercase text-gold">
                {platform.name}
              </span>
              <span className="font-serif text-base text-text italic">
                {platform.contact}
              </span>
              {platform.detail && (
                <span className="font-serif text-sm text-text-light italic">
                  {platform.detail}
                </span>
              )}
              {index < platforms.length - 1 && (
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span className="w-1 h-1 rounded-full bg-gold/30" />
                  <span className="w-1 h-1 rounded-full bg-gold/30" />
                  <span className="w-1 h-1 rounded-full bg-gold/30" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Envelope note */}
        <motion.div
          className="mt-10 pt-8 border-t border-gold/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="font-serif text-sm text-text-light italic leading-relaxed px-2">
            {envelopeNote}
          </p>
        </motion.div>

        {/* Bible verse */}
        <motion.div
          className="mt-10 pt-8 border-t border-gold/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="font-script text-xl sm:text-2xl text-pink-dark leading-relaxed mb-2 px-2">
            "Above all put on love which binds everything together in perfect harmony"
          </p>
          <p className="font-body text-[9px] tracking-ultra uppercase text-gold mt-3">
            Colossians 3:14
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
