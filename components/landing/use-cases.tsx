"use client";

import { useState } from "react";
import {
  Building2,
  BriefcaseBusiness,
  Globe2,
  PlaneTakeoff,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "leisure",
    icon: PlaneTakeoff,
    title: "Leisure Travel",
    subtitle: "High-volume consumer bookings without the chaos.",
    description: "Replace messy spreadsheets with beautiful, shareable itineraries. Track payments, supplier confirmations, and passenger preferences in one unified trip record.",
    metric: "3x faster",
    metricLabel: "booking turnaround",
  },
  {
    id: "corporate",
    icon: BriefcaseBusiness,
    title: "Corporate Desks",
    subtitle: "Strict policies, SLA compliance, and spend reporting.",
    description: "Manage complex corporate accounts with role-based access. Track out-of-policy bookings, automate invoicing, and provide real-time spend analytics to your corporate clients.",
    metric: "42% less",
    metricLabel: "ops overhead",
  },
  {
    id: "visa",
    icon: Globe2,
    title: "Visa Specialists",
    subtitle: "Track document pipelines and consulate dates end-to-end.",
    description: "Never miss a consulate appointment. Use deadline-first workflows with automated alerts for expiring passports, missing documents, and processing delays.",
    metric: "99.2%",
    metricLabel: "deadline compliance",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const current = useCases[active];

  const handleTabChange = (index: number) => {
    if (active === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setIsTransitioning(false);
    }, 400); // Wait for fade out
  };

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      data-testid="use-cases-section"
      id="use-cases"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
            <Building2 className="w-3.5 h-3.5 text-[#d04841]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
              Built for any model
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-6">
            Designed for real <br className="hidden md:block" />
            <span className="text-[#666666]">travel workflows.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Whether you process high-volume visas or manage complex corporate travel policies, pick your operating model and run it flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Side: Navigation & Text */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Tab Navigation */}
            <div className="flex flex-col gap-2 mb-10">
              {useCases.map((uc, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={uc.id}
                    onClick={() => handleTabChange(i)}
                    className={cn(
                      "flex items-center gap-4 px-6 py-5 rounded-2xl text-left transition-all duration-300 w-full group relative overflow-hidden",
                      isActive 
                        ? "bg-white shadow-[0_8px_30px_-12px_rgba(24,23,23,0.1)] border border-[#181717]/10" 
                        : "hover:bg-[#181717]/5 border border-transparent"
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d04841] rounded-l-2xl" />
                    )}
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                      isActive ? "bg-[#d04841]/10" : "bg-white border border-[#181717]/5 group-hover:bg-white"
                    )}>
                      <uc.icon className={cn(
                        "w-5 h-5 transition-colors duration-300",
                        isActive ? "text-[#d04841]" : "text-[#181717]/40 group-hover:text-[#181717]"
                      )} />
                    </div>
                    <div>
                      <div className={cn(
                        "text-lg font-semibold tracking-tight transition-colors duration-300",
                        isActive ? "text-[#181717]" : "text-[#181717]/60 group-hover:text-[#181717]"
                      )}>
                        {uc.title}
                      </div>
                      <div className={cn(
                        "text-sm mt-0.5 transition-colors duration-300",
                        isActive ? "text-[#666666]" : "text-[#181717]/40 group-hover:text-[#181717]/60"
                      )}>
                        {uc.subtitle}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Dynamic Content Text */}
            <div className={cn(
              "bg-white rounded-[2rem] p-8 border border-[#181717]/10 shadow-sm transition-all duration-400 ease-in-out",
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}>
              <h3 className="text-xl font-semibold text-[#181717] mb-3">{current.title} Workflows</h3>
              <p className="text-[#666666] leading-relaxed mb-8">
                {current.description}
              </p>
              
              <div className="pt-6 border-t border-[#181717]/5 flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-[#181717] mb-1">{current.metric}</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#181717]/40">{current.metricLabel}</div>
                </div>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f9f7f6] hover:bg-[#181717]/5 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#181717] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: High Fidelity Mock UIs */}
          <div 
            className="lg:col-span-7 relative h-[600px] lg:h-[700px] w-full perspective-1000"
            style={{
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
            }}
          >
            {/* 1. Leisure Mock UI */}
            <div className={cn(
              "absolute inset-0 transition-all duration-500 ease-out transform origin-right h-full",
              active === 0 
                ? "opacity-100 translate-x-0 rotate-y-0 scale-100 pointer-events-auto z-10" 
                : "opacity-0 translate-x-12 rotate-y-12 scale-95 pointer-events-none z-0"
            )}>
              <div className="w-full h-[120%] bg-white rounded-[2rem] border border-[#181717]/10 shadow-[0_30px_80px_-24px_rgba(24,23,23,0.12)] overflow-hidden flex flex-col relative">
                {/* Image Header */}
                <div className="h-56 relative overflow-hidden bg-[#181717] shrink-0">
                  <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-1">Confirmed Trip</div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">7 Days in Bali</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        Smith Family
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex-1 bg-[#f9f7f6]">
                  <div className="bg-white rounded-xl border border-[#181717]/5 p-5 shadow-sm mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex flex-col items-center justify-center border border-blue-100">
                        <span className="text-[10px] text-blue-600 font-bold uppercase">Oct</span>
                        <span className="text-lg font-bold text-blue-700 leading-none">12</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-[#181717]">Arrival & Transfer</div>
                        <div className="text-xs text-[#666666]">DPS Airport to Ubud Resort</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                    </div>
                    
                    <div className="pl-6 ml-6 border-l-2 border-dashed border-[#181717]/10 py-4 relative">
                      <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#181717]/20" />
                      <div className="bg-[#f9f7f6] rounded-lg p-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-[#181717]">Private Villa Confirmed</span>
                          <span className="text-[#666666]">#CONF-8821</span>
                        </div>
                        <div className="text-[10px] text-[#666666]">Supplier: Bali Luxury DMC</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#181717]/5 p-5 shadow-sm opacity-60">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-50 flex flex-col items-center justify-center border border-amber-100">
                        <span className="text-[10px] text-amber-600 font-bold uppercase">Oct</span>
                        <span className="text-lg font-bold text-amber-700 leading-none">13</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-[#181717]">Mount Batur Sunrise Trek</div>
                        <div className="text-xs text-[#666666]">Hotel Pickup at 2:00 AM</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#181717]/5 flex items-center justify-center">
                        <MoreHorizontal className="w-4 h-4 text-[#181717]/40" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Share Button */}
                <div className="absolute top-6 right-6 bg-[#232222] text-white px-5 py-3 rounded-full font-medium text-sm shadow-lg flex items-center gap-2 hover:bg-[#181717] transition-colors cursor-pointer z-20">
                  <Download className="w-4 h-4" /> Export PDF
                </div>
              </div>
            </div>

            {/* 2. Corporate Mock UI */}
            <div className={cn(
              "absolute inset-0 transition-all duration-500 ease-out transform origin-right h-full",
              active === 1 
                ? "opacity-100 translate-x-0 rotate-y-0 scale-100 pointer-events-auto z-10 delay-100" 
                : "opacity-0 translate-x-12 rotate-y-12 scale-95 pointer-events-none z-0"
            )}>
              <div className="w-full h-[120%] bg-[#181717] rounded-[2rem] border border-[#2e2d2d] shadow-[0_30px_80px_-24px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-6 relative">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 shrink-0">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Acme Corp HQ</h3>
                    <div className="text-white/50 text-xs">Policy: Strict (C-Level Exceptions)</div>
                  </div>
                  <div className="bg-white/10 text-white px-3 py-1.5 rounded-md text-xs font-medium border border-white/10">
                    Q3 Spend: $142,000
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="grid grid-cols-5 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 px-4 shrink-0">
                    <div className="col-span-2">Employee</div>
                    <div>Route</div>
                    <div>Class</div>
                    <div className="text-right">Policy</div>
                  </div>

                  <div className="space-y-2 flex-1">
                    {[
                      { name: "Sarah Connor", role: "VP Sales", route: "SFO → JFK", class: "Business", policy: "In Policy", policyColor: "text-emerald-400 bg-emerald-400/10" },
                      { name: "John Smith", role: "Engineer", route: "LHR → FRA", class: "Economy", policy: "In Policy", policyColor: "text-emerald-400 bg-emerald-400/10" },
                      { name: "Mike Ross", role: "Associate", route: "JFK → DXB", class: "First", policy: "Out of Policy", policyColor: "text-rose-400 bg-rose-400/10" },
                      { name: "Jessica Day", role: "Director", route: "LAX → SEA", class: "Premium", policy: "In Policy", policyColor: "text-emerald-400 bg-emerald-400/10" },
                      { name: "Harvey Specter", role: "Partner", route: "JFK → LHR", class: "First", policy: "In Policy", policyColor: "text-emerald-400 bg-emerald-400/10" },
                    ].map((row, i) => (
                      <div className="grid grid-cols-5 items-center bg-white/5 border border-white/5 rounded-xl p-3 px-4 transition-colors hover:bg-white/10 cursor-pointer" key={i}>
                        <div className="col-span-2 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-medium">
                            {row.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{row.name}</div>
                            <div className="text-white/40 text-[10px]">{row.role}</div>
                          </div>
                        </div>
                        <div className="text-white/80 text-xs font-mono">{row.route}</div>
                        <div className="text-white/80 text-xs">{row.class}</div>
                        <div className="text-right">
                          <span className={cn("text-[10px] font-bold px-2 py-1 rounded", row.policyColor)}>
                            {row.policy}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Mini alert banner */}
                <div className="absolute top-32 right-6 bg-[#2a1a1e] border border-rose-500/20 rounded-xl p-4 flex items-start gap-3 shadow-2xl z-20 w-[300px]">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-rose-400 text-sm font-semibold mb-1">Approval Required</div>
                    <div className="text-rose-400/70 text-xs mb-3">Mike Ross booked First Class to DXB, exceeding limit by $4,200.</div>
                    <button className="bg-rose-500 text-white text-xs font-medium px-4 py-1.5 rounded hover:bg-rose-600 transition-colors w-full">
                      Review Exceptions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Visa Mock UI */}
            <div className={cn(
              "absolute inset-0 transition-all duration-500 ease-out transform origin-right h-full",
              active === 2 
                ? "opacity-100 translate-x-0 rotate-y-0 scale-100 pointer-events-auto z-10 delay-100" 
                : "opacity-0 translate-x-12 rotate-y-12 scale-95 pointer-events-none z-0"
            )}>
              <div className="w-full h-[120%] bg-[#f9f7f6] rounded-[2rem] border border-[#181717]/10 shadow-[0_30px_80px_-24px_rgba(24,23,23,0.12)] overflow-hidden flex flex-col p-6">
                <div className="flex justify-between items-center mb-6 shrink-0">
                  <h3 className="text-[#181717] font-semibold text-lg">Visa Pipeline</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white border border-[#181717]/10 flex items-center justify-center shadow-sm">
                      <MoreHorizontal className="w-4 h-4 text-[#181717]/60" />
                    </div>
                  </div>
                </div>

                {/* Kanban columns */}
                <div className="flex-1 flex gap-4 overflow-hidden h-full pb-10">
                  {/* Column 1 */}
                  <div className="flex-1 flex flex-col h-full">
                    <div className="text-[10px] font-bold text-[#181717]/40 uppercase tracking-widest mb-3 flex justify-between shrink-0">
                      <span>Collecting Docs</span>
                      <span className="bg-[#181717]/10 px-1.5 rounded text-[#181717]/60">3</span>
                    </div>
                    <div className="bg-[#181717]/5 rounded-xl p-2 flex-1 space-y-2 overflow-hidden h-full">
                      <div className="bg-white border border-[#181717]/10 rounded-lg p-3 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-xs font-semibold text-[#181717]">UK Standard</div>
                          <Globe2 className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <div className="text-[10px] text-[#666666] mb-3">Client: David Chen</div>
                        <div className="flex gap-1">
                          <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
                          <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
                          <div className="h-1.5 flex-1 bg-[#181717]/10 rounded-full" />
                        </div>
                        <div className="text-[9px] text-rose-500 font-bold mt-2">Missing: Bank Statement</div>
                      </div>
                      
                      <div className="bg-white border border-[#181717]/10 rounded-lg p-3 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer opacity-80">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-xs font-semibold text-[#181717]">US B1/B2</div>
                          <Globe2 className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <div className="text-[10px] text-[#666666] mb-3">Client: Sarah Jenkins</div>
                        <div className="flex gap-1">
                          <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
                          <div className="h-1.5 flex-1 bg-[#181717]/10 rounded-full" />
                          <div className="h-1.5 flex-1 bg-[#181717]/10 rounded-full" />
                        </div>
                      </div>

                      <div className="bg-white border border-[#181717]/10 rounded-lg p-3 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer opacity-50">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-xs font-semibold text-[#181717]">Japan Tourist</div>
                          <Globe2 className="w-3.5 h-3.5 text-rose-500" />
                        </div>
                        <div className="text-[10px] text-[#666666]">Client: Mike Ross</div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex-1 flex flex-col h-full">
                    <div className="text-[10px] font-bold text-[#181717]/40 uppercase tracking-widest mb-3 flex justify-between shrink-0">
                      <span>At Consulate</span>
                      <span className="bg-[#181717]/10 px-1.5 rounded text-[#181717]/60">2</span>
                    </div>
                    <div className="bg-[#181717]/5 rounded-xl p-2 flex-1 space-y-2 h-full">
                      <div className="bg-white border border-[#181717]/10 rounded-lg p-3 shadow-sm border-t-2 border-t-amber-400 hover:-translate-y-1 transition-transform cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-xs font-semibold text-[#181717]">Schengen (IT)</div>
                          <Globe2 className="w-3.5 h-3.5 text-amber-500" />
                        </div>
                        <div className="text-[10px] text-[#666666] mb-3">Client: Maria Garcia</div>
                        <div className="bg-amber-50 text-amber-700 text-[9px] font-bold px-2 py-1 rounded inline-block">
                          Processing: Day 12
                        </div>
                      </div>
                      
                      <div className="bg-white border border-[#181717]/10 rounded-lg p-3 shadow-sm border-t-2 border-t-emerald-400 hover:-translate-y-1 transition-transform cursor-pointer opacity-80">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-xs font-semibold text-[#181717]">Dubai E-Visa</div>
                          <Globe2 className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <div className="text-[10px] text-[#666666] mb-3">Client: James Wilson</div>
                        <div className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-2 py-1 rounded inline-block">
                          Approved (Awaiting Download)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
