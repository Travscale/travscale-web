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
    <section
      className="py-20 sm:py-24 md:py-32"
      data-testid="pricing-section"
      id="pricing"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="ts-eyebrow mb-4">Pricing</span>
          <h2
            className="text-[1.85rem] sm:text-3xl md:text-[2.75rem] font-medium leading-[1.12] mb-5"
            data-testid="pricing-heading"
            style={{ letterSpacing: "-1.44px" }}
          >
            Simple pricing, <span className="text-[#d04841]">no surprises</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">
            Choose the plan that fits your agency. All prices are in INR and optimized for Indian travel teams.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full border border-[#181717]/10 bg-white">
            <button
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${billingCycle === "monthly" ? "bg-[#2e2d2d] text-white shadow-sm" : "text-[#181717]/50 hover:text-[#181717]"}`}
              onClick={() => setBillingCycle("monthly")}
              type="button"
            >
              Monthly
            </button>
            <button
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${billingCycle === "yearly" ? "bg-[#2e2d2d] text-white shadow-sm" : "text-[#181717]/50 hover:text-[#181717]"}`}
              onClick={() => setBillingCycle("yearly")}
              type="button"
            >
              Yearly
            </button>
          </div>
          <p className="mt-3 text-[11px] text-[#181717]/35 uppercase tracking-[0.14em]">Taxes extra as applicable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {plans.map((plan) => (
            <div
              className={`relative flex flex-col p-7 sm:p-8 md:p-10 rounded-2xl transition-all duration-400 ${
                plan.highlight
                  ? "bg-[#2e2d2d] text-white border border-[#2e2d2d] shadow-[0_16px_64px_-16px_rgba(24,23,23,0.25)]"
                  : "bg-white border border-[#181717]/8 hover:border-[#d04841]/15 hover:shadow-[0_8px_40px_-12px_rgba(208,72,65,0.08)]"
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              key={plan.name}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-7 sm:left-8">
                  <span className="bg-[#d04841] text-white text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8 sm:mb-10">
                <h3 className={`text-xl font-medium mb-2 ${plan.highlight ? "text-white" : "text-[#181717]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-7 ${plan.highlight ? "text-white/50" : "text-[#666666]"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl sm:text-5xl font-medium tracking-tight ${plan.highlight ? "text-white" : "text-[#181717]"}`}>
                    {plan.price ? inr.format(plan.price[billingCycle]) : "Custom"}
                  </span>
                  {plan.price && (
                    <span className={`text-sm ${plan.highlight ? "text-white/40" : "text-[#181717]/35"}`}>
                      {billingMeta[billingCycle].period}
                    </span>
                  )}
                </div>
                <p className={`text-[11px] mt-2 uppercase tracking-[0.12em] ${plan.highlight ? "text-white/35" : "text-[#181717]/30"}`}>
                  {plan.price ? billingMeta[billingCycle].note : "Volume-based pricing"}
                </p>
              </div>

              <ul className="flex-1 space-y-3.5 mb-10">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-3" key={feature}>
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#d04841]" />
                    <span className={`text-sm ${plan.highlight ? "text-white/75" : "text-[#181717]/65"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`group w-full py-4 text-[15px] font-medium flex items-center justify-center gap-2.5 transition-all duration-300 rounded-xl border ${
                  plan.highlight
                    ? "bg-white text-[#181717] border-white hover:bg-[#d04841] hover:text-white hover:border-[#d04841]"
                    : "bg-[#2e2d2d] text-white border-[#2e2d2d] hover:bg-[#d04841] hover:border-[#d04841]"
                }`}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                onClick={onDemoClick}
                type="button"
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
