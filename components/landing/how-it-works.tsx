import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Key, UserCheck, Zap } from "lucide-react";

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

const setupFacts = [
  { label: "Typical Setup", value: "< 30 mins" },
  { label: "Training Required", value: "Minimal" },
  { label: "Team Visibility", value: "Real-time" },
];

const immediateWins = [
  "One source of truth for passengers, suppliers, and visas.",
  "Faster proposal-to-booking cycle across your whole team.",
  "Clear, real-time status updates without manual follow-up.",
];

export default function HowItWorks() {
  const [stepOne, stepTwo, stepThree] = steps;

  return (
    <section
      className="py-20 sm:py-24 md:py-28 relative overflow-hidden"
      data-testid="how-it-works-section"
      id="how-it-works"
    >
      <div className="absolute inset-0">
        <Image
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
          fill
          sizes="100vw"
          src={BG_IMG}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/65" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">
        <div className="mb-10 sm:mb-14 md:mb-16 max-w-2xl">
          <span className="ts-eyebrow mb-4">How It Works</span>
          <h2
            className="text-[1.85rem] sm:text-3xl md:text-4xl font-medium leading-tight mb-4"
            data-testid="how-it-works-heading"
            style={{ letterSpacing: "-1.44px" }}
          >
            Up and running in{" "}
            <span className="text-[#d04841]">three steps</span>
          </h2>
          <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed">
            No complex onboarding. No lengthy implementation cycles. Get your
            agency on Travscale and see results from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
          <article className="sm:col-span-2 lg:col-span-7 rounded-[32px] border border-[#181717]/10 bg-white p-6 sm:p-7 relative overflow-hidden min-h-75">
            <div className="absolute inset-0 opacity-60 bg-[linear-gradient(130deg,rgba(208,72,65,0.10)_0%,rgba(208,72,65,0.03)_40%,transparent_72%)]" />
            <div className="absolute right-6 top-6 hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#d04841]">
              <span>Go Live Track</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>

            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#181717]/55 mb-6">
                Launch Cockpit
              </p>
              <h3
                className="text-2xl sm:text-[1.95rem] leading-tight font-medium mb-4 max-w-xl"
                style={{ letterSpacing: "-1.44px" }}
              >
                Your onboarding is mapped in one clear operating view.
              </h3>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8 max-w-2xl">
                Travscale brings setup, migration, and day-to-day execution into
                one structured flow. No waiting on long implementation cycles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {setupFacts.map((fact) => (
                  <div
                    className="rounded-xl border border-[#181717]/10 bg-white/80 p-3"
                    key={fact.label}
                  >
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#181717]/45 mb-2">
                      {fact.label}
                    </p>
                    <p className="text-lg">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article
            className="sm:col-span-2 lg:col-span-5 bg-[#2e2d2d] text-white rounded-[32px] border border-[#2e2d2d] p-6 sm:p-7 group relative overflow-hidden min-h-90"
            data-testid={`step-${stepOne.num}`}
          >
            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#d04841]/20 blur-2xl" />
            <div className="absolute -bottom-20 -left-12 w-48 h-48 rounded-full bg-[#d04841]/15 blur-2xl" />

            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between mb-7">
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                  Step {stepOne.num}
                </span>
                <span className="text-4xl sm:text-5xl leading-none text-white/15">
                  {stepOne.num}
                </span>
              </div>

              <div className="w-11 h-11 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:bg-white/20">
                <stepOne.icon className="w-5 h-5 text-white" />
              </div>

              <h3
                className="text-2xl sm:text-[1.85rem] font-medium leading-tight mb-4"
                style={{ letterSpacing: "-1.44px" }}
              >
                {stepOne.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
                {stepOne.description}
              </p>

              <div className="mt-auto pt-8 border-t border-white/15 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-white/65">
                <span>Account Ready</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </article>

          <article
            className="sm:col-span-1 lg:col-span-4 bg-white rounded-2xl border border-[#181717]/10 p-5 sm:p-6 group min-h-60"
            data-testid={`step-${stepTwo.num}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm tracking-[0.18em] text-[#181717]/45">
                {stepTwo.num}
              </span>
              <stepTwo.icon className="w-5 h-5 text-[#d04841]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-medium mb-3 transition-colors group-hover:text-[#d04841]">
              {stepTwo.title}
            </h3>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              {stepTwo.description}
            </p>
          </article>

          <article className="sm:col-span-1 lg:col-span-3 bg-white rounded-2xl border border-[#181717]/10 p-5 sm:p-6 min-h-60 relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-linear-to-r from-[#d04841] via-[#5a82de] to-transparent" />
            <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-[#d04841]/5 blur-xl" />

            <p className="text-[11px] uppercase tracking-[0.16em] text-[#181717]/45 mb-4">
              Immediate Wins
            </p>
            <ul className="space-y-3">
              {immediateWins.map((item) => (
                <li
                  className="flex items-start gap-2.5 text-sm text-[#181717]/65 pb-3 border-b border-[#181717]/10 last:pb-0 last:border-b-0"
                  key={item}
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#d04841]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className="sm:col-span-2 lg:col-span-5 bg-white rounded-2xl border border-[#181717]/10 p-5 sm:p-6 group min-h-60"
            data-testid={`step-${stepThree.num}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm tracking-[0.18em] text-[#181717]/45">
                {stepThree.num}
              </span>
              <stepThree.icon className="w-5 h-5 text-[#d04841]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-medium mb-3 transition-colors group-hover:text-[#d04841]">
              {stepThree.title}
            </h3>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-xl">
              {stepThree.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
