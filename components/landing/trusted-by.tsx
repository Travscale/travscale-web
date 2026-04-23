"use client";

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

export default function TrustedBy() {
  const doubled = [...logos, ...logos];

  return (
    <section
      className="py-8 sm:py-10 overflow-hidden"
      data-testid="trusted-by-section"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#f9f7f6] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#f9f7f6] to-transparent pointer-events-none" />

        <div className="flex animate-logo-scroll">
          {doubled.map((name, i) => (
            <span
              className="shrink-0 px-6 sm:px-10 text-[11px] sm:text-xs font-semibold text-[#181717]/15 tracking-[0.25em] uppercase whitespace-nowrap"
              key={`${name}-${i}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
