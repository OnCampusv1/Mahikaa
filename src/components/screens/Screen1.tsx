import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen1({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mb-12"
      >
        <Heart className="w-12 h-12 text-rose-400 fill-rose-400/20" strokeWidth={1} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="space-y-6 max-w-md"
      >
        <h1 className="text-3xl md:text-4xl font-serif text-zinc-800 tracking-tight">Hey.</h1>
        <p className="text-lg text-zinc-600 leading-relaxed font-sans">
          I made this because I couldn't find a better way to say something.
        </p>
      </motion.div>

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={2}>
          Continue
        </Button>
      </div>
    </div>
  );
}
