import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { LongPressWord } from '../ui/LongPressWord';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen6({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      <motion.div
        initial={{ opacity: 0, rotateX: 60, scale: 0.8 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="mb-12 text-amber-600/30"
        style={{ perspective: 1000 }}
      >
        <BookOpen size={64} strokeWidth={1} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="space-y-6 max-w-md"
      >
        <p className="text-xl md:text-2xl text-zinc-800 font-serif">
          I might be rushing.
        </p>

        <motion.p 
          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 1 }}
          className="text-lg text-zinc-600 leading-relaxed font-light"
        >
          You know how impatient I am when I genuinely care.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5, duration: 1 }}
          className="text-lg text-zinc-600 leading-relaxed font-light"
        >
          The way all of this is moving so fast...
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 7.5, duration: 1.5 }}
          className="text-xl text-amber-700/80 font-serif pt-4 flex gap-2 justify-center"
        >
          It feels like a <LongPressWord word="fairytale." reveal="I don't believe in fairytales. That's what makes this scary." />
        </motion.p>
      </motion.div>

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={9}>
          Continue
        </Button>
      </div>
    </div>
  );
}
