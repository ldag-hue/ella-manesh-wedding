import { motion } from 'motion/react';

export default function ScrollIndicator({ total, current }) {
  return (
    <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          animate={{
            scale: i === current ? 1.4 : 1,
            backgroundColor: i === current ? 'var(--color-gold)' : 'var(--color-sand)',
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}
