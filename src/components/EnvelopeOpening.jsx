import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function EnvelopeOpening({ onOpen, startMusic }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleOpen = async () => {
    if (isOpen) return;

    setIsOpen(true);

    // Démarrer la musique dès le tap — l'audio est garanti par le geste utilisateur
    startMusic();

    await new Promise(r => setTimeout(r, 300));
    setShowCard(true);

    // Transition vers le site après 2 secondes
    await new Promise(r => setTimeout(r, 2000));
    onOpen();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: '#FFFEFB' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* Titre en haut - CONTRASTE MAXIMUM */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="absolute top-20 text-center"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[11px] tracking-[0.5em] uppercase mb-3 font-bold"
              style={{
                fontFamily: 'Cinzel, serif',
                color: '#9A7B4F',
              }}
            >
              Une invitation vous attend
            </p>
            <p
              className="text-3xl"
              style={{
                fontFamily: 'Alex Brush, cursive',
                color: '#9A7B4F',
              }}
            >
              Ella & Manesh
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enveloppe container */}
      <motion.div 
        className="relative cursor-pointer"
        onClick={handleOpen}
        whileHover={!isOpen ? { scale: 1.02, y: -4 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Ombre portée */}
        <motion.div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 bg-black/40 rounded-full"
          style={{ filter: 'blur(20px)' }}
          animate={{ 
            scale: isOpen ? 1.2 : 1,
            opacity: isOpen ? 0.2 : 0.4 
          }}
        />

        {/* Corps de l'enveloppe */}
        <motion.div 
          className="relative w-80 h-56 sm:w-96 sm:h-64"
          animate={isOpen ? { scale: 1.05 } : {}}
          transition={{ duration: 0.4 }}
          style={{
            background: 'linear-gradient(145deg, #D9A0A8 0%, #E5A8AD 40%, #D9A0A8 100%)',
            borderRadius: '2px',
            boxShadow: `
              inset 0 1px 2px rgba(255,255,255,0.3),
              0 30px 60px rgba(0,0,0,0.5),
              0 15px 30px rgba(0,0,0,0.4)
            `
          }}
        >
          {/* Rabat supérieur - ouverture simple */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-36 origin-top"
            animate={isOpen ? { rotateX: -125, y: -10 } : { rotateX: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(to bottom, #C98890 0%, #D9A0A8 100%)',
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              boxShadow: isOpen ? '0 10px 20px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.2)',
              transformStyle: 'preserve-3d'
            }}
          />

          {/* Rabat inférieur */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-36"
            style={{
              background: 'linear-gradient(to top, #A06870 0%, #B87880 50%, #C98890 100%)',
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.3)'
            }}
          />

          {/* Rabats latéraux */}
          <div 
            className="absolute top-16 bottom-0 left-0 w-28"
            style={{
              background: 'linear-gradient(to right, #A06870 0%, #B87880 100%)',
              clipPath: 'polygon(0 0, 100% 35%, 100% 100%, 0 100%)'
            }}
          />
          <div 
            className="absolute top-16 bottom-0 right-0 w-28"
            style={{
              background: 'linear-gradient(to left, #A06870 0%, #B87880 100%)',
              clipPath: 'polygon(100% 0, 0 35%, 0 100%, 100% 100%)'
            }}
          />

          {/* Sceau de cire - disparaît quand ouvert */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(145deg, #EBC7C7 0%, #D4A5A7 50%, #C99597 100%)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.5)',
                    border: '3px solid rgba(255,255,255,0.5)'
                  }}
                >
                  {/* Lumière sur la cire */}
                  <div 
                    className="absolute inset-2 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 60%)'
                    }}
                  />
                  <span 
                    className="text-xl font-bold relative z-10"
                    style={{ 
                      fontFamily: 'serif',
                      color: '#7A6A4A',
                      textShadow: '0 1px 2px rgba(255,255,255,0.5)'
                    }}
                  >
                    E&M
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Carte d'invitation - apparaît simplement */}
          <AnimatePresence>
            {showCard && (
              <motion.div 
                className="absolute top-4 left-4 right-4 bottom-4 z-10"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  background: '#FFFEFB',
                  borderRadius: '2px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
                }}
              >
                {/* Bordure dorée subtile */}
                <div 
                  className="absolute inset-2 border-2 rounded"
                  style={{ borderColor: 'rgba(154, 123, 79, 0.25)' }}
                />
                
                {/* Contenu de la carte - CONTRASTE MAXIMUM */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center"
                  >
                    <p 
                      className="text-[9px] tracking-[0.4em] uppercase mb-4 font-bold"
                      style={{ 
                        fontFamily: 'Cinzel, serif',
                        color: '#2A2A2A'
                      }}
                    >
                      Vous êtes invité au mariage de
                    </p>
                    <h2 
                      className="text-4xl sm:text-5xl mb-2"
                      style={{ 
                        fontFamily: 'Alex Brush, cursive',
                        color: '#8A6A3A'
                      }}
                    >
                      Ella & Manesh
                    </h2>
                    <div 
                      className="w-20 h-0.5 mx-auto my-4"
                      style={{ backgroundColor: 'rgba(154, 123, 79, 0.5)' }}
                    />
                    <p 
                      className="text-xs tracking-[0.3em] uppercase font-bold"
                      style={{ 
                        fontFamily: 'Cinzel, serif',
                        color: '#3A3A3A'
                      }}
                    >
                      15 Août 2026
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Texte "Toucher pour ouvrir" - CONTRASTE MAXIMUM */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="absolute -bottom-14 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p 
                className="text-[11px] tracking-[0.3em] uppercase font-bold whitespace-nowrap"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: '#9A7B4F',
                }}
              >
                Toucher pour ouvrir
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
