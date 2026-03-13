type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex items-center gap-4 text-primary">
        <span className="h-px w-10 bg-primary" />
        <p className="font-accent text-sm uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      </div>
      <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">{description}</p>
    </div>
  );
}
