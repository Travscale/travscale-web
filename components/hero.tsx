"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { LogoIcon } from "@/components/logo";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative mx-auto w-full max-w-5xl overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-linear-to-b from-[#1DB954]/10 via-[#1DB954]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[500px] rounded-full bg-linear-to-t from-blue-500/8 to-transparent blur-3xl" />
      </div>

      {/* Vertical border lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
      >
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center gap-6 px-4 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Inner faded border lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-1 size-full overflow-hidden"
        >
          <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
        </div>

        {/* Logo */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-2"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            alt="Travscale"
            className="h-8 opacity-90 invert md:h-10"
            src="/logo-w-name.svg"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm",
              "shadow-[0_0_15px_rgba(29,185,84,0.1)]"
            )}
          >
            <SparklesIcon className="size-3 text-[#1DB954]" />
            Coming Soon — Travel Operations, Reimagined
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "text-balance text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl",
            "leading-[1.1]"
          )}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The Future of{" "}
          <span className="bg-linear-to-r from-[#1DB954] via-[#1DB954] to-[#1DB954] bg-clip-text text-transparent">
            Travel Operations
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-lg text-center text-base leading-relaxed text-white/60 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          One platform to manage bookings, itineraries, invoicing, and
          passenger data — built for modern travel agencies ready to scale.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {!submitted ? (
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                className={cn(
                  "flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30",
                  "outline-none ring-1 ring-transparent transition-all duration-200",
                  "focus:border-[#1DB954]/50 focus:ring-[#1DB954]/30 focus:bg-white/[0.07]",
                  "backdrop-blur-sm"
                )}
                id="waitlist-email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                type="email"
                value={email}
              />
              <Button
                className={cn(
                  "rounded-xl px-6 py-3 font-medium",
                  "bg-[#1DB954] text-white",
                  "hover:bg-[#1ed760]",
                  "shadow-lg shadow-[#1DB954]/25 transition-all duration-200",
                  "hover:shadow-[#1DB954]/40 hover:scale-[1.02]",
                  "active:scale-[0.98]"
                )}
                size="lg"
                type="submit"
              >
                Join Waitlist
                <ArrowRightIcon className="ml-1 size-4" />
              </Button>
            </form>
          ) : (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-5 text-center backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-2xl">🎉</div>
              <p className="font-medium text-emerald-400">
                You&apos;re on the list!
              </p>
              <p className="text-sm text-white/50">
                We&apos;ll reach out when your spot is ready.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Social proof */}
        <motion.p
          animate={{ opacity: 1 }}
          className="mt-2 text-center text-xs text-white/30"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Join 200+ travel agencies already on the waitlist
        </motion.p>

        {/* Feature pills */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {["Smart Bookings", "Auto Invoicing", "Itinerary Builder", "Passenger CRM", "Real-time Analytics"].map(
            (feature) => (
              <span
                className="rounded-full border border-white/5 bg-white/3 px-3 py-1 text-xs text-white/40 transition-colors hover:bg-white/6 hover:text-white/60"
                key={feature}
              >
                {feature}
              </span>
            )
          )}
        </motion.div>

        {/* Bottom decorative grid dots */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-full max-w-md -translate-x-1/2"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}