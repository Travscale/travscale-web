"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { navbarPageLinks } from "@/lib/site-content";
import { AnimatePresence, motion } from "motion/react";

const LOGO_URL = "/logo-w-name.svg";
const AGENT_APP_URL = "https://agent.travscale.com";

type NavigationProps = {
  onDemoClick?: () => void;
};

export default function Navigation({ onDemoClick }: NavigationProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  const pageLinks = isHome
    ? navbarPageLinks
    : [{ label: "Home", href: "/" }, ...navbarPageLinks];

  // Lock scroll + blur page content when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("nav-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 20);

    // Only hide if we scrolled down a bit, never hide on mobile menu open
    if (!mobileOpen && currentY > 80) {
      const delta = currentY - lastScrollY.current;
      if (delta > 5) setHidden(true); // scrolling down
      if (delta < -5) setHidden(false); // scrolling up
    } else {
      setHidden(false);
    }

    lastScrollY.current = currentY;
  }, [mobileOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleDemoClick = () => {
    if (onDemoClick) {
      onDemoClick();
      return;
    }
    window.open(AGENT_APP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-4 md:top-6 inset-x-0 mx-auto z-[100] px-4 transition-transform duration-500 ease-out flex justify-center w-full pointer-events-none ${
        hidden && !mobileOpen ? "-translate-y-[150%]" : "translate-y-0"
      }`}
      data-testid="main-navigation"
    >
      {/* Dark scrim overlay — real blur is applied via CSS on #page-content */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-black/25 pointer-events-auto md:hidden z-10"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-5xl pointer-events-auto z-20">
        {/* Pill Navigation */}
        <nav
          className={`relative flex items-center justify-between p-1.5 md:p-2 transition-all duration-300 border shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] rounded-[24px] md:rounded-[32px] z-20 ${
            scrolled || mobileOpen
              ? "bg-white/80 backdrop-blur-xl border-[#181717]/10"
              : "bg-white/60 backdrop-blur-md border-[#181717]/5"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center pl-3 sm:pl-4 pr-6 py-1.5">
            <Link
              href="/"
              className="shrink-0 outline-none focus-visible:ring-2 ring-ts-primary/50 rounded-sm"
              aria-label="Travscale Home"
            >
              <Image
                src={LOGO_URL}
                width={108}
                height={24}
                alt="Travscale Logo"
                className="h-4 sm:h-5 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {pageLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[14px] font-medium rounded-full transition-all duration-300 outline-none focus-visible:ring-2 ring-ts-primary/50 ${
                    isActive
                      ? "bg-[#181717]/5 text-[#181717]"
                      : "text-[#181717]/60 hover:text-[#181717] hover:bg-[#181717]/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 pr-1">
            <a
              href={AGENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[14px] font-medium text-[#181717]/60 hover:text-[#181717] transition-colors rounded-full hover:bg-[#181717]/[0.04] outline-none focus-visible:ring-2 ring-ts-primary/50"
            >
              Log in
            </a>
            <button
              onClick={handleDemoClick}
              className="ts-btn-pill px-5 py-2.5 text-[13px] h-10 group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="md:hidden relative p-2 mr-1 rounded-full text-[#181717]/80 hover:bg-[#181717]/5 transition-colors outline-none focus-visible:ring-2 ring-ts-primary/50"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute h-[1.5px] w-4 bg-current transform transition-all duration-300 ${
                  mobileOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-current transform transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-current transform transition-all duration-300 ${
                  mobileOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[calc(100%+8px)] left-0 right-0 md:hidden bg-white/95 backdrop-blur-3xl border border-[#181717]/10 rounded-[24px] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.15)] overflow-hidden z-10 origin-top"
            >
              <div className="flex flex-col p-3">
                <div className="px-3 pb-2 pt-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#181717]/40 font-bold mb-1">
                    Navigation
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  {pageLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`px-4 py-3 text-[15px] font-medium rounded-2xl transition-all duration-200 flex items-center justify-between ${
                          isActive
                            ? "bg-[#181717]/5 text-[#181717]"
                            : "text-[#181717]/70 hover:bg-[#181717]/[0.03] hover:text-[#181717]"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#181717]" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-2 pt-2 border-t border-[#181717]/5 flex flex-col gap-2">
                  <a
                    href={AGENT_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3.5 text-[15px] font-medium text-[#181717]/70 hover:bg-[#181717]/[0.03] hover:text-[#181717] rounded-2xl transition-colors flex justify-center w-full"
                  >
                    Log in to Account
                  </a>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      handleDemoClick();
                    }}
                    className="ts-btn-primary w-full py-3.5 text-[15px] rounded-2xl justify-center h-auto font-medium"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
