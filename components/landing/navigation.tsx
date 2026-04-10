"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { navbarPageLinks } from "@/lib/site-content";

const LOGO_URL = "/logo-w-name.svg";
const AGENT_APP_URL = "https://agent.travscale.com";

type NavigationProps = {
  onDemoClick?: () => void;
};

export default function Navigation({ onDemoClick }: NavigationProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Desktop nav — page links only */}
          <div className="hidden lg:flex items-center gap-6">
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

          {/* CTA buttons */}
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
              className="ts-btn-primary px-6 py-2.5 text-sm"
              data-testid="nav-demo-btn"
              onClick={handleDemoClick}
              type="button"
            >
              Book a Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2.5 border border-black/10 bg-white/85 backdrop-blur"
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
                Pages
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {pageLinks.map((link) => {
                  const isCurrent = pathname === link.href;

                  return (
                    <Link
                      className={`text-left px-4 py-3.5 text-sm font-semibold transition-colors border ${
                        isCurrent
                          ? "bg-black text-white border-black"
                          : "bg-white text-black/80 border-black/10 hover:border-[#003399]/30"
                      }`}
                      data-testid={`mobile-nav-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      href={link.href}
                      key={link.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <button
                className="ts-btn-primary px-6 py-3.5 text-sm w-full mt-4"
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
    </nav>
  );
}
