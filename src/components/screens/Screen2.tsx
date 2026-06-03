import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

const searches = [
  "Can you fall in love with someone online?",
  "Can you fall in love in a week?",
  "Love test",
  "Am I in love?",
];

export function Screen2({ onContinue }: ScreenProps) {
  const [searchIndex, setSearchIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (searchIndex < searches.length) {
      const timer = setTimeout(() => {
        setSearchIndex(prev => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="search"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="bg-white border border-zinc-200 rounded-full px-6 py-4 flex items-center shadow-sm">
              <Search className="w-5 h-5 text-zinc-400 mr-4 flex-shrink-0" />
              <div className="text-zinc-700 text-left w-full h-6 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {searchIndex < searches.length && (
                    <motion.div
                      key={searchIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 truncate font-mono text-sm md:text-base selection:bg-rose-100"
                    >
                      {searches[searchIndex]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 max-w-md"
          >
            <p className="text-xl md:text-2xl text-zinc-600 font-serif italic">
              None of them gave me an answer.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResult && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="absolute bottom-20"
          >
            <Button onClick={onContinue} delay={1.5}>
              Continue
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
