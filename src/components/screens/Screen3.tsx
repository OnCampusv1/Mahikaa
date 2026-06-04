import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { LongPressWord } from '../ui/LongPressWord';
import { useMemo } from 'react';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen3({ onContinue }: ScreenProps) {
  const bgWords = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 60 - 30,
      scale: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.15 + 0.05,
      delay: Math.random() * 3
    }));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-hidden">
      {/* Cute floating Mahika background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {bgWords.map(word => (
          <motion.div
            key={word.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: word.opacity }}
            transition={{ delay: word.delay, duration: 2 }}
            className="absolute font-serif italic text-rose-400 whitespace-nowrap select-none"
            style={{
              left: `${word.x}%`,
              top: `${word.y}%`,
              transform: `rotate(${word.rotation}deg) scale(${word.scale})`,
            }}
          >
            Mahika
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-8 max-w-md relative z-10"
      >
        <h2 className="text-3xl font-serif text-zinc-800">
          I <LongPressWord word="love" reveal="I still don't know if this is love. I just know I don't want to lose this." /> you baby.
        </h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="text-lg text-zinc-600 leading-relaxed"
        >
          Idk, this all feels so childish, though I think I'm in love with you.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1.5 }}
          className="text-lg text-zinc-600 leading-relaxed"
        >
          For the first time, I'm feeling a little dumb.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-20 z-10">
        <Button onClick={onContinue} delay={6}>
          Continue
        </Button>
      </div>
    </div>
  );
}

