"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import DynamicText from "@/components/kokonutui/dynamic-text";
import { HeroSection } from "@/components/hero";

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowWaitlist(true);
  }, []);

  return (
    <main className="min-h-dvh bg-background">
      <AnimatePresence mode="wait">
        {!showWaitlist ? (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            initial={{ opacity: 1 }}
            key="intro"
            transition={{ duration: 0.5 }}
          >
            <DynamicText onComplete={handleAnimationComplete} />
          </motion.div>
        ) : (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            key="waitlist"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HeroSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
