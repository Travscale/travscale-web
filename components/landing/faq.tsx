"use client";

import { useState } from "react";
import { Plus, Minus, MessageSquare, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  { question: "How long does onboarding usually take?", answer: "Most agencies go live in under a week. Teams with clean data imports often complete setup in two to three days. Our migration specialists handle the heavy lifting." },
  { question: "Can we keep our current GDS credentials?", answer: "Yes. Travscale supports a Bring Your Own Key (BYOK) model for GDS integrations. Your existing credentials, negotiated rates, and commercial agreements stay completely under your control." },
  { question: "Do you support multi-branch operations?", answer: "Absolutely. You can configure branch-level visibility, role-based permissions, and individual reporting, all while keeping leadership dashboards centralized and unified." },
  { question: "Is there support during migration?", answer: "Your team gets guided onboarding, comprehensive migration checklists, and dedicated implementation support to ensure zero disruption to your active bookings and daily operations." },
  { question: "Can we customize workflows for our agency?", answer: "You can customize client intake forms, status pipelines, team permissions, and operational checkpoints to perfectly match your agency's unique internal SOPs." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section 
      className="py-24 sm:py-32 relative" 
      data-testid="faq-section" 
      id="faq"
      style={{ backgroundColor: "#f9f7f6" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Header & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#181717]/10 shadow-sm mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#181717]/60">
                Support & FAQ
              </span>
            </div>
            
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-medium leading-[1.08] text-[#181717] tracking-tight mb-6">
              Everything you <br className="hidden md:block" />
              <span className="text-[#666666]">need to know.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed mb-10 max-w-md">
              Find answers to common questions about platform migration, GDS integrations, and enterprise deployment.
            </p>

            {/* Support CTA Card */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#181717]/10 shadow-sm max-w-sm">
              <div className="flex -space-x-3 mb-6">
                <img src="https://i.pravatar.cc/150?img=12" alt="Support" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/150?img=32" alt="Support" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[#f9f7f6] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-[#181717]/40" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#181717] mb-2">Still have questions?</h3>
              <p className="text-sm text-[#666666] mb-6">
                Our engineering and onboarding teams are ready to help you evaluate Travscale.
              </p>
              <button className="group w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 rounded-xl bg-[#181717] text-white hover:bg-[#2e2d2d] hover:shadow-md active:scale-[0.97] active:duration-100 cursor-pointer">
                Chat with our team
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-[2rem] transition-all duration-300 overflow-hidden",
                    isOpen 
                      ? "border border-[#181717]/10 shadow-[0_8px_30px_-12px_rgba(24,23,23,0.06)]" 
                      : "border border-transparent hover:border-[#181717]/5"
                  )}
                >
                  <h3>
                    <button
                      aria-expanded={isOpen}
                      className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-6 cursor-pointer"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      type="button"
                    >
                      <span className={cn(
                        "text-lg sm:text-xl font-medium tracking-tight pr-8 transition-colors duration-300",
                        isOpen ? "text-[#181717]" : "text-[#181717]/80"
                      )}>
                        {item.question}
                      </span>
                      <div className={cn(
                        "shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                        isOpen 
                          ? "bg-[#181717] text-white rotate-180" 
                          : "bg-[#f9f7f6] text-[#181717]/40"
                      )}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 sm:px-8 pb-8 pt-2 text-[15px] sm:text-base text-[#666666] leading-relaxed pr-12">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
