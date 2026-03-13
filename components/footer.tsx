export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-white/5 pt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl text-white">Tejas Rawool</p>
            <p className="mt-2 text-sm text-slate-500">
              AI Developer, full-stack builder, and product-minded engineer.
            </p>
          </div>
          <a href="#hero" className="text-sm text-slate-400 transition hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
