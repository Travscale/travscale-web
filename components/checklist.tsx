"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  CheckIcon,
  CalendarDaysIcon,
  FileTextIcon,
  UsersIcon,
  BarChart3Icon,
  GlobeIcon,
  ShieldCheckIcon,
  ZapIcon,
  CreditCardIcon,
} from "lucide-react";

interface ChecklistItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "done" | "building" | "planned";
}

const checklistItems: ChecklistItem[] = [
  {
    title: "Smart Booking Management",
    description:
      "Centralized dashboard for flights, hotels, and packages with real-time availability.",
    icon: <CalendarDaysIcon className="size-4" />,
    status: "done",
  },
  {
    title: "Automated Invoicing",
    description:
      "Generate professional invoices, track payments, and reconcile accounts automatically.",
    icon: <CreditCardIcon className="size-4" />,
    status: "done",
  },
  {
    title: "Dynamic Itinerary Builder",
    description:
      "Drag-and-drop itinerary creation with maps, timing, and real-time updates.",
    icon: <FileTextIcon className="size-4" />,
    status: "done",
  },
  {
    title: "Passenger CRM",
    description:
      "Complete passenger profiles, travel history, preferences, and document management.",
    icon: <UsersIcon className="size-4" />,
    status: "building",
  },
  {
    title: "Real-time Analytics",
    description:
      "Revenue tracking, booking trends, agent performance, and business intelligence.",
    icon: <BarChart3Icon className="size-4" />,
    status: "building",
  },
  {
    title: "Multi-currency Support",
    description:
      "Handle global transactions with automatic exchange rates and currency conversion.",
    icon: <GlobeIcon className="size-4" />,
    status: "building",
  },
  {
    title: "API Integrations",
    description:
      "Connect with Amadeus, Sabre, airline APIs, and 50+ travel service providers.",
    icon: <ZapIcon className="size-4" />,
    status: "planned",
  },
  {
    title: "SSO & Role-based Access",
    description:
      "Enterprise-grade security with SSO, team roles, and granular permissions.",
    icon: <ShieldCheckIcon className="size-4" />,
    status: "planned",
  },
];

const statusConfig = {
  done: {
    label: "Ready",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    dot: "bg-emerald-400",
  },
  building: {
    label: "In Progress",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    dot: "bg-amber-400",
  },
  planned: {
    label: "Planned",
    color: "text-white/40",
    bg: "bg-white/5",
    border: "border-white/10",
    dot: "bg-white/40",
  },
};

export function ChecklistSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative mx-auto w-full max-w-6xl px-4 py-20 md:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-0 top-1/4 h-[500px] w-[400px] rounded-full bg-linear-to-l from-[#1DB954]/5 to-transparent blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-[400px] w-[350px] rounded-full bg-linear-to-r from-blue-500/5 to-transparent blur-3xl" />
      </div>

      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm mb-4">
            <CheckIcon className="size-3 text-[#1DB954]" />
            Product Roadmap
          </span>
        </motion.div>

        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Everything You Need to{" "}
          <span className="bg-linear-to-r from-[#1DB954] via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Scale
          </span>
        </motion.h2>

        <motion.p
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mt-4 max-w-lg text-white/45 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive suite of tools designed for modern travel agencies.
          Here&apos;s what we&apos;re building.
        </motion.p>

        {/* Status legend */}
        <motion.div
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-6 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {Object.entries(statusConfig).map(([key, config]) => (
            <div className="flex items-center gap-2" key={key}>
              <div className={cn("size-2 rounded-full", config.dot)} />
              <span className={cn("text-xs", config.color)}>
                {config.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Checklist grid */}
      <div className="grid gap-3 md:grid-cols-2">
        {checklistItems.map((item, index) => {
          const status = statusConfig[item.status];
          return (
            <motion.div
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className={cn(
                "group relative rounded-xl border p-5 transition-all duration-300",
                "border-white/6 bg-white/2",
                "hover:border-white/12 hover:bg-white/4",
                item.status === "done" &&
                  "hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(29,185,84,0.05)]"
              )}
              initial={{ opacity: 0, y: 15 }}
              key={item.title}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.06,
                ease: "easeOut",
              }}
            >
              <div className="flex items-start gap-4">
                {/* Status checkbox */}
                <div
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
                    status.bg,
                    status.border,
                    "border"
                  )}
                >
                  {item.status === "done" ? (
                    <CheckIcon className="size-4 text-emerald-400" />
                  ) : (
                    <span className={cn("size-4", status.color)}>
                      {item.icon}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3
                      className={cn(
                        "font-semibold text-sm transition-colors duration-300",
                        item.status === "done"
                          ? "text-white/90"
                          : item.status === "building"
                            ? "text-white/75"
                            : "text-white/50"
                      )}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-medium",
                        status.bg,
                        status.color,
                        "border",
                        status.border
                      )}
                    >
                      {status.label}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-xs leading-relaxed",
                      item.status === "done"
                        ? "text-white/45"
                        : "text-white/30"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover line effect */}
              <div
                className={cn(
                  "absolute bottom-0 left-4 right-4 h-px transition-opacity duration-300",
                  "bg-linear-to-r from-transparent via-[#1DB954]/20 to-transparent",
                  "opacity-0 group-hover:opacity-100"
                )}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-sm text-white/35">
          More features coming soon.{" "}
          <a
            className="text-[#1DB954]/80 hover:text-[#1DB954] transition-colors underline underline-offset-2 decoration-[#1DB954]/30"
            href="#"
          >
            Join the waitlist
          </a>{" "}
          to get early access.
        </p>
      </motion.div>
    </section>
  );
}
