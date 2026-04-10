import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionShell from "@/components/atoms/layout/section-shell";
import EyebrowLabel from "@/components/atoms/typography/eyebrow-label";
import type { PlaceholderPageContent } from "@/lib/site-content";

type PlaceholderContentTemplateProps = {
  content: PlaceholderPageContent;
};

export default function PlaceholderContentTemplate({
  content,
}: PlaceholderContentTemplateProps) {
  return (
    <main className="min-h-screen bg-[#fdfdfc] text-[#0f172a] pt-28 pb-16">
      <section>
        <SectionShell className="max-w-6xl">
          <EyebrowLabel className="inline-flex items-center border border-[#003399]/20 bg-white px-3 py-1 text-[#003399]">
            {content.eyebrow} Page
          </EyebrowLabel>

          <h1
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {content.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#0f172a]/72">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link className="ts-btn-primary px-5 py-3 text-sm" href="/">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              className="ts-btn-secondary px-5 py-3 text-sm text-black/80 hover:border-[#003399]/40"
              href="/contact"
            >
              Contact Team
            </Link>
            <span className="text-xs text-black/45">
              This page uses professional placeholder content.
            </span>
          </div>
        </SectionShell>
      </section>

      <section className="mt-11">
        <SectionShell className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {content.sections.map((section) => (
            <article className="ts-panel p-5 sm:p-6" key={section.heading}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#003399]/75 font-semibold mb-3">
                Overview
              </p>
              <h2
                className="text-lg font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {section.body}
              </p>
            </article>
          ))}
        </SectionShell>
      </section>
    </main>
  );
}
