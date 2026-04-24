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
    <footer data-testid="footer-section" className="flex flex-col">
      
      {/* Massive Minimalist CTA Section */}
      <div className="bg-[#f9f7f6] pt-16 pb-32 sm:pb-40 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <div className="mb-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-[#181717]/5">
            <Image alt="Travscale Logo" src={LOGO_WORDMARK} width={32} height={32} className="w-8 h-8 object-contain" />
          </div>

          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-medium text-[#181717] tracking-tight mb-8 leading-[1.05]">
            Scale your agency <br className="hidden md:block" />
            <span className="text-[#181717]/40">without the chaos.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#666666] mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the world's fastest-growing travel agencies standardizing their workflows on Travscale. Built for modern travel operations.
          </p>
          
          <button
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#181717] text-white text-base font-medium transition-all duration-300 hover:bg-[#2e2d2d] hover:shadow-xl hover:-translate-y-1"
            data-testid="footer-cta-btn"
            onClick={onDemoClick}
            type="button"
          >
            Start your free trial
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Highly Structured Dark Footer */}
      <div className="bg-[#111111] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 sm:gap-8 mb-20">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Image alt="Travscale" className="h-6 w-auto mb-6 invert opacity-100" height={24} src={LOGO_WORDMARK} width={132} />
              <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
                The enterprise-grade operations platform for modern travel agencies, TMCs, and visa specialists.
              </p>
            </div>
            
            {/* Links Columns */}
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="col-span-1">
                <h4 className="text-[12px] font-semibold text-white mb-6">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {isHashLink(link.href) ? (
                        <button 
                          className="text-[14px] font-medium text-white/50 hover:text-white transition-colors duration-200" 
                          data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`} 
                          onClick={() => handleClick(link.href)} 
                          type="button"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link 
                          className="text-[14px] font-medium text-white/50 hover:text-white transition-colors duration-200" 
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

          {/* Legal & Social Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-[13px] text-white/40 font-medium">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a className="text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-200" href={siteConfig.socials.twitter}>Twitter</a>
              <a className="text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-200" href={siteConfig.socials.linkedin}>LinkedIn</a>
              <a className="text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-200" href={siteConfig.socials.instagram}>Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
