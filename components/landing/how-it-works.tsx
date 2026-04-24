"use client";

import { CheckCircle2, ShieldCheck, CreditCard, Power, Plane, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      data-testid="how-it-works-section"
      id="how-it-works"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20 sm:mb-28 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f9f7f6] border border-[#181717]/10 shadow-sm mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
              The Process
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-6">
            Up and running in <br className="hidden md:block" />
            <span className="text-[#666666]">three simple steps.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            No complex onboarding. No lengthy implementation cycles. Get your agency on Travscale and see results from day one.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 lg:pr-10">
              <div className="relative">
                <div className="text-[7rem] sm:text-[10rem] font-bold leading-none text-[#f9f7f6] select-none absolute -top-16 -left-8 -z-10 tracking-tighter">
                  01
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#181717] mb-5 tracking-tight">
                  Connect Your Tools
                </h3>
                <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                  Bring your own GDS keys, import existing passenger data, and connect your accounting software. Our plug-and-play architecture means setup takes minutes, not months.
                </p>
                <ul className="space-y-4">
                  {[
                    "One-click GDS integration",
                    "Bulk CSV passenger import",
                    "Accounting sync (Xero, QBO)",
                  ].map((item, i) => (
                    <li className="flex items-center gap-3 text-[15px] text-[#181717]/80 font-medium" key={i}>
                      <div className="w-5 h-5 rounded-full bg-[#d04841]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d04841]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d04841]/5 to-transparent rounded-[2rem] transform -rotate-3 scale-105 -z-10 transition-transform duration-700 group-hover:-rotate-1" />
              <div className="bg-white border border-[#181717]/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_60px_-16px_rgba(24,23,23,0.1)] transition-all duration-700 hover:shadow-[0_20px_60px_-16px_rgba(208,72,65,0.15)] relative z-10 overflow-hidden">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#181717]">Integrations</div>
                    <div className="text-xs text-[#666666]">Manage connected services</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f9f7f6] flex items-center justify-center">
                    <Power className="w-4 h-4 text-[#181717]/40" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "Amadeus GDS", status: "Connected", icon: Plane, color: "text-blue-600", bg: "bg-blue-50" },
                    { name: "QuickBooks", status: "Connected", icon: CreditCard, color: "text-green-600", bg: "bg-green-50" },
                    { name: "WhatsApp API", status: "Disconnected", icon: Globe2, color: "text-emerald-600", bg: "bg-emerald-50", inactive: true },
                  ].map((integration, i) => (
                    <div className="flex items-center justify-between p-4 rounded-xl border border-[#181717]/5 bg-[#f9f7f6]/50 transition-colors hover:bg-white" key={i}>
                      <div className="flex items-center gap-4">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", integration.bg)}>
                          <integration.icon className={cn("w-5 h-5", integration.color)} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#181717]">{integration.name}</div>
                          <div className={cn("text-[11px] font-medium", integration.inactive ? "text-[#181717]/40" : "text-emerald-600")}>
                            {integration.status}
                          </div>
                        </div>
                      </div>
                      {/* CSS Toggle Switch */}
                      <div className={cn(
                        "w-10 h-5 rounded-full p-0.5 transition-colors duration-300 relative",
                        integration.inactive 
                          ? "bg-[#181717]/15 group-hover:bg-emerald-500" 
                          : "bg-emerald-500"
                      )}>
                        <div className={cn(
                          "w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300",
                          integration.inactive 
                            ? "translate-x-0 group-hover:translate-x-5" 
                            : "translate-x-5"
                        )} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 lg:pl-10">
              <div className="relative">
                <div className="text-[7rem] sm:text-[10rem] font-bold leading-none text-[#f9f7f6] select-none absolute -top-16 -left-8 -z-10 tracking-tighter">
                  02
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#181717] mb-5 tracking-tight">
                  Manage Everything
                </h3>
                <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                  Passengers, visas, suppliers, itineraries — everything flows through one unified dashboard. Break down data silos and stop losing critical documents in email threads.
                </p>
                <ul className="space-y-4">
                  {[
                    "360° passenger profiles",
                    "Centralized document vault",
                    "Real-time task tracking",
                  ].map((item, i) => (
                    <li className="flex items-center gap-3 text-[15px] text-[#181717]/80 font-medium" key={i}>
                      <div className="w-5 h-5 rounded-full bg-[#d04841]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d04841]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative group">
              <div className="absolute inset-0 bg-[#f9f7f6] rounded-[2rem] transform rotate-3 scale-105 -z-10 transition-transform duration-700 group-hover:rotate-1" />
              <div className="bg-white border border-[#181717]/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_60px_-16px_rgba(24,23,23,0.08)] relative z-10 overflow-hidden flex gap-6">
                
                {/* Master CRM Card */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#181717]/5">
                    <img alt="Avatar" className="w-16 h-16 rounded-full border border-[#181717]/10" src="https://i.pravatar.cc/150?img=32" />
                    <div>
                      <div className="text-lg font-semibold text-[#181717]">Elena Rodriguez</div>
                      <div className="text-xs text-[#666666]">VIP Corporate Client</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#181717]/40 font-bold mb-2">Active Visas</div>
                      <div className="bg-[#f9f7f6] border border-[#181717]/5 rounded-xl p-3.5 flex justify-between items-center group-hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-2">
                          <Globe2 className="w-4 h-4 text-amber-500" />
                          <span className="text-sm font-medium text-[#181717]">Schengen (France)</span>
                        </div>
                        <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold uppercase tracking-wider">In Review</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#181717]/40 font-bold mb-2">Upcoming Trip</div>
                      <div className="bg-[#f9f7f6] border border-[#181717]/5 rounded-xl p-3.5 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                        <div className="flex items-center gap-2 mb-2.5">
                          <Plane className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-[#181717]">Paris & Rome</span>
                        </div>
                        <div className="flex justify-between text-xs text-[#666666]">
                          <span>Oct 12 - Oct 24</span>
                          <span className="text-[#181717] font-medium">₹2.4L Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Document overlay */}
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white border border-[#181717]/10 p-5 rounded-2xl shadow-[0_16px_40px_-12px_rgba(24,23,23,0.15)] w-44 group-hover:-translate-x-6 transition-all duration-700 ease-out">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-full mb-4">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-sm font-semibold text-[#181717] mb-1">Passport Valid</div>
                  <div className="text-xs text-[#666666]">Expires: 2028</div>
                  <div className="h-1.5 w-full bg-emerald-50 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-full" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 lg:pr-10">
              <div className="relative">
                <div className="text-[7rem] sm:text-[10rem] font-bold leading-none text-[#f9f7f6] select-none absolute -top-16 -left-8 -z-10 tracking-tighter">
                  03
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#181717] mb-5 tracking-tight">
                  Scale With Confidence
                </h3>
                <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                  Automate invoicing, generate itineraries in seconds, and track metrics in real-time. Free your team from repetitive admin work so they can focus on selling and growth.
                </p>
                <ul className="space-y-4">
                  {[
                    "Automated payment reminders",
                    "Instant itinerary generation",
                    "Real-time revenue reporting",
                  ].map((item, i) => (
                    <li className="flex items-center gap-3 text-[15px] text-[#181717]/80 font-medium" key={i}>
                      <div className="w-5 h-5 rounded-full bg-[#d04841]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d04841]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-[2rem] transform -rotate-3 scale-105 -z-10 transition-transform duration-700 group-hover:rotate-0" />
              <div className="bg-white border border-[#181717]/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_60px_-16px_rgba(24,23,23,0.08)] relative z-10 overflow-hidden">
                <div className="mb-8 flex justify-between items-end">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#181717]/40 font-bold mb-1">Monthly Revenue</div>
                    <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181717]">₹18.4M</div>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 text-xs font-bold px-2.5 py-1.5 rounded-md">
                    +24.5%
                  </div>
                </div>
                
                {/* Animated Chart */}
                <div className="h-40 sm:h-48 flex items-end gap-2 sm:gap-3 mb-8 border-b border-[#181717]/5 pb-4">
                  {[40, 55, 45, 70, 65, 85, 100].map((height, i) => (
                    <div className="flex-1 bg-[#f9f7f6] rounded-t-sm relative group-hover:bg-blue-50 transition-colors" key={i} style={{ height: "100%" }}>
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-[#2e2d2d] rounded-t-sm transition-all duration-1000 ease-out group-hover:bg-[#d04841]" 
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Automation Log */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="text-sm font-medium text-[#181717]">Invoice #4022 paid. Receipt sent.</div>
                    <div className="text-xs text-[#666666] ml-auto">Just now</div>
                  </div>
                  <div className="flex items-center gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-[#181717]/20" />
                    <div className="text-sm font-medium text-[#181717]">Itinerary generated for Smith Family</div>
                    <div className="text-xs text-[#666666] ml-auto">2m ago</div>
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
