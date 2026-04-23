"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  { question: "How long does onboarding usually take?", answer: "Most agencies go live in under a week. Teams with clean data imports often complete setup in two to three days." },
  { question: "Can we keep our current GDS credentials?", answer: "Yes. Travscale supports a BYOK model for GDS integrations, so your existing credentials and commercial agreements stay with you." },
  { question: "Do you support multi-branch operations?", answer: "Yes. You can configure branch-level visibility, permissions, and reporting while keeping leadership dashboards centralized." },
  { question: "Is there support during migration?", answer: "Your team gets guided onboarding, migration checklists, and implementation support to ensure minimal disruption to active bookings." },
  { question: "Can we customize workflows for our agency?", answer: "You can customize forms, status pipelines, team permissions, and operational checkpoints to match your internal SOPs." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 sm:py-24 md:py-32" data-testid="faq-section" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <span className="ts-eyebrow mb-4">FAQ</span>
          <h2 className="text-[1.85rem] sm:text-3xl md:text-[2.75rem] font-medium leading-[1.12] mb-5" style={{ letterSpacing: "-1.44px" }}>
            Common questions
          </h2>
          <p className="text-[15px] sm:text-base text-[#666666] leading-relaxed max-w-xl mx-auto">
            Everything you need to validate fit, rollout speed, and operational control.
          </p>
        </div>

        <div className="divide-y divide-[#181717]/8">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="group" key={item.question}>
                <h3>
                  <button
                    aria-controls={`faq-panel-${index}`}
                    aria-expanded={isOpen}
                    className="w-full py-6 text-left flex items-center justify-between gap-6 transition-colors"
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#181717] leading-snug">{item.question}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full border border-[#181717]/10 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#2e2d2d] border-[#2e2d2d] rotate-180" : "bg-white"}`}>
                      <ChevronDown className={`h-3.5 w-3.5 transition-colors ${isOpen ? "text-white" : "text-[#181717]/40"}`} />
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
                    <p className="pb-6 text-[15px] text-[#666666] leading-relaxed pr-12">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
