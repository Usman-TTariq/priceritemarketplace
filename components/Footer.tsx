"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 py-12 text-sm text-white antialiased">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div>
          <div className="mb-6 text-lg font-bold uppercase tracking-widest text-white">
            PricerItemMarketplace.us
          </div>
          <p className="mb-8 text-slate-400">
            Elevating global brands through strategic digital engineering and premium creative design
            solutions.
          </p>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <span className="material-symbols-outlined text-sm">link</span>
            </span>
            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <span className="material-symbols-outlined text-sm">share</span>
            </span>
          </div>
        </div>
        <div>
          <h5 className="mb-6 font-semibold uppercase tracking-wider text-white">Services</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/#services" className="text-slate-400 transition-colors hover:text-white">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-slate-400 transition-colors hover:text-white">
                App Development
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-slate-400 transition-colors hover:text-white">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-slate-400 transition-colors hover:text-white">
                UI/UX Design
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-semibold uppercase tracking-wider text-white">Company</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/#about" className="text-slate-400 transition-colors hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" className="text-slate-400 transition-colors hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-slate-400 transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-slate-400 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-semibold uppercase tracking-wider text-white">Newsletter</h5>
          <p className="mb-4 text-slate-400">Stay updated with our latest insights.</p>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-white p-2 text-black"
              aria-label="Subscribe"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-8 pt-8 text-center text-slate-500">
        © 2026 PricerItemMarketplace.us. All rights reserved.
      </div>
    </footer>
  );
}
