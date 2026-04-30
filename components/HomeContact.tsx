"use client";

import { useState } from "react";
import { submitMarketingLead } from "@/lib/submit-marketing-lead";

export default function HomeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    const n = name.trim();
    const em = email.trim();
    const ph = phone.trim();
    if (!n || !em || !ph) {
      setErrorMessage("Full Name, Email, and Phone are required.");
      return;
    }
    setErrorMessage("");
    setStatus("sending");
    const result = await submitMarketingLead({
      name: n,
      email: em,
      phone: ph,
      message: message.trim() || "(none)",
      source: "contact_mobile",
    });
    setStatus("idle");
    if (!result.ok) {
      setErrorMessage(result.error || "Something went wrong.");
      return;
    }
    setStatus("success");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-white py-16 scroll-mt-24 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#00081e] md:text-4xl">
            Get In Touch
          </h2>
          <p className="mb-12 text-slate-500">
            Have a project in mind? Our team is ready to discuss how we can help you achieve your
            goals.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#5080ff]/10 text-[#5080ff]">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email Us
                </p>
                <a
                  href="mailto:marketing@priceritemarketplace.us"
                  className="text-lg font-bold text-[#5080ff] hover:underline"
                >
                  marketing@priceritemarketplace.us
                </a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#5080ff]/10 text-[#5080ff]">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Call Us
                </p>
                <a
                  href="tel:+17101523005"
                  className="text-lg font-bold text-[#00081e] hover:text-[#5080ff]"
                >
                  (710) 152-3005
                </a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#5080ff]/10 text-[#5080ff]">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Visit Us
                </p>
                <p className="text-lg font-bold text-[#00081e]">
                  325 Valley St
                  <br />
                  Providence, RI 02908
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-[#f8f9ff] p-10 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#00081e]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#5080ff]/20"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#00081e]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#5080ff]/20"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#00081e]">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="(710) 152-3005"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#5080ff]/20"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#00081e]">Your Message</label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#5080ff]/20"
              />
            </div>
            {errorMessage && (
              <p className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-600">{errorMessage}</p>
            )}
            {status === "success" && (
              <p className="rounded-xl bg-green-50 px-4 py-2 text-sm text-green-700">
                Thanks! We received your message at marketing@priceritemarketplace.us.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-[#00081e] py-4 font-bold text-white transition-colors hover:bg-slate-800 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
