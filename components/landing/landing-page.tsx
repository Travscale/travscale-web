"use client";

import { useEffect, useState } from "react";
import DemoForm from "@/components/landing/demo-form";
import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import TrustedBy from "@/components/landing/trusted-by";
import UseCases from "@/components/landing/use-cases";

export default function LandingPage() {
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
        <Hero onDemoClick={openDemo} />

        <div className="ts-section" style={{ transitionDelay: "50ms" }}>
          <TrustedBy />
        </div>

        <div className="ts-section" style={{ transitionDelay: "100ms" }}>
          <Features />
        </div>

        <div className="ts-section" style={{ transitionDelay: "140ms" }}>
          <HowItWorks />
        </div>

        <div className="ts-section" style={{ transitionDelay: "180ms" }}>
          <UseCases />
        </div>

        <div className="ts-section" style={{ transitionDelay: "220ms" }}>
          <Pricing onDemoClick={openDemo} />
        </div>

        <div className="ts-section" style={{ transitionDelay: "260ms" }}>
          <Testimonials />
        </div>

        <div className="ts-section" style={{ transitionDelay: "300ms" }}>
          <Faq />
        </div>
      </main>

      <Footer onDemoClick={openDemo} />
      <DemoForm isOpen={demoOpen} onClose={closeDemo} />
    </div>
  );
}
