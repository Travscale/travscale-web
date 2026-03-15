"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import DynamicText from "@/components/kokonutui/dynamic-text";
import { HeroSection } from "@/components/hero";
import { ChecklistSection } from "@/components/checklist";

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

            {/* Divider */}
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <ChecklistSection />

            {/* Footer */}
            <footer className="border-t border-white/6 py-8">
              <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-3">
                <img
                  alt="Travscale"
                  className="h-5 opacity-50 invert"
                  src="/logo-w-name.svg"
                />
                <p className="text-xs text-white/25">
                  © {new Date().getFullYear()} Travscale. All rights reserved.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
