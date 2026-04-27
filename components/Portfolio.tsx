const P1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAjF4ua8mGaeFdBdNB1t5Gbf0b4eM49XFYGK_v5mlSzWzhUMv8tRjg3vvTtB93nhFXKn-qLMvSloBE52gPSxKSKvvRbw0MW68ntr9SmMb2uS5iGUOknj5Wc4iUvtzo6bN663AzfVUP15KKY2mhNGDMEbKn7YP5OkTpzoEIIbMSId7Eg0prM8tPRC0-ujYfGubKWtK8vvmaD9gaZUbkMumSx5aZRAC2AJwiD2HL1EmEa0NT-WAe-D2kVT40kuCajd-2TosL1loYm9BA";
const P2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBwGEuH-Jyu-MyEvyV_QSX1dbfAVqhjWhzV2zaV2OjAsVajReDJaUcvagTOeLBsQubfdkc5UjMfYgmdArT4bdfSW_RAmkl8-0EpuJnMQUg2sRixLxDDuJp0ESfxXoYv3Jhf6j98BmDBOycc1f-cjFXDeHjTujFmS0mDBvyKjDVj8si72P66IWLIdMcr3oARxlLONwBuzRDiObsOVbFsEd4VoZPr95U0pNCis8NeUSyirYMt8Zral4hL1qJpOHfV3dIq4imXkcz9OPA";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#00081e] py-16 text-white scroll-mt-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Portfolio Showcase</h2>
            <p className="text-slate-400">Selected works that define our commitment to quality.</p>
          </div>
          <a
            href="#portfolio"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-bold transition-all hover:bg-white/10"
          >
            View All Work
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={P1}
              alt="SaaS Dashboard Interface"
              className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00081e] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 w-full translate-y-4 p-8 transition-all duration-300 group-hover:translate-y-0">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#5080ff]">
                Web Development
              </p>
              <h3 className="mb-4 text-2xl font-bold">Enterprise SaaS Dashboard &amp; Analytics</h3>
              <button
                type="button"
                className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#00081e] opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Case Study
              </button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={P2}
              alt="Mobile App Interface"
              className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00081e] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 w-full translate-y-4 p-8 transition-all duration-300 group-hover:translate-y-0">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#5080ff]">
                App Development
              </p>
              <h3 className="mb-4 text-2xl font-bold">Next-Gen Fintech Mobile Application</h3>
              <button
                type="button"
                className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#00081e] opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
