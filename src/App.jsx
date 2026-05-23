import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/sections/Hero';
import Details from './components/sections/Details';
import Timeline from './components/sections/Timeline';
import Venue from './components/sections/Venue';
import Contributions from './components/sections/Contributions';
import RsvpForm from './components/sections/RsvpForm';
import Footer from './components/sections/Footer';
import PampasGrass from './components/decorative/PampasGrass';
import EnvelopeOpening from './components/EnvelopeOpening';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const startMusic = useCallback(async () => {
    try {
      await audioRef.current?.play();
    } catch (e) {}
  }, []);
  const { scrollYProgress } = useScroll();
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blobY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isOpen && <EnvelopeOpening onOpen={() => setIsOpen(true)} startMusic={startMusic} />}
      </AnimatePresence>

      <motion.div
        className="relative overflow-hidden bg-cream min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
      {/* Background decorative elements with parallax */}
      <motion.div className="fixed top-[15%] -left-24 w-72 sm:w-96 opacity-60 pointer-events-none" style={{ y: blobY1 }}>
        <PampasGrass variant="pink" />
      </motion.div>
      <motion.div className="fixed top-[45%] -right-20 w-64 sm:w-80 opacity-50 pointer-events-none" style={{ y: blobY2 }}>
        <PampasGrass variant="gold" />
      </motion.div>
      <motion.div className="fixed top-[75%] -left-16 w-60 sm:w-72 opacity-40 pointer-events-none" style={{ y: blobY3 }}>
        <PampasGrass variant="cream" />
      </motion.div>

        {/* Main content */}
        <div className="relative z-10">
          <Hero />
          <Details />
          <Timeline />
          <Venue />
          <Contributions />
          <RsvpForm />
          <Footer />
        </div>
      </motion.div>
      <Analytics />
    </>
  );
}

export default App;
