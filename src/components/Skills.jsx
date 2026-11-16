import React, { useState } from "react";

const expertise = [
  {
    name: "Artificial Intelligence",
    short: "AI",
    detail: "Architecting intelligent workflows, prompt systems, and AI-driven narrative tooling.",
    relatedTools: ["GitHub", "Notion", "Markdown"],
  },
  {
    name: "Machine Learning",
    short: "ML",
    detail: "Translating complex model behaviors and predictive systems into clear, human-centered insights.",
    relatedTools: ["GitHub", "Google Docs", "Markdown"],
  },
  {
    name: "Software as a Service",
    short: "SaaS",
    detail: "Crafting product positioning, onboarding narratives, and lifecycle content that converts.",
    relatedTools: ["Notion", "Google Docs", "Canva"],
  },
  {
    name: "Content Strategy",
    short: "CS",
    detail: "Building editorial architectures that unite atmospheric storytelling with measurable growth.",
    relatedTools: ["Notion", "WordPress", "Google Docs"],
  },
  {
    name: "Technical Marketing",
    short: "TM",
    detail: "Bridging deep engineering concepts and executive decision-makers with authoritative clarity.",
    relatedTools: ["Markdown", "GitHub", "WordPress"],
  },
  {
    name: "Retrieval-Augmented Generation",
    short: "RAG",
    detail: "Designing grounded knowledge pipelines and documentation structures optimized for semantic retrieval.",
    relatedTools: ["Markdown", "GitHub", "Notion"],
  },
  {
    name: "Search Engine Optimization",
    short: "SEO",
    detail: "Engineering high-intent organic visibility without sacrificing literary voice or depth.",
    relatedTools: ["SurferSEO", "WordPress", "Google Docs"],
  },
  {
    name: "Data Visualization",
    short: "DV",
    detail: "Turning dense metrics and research into clean, visually arresting editorial graphics.",
    relatedTools: ["Canva", "Google Docs", "Notion"],
  },
];

