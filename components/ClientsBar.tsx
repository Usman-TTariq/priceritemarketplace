export default function ClientsBar() {
  const brands = ["TECHFLOW", "VANTAGE", "NEXUS", "ORBITAL", "STRATUM"];
  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0 md:gap-24">
          {brands.map((name) => (
            <span
              key={name}
              className="text-2xl font-black tracking-tighter text-slate-900"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
