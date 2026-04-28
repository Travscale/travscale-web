"use client";

import { useRef } from "react";
import {
  Map,
  BriefcaseBusiness,
  FileBadge2,
  CheckCircle2,
  PlaneTakeoff,
  ShieldCheck,
  Building2,
  Clock,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";

const useCases = [
  {
    id: "tour-operators",
    icon: Map,
    title: "DMCs & Tour Operators",
    description: "Orchestrate complex multi-day itineraries and large groups effortlessly. Manage supplier payments, rooming lists, and live passenger updates in one central workspace.",
    features: [
      "Dynamic visual itinerary builder",
      "Supplier ledger & payment tracking",
      "Live passenger mobile app sync"
    ],
    theme: "light",
  },
  {
    id: "tmc",
    icon: BriefcaseBusiness,
    title: "Corporate TMCs",
    description: "Enforce strict corporate policies without slowing down your agents. Automate SLA tracking, out-of-policy approvals, and generate real-time spend reports for clients.",
    features: [
      "Custom policy engines & routing",
      "Automated SLA monitoring",
      "Real-time corporate spend analytics"
    ],
    theme: "dark",
  },
  {
    id: "visa",
    icon: FileBadge2,
    title: "Visa Specialists",
    description: "Never miss a consulate deadline. Transform messy document collections into streamlined pipelines with automated reminders and strict expiry tracking.",
    features: [
      "Consulate deadline tracking",
      "Automated missing document alerts",
      "Passport expiry monitors"
    ],
    theme: "beige",
  }
];

// Card height reference:
//   Desktop (with visual panel): ~520px  → center offset = 260px
//   Mobile  (content only):      ~340px  → center offset = 170px
//
// Formula: top = max(5vh, calc(50vh - <halfHeight>px + i * <stackOffset>px))
// This pins the card's vertical midpoint near the viewport center while
// each subsequent card sits slightly lower to reveal the stack behind it.
//
// On mobile we hide the visual panel entirely so the card is compact
// enough to actually fit in the viewport — that was the root cause of
// both the "not centered" and "not suitable for mobile" complaints.

function UseCaseCard({
  uc,
  i,
  progress,
  total,
}: {
  uc: typeof useCases[0];
  i: number;
  progress: any;
  total: number;
}) {
  const isDark  = uc.theme === "dark";
  const isBeige = uc.theme === "beige";
  const isLast  = i === total - 1;

  // Dimming starts when the next card begins to arrive.
  const startProgress = Math.max(0, (i + 0.5) / total);
  const targetScale   = 1 - (total - 1 - i) * 0.05;

  const scale = useTransform(progress, [startProgress, 1], [1, targetScale]);
  // Last card never dims — nothing stacks on top of it.
  const dimOpacity = useTransform(
    progress,
    [startProgress, 1],
    [0, isLast ? 0 : 0.18]
  );

  // Vertically center the stack.
  // 50vh - 260px puts the midpoint of a ~520px desktop card at screen center.
  // Each card offsets 24px lower so you can see cards behind it.
  // `max(5vh, ...)` floors it so it never goes off the top on short screens.
  const stackTop = `max(5vh, calc(50vh - 260px + ${i * 24}px))`;

  return (
    <div
      className="sticky w-full"
      style={{
        top: stackTop,
        // Last card only needs a small margin — it has no dim/scale animation,
        // so no need for a long trailing scroll zone.
        marginBottom: isLast ? "5vh" : "40vh",
        zIndex: i * 10,
      }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className={cn(
          "w-full relative rounded-[2rem] sm:rounded-[2.5rem] border flex flex-col lg:flex-row",
          "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)]",
          isDark
            ? "bg-[#111111] border-[#222] text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
            : isBeige
            ? "bg-[#f5f2eb] border-[#181717]/5 text-[#181717]"
            : "bg-white border-[#181717]/5 text-[#181717]"
        )}
      >
        {/* Dim overlay — card recedes without exposing the page background */}
        <motion.div
          className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-black pointer-events-none z-50"
          style={{ opacity: dimOpacity }}
        />

        {/* ── Content Side ───────────────────────────────────────────── */}
        <div className="flex-1 p-7 sm:p-10 lg:p-14 flex flex-col justify-center relative z-10">

          {/* Icon */}
          <div className={cn(
            "w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-7 border shadow-sm shrink-0",
            isDark ? "bg-[#1a1a1a] border-white/10" : "bg-white border-[#181717]/10"
          )}>
            <uc.icon className={cn(
              "w-5 h-5 sm:w-7 sm:h-7",
              isDark ? "text-white" : "text-[#d04841]"
            )} />
          </div>

          {/* Title */}
          <h3 className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3",
            isDark ? "text-white" : "text-[#181717]"
          )}>
            {uc.title}
          </h3>

          {/* Description */}
          <p className={cn(
            "text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md",
            isDark ? "text-white/55" : "text-[#666666]"
          )}>
            {uc.description}
          </p>

          {/* Features */}
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
                <CheckCircle2 className={cn(
                  "w-4 h-4 sm:w-5 sm:h-5 shrink-0",
                  isDark ? "text-emerald-400" : "text-[#d04841]"
                )} />
                <span className={cn(
                  "text-sm sm:text-base font-medium",
                  isDark ? "text-white/75" : "text-[#181717]/80"
                )}>
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <button className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold group self-start transition-colors",
            isDark ? "text-white/80 hover:text-white" : "text-[#181717] hover:text-[#d04841]"
          )}>
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ── Visual Side — hidden on mobile ─────────────────────────── */}
        {/*                                                               */}
        {/* Hiding this on mobile is the key fix. On small screens the   */}
        {/* visual panel adds 200-250px of height, pushing the total card */}
        {/* height past the viewport and breaking both centering and the  */}
        {/* stacking scroll effect. Content-only cards are ~340px tall    */}
        {/* and center cleanly with the formula above.                    */}
        <div className={cn(
          "hidden lg:flex w-[44%] shrink-0 items-center justify-center p-12",
          "border-l relative overflow-hidden min-h-[500px]",
          isDark ? "border-white/5 bg-[#161616]" : "border-[#181717]/5 bg-black/[0.02]"
        )}>

          {/* Visual 1: DMC / Itinerary timeline */}
          {i === 0 && (
            <div className="w-full max-w-[280px] relative">
              <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10 flex gap-4 mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                  <PlaneTakeoff className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-white p-4 rounded-2xl border border-[#181717]/5 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="h-2 w-20 bg-blue-100 rounded-full mb-2" />
                  <div className="h-2 w-32 bg-[#181717]/5 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.7, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="relative z-10 flex gap-4 mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-sm">
                  <Map className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1 bg-white p-4 rounded-2xl border border-[#181717]/5 shadow-sm">
                  <div className="h-2 w-24 bg-amber-100 rounded-full mb-2" />
                  <div className="h-2 w-20 bg-[#181717]/5 rounded-full" />
                </div>
              </motion.div>
            </div>
          )}

          {/* Visual 2: Corporate / Policy engine */}
          {i === 1 && (
            <div className="w-full max-w-[300px] relative">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 mb-4 shadow-xl relative z-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="h-2 w-24 bg-emerald-400/20 rounded-full mb-1.5" />
                    <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-full bg-white/5 rounded-lg border border-white/5" />
                  <div className="h-8 w-full bg-white/5 rounded-lg border border-white/5" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 10 }}
                whileInView={{ opacity: 0.9, x: 16, y: -20, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
                className="bg-[#2a1a1e] border border-rose-500/20 rounded-2xl p-5 shadow-xl w-[90%] ml-auto"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="h-2 w-20 bg-rose-400/40 rounded-full" />
                  <div className="h-5 w-12 bg-rose-500/20 rounded-full border border-rose-500/30" />
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
                <div className="h-2 w-2/3 bg-white/10 rounded-full" />
              </motion.div>
            </div>
          )}

          {/* Visual 3: Visa / Pipeline */}
          {i === 2 && (
            <div className="w-full max-w-[280px] relative space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex items-center justify-between mb-2"
              >
                <div className="h-2 w-16 bg-[#181717]/10 rounded-full" />
                <div className="h-4 w-6 bg-white border border-[#181717]/10 rounded-full" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white border border-[#181717]/10 rounded-2xl p-4 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-400" />
                <div className="flex justify-between mb-3 pl-3">
                  <div className="h-2 w-20 bg-rose-100 rounded-full" />
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <div className="pl-3">
                  <div className="h-1.5 w-full bg-[#181717]/5 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-emerald-400 rounded-full" />
                  </div>
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
                <div className="flex justify-between mb-3 pl-3">
                  <div className="h-2 w-24 bg-emerald-100 rounded-full" />
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-32 relative bg-[#fcfbfb] overflow-visible"
      id="use-cases"
    >
      {/* Background */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#f3f0ee] to-transparent pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-14 sm:mb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
          <Building2 className="w-3.5 h-3.5 text-[#d04841]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
            Purpose Built
          </span>
        </div>
        <h2 className="text-4xl sm:text-[3.5rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-4 sm:mb-6">
          One platform.{" "}
          <br className="hidden sm:block" />
          <span className="text-[#666666]">Any operating model.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
          Travscale adapts to your specific workflow — whether you're building complex itineraries, enforcing corporate policies, or tracking consulate deadlines.
        </p>
      </div>

      {/* Stacked cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-[8vh]">
        {useCases.map((uc, i) => (
          <UseCaseCard
            key={uc.id}
            uc={uc}
            i={i}
            progress={scrollYProgress}
            total={useCases.length}
          />
        ))}
      </div>
    </section>
  );
}