const tools = [
  "Markdown",
  "SurferSEO",
  "GitHub",
  "WordPress",
  "Notion",
  "Google Docs",
  "Canva",
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const selectedData = expertise.find((s) => s.short === activeSkill);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate overflow-hidden border-y-[10px] border-[#38bdf8] bg-[#0f1d3d] px-5 py-20 text-[#e2e8f0] sm:px-8 sm:py-28"
    >
      {/* Multi-layered Atmospheric Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(56,189,248,.24),transparent_42%),radial-gradient(ellipse_at_88%_85%,rgba(15,29,61,.55),transparent_48%),linear-gradient(135deg,#03050c_0%,#0f1d3d_48%,#050814_100%)]" />

      {/* Counter-Rotating Astrolabe Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-6 -z-10 size-96 rounded-full border border-dashed border-[#38bdf8]/15 motion-safe:animate-[spin_60s_linear_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-16 -z-10 size-72 rounded-full border border-[#bae6fd]/10 motion-safe:animate-[spin_45s_linear_infinite_reverse]"
      />

      {/* Floating Blue Motes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute left-[10%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#bae6fd]/50 motion-safe:animate-[float-mote_7s_ease-in-out_infinite]" />
        <span className="absolute right-[24%] top-[18%] h-1 w-1 rounded-full bg-[#38bdf8]/60 motion-safe:animate-[float-mote_9s_ease-in-out_1.5s_infinite]" />
        <span className="absolute bottom-[16%] left-[42%] h-1.5 w-1.5 rounded-full bg-[#bae6fd]/40 motion-safe:animate-[float-mote_8s_ease-in-out_3s_infinite]" />
      </div>

      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <header className="mb-12 max-w-[760px] motion-safe:animate-[works-rise_.8s_cubic-bezier(.16,1,.3,1)_both] sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-3.5 text-[#38bdf8]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#38bdf8]" />
            <span className="text-[10px]">◆</span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[.36em] sm:text-[11px]">
              Thoughtful craft. Practical tools.
            </span>
          </div>

          <h2
            id="skills-title"
            className="m-0 text-[clamp(40px,6vw,72px)] font-black leading-[1.1] tracking-[-.03em] text-[#bae6fd] drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            Skills{" "}
            <span className="bg-gradient-to-r from-white via-[#f0f9ff] to-[#bae6fd] bg-clip-text font-bold text-transparent">
              &amp; Expertise
            </span>
          </h2>

          <p className="mb-0 mt-5 max-w-[620px] font-['Roboto_Slab',Georgia,serif] text-base leading-relaxed text-[#e2e8f0]/80 sm:text-lg">
            A blend of emerging technology, sharp storytelling, and the tools to
            bring good ideas to life.{" "}
            <span className="text-xs italic text-[#bae6fd]/80">
              (Select any discipline to highlight its stack.)
            </span>
          </p>
        </header>

        {/* Main Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.45fr_.85fr] lg:gap-8">
          {/* Card 01: Expertise */}
          <section
            aria-labelledby="expertise-title"
            className="group/card relative overflow-hidden rounded-[30px] border border-[#38bdf8]/30 bg-gradient-to-b from-[#291207]/85 to-[#1c0b04]/90 p-5 shadow-[0_24px_60px_rgba(0,0,0,.35)] backdrop-blur-md transition-colors duration-500 hover:border-[#38bdf8]/50 motion-safe:animate-[works-rise_.9s_cubic-bezier(.16,1,.3,1)_100ms_both] sm:p-8"
          >
            {/* Top Subtle Corner Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full bg-[#38bdf8]/10 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100"
            />

            <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#38bdf8]/25 pb-5">
              <div>
                <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[.28em] text-[#38bdf8]">
                  01 / What I do
                </p>
                <h3
                  id="expertise-title"
                  className="m-0 text-2xl font-bold text-[#bae6fd] sm:text-3xl"
                >
                  Skills{" "}
                  <span className="font-normal text-white/75">(Expertise)</span>
                </h3>
              </div>
              <span className="hidden font-['Bilbo_Swash_Caps',cursive] text-4xl text-[#38bdf8] drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)] sm:block">
                Curiosity, applied.
              </span>
            </div>

            {/* Interactive Expertise List */}
            <ul className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2">
              {expertise.map((skill, index) => {
                const isSelected = activeSkill === skill.short;
                return (
                  <li
                    key={skill.short}
                    style={{ animationDelay: `${180 + index * 65}ms` }}
                    className="motion-safe:animate-[works-rise_.7s_cubic-bezier(.16,1,.3,1)_both]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSkill(isSelected ? null : skill.short)
                      }
                      aria-pressed={isSelected}
                      className={`group flex min-h-[76px] w-full cursor-pointer items-center gap-4 rounded-2xl border px-3.5 py-2.5 text-left transition-all duration-300 sm:px-4 ${
                        isSelected
                          ? "border-[#bae6fd]/70 bg-gradient-to-r from-[#0f1d3d]/75 to-[#0f1d3d]/60 shadow-[0_8px_25px_rgba(56,189,248,0.2)]"
                          : "border-transparent bg-white/[0.015] hover:-translate-y-0.5 hover:border-[#38bdf8]/35 hover:bg-[#0f1d3d]/40"
                      }`}
                    >
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-full border font-sans text-[11px] font-bold tracking-wider transition-all duration-300 ${
                          isSelected
                            ? "scale-105 border-[#bae6fd] bg-[#bae6fd] text-[#070b19] shadow-[0_0_15px_rgba(186,230,253,0.5)]"
                            : "border-[#38bdf8]/45 bg-[#38bdf8]/10 text-[#bae6fd] group-hover:rotate-6 group-hover:border-[#bae6fd] group-hover:bg-[#38bdf8] group-hover:text-[#070b19]"
                        }`}
                      >
                        {skill.short}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="mb-1 block font-sans text-[9px] uppercase tracking-[.2em] text-[#38bdf8]/80">
                          Expertise {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`block font-['Merriweather',Georgia,serif] text-sm leading-snug transition-colors sm:text-[15px] ${
                            isSelected
                              ? "font-bold text-[#bae6fd]"
                              : "text-[#e2e8f0] group-hover:text-white"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </span>

                      <span
                        className={`ml-auto text-sm transition-all duration-300 ${
                          isSelected
                            ? "rotate-45 text-[#bae6fd]"
                            : "text-[#38bdf8]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#bae6fd]"
                        }`}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Live Insight Drawer when an Expertise is clicked */}
            <div
              className={`grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                selectedData
                  ? "mt-5 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                {selectedData && (
                  <div className="flex flex-col justify-between gap-3 rounded-2xl border border-[#bae6fd]/30 bg-[#0f1d3d]/35 px-4 py-3.5 sm:flex-row sm:items-center">
                    <p className="m-0 font-['Roboto_Slab',Georgia,serif] text-xs leading-relaxed text-[#f0f9ff] sm:text-sm">
                      <strong className="text-[#bae6fd]">
                        {selectedData.name}:
                      </strong>{" "}
                      {selectedData.detail}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveSkill(null)}
                      className="shrink-0 self-start rounded-full border border-[#bae6fd]/30 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-[#bae6fd] transition hover:bg-[#bae6fd]/15 sm:self-center"
                    >
                      Reset
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Card 02: Tools */}
          <section
            aria-labelledby="tools-title"
            className="group/tools relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-[#38bdf8]/40 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a] p-5 shadow-[0_24px_60px_rgba(0,0,0,.35)] transition-all duration-500 hover:border-[#bae6fd]/50 motion-safe:animate-[works-rise_1s_cubic-bezier(.16,1,.3,1)_220ms_both] sm:p-8"
          >
            {/* Decorative Concentric Arcs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-14 size-48 rounded-full border border-[#bae6fd]/20 transition-transform duration-700 group-hover/tools:scale-110"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-8 size-36 rounded-full border border-[#bae6fd]/10"
            />

            <div className="relative">
              <div className="mb-6 border-b border-[#bae6fd]/25 pb-5">
                <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[.28em] text-[#bae6fd]/80">
                  02 / The toolkit
                </p>
                <h3
                  id="tools-title"
                  className="m-0 text-2xl font-bold text-[#bae6fd] sm:text-3xl"
                >
                  Tools
                </h3>
                <p className="mb-0 mt-3 font-['Roboto_Slab',Georgia,serif] text-sm leading-relaxed text-white/85">
                  A considered set of tools for planning, creating, and sharing.
                </p>
              </div>

              {/* Interactive Tool Pills (Syncs with Selected Expertise) */}
              <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                {tools.map((tool, index) => {
                  const isHighlighted =
                    selectedData?.relatedTools.includes(tool);
                  const isDimmed = selectedData && !isHighlighted;

                  return (
                    <li
                      key={tool}
                      style={{ animationDelay: `${300 + index * 70}ms` }}
                      className="motion-safe:animate-[works-rise_.7s_cubic-bezier(.16,1,.3,1)_both]"
                    >
                      <span
                        className={`inline-flex min-h-11 items-center gap-2.5 rounded-full border px-4 py-2 font-sans text-sm transition-all duration-300 ${
                          isHighlighted
                            ? "-translate-y-1 border-[#bae6fd] bg-[#070b19]/85 font-semibold text-[#bae6fd] shadow-[0_8px_20px_rgba(186,230,253,0.3)]"
                            : isDimmed
                            ? "border-[#bae6fd]/15 bg-[#070b19]/20 text-white/40"
                            : "border-[#bae6fd]/35 bg-[#070b19]/35 text-[#f0f9ff] hover:-translate-y-1 hover:border-[#bae6fd]/85 hover:bg-[#070b19]/65 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full transition-transform duration-300 ${
                            isHighlighted
                              ? "scale-125 bg-[#bae6fd] shadow-[0_0_12px_#bae6fd]"
                              : "bg-[#bae6fd] shadow-[0_0_10px_rgba(186,230,253,.8)]"
                          }`}
                          aria-hidden="true"
                        />
                        {tool}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quill & Motto Footer */}
            <div className="relative mt-10 flex items-center gap-3.5 border-t border-[#bae6fd]/20 pt-5 text-[#bae6fd]/90">
              <svg
                viewBox="0 0 32 32"
                className="size-8 shrink-0 transition-transform duration-500 group-hover/tools:-rotate-6 group-hover/tools:scale-110"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M25 6C17 6 8 12 7 21c-.4 3 1 5 4 5 7 0 13-9 14-20Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 28C10 20 16 14 24 8M12 21l-1-5m6 2-.5-5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-['Bilbo_Swash_Caps',cursive] text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                Made for meaningful work.
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;