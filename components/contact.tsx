"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

import { contactLinks } from "@/data/portfolio";

import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";

export function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:tejasrawool.dev@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      name,
    )}&body=${body}`;
    setStatus("Draft opened in your mail client.");
  }

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#050b16_0%,#0b1430_36%,#250a1d_72%,#0b1220_100%)]">
        <div className="grid gap-14 px-8 py-10 lg:grid-cols-[1fr_0.95fr] lg:px-12 lg:py-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-8">
              <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-rose-500/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-primary/25 blur-3xl" />
              <p className="text-sm uppercase tracking-[0.32em] text-rose-300">Contact</p>
              <h2 className="mt-6 font-display text-5xl leading-[0.9] text-white sm:text-6xl">
                LET&apos;S
                <br />
                BUILD
                <br />
                SOMETHING
                <br />
                MEANINGFUL
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                Open to internships, open-source collaborations, and product ideas that need thoughtful execution.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-[1.5rem] bg-white/[0.04] px-5 py-4 text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{link.label}</p>
                    <p className="mt-2 text-sm sm:text-base">{link.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-highlight" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,32,0.92),rgba(18,12,32,0.94))] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm text-slate-400">Name</span>
                  <input
                    name="name"
                    required
                    className="rounded-2xl bg-[#0d1730] px-4 py-3 text-white outline-none ring-1 ring-white/5 transition focus:ring-rose-400/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-400">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl bg-[#0d1730] px-4 py-3 text-white outline-none ring-1 ring-white/5 transition focus:ring-rose-400/50"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-400">Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="rounded-2xl bg-[#0d1730] px-4 py-3 text-white outline-none ring-1 ring-white/5 transition focus:ring-rose-400/50"
                    placeholder="Tell me about the opportunity."
                  />
                </label>
                <Button className="gap-2">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
                {status ? <p className="text-sm text-highlight">{status}</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
