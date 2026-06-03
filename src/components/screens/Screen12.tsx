import { motion, AnimatePresence } from 'motion/react';
import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ScreenProps {
  onContinue: () => void;
}

export function Screen12({ onContinue }: ScreenProps) {
  const [showFinal, setShowFinal] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFinal(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showFinal) {
      const secretTimer = setTimeout(() => {
        setShowSecret(true);
      }, 10000); // 10 seconds after "Now go back to studying" appears
      return () => clearTimeout(secretTimer);
    }
  }, [showFinal]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-rose-50/30 transition-colors duration-1000">
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 text-rose-400"
      >
        <Mail size={40} strokeWidth={1} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="space-y-6 max-w-md w-full bg-white p-8 md:p-12 shadow-sm border border-rose-100 rounded-lg relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-200 to-amber-200"></div>
        
        <p className="text-xl text-zinc-800 font-serif pb-4">
          Thanks.
        </p>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
          className="text-base text-zinc-600 leading-relaxed pb-4"
        >
          I just made you read all of this.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}
          className="text-base text-zinc-600 leading-relaxed"
        >
          At least you're studying something.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5, duration: 1 }}
          className="text-lg text-zinc-800 font-medium italic pt-2"
        >
          Me.
        </motion.p>
        
        <AnimatePresence>
          {showFinal && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              transition={{ duration: 1.5 }}
              className="pt-8 space-y-4 border-t border-rose-100 mt-8 flex flex-col items-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-rose-400 text-2xl"
              >
                ❤️
              </motion.div>
              <p className="text-zinc-400 font-serif italic text-sm mt-2">
                Now go back to studying.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="max-w-md w-full space-y-12">
              <motion.p 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 2 }}
                className="text-xl font-serif text-zinc-800"
              >
                By the way...
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5, duration: 2 }}
                className="text-xl font-serif text-zinc-800"
              >
                You were supposed to say no to all of this.
              </motion.p>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8, duration: 1 }}>
                  <p className="text-xl font-serif text-zinc-800 pb-6">
                    But if you don't...
                  </p>
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 10.5, duration: 2 }}
                    className="text-2xl font-serif text-rose-500 italic pb-12"
                  >
                    I'd really like that. 🐣
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 14, duration: 2 }}
                    className="mt-8 text-sm text-zinc-500 flex flex-col items-center gap-3"
                  >
                    <p className="italic text-zinc-400">If you want to read the whole entire story...</p>
                    <a 
                      href="https://medium.com/@iamkrishkishore/mahiku-thats-the-most-cute-name-a-40s-guy-could-thought-of-f190d0550c24" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100 px-5 py-2.5 rounded-full transition-all border border-rose-100 shadow-sm hover:shadow-md active:scale-95"
                    >
                      <span className="font-medium tracking-wide">Read all the text here</span>
                      <span className="text-lg">💌</span>
                    </a>
                  </motion.div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
