type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-5">
      <div className="flex items-center gap-4">
        <span className="bauhaus-accent-bar" />
        <p className="bauhaus-label text-primary">{eyebrow}</p>
      </div>
      <h2 className="max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-[-0.03em] text-ink md:text-6xl">
        {title}
      </h2>
      <p className="max-w-2xl text-[15px] leading-7 text-[#3f3b37] md:text-lg">{description}</p>
      <div className="bauhaus-strip max-w-md">
        <span className="bg-highlight" />
        <span className="bg-secondary" />
        <span className="bg-primary" />
      </div>
    </div>
  );
}
