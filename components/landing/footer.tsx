import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { footerLinkGroups, isHashLink, siteConfig } from "@/lib/site-content";

const LOGO_WORDMARK =
  "https://customer-assets.emergentagent.com/job_ff523236-7639-4c36-96ff-1cf74a0e278a/artifacts/624d08ht_logo-w-name.svg";

type FooterProps = { onDemoClick: () => void };

export default function Footer({ onDemoClick }: FooterProps) {
  const handleClick = (href: string) => {
    if (isHashLink(href) && href.length > 1) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer data-testid="footer-section">
      {/* CTA Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2e2d2d 0%, #181717 100%)",
        }}
      >
        {/* Gradient orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#d04841]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#5a82de]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-white/30 block mb-4">Ready to scale?</span>
              <h2
                className="text-[1.9rem] sm:text-4xl md:text-5xl tracking-tight font-medium leading-[1.1] text-white max-w-md"
                style={{ letterSpacing: "-1.44px" }}
              >
                Let&apos;s transform your travel operations.
              </h2>
            </div>
            <button
              className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl bg-white text-[#181717] text-[15px] font-medium transition-all duration-300 hover:bg-[#d04841] hover:text-white hover:shadow-[0_8px_32px_-8px_rgba(208,72,65,0.4)] shrink-0"
              data-testid="footer-cta-btn"
              onClick={onDemoClick}
              type="button"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="bg-[#181717] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-16 md:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10">
            <div className="col-span-2 sm:col-span-3 md:col-span-1">
              <Image alt="Travscale" className="h-5 w-auto mb-4 invert" height={20} src={LOGO_WORDMARK} width={110} />
              <p className="text-sm text-white/35 leading-relaxed max-w-[200px]">The professional ERP for modern travel agencies.</p>
            </div>
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/25 mb-5">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {isHashLink(link.href) ? (
                        <button className="text-sm text-white/50 hover:text-white transition-colors py-0.5" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => handleClick(link.href)} type="button">{link.label}</button>
                      ) : (
                        <Link className="text-sm text-white/50 hover:text-white transition-colors py-0.5" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`} href={link.href}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25 flex items-center gap-1.5">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              <span className="text-white/15">•</span>
              <a className="text-white/30 hover:text-white/50 transition-colors" href="https://abubakarshaikh.dev" rel="noopener noreferrer" target="_blank">abubakarshaikh.dev</a>
            </p>
            <div className="flex items-center gap-6">
              <a className="text-xs text-white/25 hover:text-white/50 transition-colors" href={siteConfig.socials.twitter}>Twitter</a>
              <a className="text-xs text-white/25 hover:text-white/50 transition-colors" href={siteConfig.socials.linkedin}>LinkedIn</a>
              <a className="text-xs text-white/25 hover:text-white/50 transition-colors" href={siteConfig.socials.instagram}>Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
