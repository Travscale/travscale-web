"use client";

import {
  Users,
  Receipt,
  Globe2,
  Building,
  CalendarDays,
  Plane,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/atoms/interaction/reveal";

export default function Features() {
  return (
    <section
      className="py-24 sm:py-32 overflow-hidden"
      data-testid="features-section"
      id="features"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Reveal className="mb-16 md:mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
              Platform Features
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-6">
            Built for daily operations, <br className="hidden md:block" />
            <span className="text-[#666666]">not just dashboards.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl">
            Every workflow in Travscale is designed to replace inbox chaos with clear processes your whole agency can trust.
          </p>
        </Reveal>

        {/* High-Fidelity Graphic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Passenger Management */}
          <Reveal className="h-full md:col-span-1 lg:col-span-4" delayMs={0}>
          <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#181717]/5 shadow-sm hover:shadow-md hover:border-[#181717]/10 transition-all duration-300 flex flex-col min-h-[400px] h-full">
            {/* Visual Area */}
            <div className="h-56 pt-8 px-8 flex justify-center items-end overflow-hidden bg-[#f0eeed]">
              <div className="w-full bg-white rounded-t-xl border-t border-x border-[#181717]/10 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.1)] p-5 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-semibold text-[#181717]">Recent Passengers</div>
                  <div className="text-[10px] text-[#666666] font-medium bg-[#f9f7f6] px-2 py-1 rounded-md">View All</div>
                </div>
                {[
                  { name: "Sarah Johnson", id: "PP-849201", status: "Visa Ready", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", initial: "SJ", iBg: "bg-blue-100", iText: "text-blue-700" },
                  { name: "Michael Chen", id: "PP-392011", status: "Pending", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", initial: "MC", iBg: "bg-purple-100", iText: "text-purple-700" },
                  { name: "Emma Davis", id: "PP-748293", status: "Visa Ready", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", initial: "ED", iBg: "bg-rose-100", iText: "text-rose-700" },
                ].map((p, i) => (
                  <div className="flex items-center gap-3 py-2.5 border-b border-[#181717]/5 last:border-0" key={i}>
                    <div className={`w-8 h-8 rounded-full ${p.iBg} ${p.iText} flex items-center justify-center text-[10px] font-bold shrink-0`}>
                      {p.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[#181717] truncate">{p.name}</div>
                      <div className="text-[11px] text-[#666666] truncate">{p.id}</div>
                    </div>
                    <div className={`px-2 py-0.5 rounded text-[10px] font-medium border ${p.bg} ${p.color} ${p.border} shrink-0`}>
                      {p.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Content Area */}
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Users className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Passenger Records</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Track passports, visas, and trip history in a clean, searchable database.</p>
            </div>
          </div>
          </Reveal>

          {/* Card 2: Smart Invoicing */}
          <Reveal className="h-full md:col-span-1 lg:col-span-4" delayMs={60}>
          <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#181717]/5 shadow-sm hover:shadow-md hover:border-[#181717]/10 transition-all duration-300 flex flex-col min-h-[400px] h-full">
            <div className="h-56 pt-8 px-8 flex justify-center items-end overflow-hidden relative bg-[#f0eeed]">
              {/* Background decorative elements */}
              <div className="absolute top-12 right-12 w-32 h-32 bg-[#d04841]/5 rounded-full blur-xl group-hover:bg-[#d04841]/10 transition-colors duration-500" />
              
              <div className="w-56 bg-white rounded-t-xl border border-[#181717]/10 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.1)] p-5 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out relative">
                {/* Paid stamp */}
                <div className="absolute top-6 right-4 border-2 border-emerald-500 text-emerald-500 text-[11px] font-bold uppercase tracking-widest py-1 px-2 rounded rotate-12 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 delay-100 z-10 bg-white/80 backdrop-blur-sm">
                  Paid
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-[10px] text-[#666666] font-medium uppercase tracking-wider mb-1">Invoice</div>
                    <div className="text-sm font-semibold text-[#181717]">INV-2024-089</div>
                  </div>
                  <div className="w-8 h-8 rounded bg-[#f9f7f6] flex items-center justify-center">
                    <Receipt className="w-4 h-4 text-[#181717]/40" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#666666]">Dubai Package (2 Pax)</span>
                    <span className="font-medium text-[#181717]">₹84,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#666666]">Visa Processing</span>
                    <span className="font-medium text-[#181717]">₹12,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#666666]">
                    <span>Taxes (GST 18%)</span>
                    <span>₹17,280</span>
                  </div>
                </div>
                
                <div className="pt-3 border-t border-dashed border-[#181717]/20 flex justify-between items-end">
                  <div className="text-xs font-medium text-[#666666]">Total Amount</div>
                  <div className="text-xl font-bold text-[#181717] leading-none tracking-tight">₹1,13,280</div>
                </div>
              </div>
            </div>
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Receipt className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Smart Invoicing</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Generate agency-ready invoices with taxes and automatic payment links.</p>
            </div>
          </div>
          </Reveal>

          {/* Card 3: Visa Workflow */}
          <Reveal className="h-full md:col-span-1 lg:col-span-4" delayMs={120}>
          <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#181717]/5 shadow-sm hover:shadow-md hover:border-[#181717]/10 transition-all duration-300 flex flex-col min-h-[400px] h-full">
            <div className="h-56 pt-8 px-4 flex justify-center items-end gap-3 overflow-hidden relative bg-[#f0eeed]">
              <div className="w-28 bg-[#f1eeec] border border-[#181717]/5 rounded-t-xl p-2.5 translate-y-8 group-hover:translate-y-4 transition-transform duration-500 ease-out">
                <div className="text-[10px] font-semibold text-[#181717]/60 mb-2 uppercase tracking-wider">Collected</div>
                <div className="bg-white rounded-lg p-2.5 shadow-sm border border-[#181717]/5 mb-2">
                  <div className="text-[11px] font-medium text-[#181717] mb-1">A. Sharma</div>
                  <div className="text-[9px] text-[#666666]">UK Tourist Visa</div>
                </div>
                <div className="bg-white rounded-lg p-2.5 shadow-sm border border-[#181717]/5">
                  <div className="text-[11px] font-medium text-[#181717] mb-1">R. Patel</div>
                  <div className="text-[9px] text-[#666666]">US B1/B2</div>
                </div>
              </div>
              <div className="w-28 bg-[#f1eeec] border border-[#181717]/5 rounded-t-xl p-2.5 translate-y-4 group-hover:translate-y-6 transition-transform duration-500 ease-out delay-75">
                <div className="text-[10px] font-semibold text-[#181717]/60 mb-2 uppercase tracking-wider flex items-center justify-between">
                  Processing <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>
                <div className="bg-white rounded-lg p-2.5 shadow-sm border border-[#181717]/5 border-l-2 border-l-amber-400">
                  <div className="text-[11px] font-medium text-[#181717] mb-1">S. Gupta</div>
                  <div className="text-[9px] text-[#666666] mb-1.5">Schengen (FR)</div>
                  <div className="w-full bg-[#f1eeec] rounded-full h-1">
                    <div className="bg-amber-400 h-1 rounded-full w-2/3" />
                  </div>
                </div>
              </div>
              <div className="w-28 bg-[#f1eeec] border border-[#181717]/5 rounded-t-xl p-2.5 translate-y-12 group-hover:translate-y-8 transition-transform duration-500 ease-out delay-150">
                <div className="text-[10px] font-semibold text-[#181717]/60 mb-2 uppercase tracking-wider flex items-center justify-between">
                  Approved <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white rounded-lg p-2.5 shadow-sm border border-[#181717]/5 border-l-2 border-l-emerald-400 opacity-80">
                  <div className="text-[11px] font-medium text-[#181717] mb-1 line-through decoration-[#181717]/30">V. Kumar</div>
                  <div className="text-[9px] text-[#666666]">Dubai e-Visa</div>
                </div>
              </div>
            </div>
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Globe2 className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Visa Kanban</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Handle requests, approvals, and consulate timelines visually.</p>
            </div>
          </div>
          </Reveal>

          {/* Card 4: Supplier Operations (Larger horizontal card) */}
          <Reveal className="h-full md:col-span-2 lg:col-span-8" delayMs={180}>
          <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#181717]/5 shadow-sm hover:shadow-md hover:border-[#181717]/10 transition-all duration-300 flex flex-col md:flex-row min-h-[320px] h-full">
            <div className="flex-1 p-8 bg-white md:border-r border-[#181717]/5 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <Building className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-[#181717] mb-3 tracking-tight">
                Supplier Operations
              </h3>
              <p className="text-[#666666] text-[15px] leading-relaxed max-w-sm">
                Centralize DMC terms, negotiated rates, and communication
                without losing details in scattered WhatsApp chats.
              </p>
            </div>

            <div className="flex-1 h-64 md:h-auto bg-[#f0eeed] relative overflow-hidden flex items-center justify-center p-8">
              {/* Decorative background grid */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(#181717 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Supplier Card Stack */}
              <div className="relative w-full max-w-[320px] h-[200px] flex items-center justify-center">
                {/* Card 3 - Back */}
                <div className="absolute w-[260px] bg-white rounded-xl border border-[#181717]/10 shadow-sm p-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-6 translate-y-3 rotate-6 group-hover:translate-x-14 group-hover:translate-y-2 group-hover:rotate-12 opacity-60">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-[10px] shrink-0">
                      SD
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#181717] truncate">
                        Sunset DMC
                      </div>
                      <div className="text-[10px] text-[#666666]">
                        Thailand • B2B Hotel
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#666666]">Net Rate</span>
                    <span className="font-semibold text-[#181717]">
                      ฿4,200/night
                    </span>
                  </div>
                </div>

                {/* Card 2 - Middle */}
                <div className="absolute w-[260px] bg-white rounded-xl border border-[#181717]/10 shadow-md p-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -translate-x-2 translate-y-1 rotate-[-3deg] group-hover:-translate-x-8 group-hover:translate-y-0 group-hover:rotate-[-8deg] opacity-80">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-[10px] shrink-0">
                      GT
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#181717] truncate">
                        Global Trails
                      </div>
                      <div className="text-[10px] text-[#666666]">
                        Europe • Ground Transport
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#666666]">Commission</span>
                    <span className="font-semibold text-[#181717]">
                      15% markup
                    </span>
                  </div>
                </div>

                {/* Card 1 - Front */}
                <div className="absolute w-[260px] bg-white rounded-xl border border-[#181717]/10 shadow-lg p-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[-2px] rotate-0 group-hover:translate-y-[-8px] group-hover:scale-[1.02] z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-[10px] shrink-0">
                        RJ
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[#181717] truncate">
                          Royal Journeys DMC
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
                            Verified
                          </span>
                          <span className="text-[10px] text-[#666666]">Dubai</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#f9f7f6] flex items-center justify-center shrink-0">
                      <Building className="w-3.5 h-3.5 text-[#181717]/30" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#181717]/5">
                      <span className="text-[#666666]">Atlantis Half-Board</span>
                      <span className="font-medium text-[#181717]">
                        AED 1,200/night
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1.5">
                      <span className="text-[#666666]">Desert Safari</span>
                      <span className="font-medium text-[#181717]">AED 350/pax</span>
                    </div>
                  </div>

                  {/* Active indicator */}
                  <div className="mt-3 pt-3 border-t border-dashed border-[#181717]/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
                    <span className="text-[10px] text-[#666666] font-medium">
                      Last updated 2h ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>

          {/* Card 5: Itinerary Builder */}
          <Reveal className="h-full md:col-span-1 lg:col-span-4" delayMs={240}>
          <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-[#181717]/5 shadow-sm hover:shadow-md hover:border-[#181717]/10 transition-all duration-300 flex flex-col min-h-[320px] h-full">
            <div className="h-64 pt-8 px-8 flex justify-center items-end overflow-hidden relative bg-[#f0eeed]">
              {/* Background gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none" />
              
              {/* The Phone */}
              <div className="w-[180px] h-[240px] bg-white rounded-t-[32px] border-[6px] border-[#181717] border-b-0 shadow-2xl relative overflow-hidden translate-y-12 group-hover:translate-y-6 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#181717] rounded-b-[10px] z-20" />
                
                {/* Header Image Gradient */}
                <div className="h-[90px] w-full bg-gradient-to-br from-orange-300 via-rose-400 to-purple-500 relative shrink-0">
                  <div className="absolute inset-0 bg-black/10" />
                  {/* Title */}
                  <div className="absolute bottom-2.5 left-3 text-white z-10">
                    <div className="text-[13px] font-bold leading-tight drop-shadow-md tracking-tight">Bali Escape</div>
                    <div className="text-[9px] font-medium opacity-90 drop-shadow-md">Aug 14 - 20</div>
                  </div>
                </div>
                
                {/* Phone Body */}
                <div className="flex-1 bg-[#f9f7f6] p-2.5 space-y-2">
                  <div className="text-[9px] font-bold text-[#181717]/50 uppercase tracking-widest mt-0.5 ml-0.5">Day 1</div>
                  
                  {/* Flight */}
                  <div className="bg-white rounded-[10px] p-2 shadow-sm border border-[#181717]/5 flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                      <Plane className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#181717] leading-none mb-0.5 tracking-tight">Flight to DPS</div>
                      <div className="text-[8px] text-[#666666]">10:30 AM • SQ-882</div>
                    </div>
                  </div>
                  
                  {/* Hotel */}
                  <div className="bg-white rounded-[10px] p-2 shadow-sm border border-[#181717]/5 flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center shrink-0">
                      <Building className="w-3 h-3 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#181717] leading-none mb-0.5 tracking-tight">W Hotel Seminyak</div>
                      <div className="text-[8px] text-[#666666]">Check-in • 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Share Badge */}
              <div className="absolute right-4 md:-right-2 lg:right-4 top-24 bg-white shadow-xl border border-[#181717]/10 rounded-full px-3 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-150 z-30">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-[10px] font-bold text-[#181717] pr-0.5 whitespace-nowrap">Client Viewed</span>
              </div>
            </div>
            <div className="p-8 mt-auto bg-white border-t border-[#181717]/5">
              <div className="w-10 h-10 rounded-full bg-[#eeebea] flex items-center justify-center mb-4 group-hover:bg-[#d04841]/10 transition-colors">
                <CalendarDays className="w-4 h-4 text-[#181717] group-hover:text-[#d04841] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#181717] mb-2 tracking-tight">Itineraries</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">Create and share polished day-by-day plans with clients instantly.</p>
            </div>
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
