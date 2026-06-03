import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LongPressWord({ word, reveal }: { word: string; reveal: string }) {
  const [isPressing, setIsPressing] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startPress = (e: React.MouseEvent | React.TouchEvent) => {
    // e.preventDefault(); // allow scrolling but we handle touch
    setIsPressing(true);
    timerRef.current = setTimeout(() => {
      setShowReveal(true);
      if (window.navigator?.vibrate) window.navigator.vibrate(50);
    }, 600);
  };

  const endPress = () => {
    setIsPressing(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    if (showReveal) {
      const t = setTimeout(() => setShowReveal(false), 6000);
      return () => clearTimeout(t);
    }
  }, [showReveal]);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <motion.span
        onMouseDown={startPress}
        onMouseUp={endPress}
        onMouseLeave={endPress}
        onTouchStart={startPress}
        onTouchEnd={endPress}
        animate={{ scale: isPressing ? 0.95 : 1, opacity: showReveal ? 0.6 : 1 }}
        className="inline-block cursor-grab active:cursor-grabbing font-serif italic text-rose-500 border-b border-rose-300 select-none pb-0.5"
        style={{ WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}
      >
        {word}
      </motion.span>

      <AnimatePresence>
        {showReveal && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[14px] w-64 bg-zinc-800 text-white text-sm px-6 py-4 rounded-3xl shadow-2xl z-50 text-center font-sans tracking-wide leading-relaxed pointer-events-none"
          >
            {reveal}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-8 border-transparent border-t-zinc-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
