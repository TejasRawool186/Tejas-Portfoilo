"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle, RadioTower } from "lucide-react";

import { projects } from "@/data/portfolio";

import { Parallax } from "./ui/parallax";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Featured builds focused on applied intelligence."
            description="A smaller project set does a better job of telling the story. Each build below reflects practical AI thinking, product clarity, and usable engineering decisions."
          />
        </Reveal>

        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {projects.map((project, index) => {
            const primaryActionLabel = project.live ? "Open Live App" : project.actor ? "Open Actor" : "View GitHub";
            const primaryActionHref = project.live ?? project.actor ?? project.github;

            return (
              <Reveal key={project.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ x: -2, y: -2 }}
                  className="bauhaus-card grid gap-5 p-4 sm:gap-8 sm:p-7 lg:grid-cols-[0.56fr_1.44fr]"
                >
                  <div className="relative overflow-hidden border-2 border-ink bg-card p-5 shadow-[4px_4px_0_#1A1A1A] sm:p-8">
                    <div className="absolute left-0 top-0 h-full w-2 sm:w-3 bg-primary" />
                    <Parallax className="absolute right-4 top-4 sm:right-6 sm:top-6" offset={22}>
                      <div className="h-12 w-12 rounded-full border-2 border-ink bg-secondary sm:h-16 sm:w-16" />
                    </Parallax>
                    <Parallax className="absolute bottom-4 right-14 sm:bottom-6 sm:right-20" offset={30}>
                      <div className="h-0 w-0 border-l-[18px] border-r-[18px] border-b-[32px] border-l-transparent border-r-transparent border-b-highlight sm:border-l-[26px] sm:border-r-[26px] sm:border-b-[46px]" />
                    </Parallax>
                    <p className="bauhaus-label text-[#6a645d]">Project {index + 1}</p>
                    <h3 className="mt-6 max-w-sm pr-12 font-display text-2xl font-black leading-tight tracking-[-0.03em] text-ink sm:mt-8 sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-xs text-sm leading-6 text-[#4d4842] sm:mt-6">
                      Product-led build with a clear use case, structured workflow, and measurable user utility.
                    </p>
                  </div>

                  <div className="flex flex-col justify-between gap-5 sm:gap-6">
                    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_15rem]">
                      <p className="max-w-3xl text-base leading-7 text-[#3f3b37] sm:text-lg sm:leading-8">{project.description}</p>
                      <div className="section-frame p-4">
                        <p className="bauhaus-label text-primary">Primary Outcome</p>
                        <p className="mt-2 text-sm leading-6 text-[#4d4842]">
                          Practical UX, concise information flow, and a clear next action for the user.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`border-2 border-ink px-3 py-2 text-sm text-ink shadow-[3px_3px_0_#1A1A1A] sm:px-4 ${
                            techIndex % 3 === 0 ? "bg-background" : techIndex % 3 === 1 ? "bg-card" : "bg-secondary/30"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 border-t-2 border-ink pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
                        <a href={project.github} className="inline-flex items-center gap-2 text-sm text-[#3f3b37] transition hover:text-primary">
                          <Github className="h-4 w-4 shrink-0" />
                          GitHub
                        </a>
                        {project.demo ? (
                          <a href={project.demo} className="inline-flex items-center gap-2 text-sm text-[#3f3b37] transition hover:text-primary">
                            <PlayCircle className="h-4 w-4 shrink-0" />
                            Demo
                          </a>
                        ) : null}
                      </div>

                      <a href={primaryActionHref} className="w-full sm:w-auto">
                        <div className="bauhaus-button w-full gap-2 bg-primary text-white sm:w-auto">
                          {primaryActionLabel}
                          {project.live ? <RadioTower className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
