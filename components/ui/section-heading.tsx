type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4 sm:space-y-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="bauhaus-accent-bar" />
        <p className="bauhaus-label text-primary">{eyebrow}</p>
      </div>
      <h2 className="max-w-3xl font-display text-3xl font-black leading-[0.98] tracking-[-0.03em] text-ink sm:text-4xl md:text-6xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-[#3f3b37] sm:text-[15px] md:text-lg">{description}</p>
      <div className="bauhaus-strip max-w-xs sm:max-w-md">
        <span className="bg-highlight" />
        <span className="bg-secondary" />
        <span className="bg-primary" />
      </div>
    </div>
  );
}
