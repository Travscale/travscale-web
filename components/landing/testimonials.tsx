"use client";

const ROW_1 = [
  { logo: "Wanderlust Travels", quote: "Travscale eliminated the email mess. We went from 200+ daily WhatsApp messages to a single dashboard. Our team productivity doubled in the first month.", name: "Rajesh Mehta", role: "Director, Wanderlust Travels", avatar: "https://i.pravatar.cc/150?img=12", featured: false },
  { logo: "Pacific Routes", quote: "The GDS integration with BYOK was a game-changer. We kept our Amadeus credentials and got a modern interface on top. No vendor lock-in, no compromises.", name: "Sarah Chen", role: "Operations Head, Pacific Routes", avatar: "https://i.pravatar.cc/150?img=33", featured: true },
  { logo: "Desert Rose Tourism", quote: "Visa tracking alone saved us 15 hours a week. No more spreadsheets, no more missed deadlines. Our clients noticed the difference immediately.", name: "Ahmad Al-Rashid", role: "CEO, Desert Rose Tourism", avatar: "https://i.pravatar.cc/150?img=45", featured: false },
  { logo: "Global Wings", quote: "Support was unreal. We went from mockup to production without friction. The team genuinely cares about travel agencies.", name: "Priya Nair", role: "CTO, Global Wings", avatar: "https://i.pravatar.cc/150?img=9", featured: false },
  { logo: "Atlas Journeys", quote: "We use it across three branches now. Consistent quality at a speed we didn't expect from an ERP platform.", name: "Daniel Frost", role: "COO, Atlas Journeys", avatar: "https://i.pravatar.cc/150?img=68", featured: true },
  { logo: "Meridian Travel Co", quote: "Open, composable, and powerful. Our operations team actually enjoys working with this system every day.", name: "Elena Ruiz", role: "Ops Manager, Meridian Travel Co", avatar: "https://i.pravatar.cc/150?img=16", featured: false },
  { logo: "Skypath Adventures", quote: "The passenger management module is brilliant. We handle 200+ group bookings monthly with zero data loss.", name: "James Okonkwo", role: "Product Ops, Skypath Adventures", avatar: "https://i.pravatar.cc/150?img=52", featured: false },
];

const ROW_2 = [
  { logo: "Voyager Group", quote: "Conversion on our booking flow jumped 40% after migrating. The supplier management tools are leagues ahead of what we had.", name: "Chris Meyer", role: "Growth Lead, Voyager Group", avatar: "https://i.pravatar.cc/150?img=27", featured: false },
  { logo: "Horizon Expeditions", quote: "Automated invoicing and real-time supplier pricing — we saved 20 hours per week on manual tasks alone.", name: "Nina Volkov", role: "Founder, Horizon Expeditions", avatar: "https://i.pravatar.cc/150?img=44", featured: false },
  { logo: "SilkRoute Travel", quote: "The multi-branch support is exceptional. We standardized processes across our 6 offices within two weeks.", name: "Marcus Webb", role: "Regional Director, SilkRoute Travel", avatar: "https://i.pravatar.cc/150?img=60", featured: true },
  { logo: "TerraVista Tours", quote: "This is the testimonial we'd give to anyone — Travscale understood our pain points before we even explained them.", name: "Amelia Park", role: "Head of Operations, TerraVista", avatar: "https://i.pravatar.cc/150?img=24", featured: false },
  { logo: "AeroLink Travel", quote: "The team adopted it overnight. Documentation and onboarding were first-class — zero ramp-up friction.", name: "Arjun Kapoor", role: "Tech Lead, AeroLink Travel", avatar: "https://i.pravatar.cc/150?img=57", featured: false },
  { logo: "Pinnacle Holidays", quote: "Finally a platform that treats travel data with the seriousness it deserves. SOC2 compliance was the cherry on top.", name: "Laura Kim", role: "Compliance Officer, Pinnacle Holidays", avatar: "https://i.pravatar.cc/150?img=36", featured: true },
];

type Testimonial = (typeof ROW_1)[number];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className={`flex w-[min(88vw,360px)] shrink-0 flex-col rounded-2xl p-6 text-left md:w-[400px] md:p-8 transition-all duration-300 ${t.featured ? "bg-white border border-[#181717]/12 shadow-[0_4px_24px_-8px_rgba(24,23,23,0.08)]" : "bg-[#eeebea]/60 border border-[#181717]/[0.06]"}`}>
      <div className="mb-5 flex min-h-[28px] items-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181717]/20">{t.logo}</span>
      </div>
      <blockquote className="flex min-h-0 flex-1 flex-col">
        <p className="relative text-sm leading-relaxed font-medium tracking-tight text-[#181717]/75 md:text-[15px]">&ldquo;{t.quote}&rdquo;</p>
      </blockquote>
      <div className="mt-auto flex items-center gap-3 pt-6">
        <img alt={t.name} className="size-10 shrink-0 rounded-full object-cover ring-2 ring-[#181717]/5 ring-offset-2 ring-offset-white" height={40} src={t.avatar} width={40} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-[#181717]/85">{t.name}</p>
          <p className="truncate text-xs text-[#666666]">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ items, duration, reverse = false }: { items: Testimonial[]; duration: number; reverse?: boolean }) {
  return (
    <div className="ts-marquee-row">
      <div className="ts-marquee-track gap-4 sm:gap-5" style={{ "--marquee-duration": `${duration}s`, "--marquee-direction": reverse ? "reverse" : "normal" } as React.CSSProperties}>
        {items.map((t, i) => (<TestimonialCard key={`a-${i}`} t={t} />))}
        {items.map((t, i) => (<TestimonialCard key={`b-${i}`} t={t} />))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 md:py-28" data-testid="testimonials-section" id="testimonials" style={{ backgroundColor: "#f9f7f6" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <header className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="ts-eyebrow mb-4">Testimonials</span>
          <h2 className="text-[1.85rem] sm:text-3xl md:text-[2.75rem] font-medium leading-[1.12] text-balance" data-testid="testimonials-heading" style={{ letterSpacing: "-1.44px" }}>
            Trusted by agencies <span className="text-[#d04841]">worldwide</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-pretty text-[#666666] sm:text-base">Real feedback from teams that replaced chaos with clarity.</p>
        </header>
      </div>
      <div className="relative flex w-full flex-col gap-4 sm:gap-5">
        <div className="ts-marquee-fade-left" />
        <div className="ts-marquee-fade-right" />
        <MarqueeRow items={ROW_1} duration={70} />
        <MarqueeRow items={ROW_2} duration={55} reverse />
      </div>
    </section>
  );
}
