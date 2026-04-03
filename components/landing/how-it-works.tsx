import Image from "next/image";
import { Key, UserCheck, Zap } from "lucide-react";

const BG_IMG =
  "https://images.pexels.com/photos/31732696/pexels-photo-31732696.jpeg?auto=compress&cs=tinysrgb&w=1200";

const steps = [
  {
    num: "01",
    icon: Key,
    title: "Connect Your Tools",
    description:
      "Bring your own GDS keys (Amadeus), import existing data, and configure your agency settings. Setup takes under 30 minutes.",
  },
  {
    num: "02",
    icon: UserCheck,
    title: "Manage Everything Centrally",
    description:
      "Passengers, visas, suppliers, itineraries, everything flows through one unified dashboard. No more scattered WhatsApp groups or lost emails.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Scale With Confidence",
    description:
      "Automate invoicing, generate itineraries in seconds, and track visa statuses in real-time while your team focuses on growth.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="how-it-works-section"
      id="how-it-works"
    >
      <div className="absolute inset-0">
        <Image
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
          fill
          sizes="100vw"
          src={BG_IMG}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="mb-20 max-w-2xl">
          <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-black/40 block mb-4">
            How It Works
          </span>
          <h2
            className="text-3xl md:text-4xl tracking-tight font-medium leading-tight mb-4"
            data-testid="how-it-works-heading"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Up and running in{" "}
            <span className="text-[#003399]">three steps</span>
          </h2>
          <p className="text-base text-black/60 leading-relaxed">
            No complex onboarding. No lengthy implementation cycles. Get your
            agency on Travscale and see results from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div
              className="relative group"
              data-testid={`step-${step.num}`}
              key={step.num}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] -right-10 h-px bg-black/10" />
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-black flex items-center justify-center shrink-0">
                  <span
                    className="text-white text-sm font-bold tracking-wider"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="h-px flex-1 bg-black/10" />
              </div>

              <div className="w-10 h-10 bg-[#F5F5F0] flex items-center justify-center mb-5 transition-colors group-hover:bg-[#e9eefc]">
                <step.icon className="w-5 h-5 text-[#003399]" />
              </div>

              <h3
                className="text-xl font-medium mb-3 transition-colors group-hover:text-[#003399]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
