"use client";

import { useState } from "react";
import {
  Building2,
  BriefcaseBusiness,
  Globe2,
  PlaneTakeoff,
} from "lucide-react";

const useCases = [
  {
    id: "leisure",
    icon: PlaneTakeoff,
    title: "Leisure Agencies",
    subtitle: "Handle high-volume seasonal bookings without chaos.",
    points: [
      "Shared trip records across sales and operations",
      "One-click itinerary updates for passengers",
      "Live booking status without spreadsheet handoffs",
    ],
    metric: "3x faster",
    metricLabel: "booking turnaround",
  },
  {
    id: "corporate",
    icon: BriefcaseBusiness,
    title: "Corporate Travel Desks",
    subtitle: "Keep approvals, policy controls, and SLA execution in sync.",
    points: [
      "Role-based access for finance, ops, and account teams",
      "Audit-ready invoicing with complete activity trails",
      "Supplier and contract visibility in one timeline",
    ],
    metric: "42% less",
    metricLabel: "ops overhead",
  },
  {
    id: "visa",
    icon: Globe2,
    title: "Visa Specialists",
    subtitle: "Track document pipelines and submission dates end-to-end.",
    points: [
      "Deadline-first visa workflow with status alerts",
      "Passenger document checks before submission",
      "Internal SLA tracking for every case stage",
    ],
    metric: "99.2%",
    metricLabel: "deadline compliance",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section
      className="py-20 sm:py-24 md:py-32"
      data-testid="use-cases-section"
      id="use-cases"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="ts-eyebrow mb-4">Use Cases</span>
            <h2
              className="text-[1.85rem] sm:text-3xl md:text-[2.75rem] font-medium leading-[1.12] mb-5"
              style={{ letterSpacing: "-1.44px" }}
            >
              Designed for real travel workflows
            </h2>
            <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">
              Pick your operating model and run it on a platform built for travel complexity from day one.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-[#181717]/10 bg-white px-4 py-2.5 self-start md:self-auto shrink-0">
            <Building2 className="w-4 h-4 text-[#d04841]" />
            <span className="text-sm text-[#181717]/70">Multi-branch ready</span>
          </div>
        </div>

        {/* Tab selector */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-8 sm:mb-10">
          {useCases.map((uc, i) => (
            <button
              className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                i === active
                  ? "bg-[#2e2d2d] text-white border-[#2e2d2d] shadow-lg"
                  : "bg-white text-[#181717]/70 border-[#181717]/10 hover:border-[#181717]/20 hover:text-[#181717]"
              }`}
              key={uc.id}
              onClick={() => setActive(i)}
              type="button"
            >
              <uc.icon className="w-4 h-4" />
              {uc.title}
            </button>
          ))}
        </div>

        {/* Active card */}
        <div className="bg-white rounded-2xl border border-[#181717]/8 p-7 sm:p-9 md:p-12 transition-all duration-400">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="w-12 h-12 bg-[#ffd3cf] text-[#d04841] rounded-xl flex items-center justify-center mb-6 border border-[#d04841]/10">
                <current.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3" style={{ letterSpacing: "-0.5px" }}>
                {current.title}
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed mb-8">
                {current.subtitle}
              </p>

              <div className="pt-6 border-t border-[#181717]/8">
                <p className="text-4xl sm:text-5xl font-medium tracking-tight text-[#181717]">
                  {current.metric}
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-[#181717]/40 mt-2">
                  {current.metricLabel}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                {current.points.map((point) => (
                  <li
                    className="flex items-start gap-4 text-[15px] text-[#181717]/70"
                    key={point}
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#d04841] shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
