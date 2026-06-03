import { motion } from 'motion/react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen8({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-6 max-w-md"
      >
        <p className="text-xl md:text-2xl text-zinc-800 font-serif">
          I know you're confused.
        </p>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="text-xl md:text-2xl text-zinc-800 font-serif pt-2"
        >
          I know you're unsure.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5, duration: 1.5 }}
          className="pt-8"
        >
          <p className="text-lg text-zinc-500 font-light pb-2">
            And honestly...
          </p>
          <p className="text-2xl text-zinc-800 font-serif">
            That's perfectly okay.
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={6}>
          Continue
        </Button>
      </div>
    </div>
  );
}
