"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

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
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const billingMeta = useMemo(() => ({
    monthly: { period: "/agent/mo", note: "Billed monthly" },
    yearly: { period: "/agent/yr", note: "Billed yearly (save 2 months)" },
  }), []);

  return (
    <section className="py-20 sm:py-24 md:py-28" data-testid="pricing-section" id="pricing" style={{ backgroundColor: "#f9f7f6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 max-w-2xl mx-auto">
          <span className="ts-eyebrow mb-4">Pricing</span>
          <h2 className="text-[1.85rem] sm:text-3xl md:text-4xl font-medium leading-tight mb-4" data-testid="pricing-heading" style={{ letterSpacing: "-1.44px" }}>
            Simple pricing, <span className="text-[#d04841]">no surprises</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">Choose the plan that fits your agency. All prices are in INR and optimized for Indian travel teams.</p>
          <div className="mt-7 w-full sm:w-auto sm:inline-grid items-center ts-panel p-1 grid grid-cols-2 rounded-full">
            <button className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${billingCycle === "monthly" ? "bg-[#232222] text-white" : "text-[#181717]/65 hover:text-[#181717] hover:bg-[#181717]/4"}`} onClick={() => setBillingCycle("monthly")} type="button">Monthly Billing</button>
            <button className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${billingCycle === "yearly" ? "bg-[#232222] text-white" : "text-[#181717]/65 hover:text-[#181717] hover:bg-[#181717]/4"}`} onClick={() => setBillingCycle("yearly")} type="button">Yearly Billing</button>
          </div>
          <p className="mt-3 text-xs text-[#181717]/45 uppercase tracking-[0.14em]">Taxes extra as applicable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {plans.map((plan) => (
            <div className={`relative flex flex-col p-6 sm:p-7 md:p-9 rounded-[32px] transition-transform duration-300 md:hover:-translate-y-1 ${plan.highlight ? "bg-[#2e2d2d] text-white border border-[#2e2d2d] shadow-(--ts-shadow-strong)" : "ts-panel"}`} data-testid={`pricing-card-${plan.name.toLowerCase()}`} key={plan.name}>
              {plan.badge && (<div className="absolute -top-3 left-6 sm:left-7 md:left-8"><span className="bg-[#d04841] text-white text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-1.5 rounded-full">{plan.badge}</span></div>)}
              <div className="mb-7 sm:mb-8">
                <h3 className={`text-xl font-medium mb-2 ${plan.highlight ? "text-white" : "text-[#181717]"}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-white/60" : "text-[#666666]"}`}>{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl sm:text-4xl font-medium tracking-tight ${plan.highlight ? "text-white" : "text-[#181717]"}`}>{plan.price ? inr.format(plan.price[billingCycle]) : "Custom"}</span>
                  {plan.price && <span className={`text-sm ${plan.highlight ? "text-white/50" : "text-[#181717]/40"}`}>{billingMeta[billingCycle].period}</span>}
                </div>
                <p className={`text-xs mt-2 uppercase tracking-[0.12em] ${plan.highlight ? "text-white/45" : "text-[#181717]/40"}`}>{plan.price ? billingMeta[billingCycle].note : "Volume-based pricing"}</p>
              </div>
              <ul className="flex-1 space-y-3 mb-10">
                {plan.features.map((feature) => (<li className="flex items-start gap-3" key={feature}><Check className="w-4 h-4 mt-0.5 shrink-0 text-[#d04841]" /><span className={`text-sm ${plan.highlight ? "text-white/80" : "text-[#181717]/70"}`}>{feature}</span></li>))}
              </ul>
              <button className={`w-full py-3.5 sm:py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors rounded-xl border ${plan.highlight ? "bg-white text-[#181717] border-white hover:bg-white/90" : "bg-[#232222] text-white border-[#232222] hover:bg-[#d04841] hover:border-[#d04841]"}`} data-testid={`pricing-cta-${plan.name.toLowerCase()}`} onClick={onDemoClick} type="button">{plan.cta}<ArrowRight className="w-3.5 h-3.5" /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
