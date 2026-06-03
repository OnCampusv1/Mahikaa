import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  delay?: number;
}

export function Button({ children, variant = 'primary', delay = 0, className = '', ...props }: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={`px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300
        ${
          variant === 'primary' 
            ? 'bg-zinc-800 text-white hover:bg-zinc-700 active:scale-95 shadow-md shadow-zinc-800/20' 
            : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-95'
        } ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
