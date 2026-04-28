"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navbarPageLinks } from "@/lib/site-content";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const LOGO_URL = "/logo-w-name.svg";
const AGENT_APP_URL = "https://agent.travscale.com";

/** Desktop / mobile breakpoint that matches Tailwind's `md` (768px). */
const DESKTOP_BREAKPOINT = 768;

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  onDemoClick?: () => void;
}

/* -------------------------------------------------------------------------- */
/*  Hooks                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Tracks scroll position and direction.
 *
 * Returns two booleans:
 * - `scrolled`: whether the user has scrolled past a given threshold.
 * - `hidden`:   whether the header should be hidden (scroll down) or shown
 *                (scroll up). Respects an external guard (e.g. mobile menu open).
 */
function useScrollReveal(scrollThreshold = 20, hideThreshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // The guard is a ref so the scroll handler never needs to be re‑attached.
  const guardRef = useRef<boolean>(false);

  const setGuard = useCallback((value: boolean) => {
    guardRef.current = value;
  }, []);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > scrollThreshold);

    // Never hide when the guard is active (e.g. mobile menu open).
    if (guardRef.current) {
      setHidden(false);
      lastScrollY.current = currentY;
      return;
    }

    if (currentY > hideThreshold) {
      const delta = currentY - lastScrollY.current;
      if (delta > 5) setHidden(true);
      if (delta < -5) setHidden(false);
    } else {
      setHidden(false);
    }

    lastScrollY.current = currentY;
  }, [scrollThreshold, hideThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Fire once to initialise state after mount.
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrolled, hidden, setGuard };
}

/** Locks/unlocks body scroll and adds a CSS class to blur the page backdrop. */
function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("nav-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
    }

    return () => {
      // Always clean up when the component unmounts or locked changes.
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
    };
  }, [locked]);
}

/** Closes the mobile menu when the Escape key is pressed. */
function useEscapeKey(onEscape: () => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, enabled]);
}

/** Closes the mobile menu when clicking outside a given element. */
function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [ref, handler, enabled]);
}

/** Redirect to the agent app or fire a custom demo callback. */
function useDemoHandler(onDemoClick?: () => void) {
  return useCallback(() => {
    if (onDemoClick) {
      onDemoClick();
    } else {
      window.open(AGENT_APP_URL, "_blank", "noopener,noreferrer");
    }
  }, [onDemoClick]);
}

/* -------------------------------------------------------------------------- */
/*  Sub‑components                                                            */
/* -------------------------------------------------------------------------- */

interface MobileMenuProps {
  links: NavLink[];
  currentPath: string;
  onClose: () => void;
  onDemo: () => void;
}

