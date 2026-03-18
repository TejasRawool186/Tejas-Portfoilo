"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle, RadioTower } from "lucide-react";

import { projects } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Featured builds focused on applied intelligence."
            description="A smaller project set does a better job of telling the story. Each build below reflects practical AI thinking, product clarity, and usable engineering decisions."
          />
        </Reveal>

        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ x: -2, y: -2 }}
                className="bauhaus-card grid gap-8 p-7 lg:grid-cols-[0.62fr_1.38fr]"
              >
                <div className="relative overflow-hidden border-2 border-ink bg-card p-8 shadow-[4px_4px_0_#1A1A1A]">
                  <div className="absolute left-0 top-0 h-full w-3 bg-primary" />
                  <div className="absolute right-6 top-6 h-16 w-16 rounded-full border-2 border-ink bg-secondary" />
                  <div className="absolute bottom-6 right-20 h-0 w-0 border-l-[26px] border-r-[26px] border-b-[46px] border-l-transparent border-r-transparent border-b-highlight" />
                  <p className="bauhaus-label text-[#6a645d]">Project {index + 1}</p>
                  <h3 className="mt-8 max-w-sm font-display text-3xl font-black leading-tight tracking-[-0.03em] text-ink">{project.title}</h3>
                  <p className="mt-6 bauhaus-label text-highlight">Applied AI / Product Build</p>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <p className="max-w-3xl text-lg leading-8 text-[#3f3b37]">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span key={tech} className="border-2 border-ink bg-background px-4 py-2 text-sm text-ink shadow-[3px_3px_0_#1A1A1A]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-6 pt-2 text-sm text-[#3f3b37]">
                    <a href={project.github} className="inline-flex items-center gap-2 transition hover:text-primary">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    {project.live ? (
                      <a href={project.live} className="inline-flex items-center gap-2 transition hover:text-primary">
                        <RadioTower className="h-4 w-4" />
                        Live App
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a href={project.demo} className="inline-flex items-center gap-2 transition hover:text-primary">
                        <PlayCircle className="h-4 w-4" />
                        Demo
                      </a>
                    ) : null}
                    {project.actor ? (
                      <a href={project.actor} className="inline-flex items-center gap-2 transition hover:text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                        Actor
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
