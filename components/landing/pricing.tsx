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
  price?: {
    monthly: number;
    yearly: number;
  };
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "For solo travel agents getting organized.",
    price: {
      monthly: 3999,
      yearly: 39990,
    },
    features: [
      "Passenger management",
      "Visa tracking",
      "GST-ready invoicing",
      "Email support",
      "Up to 200 bookings/mo",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    description: "For growing agencies that need everything.",
    price: {
      monthly: 10999,
      yearly: 109990,
    },
    features: [
      "Everything in Starter",
      "Supplier management",
      "Itinerary builder",
      "GDS integration (BYOK)",
      "Priority support",
      "Unlimited bookings",
      "Custom branding",
    ],
    cta: "Book a Demo",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large agencies and TMCs with custom needs.",
    features: [
      "Everything in Professional",
      "Multi-branch support",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

type PricingProps = {
  onDemoClick: () => void;
};

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function Pricing({ onDemoClick }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const billingMeta = useMemo(
    () => ({
      monthly: {
        period: "/agent/mo",
        note: "Billed monthly",
      },
      yearly: {
        period: "/agent/yr",
        note: "Billed yearly (save 2 months)",
      },
    }),
    [],
  );

  return (
    <section
      className="py-20 sm:py-24 md:py-28"
      data-testid="pricing-section"
      id="pricing"
      style={{ backgroundColor: "#F5F5F0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 max-w-2xl mx-auto">
          <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-black/40 block mb-4">
            Pricing
          </span>
          <h2
            className="text-[1.85rem] sm:text-3xl md:text-4xl tracking-tight font-medium leading-tight mb-4"
            data-testid="pricing-heading"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Simple pricing, <span className="text-[#003399]">no surprises</span>
          </h2>
          <p className="text-[15px] sm:text-base text-black/60 leading-relaxed">
            Choose the plan that fits your agency. All prices are in INR and
            optimized for Indian travel teams.
          </p>

          <div className="mt-7 w-full sm:w-auto sm:inline-flex items-center rounded-2xl sm:rounded-full border border-black/10 bg-white p-1.5 grid grid-cols-2">
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-black text-white"
                  : "text-black/65 hover:text-black"
              }`}
              onClick={() => setBillingCycle("monthly")}
              type="button"
            >
              Monthly Billing
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "bg-black text-white"
                  : "text-black/65 hover:text-black"
              }`}
              onClick={() => setBillingCycle("yearly")}
              type="button"
            >
              Yearly Billing
            </button>
          </div>

          <p className="mt-3 text-xs text-black/45 uppercase tracking-[0.14em]">
            Taxes extra as applicable
          </p>
        </div>

        <div className="ts-scroll-strip flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory md:snap-none">
          {plans.map((plan) => (
            <div
              className={`relative min-w-[86%] sm:min-w-[64%] md:min-w-0 snap-start flex flex-col p-6 sm:p-7 md:p-9 transition-transform duration-300 md:hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-black text-white shadow-2xl shadow-black/20"
                  : "bg-white border border-black/10 shadow-lg shadow-black/4"
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              key={plan.name}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6 sm:left-7 md:left-8">
                  <span className="bg-[#003399] text-white text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-1.5">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-7 sm:mb-8">
                <h3
                  className={`text-xl font-medium mb-2 ${plan.highlight ? "text-white" : "text-black"}`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlight ? "text-white/60" : "text-black/50"}`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl sm:text-4xl font-semibold tracking-tight ${plan.highlight ? "text-white" : "text-black"}`}
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {plan.price
                      ? inr.format(plan.price[billingCycle])
                      : "Custom"}
                  </span>
                  {plan.price && (
                    <span
                      className={`text-sm ${plan.highlight ? "text-white/50" : "text-black/40"}`}
                    >
                      {billingMeta[billingCycle].period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs mt-2 uppercase tracking-[0.12em] ${plan.highlight ? "text-white/45" : "text-black/40"}`}
                >
                  {plan.price
                    ? billingMeta[billingCycle].note
                    : "Volume-based pricing"}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-3" key={feature}>
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#003399]" />
                    <span
                      className={`text-sm ${plan.highlight ? "text-white/80" : "text-black/70"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 sm:py-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors rounded-xl ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-[#003399]"
                }`}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                onClick={onDemoClick}
                type="button"
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
