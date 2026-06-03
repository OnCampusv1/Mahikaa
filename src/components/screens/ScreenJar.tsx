import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Button } from '../ui/Button';

interface ScreenProps {
  onContinue: () => void;
}

type Memory = {
  text: string;
} & (
  | { type: 'image'; img: string }
  | { type: 'chat'; chat: { sender: 'her' | 'him'; text: string }[] }
);

const memories: Memory[] = [
  { 
    text: "The first time we spoke.", 
    type: "chat",
    chat: [
      { sender: "him", text: "hey good to connect - saw you over ss." },
      { sender: "her", text: "Hey , i see . Glad we could connect" }
    ]
  },
  { 
    text: "That argument we definitely didn't need.", 
    type: "chat",
    chat: [
      { sender: "her", text: "Hamari banti hi nhi h, we'll end up hurting each other." },
      { sender: "him", text: "we still do" }
    ]
  },
  { 
    text: "That moment you made me smile.", 
    type: "chat",
    chat: [
      { sender: "him", text: "If you're doing this kind of black magic, certainly you love me" },
      { sender: "her", text: "i do 😘" }
    ]
  },
  { 
    text: "The moment I realized I cared.", 
    type: "chat",
    chat: [
      { sender: "her", text: "But im crazy sensitive i already have tears" },
      { sender: "her", text: "Dk why" },
    ]
  },
  {
    text: "And just you.",
    type: "image",
    img: "/her.jpeg"
  }
];

export function ScreenJar({ onContinue }: ScreenProps) {
  const [count, setCount] = useState(0);

  const handleTap = () => {
    if (count < memories.length) {
      setCount(prev => prev + 1);
      if (window.navigator?.vibrate) window.navigator.vibrate(20);
    }
  };

  return (
    <div 
      className="flex flex-col items-center min-h-screen px-6 py-20 cursor-pointer text-center selection:bg-none"
      onClick={handleTap}
    >
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        className="text-sm tracking-widest text-zinc-400 uppercase font-medium mb-12"
      >
        Memory Jar
      </motion.p>

      <div className="relative w-64 h-[22rem] flex flex-col justify-end items-center mb-8">
        {/* The Glass Jar */}
        <div className="absolute inset-x-0 bottom-0 h-80 border-4 border-zinc-200 border-t-0 rounded-b-[40px] bg-white/40 backdrop-blur-sm pointer-events-none z-30 shadow-inner"></div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-8 border-4 border-zinc-200 rounded-[20px] rounded-b-none z-30 pointer-events-none"></div>

        {/* The Notes inside the jar */}
        <div className="absolute bottom-6 left-6 right-6 h-64 relative z-10 p-2">
          <AnimatePresence>
            {memories.map((mem, i) => (
              i < count && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -300, rotate: Math.random() * 60 - 30, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: (i % 2 === 0 ? 1 : -1) * (5 + i * 8),
                    scale: 1 
                  }}
                  transition={{ type: "spring", bounce: 0.35, duration: 1.2 }}
                  className="absolute bottom-0 w-full bg-[#fdfaf5] p-3 rounded-lg shadow-sm border border-zinc-200 flex flex-col gap-2"
                  style={{ bottom: `${i * 35}px`, zIndex: i }}
                >
                  {mem.type === 'chat' ? (
                    <div className="w-full bg-zinc-50 border border-zinc-100 rounded p-1.5 flex flex-col gap-1">
                      {mem.chat.map((msg, idx) => (
                        <div key={idx} className={`max-w-[85%] px-1.5 py-1 text-[8px] leading-[1.2] shadow-sm ${msg.sender === 'him' ? 'self-end bg-rose-500 text-white rounded-[6px] rounded-br-[2px]' : 'self-start bg-white text-zinc-800 border border-zinc-100 rounded-[6px] rounded-bl-[2px]'}`}>
                          {msg.text}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img 
                      src={mem.img} 
                      alt="Memory"
                      className="w-full h-24 object-cover rounded shadow-sm opacity-90" 
                      onError={(e) => { 
                        e.currentTarget.style.display = 'none'; 
                        e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-full h-24 bg-zinc-100 flex items-center justify-center rounded text-zinc-400 text-[10px] border border-zinc-200 border-dashed text-center">Upload <br/>her.jpeg</div>');
                      }}
                    />
                  )}
                  <p className="text-xs font-serif text-zinc-800 leading-snug">
                    {mem.text}
                  </p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      {count < memories.length && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-zinc-400 text-sm animate-pulse mt-8"
        >
          Tap the screen to add a memory
        </motion.div>
      )}

      <AnimatePresence>
        {count === memories.length && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center mt-6 w-full"
          >
            <p className="text-lg font-serif text-zinc-700 italic px-8">
              Turns out a couple of weeks can hold a lot.
            </p>
            
            <div className="mt-12" onClick={(e) => e.stopPropagation()}>
              <Button onClick={onContinue}>
                Continue
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
