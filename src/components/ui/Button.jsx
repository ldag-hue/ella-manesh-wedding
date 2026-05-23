import { motion } from 'motion/react';

export default function Button({ children, href, onClick, variant = 'gold', className = '', type = 'button' }) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-7 py-2.5 font-body text-[10px] tracking-ultra uppercase transition-colors duration-300 cursor-pointer';

  const variantStyles = {
    gold: 'bg-gold text-white hover:bg-gold-light rounded-sm',
    pink: 'bg-pink text-text hover:bg-pink-dark hover:text-white rounded-sm',
    outline: 'border border-gold/40 text-gold hover:bg-gold/5 rounded-sm',
  };

  const props = {
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...props}>
      {children}
    </motion.button>
  );
}
