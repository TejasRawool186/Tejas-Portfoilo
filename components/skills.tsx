"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/portfolio";

import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Core Skills"
            title="Capability clusters built around what it takes to ship modern AI products."
            description="This is not a wall of logos. The stack is organized by the systems Tejas repeatedly uses to design, build, and deploy usable software."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ x: -2, y: -2 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="bauhaus-card p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center border-2 border-ink bg-secondary text-ink">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">{category.title}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ x: -1, y: -1 }}
                        className="border-2 border-ink bg-card px-4 py-2 text-sm text-ink shadow-[3px_3px_0_#1A1A1A]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
