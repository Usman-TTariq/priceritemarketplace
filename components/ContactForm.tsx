"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
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
          phone: phone || undefined,
          service: service || undefined,
          message,
          source: "contact_page",
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
      setPhone("");
      setService("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
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
        <label className="block text-sm font-semibold text-gray-700 mb-2">
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
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="(710) 152-3005"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-[#5080ff] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
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
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Message *
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

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-xl">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-xl">
          Message sent! We&apos;ll get back to you soon.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-[#00081e] py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send Message 🚀"}
      </button>
    </form>
  );
}
