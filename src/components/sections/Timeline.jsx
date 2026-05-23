import { motion } from 'motion/react';
import PageWrapper from '../ui/PageWrapper';
import { WEDDING } from '../../utils/constants';

const icons = {
  rings: (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <circle cx="11" cy="14" r="5.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="14" r="5.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  champagne: (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <path d="M10 4L8 14h6L12 4H10Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <line x1="11" y1="14" x2="11" y2="22" stroke="currentColor" strokeWidth="1" />
      <line x1="7" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M14 7c2-1 4 0 4 2s-2 3-4 3" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
  dinner: (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <circle cx="14" cy="15" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="14" cy="15" r="4" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <line x1="14" y1="5" x2="14" y2="8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <path d="M11 20V8l9-3v12" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <circle cx="8" cy="20" r="3" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
};

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Timeline() {
  return (
    <PageWrapper id="programme" tornTop tornBottom bg="sand">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Section label */}
        <motion.p
          className="font-body text-[9px] tracking-ultra uppercase text-gold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Programme
        </motion.p>

        {/* Script title */}
        <motion.h2
          className="font-script text-4xl sm:text-5xl text-text mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          La Journée
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-2 bottom-2 w-px bg-gold/20" />

          {WEDDING.events.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-10 last:mb-0 pl-20"
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Icon circle on timeline */}
              <div className="absolute left-4 w-9 h-9 rounded-full bg-cream border border-gold/20 flex items-center justify-center text-gold">
                {icons[event.icon]}
              </div>

              {/* Content */}
              <div className="text-left">
                <span className="inline-block font-serif text-sm text-gold font-semibold mb-1">
                  {event.time}
                </span>
                <h3 className="font-body text-xs tracking-ultra uppercase text-text mb-1">
                  {event.title}
                </h3>
                <p className="font-serif text-sm text-text-light italic">
                  {event.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
