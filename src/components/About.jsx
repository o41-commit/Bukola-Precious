import React from "react";
import ProfileImage from "../assets/Profile.jpeg";

const About = () => (
  <section
    id="about"
    aria-labelledby="about-title"
    className="relative isolate min-h-[calc(100svh-105px)] scroll-mt-20 overflow-hidden bg-[#0b1329] text-[#e2e8f0] md:scroll-mt-[105px]"
  >
    {/* Deep Midnight Blue & Luminous Cyan Ambient Backdrop */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_30%,rgba(56,189,248,.18),transparent_48%),linear-gradient(125deg,#050814_0%,#0f1d3d_55%,#070e21_100%)]" />
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute -left-12 top-20 h-44 w-44 rounded-full bg-[#38bdf8]/15 blur-3xl motion-safe:animate-[about-float_7s_ease-in-out_infinite]" />
      <span className="absolute right-10 top-12 h-56 w-56 rounded-full bg-[#1d4ed8]/20 blur-3xl motion-safe:animate-[about-float_10s_ease-in-out_infinite]" />
      <span className="absolute bottom-8 left-1/3 h-40 w-40 rounded-full bg-[#bae6fd]/10 blur-3xl motion-safe:animate-[float-slow_13s_ease-in-out_infinite]" />
    </div>

    <div className="relative mx-auto grid min-h-[calc(100svh-125px)] max-w-[1440px] grid-cols-1 lg:grid-cols-[58.3%_41.7%]">
      {/* Left Column: Editorial Bio */}
      <div className="relative flex flex-col justify-between px-5 pb-44 pt-16 sm:px-12 sm:pb-52 sm:pt-20 lg:px-[10%] lg:pb-52 lg:pt-16">
        <div className="relative z-10 max-w-[610px]">

          {/* Heading + Quill Emblem */}
          <div
            data-scroll-reveal="up"
            className="mb-7 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <h2
              id="about-title"
              className="m-0 bg-gradient-to-r from-[#f0f9ff] via-[#bae6fd] to-[#38bdf8] bg-clip-text text-[clamp(40px,7vw,68px)] font-bold leading-[1.08] tracking-[-.04em] text-transparent drop-shadow-[0_4px_20px_rgba(56,189,248,0.2)]"
            >
              About Me<span className="text-white">.</span>
            </h2>
            <span
              className="grid size-12 shrink-0 place-items-center rounded-full bg-[#070b19]/50 text-[#bae6fd] shadow-[0_0_25px_rgba(56,189,248,0.2)] backdrop-blur-sm motion-safe:animate-[about-float_5s_ease-in-out_infinite] sm:size-[58px]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 48 48" className="size-7 sm:size-8" fill="none">
                <path
                  d="M37.8 8.5C26.6 8 14.1 15.7 11 26.9c-1.5 5.4 1 9.8 5.4 10.4 11.3 1.6 20.8-13 21.4-28.8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 40c7.3-10.1 14.4-17.5 25.4-25.1M17.6 31l-1-8.1m7.3 1.6-1.1-7.2m-1 16.5 7.4.4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          {/* Structured Editorial Copy */}
          <div className="space-y-4 font-['Roboto_Slab',Georgia,serif] text-[14.5px] leading-[1.82] text-[#e2e8f0]/90 sm:text-[15.5px] sm:leading-[1.88]">
            <p data-scroll-reveal style={{ "--scroll-delay": "80ms" }} className="m-0">
              I work with <span className="font-semibold text-[#bae6fd]">SaaS and AI companies</span> to turn complex products into content that readers understand and use: product documentation, explainers, case studies, long-form guides, and blog articles.
            </p>

            <p data-scroll-reveal style={{ "--scroll-delay": "140ms" }} className="m-0">
              My background in <span className="font-semibold text-white">Mass Communication</span> means I know how to shape a message for a specific audience. I&apos;ve built my SaaS and AI expertise through hands-on experience, which means I can follow the technical details and explain them clearly to both business readers and engineers.
            </p>

            <p data-scroll-reveal style={{ "--scroll-delay": "200ms" }} className="m-0">
              I don&apos;t simplify by stripping out depth. I give complex ideas a clear thread, from the problem to the solution, so readers understand not just what your product does, but why it matters and how it fits into their workflow.
            </p>

            <p data-scroll-reveal style={{ "--scroll-delay": "260ms" }} className="m-0">
              The result is content that helps users get value faster and positions your product as the obvious choice in your space.
            </p>

            <p data-scroll-reveal style={{ "--scroll-delay": "320ms" }} className="m-0 pt-1 font-medium text-[#bae6fd]">
              If you&apos;re building a SaaS or AI product and need a writer who gets both the tech and the story, you are in the right place.
            </p>
          </div>

          {/* Premium Pill CTA */}
          <div data-scroll-reveal style={{ "--scroll-delay": "380ms" }} className="mt-8">
            <a
              href="#works"
              className="group inline-flex items-center gap-3 rounded-full bg-[#070b19]/60 px-6 py-3 text-[11px] font-semibold uppercase tracking-[.22em] text-[#bae6fd] no-underline shadow-[0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#38bdf8] hover:text-[#050814]"
            >
              <span>A little more about my work</span>
              <span
                className="transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Atmospheric Notebook Banner */}
        <div className="absolute bottom-0 left-0 h-[145px] w-full overflow-hidden sm:h-[175px]">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85"
            alt="A writer's hands at work in a notebook"
            loading="lazy"
            className="size-full object-cover object-center opacity-40 saturate-[.4] transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/95 via-[#0b1329]/70 to-[#0f1d3d]/40" />
          <span className="absolute bottom-5 left-6 font-['Bilbo_Swash_Caps',cursive] text-3xl text-[#bae6fd] drop-shadow-[0_2px_12px_rgba(56,189,248,0.35)] motion-safe:animate-[float-slow_9s_ease-in-out_infinite] sm:bottom-6 sm:left-12 sm:text-4xl">
            Where tech meets story.
          </span>
        </div>
      </div>

      {/* Right Column: Editorial Portrait */}
      <div
        data-scroll-reveal="right"
        className="group relative min-h-[520px] overflow-hidden lg:min-h-full"
      >
        <img
          src={ProfileImage}
          alt="Editorial portrait of Bukola Precious"
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-[center_35%] saturate-[.85] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#0b1329]/20 to-[#070b19]/30" />

        {/* Subtle Inner Ice-Blue Frame */}
        {/* Editorial Signature Plate */}
        <div className="absolute bottom-8 left-6 right-6 text-[#bae6fd] sm:bottom-12 sm:left-10 sm:right-10">
          <p className="mb-1.5 font-sans text-[10px] font-semibold uppercase tracking-[.28em] text-white/85">
            Technical Writer · SaaS &amp; AI · Storyteller
          </p>
          <p className="m-0 font-['Bilbo_Swash_Caps',cursive] text-[clamp(2.25rem,7vw,3.75rem)] leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] motion-safe:animate-[float-slow_10s_ease-in-out_infinite]">
            Bukola Precious
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;