import { trustStats } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";

export function TrustBar() {
  return (
    <section id="trust-bar" className="px-6 pb-8 sm:px-8 lg:px-10">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/[0.03] px-6 py-5 backdrop-blur-md">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between gap-4">
                <p className="font-display text-3xl text-white">{stat.value}</p>
                <p className="text-right text-sm uppercase tracking-[0.22em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
