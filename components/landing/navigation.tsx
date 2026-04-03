"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_ff523236-7639-4c36-96ff-1cf74a0e278a/artifacts/624d08ht_logo-w-name.svg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

type NavigationProps = {
  onDemoClick: () => void;
};

export default function Navigation({ onDemoClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].href);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ts-nav transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link className="shrink-0" data-testid="nav-logo" href="/">
            <Image
              alt="Travscale"
              className="h-7 md:h-8 w-auto"
              height={36}
              priority
              src={LOGO_URL}
              width={140}
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeSection === link.href
                    ? "text-black"
                    : "text-black/70 hover:text-black"
                }`}
                data-testid={`nav-link-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                type="button"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    activeSection === link.href ? "bg-[#003399]" : "bg-black/20"
                  }`}
                />
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
              data-testid="nav-login-btn"
              href="https://agent.travscale.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Log in
            </a>
            <button
              className="bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-[#003399] transition-colors flex items-center gap-2"
              data-testid="nav-demo-btn"
              onClick={onDemoClick}
              type="button"
            >
              Book a Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            className="md:hidden p-2"
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden bg-white border-t border-black/5 px-6 py-6"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                className="text-left text-base font-medium text-black/80 hover:text-black py-2"
                data-testid={`mobile-nav-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                type="button"
              >
                {link.label}
              </button>
            ))}
            <hr className="border-black/10 my-2" />
            <a
              className="text-base font-medium text-black/70"
              href="https://agent.travscale.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Log in
            </a>
            <button
              className="bg-black text-white px-6 py-3 text-sm font-medium w-full mt-2"
              data-testid="mobile-demo-btn"
              onClick={() => {
                setMobileOpen(false);
                onDemoClick();
              }}
              type="button"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}

      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-black/5">
        <div
          className="h-full bg-[#003399] transition-[width] duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
