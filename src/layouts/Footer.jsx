const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Works', '#works'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact'],
];

const Footer = () => (
  <footer className="bg-[#070b19] px-5 py-10 text-[#e2e8f0] sm:px-8 sm:py-12">
    <div className="mx-auto max-w-[1280px]">
      <div className="grid gap-9 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-sm">
          <a href="#home" className="font-['Merriweather',Georgia,serif] text-xl font-bold text-[#bae6fd] no-underline sm:text-2xl">Bukola Precious</a>
          <p className="mb-0 mt-3 font-['Roboto_Slab',Georgia,serif] text-sm leading-relaxed text-[#e2e8f0]/70">Technical writer making complex technology clear, useful, and human.</p>
        </div>

        <nav aria-label="Footer navigation" className="flex max-w-2xl flex-wrap gap-x-5 gap-y-3 md:justify-end md:gap-x-6">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="font-sans text-xs text-[#e2e8f0]/75 no-underline transition-colors hover:text-[#bae6fd]">{label}</a>
          ))}
        </nav>
      </div>

      <div className="mt-8 flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 font-sans text-[10px] tracking-wide text-[#e2e8f0]/55">© {new Date().getFullYear()} Bukola Precious. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span className="font-sans text-[9px] font-semibold uppercase tracking-[.2em] text-[#38bdf8]">Connect</span>
          <a href="https://www.linkedin.com/in/bukola-precious-a93740331" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-8 place-items-center rounded-full text-xs font-bold text-[#bae6fd] no-underline transition-colors hover:bg-[#38bdf8]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bae6fd]">in</a>
          <a href="https://x.com/precious_b73231" target="_blank" rel="noreferrer" aria-label="X" className="grid size-8 place-items-center rounded-full text-xs font-bold text-[#bae6fd] no-underline transition-colors hover:bg-[#38bdf8]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bae6fd]">𝕏</a>
        </div>
      </div>
      <a
        href="https://wa.me/2349068994360?text=Hello%20DevNado%2C%20I%20found%20your%20work%20through%20Bukola%20Precious%27s%20portfolio%20and%20would%20like%20to%20discuss%20a%20web%20design%20or%20development%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Developed and designed by DevNado on WhatsApp"
        className="mt-6 block border-t border-white/5 pt-5 text-center font-sans text-[10px] uppercase tracking-[.22em] text-[#e2e8f0]/45 no-underline transition-colors hover:text-[#bae6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bae6fd]"
      >
        Developed and designed by <span className="font-bold text-[#38bdf8]/80">DevNado</span>
      </a>
    </div>
  </footer>
);

export default Footer;
