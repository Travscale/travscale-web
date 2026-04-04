"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface Greeting {
  text: string;
  language: string;
}

interface DynamicTextProps {
  onComplete?: () => void;
}

const greetings: Greeting[] = [
  { text: "Hello", language: "English" },
  { text: "مرحبا", language: "Arabic" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Ciao", language: "Italian" },
  { text: "Hallo", language: "German" },
  { text: "こんにちは", language: "Japanese" },
];

const DynamicText = ({ onComplete }: DynamicTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= greetings.length) {
          clearInterval(interval);
          setIsAnimating(false);
          setShowFinal(true);
          return prevIndex;
        }

        return nextIndex;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    if (showFinal) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [showFinal, onComplete]);

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <section
      aria-label="Rapid greetings in different languages"
      className="flex min-h-dvh items-center justify-center gap-1 p-4"
    >
      <div className="relative flex h-16 w-60 items-center justify-center overflow-visible">
        {isAnimating ? (
          <AnimatePresence mode="popLayout">
            <motion.div
              animate={textVariants.visible}
              aria-live="off"
              className="absolute flex items-center gap-2 font-medium text-2xl text-gray-800 dark:text-gray-200"
              exit={textVariants.exit}
              initial={textVariants.hidden}
              key={currentIndex}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-black dark:bg-white"
              />
              {greetings[currentIndex].text}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex items-center"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              alt="Travscale"
              className="h-10 invert md:h-14 lg:h-16"
              src="/logo-w-name.svg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DynamicText;
