import { motion } from 'motion/react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen10({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="space-y-6 max-w-md"
      >
        <p className="text-xl text-zinc-800 font-serif leading-relaxed">
          I'm sorry for all the times I made you feel bad.
        </p>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
          className="text-lg text-zinc-600 font-light pt-4"
        >
          And knowing me...
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}
          className="text-lg text-zinc-600 font-light"
        >
          We'll probably fight a million more times.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6, duration: 1 }}
          className="text-lg text-zinc-800 font-medium pt-4"
        >
          I can't promise we won't.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={8}>
          Continue
        </Button>
      </div>
    </div>
  );
}
