"use client";

import { useState } from "react";

export default function HomeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          source: "home_page",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
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
                <p className="text-lg font-bold text-[#00081e]">hello@priceritemarketplace.us</p>
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
                  href="tel:+15551234567"
                  className="text-lg font-bold text-[#00081e] hover:text-[#5080ff]"
                >
                  +1 (555) 123-4567
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
                  123 Agency Plaza, Tech District, NY
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-[#f8f9ff] p-10 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#00081e]">Your Name</label>
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
              <label className="mb-2 block text-sm font-bold text-[#00081e]">Email Address</label>
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
              <label className="mb-2 block text-sm font-bold text-[#00081e]">Your Message</label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#5080ff]/20"
              />
            </div>
            {status === "error" && (
              <p className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-600">{errorMessage}</p>
            )}
            {status === "success" && (
              <p className="rounded-xl bg-green-50 px-4 py-2 text-sm text-green-700">
                Message sent! We&apos;ll get back to you soon.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-[#00081e] py-4 font-bold text-white transition-colors hover:bg-slate-800 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
