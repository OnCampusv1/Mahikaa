import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen5({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      <div className="flex items-center justify-center space-x-12 mb-12 h-24 relative overflow-hidden w-full max-w-sm mx-auto">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 20, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="text-stone-300"
        >
          <MessageCircle size={48} className="scale-x-[-1]" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: -20, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="text-stone-400"
        >
          <MessageCircle size={48} strokeWidth={1.5} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="space-y-6 max-w-md"
      >
        <p className="text-lg text-zinc-700 leading-relaxed font-serif pt-4">
          I see your actions resembling my own thought process.
        </p>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}
          className="text-lg text-zinc-600 leading-relaxed"
        >
          I'm not asking you to stay.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }}
          className="text-lg text-zinc-600 leading-relaxed font-medium pt-2"
        >
          I just wanted you to know.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={6.5}>
          Continue
        </Button>
      </div>
    </div>
  );
}
