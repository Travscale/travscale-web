// Framework
import type { Metadata } from "next";

// Components
import TermsAndConditionsPage from "@/components/pages/legal/terms-and-conditions-page";

// Lib
import { siteConfig, toAbsoluteUrl } from "@/lib/site-content";

type TermsContact = {
  email: string;
  website: string;
  instagram?: string;
  github?: string;
};

type TermsClause = {
  id: string;
  heading?: string;
  text?: string;
  contact?: TermsContact;
};

type TermsSection = {
  id: string;
  title: string;
  clauses: TermsClause[];
};

type TermsDocument = {
  title: string;
  product: string;
  company: string;
  website: string;
  app: string;
  contact_email: string;
  version: string;
  effective_date: string;
  last_updated: string;
  jurisdiction: string;
  governing_law: string;
  dispute_forum: string;
};

type TermsMeta = {
  total_sections: number;
  indian_law_references: string[];
  key_product_specific_clauses: string[];
};

const termsDocument: TermsDocument = {
  title: "Terms and Conditions",
  product: "Travscale",
  company: "Travscale",
  website: "https://www.travscale.com",
  app: "https://agent.travscale.com",
  contact_email: "travscalehq@gmail.com",
  version: "1.0.0",
  effective_date: "2026-04-01",
  last_updated: "2026-04-01",
  jurisdiction: "India",
  governing_law: "Laws of India",
  dispute_forum: "Courts of Bengaluru, Karnataka, India",
};

