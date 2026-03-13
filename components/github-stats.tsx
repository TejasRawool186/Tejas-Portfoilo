import { ArrowUpRight } from "lucide-react";

import { githubMetrics, openSourceSummary } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function GithubStats() {
  return (
    <section id="open-source" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Open Source Signals"
            title={openSourceSummary.title}
            description={openSourceSummary.description}
          />
          <a
            href={openSourceSummary.profile}
            className="mt-8 inline-flex items-center gap-2 text-sm text-highlight transition hover:text-white"
          >
            View GitHub Profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[2.25rem] bg-white/[0.03] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {githubMetrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <div key={metric.label} className="rounded-[1.75rem] bg-[#0d1730] p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                      <Icon className="h-5 w-5 text-highlight" />
                    </div>
                    <p className="mt-6 font-display text-5xl text-white">{metric.value}</p>
                    <div
                      className="mt-6 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-highlight"
                      style={{ width: `${68 + index * 7}%` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
