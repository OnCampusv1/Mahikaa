import { motion } from 'motion/react';
import { BarChart2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function ScreenStats({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative selection:bg-rose-100">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 text-zinc-300"
      >
        <BarChart2 size={48} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-zinc-100"
      >
        <h2 className="text-sm font-sans tracking-widest text-zinc-400 uppercase mb-8">Statistics</h2>
        
        <div className="space-y-6 text-left">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, type: 'spring' }}>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Days known each other</p>
            <p className="text-2xl font-serif text-zinc-800">[14]</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.5, type: 'spring' }}>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Arguments</p>
            <p className="text-xl font-serif text-zinc-800">Too many</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.5, type: 'spring' }}>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Times I wanted to stop talking</p>
            <p className="text-xl font-serif text-zinc-800">0</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4.5, type: 'spring' }}>
            <p className="text-xs text-rose-400 font-medium uppercase tracking-wider mb-1">Times I thought I love you baby</p>
            <p className="text-lg font-mono text-zinc-400">Error 404: Number too large</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7, duration: 1.5 }}
        className="mt-12 text-lg font-serif text-zinc-700 max-w-xs italic"
      >
        Despite all available evidence, I still like you.
      </motion.p>

      <div className="absolute bottom-16">
        <Button onClick={onContinue} delay={9}>
          Continue
        </Button>
      </div>
    </div>
  );
}
