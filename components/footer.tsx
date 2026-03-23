import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { contactLinks, footerSummary } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl section-frame p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="bauhaus-label text-highlight">Closing Frame</p>
            <h2 className="mt-4 font-display text-3xl font-black leading-[0.95] tracking-[-0.04em] text-ink sm:text-5xl">
              {footerSummary.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4d4842] sm:text-base sm:leading-8">
              {footerSummary.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <a
                href="mailto:tejasrawool.dev@gmail.com"
                className="bauhaus-button gap-2 bg-primary text-white"
              >
                <Mail className="h-4 w-4" />
                tejasrawool.dev@gmail.com
              </a>
              <a href="#hero" className="bauhaus-button gap-2 bg-background text-ink">
                Back to top
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border-2 border-ink bg-background p-4 shadow-[4px_4px_0_#1A1A1A] sm:p-5">
              <p className="bauhaus-label text-primary">Base</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-[#3f3b37] sm:text-base">
                <MapPin className="h-4 w-4 text-highlight" />
                Mumbai, India
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.slice(1, 5).map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`border-2 border-ink p-4 text-sm shadow-[4px_4px_0_#1A1A1A] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1A1A1A] ${
                    index % 3 === 0 ? "bg-background" : index % 3 === 1 ? "bg-card" : "bg-secondary/30"
                  }`}
                >
                  <p className="bauhaus-label text-[#6a645d]">{link.label}</p>
                  <p className="mt-2 break-all text-ink">{link.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
