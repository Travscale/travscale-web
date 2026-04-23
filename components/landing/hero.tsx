"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play, CheckCircle2, LayoutGrid, Users, Plane, CreditCard, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroProps = {
  onDemoClick: () => void;
};

export default function Hero({ onDemoClick }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Slight delay for entry animation sequence
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden"
      data-testid="hero-section"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      {/* Engineered Background Grid - extremely subtle */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #181717 1px, transparent 1px),
            linear-gradient(to bottom, #181717 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <div 
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-8 transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d04841] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d04841]"></span>
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
            Next-Gen Travel Operations
          </span>
        </div>

        {/* Headline */}
        <h1 
          className={cn(
            "text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.05] text-[#181717] tracking-tight mb-8 mx-auto max-w-5xl transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ letterSpacing: "-0.03em", transitionDelay: "100ms" }}
        >
          Scale your travel business, <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-0">
            <span className="relative z-10 text-[#d04841]">not your inbox.</span>
            <span className="absolute bottom-1 left-0 w-full h-[0.15em] bg-[#d04841]/10 -z-10 rounded-full" />
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className={cn(
            "text-base sm:text-lg lg:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          Replace WhatsApp and email chaos with a single platform designed to run your travel empire. Manage visas, passengers, suppliers, and GDS in one unified workspace.
        </p>

        {/* CTAs */}
        <div 
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <button
            className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#232222] px-8 text-[15px] font-medium text-white transition-all hover:bg-[#181717] hover:shadow-[0_8px_24px_-6px_rgba(35,34,34,0.3)] active:scale-[0.98] overflow-hidden"
            onClick={onDemoClick}
            type="button"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            Book a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="https://agent.travscale.com"
            className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#181717]/15 bg-white px-8 text-[15px] font-medium text-[#181717] transition-all hover:border-[#181717]/30 hover:bg-[#f9f7f6] active:scale-[0.98]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play className="h-4 w-4 fill-[#181717]/20 text-[#181717]/50 transition-colors group-hover:fill-[#181717]/40 group-hover:text-[#181717]" />
            Start Free Trial
          </a>
        </div>

        {/* Trust Indicators */}
        <div 
          className={cn(
            "mt-10 flex items-center justify-center gap-4 text-sm font-medium text-[#666666] transition-all duration-1000 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "450ms" }}
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>SOC2 Certified</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-[#181717]/20 hidden sm:block" />
          <div className="hidden sm:flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i} 
                src={`https://i.pravatar.cc/100?img=${10 + i}`} 
                alt="User avatar" 
                className="h-6 w-6 rounded-full border-2 border-[#f9f7f6]" 
              />
            ))}
          </div>
          <span className="hidden sm:block">Trusted by 500+ agencies</span>
        </div>

        {/* High-Fidelity Mock UI / Dashboard Preview */}
        <div 
          className={cn(
            "mt-16 sm:mt-24 relative mx-auto max-w-[1000px] transition-all duration-1000 ease-out",
            mounted ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          )}
          style={{ transitionDelay: '600ms' }}
        >
          {/* Decorative Glow behind the mock UI */}
          <div className="absolute inset-0 -top-8 -bottom-8 bg-gradient-to-b from-[#d04841]/5 via-transparent to-transparent blur-3xl rounded-[100px] -z-10" />
          
          <div className="relative rounded-2xl border border-[#181717]/10 bg-white shadow-[0_20px_60px_-16px_rgba(24,23,23,0.1)] overflow-hidden flex flex-col h-[400px] sm:h-[500px]">
            {/* Window Header */}
            <div className="h-12 border-b border-[#181717]/5 bg-[#f9f7f6]/80 backdrop-blur-sm flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#181717]/15" />
                <div className="w-3 h-3 rounded-full bg-[#181717]/15" />
                <div className="w-3 h-3 rounded-full bg-[#181717]/15" />
              </div>
              <div className="flex bg-white border border-[#181717]/10 rounded-md px-3 py-1 shadow-sm">
                <span className="text-[10px] font-medium text-[#181717]/50">app.travscale.com</span>
              </div>
              <div className="w-10" /> {/* Spacer for centering */}
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-1 overflow-hidden bg-[#fafafa]">
              {/* Sidebar */}
              <div className="w-16 sm:w-56 border-r border-[#181717]/5 bg-white p-4 flex flex-col gap-2">
                <div className="h-8 rounded-lg bg-[#181717]/5 mb-6 hidden sm:block" />
                <div className="h-8 rounded-full bg-white border border-[#181717]/10 flex items-center justify-center sm:hidden mb-6">
                   <div className="w-4 h-4 bg-[#181717]/20 rounded" />
                </div>
                
                {[
                  { icon: LayoutGrid, label: "Dashboard", active: true },
                  { icon: Users, label: "Passengers" },
                  { icon: Plane, label: "Bookings" },
                  { icon: CreditCard, label: "Invoices" },
                ].map((item, i) => (
                  <div key={i} className={cn(
                    "flex items-center gap-3 p-2 rounded-md transition-colors",
                    item.active ? "bg-[#d04841]/10 text-[#d04841]" : "text-[#181717]/40"
                  )}>
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium hidden sm:block">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main Area */}
              <div className="flex-1 p-6 sm:p-8 overflow-hidden flex flex-col gap-6 text-left">
                {/* Header row */}
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-xl font-semibold text-[#181717] mb-1">Overview</h2>
                    <p className="text-xs text-[#666666]">Your business at a glance</p>
                  </div>
                  <div className="h-8 w-24 bg-white border border-[#181717]/10 rounded-md shadow-sm hidden sm:block" />
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Active Visas", value: "142", trend: "+12%" },
                    { label: "Monthly Bookings", value: "2,845", trend: "+5%" },
                    { label: "Revenue", value: "₹4.2M", trend: "+18%" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-[#181717]/5 rounded-xl p-4 shadow-sm flex flex-col gap-2">
                      <div className="text-xs font-medium text-[#666666]">{stat.label}</div>
                      <div className="flex items-baseline justify-between">
                        <div className="text-2xl font-bold text-[#181717] tracking-tight">{stat.value}</div>
                        <div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">{stat.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main chart/list area */}
                <div className="flex-1 bg-white border border-[#181717]/5 rounded-xl shadow-sm p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-[#181717]/5 pb-4">
                    <div className="h-4 w-32 bg-[#181717]/10 rounded" />
                    <div className="h-4 w-16 bg-[#181717]/5 rounded hidden sm:block" />
                  </div>
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between pb-3 border-b border-[#181717]/[0.02] last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#181717]/5 flex items-center justify-center">
                          <div className="w-3 h-3 bg-[#181717]/20 rounded-full" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="h-3 w-24 sm:w-40 bg-[#181717]/15 rounded" />
                          <div className="h-2 w-16 sm:w-24 bg-[#181717]/5 rounded" />
                        </div>
                      </div>
                      <div className="h-6 w-16 sm:w-20 bg-emerald-50 border border-emerald-100 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements to break the box (adds depth) */}
            <div 
              className={cn(
                "absolute -right-4 top-32 bg-white border border-[#181717]/10 rounded-xl p-3 shadow-[0_12px_40px_-12px_rgba(24,23,23,0.15)] hidden lg:flex items-center gap-3 transition-all duration-1000 ease-out",
                mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-[#181717]">Booking Confirmed</div>
                <div className="text-[10px] text-[#666666] font-medium">Emirates EK-502</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
