import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const HERO_IMAGE =
  "https://images.pexels.com/photos/5945799/pexels-photo-5945799.jpeg?auto=compress&cs=tinysrgb&w=800";

type HeroProps = {
  onDemoClick: () => void;
};

export default function Hero({ onDemoClick }: HeroProps) {
  return (
    <section
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
      data-testid="hero-section"
      style={{ backgroundColor: "#FDFDFC" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-black/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003399]" />
              <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-black/50">
                Travel ERP Platform
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight font-medium leading-[1.08] mb-6"
              data-testid="hero-tagline"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Scale your travel business,{" "}
              <span className="ts-gradient-text">not your inbox.</span>
            </h1>

            <p
              className="text-base md:text-lg text-black/60 leading-relaxed mb-10 max-w-md"
              data-testid="hero-subtext"
            >
              Replace the WhatsApp and email chaos with a single, powerful
              platform designed to run your travel empire. Visa, passengers,
              suppliers, GDS, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group bg-black text-white px-8 py-4 font-medium hover:bg-[#003399] transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-black/10"
                data-testid="hero-demo-btn"
                onClick={onDemoClick}
                type="button"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                className="border border-black/20 text-black px-8 py-4 font-medium hover:bg-black/5 transition-colors flex items-center justify-center gap-2 text-sm"
                data-testid="hero-trial-btn"
                href="https://agent.travscale.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Play className="w-3.5 h-3.5" />
                Start Free Trial
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-black/10">
              {[
                { value: "500+", label: "Travel Agents" },
                { value: "18K+", label: "Bookings/mo" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div className="group" key={stat.label}>
                  <div
                    className="text-2xl md:text-3xl font-semibold tracking-tight transition-colors group-hover:text-[#003399]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-black/50 mt-1 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/5">
                <Image
                  alt="Travel professionals collaborating"
                  className="w-full h-120 object-cover"
                  height={960}
                  priority
                  src={HERO_IMAGE}
                  width={800}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#003399]" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white border border-black/10 p-5 shadow-lg max-w-55">
                <div className="text-xs uppercase tracking-[0.15em] font-bold text-black/40 mb-2">
                  Platform Status
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">
                    All systems operational
                  </span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#003399]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
