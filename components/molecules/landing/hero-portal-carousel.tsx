"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BedDouble, CreditCard, ShieldCheck } from "lucide-react";

interface GlassNotification {
  title: string;
  details: string;
  time: string;
  icon: React.ElementType;
}

interface PortalSlide {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  width: number;
  height: number;
  notification: GlassNotification;
}

const PORTAL_SLIDES: PortalSlide[] = [
  {
    id: "dubai",
    title: "Dubai Operations",
    location: "Dubai, UAE",
    imageSrc: "/assets/fading-carousel/dubai_day.gif",
    width: 1920,
    height: 1080,
    notification: {
      title: "Rooming change handled",
      details: "twin to single · hotel notified",
      time: "02:04",
      icon: BedDouble,
    },
  },
  {
    id: "ksa",
    title: "KSA Operations",
    location: "Makkah & Madinah, KSA",
    imageSrc: "/assets/fading-carousel/logoremover_1785296702542.gif",
    width: 1920,
    height: 1080,
    notification: {
      title: "Advance received",
      details: "₹50,000 · UPI · invoice raised",
      time: "11:48",
      icon: CreditCard,
    },
  },
  {
    id: "mauritius",
    title: "Mauritius Resort Hub",
    location: "Port Louis, Mauritius",
    imageSrc: "/assets/fading-carousel/muritius.mp4",
    width: 1920,
    height: 1080,
    notification: {
      title: "Transfers Confirmed",
      details: "Luxury Resort Speedboat · 8 guests",
      time: "13:15",
      icon: BedDouble,
    },
  },
  {
    id: "paris",
    title: "Paris Euro Hub",
    location: "Paris, France",
    imageSrc: "/assets/fading-carousel/paris_day.png",
    width: 1920,
    height: 1080,
    notification: {
      title: "Schengen Visa Approved",
      details: "Multiple Entry · 14 passengers synced",
      time: "14:20",
      icon: ShieldCheck,
    },
  },
  {
    id: "savannah",
    title: "Savannah Expeditions",
    location: "Serengeti & Mara",
    imageSrc: "/assets/fading-carousel/mara.mp4",
    width: 1920,
    height: 1080,
    notification: {
      title: "Safari Voucher Issued",
      details: "4x4 Luxury Cruiser · Guide assigned",
      time: "16:40",
      icon: ShieldCheck,
    },
  },
];

const SLIDE_DURATION_MS = 4000;
const NOTIF_ENTRY_DELAY_MS = 400;

