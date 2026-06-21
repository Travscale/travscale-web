"use client";

import { useRef } from "react";
import {
  Map,
  BriefcaseBusiness,
  FileBadge2,
  CheckCircle2,
  Bus,
  Hotel,
  Utensils,
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  Building2,
  X,
  Check,
  FileText,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const useCases = [
  {
    id: "tour-operators",
    icon: Map,
    title: "DMCs & Tour Operators",
    description:
      "Rooming lists that change at 2am. Coach drivers who need manifests yesterday. Passengers who somehow booked the wrong departure airport. This is the stuff your current software pretends doesn't happen.",
    features: [
      "Drag-and-drop itineraries that survive last-minute changes",
      "Supplier payments you can actually track without a spreadsheet",
      "Push updates to passengers before they call your emergency line",
    ],
    theme: "light",
  },
  {
    id: "tmc",
    icon: BriefcaseBusiness,
    title: "Corporate TMCs",
    description:
      "Your agents didn't write the corporate travel policy, but they're the ones getting yelled at when a C-suite booking gets flagged. Give them tools that make saying 'no' feel less like a personal attack.",
    features: [
      "Auto-route out-of-policy trips to the right approver",
      "SLA timers that turn 'we're looking into it' into actual accountability",
      "Client spend reports built in seconds, not Sunday evenings",
    ],
    theme: "dark",
  },
  {
    id: "visa",
    icon: FileBadge2,
    title: "Visa & Immigration",
    description:
      "Nobody calls their visa agent to say everything is fine. They call at 4pm on a Friday because they just noticed their passport expires in eleven days. You need a system that panics before they do.",
    features: [
      "Consulate deadlines that scream at you, not your client",
      "Missing-document alerts before the appointment is wasted",
      "Passport expiry tracking that checks the actual pages",
    ],
    theme: "beige",
  },
];

type UseCaseCardProps = {
  uc: (typeof useCases)[0];
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

function UseCaseCard({
  uc,
  i,
  progress,
  range,
  targetScale,
}: UseCaseCardProps) {
  const isDark = uc.theme === "dark";
  const isBeige = uc.theme === "beige";

  const scale = useTransform(progress, range, [1, targetScale]);
  const dimOpacity = useTransform(progress, range, [0, 0.15]);

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center py-6 sm:py-8"
      style={{ zIndex: i * 10 }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          "relative w-full max-w-5xl rounded-[2rem] sm:rounded-[2.5rem] border flex flex-col lg:flex-row overflow-hidden",
          "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)]",
          isDark
            ? "bg-[#111111] border-[#222] text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
            : isBeige
              ? "bg-[#f5f2eb] border-[#181717]/5 text-[#181717]"
              : "bg-white border-[#181717]/5 text-[#181717]",
        )}
      >
        {/* Dim overlay */}
        <motion.div
          className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-black pointer-events-none z-50"
          style={{ opacity: dimOpacity }}
        />

        {/* ── Content Side ───────────────────────────────────────────── */}
        <div className="flex-1 p-7 sm:p-10 lg:p-14 flex flex-col justify-center relative z-10">
          <div
            className={cn(
              "w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-7 border shadow-sm shrink-0",
              isDark
                ? "bg-[#1a1a1a] border-white/10"
                : "bg-white border-[#181717]/10",
            )}
          >
            <uc.icon
              className={cn(
                "w-5 h-5 sm:w-7 sm:h-7",
                isDark ? "text-white" : "text-[#d04841]",
              )}
            />
          </div>

          <h3
            className={cn(
              "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3",
              isDark ? "text-white" : "text-[#181717]",
            )}
          >
            {uc.title}
          </h3>

          <p
            className={cn(
              "text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md",
              isDark ? "text-white/55" : "text-[#666666]",
            )}
          >
            {uc.description}
          </p>

          <ul className="space-y-2.5 sm:space-y-3.5 mb-7 sm:mb-9">
            {uc.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ delay: 0.08 + idx * 0.09, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  className={cn(
                    "w-4 h-4 sm:w-5 sm:h-5 shrink-0",
                    isDark ? "text-emerald-400" : "text-[#d04841]",
                  )}
                />
                <span
                  className={cn(
                    "text-sm sm:text-base font-medium",
                    isDark ? "text-white/75" : "text-[#181717]/80",
                  )}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          <button
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold group self-start transition-colors cursor-pointer",
              isDark
                ? "text-white/80 hover:text-white"
                : "text-[#181717] hover:text-[#d04841]",
            )}
          >
            See how it works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ── Visual Side ─────────────────────────────────────────── */}
        <div
          className={cn(
            "hidden lg:flex w-[44%] shrink-0 items-center justify-center p-12",
            "border-l relative overflow-hidden min-h-[500px]",
            isDark
              ? "border-white/5 bg-[#161616]"
              : "border-[#181717]/5 bg-black/[0.02]",
          )}
        >
          {/* Visual 1: Tour Operator — messy trip coming together */}
          {i === 0 && (
            <div className="w-full max-w-[280px] relative">
              <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-gradient-to-b from-blue-500/40 via-amber-500/20 to-transparent" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10 flex gap-4 mb-5"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                  <Bus className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-white p-4 rounded-2xl border border-[#181717]/5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-16 bg-blue-100 rounded-full" />
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full">
                      47 seats
                    </span>
                  </div>
                  <div className="h-2 w-28 bg-[#181717]/5 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative z-10 flex gap-4 mb-5"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-sm">
                  <Hotel className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1 bg-white p-4 rounded-2xl border border-[#181717]/5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-2 w-20 bg-amber-100 rounded-full" />
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-full">
                      12 rooms
                    </span>
                  </div>
                  <div className="h-2 w-24 bg-[#181717]/5 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.7, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative z-10 flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 shadow-sm">
                  <Utensils className="w-5 h-5 text-rose-500" />
                </div>
                <div className="flex-1 bg-white p-4 rounded-2xl border border-[#181717]/5 shadow-sm">
                  <div className="h-2 w-24 bg-rose-100 rounded-full mb-2" />
                  <div className="h-2 w-16 bg-[#181717]/5 rounded-full" />
                </div>
              </motion.div>
            </div>
          )}

          {/* Visual 2: Corporate — policy approval flow */}
          {i === 1 && (
            <div className="w-full max-w-[300px] relative">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 mb-3 shadow-xl relative z-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="h-2 w-24 bg-emerald-400/20 rounded-full mb-1.5" />
                    <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-7 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-3">
                    <div className="h-1.5 w-20 bg-white/20 rounded-full" />
                  </div>
                  <div className="h-7 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-3">
                    <div className="h-1.5 w-28 bg-white/20 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 8 }}
                whileInView={{ opacity: 0.9, x: 14, y: -16, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
                className="bg-[#2a1a1e] border border-rose-500/20 rounded-2xl p-5 shadow-xl w-[92%] ml-auto"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-rose-500/15 flex items-center justify-center">
                      <X className="w-3 h-3 text-rose-400" />
                    </div>
                    <div className="h-2 w-16 bg-rose-400/30 rounded-full" />
                  </div>
                  <div className="h-5 px-2 flex items-center bg-rose-500/15 rounded-full border border-rose-500/25">
                    <span className="text-[9px] font-semibold text-rose-300 uppercase tracking-wider">
                      Pending
                    </span>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
                <div className="h-2 w-2/3 bg-white/10 rounded-full" />
              </motion.div>
            </div>
          )}

          {/* Visual 3: Visa — countdown + document pipeline */}
          {i === 2 && (
            <div className="w-full max-w-[280px] relative space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  <div className="h-2 w-14 bg-[#181717]/10 rounded-full" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-rose-50 border border-rose-100 rounded-full">
                  <Clock className="w-3 h-3 text-rose-500" />
                  <span className="text-[10px] font-bold text-rose-600">
                    11 days
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white border border-[#181717]/10 rounded-2xl p-4 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-400" />
                <div className="flex justify-between items-start mb-3 pl-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-rose-400" />
                    <div className="h-2 w-20 bg-rose-100 rounded-full" />
                  </div>
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <div className="pl-3 space-y-1.5">
                  <div className="h-1.5 w-full bg-[#181717]/5 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-rose-400 rounded-full" />
                  </div>
                  <span className="text-[10px] text-rose-500 font-medium">
                    2 documents missing
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-white border border-[#181717]/10 rounded-2xl p-4 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
                <div className="flex justify-between items-start mb-3 pl-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <div className="h-2 w-24 bg-emerald-100 rounded-full" />
                  </div>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="pl-3">
                  <div className="h-1.5 w-full bg-[#181717]/5 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-emerald-400 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {isDark && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function UseCases() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="py-20 sm:py-32 relative bg-[#fcfbfb] overflow-visible"
      id="use-cases"
    >
      {/* Background */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#f3f0ee] to-transparent pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-14 sm:mb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
          <Building2 className="w-3.5 h-3.5 text-[#d04841]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
            Built for reality
          </span>
        </div>
        <h2 className="text-4xl sm:text-[3.5rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-4 sm:mb-6">
          Travel doesn't run <br className="hidden sm:block" />
          <span className="text-[#666666]">on spreadsheets.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
          Three different worlds. One shared truth: the software you're using
          was built by people who've never had to rebook 47 passengers at
          midnight.
        </p>
      </div>

      {/* Stacked cards */}
      <div ref={containerRef} className="relative z-10">
        {useCases.map((uc, i) => {
          const targetScale = 1 - (useCases.length - 1 - i) * 0.05;
          return (
            <UseCaseCard
              key={uc.id}
              uc={uc}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}