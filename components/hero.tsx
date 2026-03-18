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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 border-2 border-ink bg-background px-4 py-2 text-sm text-ink shadow-[4px_4px_0_#1A1A1A]"
          >
            <span className="h-3 w-3 rounded-full border border-ink bg-highlight" />
            {heroBadge}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="space-y-5"
          >
            <p className="bauhaus-label text-primary">AI Developer | Full-Stack Developer | ML Builder</p>
            <h1 className="font-display text-6xl font-black leading-[0.85] tracking-[-0.04em] text-ink sm:text-7xl lg:text-[7rem]">
              TEJAS
              <br />
              RAWOOL
            </h1>
            <div className="bauhaus-strip max-w-xl">
              <span className="bg-highlight" />
              <span className="bg-secondary" />
              <span className="bg-primary" />
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#3f3b37] sm:text-xl">{identityStatement}</p>
            <p className="max-w-xl font-mono text-sm uppercase tracking-[0.22em] text-[#6a645d]">
              AI applications / machine learning systems / developer tools / full stack web apps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.16 }}
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
          transition={{ duration: 0.25, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-20 w-20 border-2 border-ink bg-secondary shadow-brutal animate-float" />
          <div className="absolute -right-4 bottom-10 h-16 w-16 rounded-full border-2 border-ink bg-highlight shadow-brutal animate-float" />
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}
