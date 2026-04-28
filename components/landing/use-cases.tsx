"use client";

import { useState } from "react";
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
import { motion, AnimatePresence } from "motion/react";

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

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 sm:py-32 relative bg-[#fcfbfb] overflow-hidden" id="use-cases">
      
      {/* Abstract Background */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#f3f0ee] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
          <Building2 className="w-3.5 h-3.5 text-[#d04841]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
            Purpose Built
          </span>
        </div>
        <h2 className="text-[2.5rem] sm:text-[3.5rem] font-medium leading-[1.05] text-[#181717] tracking-tight mb-6">
          One platform. <br className="hidden sm:block" />
          <span className="text-[#666666]">Any operating model.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
          Travscale adapts to your specific workflow, whether you're building complex itineraries, enforcing corporate policies, or tracking consulate deadlines.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-16">
          {useCases.map((uc, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-2.5 overflow-hidden",
                  isActive 
                    ? "text-white shadow-md" 
                    : "bg-white text-[#666666] hover:bg-[#181717]/5 hover:text-[#181717] border border-[#181717]/10 shadow-sm"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-[#181717]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2.5">
                  <uc.icon className={cn("w-4 h-4 sm:w-4 sm:h-4 transition-colors", isActive ? "text-white" : "text-[#181717]/50")} />
                  <span>{uc.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area with Grid Crossfade Technique */}
        <div className="relative grid grid-cols-1 grid-rows-1 items-start w-full mx-auto">
          <AnimatePresence>
            {useCases.map((uc, i) => {
              if (i !== activeIndex) return null;
              
              const isDark = uc.theme === "dark";
              const isBeige = uc.theme === "beige";

              return (
                <motion.div
                  key={uc.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", position: "relative", zIndex: 10 }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)", position: "absolute", zIndex: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className={cn(
                    "col-start-1 row-start-1 w-full rounded-[2.5rem] sm:rounded-[3rem] border overflow-hidden flex flex-col lg:flex-row transition-colors",
                    isDark 
                      ? "bg-[#111111] border-[#222] text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]" 
                      : isBeige 
                        ? "bg-[#f5f2eb] border-[#181717]/5 text-[#181717] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)]"
                        : "bg-white border-[#181717]/5 text-[#181717] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)]"
                  )}
                >
                  {/* Content Side */}
                  <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border shadow-sm",
                      isDark ? "bg-[#1a1a1a] border-white/10" : "bg-white border-[#181717]/10"
                    )}>
                      <uc.icon className={cn("w-7 h-7", isDark ? "text-white" : "text-[#d04841]")} />
                    </div>
                    
                    <h3 className={cn(
                      "text-3xl sm:text-4xl font-semibold tracking-tight mb-4",
                      isDark ? "text-white" : "text-[#181717]"
                    )}>
                      {uc.title}
                    </h3>
                    
                    <p className={cn(
                      "text-base sm:text-lg leading-relaxed mb-10 max-w-md",
                      isDark ? "text-white/60" : "text-[#666666]"
                    )}>
                      {uc.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {uc.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className={cn("w-5 h-5 shrink-0", isDark ? "text-emerald-400" : "text-[#d04841]")} />
                          <span className={cn(
                            "text-sm sm:text-base font-medium",
                            isDark ? "text-white/80" : "text-[#181717]/80"
                          )}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <button className={cn(
                      "inline-flex items-center gap-2 text-sm font-semibold group self-start",
                      isDark ? "text-white hover:text-white/70" : "text-[#181717] hover:text-[#d04841]"
                    )}>
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Abstract Visual Side */}
                  <div className={cn(
                    "w-full lg:w-[45%] shrink-0 flex items-center justify-center p-8 sm:p-12 border-t lg:border-t-0 lg:border-l relative overflow-hidden min-h-[300px] lg:min-h-[500px]",
                    isDark ? "border-white/5 bg-[#161616]" : "border-[#181717]/5 bg-black/[0.02]"
                  )}>
                    {/* Visual 1: Leisure/DMC (Abstract Itinerary) */}
                    {i === 0 && (
                      <div className="w-full max-w-[280px] relative">
                        <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="relative z-10 flex gap-4 mb-6"
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                            <PlaneTakeoff className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 bg-white p-4 rounded-2xl border border-[#181717]/5 shadow-sm transform transition-transform hover:-translate-y-1">
                            <div className="h-2 w-20 bg-blue-100 rounded-full mb-2" />
                            <div className="h-2 w-32 bg-[#181717]/5 rounded-full" />
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 0.7, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
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

                    {/* Visual 2: Corporate (Abstract Policy Engine) */}
                    {i === 1 && (
                      <div className="w-full max-w-[300px] relative">
                        <motion.div 
                          initial={{ opacity: 0, y: 20, rotate: -10 }}
                          animate={{ opacity: 1, y: 0, rotate: -2 }}
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
                          animate={{ opacity: 0.9, x: 16, y: -20, rotate: 2 }} 
                          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
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

                    {/* Visual 3: Visa (Abstract Pipeline) */}
                    {i === 2 && (
                      <div className="w-full max-w-[280px] relative space-y-4">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                          className="flex items-center justify-between mb-2"
                        >
                          <div className="h-2 w-16 bg-[#181717]/10 rounded-full" />
                          <div className="h-4 w-6 bg-white border border-[#181717]/10 rounded-full" />
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="bg-white border border-[#181717]/10 rounded-2xl p-4 shadow-sm relative overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-1 h-full bg-rose-400" />
                          <div className="flex justify-between mb-3 pl-2">
                            <div className="h-2 w-20 bg-rose-100 rounded-full" />
                            <Clock className="w-3.5 h-3.5 text-rose-400" />
                          </div>
                          <div className="h-1.5 w-full bg-[#181717]/5 rounded-full pl-2">
                            <div className="h-full w-1/3 bg-emerald-400 rounded-full" />
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 0.6, scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                          className="bg-white border border-[#181717]/10 rounded-2xl p-4 shadow-sm relative overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
                          <div className="flex justify-between mb-3 pl-2">
                            <div className="h-2 w-24 bg-emerald-100 rounded-full" />
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <div className="h-1.5 w-full bg-[#181717]/5 rounded-full pl-2">
                            <div className="h-full w-full bg-emerald-400 rounded-full" />
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Decorative glow for dark mode */}
                    {isDark && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
