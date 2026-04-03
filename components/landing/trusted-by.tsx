import { Clock, Globe, Headphones, Shield } from "lucide-react";

const logos = [
  "Wanderlust Travels",
  "Pacific Routes",
  "Desert Rose Tourism",
  "Global Wings",
  "Atlas Journeys",
  "Meridian Travel Co",
  "Skypath Adventures",
  "Voyager Group",
];

const stats = [
  { icon: Globe, value: "32+", label: "Countries" },
  { icon: Shield, value: "SOC2", label: "Compliant" },
  { icon: Clock, value: "<2min", label: "Avg Response" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

export default function TrustedBy() {
  return (
    <section
      className="py-12 sm:py-14 md:py-16 border-t border-b border-black/5"
      data-testid="trusted-by-section"
      style={{ backgroundColor: "#F5F5F0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-14">
          {stats.map((stat) => (
            <div
              className="flex items-center gap-3 sm:gap-4 bg-white border border-black/10 p-3 sm:p-3.5"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              key={stat.label}
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center border border-black/10">
                <stat.icon className="w-4 h-4 text-[#003399]" />
              </div>
              <div>
                <div
                  className="text-xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-black/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span className="uppercase text-[10px] tracking-[0.2em] font-bold text-black/30 block mb-6">
            Trusted by leading travel agencies
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-3 sm:gap-y-4">
            {logos.map((name) => (
              <span
                className="text-xs sm:text-sm font-semibold text-black/20 tracking-wider uppercase"
                key={name}
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
