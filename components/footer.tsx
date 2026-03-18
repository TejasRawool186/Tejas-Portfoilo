export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl border-t-2 border-ink pt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-black tracking-[-0.03em] text-ink">Tejas Rawool</p>
            <p className="mt-2 text-sm text-[#6a645d]">
              AI Developer, full-stack builder, and product-minded engineer.
            </p>
          </div>
          <a href="#hero" className="bauhaus-label text-[#4d4842] transition hover:text-primary">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
