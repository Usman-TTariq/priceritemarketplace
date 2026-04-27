const items = [
  {
    icon: "groups",
    title: "Experienced Team",
    desc: "Industry veterans with decades of collective expertise in digital transformation.",
  },
  {
    icon: "bolt",
    title: "Fast Delivery",
    desc: "Agile methodologies that prioritize speed without compromising on technical integrity.",
  },
  {
    icon: "payments",
    title: "Affordable Pricing",
    desc: "Premium quality delivered with transparent, ROI-focused pricing structures.",
  },
  {
    icon: "handshake",
    title: "Client-Centric",
    desc: "Partnership-driven approach focused on your specific long-term business goals.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-16 scroll-mt-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <span className="material-symbols-outlined mb-6 block text-4xl text-[#5080ff]">
                {item.icon}
              </span>
              <h4 className="mb-4 text-xl font-semibold tracking-tight text-[#00081e] md:text-2xl">
                {item.title}
              </h4>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
