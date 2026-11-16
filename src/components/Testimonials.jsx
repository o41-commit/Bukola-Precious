import React from 'react';

const reviews = [
  {
    quote: 'Bukola has a rare gift for making a quiet moment feel dangerous. I was hooked from the very first page.',
    byline: 'Early reader · sample testimonial',
  },
  {
    quote: 'Every chapter pulled me deeper into the story. The atmosphere stayed with me long after I finished reading.',
    byline: 'Gothic fiction reader · sample testimonial',
  },
  {
    quote: 'Beautifully written, unsettling in the best way, and impossible to put down. I need to know what happens next.',
    byline: 'Beta reader · sample testimonial',
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    aria-labelledby="testimonials-title"
    className="relative isolate min-h-[760px] overflow-hidden border-y-[10px] border-[#38bdf8] bg-[#0f1d3d] px-5 py-16 text-[#bae6fd] sm:px-8 sm:py-20 lg:min-h-[913px]"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_35%,rgba(56,189,248,.18),transparent_42%),linear-gradient(125deg,#070b19_0%,#0f1d3d_52%,#07111f_100%)]" />
    <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 size-[440px] rounded-full border border-[#38bdf8]/10" />

    <div className="mx-auto max-w-[1120px]">
      <header className="mb-10 text-center motion-safe:animate-[works-rise_.8s_cubic-bezier(.16,1,.3,1)_both] sm:mb-14">
        <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[.4em] text-[#38bdf8]">From one reader to another</p>
        <h2 id="testimonials-title" className="m-0 text-[clamp(42px,6vw,72px)] font-bold leading-tight text-[#38bdf8]">Words That <span className="text-white">Stay</span></h2>
        <p className="mx-auto mb-0 mt-4 max-w-2xl font-['Roboto_Slab',Georgia,serif] text-base leading-relaxed text-[#e2e8f0]/80 sm:text-lg">
          A few notes from readers who stepped into Bukola’s darker worlds.
        </p>
      </header>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-sm border border-[#38bdf8]/30 bg-[#070b19]/70 p-7 shadow-[0_0_25px_5px_rgba(3,5,12,.45)] sm:min-h-[500px] sm:p-11 motion-safe:animate-[works-rise_.9s_cubic-bezier(.16,1,.3,1)_both]">
          <span className="absolute -right-2 -top-20 font-serif text-[300px] leading-none text-[#38bdf8]/[.08]" aria-hidden="true">“</span>
          <div className="relative">
            <div className="mb-8 flex items-center gap-3 text-[#38bdf8]">
              <span className="h-px w-10 bg-current" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[.3em]">A reader’s note</span>
            </div>
            <blockquote className="m-0 max-w-[480px] font-['Merriweather',Georgia,serif] text-[clamp(24px,3vw,36px)] font-bold leading-[1.55] text-[#bae6fd]">
              “Some stories entertain you. The best ones follow you into the dark.”
            </blockquote>
          </div>
          <div className="relative mt-10 border-t border-[#38bdf8]/25 pt-5">
            <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-[.18em] text-white">A note from the reading room</p>
            <p className="m-0 font-['Roboto_Slab',Georgia,serif] text-sm leading-relaxed text-[#e2e8f0]/70">Sample testimonial copy — replace with a real reader quote when available.</p>
          </div>
          <div className="absolute bottom-7 right-8 select-none font-['Bilbo_Swash_Caps',cursive] text-4xl text-[#38bdf8]/80 sm:bottom-10 sm:right-11 sm:text-5xl">Bukola Precious</div>
        </div>

        <div className="flex flex-col gap-5">
          {reviews.map((review, index) => (
            <figure
              key={review.byline}
              className="group relative m-0 flex min-h-[156px] flex-1 flex-col justify-center overflow-hidden bg-[#38bdf8] px-6 py-6 text-[#0b1329] shadow-[0_0_15px_5px_rgba(3,5,12,.45)] transition duration-500 hover:-translate-x-1 hover:bg-[#60a5fa] sm:px-8 motion-safe:animate-[works-rise_.85s_cubic-bezier(.16,1,.3,1)_both]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="absolute -right-2 -top-5 font-serif text-[110px] leading-none text-[#0f1d3d]/10 transition-transform duration-500 group-hover:scale-110" aria-hidden="true">”</span>
              <blockquote className="relative m-0 font-['Roboto_Slab',Georgia,serif] text-base font-semibold italic leading-[1.7] sm:text-[17px]">
                “{review.quote}”
              </blockquote>
              <figcaption className="relative mt-4 font-sans text-[9px] font-bold uppercase tracking-[.2em] text-[#0f1d3d] sm:text-[10px]">
                {review.byline}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
