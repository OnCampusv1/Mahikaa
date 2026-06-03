import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { LongPressWord } from '../ui/LongPressWord';

interface ScreenProps {
  onContinue: () => void;
}

const truths = [
  <span key="1">I'd be lying if I said I don't want <LongPressWord word="you." reveal="Yeah, you." /></span>,
  "I'd be lying if I said I'm not scared.",
  "I'd be lying if I said I'm ready.",
  "I'd be lying if I said this is what I planned for.",
  "I'd be lying if I said I believed in love."
];

export function Screen7({ onContinue }: ScreenProps) {
  const [index, setIndex] = useState(-1);

  const handleTap = () => {
    if (index < truths.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  return (
    <div 
      className="flex flex-col items-center min-h-screen text-center px-6 py-24 cursor-pointer selection:bg-none"
      onClick={handleTap}
    >
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm tracking-widest text-zinc-400 uppercase font-medium mb-12"
      >
        Things I'd Be Lying About
      </motion.p>

      <div className="flex flex-col space-y-6 w-full max-w-md items-center mt-4">
        <AnimatePresence>
          {truths.map((truth, i) => (
            i <= index && (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-full bg-white border border-zinc-100 shadow-sm rounded-2xl p-6 text-zinc-700 font-serif text-lg"
                onClick={(e) => e.stopPropagation()} // Let the parent handle background taps to continue, but prevent jumping if they tap the card
              >
                {truth}
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {index < truths.length - 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-zinc-300 text-sm mt-8 animate-pulse"
          >
            Tap anywhere to reveal
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {index === truths.length - 1 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="absolute bottom-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Button onClick={onContinue}>
              Continue
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
