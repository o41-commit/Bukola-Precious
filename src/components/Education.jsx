import React from "react";

const Education = () => (
  <section
    id="education"
    aria-labelledby="education-title"
    className="relative isolate overflow-hidden  bg-[#07111f] px-5 py-20 text-[#e2e8f0] sm:px-8 sm:py-28"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_45%,rgba(56,189,248,.16),transparent_38%),linear-gradient(120deg,#070b19_0%,#0f1d3d_52%,#07111f_100%)]" />

    <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">
      <header data-scroll-reveal>
        <div className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[.36em] text-[#38bdf8]">
          The foundations
        </div>
        <h2
          id="education-title"
          className="m-0 text-[clamp(42px,6vw,72px)] font-bold leading-[1.08] tracking-[-.04em] text-[#bae6fd]"
        >
          Education<span className="text-white">.</span>
        </h2>
        <p className="mb-0 mt-5 max-w-md font-['Roboto_Slab',Georgia,serif] text-base leading-relaxed text-[#e2e8f0]/75 sm:text-lg">
          A foundation in communication, culture, and the craft of reaching
          people through words.
        </p>
      </header>

      <article
        data-scroll-reveal="right"
        className="group relative overflow-hidden rounded-[28px] bg-[#070b19]/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,.28)] backdrop-blur-sm transition duration-500 hover:shadow-[0_24px_70px_rgba(0,0,0,.38)] sm:p-10"
      >
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#bae6fd] via-[#38bdf8] to-transparent" />

        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="flex items-start gap-5">
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#0f1d3d]/45 text-[#bae6fd] sm:size-16">
              <svg
                viewBox="0 0 32 32"
                className="size-7 sm:size-8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m3 12 13-7 13 7-13 7L3 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 15v7c4.8 4.3 11.2 4.3 16 0v-7m5-3v9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[.28em] text-[#38bdf8]">
                Bachelor of Science
              </p>
              <h3 className="m-0 max-w-lg font-['Merriweather',Georgia,serif] text-2xl font-bold leading-snug text-[#f0f9ff] sm:text-[30px]">
                Mass Communication
              </h3>
              <p className="mb-0 mt-3 font-['Roboto_Slab',Georgia,serif] text-base text-[#e2e8f0]/80 sm:text-lg">
                Obafemi Awolowo University
              </p>
            </div>
          </div>

          <span className="inline-flex w-fit items-center rounded-full bg-[#38bdf8]/10 px-4 py-2 font-sans text-xs font-semibold tracking-[.12em] text-[#bae6fd] sm:mt-1 sm:whitespace-nowrap sm:text-sm">
            2022 — 2026
          </span>
        </div>

        <div className="relative mt-8 pt-5 sm:mt-10">
          <div className="flex items-center gap-2 text-[#38bdf8]">
            <span className="size-1.5 rounded-full bg-current" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[.24em]">
              Communication, storytelling &amp; media
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Education;
