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
                whileHover={{ y: -6 }}
                className="grid gap-8 rounded-[2.25rem] bg-white/[0.03] p-7 lg:grid-cols-[0.62fr_1.38fr]"
              >
                <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(99,102,241,0.22),rgba(34,211,238,0.12),rgba(139,92,246,0.18))] p-8">
                  <div className="absolute -right-10 top-4 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
                  <div className="absolute bottom-0 left-6 h-28 w-28 rounded-full bg-highlight/15 blur-3xl" />
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Project {index + 1}</p>
                  <h3 className="mt-8 font-display text-3xl leading-tight text-white">{project.title}</h3>
                  <p className="mt-6 text-sm uppercase tracking-[0.24em] text-highlight">Applied AI / Product Build</p>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <p className="max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-[#0d1730] px-4 py-2 text-sm text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-300">
                    <a href={project.github} className="inline-flex items-center gap-2 transition hover:text-white">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    {project.live ? (
                      <a href={project.live} className="inline-flex items-center gap-2 transition hover:text-white">
                        <RadioTower className="h-4 w-4" />
                        Live App
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a href={project.demo} className="inline-flex items-center gap-2 transition hover:text-white">
                        <PlayCircle className="h-4 w-4" />
                        Demo
                      </a>
                    ) : null}
                    {project.actor ? (
                      <a href={project.actor} className="inline-flex items-center gap-2 transition hover:text-white">
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
