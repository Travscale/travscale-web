import {
  Building2,
  BriefcaseBusiness,
  Globe2,
  PlaneTakeoff,
} from "lucide-react";

const useCases = [
  {
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
  return (
    <section
      className="py-20 sm:py-24 md:py-28 border-y border-[#181717]/5"
      data-testid="use-cases-section"
      id="use-cases"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-10 sm:mb-14 md:mb-16 flex flex-col gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="ts-eyebrow mb-4">Use Cases</span>
            <h2
              className="text-[1.85rem] sm:text-3xl md:text-4xl font-medium leading-tight mb-4"
              style={{ letterSpacing: "-1.44px" }}
            >
              Designed for real travel workflows, not generic CRMs
            </h2>
            <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">
              Pick your operating model and run it on a platform built for
              travel complexity from day one.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#181717]/10 bg-white px-4 py-2.5 self-start md:self-auto">
            <Building2 className="w-4 h-4 text-[#d04841]" />
            <span className="text-sm text-[#181717]/70">
              Multi-branch ready from launch
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {useCases.map((item) => (
            <article
              className="ts-surface-card bg-white rounded-2xl border border-[#181717]/10 p-5 sm:p-6 md:p-7"
              key={item.title}
            >
              <div className="w-11 h-11 bg-[#ffd3cf] text-[#d04841] rounded-xl flex items-center justify-center mb-5 border border-[#d04841]/10">
                <item.icon className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-medium tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6">
                {item.subtitle}
              </p>

              <ul className="space-y-2.5 mb-8">
                {item.points.map((point) => (
                  <li
                    className="text-sm text-[#181717]/70 flex items-start gap-2.5"
                    key={point}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d04841]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-[#181717]/10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-3xl font-medium tracking-tight">
                    {item.metric}
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#181717]/45 mt-1">
                    {item.metricLabel}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
