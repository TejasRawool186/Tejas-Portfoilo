"use client";

import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1220]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#hero" className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-highlight text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          Tejas Rawool
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] text-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <nav className="grid gap-3 border-t border-white/5 px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-2xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
