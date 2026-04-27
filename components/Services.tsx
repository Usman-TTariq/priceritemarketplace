const services = [
  {
    icon: "web",
    title: "Web Development",
    desc: "Bespoke web applications built with cutting-edge frameworks for maximum performance and scalability.",
  },
  {
    icon: "smartphone",
    title: "App Development",
    desc: "Native and cross-platform mobile solutions designed to provide seamless user experiences on any device.",
  },
  {
    icon: "campaign",
    title: "Digital Marketing",
    desc: "Data-driven strategies that increase reach and convert high-intent traffic into loyal customers.",
  },
  {
    icon: "search_insights",
    title: "SEO Optimization",
    desc: "Advanced search engine optimization to ensure your brand remains at the forefront of digital discovery.",
  },
  {
    icon: "brush",
    title: "UI/UX Design",
    desc: "User-centric design thinking that balances aesthetic beauty with functional, intuitive interactions.",
  },
  {
    icon: "shopping_cart",
    title: "eCommerce",
    desc: "Scalable online storefronts designed to maximize conversions and streamline digital commerce operations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 scroll-mt-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#00081e] md:text-4xl">
            Our Premium Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500">
            Comprehensive digital solutions tailored to elevate your brand&apos;s presence and
            operational efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-100 bg-[#f8f9ff] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(10,31,68,0.08)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5080ff]/10 text-[#5080ff]">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-[#00081e] md:text-2xl">
                {s.title}
              </h3>
              <p className="mb-6 text-slate-500">{s.desc}</p>
              <a
                href="#contact"
                className="flex items-center gap-2 font-bold text-[#5080ff] transition-all group-hover:gap-3"
              >
                Learn More{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
