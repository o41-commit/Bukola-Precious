const Testimonials = () => (
  <section
    id="testimonials"
    aria-labelledby="testimonials-title"
    className="relative isolate overflow-hidden bg-[#0f1d3d] px-5 py-16 text-[#bae6fd] sm:px-8 sm:py-20 lg:py-24"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_25%,rgba(56,189,248,.16),transparent_38%),radial-gradient(ellipse_at_85%_75%,rgba(96,165,250,.10),transparent_36%),linear-gradient(125deg,#070b19_0%,#0f1d3d_52%,#07111f_100%)]" />

    <div className="mx-auto max-w-[1120px]">
      <header data-scroll-reveal className="mb-10 text-center sm:mb-14">
        <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[.38em] text-[#38bdf8]">Client & Reader Notes</p>
        <h2 id="testimonials-title" className="m-0 text-[clamp(40px,7vw,72px)] font-bold leading-[1.05] text-[#38bdf8]">Words That <span className="text-white">Stay</span></h2>
        <p className="mx-auto mb-0 mt-4 max-w-2xl font-['Roboto_Slab',Georgia,serif] text-base leading-relaxed text-[#e2e8f0]/80 sm:text-lg">
          A few notes from the people Bukola has worked with and written for.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
        <figure
          data-scroll-reveal="left"
          className="group relative m-0 flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[2px] border border-[#38bdf8]/20 bg-[#070b19]/75 p-7 shadow-[0_24px_60px_rgba(2,6,23,.38)] transition duration-500 hover:-translate-y-1 hover:border-[#38bdf8]/50 sm:min-h-[340px] sm:p-10 lg:p-12"
        >
          <span className="absolute -right-1 -top-14 font-serif text-[220px] leading-none text-[#38bdf8]/[.07]" aria-hidden="true">“</span>
          <div className="relative">
            <div className="mb-7 flex items-center gap-3 text-[#38bdf8]">
              <span className="h-px w-10 bg-current" />
              <span className="font-sans text-[9px] font-semibold uppercase tracking-[.28em]">Client note</span>
            </div>
            <blockquote className="m-0 font-['Merriweather',Georgia,serif] text-[clamp(21px,3vw,30px)] font-bold leading-[1.5] text-[#bae6fd]">
              “She asks the right questions, learns the product fast, and delivers content that reads as if an insider wrote it. Revisions were also quick.”
            </blockquote>
          </div>
          <figcaption className="relative mt-9 border-t border-[#38bdf8]/15 pt-5">
            <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[.18em] text-white">Victor Tobiloba</p>
            <p className="m-0 font-['Roboto_Slab',Georgia,serif] text-sm text-[#e2e8f0]/65">Web Developer</p>
          </figcaption>
        </figure>

        <figure
          data-scroll-reveal="right"
          className="group relative m-0 flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[2px] border border-[#38bdf8]/20 bg-[#38bdf8] p-7 text-[#0b1329] shadow-[0_24px_60px_rgba(2,6,23,.38)] transition duration-500 hover:-translate-y-1 hover:bg-[#60a5fa] sm:min-h-[340px] sm:p-10 lg:p-12"
        >
          <span className="absolute -right-1 -top-14 font-serif text-[220px] leading-none text-[#0f1d3d]/10" aria-hidden="true">“</span>
          <div className="relative">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0f1d3d]" />
              <span className="font-sans text-[9px] font-semibold uppercase tracking-[.28em]">Reader note</span>
            </div>
            <blockquote className="m-0 font-['Merriweather',Georgia,serif] text-[clamp(21px,3vw,30px)] font-bold leading-[1.5]">
              “She doesn&apos;t water down technical ideas, she gives them a clear thread, so readers see why the product matters.”
            </blockquote>
          </div>
          <figcaption className="relative mt-9 border-t border-[#0f1d3d]/15 pt-5">
            <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[.18em]">Olumide Solomon</p>
            <p className="m-0 font-['Roboto_Slab',Georgia,serif] text-sm text-[#0f1d3d]/70">Reader</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default Testimonials;