function MobileMenu({ links, currentPath, onClose, onDemo }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-[calc(100%+8px)] left-0 right-0 z-10 origin-top overflow-hidden rounded-[24px] border border-[#181717]/10 bg-white/95 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-3xl md:hidden"
      role="menu"
      aria-label="Mobile navigation"
    >
      <div className="flex flex-col p-3">
        {/* Category label */}
        <div className="px-3 pb-2 pt-1">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#181717]/40">
            Navigation
          </p>
        </div>

        {/* Page links */}
        <div className="flex flex-col gap-1" role="none">
          {links.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                role="menuitem"
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#181717]/5 text-[#181717]"
                    : "text-[#181717]/70 hover:bg-[#181717]/[0.03] hover:text-[#181717]"
                }`}
              >
                {link.label}
                {isActive && (
                  <div className="h-1.5 w-1.5 rounded-full bg-[#181717]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-2 flex flex-col gap-2 border-t border-[#181717]/5 pt-2">
          <a
            href={AGENT_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex w-full justify-center rounded-xl px-4 py-3.5 text-[15px] font-medium text-[#181717]/70 transition-colors hover:bg-[#181717]/[0.03] hover:text-[#181717]"
          >
            Log in to Account
          </a>
          <button
            onClick={() => {
              onClose();
              onDemo();
            }}
            className="ts-btn-primary flex h-auto w-full items-center justify-center rounded-xl py-3.5 text-[15px] font-medium cursor-pointer"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Navigation Component                                                 */
/* -------------------------------------------------------------------------- */

export default function Navigation({ onDemoClick }: NavigationProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Derived page links: on home we show default, elsewhere we prepend a "Home" link.
  const pageLinks: NavLink[] = isHome
    ? navbarPageLinks
    : [{ label: "Home", href: "/" }, ...navbarPageLinks];

  // Scroll‑based visibility logic.
  const { scrolled, hidden, setGuard } = useScrollReveal(20, 80);

  // Sync the guard ref with the mobile menu state so the header never hides
  // when the menu is open, without re‑attaching the scroll listener.
  useEffect(() => {
    setGuard(mobileOpen);
  }, [mobileOpen, setGuard]);

  // Lock body scroll while mobile menu is open.
  useBodyScrollLock(mobileOpen);

  // Close mobile menu on Escape.
  const closeMenu = useCallback(() => setMobileOpen(false), []);
  useEscapeKey(closeMenu, mobileOpen);

  // Close mobile menu on click outside.
  useClickOutside(navRef, closeMenu, mobileOpen);

  // Close mobile menu when resizing to desktop (prevent a stuck open state).
  useEffect(() => {
    if (!mobileOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Book a demo handler.
  const handleDemoClick = useDemoHandler(onDemoClick);

  // Toggle mobile menu.
  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header
      ref={navRef}
      data-testid="main-navigation"
      className={`fixed inset-x-0 top-4 z-[100] mx-auto flex w-full justify-center px-4 transition-transform duration-500 ease-out pointer-events-none md:top-6 ${
        hidden && !mobileOpen ? "-translate-y-[150%]" : "translate-y-0"
      }`}
    >
      {/* Scrim overlay – blurred backdrop is handled by the CSS class on #page-content */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-10 pointer-events-auto md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="pointer-events-auto relative z-20 w-full max-w-5xl">
        {/* Pill navigation shell */}
        <nav
          className={`relative z-20 flex items-center justify-between rounded-[24px] border p-1.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 md:rounded-[32px] md:p-2 ${
            scrolled || mobileOpen
              ? "border-[#181717]/10 bg-white/80 backdrop-blur-xl"
              : "border-[#181717]/5 bg-white/60 backdrop-blur-md"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex items-center py-1.5 pl-3 pr-6 sm:pl-4">
            <Link
              href="/"
              className="shrink-0 rounded-sm outline-none ring-ts-primary/50 focus-visible:ring-2"
              aria-label="Travscale Home"
            >
              <Image
                src={LOGO_URL}
                width={108}
                height={24}
                alt="Travscale Logo"
                className="h-4 w-auto sm:h-5"
                priority
              />
            </Link>
          </div>

          {/* Desktop links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {pageLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-[14px] font-medium outline-none ring-ts-primary/50 transition-all duration-300 focus-visible:ring-2 ${
                    isActive
                      ? "bg-[#181717]/5 text-[#181717]"
                      : "text-[#181717]/60 hover:bg-[#181717]/[0.04] hover:text-[#181717]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 pr-1 md:flex">
            <a
              href={AGENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-[14px] font-medium text-[#181717]/60 outline-none ring-ts-primary/50 transition-colors hover:bg-[#181717]/[0.04] hover:text-[#181717] focus-visible:ring-2"
            >
              Log in
            </a>
            <button
              onClick={handleDemoClick}
              className="ts-btn-pill group flex h-10 items-center px-5 py-2.5 text-[13px] cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="relative mr-1 rounded-full p-2 text-[#181717]/80 outline-none ring-ts-primary/50 transition-colors hover:bg-[#181717]/5 focus-visible:ring-2 md:hidden cursor-pointer"
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={`absolute h-[1.5px] w-4 transform bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 transform bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu dropdown (conditionally rendered) */}
        <AnimatePresence>
          {mobileOpen && (
            <MobileMenu
              links={pageLinks}
              currentPath={pathname}
              onClose={closeMenu}
              onDemo={handleDemoClick}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}