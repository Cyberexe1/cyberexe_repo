import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // ms per letter
  duration?: number; // seconds per letter
  ease?: string;
  splitType?: 'chars' | 'words';
  from?: object;
  to?: object;
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'easeOut',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  onLetterAnimationComplete,
}) => {
  const [iteration, setIteration] = useState(0);

  // Split text
  const items = splitType === 'words' ? text.split(' ') : text.split('');

  // Looping logic: when animation completes, restart
  useEffect(() => {
    if (onLetterAnimationComplete) {
      const totalDelay = delay * items.length + duration * 1000;
      const timeout = setTimeout(() => {
        onLetterAnimationComplete();
        setIteration((i) => i + 1); // trigger remount
      }, totalDelay);
      return () => clearTimeout(timeout);
    }
  }, [iteration, delay, duration, items.length, onLetterAnimationComplete]);

  return (
    <span className={className} style={{ display: 'inline-block', textAlign: 'center' }}>
      <AnimatePresence mode="wait">
        <span key={iteration} style={{ display: 'inline-block' }}>
          {items.map((char, i) => (
            <motion.span
              key={i + '-' + iteration}
              initial={from}
              animate={to}
              exit={from}
              transition={{
                delay: (delay * i) / 1000,
                duration,
                ease,
              }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      </AnimatePresence>
    </span>
  );
};

export default SplitText;
