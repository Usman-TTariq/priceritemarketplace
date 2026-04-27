const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAirelLeATOHteEcFELsTp8IR6KTKoGxH5YTMmO9DF7n-vAWaPyea9iJ0qgtj6h0qjsKMmVQr6bjE6G1e90jPYLKH8UMbopUVaE78dbUTDnRNWuODrnmx7HXDTJGbD5yO6p9FsAQljHUS3Ec5dLQdDZvQumJUdY--t2Zexvc6NF5JbAw5MbmtA5XmqAG0337J_X78qi-W_IxJCVUPoG9p5mCK6NLZZI-5lFdMn7LP7OPxlDDq75xxLUwNopCS0cJhhMt0JLHLyi6Mo";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#00081e] pt-24 text-white">
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#5080ff]/20 to-transparent" />
      <div className="orb-accent absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#5080ff]" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-2">
        <div>
          <span className="mb-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            Innovative Agency Solutions
          </span>
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Empowering Digital Growth for Modern Businesses
          </h1>
          <p className="mb-10 max-w-lg text-lg text-slate-300">
            We bridge the gap between complex technology and strategic business goals to deliver
            world-class digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-[#5080ff] px-8 py-4 font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(80,128,255,0.4)]"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/20 px-8 py-4 font-bold transition-all hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rotate-3 transform overflow-hidden rounded-2xl p-4 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMG}
              alt="Team working in modern office"
              className="h-[400px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
