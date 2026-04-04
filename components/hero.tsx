"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  SparklesIcon,
  CheckCircle2Icon,
  LoaderCircleIcon,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      if (supabase) {
        const { error: supabaseError } = await supabase
          .from("waitlist")
          .insert([{ email, created_at: new Date().toISOString() }]);

        if (supabaseError) {
          console.error("Supabase error:", supabaseError);
          if (supabaseError.code === "23505") {
            setError("You're already on the list! 🎉");
            setTimeout(() => setSubmitted(true), 1500);
          } else if (supabaseError.code === "42501") {
            // RLS policy violation
            setError("Permission denied. Check Supabase RLS policies.");
          } else if (
            supabaseError.message?.includes("relation") &&
            supabaseError.message?.includes("does not exist")
          ) {
            setError("Table not found. Create a 'waitlist' table in Supabase.");
          } else {
            setError(
              `Error: ${supabaseError.message || "Something went wrong. Please try again."}`,
            );
          }
          return;
        }
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      {/* Ambient background glow - enhanced */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-linear-to-b from-[#1DB954]/12 via-[#1DB954]/6 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[500px] rounded-full bg-linear-to-t from-blue-500/8 to-transparent blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[400px] rounded-full bg-linear-to-l from-emerald-500/5 to-transparent blur-3xl" />
      </div>

      {/* Animated grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vertical border lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-6xl lg:block"
      >
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center gap-6 px-4 pt-28 pb-24 md:pt-36 md:pb-32">
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm",
              "shadow-[0_0_20px_rgba(29,185,84,0.15)]",
              "animate-pulse-subtle",
            )}
          >
            <SparklesIcon className="size-3 text-[#1DB954]" />
            Coming Soon — Travel Operations, Reimagined
          </span>
        </motion.div>

        {/* Headline - Improved with multi-line and gradient */}
        <motion.h1
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className={cn(
            "text-balance text-center text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl",
            "leading-[1.08]",
          )}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Scale Your Travel
          <br />
          <span className="relative inline-block">
            <span className="bg-linear-to-r from-[#1DB954] via-emerald-400 to-[#1DB954] bg-clip-text text-transparent">
              Operations
            </span>
            {/* Underline decoration */}
            <motion.div
              animate={isInView ? { scaleX: 1 } : {}}
              className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-linear-to-r from-[#1DB954]/60 via-emerald-400/60 to-transparent md:-bottom-2"
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        {/* Subtitle - enhanced */}
        <motion.p
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto max-w-xl text-center text-base leading-relaxed text-white/55 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The all-in-one platform for managing bookings, itineraries, invoicing,
          and passenger data — built for travel agencies ready to{" "}
          <span className="text-white/80 font-medium">scale effortlessly</span>.
        </motion.p>

        {/* Waitlist Form - enhanced with Supabase */}
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mt-4 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {!submitted ? (
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={handleSubmit}
            >
              <div className="relative flex-1">
                <input
                  className={cn(
                    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30",
                    "outline-none ring-1 ring-transparent transition-all duration-200",
                    "focus:border-[#1DB954]/50 focus:ring-[#1DB954]/30 focus:bg-white/[0.07]",
                    "backdrop-blur-sm",
                    error && !submitted && "border-red-500/50 ring-red-500/20",
                  )}
                  disabled={loading}
                  id="waitlist-email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email"
                  required
                  type="email"
                  value={email}
                />
              </div>
              <Button
                className={cn(
                  "rounded-xl px-6 py-3 font-medium",
                  "bg-[#1DB954] text-white",
                  "hover:bg-[#1ed760]",
                  "shadow-lg shadow-[#1DB954]/25 transition-all duration-200",
                  "hover:shadow-[#1DB954]/40 hover:scale-[1.02]",
                  "active:scale-[0.98]",
                  "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100",
                )}
                disabled={loading}
                size="lg"
                type="submit"
              >
                {loading ? (
                  <>
                    <LoaderCircleIcon className="mr-1 size-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRightIcon className="ml-1 size-4" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="size-5 text-emerald-400" />
                <p className="font-semibold text-emerald-400">
                  You&apos;re on the list!
                </p>
              </div>
              <p className="text-sm text-white/50">
                We&apos;ll reach out when your spot is ready. Stay tuned! 🚀
              </p>
            </motion.div>
          )}

          {/* Error message */}
          {error && !submitted && (
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-center text-xs text-red-400/80"
              initial={{ opacity: 0, y: -5 }}
            >
              {error}
            </motion.p>
          )}
        </motion.div>

        {/* Social proof - enhanced */}
        <motion.div
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-3 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            {/* Stacked avatars */}
            <div className="flex -space-x-2">
              {[
                "bg-gradient-to-br from-blue-400 to-blue-600",
                "bg-gradient-to-br from-purple-400 to-purple-600",
                "bg-gradient-to-br from-emerald-400 to-emerald-600",
                "bg-gradient-to-br from-orange-400 to-orange-600",
              ].map((gradient, i) => (
                <div
                  className={cn(
                    "size-6 rounded-full border-2 border-[#050505]",
                    gradient,
                  )}
                  key={i}
                />
              ))}
            </div>
            <p className="text-xs text-white/40">
              Join <span className="text-white/60 font-medium">200+</span>{" "}
              travel agencies already on the waitlist
            </p>
          </div>
        </motion.div>

        {/* Feature pills - enhanced */}
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            { label: "Smart Bookings", icon: "📋" },
            { label: "Auto Invoicing", icon: "💰" },
            { label: "Itinerary Builder", icon: "🗺️" },
            { label: "Passenger CRM", icon: "👥" },
            { label: "Real-time Analytics", icon: "📊" },
          ].map((feature) => (
            <span
              className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/45 transition-all duration-300 hover:bg-white/[0.06] hover:text-white/65 hover:border-white/10"
              key={feature.label}
            >
              <span className="text-[10px]">{feature.icon}</span>
              {feature.label}
            </span>
          ))}
        </motion.div>

        {/* Bottom decorative grid dots */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-full max-w-md -translate-x-1/2"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}