const NOISE_SVG_DATA_URI = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function HeroPortalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [gifTimestampMap, setGifTimestampMap] = useState<Record<number, number>>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % PORTAL_SLIDES.length);
    setProgress(0);
  }, []);

  // Restart animated GIFs & MP4 videos from 0s whenever their slide becomes active
  useEffect(() => {
    setGifTimestampMap((prev) => ({
      ...prev,
      [activeIndex]: Date.now(),
    }));

    PORTAL_SLIDES.forEach((slide, idx) => {
      const isVid = slide.imageSrc.endsWith(".mp4") || slide.imageSrc.endsWith(".webm");
      if (isVid) {
        const vid = videoRefs.current[idx];
        if (vid) {
          if (idx === activeIndex) {
            vid.currentTime = 0;
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        }
      }
    });
  }, [activeIndex]);

  // Staggered notification entry after media cross-fade
  useEffect(() => {
    setShowNotification(false);
    const entryTimer = setTimeout(() => {
      setShowNotification(true);
    }, NOTIF_ENTRY_DELAY_MS);

    return () => clearTimeout(entryTimer);
  }, [activeIndex]);

  // Continuous timer with notification exit 400ms before slide swap
  useEffect(() => {
    const stepMs = 50;
    const increment = (stepMs / SLIDE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + increment;

        // Fade notification OUT 400ms before slide swap (at 90% progress)
        if (nextProgress >= 90) {
          setShowNotification(false);
        }

        if (nextProgress >= 100) {
          nextSlide();
          return 0;
        }
        return nextProgress;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      aria-label="Travel Operations Showcase Carousel"
      aria-roledescription="carousel"
      className="relative mx-auto w-full max-w-[1200px]"
      data-testid="hero-portal-carousel"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -top-6 -bottom-6 bg-gradient-to-b from-[#d04841]/10 via-[#d04841]/5 to-transparent blur-3xl rounded-3xl -z-10" />

      {/* Showcase Container: Outer Radius = 24px (rounded-3xl) */}
      <div className="relative w-full rounded-3xl border border-[#181717]/10 bg-white shadow-[0_20px_60px_-15px_rgba(24,23,23,0.12)] overflow-hidden">
        {/* Optical inner radius for media: rounded-2xl */}
        <div className="relative w-full overflow-hidden rounded-2xl">
          {PORTAL_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            const notif = slide.notification;
            const Icon = notif.icon;
            const isNotifVisible = isActive && showNotification;
            const isGif = slide.imageSrc.endsWith(".gif");
            const isVideo = slide.imageSrc.endsWith(".mp4") || slide.imageSrc.endsWith(".webm");

            // Append timestamp cache-buster on active GIFs so the browser restarts animation from frame 0
            const activeTimestamp = gifTimestampMap[idx] || 0;
            const imageSource = isGif && isActive && activeTimestamp
              ? `${slide.imageSrc}?v=${activeTimestamp}`
              : slide.imageSrc;

            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slide.title} (${idx + 1} of ${PORTAL_SLIDES.length})`}
                aria-hidden={!isActive}
                className={cn(
                  "w-full transition-opacity duration-700 ease-out",
                  idx === 0 ? "relative" : "absolute inset-0",
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                )}
              >
                {/* Media Renderer: Support for MP4/WebM Video, GIF, and Static PNG/JPG Images */}
                {isVideo ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={slide.imageSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto block rounded-2xl object-contain select-none"
                  />
                ) : (
                  <Image
                    key={`${slide.id}-${isActive ? activeTimestamp : "inactive"}`}
                    src={imageSource}
                    alt={`${slide.title} Interface Preview`}
                    width={slide.width}
                    height={slide.height}
                    priority={idx === 0}
                    unoptimized={isGif}
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="w-full h-auto block rounded-2xl object-contain select-none"
                  />
                )}

                {/* Staggered Glass Notification Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center p-2 sm:p-3.5 pointer-events-none">
                  <div
                    className={cn(
                      "relative overflow-hidden bg-white/35 backdrop-blur-2xl border border-white/60 p-2.5 sm:p-3.5 rounded-2xl shadow-[0_12px_32px_-8px_rgba(24,23,23,0.16)] max-w-[220px] xs:max-w-[250px] sm:max-w-xs md:max-w-sm w-full text-left transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] transform select-none",
                      isNotifVisible
                        ? "opacity-100 translate-y-0 scale-95 sm:scale-100 blur-0"
                        : "opacity-0 translate-y-2 scale-90 blur-xs"
                    )}
                  >
                    {/* Noise texture overlay matching parent card radius (rounded-2xl) */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-overlay rounded-2xl"
                      style={{ backgroundImage: NOISE_SVG_DATA_URI }}
                    />

                    {/* Content Row: Child Icon Box Radius = 10px (rounded-xl) */}
                    <div className="relative z-10 flex items-start gap-2 sm:gap-2.5">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                          <h4 className="text-[11px] sm:text-xs font-semibold text-[#181717] tracking-tight truncate">
                            {notif.title}
                          </h4>
                          <span className="font-mono text-[9px] sm:text-[11px] font-semibold text-[#181717]/70 shrink-0">
                            {notif.time}
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] font-medium text-[#222222] leading-snug truncate mt-0.5">
                          {notif.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile-scaled Bottom Right Place Info Tag */}
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 pointer-events-none">
                  <div
                    className={cn(
                      "bg-[#181717]/80 backdrop-blur-md border border-white/15 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg text-[9px] sm:text-[11px] font-semibold text-white font-mono uppercase tracking-[0.15em] transition-opacity duration-500 ease-out select-none",
                      isActive
                        ? "opacity-100 scale-95 sm:scale-100"
                        : "opacity-0 scale-90"
                    )}
                  >
                    {slide.location}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Minimal Progress Line across bottom */}
        <div className="w-full h-1 bg-[#181717]/5 overflow-hidden" aria-hidden="true">
          <div
            className="h-full bg-[#d04841] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
