/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen1 } from './components/screens/Screen1';
import { Screen2 } from './components/screens/Screen2';
import { Screen3 } from './components/screens/Screen3';
import { Screen4 } from './components/screens/Screen4';
import { Screen5 } from './components/screens/Screen5';
import { Screen6 } from './components/screens/Screen6';
import { Screen7 } from './components/screens/Screen7';
import { Screen8 } from './components/screens/Screen8';
import { Screen9 } from './components/screens/Screen9';
import { ScreenStats } from './components/screens/ScreenStats';
import { ScreenJar } from './components/screens/ScreenJar';
import { Screen10 } from './components/screens/Screen10';
import { Screen11 } from './components/screens/Screen11';
import { Screen12 } from './components/screens/Screen12';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleContinue = () => {
    if (currentScreen < 14) {
      setCurrentScreen(prev => prev + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1: return <Screen1 onContinue={handleContinue} />;
      case 2: return <Screen2 onContinue={handleContinue} />;
      case 3: return <Screen3 onContinue={handleContinue} />;
      case 4: return <Screen4 onContinue={handleContinue} />;
      case 5: return <Screen5 onContinue={handleContinue} />;
      case 6: return <Screen6 onContinue={handleContinue} />;
      case 7: return <Screen7 onContinue={handleContinue} />;
      case 8: return <Screen8 onContinue={handleContinue} />;
      case 9: return <Screen9 onContinue={handleContinue} />;
      case 10: return <ScreenStats onContinue={handleContinue} />;
      case 11: return <ScreenJar onContinue={handleContinue} />;
      case 12: return <Screen10 onContinue={handleContinue} />;
      case 13: return <Screen11 onContinue={handleContinue} />;
      case 14: return <Screen12 onContinue={handleContinue} />;
      default: return null;
    }
  };

  return (
    <div className="font-sans antialiased text-zinc-900 bg-white selection:bg-rose-100 selection:text-rose-900 min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-full w-full absolute inset-0"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

