import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen4({ onContinue }: ScreenProps) {
  // Generate random star positions
  const stars = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 90}%`,
    delay: Math.random() * 2 + 0.5,
    size: Math.random() * 12 + 8,
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-hidden bg-slate-900 transition-colors duration-2000">
      
      {/* Background stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0.4, 0.8, 0], scale: 1 }}
            transition={{ 
              delay: star.delay, 
              duration: 4 + Math.random() * 3, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute text-yellow-100/40"
            style={{ top: star.top, left: star.left }}
          >
            <Star style={{ width: star.size, height: star.size }} fill="currentColor" stroke="none" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="space-y-8 max-w-md relative z-10"
      >
        <p className="text-xl md:text-2xl font-serif text-slate-100">I'm not sure.</p>
        
        <div className="space-y-4 pt-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }}
            className="text-lg text-slate-300 font-light"
          >
            Let's go unsure.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 1 }}
            className="text-lg text-slate-300 font-light"
          >
            Let's go uncertain.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5, duration: 1 }}
            className="text-lg text-slate-300 font-light"
          >
            Let's go dumb.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 7, duration: 1 }}
            className="text-xl text-white font-medium pt-4"
          >
            And see what happens.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-20 z-10">
        <Button onClick={onContinue} delay={8} variant="secondary" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md">
          Continue
        </Button>
      </div>
    </div>
  );
}
