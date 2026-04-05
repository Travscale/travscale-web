import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Travscale eliminated the email mess. We went from 200+ daily WhatsApp messages to a single dashboard. Our team productivity doubled in the first month.",
    name: "Rajesh Mehta",
    role: "Director, Wanderlust Travels",
    location: "Mumbai",
  },
  {
    quote:
      "The GDS integration with BYOK was a game-changer. We kept our Amadeus credentials and got a modern interface on top. No vendor lock-in, no compromises.",
    name: "Sarah Chen",
    role: "Operations Head, Pacific Routes",
    location: "Singapore",
  },
  {
    quote:
      "Visa tracking alone saved us 15 hours a week. No more spreadsheets, no more missed deadlines. Our clients noticed the difference immediately.",
    name: "Ahmad Al-Rashid",
    role: "CEO, Desert Rose Tourism",
    location: "Dubai",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 sm:py-24 md:py-28"
      data-testid="testimonials-section"
      id="testimonials"
      style={{ backgroundColor: "#FDFDFC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-10 sm:mb-14 md:mb-16 max-w-2xl">
          <span className="ts-eyebrow mb-4">Testimonials</span>
          <h2
            className="text-[1.85rem] sm:text-3xl md:text-4xl tracking-tight font-medium leading-tight"
            data-testid="testimonials-heading"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Trusted by agencies{" "}
            <span className="text-[#003399]">worldwide</span>
          </h2>
        </div>

        <div className="ts-scroll-strip flex lg:grid lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x snap-mandatory lg:snap-none">
          {testimonials.map((t, i) => (
            <article
              className={`min-w-[86%] sm:min-w-[68%] lg:min-w-0 snap-start p-6 sm:p-8 md:p-9 flex flex-col justify-between min-h-70 ${
                i === 0
                  ? "bg-black text-white md:col-span-1 border border-black shadow-(--ts-shadow-strong)"
                  : "ts-panel lg:hover:-translate-y-1 transition-transform duration-300"
              }`}
              data-testid={`testimonial-card-${i}`}
              key={t.name}
            >
              <div>
                <div className="mb-6">
                  <Quote
                    className={`w-8 h-8 ${i === 0 ? "text-[#003399]" : "text-black/10"}`}
                  />
                </div>

                <p
                  className={`text-base leading-relaxed flex-1 mb-8 ${i === 0 ? "text-white/80" : "text-black/70"}`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-black/10">
                <div
                  className={`text-sm font-semibold ${i === 0 ? "text-white" : "text-black"}`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {t.name}
                </div>
                <div
                  className={`text-xs mt-1 ${i === 0 ? "text-white/50" : "text-black/50"}`}
                >
                  {t.role} · {t.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
