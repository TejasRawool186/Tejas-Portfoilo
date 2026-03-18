"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <a href="#hero" className="flex min-w-0 items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink sm:gap-3 sm:text-sm sm:tracking-[0.32em]">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-highlight text-white shadow-[4px_4px_0_#1A1A1A] sm:h-10 sm:w-10" />
          <span className="truncate">Tejas Rawool</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="bauhaus-label text-[#4d4842] transition hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink bg-background shadow-[3px_3px_0_#1A1A1A] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1A1A1A] lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="grid gap-3 border-t-2 border-ink bg-card px-4 py-4 sm:px-6 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="bauhaus-label border-2 border-ink bg-background px-3 py-3 text-ink shadow-[3px_3px_0_#1A1A1A] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[5px_5px_0_#1A1A1A]"
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
