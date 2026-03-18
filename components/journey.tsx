import { journey } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Journey() {
  return (
    <section id="journey" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Builder Journey"
            title="A progression from learning code to building products with visible utility."
            description="The story matters because it explains trajectory. Each phase adds more complexity, stronger product framing, and more public proof of work."
          />
        </Reveal>

        <div className="relative mt-16 space-y-10 before:absolute before:left-3 before:top-3 before:h-[calc(100%-1.5rem)] before:w-1 before:bg-primary md:before:left-1/2">
          {journey.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.08}>
              <div className="grid gap-5 md:grid-cols-2 md:gap-12">
                <div className={index % 2 === 0 ? "md:text-right" : "md:order-2"}>
                  <p className="font-display text-4xl font-black tracking-[-0.03em] text-highlight">{item.year}</p>
                </div>
                <div
                  className={`relative border-2 border-ink bg-background p-7 shadow-[6px_6px_0_#1A1A1A] ${
                    index % 2 === 0 ? "md:order-2" : ""
                  }`}
                >
                  <span className="absolute left-[-1.1rem] top-8 h-4 w-4 rounded-full border-2 border-ink bg-secondary md:left-[-2.3rem]" />
                  <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">{item.title}</h3>
                  <p className="mt-3 leading-8 text-[#4d4842]">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
