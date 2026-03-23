import { focusAreas } from "@/data/portfolio";

import { Parallax } from "./ui/parallax";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Focused on practical AI products, clean interfaces, and systems that feel usable."
            description="I am Tejas Rawool, a computer science student building AI-driven applications, developer tools, and intelligent systems. My work focuses on turning machine learning ideas into real products that people can actually use."
          />
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {focusAreas.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex max-w-full items-center gap-3 border-2 border-ink bg-card px-4 py-3 text-sm text-ink shadow-[4px_4px_0_#1A1A1A]"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="break-words">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="bauhaus-panel relative overflow-hidden p-5 sm:p-8 lg:p-10">
            <Parallax className="absolute right-0 top-0" offset={20}>
              <div className="h-14 w-14 border-b-2 border-l-2 border-ink bg-secondary sm:h-20 sm:w-20" />
            </Parallax>
            <Parallax className="absolute bottom-6 right-6 hidden sm:block" offset={30}>
              <div className="h-16 w-16 rounded-full border-2 border-ink bg-highlight animate-float" />
            </Parallax>
            <div className="relative space-y-6 sm:space-y-8">
              <p className="font-display text-3xl font-black leading-tight tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                Building products where machine intelligence feels clear, fast, and actually usable.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border-2 border-ink bg-background p-4 shadow-[4px_4px_0_#1A1A1A] sm:p-5">
                  <p className="bauhaus-label text-highlight">Approach</p>
                  <p className="mt-3 text-sm leading-7 text-[#3f3b37] sm:text-base">
                    Start from a real workflow, reduce complexity, then design the ML or AI layer around utility.
                  </p>
                </div>
                <div className="border-2 border-ink bg-background p-4 shadow-[4px_4px_0_#1A1A1A] sm:p-5">
                  <p className="bauhaus-label text-primary">Preference</p>
                  <p className="mt-3 text-sm leading-7 text-[#3f3b37] sm:text-base">
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
