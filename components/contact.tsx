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
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden border-2 border-ink bg-card shadow-[10px_10px_0_#1A1A1A]">
        <div className="grid gap-10 px-4 py-5 sm:px-6 sm:py-8 lg:grid-cols-[1fr_0.95fr] lg:gap-14 lg:px-12 lg:py-14">
          <Reveal>
            <div className="relative overflow-hidden border-2 border-ink bg-background p-5 shadow-[6px_6px_0_#1A1A1A] sm:p-8">
              <div className="absolute left-0 top-0 h-full w-3 sm:w-4 bg-highlight" />
              <div className="absolute right-4 top-4 h-12 w-12 rounded-full border-2 border-ink bg-secondary sm:right-8 sm:top-8 sm:h-16 sm:w-16" />
              <div className="absolute bottom-4 right-14 h-0 w-0 border-l-[18px] border-r-[18px] border-b-[32px] border-l-transparent border-r-transparent border-b-primary sm:bottom-8 sm:right-24 sm:border-l-[24px] sm:border-r-[24px] sm:border-b-[44px]" />
              <p className="bauhaus-label text-highlight">Contact</p>
              <h2 className="mt-5 font-display text-4xl font-black leading-[0.9] tracking-[-0.04em] text-ink sm:mt-6 sm:text-5xl lg:text-6xl">
                LET&apos;S
                <br />
                BUILD
                <br />
                SOMETHING
                <br />
                MEANINGFUL
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#3f3b37] sm:mt-6 sm:text-base">
                Open to internships, open-source collaborations, and product ideas that need thoughtful execution.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between gap-4 border-2 border-ink bg-background px-4 py-4 text-ink shadow-[4px_4px_0_#1A1A1A] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[6px_6px_0_#1A1A1A] sm:px-5"
                >
                  <div className="min-w-0">
                    <p className="bauhaus-label text-[#6a645d]">{link.label}</p>
                    <p className="mt-2 break-all text-sm sm:text-base">{link.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="border-2 border-ink bg-background p-5 shadow-[6px_6px_0_#1A1A1A] sm:p-8"
            >
              <div className="grid gap-5">
                <label className="grid gap-2">
                  <span className="bauhaus-label text-[#4d4842]">Name</span>
                  <input name="name" required className="bauhaus-input" placeholder="Your name" />
                </label>
                <label className="grid gap-2">
                  <span className="bauhaus-label text-[#4d4842]">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="bauhaus-input"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="bauhaus-label text-[#4d4842]">Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="bauhaus-input resize-none"
                    placeholder="Tell me about the opportunity."
                  />
                </label>
                <Button className="w-full gap-2 sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
                {status ? <p className="text-sm text-success">{status}</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
