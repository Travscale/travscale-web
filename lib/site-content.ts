export const siteConfig = {
  name: "Travscale",
  legalName: "Travscale Technologies Pvt. Ltd.",
  description:
    "Travscale is a modern travel operations platform for agencies that need faster bookings, cleaner finance workflows, and stronger customer delivery.",
  url: "https://travscale.com",
  locale: "en_IN",
  themeColor: "#003399",
  ogImage: "/opengraph-image.png",
  founded: "2026",
  socials: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
} as const;

export type SiteLink = {
  label: string;
  href: string;
  description?: string;
};

export const sectionLinks: SiteLink[] = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const navbarPageLinks: SiteLink[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinkGroups: Array<{ title: string; links: SiteLink[] }> = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "Workflow", href: "#how-it-works" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/documentation" },
      { label: "Help Center", href: "/help-center" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Security", href: "/security" },
    ],
  },
];

export type PlaceholderPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  sections: Array<{ heading: string; body: string }>;
};

export const placeholderPages: Record<string, PlaceholderPageContent> = {
  about: {
    title: "About Travscale",
    description:
      "Discover Travscale's mission, operating philosophy, and product vision for modern travel agencies.",
    eyebrow: "Company",
    sections: [
      {
        heading: "Who We Are",
        body: "Travscale is building the operating layer for forward-looking travel teams. We combine workflow depth with a fast, operator-friendly interface.",
      },
      {
        heading: "What We Stand For",
        body: "Operational clarity, transparent processes, and measurable outcomes. Every feature is designed to reduce manual friction and increase service quality.",
      },
      {
        heading: "Current Status",
        body: "This page currently uses curated dummy content and will be replaced with production copy as part of the final content rollout.",
      },
    ],
  },
  careers: {
    title: "Careers",
    description:
      "Explore upcoming roles and opportunities to help shape the future of travel operations with Travscale.",
    eyebrow: "Company",
    sections: [
      {
        heading: "Our Culture",
        body: "We work with product rigor, ownership, and a customer-first mindset. We prefer clear writing, quick experiments, and high standards.",
      },
      {
        heading: "Open Roles",
        body: "No active public listings yet. We will publish role-specific requirements and hiring timelines in this section.",
      },
      {
        heading: "Hiring Pipeline",
        body: "Dummy placeholder for role briefs, interview process details, and response timelines.",
      },
    ],
  },
  blog: {
    title: "Blog",
    description:
      "Read practical insights on scaling travel agency operations, finance workflows, and modern distribution.",
    eyebrow: "Resources",
    sections: [
      {
        heading: "Editorial Focus",
        body: "We cover operations playbooks, GTM lessons, product updates, and implementation stories for travel leaders.",
      },
      {
        heading: "Publishing Rhythm",
        body: "This section is placeholder content that will evolve into a weekly editorial stream with category filters.",
      },
      {
        heading: "Content Archive",
        body: "Dummy area reserved for latest articles, featured posts, and knowledge tracks.",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Reach the Travscale team for demos, partnerships, enterprise onboarding, or product questions.",
    eyebrow: "Company",
    sections: [
      {
        heading: "Sales",
        body: "Placeholder for inquiry workflows, SLA targets, and qualification process.",
      },
      {
        heading: "Support",
        body: "Placeholder for support channels, escalation matrix, and response expectations.",
      },
      {
        heading: "Partnerships",
        body: "Dummy section reserved for integration and ecosystem collaboration requests.",
      },
    ],
  },
  customers: {
    title: "Customers",
    description:
      "See how agencies and consolidators are improving operating margins and response speed using Travscale.",
    eyebrow: "Company",
    sections: [
      {
        heading: "Customer Profiles",
        body: "Placeholder for segment-wise customer snapshots across leisure, corporate, and DMC operators.",
      },
      {
        heading: "Outcomes",
        body: "Dummy section for baseline metrics, before/after comparisons, and efficiency benchmarks.",
      },
      {
        heading: "Case Stories",
        body: "Reserved for implementation stories and measured impact examples.",
      },
    ],
  },
  press: {
    title: "Press",
    description:
      "Access official brand resources, media notes, and company announcements from Travscale.",
    eyebrow: "Company",
    sections: [
      {
        heading: "Media Kit",
        body: "Placeholder for logo files, brand colors, and usage guidelines.",
      },
      {
        heading: "Announcements",
        body: "Dummy list for launches, partnerships, and milestones.",
      },
      {
        heading: "Press Contact",
        body: "Reserved for media outreach and spokesperson requests.",
      },
    ],
  },
  documentation: {
    title: "Documentation",
    description:
      "Technical and operational docs to deploy Travscale workflows with confidence.",
    eyebrow: "Resources",
    sections: [
      {
        heading: "Getting Started",
        body: "Placeholder for setup paths and environment onboarding guides.",
      },
      {
        heading: "Module Guides",
        body: "Dummy list for booking workflows, finance automations, and reporting modules.",
      },
      {
        heading: "Release Notes",
        body: "Reserved for product release updates and migration guidance.",
      },
    ],
  },
  "help-center": {
    title: "Help Center",
    description:
      "Find support answers, troubleshooting paths, and operational FAQs.",
    eyebrow: "Resources",
    sections: [
      {
        heading: "Top Questions",
        body: "Placeholder for frequently searched support topics.",
      },
      {
        heading: "Troubleshooting",
        body: "Dummy section reserved for issue diagnostics and recovery guides.",
      },
      {
        heading: "Escalations",
        body: "Reserved for escalation workflow and emergency support policies.",
      },
    ],
  },
  "api-reference": {
    title: "API Reference",
    description:
      "Review endpoints, schemas, and integration methods for connecting external systems.",
    eyebrow: "Resources",
    sections: [
      {
        heading: "Authentication",
        body: "Placeholder for auth methods, token rotation, and access scopes.",
      },
      {
        heading: "Endpoints",
        body: "Dummy endpoint index for bookings, itineraries, invoices, and customer records.",
      },
      {
        heading: "Examples",
        body: "Reserved for sample requests, webhook payloads, and error handling conventions.",
      },
    ],
  },
  status: {
    title: "System Status",
    description:
      "Monitor service uptime, performance indicators, and incident communication.",
    eyebrow: "Resources",
    sections: [
      {
        heading: "Current Health",
        body: "Placeholder for uptime dashboards and component-level availability.",
      },
      {
        heading: "Incident History",
        body: "Dummy log section for resolved incidents and timeline details.",
      },
      {
        heading: "Subscriptions",
        body: "Reserved for status alerts and webhook notification setup.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "Understand how Travscale collects, stores, and protects customer and traveler data.",
    eyebrow: "Legal",
    sections: [
      {
        heading: "Data Collection",
        body: "Placeholder text covering categories of information and lawful processing basis.",
      },
      {
        heading: "Data Usage",
        body: "Dummy policy text for service operations, analytics, and compliance.",
      },
      {
        heading: "Data Rights",
        body: "Reserved for access, deletion, and retention request procedures.",
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    description:
      "Review service terms, account obligations, and commercial conditions for Travscale.",
    eyebrow: "Legal",
    sections: [
      {
        heading: "Service Scope",
        body: "Placeholder summary of service coverage, access boundaries, and acceptable use.",
      },
      {
        heading: "Commercial Terms",
        body: "Dummy section for billing terms, contract conditions, and subscription clauses.",
      },
      {
        heading: "Liability",
        body: "Reserved for warranty disclaimers, indemnity, and legal limitations.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description:
      "Learn how cookies and similar technologies are used across Travscale properties.",
    eyebrow: "Legal",
    sections: [
      {
        heading: "Cookie Categories",
        body: "Placeholder for essential, analytics, and preference cookie classifications.",
      },
      {
        heading: "Consent Controls",
        body: "Dummy area for consent banner behavior and preference updates.",
      },
      {
        heading: "Retention",
        body: "Reserved for cookie lifetime and third-party cookie disclosures.",
      },
    ],
  },
  security: {
    title: "Security",
    description:
      "Review the security baseline, controls, and governance approach behind Travscale.",
    eyebrow: "Legal",
    sections: [
      {
        heading: "Security Controls",
        body: "Placeholder list for encryption standards, access policies, and infrastructure controls.",
      },
      {
        heading: "Compliance",
        body: "Dummy section reserved for certifications, audits, and policy controls.",
      },
      {
        heading: "Responsible Disclosure",
        body: "Reserved for vulnerability reporting process and response SLAs.",
      },
    ],
  },
  integrations: {
    title: "Integrations",
    description:
      "Connect Travscale with your distribution, accounting, CRM, and communication stack.",
    eyebrow: "Platform",
    sections: [
      {
        heading: "Connected Systems",
        body: "Placeholder for GDS, payment gateways, messaging tools, and finance platforms.",
      },
      {
        heading: "Integration Flow",
        body: "Dummy section for implementation stages, prerequisites, and deployment checklist.",
      },
      {
        heading: "Roadmap",
        body: "Reserved for upcoming integration priorities and release cadence.",
      },
    ],
  },
  changelog: {
    title: "Changelog",
    description:
      "Track product releases, feature improvements, and quality updates from the Travscale team.",
    eyebrow: "Platform",
    sections: [
      {
        heading: "Latest Releases",
        body: "Placeholder list for recent releases with scope and rollout notes.",
      },
      {
        heading: "Improvements",
        body: "Dummy section for performance, UX, and reliability improvements.",
      },
      {
        heading: "Deprecations",
        body: "Reserved for sunset notices and migration recommendations.",
      },
    ],
  },
};

export const placeholderSlugs = Object.keys(placeholderPages);

export const placeholderPageLinks = placeholderSlugs.map((slug) => ({
  label: placeholderPages[slug].title,
  href: `/${slug}`,
}));

export function toAbsoluteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.url}${path}`;
}

export function isHashLink(href: string): boolean {
  return href.startsWith("#");
}
