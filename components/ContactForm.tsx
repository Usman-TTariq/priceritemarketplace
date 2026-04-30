"use client";

import { useState } from "react";
import { submitMarketingLead } from "@/lib/submit-marketing-lead";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
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
      service: service.trim() || undefined,
      message: message.trim() || "(none)",
      source: "contact_desktop",
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
    setService("");
    setMessage("");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-[#5080ff] focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Email Address *
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-[#5080ff] focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          placeholder="(710) 152-3005"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-[#5080ff] focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Service Interested In
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-600 transition-colors focus:border-[#5080ff] focus:outline-none"
        >
          <option value="">Select a service</option>
          <option value="Website Design">Website Design</option>
          <option value="Website Development">Website Development</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="SEO Services">SEO Services</option>
          <option value="Branding">Branding</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-[#5080ff] focus:outline-none"
          required
        />
      </div>

      {errorMessage && (
        <p className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-600">{errorMessage}</p>
      )}
      {status === "success" && (
        <p className="rounded-xl bg-green-50 px-4 py-2 text-sm text-green-700">
          Thanks! Your message was sent to marketing@priceritemarketplace.us. We will get back to you soon.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-[#00081e] py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Message 🚀"}
      </button>
    </form>
  );
}
