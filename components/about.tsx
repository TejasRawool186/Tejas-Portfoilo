import { focusAreas } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Focused on practical AI products, clean interfaces, and systems that feel usable."
            description="I am Tejas Rawool, a computer science student building AI-driven applications, developer tools, and intelligent systems. My work focuses on turning machine learning ideas into real products that people can actually use."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {focusAreas.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-3 rounded-full bg-white/[0.035] px-4 py-3 text-sm text-slate-300"
              >
                <Icon className="h-4 w-4 text-highlight" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(15,27,52,0.92),rgba(36,16,46,0.88),rgba(11,18,32,0.96))] p-8 sm:p-10">
            <div className="absolute -left-8 top-12 h-36 w-36 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-rose-500/15 blur-3xl" />
            <div className="relative space-y-8">
              <p className="font-display text-4xl leading-tight text-white sm:text-5xl">
                Building products where machine intelligence feels clear, fast, and actually usable.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-highlight">Approach</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    Start from a real workflow, reduce complexity, then design the ML or AI layer around utility.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-highlight">Preference</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    Tools that combine good interface decisions with practical automation and measurable output.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
