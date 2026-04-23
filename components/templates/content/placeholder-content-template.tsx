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
    <main className="min-h-screen pt-28 pb-16" style={{ backgroundColor: "#f9f7f6", color: "#181717" }}>
      <section>
        <SectionShell className="max-w-6xl">
          <EyebrowLabel className="inline-flex items-center rounded-lg border border-[#d04841]/20 bg-white px-3 py-1 text-[#d04841]">
            {content.eyebrow} Page
          </EyebrowLabel>

          <h1
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181717]"
            style={{ letterSpacing: "-1.44px" }}
          >
            {content.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#666666]">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link className="ts-btn-primary rounded-xl px-5 py-3 text-sm" href="/">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              className="ts-btn-secondary rounded-xl px-5 py-3 text-sm"
              href="/contact"
            >
              Contact Team
            </Link>
            <span className="text-xs text-[#181717]/45">
              This page uses professional placeholder content.
            </span>
          </div>
        </SectionShell>
      </section>

      <section className="mt-11">
        <SectionShell className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {content.sections.map((section) => (
            <article className="ts-panel p-5 sm:p-6 rounded-2xl" key={section.heading}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#d04841]/75 font-semibold mb-3">
                Overview
              </p>
              <h2 className="text-lg font-semibold tracking-tight text-[#181717]">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#181717]/70">
                {section.body}
              </p>
            </article>
          ))}
        </SectionShell>
      </section>
    </main>
  );
}
