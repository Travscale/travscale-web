"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Drawer } from "vaul";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";

type DemoFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export default function DemoForm({ isOpen, onClose }: DemoFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => setIsMobile(media.matches);
    updateViewport();

    media.addEventListener("change", updateViewport);

    return () => {
      media.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || isMobile) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobile, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setError("");
      setSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!API) {
      setError("Backend URL is not configured.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API}/demo-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const content = (
    <>
      <button
        className={`${isMobile ? "absolute top-4 right-4" : "sticky top-0 ml-auto"} z-10 w-8 h-8 flex items-center justify-center text-black/40 hover:text-black transition-colors bg-white/90`}
        data-testid="demo-modal-close"
        onClick={onClose}
        type="button"
      >
        &times;
      </button>

      {success ? (
        <div className="text-center py-6 sm:py-8">
          <div className="w-14 h-14 bg-black flex items-center justify-center mx-auto mb-6">
            <Check className="w-7 h-7 text-white" />
          </div>
          <h3
            className="text-2xl font-medium mb-3"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            We&apos;ll be in touch
          </h3>
          <p className="text-sm text-black/60 mb-6">
            Thank you for your interest. Our team will reach out within 24
            hours.
          </p>
          <button
            className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-[#003399] transition-colors"
            data-testid="demo-modal-done"
            onClick={onClose}
            type="button"
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 sm:mb-8">
            <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-black/40 block mb-3">
              Book a Demo
            </span>
            <h3
              className="text-2xl font-medium"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              See Travscale in action
            </h3>
            <p className="text-sm text-black/55 mt-2">
              Fill the details below and our team will reach out with a tailored
              walkthrough.
            </p>
          </div>

          <form className="space-y-3.5 sm:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.12em] text-black/55 font-semibold mb-2 block">
                  Full Name *
                </span>
                <input
                  className="w-full px-4 py-3 border border-black/10 bg-[#F5F5F0] text-sm focus:outline-none focus:border-[#003399] transition-colors placeholder:text-black/30"
                  data-testid="demo-input-name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Sarah Johnson"
                  required
                  type="text"
                  value={form.name}
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.12em] text-black/55 font-semibold mb-2 block">
                  Work Email *
                </span>
                <input
                  className="w-full px-4 py-3 border border-black/10 bg-[#F5F5F0] text-sm focus:outline-none focus:border-[#003399] transition-colors placeholder:text-black/30"
                  data-testid="demo-input-email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@agency.com"
                  required
                  type="email"
                  value={form.email}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.12em] text-black/55 font-semibold mb-2 block">
                  Company Name *
                </span>
                <input
                  className="w-full px-4 py-3 border border-black/10 bg-[#F5F5F0] text-sm focus:outline-none focus:border-[#003399] transition-colors placeholder:text-black/30"
                  data-testid="demo-input-company"
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder="Your agency or business"
                  required
                  type="text"
                  value={form.company}
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.12em] text-black/55 font-semibold mb-2 block">
                  Phone
                </span>
                <input
                  className="w-full px-4 py-3 border border-black/10 bg-[#F5F5F0] text-sm focus:outline-none focus:border-[#003399] transition-colors placeholder:text-black/30"
                  data-testid="demo-input-phone"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Optional"
                  type="tel"
                  value={form.phone}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.12em] text-black/55 font-semibold mb-2 block">
                Team Goals
              </span>
              <textarea
                className="w-full px-4 py-3 border border-black/10 bg-[#F5F5F0] text-sm focus:outline-none focus:border-[#003399] transition-colors resize-none placeholder:text-black/30"
                data-testid="demo-input-message"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you want to improve first"
                rows={3}
                value={form.message}
              />
            </label>

            {error && (
              <p className="text-sm text-red-600" data-testid="demo-error">
                {error}
              </p>
            )}

            <button
              className="w-full bg-black text-white py-3.5 sm:py-4 text-sm font-semibold hover:bg-[#003399] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 rounded-xl"
              data-testid="demo-submit-btn"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Request Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </>
  );

  if (isMobile) {
    return (
      <Drawer.Root
        dismissible
        modal
        onOpenChange={(open) => {
          if (!open) onClose();
        }}
        open={isOpen}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm" />
          <Drawer.Content
            className="fixed inset-x-0 bottom-0 z-[101] bg-white rounded-t-3xl border-t border-black/10 max-h-[92dvh]"
            data-testid="demo-drawer"
          >
            <Drawer.Title className="sr-only">Book a Demo</Drawer.Title>
            <div className="mx-auto mt-2.5 mb-1 h-1.5 w-12 rounded-full bg-black/15" />
            <div className="relative px-5 pb-5 pt-2 overflow-y-auto max-h-[calc(92dvh-20px)]">
              {content}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-100 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto"
      data-testid="demo-modal-overlay"
      onClick={onClose}
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white w-full max-w-lg mt-4 sm:mt-0 p-5 sm:p-8 md:p-10 shadow-2xl ring-1 ring-black/5 max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl sm:rounded-none"
        data-testid="demo-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
}
