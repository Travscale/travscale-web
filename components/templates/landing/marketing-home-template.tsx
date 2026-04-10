"use client";

import { useEffect, useState } from "react";

import RevealSection from "@/components/molecules/layout/reveal-section";
import DemoRequestForm from "@/components/organisms/landing/demo-request-form";
import FaqSection from "@/components/organisms/landing/faq-section";
import FeaturesSection from "@/components/organisms/landing/features-section";
import FooterSection from "@/components/organisms/landing/footer-section";
import HeroSection from "@/components/organisms/landing/hero-section";
import HowItWorksSection from "@/components/organisms/landing/how-it-works-section";
import PricingSection from "@/components/organisms/landing/pricing-section";
import TestimonialsSection from "@/components/organisms/landing/testimonials-section";
import TrustedBySection from "@/components/organisms/landing/trusted-by-section";
import UseCasesSection from "@/components/organisms/landing/use-cases-section";

export default function MarketingHomeTemplate() {
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => setDemoOpen(true);
  const closeDemo = () => setDemoOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".ts-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen ts-shell">
      <main>
        <HeroSection onDemoClick={openDemo} />

        <RevealSection delayMs={50}>
          <TrustedBySection />
        </RevealSection>

        <RevealSection delayMs={100}>
          <FeaturesSection />
        </RevealSection>

        <RevealSection delayMs={140}>
          <HowItWorksSection />
        </RevealSection>

        <RevealSection delayMs={180}>
          <UseCasesSection />
        </RevealSection>

        <RevealSection delayMs={220}>
          <PricingSection onDemoClick={openDemo} />
        </RevealSection>

        <RevealSection delayMs={260}>
          <TestimonialsSection />
        </RevealSection>

        <RevealSection delayMs={300}>
          <FaqSection />
        </RevealSection>
      </main>

      <FooterSection onDemoClick={openDemo} />
      <DemoRequestForm isOpen={demoOpen} onClose={closeDemo} />
    </div>
  );
}
