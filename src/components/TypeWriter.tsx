
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  delayAfterPhrase?: number;
}

export function TypeWriter({ texts, speed = 50, delayAfterPhrase = 2000 }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentText = texts[textIndex];
    
    // Handle typing and deleting logic
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (index < currentText.length) {
          setDisplayText(currentText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          // Pause at the end of typing before starting to delete
          setTimeout(() => {
            setIsDeleting(true);
          }, delayAfterPhrase);
        }
      } else {
        // Deleting
        if (index > 0) {
          setDisplayText(currentText.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          // Move to next text
          setIsDeleting(false);
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 1.5 : speed); // Slightly faster deletion
    
    return () => clearTimeout(timeout);
  }, [index, textIndex, isDeleting, texts, speed, delayAfterPhrase]);
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1 inline-block"
      >
        |
      </motion.span>
    </motion.span>
  );
}
