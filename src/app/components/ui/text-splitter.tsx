'use client'

import { motion } from 'motion/react';

interface TextSplitterProps {
  text: string;
  delay?: number;
}

export default function TextSplitter({ text, delay = 0 }: TextSplitterProps) {
  const words = text.split(' ');
  
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: delay + index * 0.05,
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
