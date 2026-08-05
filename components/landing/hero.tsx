"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

import HeroPortalCarousel from "@/components/molecules/landing/hero-portal-carousel";

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
            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-8 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d04841] animate-pulse-subtle"></span>
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
            Next-Gen Travel Operations
          </span>
        </div>

        {/* Headline - masked line-by-line reveal */}
        <h1 
          className={cn(
            "text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.05] text-[#181717] tracking-tight mb-8 mx-auto max-w-5xl"
          )}
          style={{ letterSpacing: "-0.03em" }}
        >
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                mounted ? "translate-y-0" : "translate-y-full"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              Scale your travel business,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                mounted ? "translate-y-0" : "translate-y-full"
              )}
              style={{ transitionDelay: "180ms" }}
            >
              <span className="relative inline-block">
                <span className="relative z-10 text-[#d04841]">not your inbox.</span>
                <span
                  className={cn(
                    "absolute bottom-1 left-0 w-full h-[0.15em] bg-[#d04841]/10 -z-10 rounded-full origin-left transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    mounted ? "scale-x-100" : "scale-x-0"
                  )}
                  style={{ transitionDelay: "480ms" }}
                />
              </span>
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className={cn(
            "text-base sm:text-lg lg:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto mb-10 transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          Replace WhatsApp and email chaos with a single platform designed to run your travel empire. Manage visas, passengers, suppliers, and GDS in one unified workspace.
        </p>

        {/* CTAs */}
        <div 
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="https://cal.com/abubakarshaikh/travscale-product-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#232222] px-8 text-[15px] font-medium text-white transition-all hover:bg-[#181717] hover:shadow-[0_8px_24px_-6px_rgba(35,34,34,0.3)] active:scale-[0.97] active:duration-100 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            Book a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="https://agent.travscale.com"
            className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#181717]/10 bg-white px-8 text-[15px] font-medium text-[#181717] transition-all hover:border-[#181717]/20 hover:bg-[#f9f7f6] active:scale-[0.97] active:duration-100 cursor-pointer"
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
            "mt-10 flex items-center justify-center gap-4 text-sm font-medium text-[#666666] transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]",
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
                className={cn(
                  "h-6 w-6 rounded-full border-2 border-[#f9f7f6] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-px"
                )}
                style={{ transitionDelay: `${450 + i * 30}ms` }}
              />
            ))}
          </div>
          <span className="hidden sm:block">Trusted by 500+ agencies</span>
        </div>

        {/* High-Fidelity Portal Carousel Showcase */}
        <div 
          className={cn(
            "mt-16 sm:mt-24 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
            mounted ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <HeroPortalCarousel />
        </div>
      </div>
    </section>
  );
}
