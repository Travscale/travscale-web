import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { footerLinkGroups, isHashLink, siteConfig } from "@/lib/site-content";

const LOGO_WORDMARK =
  "https://customer-assets.emergentagent.com/job_ff523236-7639-4c36-96ff-1cf74a0e278a/artifacts/624d08ht_logo-w-name.svg";

type FooterProps = {
  onDemoClick: () => void;
};

export default function Footer({ onDemoClick }: FooterProps) {
  const handleClick = (href: string) => {
    if (isHashLink(href) && href.length > 1) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white" data-testid="footer-section">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8">
            <div>
              <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-white/30 block mb-4">
                Ready to scale?
              </span>
              <h2
                className="text-[1.9rem] sm:text-4xl md:text-5xl tracking-tight font-medium leading-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Let&apos;s transform your
                <br />
                travel operations.
              </h2>
            </div>
            <button
              className="bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-semibold hover:bg-[#003399] hover:text-white transition-colors flex items-center justify-center gap-2 shrink-0 rounded-xl w-full md:w-auto"
              data-testid="footer-cta-btn"
              onClick={onDemoClick}
              type="button"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-9 md:gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              alt="Travscale"
              className="h-6 w-auto mb-4 invert"
              height={24}
              src={LOGO_WORDMARK}
              width={130}
            />
            <p className="text-sm text-white/40 leading-relaxed">
              The professional ERP for modern travel agencies.
            </p>
            <p className="text-xs text-white/30 mt-2 leading-relaxed">
              All linked pages are available with polished placeholder content.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-white/30 mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {isHashLink(link.href) ? (
                      <button
                        className="text-sm text-white/60 hover:text-white transition-colors py-0.5"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => handleClick(link.href)}
                        type="button"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        className="text-sm text-white/60 hover:text-white transition-colors py-0.5"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 flex items-center gap-1.5">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            <span className="text-white/20">•</span>
            <a
              className="text-white/35 hover:text-white/55 transition-colors"
              href="https://abubakarshaikh.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              abubakarshaikh.dev
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
              href={siteConfig.socials.twitter}
            >
              Twitter
            </a>
            <a
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
              href={siteConfig.socials.linkedin}
            >
              LinkedIn
            </a>
            <a
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
              href={siteConfig.socials.instagram}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
