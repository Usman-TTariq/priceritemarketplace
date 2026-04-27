const fillStar = { fontVariationSettings: "'FILL' 1" as const };

const testimonials = [
  {
    quote:
      "The team at PricerItemMarketplace.us transformed our legacy systems into a modern digital powerhouse. Their technical acumen is unmatched.",
    name: "Sarah Jenkins",
    role: "CTO, VANTAGE GROUP",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALC9VfTzs-S2RlIdlmOXobugjsiNGmCaEaERWZndfa-19VtoUf4jLCRAo4C3JhBPw71CAsVGMS6TE0TPwmDP_lPExhS39qsHRxTySTsR0oMYaUrMcFvke9Dlv5V6FUzPfDbOgf2-MTkJlJZRT_vRFYoB0cUJXWAmFtOxpMZfwTzZ8E5oM2luyYzbJsEaCgrmQtgu0iPgzl-WFsApKBeHwDQekZ3mXofnPHXnmuQrkPRppT-zWkEwhNe97eNTvGaplWeqZKWrwTF28",
  },
  {
    quote:
      "Incredible attention to detail. They delivered our eCommerce platform ahead of schedule and the performance has exceeded all expectations.",
    name: "Marcus Thorne",
    role: "CEO, NEXUS RETAIL",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjhIjHh3SRDTA_O-J-9UmQTynXr8OeTiF9NROJqKDrnx5i7RC4VL5DiOU0r0Ea7-tRvM24C7cg4m4SXJhozller7FSTgq4bb3pcD_WVbNkxN37NV6vF15_7p80OfL2_7rTMhRmDGwhKHPSOIE_vXQ_PZdW9hqrSxvVEe3tJWw_NPDoLq6bAO2A6-do8R2vxVr5PzriX5abWHUF_0oQQ8ILK4e7QrvkAwhWTw4zph5M8RkM3MzkWHJEcuFzE0II5mJeS91ERCuMmvU",
  },
  {
    quote:
      "Finding an agency that truly understands UX and business strategy is rare. We have seen a 40% increase in conversions since the redesign.",
    name: "Elena Rodriguez",
    role: "Head of Product, STRATUM",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpPt_NuGtzJk4o9yKrorjm_rSXav3LdXYQu8hB_p9S5Eatv8WpzM8sjXEw7NKQDlPOiOXHFlHlPkGj_Y95BNlyd6mBMld61VP94N7-eDdeZSbQ_50bcQmlfU1HvZ7eZUu9wsFJRQbDHYrXwnrD7G4mXEX8PLRQG3_dkRmev_FCQiSs3YOwjk2fQk_EbuOZPcjnIDlNZWrrclbacU0gOGsBELUZ39LmpcCaKuwjqQOMfL3HN4SDEZvDpDhnyoVhkN5PO3S_QWRCj88",
  },
];

function StarRow() {
  return (
    <div className="mb-6 flex gap-1 text-yellow-400">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="material-symbols-outlined" style={fillStar}>
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#eff4ff] py-16 scroll-mt-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-[#00081e] md:text-4xl">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm"
            >
              <StarRow />
              <p className="mb-8 italic text-slate-600">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[#00081e]">{t.name}</p>
                  <p className="text-xs font-medium text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
