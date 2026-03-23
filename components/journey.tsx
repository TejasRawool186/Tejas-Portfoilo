import { journey } from "@/data/portfolio";

import { Parallax } from "./ui/parallax";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Journey() {
  return (
    <section id="journey" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Builder Journey"
            title="A progression from learning code to building products with visible utility."
            description="The story matters because it explains trajectory. Each phase adds more complexity, stronger product framing, and more public proof of work."
          />
        </Reveal>

        <div className="relative mt-12 space-y-8 before:absolute before:left-3 before:top-3 before:h-[calc(100%-1.5rem)] before:w-1 before:bg-primary sm:mt-16 sm:space-y-10 md:before:left-1/2">
          {journey.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.08}>
              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-12">
                <div className={index % 2 === 0 ? "md:text-right" : "md:order-2"}>
                  <p className="pl-8 font-display text-3xl font-black tracking-[-0.03em] text-highlight sm:text-4xl md:pl-0">{item.year}</p>
                </div>
                <div
                  className={`relative ml-8 border-2 border-ink bg-background p-5 shadow-[6px_6px_0_#1A1A1A] sm:p-7 md:ml-0 ${
                    index % 2 === 0 ? "md:order-2" : ""
                  }`}
                >
                  <Parallax className="absolute left-[-1.1rem] top-8 md:left-[-2.3rem]" offset={18}>
                    <span className="block h-4 w-4 rounded-full border-2 border-ink bg-secondary" />
                  </Parallax>
                  <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4d4842] sm:text-base sm:leading-8">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
