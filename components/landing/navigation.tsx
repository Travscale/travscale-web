"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { navbarPageLinks, sectionLinks } from "@/lib/site-content";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_ff523236-7639-4c36-96ff-1cf74a0e278a/artifacts/624d08ht_logo-w-name.svg";
const AGENT_APP_URL = "https://agent.travscale.com";

type NavigationProps = {
  onDemoClick?: () => void;
};

function toHomeSectionHref(href: string): string {
  if (href.startsWith("#")) {
    return `/${href}`;
  }

  return href;
}

export default function Navigation({ onDemoClick }: NavigationProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionLinks[0].href);
  const [scrollProgress, setScrollProgress] = useState(0);

  const pageLinks = isHome
    ? navbarPageLinks
    : [{ label: "Home", href: "/" }, ...navbarPageLinks];

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

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
    if (!isHome) {
      return;
    }

    const sections = sectionLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    if (sections.length === 0) {
      return;
    }

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
  }, [isHome]);

  const handleHomeSectionClick = (href: string) => {
    setMobileOpen(false);

    if (!isHome) {
      return;
    }

    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDemoClick = () => {
    if (onDemoClick) {
      onDemoClick();
      return;
    }

    window.open(AGENT_APP_URL, "_blank", "noopener,noreferrer");
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-15 sm:h-16 lg:h-20">
          <Link className="shrink-0" data-testid="nav-logo" href="/">
            <Image
              alt="Travscale"
              className="h-5 sm:h-5 lg:h-6 w-auto"
              height={30}
              priority
              src={LOGO_URL}
              width={118}
            />
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {sectionLinks.map((link) => {
              const isActive = isHome && activeSection === link.href;

              if (isHome) {
                return (
                  <button
                    className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                      isActive ? "text-black" : "text-black/70 hover:text-black"
                    }`}
                    data-testid={`nav-link-${link.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    key={link.href}
                    onClick={() => handleHomeSectionClick(link.href)}
                    type="button"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        isActive ? "bg-[#003399]" : "bg-black/20"
                      }`}
                    />
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  className="text-sm font-medium transition-colors flex items-center gap-2 text-black/70 hover:text-black"
                  data-testid={`nav-link-${link.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  href={toHomeSectionHref(link.href)}
                  key={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors" />
                  {link.label}
                </Link>
              );
            })}
            <span className="h-5 w-px bg-black/10" />
            {pageLinks.map((link) => {
              const isCurrent = pathname === link.href;

              return (
                <Link
                  className={`text-sm font-medium transition-colors ${
                    isCurrent ? "text-black" : "text-black/70 hover:text-black"
                  }`}
                  data-testid={`nav-page-${link.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex xl:hidden items-center gap-4">
            {pageLinks.map((link) => {
              const isCurrent = pathname === link.href;

              return (
                <Link
                  className={`text-sm font-medium transition-colors ${
                    isCurrent ? "text-black" : "text-black/70 hover:text-black"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
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
              onClick={handleDemoClick}
              type="button"
            >
              Book a Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            className="lg:hidden p-2.5 rounded-full border border-black/10 bg-white/85 backdrop-blur"
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
        <>
          <div
            className="fixed inset-0 top-15 sm:top-16 bg-black/35 backdrop-blur-[1px] lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="lg:hidden fixed left-0 right-0 top-15 sm:top-16 z-60 bg-[#FCFCFA] border-y border-black/10"
            data-testid="mobile-menu"
          >
            <div className="px-4 sm:px-6 py-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-black/40 font-semibold mb-3">
                {isHome ? "Sections" : "Explore Home Sections"}
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {sectionLinks.map((link) => {
                  const active = isHome && activeSection === link.href;

                  if (isHome) {
                    return (
                      <button
                        className={`text-left rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors border ${
                          active
                            ? "bg-black text-white border-black"
                            : "bg-white text-black/80 border-black/10 hover:border-[#003399]/30"
                        }`}
                        data-testid={`mobile-nav-${link.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        key={link.href}
                        onClick={() => handleHomeSectionClick(link.href)}
                        type="button"
                      >
                        {link.label}
                      </button>
                    );
                  }

                  return (
                    <Link
                      className="text-left rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors border bg-white text-black/80 border-black/10 hover:border-[#003399]/30"
                      data-testid={`mobile-nav-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      href={toHomeSectionHref(link.href)}
                      key={link.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 rounded-xl border border-black/10 bg-white p-3.5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-black/40 font-semibold mb-2">
                  Pages
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {pageLinks.map((link) => {
                    const isCurrent = pathname === link.href;

                    return (
                      <Link
                        className={`rounded-lg border px-3 py-2 text-xs text-center font-semibold transition-colors ${
                          isCurrent
                            ? "text-black border-black/30 bg-black/5"
                            : "text-black/75 border-black/10 hover:border-[#003399]/30 hover:text-black"
                        }`}
                        href={link.href}
                        key={link.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-white border border-black/10 p-3.5 flex items-center justify-between gap-3">
                <Link
                  className="text-sm font-medium text-black/70 hover:text-black transition-colors"
                  href="/documentation"
                  onClick={() => setMobileOpen(false)}
                >
                  View documentation
                </Link>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#003399] font-bold">
                  Dummy Content Pages
                </span>
              </div>

              <button
                className="bg-black text-white px-6 py-3.5 text-sm font-semibold w-full mt-4 rounded-xl"
                data-testid="mobile-demo-btn"
                onClick={() => {
                  setMobileOpen(false);
                  handleDemoClick();
                }}
                type="button"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </>
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
