import { motion } from 'motion/react';
import TornEdge from '../decorative/TornEdge';

export default function PageWrapper({
  children,
  id,
  className = '',
  bg = 'paper',
  tornTop = false,
  tornBottom = false,
}) {
  const backgrounds = {
    paper: 'paper-texture',
    sand: 'bg-sand',
    cream: 'bg-cream',
    eucalyptus: 'bg-eucalyptus',
    white: 'bg-white',
  };

  return (
    <section id={id} className={`page relative flex flex-col ${backgrounds[bg] || ''} ${className}`}>
      {tornTop && (
        <div className="absolute top-0 left-0 right-0 z-20 -translate-y-px">
          <TornEdge position="top" />
        </div>
      )}

      <motion.div
        className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-12 sm:py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>

      {tornBottom && (
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-px">
          <TornEdge position="bottom" />
        </div>
      )}
    </section>
  );
}
