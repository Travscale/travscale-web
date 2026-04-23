import Link from "next/link";
import { ArrowUpRight, Scale } from "lucide-react";

type TermsContact = { email: string; website: string; instagram?: string; github?: string };
type TermsClause = { id: string; heading?: string; text?: string; contact?: TermsContact };
type TermsSection = { id: string; title: string; clauses: TermsClause[] };
type TermsDocument = { title: string; product: string; company: string; website: string; app: string; contact_email: string; version: string; effective_date: string; last_updated: string; jurisdiction: string; governing_law: string; dispute_forum: string };
type TermsMeta = { total_sections: number; indian_law_references: string[]; key_product_specific_clauses: string[] };

type TermsAndConditionsPageProps = {
  effectiveDate: string;
  legalDocumentSchema: Record<string, unknown>;
  termsDocument: TermsDocument;
  termsMeta: TermsMeta;
  termsSections: TermsSection[];
  updatedDate: string;
};

function isNestedClause(clauseId: string): boolean {
  return /^\d+\.\d+\.[a-z]$/i.test(clauseId);
}

export default function TermsAndConditionsPage({
  effectiveDate,
  legalDocumentSchema,
  termsDocument,
  termsMeta,
  termsSections,
  updatedDate,
}: TermsAndConditionsPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden pb-20 pt-28 sm:pt-32" style={{ backgroundColor: "#f9f7f6" }}>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalDocumentSchema) }}
        type="application/ld+json"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(24,23,23,0.04) 1px, transparent 1px), linear-gradient(rgba(24,23,23,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <section className="relative border-b border-[#181717]/10" style={{ backgroundColor: "#f9f7f6" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-12">
          <p className="inline-flex items-center gap-2 rounded-lg border border-[#181717]/15 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d04841]">
            <Scale className="h-3.5 w-3.5" />
            Legal Document
          </p>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <h1
                className="text-[2.1rem] font-medium tracking-tight text-[#181717] sm:text-5xl"
                style={{ letterSpacing: "-1.44px" }}
              >
                {termsDocument.title}
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#666666] sm:text-base">
                This document sets out the legal terms that govern your access
                to and use of {termsDocument.product}. By using the product, you
                agree to follow these terms as a binding agreement.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#181717]/55">
                <span className="rounded-lg border border-[#181717]/15 bg-white px-3 py-2">
                  Product: {termsDocument.product}
                </span>
                <span className="rounded-lg border border-[#181717]/15 bg-white px-3 py-2">
                  Company: {termsDocument.company}
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-[#181717]/15 bg-white overflow-hidden">
              <div className="border-b border-[#181717]/10 px-5 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#181717]/45">
                  Document Status
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-px bg-[#181717]/10">
                <div className="bg-white px-5 py-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#181717]/50">Version</dt>
                  <dd className="mt-2 text-base font-semibold text-[#181717]">{termsDocument.version}</dd>
                </div>
                <div className="bg-white px-5 py-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#181717]/50">Effective Date</dt>
                  <dd className="mt-2 text-base font-semibold text-[#181717]">{effectiveDate}</dd>
                </div>
                <div className="bg-white px-5 py-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#181717]/50">Last Updated</dt>
                  <dd className="mt-2 text-base font-semibold text-[#181717]">{updatedDate}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-px rounded-xl border border-[#181717]/10 bg-[#181717]/10 overflow-hidden md:grid-cols-3">
            <div className="bg-white px-4 py-4 sm:px-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#181717]/45">Governing Law</p>
              <p className="mt-2 text-sm font-medium text-[#181717]/80">{termsDocument.governing_law}</p>
            </div>
            <div className="bg-white px-4 py-4 sm:px-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#181717]/45">Jurisdiction</p>
              <p className="mt-2 text-sm font-medium text-[#181717]/80">{termsDocument.jurisdiction}</p>
            </div>
            <div className="bg-white px-4 py-4 sm:px-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#181717]/45">Dispute Forum</p>
              <p className="mt-2 text-sm font-medium text-[#181717]/80">{termsDocument.dispute_forum}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-6 self-start lg:sticky lg:top-28">
            <div className="rounded-xl border border-[#181717]/15 bg-white overflow-hidden">
              <div className="border-b border-[#181717]/10 px-4 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#181717]/50">Table of Contents</p>
              </div>
              <ol className="max-h-[52vh] space-y-1 overflow-y-auto px-3 py-3">
                {termsSections.map((section) => (
                  <li key={section.id}>
                    <a
                      className="group flex items-start gap-2 rounded-lg border border-transparent px-2 py-2 text-sm text-[#181717]/70 transition-colors hover:border-[#181717]/15 hover:bg-[#eeebea] hover:text-[#181717]"
                      href={`#section-${section.id}`}
                    >
                      <span className="mt-0.5 w-8 shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#d04841]">{section.id}</span>
                      <span className="leading-snug">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-[#181717]/15 bg-white overflow-hidden">
              <div className="border-b border-[#181717]/10 px-4 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#181717]/50">Laws Referenced</p>
              </div>
              <ul className="space-y-2 px-4 py-4">
                {termsMeta.indian_law_references.map((law) => (
                  <li className="border-l-2 border-[#d04841]/35 pl-3 text-xs leading-relaxed text-[#181717]/70" key={law}>{law}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#181717]/15 bg-white px-4 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#181717]/50">Need Clarification?</p>
              <p className="mt-3 text-xs leading-relaxed text-[#181717]/70">For legal notices or contract questions, contact us directly.</p>
              <a
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-[#181717]/20 bg-[#232222] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#d04841]"
                href={`mailto:${termsDocument.contact_email}`}
              >
                Email Legal
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>

          <article className="rounded-2xl border border-[#181717]/15 bg-white shadow-[0_24px_64px_-46px_rgba(24,23,23,0.35)] overflow-hidden">
            <div className="border-b border-[#181717]/10 px-5 py-5 sm:px-8">
              <p className="text-xs leading-relaxed text-[#181717]/70 sm:text-sm">
                This agreement contains {termsMeta.total_sections} sections.
                Sections are numbered for direct legal reference and include
                product-specific obligations on data handling, audit records,
                account governance, and dispute resolution.
              </p>

              <div className="mt-4 rounded-lg border-l-2 border-[#d04841] bg-[#ffd3cf]/20 px-3 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d04841]">Product-Specific Clauses</p>
                <ul className="mt-2 space-y-1.5">
                  {termsMeta.key_product_specific_clauses.map((clause) => (
                    <li className="text-xs leading-relaxed text-[#181717]/70" key={clause}>{clause}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {termsSections.map((section, sectionIndex) => (
                <section
                  className="scroll-mt-28 border-b border-[#181717]/10 px-5 py-7 sm:px-8 sm:py-8"
                  id={`section-${section.id}`}
                  key={section.id}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d04841]">Section {section.id}</p>
                      <h2
                        className="mt-2 text-2xl font-medium tracking-tight text-[#181717] sm:text-3xl"
                        style={{ letterSpacing: "-1.44px" }}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <p className="rounded-lg border border-[#181717]/10 bg-[#eeebea] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181717]/55">
                      {section.clauses.length} Clauses
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {section.clauses.map((clause) => {
                      const nestedClause = isNestedClause(clause.id);

                      if (clause.contact) {
                        return (
                          <div className="rounded-lg border-l-2 border-[#d04841] bg-[#ffd3cf]/15 px-4 py-4" key={clause.id}>
                            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#d04841]">Clause {clause.id}</p>
                            <div className="mt-3 space-y-2 text-sm text-[#181717]/80">
                              <p><span className="font-semibold">Email:</span>{" "}<a className="font-medium text-[#d04841] hover:underline" href={`mailto:${clause.contact.email}`}>{clause.contact.email}</a></p>
                              <p><span className="font-semibold">Website:</span>{" "}<a className="font-medium text-[#d04841] hover:underline" href={clause.contact.website} rel="noopener noreferrer" target="_blank">{clause.contact.website}</a></p>
                              {clause.contact.instagram ? <p><span className="font-semibold">Instagram:</span> {clause.contact.instagram}</p> : null}
                              {clause.contact.github ? <p><span className="font-semibold">GitHub:</span> {clause.contact.github}</p> : null}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div className={`rounded-lg border border-[#181717]/10 bg-[#f9f7f6]/50 px-4 py-4 ${nestedClause ? "ml-0 sm:ml-8" : ""}`} key={clause.id}>
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#181717]/50">Clause {clause.id}</p>
                          {clause.heading ? <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#181717]">{clause.heading}</h3> : null}
                          {clause.text ? <p className="mt-2 text-sm leading-relaxed text-[#181717]/78">{clause.text}</p> : null}
                        </div>
                      );
                    })}
                  </div>

                  {sectionIndex === termsSections.length - 1 ? (
                    <div className="mt-7 border-t border-[#181717]/10 pt-5">
                      <p className="text-xs leading-relaxed text-[#181717]/60">
                        These Terms apply in addition to the Travscale Privacy Policy and any supplemental terms for specific product modules.
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <Link className="inline-flex items-center gap-1.5 rounded-lg border border-[#181717]/20 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#181717] transition-colors hover:border-[#d04841] hover:text-[#d04841]" href="/privacy-policy">
                          View Privacy Policy
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                        <a className="inline-flex items-center gap-1.5 rounded-lg border border-[#181717]/20 bg-[#232222] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#d04841]" href={termsDocument.app} rel="noopener noreferrer" target="_blank">
                          Open App
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