const termsSections: TermsSection[] = [
  {
    id: "1",
    title: "Acceptance of Terms",
    clauses: [
      {
        id: "1.1",
        text: "By creating an account on Travscale, accessing the platform at agent.travscale.com, or using any Travscale service, you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree, you must not use the platform.",
      },
      {
        id: "1.2",
        text: "These Terms constitute a legally binding agreement between you ('Agent', 'User', or 'You') and Travscale ('Company', 'We', 'Us', or 'Our'). If you are using Travscale on behalf of an agency or business entity, you represent that you have the authority to bind that entity to these Terms.",
      },
      {
        id: "1.3",
        text: "We may update these Terms at any time. Material changes will be communicated via email to your registered address or via an in-app notice. Your continued use of the platform after a change is effective constitutes acceptance of the updated Terms.",
      },
    ],
  },
  {
    id: "2",
    title: "Eligibility",
    clauses: [
      {
        id: "2.1",
        text: "You must be at least 18 years of age to create an account and use Travscale.",
      },
      {
        id: "2.2",
        text: "Travscale is designed for use by travel agents, independent travel consultants, visa consultants, and small travel agencies operating lawfully within India. Use outside these categories does not automatically void your account, but certain features and support may not be optimised for your use case.",
      },
      {
        id: "2.3",
        text: "You must provide accurate, complete, and current information during registration and must keep your account details up to date.",
      },
    ],
  },
  {
    id: "3",
    title: "Accounts and Access",
    clauses: [
      {
        id: "3.1",
        text: "Each account is tied to one agency or individual agent. One email address can be associated with only one Travscale account.",
      },
      {
        id: "3.2",
        text: "You are responsible for maintaining the confidentiality of your login credentials. You are fully responsible for all activity that occurs under your account, whether or not authorised by you.",
      },
      {
        id: "3.3",
        text: "You must notify us immediately at travscalehq@gmail.com if you suspect any unauthorised access to your account.",
      },
      {
        id: "3.4",
        text: "Multi-user access (team members) is available on Agency plan and above. Each team member must agree to these Terms individually. You are responsible for the actions of all users added to your account.",
      },
      {
        id: "3.5",
        text: "We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or remain inactive for more than 12 consecutive months on a free plan.",
      },
    ],
  },
  {
    id: "4",
    title: "Subscription Plans and Payments",
    clauses: [
      {
        id: "4.1",
        heading: "Free Tier",
        text: "The Free plan is provided at no cost and is subject to usage limits, including a cap of 50 new passengers per calendar month. Travscale reserves the right to modify free tier limits with 30 days' notice.",
      },
      {
        id: "4.2",
        heading: "Paid Plans",
        text: "Paid plans (Solo Pro, Agency) are billed monthly or annually in Indian Rupees (INR). Prices are listed at travscale.com/pricing and are inclusive of applicable taxes unless stated otherwise.",
      },
      {
        id: "4.3",
        heading: "GST",
        text: "GST is applicable on all paid subscriptions at the rate prescribed by Indian law at the time of billing. GST invoices will be issued to your registered billing address. You are responsible for providing accurate GST details if you require a B2B invoice.",
      },
      {
        id: "4.4",
        heading: "Billing Cycle",
        text: "Subscriptions auto-renew at the end of each billing period unless cancelled before the renewal date. You authorise us to charge your payment method on file for each renewal.",
      },
      {
        id: "4.5",
        heading: "Upgrades and Downgrades",
        text: "Plan changes take effect at the start of the next billing cycle. Upgrades may be applied immediately with prorated charges at our discretion.",
      },
      {
        id: "4.6",
        heading: "Refunds",
        text: "Payments are non-refundable except where required by applicable Indian law. If you believe a charge was made in error, contact travscalehq@gmail.com within 7 days of the charge.",
      },
      {
        id: "4.7",
        heading: "Failed Payments",
        text: "If a payment fails, your account will move to a restricted state after a 7-day grace period. Data is retained during this period. Accounts in restricted state for more than 30 days may be suspended.",
      },
      {
        id: "4.8",
        heading: "Free Trials",
        text: "Free trials on paid plans are available as advertised on the pricing page. No credit card is required to start a trial. At the end of the trial period, you may upgrade to a paid plan or your account will revert to the Free tier.",
      },
    ],
  },
  {
    id: "5",
    title: "Acceptable Use",
    clauses: [
      {
        id: "5.1",
        text: "You may use Travscale only for lawful purposes and in accordance with these Terms. You agree not to use the platform:",
      },
      {
        id: "5.1.a",
        text: "To store, transmit, or process data in violation of any applicable Indian law or regulation, including but not limited to the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.",
      },
      {
        id: "5.1.b",
        text: "To misrepresent your identity, impersonate another travel agent, or create accounts on behalf of others without authorisation.",
      },
      {
        id: "5.1.c",
        text: "To reverse engineer, decompile, or attempt to extract the source code of any part of the Travscale platform.",
      },
      {
        id: "5.1.d",
        text: "To scrape, crawl, or systematically extract data from the platform using automated means without our prior written consent.",
      },
      {
        id: "5.1.e",
        text: "To upload content that is unlawful, defamatory, obscene, fraudulent, or that infringes the intellectual property rights of any third party.",
      },
      {
        id: "5.1.f",
        text: "To attempt to gain unauthorised access to other accounts, systems, or networks connected to Travscale.",
      },
      {
        id: "5.2",
        text: "Travscale is a business operations tool. You must not use it as a consumer-facing booking platform for direct ticket or travel sales without our prior written agreement.",
      },
    ],
  },
  {
    id: "6",
    title: "Data Ownership and Customer Data",
    clauses: [
      {
        id: "6.1",
        text: "You retain full ownership of all data you upload or create within Travscale, including customer profiles, passenger records, order details, documents, and service charge records ('Your Data').",
      },
      {
        id: "6.2",
        text: "You grant Travscale a limited, non-exclusive, royalty-free licence to store, process, and display Your Data solely for the purpose of providing the service to you.",
      },
      {
        id: "6.3",
        text: "Travscale does not sell, rent, or share Your Data with third parties for advertising or marketing purposes. We do not monetise your client data in any form.",
      },
      {
        id: "6.4",
        text: "You are the data fiduciary for your customers' personal data stored in Travscale. You are responsible for obtaining all necessary consents from your customers and passengers before uploading their personal information, in compliance with the Digital Personal Data Protection Act, 2023.",
      },
      {
        id: "6.5",
        text: "You represent and warrant that you have lawful authority to upload all data entered into the platform, including customer names, passport details, contact information, and any other personal data.",
      },
    ],
  },
  {
    id: "7",
    title: "Audit Logs and Immutability of Service Charge Records",
    clauses: [
      {
        id: "7.1",
        text: "Service charge records created in Travscale are append-only and immutable by design. Once a service charge is logged, it cannot be edited or deleted - by you, by your team members, or by Travscale.",
      },
      {
        id: "7.2",
        text: "Audit logs associated with service charges record the user identity, timestamp, amount, and input snapshot at the time of creation. These records are stored in a write-protected state and cannot be altered after creation.",
      },
      {
        id: "7.3",
        text: "This immutability is a deliberate product design principle, not a technical limitation. It exists to provide agents and their clients with trustworthy financial records. By using Travscale, you acknowledge and accept this design.",
      },
      {
        id: "7.4",
        text: "If a charge is recorded in error, the correct resolution is to create a correcting entry (e.g., a credit note or adjustment) as a new record. Travscale will not modify or delete existing charge records on your request.",
      },
    ],
  },
  {
    id: "8",
    title: "Document Storage",
    clauses: [
      {
        id: "8.1",
        text: "Travscale provides cloud document storage for files linked to your customers, passengers, orders, and visa applications. Storage limits apply per plan as described on the pricing page.",
      },
      {
        id: "8.2",
        text: "You are solely responsible for the content of documents you upload. Do not upload documents you do not have the right to store or share.",
      },
      {
        id: "8.3",
        text: "We use S3-compatible object storage with encryption at rest and in transit. We do not access the contents of your documents except as necessary for technical support requested by you, or as required by law.",
      },
      {
        id: "8.4",
        text: "Upon account termination, documents are retained for 30 days to allow for data export requests, after which they are permanently deleted.",
      },
    ],
  },
  {
    id: "9",
    title: "Notifications and Communications",
    clauses: [
      {
        id: "9.1",
        text: "Travscale sends automated email notifications to your customers on your behalf when you configure this feature. You are responsible for the accuracy of customer contact details you enter into the platform.",
      },
      {
        id: "9.2",
        text: "By enabling automated notifications, you confirm that your customers have consented to receive email communications from you via Travscale.",
      },
      {
        id: "9.3",
        text: "Travscale may send you service-related communications such as billing alerts, plan limit warnings, feature updates, and security notices. These are not optional and cannot be fully unsubscribed from while your account is active.",
      },
      {
        id: "9.4",
        text: "Travscale does not guarantee delivery of automated notifications. We are not liable for delays or failures in email delivery caused by third-party providers, spam filters, or incorrect contact information.",
      },
    ],
  },
  {
    id: "10",
    title: "API Access",
    clauses: [
      {
        id: "10.1",
        text: "API access is available to Agency plan and above subscribers. API credentials are tied to your account and must not be shared externally.",
      },
      {
        id: "10.2",
        text: "Travscale imposes rate limits on API usage to ensure platform stability. We reserve the right to throttle or suspend API access that causes disproportionate load on our infrastructure.",
      },
      {
        id: "10.3",
        text: "Applications built on the Travscale API must not expose Travscale as a direct consumer booking platform, resell API access, or aggregate data from multiple tenant accounts without written permission.",
      },
    ],
  },
  {
    id: "11",
    title: "Design Partner Program",
    clauses: [
      {
        id: "11.1",
        text: "Design partners receive free access to Travscale for a defined period (currently 3 months) in exchange for structured feedback, participation in feedback sessions, and consent to usage data collection under these Terms.",
      },
      {
        id: "11.2",
        text: "Design partner access is non-transferable and limited to the agency or individual who applied. It may not be shared with other agents.",
      },
      {
        id: "11.3",
        text: "Travscale may use anonymised feedback and product usage observations from design partners to improve the product. No personally identifiable customer data is used in any public communication without your explicit written consent.",
      },
      {
        id: "11.4",
        text: "Case studies, testimonials, or public mentions require your separate written consent. You are never automatically named or identified in any Travscale marketing material.",
      },
      {
        id: "11.5",
        text: "At the end of the design partner period, your account transitions to the appropriate paid or free plan. We will notify you at least 14 days before the transition.",
      },
    ],
  },
  {
    id: "12",
    title: "Intellectual Property",
    clauses: [
      {
        id: "12.1",
        text: "Travscale and all associated software, design, branding, documentation, and technology ('Platform IP') are the exclusive property of Travscale. Nothing in these Terms transfers any Platform IP ownership to you.",
      },
      {
        id: "12.2",
        text: "You are granted a limited, non-exclusive, non-transferable, revocable licence to use the platform solely for your internal travel agency operations during the period of your active subscription.",
      },
      {
        id: "12.3",
        text: "Feedback, suggestions, or ideas you share with Travscale (including through the design partner program or support channels) may be used by us to improve the product without obligation to compensate you.",
      },
    ],
  },
  {
    id: "13",
    title: "Confidentiality",
    clauses: [
      {
        id: "13.1",
        text: "Each party may have access to information that is confidential to the other. Both parties agree to keep such information confidential and not to disclose it to third parties without prior written consent.",
      },
      {
        id: "13.2",
        text: "Travscale's confidential information includes unreleased features, product roadmap details, internal pricing structures, and technical architecture shared in the context of the design partner program.",
      },
      {
        id: "13.3",
        text: "Your confidential information includes your customer data, financial records, and business operations data stored in the platform.",
      },
    ],
  },
  {
    id: "14",
    title: "Service Availability and Maintenance",
    clauses: [
      {
        id: "14.1",
        text: "Travscale targets high availability but does not guarantee 100% uptime. Scheduled maintenance will be communicated via email or in-app notice at least 24 hours in advance where possible.",
      },
      {
        id: "14.2",
        text: "We are not liable for loss or damage arising from platform downtime, including missed customer notifications or delayed order processing.",
      },
      {
        id: "14.3",
        text: "In the event of data loss caused by our systems, our liability is limited to restoring the most recent available backup. We are not liable for data entered or modified after the last backup point.",
      },
    ],
  },
  {
    id: "15",
    title: "Termination",
    clauses: [
      {
        id: "15.1",
        heading: "Termination by You",
        text: "You may cancel your account at any time from your account settings or by contacting travscalehq@gmail.com. Cancellation takes effect at the end of your current billing period. No refunds are issued for the remaining period.",
      },
      {
        id: "15.2",
        heading: "Termination by Travscale",
        text: "We may suspend or terminate your account immediately without notice if you breach these Terms, engage in fraudulent or illegal activity, or cause harm to the platform or other users.",
      },
      {
        id: "15.3",
        heading: "Effect of Termination",
        text: "Upon termination, your right to access the platform ceases. Your data is retained for 30 days after termination, during which you may request an export. After 30 days, your data is permanently deleted. Audit logs associated with service charges are retained for 7 years in compliance with Indian financial record-keeping requirements.",
      },
      {
        id: "15.4",
        text: "Clauses that by their nature survive termination - including data ownership, intellectual property, confidentiality, audit log retention, limitation of liability, and governing law - remain in effect after termination.",
      },
    ],
  },
  {
    id: "16",
    title: "Limitation of Liability",
    clauses: [
      {
        id: "16.1",
        text: "To the maximum extent permitted by applicable Indian law, Travscale shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or in connection with your use of the platform.",
      },
      {
        id: "16.2",
        text: "Our total aggregate liability for any claim arising under or related to these Terms shall not exceed the total amount you paid to Travscale in the 3 months preceding the event giving rise to the claim, or INR 5,000, whichever is higher.",
      },
      {
        id: "16.3",
        text: "Travscale is not liable for: loss of business, loss of revenue, loss of data caused by your own actions, damage caused by third-party integrations, or losses arising from your failure to maintain accurate customer data.",
      },
      {
        id: "16.4",
        text: "Nothing in these Terms excludes or limits liability for fraud, death or personal injury caused by negligence, or any other liability that cannot lawfully be limited or excluded under Indian law.",
      },
    ],
  },
  {
    id: "17",
    title: "Disclaimer of Warranties",
    clauses: [
      {
        id: "17.1",
        text: "The platform is provided 'as is' and 'as available' without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      },
      {
        id: "17.2",
        text: "Travscale does not warrant that the platform will be error-free, uninterrupted, or free of viruses or other harmful components.",
      },
      {
        id: "17.3",
        text: "We do not guarantee that automated notifications sent on your behalf will be received by your customers, or that visa or order status updates will trigger notifications without fail.",
      },
    ],
  },
  {
    id: "18",
    title: "Governing Law and Dispute Resolution",
    clauses: [
      {
        id: "18.1",
        text: "These Terms are governed by and construed in accordance with the laws of India.",
      },
      {
        id: "18.2",
        text: "Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties.",
      },
      {
        id: "18.3",
        text: "If negotiation fails within 30 days, the dispute shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.",
      },
      {
        id: "18.4",
        text: "For disputes involving amounts below INR 5,00,000, either party may initiate proceedings before the appropriate Consumer Disputes Redressal Commission or the relevant Online Dispute Resolution mechanism as available under Indian law.",
      },
    ],
  },
  {
    id: "19",
    title: "Miscellaneous",
    clauses: [
      {
        id: "19.1",
        heading: "Entire Agreement",
        text: "These Terms, together with the Privacy Policy and any supplemental terms applicable to specific features, constitute the entire agreement between you and Travscale and supersede all prior communications or agreements.",
      },
      {
        id: "19.2",
        heading: "Severability",
        text: "If any clause of these Terms is found to be invalid or unenforceable, the remaining clauses continue in full force and effect.",
      },
      {
        id: "19.3",
        heading: "Waiver",
        text: "Our failure to enforce any provision of these Terms on any occasion does not constitute a waiver of our right to enforce it in the future.",
      },
      {
        id: "19.4",
        heading: "Assignment",
        text: "You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations in connection with a merger, acquisition, or sale of assets without your consent.",
      },
      {
        id: "19.5",
        heading: "Force Majeure",
        text: "Travscale is not liable for any failure or delay in performance caused by events beyond our reasonable control, including natural disasters, government actions, internet infrastructure failures, or pandemics.",
      },
      {
        id: "19.6",
        heading: "Language",
        text: "These Terms are written in English. In the event of any conflict between an English version and a translated version, the English version prevails.",
      },
    ],
  },
  {
    id: "20",
    title: "Contact",
    clauses: [
      {
        id: "20.1",
        text: "For questions, concerns, or legal notices related to these Terms, contact us at:",
      },
      {
        id: "20.2",
        contact: {
          email: "travscalehq@gmail.com",
          website: "https://www.travscale.com",
          instagram: "@travscale",
          github: "@travscale",
        },
      },
    ],
  },
];

const termsMeta: TermsMeta = {
  total_sections: 20,
  indian_law_references: [
    "Information Technology Act, 2000",
    "Digital Personal Data Protection Act, 2023",
    "Consumer Protection Act, 2019",
    "Indian Contract Act, 1872",
  ],
  key_product_specific_clauses: [
    "Section 7 - Immutability of service charge records and audit logs",
    "Section 6 - Agent as data fiduciary for customer data",
    "Section 11 - Design partner program specific terms",
    "Section 15.3 - 7-year retention of audit logs post-termination",
  ],
};

const legalDocumentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: termsDocument.title,
  description: `Terms and Conditions governing the use of ${termsDocument.product}.`,
  url: toAbsoluteUrl("/terms-and-conditions"),
  datePublished: termsDocument.effective_date,
  dateModified: termsDocument.last_updated,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: termsDocument.company,
    url: termsDocument.website,
  },
};

function formatLegalDate(value: string): string {
  return new Date(`${value}T00:00:00.000Z`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the official Terms and Conditions governing access to and use of Travscale.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: `Terms and Conditions | ${siteConfig.name}`,
    description:
      "Read the official Terms and Conditions governing access to and use of Travscale.",
    url: toAbsoluteUrl("/terms-and-conditions"),
    type: "article",
    images: [toAbsoluteUrl(siteConfig.ogImage)],
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms and Conditions | ${siteConfig.name}`,
    description:
      "Read the official Terms and Conditions governing access to and use of Travscale.",
    images: [toAbsoluteUrl(siteConfig.ogImage)],
  },
};

export default function TermsAndConditionsRoutePage() {
  const effectiveDate = formatLegalDate(termsDocument.effective_date);
  const updatedDate = formatLegalDate(termsDocument.last_updated);

  return (
    <TermsAndConditionsPage
      effectiveDate={effectiveDate}
      legalDocumentSchema={legalDocumentSchema}
      termsDocument={termsDocument}
      termsMeta={termsMeta}
      termsSections={termsSections}
      updatedDate={updatedDate}
    />
  );
}
