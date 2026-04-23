import {
  ArrowRightLeft,
  FileText,
  Globe2,
  Receipt,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Passenger Management",
    description:
      "Track passengers, docs, and trip records in a clean, searchable workspace.",
  },
  {
    icon: Receipt,
    title: "Smart Invoicing",
    description:
      "Generate agency-ready invoices with taxes, due dates, and payment status at a glance.",
  },
  {
    icon: Globe2,
    title: "Visa Workflow",
    description:
      "Handle visa requests, approvals, and timelines with automatic status tracking.",
  },
  {
    icon: ArrowRightLeft,
    title: "Supplier Operations",
    description:
      "Centralize supplier terms, booking costs, and communication without scattered chats.",
  },
  {
    icon: FileText,
    title: "Itinerary Builder",
    description:
      "Create polished itineraries in seconds and keep updates synced across your team.",
  },
  {
    icon: ShieldCheck,
    title: "Agency Control",
    description:
      "Role-based access and audit visibility help you scale without operational blind spots.",
  },
];

export default function Features() {
  return (
    <section
      className="py-20 sm:py-24 md:py-28"
      data-testid="features-section"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-10 sm:mb-14 md:mb-16 max-w-2xl">
          <span className="ts-eyebrow mb-4">Features</span>
          <h2
            className="text-[1.85rem] sm:text-3xl md:text-4xl font-medium leading-tight mb-4"
            style={{ letterSpacing: "-1.44px" }}
          >
            Built for daily travel operations, not just dashboards
          </h2>
          <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">
            Every workflow in Travscale is designed to replace inbox chaos with
            clear processes your whole agency can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature) => (
            <article
              className="ts-surface-card bg-white border border-[#181717]/10 p-5 sm:p-6 md:p-7 rounded-2xl hover:border-[#d04841]/25"
              key={feature.title}
            >
              <div className="w-10 h-10 bg-[#eeebea] rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-5 h-5 text-[#d04841]" />
              </div>
              <h3 className="text-xl font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
