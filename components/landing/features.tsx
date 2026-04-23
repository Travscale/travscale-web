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
    description: "Track passengers, docs, and trip records in a clean, searchable workspace.",
    span: "lg:col-span-4",
  },
  {
    icon: Receipt,
    title: "Smart Invoicing",
    description: "Generate agency-ready invoices with taxes, due dates, and payment status at a glance.",
    span: "lg:col-span-4",
  },
  {
    icon: Globe2,
    title: "Visa Workflow",
    description: "Handle visa requests, approvals, and timelines with automatic status tracking.",
    span: "lg:col-span-4",
  },
  {
    icon: ArrowRightLeft,
    title: "Supplier Operations",
    description: "Centralize supplier terms, booking costs, and communication without scattered chats.",
    span: "lg:col-span-6",
  },
  {
    icon: FileText,
    title: "Itinerary Builder",
    description: "Create polished itineraries in seconds and keep updates synced across your team.",
    span: "lg:col-span-3",
  },
  {
    icon: ShieldCheck,
    title: "Agency Control",
    description: "Role-based access and audit visibility help you scale without operational blind spots.",
    span: "lg:col-span-3",
  },
];

export default function Features() {
  return (
    <section
      className="py-20 sm:py-24 md:py-32"
      data-testid="features-section"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-2xl">
          <span className="ts-eyebrow mb-4">Features</span>
          <h2
            className="text-[1.85rem] sm:text-3xl md:text-[2.75rem] font-medium leading-[1.12] mb-5"
            style={{ letterSpacing: "-1.44px" }}
          >
            Built for daily travel operations, not just dashboards
          </h2>
          <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">
            Every workflow in Travscale is designed to replace inbox chaos with clear processes your whole agency can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {features.map((feature) => (
            <article
              className={`group relative bg-white border border-[#181717]/8 p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-400 hover:border-[#d04841]/20 hover:shadow-[0_8px_40px_-12px_rgba(208,72,65,0.08)] ${feature.span}`}
              key={feature.title}
            >
              <div className="w-11 h-11 bg-[#eeebea] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#ffd3cf]/40">
                <feature.icon className="w-5 h-5 text-[#d04841] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2.5 tracking-tight">
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
