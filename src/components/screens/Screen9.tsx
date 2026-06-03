import { motion } from 'motion/react';
import { User, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen9({ onContinue }: ScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      <div className="flex items-center justify-center space-x-6 mb-12 relative w-full max-w-sm mx-auto">
        <motion.div
          animate={{ x: [0, -5, 5, -5, 0], y: [0, 5, -5, 5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-zinc-100 shadow-md bg-zinc-100"
        >
          <img src="/her.jpeg" alt="Her" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center'); e.currentTarget.parentElement!.innerHTML = '<div class="text-[10px] text-zinc-400 text-center leading-tight">Upload<br/>her.jpeg</div>'; }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0], scale: [0.5, 1.2, 0.8, 1.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
          className="text-amber-500 absolute z-10"
        >
          <Zap size={24} fill="currentColor" stroke="none" />
        </motion.div>
        
        <motion.div
          animate={{ x: [0, 5, -5, 5, 0], y: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.2 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-zinc-100 shadow-md bg-zinc-100"
        >
          <img src="/him.jpeg" alt="Him" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center'); e.currentTarget.parentElement!.innerHTML = '<div class="text-[10px] text-zinc-400 text-center leading-tight">Upload<br/>him.jpeg</div>'; }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="space-y-4 max-w-md"
      >
        <p className="text-lg text-zinc-800 font-serif pb-4">
          We've known each other for only a couple of weeks.
        </p>

        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 1 }}
          className="text-base text-zinc-600 pb-4"
        >
          And somehow we've already fought a million times.
        </motion.p>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-zinc-500 pt-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5, duration: 1 }}>
            Sometimes you're disappointed by me.
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.5, duration: 1 }}>
            Sometimes I'm disappointed too.
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8, duration: 1 }}>
            Sometimes I hurt you.
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 9, duration: 1 }}>
            Sometimes you hurt me.
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-20">
        <Button onClick={onContinue} delay={11}>
          Continue
        </Button>
      </div>
    </div>
  );
}
