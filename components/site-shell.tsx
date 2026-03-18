import { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-ink">
      <div className="pointer-events-none absolute inset-0 bauhaus-dot-grid opacity-60" />
      <div className="pointer-events-none absolute left-[-3rem] top-28 h-28 w-28 border-2 border-ink bg-secondary shadow-brutal animate-float" />
      <div className="pointer-events-none absolute right-8 top-24 h-24 w-24 rounded-full border-2 border-ink bg-primary shadow-brutal animate-float" />
      <div className="pointer-events-none absolute bottom-24 left-[8%] h-0 w-0 border-l-[54px] border-r-[54px] border-b-[92px] border-l-transparent border-r-transparent border-b-highlight animate-float" />
      <div className="pointer-events-none absolute bottom-20 right-[10%] h-20 w-40 rounded-t-full border-2 border-ink border-b-0 bg-card shadow-brutal animate-float" />
      <div className="relative">{children}</div>
    </div>
  );
}
