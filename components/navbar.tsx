"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/data/portfolio";

const navTargets = navItems.map((item) => ({
  label: item,
  id: item.toLowerCase().replace(/\s+/g, "-"),
}));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", ...navTargets.map((item) => item.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((value): value is HTMLElement => Boolean(value));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <a href="#hero" className="flex min-w-0 items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink sm:gap-3 sm:text-sm sm:tracking-[0.32em]">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-highlight text-white shadow-[4px_4px_0_#1A1A1A] sm:h-10 sm:w-10" />
          <span className="truncate">Tejas Rawool</span>
        </a>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-4">
          {navTargets.map((item) => {
            const isActive = active === item.id;

            return (
              <a
                key={item.label}
                href={`#${item.id}`}
                className={`bauhaus-label border-2 border-ink px-3 py-2 transition ${
                  isActive
                    ? "bg-primary text-white shadow-[3px_3px_0_#1A1A1A]"
                    : "bg-background text-[#4d4842] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-[3px_3px_0_#1A1A1A]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
          {navTargets.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className={`bauhaus-label border-2 border-ink px-3 py-3 shadow-[3px_3px_0_#1A1A1A] transition ${
                active === item.id ? "bg-primary text-white" : "bg-background text-ink hover:bg-secondary"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
