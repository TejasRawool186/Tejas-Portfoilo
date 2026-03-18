"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import { heroBadge, identityStatement } from "@/data/portfolio";

import { HeroCanvas } from "./hero-canvas";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-10 lg:pb-24 lg:pt-14">
      <div className="grid min-h-0 items-center gap-10 sm:gap-12 lg:min-h-[calc(100vh-120px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex max-w-full flex-wrap items-center gap-3 border-2 border-ink bg-background px-3 py-2 text-xs text-ink shadow-[4px_4px_0_#1A1A1A] sm:px-4 sm:text-sm"
          >
            <span className="h-3 w-3 shrink-0 rounded-full border border-ink bg-highlight" />
            <span className="leading-5">{heroBadge}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="space-y-4 sm:space-y-5"
          >
            <p className="bauhaus-label text-primary">AI Developer | Full-Stack Developer | ML Builder</p>
            <h1 className="font-display text-[3rem] font-black leading-[0.88] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[7rem]">
              TEJAS
              <br />
              RAWOOL
            </h1>
            <div className="bauhaus-strip max-w-[15rem] sm:max-w-xl">
              <span className="bg-highlight" />
              <span className="bg-secondary" />
              <span className="bg-primary" />
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#3f3b37] sm:text-lg sm:leading-8 lg:text-xl">{identityStatement}</p>
            <p className="max-w-xl font-mono text-xs uppercase tracking-[0.16em] text-[#6a645d] sm:text-sm sm:tracking-[0.22em]">
              AI applications / machine learning systems / developer tools / full stack web apps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.16 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button className="w-full gap-2 sm:w-auto">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="/resume.txt" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full gap-2 sm:w-auto">
                Download Resume
                <Download className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
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
          transition={{ duration: 0.25, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -left-2 top-6 hidden h-14 w-14 border-2 border-ink bg-secondary shadow-brutal animate-float sm:block lg:-left-8 lg:top-10 lg:h-20 lg:w-20" />
          <div className="absolute -right-2 bottom-6 hidden h-12 w-12 rounded-full border-2 border-ink bg-highlight shadow-brutal animate-float sm:block lg:-right-4 lg:bottom-10 lg:h-16 lg:w-16" />
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}
