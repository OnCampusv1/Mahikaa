import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { LongPressWord } from '../ui/LongPressWord';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen3({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-8 max-w-md"
      >
        <h2 className="text-3xl font-serif text-zinc-800">
          baby i <LongPressWord word="love" reveal="I still don't know if this is love. I just know I don't want to lose this." /> you baby.
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

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={6}>
          Continue
        </Button>
      </div>
    </div>
  );
}
