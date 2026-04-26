"use client";

import { useState } from "react";

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

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection onDemoClick={openDemo} />
        <TrustedBySection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <PricingSection onDemoClick={openDemo} />
        <TestimonialsSection />
        <FaqSection />
      </main>

      <FooterSection onDemoClick={openDemo} />
      <DemoRequestForm isOpen={demoOpen} onClose={closeDemo} />
    </div>
  );
}
