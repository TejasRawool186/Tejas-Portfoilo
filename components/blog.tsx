import { ArrowUpRight } from "lucide-react";

import { articles, writingIntro } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Blog() {
  return (
    <section id="writing" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Writing"
            title={writingIntro.title}
            description={writingIntro.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.08}>
              <a
                href={article.href}
                className="group block border-2 border-ink bg-background p-5 shadow-[6px_6px_0_#1A1A1A] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-card hover:shadow-[10px_10px_0_#1A1A1A] sm:p-8"
              >
                <p className="bauhaus-label text-highlight">{article.publication}</p>
                <h3 className="mt-4 max-w-xl font-display text-2xl font-black leading-tight tracking-[-0.03em] text-ink sm:mt-6 sm:text-3xl">
                  {article.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#3f3b37] transition group-hover:text-primary sm:mt-8">
                  Read article
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
