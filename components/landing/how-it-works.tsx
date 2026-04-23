import { Key, UserCheck, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Key,
    title: "Connect Your Tools",
    description: "Bring your own GDS keys, import existing data, and configure your agency settings. Setup takes under 30 minutes.",
  },
  {
    num: "02",
    icon: UserCheck,
    title: "Manage Everything",
    description: "Passengers, visas, suppliers, itineraries — everything flows through one unified dashboard. No more scattered chats.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Scale With Confidence",
    description: "Automate invoicing, generate itineraries in seconds, and track visa statuses in real-time while your team focuses on growth.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 sm:py-24 md:py-32"
      data-testid="how-it-works-section"
      id="how-it-works"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="ts-eyebrow mb-4">How It Works</span>
          <h2
            className="text-[1.85rem] sm:text-3xl md:text-[2.75rem] font-medium leading-[1.12] mb-5"
            data-testid="how-it-works-heading"
            style={{ letterSpacing: "-1.44px" }}
          >
            Up and running in{" "}
            <span className="text-[#d04841]">three steps</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">
            No complex onboarding. No lengthy implementation cycles. Get your agency on Travscale and see results from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[72px] left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-[#181717]/10 z-0" />

          {steps.map((step, i) => (
            <div className="relative z-10 group" key={step.num}>
              <div className="bg-white rounded-2xl border border-[#181717]/8 p-7 sm:p-8 md:p-9 transition-all duration-400 hover:border-[#d04841]/20 hover:shadow-[0_12px_48px_-12px_rgba(208,72,65,0.1)]">
                {/* Step number circle */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#2e2d2d] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#d04841]">
                    <span className="text-white text-lg font-medium">{step.num}</span>
                  </div>
                  <step.icon className="w-5 h-5 text-[#181717]/20 transition-colors group-hover:text-[#d04841]" />
                </div>

                <h3
                  className="text-xl sm:text-2xl font-medium mb-3 tracking-tight"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#666666] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
