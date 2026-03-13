import { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1220] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.20),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_24%),linear-gradient(180deg,#0B1220_0%,#0F1B34_52%,#0B1220_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-40 h-80 w-80 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-[-8rem] h-80 w-80 rounded-full bg-highlight/10 blur-[160px]" />
      <div className="relative">{children}</div>
    </div>
  );
}
