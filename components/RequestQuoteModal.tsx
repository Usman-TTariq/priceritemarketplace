"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type RequestQuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full rounded-lg border border-neutral-600 bg-[#0d0d0d] px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-400 focus:ring-1 focus:ring-neutral-500";

export default function RequestQuoteModal({ isOpen, onClose }: RequestQuoteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dialCode, setDialCode] = useState("+1");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    setName("");
    setEmail("");
    setDialCode("+1");
    setPhoneLocal("");
    setCompany("");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phone = `${dialCode} ${phoneLocal}`.trim();
    if (!phoneLocal.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your phone number.");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: company.trim() || undefined,
          message,
          source: "navbar_quote",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setTimeout(() => {
        onClose();
      }, 1600);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (!isOpen || typeof document === "undefined") return null;

  const modal = (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close modal"
        onClick={onClose}
      />

      <div
        className="relative z-10 mx-auto max-h-[min(90vh,900px)] w-full max-w-lg overflow-y-auto rounded-2xl bg-[#141414] p-6 shadow-2xl animate-slideUp sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-neutral-700"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <h2 id="quote-modal-title" className="pr-12 text-xl font-bold text-white sm:text-2xl">
          Hire Expert App Developers
        </h2>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">
          Share your details and we&apos;ll get back with a custom plan.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="john@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={dialCode}
                onChange={(e) => setDialCode(e.target.value)}
                className={`${inputClass} w-[7.5rem] shrink-0 cursor-pointer sm:w-32`}
                aria-label="Country code"
              >
                <option value="+1">US +1</option>
                <option value="+44">UK +44</option>
                <option value="+91">IN +91</option>
              </select>
              <input
                type="tel"
                placeholder="555 123 4567"
                value={phoneLocal}
                onChange={(e) => setPhoneLocal(e.target.value)}
                className={`${inputClass} min-w-0 flex-1`}
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white">Company / Project Name</label>
            <input
              type="text"
              placeholder="Your company or project"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white">
              Tell us about your project <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="App idea, timeline, platform (iOS/Android)..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
              required
            />
          </div>

          {status === "error" && (
            <p className="rounded-lg bg-red-950/50 px-4 py-2 text-sm text-red-300">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="rounded-lg bg-green-950/50 px-4 py-2 text-sm text-green-300">
              Thanks! We&apos;ll be in touch shortly.
            </p>
          )}

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-neutral-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(249,115,22,0.35)] transition-transform hover:bg-orange-600 disabled:opacity-60"
            >
              {status === "sending" ? "Submitting..." : "Submit & Get a Callback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
