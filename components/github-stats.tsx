import { FolderGit2, Github, Sparkles } from "lucide-react";

import { getGitHubPortfolioStats } from "@/lib/github";
import { openSourceSummary } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

const numberFormatter = new Intl.NumberFormat("en-US");

const levelClasses = [
  "bg-background",
  "bg-secondary/45",
  "bg-secondary",
  "bg-primary/70",
  "bg-highlight",
];

export async function GithubStats() {
  const stats = await getGitHubPortfolioStats();
  const metrics = [
    { label: "Repositories", value: stats.totalRepos, icon: FolderGit2 },
    { label: "Stars", value: stats.totalStars, icon: Sparkles },
    { label: "Commits", value: stats.totalCommits, icon: Github },
  ];

  return (
    <section id="open-source" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Open Source Signals"
            title={openSourceSummary.title}
            description={openSourceSummary.description}
          />
          <a href={stats.profileUrl} className="mt-8 inline-flex items-center gap-2 text-sm text-primary transition hover:text-highlight">
            View GitHub Profile
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-5 sm:space-y-6">
            <div className="bauhaus-panel p-4 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;

                  return (
                    <div key={metric.label} className="border-2 border-ink bg-card p-4 shadow-[4px_4px_0_#1A1A1A] sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <p className="bauhaus-label text-[#6a645d]">{metric.label}</p>
                        <Icon className="h-5 w-5 shrink-0 text-primary" />
                      </div>
                      <p className="mt-5 font-display text-4xl font-black tracking-[-0.03em] text-ink sm:mt-6 sm:text-5xl">
                        {numberFormatter.format(metric.value)}
                      </p>
                      <div className="mt-5 h-2 border-2 border-ink bg-background sm:mt-6">
                        <div
                          className={`h-full ${index === 0 ? "bg-primary" : index === 1 ? "bg-secondary" : "bg-highlight"}`}
                          style={{ width: `${74 + index * 8}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bauhaus-panel p-4 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <p className="bauhaus-label text-primary">Contribution Matrix</p>
                  <p className="mt-2 text-sm leading-6 text-[#4d4842]">Live public GitHub activity from the last 12 months.</p>
                </div>
                <p className="bauhaus-label text-[#6a645d]">{numberFormatter.format(stats.totalContributions)} total</p>
              </div>

              <div className="mt-3 text-[11px] uppercase tracking-[0.08em] text-[#6a645d] sm:text-xs">
                Commit total reflects the same live public contribution activity shown in the matrix.
              </div>

              <div className="mt-5 overflow-x-auto pb-1 sm:mt-6">
                <div className="grid min-w-[620px] grid-rows-7 gap-1 sm:min-w-[760px]" style={{ gridTemplateColumns: "repeat(53, minmax(0, 1fr))" }}>
                  {stats.contributions.map((day) => (
                    <div
                      key={day.date}
                      title={day.tooltip}
                      className={`aspect-square border border-ink/70 ${levelClasses[day.level] ?? levelClasses[0]}`}
                      style={{ gridColumn: day.weekIndex + 1, gridRow: day.dayIndex + 1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
