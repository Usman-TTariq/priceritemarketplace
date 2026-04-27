import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#5080ff] py-20">
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
        <h2 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Grow Your Business?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-white/80">
          Partner with an agency that prioritizes your success. Let&apos;s build something
          extraordinary together.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-xl bg-white px-10 py-5 text-lg font-black text-[#5080ff] transition-transform hover:scale-105"
        >
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
}
