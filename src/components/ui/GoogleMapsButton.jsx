import { motion } from 'motion/react';

/**
 * Bouton Google Maps style rose poudré
 * @param {string} href - URL Google Maps
 * @param {string} label - Texte du bouton
 * @param {string} variant - 'primary' (rose poudré) ou 'outline' (contour)
 * @param {React.ReactNode} children - Contenu personnalisé
 */
export default function GoogleMapsButton({ 
  href, 
  label = "Voir sur Google Maps", 
  variant = 'primary',
  className = '',
  children 
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-body text-sm transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-pink-medium text-white hover:bg-pink-dark shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-pink-medium text-pink-medium hover:bg-pink-medium/10",
    cream: "bg-cream border border-gold/30 text-anthracite hover:bg-cream-dark hover:border-gold/50"
  };

  const buttonContent = children || (
    <>
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
      <span>{label}</span>
    </>
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.a>
  );
}
