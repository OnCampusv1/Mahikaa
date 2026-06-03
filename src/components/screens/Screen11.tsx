import { motion } from 'motion/react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen11({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6 max-w-md"
      >
        <p className="text-xl md:text-2xl text-zinc-800 font-serif pb-8 leading-relaxed">
          But maybe that's what caring looks like sometimes.
        </p>

        <div className="space-y-4">
          <motion.p 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.5, duration: 0.8 }}
            className="text-lg text-rose-500 font-medium"
          >
            More love.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.5, duration: 0.8 }}
            className="text-lg text-zinc-600 font-medium"
          >
            More fights.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4.5, duration: 0.8 }}
            className="text-lg text-zinc-600 font-medium"
          >
            More disappointments.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 6, duration: 1 }}
            className="text-xl text-zinc-800 font-serif italic pt-4"
          >
            More understanding.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={8}>
          Continue
        </Button>
      </div>
    </div>
  );
}
