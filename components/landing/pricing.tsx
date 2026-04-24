"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";
type Plan = {
  name: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
  price?: { monthly: number; yearly: number };
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "For solo travel agents getting organized.",
    price: { monthly: 3999, yearly: 39990 },
    features: ["Passenger management", "Visa tracking", "GST-ready invoicing", "Email support", "Up to 200 bookings/mo"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    description: "For growing agencies that need everything.",
    price: { monthly: 10999, yearly: 109990 },
    features: ["Everything in Starter", "Supplier management", "Itinerary builder", "GDS integration (BYOK)", "Priority support", "Unlimited bookings", "Custom branding"],
    cta: "Book a Demo",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large agencies and TMCs with custom needs.",
    features: ["Everything in Professional", "Multi-branch support", "API access", "Dedicated account manager", "Custom integrations", "SLA guarantee", "On-premise option"],
    cta: "Contact Sales",
    highlight: false,
  },
];

type PricingProps = { onDemoClick: () => void };

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function Pricing({ onDemoClick }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");
  
  const billingMeta = useMemo(() => ({
    monthly: { period: "/mo", note: "Billed monthly per agent" },
    yearly: { period: "/mo", note: "Billed yearly (save 16%)" },
  }), []);

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      data-testid="pricing-section"
      id="pricing"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
              Clear Pricing
            </span>
          </div>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-6">
            Simple pricing, <br className="hidden md:block" />
            <span className="text-[#666666]">no hidden surprises.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Choose the plan that fits your agency. All prices are in INR and optimized for Indian travel teams.
          </p>

          {/* Premium Billing Toggle */}
          <div className="mt-10 flex flex-col items-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm relative">
              <button
                className={cn(
                  "relative z-10 px-8 py-3 text-sm font-semibold transition-colors duration-300 rounded-full",
                  billingCycle === "monthly" ? "text-white" : "text-[#181717]/60 hover:text-[#181717]"
                )}
                onClick={() => setBillingCycle("monthly")}
                type="button"
              >
                Monthly
              </button>
              <button
                className={cn(
                  "relative z-10 px-8 py-3 text-sm font-semibold transition-colors duration-300 rounded-full flex items-center gap-2",
                  billingCycle === "yearly" ? "text-white" : "text-[#181717]/60 hover:text-[#181717]"
                )}
                onClick={() => setBillingCycle("yearly")}
                type="button"
              >
                Yearly
              </button>
              
              {/* Sliding Pill */}
              <div 
                className={cn(
                  "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#181717] rounded-full transition-transform duration-500 ease-out shadow-md",
                  billingCycle === "monthly" ? "translate-x-0" : "translate-x-full"
                )} 
              />
            </div>
            
            {/* Animated Save Badge */}
            <div className={cn(
              "mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full transition-all duration-500",
              billingCycle === "yearly" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            )}>
              <Sparkles className="w-3.5 h-3.5" />
              Save 2 months free
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
          {plans.map((plan) => {
            const isPro = plan.highlight;
            const price = plan.price ? plan.price[billingCycle] : null;
            // For yearly, display the monthly equivalent
            const displayPrice = billingCycle === "yearly" && price ? price / 12 : price;

            return (
              <div
                className={cn(
                  "relative flex flex-col p-8 sm:p-10 rounded-[2rem] transition-all duration-500",
                  isPro
                    ? "bg-[#181717] text-white border border-white/10 shadow-[0_30px_80px_-24px_rgba(24,23,23,0.4)] lg:scale-105 z-10"
                    : "bg-white border border-[#181717]/10 hover:border-[#181717]/20 hover:shadow-[0_20px_60px_-16px_rgba(24,23,23,0.05)] z-0"
                )}
                data-testid={`pricing-card-${plan.name.toLowerCase()}`}
                key={plan.name}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-max">
                    <span className="bg-gradient-to-r from-[#d04841] to-rose-500 text-white text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2 rounded-full shadow-lg shadow-[#d04841]/25">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={cn("text-2xl font-semibold mb-3 tracking-tight", isPro ? "text-white" : "text-[#181717]")}>
                    {plan.name}
                  </h3>
                  <p className={cn("text-sm leading-relaxed", isPro ? "text-white/60" : "text-[#666666]")}>
                    {plan.description}
                  </p>
                </div>

                <div className={cn("mb-8 pb-8 border-b", isPro ? "border-white/10" : "border-[#181717]/10")}>
                  <div className="flex items-start gap-1">
                    {displayPrice ? (
                      <>
                        <span className={cn("text-5xl font-bold tracking-tighter", isPro ? "text-white" : "text-[#181717]")}>
                          {inr.format(displayPrice)}
                        </span>
                        <div className="flex flex-col justify-end h-[2.5rem] pb-1">
                           <span className={cn("text-sm font-medium", isPro ? "text-white/40" : "text-[#181717]/40")}>
                             {billingMeta[billingCycle].period}
                           </span>
                        </div>
                      </>
                    ) : (
                      <span className={cn("text-5xl font-bold tracking-tighter", isPro ? "text-white" : "text-[#181717]")}>
                        Custom
                      </span>
                    )}
                  </div>
                  <p className={cn("text-[11px] mt-3 uppercase tracking-widest font-semibold", isPro ? "text-white/30" : "text-[#181717]/30")}>
                    {displayPrice ? billingMeta[billingCycle].note : "Volume-based pricing"}
                  </p>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li className="flex items-start gap-3" key={feature}>
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", isPro ? "bg-white/10" : "bg-[#d04841]/10")}>
                        <Check className={cn("w-3 h-3", isPro ? "text-white" : "text-[#d04841]")} />
                      </div>
                      <span className={cn("text-[15px]", isPro ? "text-white/80" : "text-[#181717]/80")}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "group w-full py-4 text-[15px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 rounded-xl",
                    isPro
                      ? "bg-white text-[#181717] hover:bg-[#f9f7f6] hover:scale-[1.02]"
                      : "bg-[#f9f7f6] text-[#181717] hover:bg-[#181717] hover:text-white"
                  )}
                  onClick={onDemoClick}
                  type="button"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
