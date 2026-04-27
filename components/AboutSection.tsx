const ABOUT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC5lzjuksgklATi98i0CiWwlaVXqhSe5M3b_WUEcmWsDcMKHAvyITIUOFmWHYtzajm0r6Ei3YpTfeFfbx7gleXT8Lj71NITeEZ0SnJ3RXPwozYKDwKJ4rqG0wvjKhRTtvXB8Pmvz3dBz8COvh0a0W1iLj6grzwVcy47H7N9aHFi43dSjsdUHpYDzezF4l53qfoXJ6q-ur2Q6TNKTzyMMF2_k2XMMXUPPjr-YYUnnWnpVvx3AAUH-9h96DrEcq4QcBBaSNR8AEqDKg8";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-16 scroll-mt-24 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ABOUT_IMG}
            alt="Innovation"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-[#00081e] p-8 shadow-xl">
            <div className="mb-2 flex items-center gap-4">
              <span className="text-4xl font-bold text-white">10+</span>
              <span className="text-sm font-medium text-slate-400">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-[#00081e] md:text-4xl">
            Pioneering the Future of Digital Commerce
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            At PricerItemMarketplace.us, we don&apos;t just build websites; we engineer digital
            ecosystems that foster growth. Our mission is to empower businesses with the tools they
            need to dominate their respective markets.
          </p>
          <div className="mb-10 grid grid-cols-2 gap-8">
            <div>
              <div className="mb-2 text-3xl font-black text-[#00081e]">100+</div>
              <p className="font-medium text-slate-500">Projects Delivered</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-black text-[#00081e]">50+</div>
              <p className="font-medium text-slate-500">Global Clients</p>
            </div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 rounded-xl bg-[#00081e] px-6 py-4 font-bold text-white transition-colors hover:bg-slate-800"
          >
            Learn More About Us
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
