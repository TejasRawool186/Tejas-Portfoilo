"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import { heroBadge, identityStatement } from "@/data/portfolio";

import { HeroCanvas } from "./hero-canvas";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative px-6 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-14">
      <div className="grid min-h-[calc(100vh-120px)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-md"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-highlight shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
            {heroBadge}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="space-y-5"
          >
            <p className="font-accent text-sm uppercase tracking-[0.35em] text-highlight">
              AI Developer | Full-Stack Developer | ML Builder
            </p>
            <h1 className="font-display text-6xl font-semibold leading-[0.9] text-white sm:text-7xl lg:text-[7rem]">
              TEJAS
              <br />
              RAWOOL
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{identityStatement}</p>
            <p className="max-w-xl text-sm uppercase tracking-[0.28em] text-slate-500">
              AI applications • machine learning systems • developer tools • full stack web apps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects">
              <Button className="w-full gap-2 sm:w-auto">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="/resume.txt">
              <Button variant="secondary" className="w-full gap-2 sm:w-auto">
                Download Resume
                <Download className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="ghost" className="w-full gap-2 sm:w-auto">
                Contact Me
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -left-8 top-12 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-highlight/15 blur-3xl" />
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}
