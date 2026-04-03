"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqItems = [
  {
    question: "How long does onboarding usually take?",
    answer:
      "Most agencies go live in under a week. Teams with clean data imports often complete setup in two to three days.",
  },
  {
    question: "Can we keep our current GDS credentials?",
    answer:
      "Yes. Travscale supports a BYOK model for GDS integrations, so your existing credentials and commercial agreements stay with you.",
  },
  {
    question: "Do you support multi-branch operations?",
    answer:
      "Yes. You can configure branch-level visibility, permissions, and reporting while keeping leadership dashboards centralized.",
  },
  {
    question: "Is there support during migration?",
    answer:
      "Your team gets guided onboarding, migration checklists, and implementation support to ensure minimal disruption to active bookings.",
  },
  {
    question: "Can we customize workflows for our agency?",
    answer:
      "You can customize forms, status pipelines, team permissions, and operational checkpoints to match your internal SOPs.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      className="py-24 md:py-32 border-t border-black/5"
      data-testid="faq-section"
      id="faq"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-14">
          <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-black/40 block mb-4">
            FAQ
          </span>
          <h2
            className="text-3xl md:text-4xl tracking-tight font-medium leading-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Answers for teams switching from manual operations
          </h2>
          <p className="text-base text-black/60 leading-relaxed max-w-2xl mx-auto">
            Everything you need to validate fit, rollout speed, and operational
            control before booking a demo.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className="border border-black/10 bg-white"
                key={item.question}
              >
                <h3>
                  <button
                    aria-controls={`faq-panel-${index}`}
                    aria-expanded={isOpen}
                    className="w-full px-5 md:px-6 py-4 md:py-5 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] transition-colors"
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span
                      className="text-base md:text-lg font-medium text-black"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {item.question}
                    </span>

                    <span className="shrink-0 text-[#003399]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  id={`faq-panel-${index}`}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 text-sm md:text-base text-black/65 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
