"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RequestQuoteModal from "./RequestQuoteModal";

const navItems: { label: string; hash: string }[] = [
  { label: "Services", hash: "#services" },
  { label: "Portfolio", hash: "#portfolio" },
  { label: "About", hash: "#about" },
  { label: "Why Us", hash: "#why-us" },
  { label: "Testimonials", hash: "#testimonials" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const closeQuote = useCallback(() => setQuoteOpen(false), []);

  useEffect(() => {
    if (mobileOpen || quoteOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, quoteOpen]);

  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  const scrollTo = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 font-sans shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl antialiased tracking-tight">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="relative flex shrink-0 items-center py-1"
          aria-label="PricerItemMarketplace.us — home"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/images/logo1.png"
            alt="PricerItemMarketplace.us"
            width={220}
            height={48}
            className="h-8 w-auto object-contain object-left md:h-[60px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            isHome ? (
              <button
                key={item.hash}
                type="button"
                onClick={() => scrollTo(item.hash)}
                className="border-b-2 border-transparent pb-1 text-sm font-medium text-slate-500 transition-all hover:border-slate-900 hover:text-slate-900"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.hash}
                href={hrefFor(item.hash)}
                className="border-b-2 border-transparent pb-1 text-sm font-medium text-slate-500 transition-all hover:border-slate-900 hover:text-slate-900"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="hidden rounded-full bg-[#0a1f44] px-5 py-2.5 text-sm font-semibold text-white transition-transform active:scale-95 sm:inline-block"
          >
            Request a Quote
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) =>
              isHome ? (
                <button
                  key={item.hash}
                  type="button"
                  onClick={() => scrollTo(item.hash)}
                  className="rounded-lg px-3 py-3 text-left font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.hash}
                  href={hrefFor(item.hash)}
                  className="rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <button
              type="button"
              className="mt-2 rounded-full bg-[#0a1f44] py-3 text-center font-semibold text-white"
              onClick={() => {
                setMobileOpen(false);
                setQuoteOpen(true);
              }}
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}

      <RequestQuoteModal isOpen={quoteOpen} onClose={closeQuote} />
    </nav>
  );
}
