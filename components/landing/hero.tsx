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
      className="relative pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-28 overflow-hidden"
      data-testid="hero-section"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#181717]/10 mb-6 sm:mb-8 bg-white/70 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d04841]" />
              <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-[#181717]/50">
                Travel ERP Platform
              </span>
            </div>

            <h1
              className="text-[2rem] sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.08] mb-5 sm:mb-6"
              data-testid="hero-tagline"
              style={{ letterSpacing: "-1.44px" }}
            >
              Scale your travel business,{" "}
              <span className="ts-gradient-text">not your inbox.</span>
            </h1>

            <p
              className="text-[15px] sm:text-base md:text-lg text-[#666666] leading-relaxed mb-8 sm:mb-10 max-w-md"
              data-testid="hero-subtext"
            >
              Replace the WhatsApp and email chaos with a single, powerful
              platform designed to run your travel empire. Visa, passengers,
              suppliers, GDS, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <button
                className="ts-btn-primary group px-6 sm:px-8 py-3.5 sm:py-4 text-sm rounded-xl"
                data-testid="hero-demo-btn"
                onClick={onDemoClick}
                type="button"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                className="ts-btn-secondary px-6 sm:px-8 py-3.5 sm:py-4 text-sm rounded-xl"
                data-testid="hero-trial-btn"
                href="https://agent.travscale.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Play className="w-3.5 h-3.5" />
                Start Free Trial
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-9 sm:mt-12 pt-6 sm:pt-8 border-t border-[#181717]/10">
              {[
                { value: "500+", label: "Travel Agents" },
                { value: "18K+", label: "Bookings/mo" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div className="group" key={stat.label}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight transition-colors group-hover:text-[#d04841]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#666666] mt-1 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-9 sm:mt-10 lg:hidden">
              <div className="relative overflow-hidden rounded-2xl ts-elevated">
                <Image
                  alt="Travel professionals collaborating"
                  className="w-full h-56 sm:h-72 object-cover"
                  height={640}
                  priority
                  src={HERO_IMAGE}
                  width={960}
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#d04841]" />
              </div>

              <div className="absolute -bottom-4 left-3 right-3 ts-panel px-3 py-2.5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#181717]/45 font-semibold">
                    Platform Status
                  </p>
                  <p className="text-sm font-medium text-[#181717]/80">
                    All systems operational
                  </p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl ts-elevated">
                <Image
                  alt="Travel professionals collaborating"
                  className="w-full h-120 object-cover"
                  height={960}
                  priority
                  src={HERO_IMAGE}
                  width={800}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d04841]" />
              </div>

              <div className="absolute -bottom-6 -left-6 ts-panel p-5 max-w-55">
                <div className="text-xs uppercase tracking-[0.15em] font-bold text-[#181717]/40 mb-2">
                  Platform Status
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">
                    All systems operational
                  </span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border-2 border-[#d04841]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
