import React from "react";

const workGroups = [
  {
    id: "long-form",
    number: "01",
    title: "Long-form articles",
    description:
      "Deep dives into AI, SaaS, and the systems behind useful products.",
    works: [
      {
        platform: "LinkedIn",
        title:
          "Why SaaS Companies With the Highest NPS Scores Are Still Churning Mid-market Accounts",
        href: "https://www.linkedin.com/pulse/why-saas-companies-highest-nps-scores-still-churning-bukola-precious-w6smf",
      },
      {
        platform: "Medium",
        title:
          "Why Enterprises’ AI Adoption Stalls at the Pilot Stage and Never Becomes Infrastructure",
        href: "https://medium.com/@fatobabukolaprecious/why-enterprises-ai-adoption-stalls-at-the-pilot-stage-and-never-becomes-infrastructure-e056ab353de8",
      },
      {
        platform: "Medium",
        title:
          "AI Wrote Your Competitor’s Content Too. Here Is Why Theirs Is Ranking and Yours Is Not.",
        href: "https://medium.com/@fatobabukolaprecious/ai-wrote-your-competitors-content-too-here-is-why-theirs-is-ranking-and-yours-is-not-91232b2532d2",
      },
      {
        platform: "DEV Community",
        title:
          "Why Most Engineering Teams Cannot Tell When Their AI Model Has Started Degrading",
        href: "https://dev.to/bukolaprecious/why-most-engineering-teams-cannot-tell-when-their-ai-model-has-started-degrading-i76",
      },

      {
        platform: "Hashnode · Techiemuse",
        title: "The Retention Metric Most SaaS Companies Track Too Late",
        href: "https://techiemuse.hashnode.dev/the-retention-metric-most-saas-companies-track-too-late",
      },
    ],
  },
  {
    id: "product-reviews",
    number: "02",
    title: "Product reviews",
    description: "Clear-eyed comparisons to help teams choose the right tools.",
    works: [
      {
        platform: "DEV Community",
        title:
          "Pinecone vs Weaviate in 2026: Choosing the Right Vector Database for RAG Applications",
        href: "https://dev.to/bukolaprecious/pinecone-vs-weaviate-in-2026-choosing-the-right-vector-database-for-rag-applications-ig5",
      },
      {
        platform: "DEV Community",
        title: "Clerk vs Better Auth in 2026: Which Auth Solution Should Next",
        href: "https://dev.to/bukolaprecious/clerk-vs-better-auth-in-2026-which-auth-solution-should-next-dgi",
      },
    ],
  },

  {
    id: "product-led",
    number: "03",
    title: "Product-led content",
    description:
      "Content that helps people understand a product and move forward with it.",
    works: [
      {
        platform: "Hashnode · Techiemuse",
        title:
          "Your Help Docs Are Losing You Customers. Intercom’s Data Explains Why.",
        href: "https://techiemuse.hashnode.dev/your-help-docs-are-losing-you-customers-intercom-s-data-explains-why",
      },
      {
        platform: "LinkedIn",
        title:
          "The Step in Your SaaS Sales Cycle Where Deals Die That Your CRM Is Not Capturing",
        href: "https://www.linkedin.com/pulse/copy-step-your-saas-sales-cycle-where-deals-die-crm-bukola-precious-rgyff",
      },
    ],
  },  {
    id: "How-to guide",
    number: "04",
    title: "How-to guide",
    description: "Step-by-step instructions to help teams accomplish specific tasks.",
    works: [
      {
        platform: "Hashnode · Techiemuse",
        title:
          "How to Set Up Your First Notion Workspace as a Freelancer.",
        href: "https://hashnode.com/edit/cmwqwt9zv000008kz26lmhfek",
      },
    ],
  },
];

const WorkCard = ({ work, index }) => (
  <a
    href={work.href}
    target="_blank"
    rel="noreferrer"
    data-scroll-reveal
    className="group relative flex min-h-[206px] flex-col justify-between overflow-hidden rounded-2xl bg-[#070b19]/70 p-6 text-[#e2e8f0] no-underline shadow-[0_14px_36px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#0f1d3d] hover:shadow-[0_20px_45px_rgba(0,0,0,.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bae6fd] sm:p-7"
    style={{ "--scroll-delay": `${index * 70}ms` }}
  >
    <span
      className="pointer-events-none absolute -right-5 -top-10 font-['Merriweather',Georgia,serif] text-[150px] font-black leading-none text-[#38bdf8]/[.045] transition-transform duration-500 group-hover:scale-110"
      aria-hidden="true"
    >
      “
    </span>
    <span className="relative flex items-center justify-between gap-4">
      <span className="font-sans text-[10px] font-semibold uppercase tracking-[.22em] text-[#38bdf8]">
        {work.platform}
      </span>
      <span className="h-px flex-1 bg-[#38bdf8]/20" />
      <span className="font-sans text-[10px] uppercase tracking-[.15em] text-[#e2e8f0]/45">
        Read article
      </span>
    </span>
    <span className="relative mt-7 flex items-end justify-between gap-4">
      <span className="max-w-[520px] font-['Merriweather',Georgia,serif] text-lg font-bold leading-[1.55] text-[#f0f9ff] transition-colors group-hover:text-[#bae6fd] sm:text-xl">
        {work.title}
      </span>
      <span
        className="mb-1 grid size-9 shrink-0 place-items-center rounded-full bg-[#38bdf8]/10 text-base text-[#bae6fd] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#38bdf8]/15"
        aria-hidden="true"
      >
        ↗
      </span>
    </span>
  </a>
);

const Works = () => (
  <section
    id="works"
    aria-labelledby="works-title"
    className="relative isolate overflow-hidden bg-[#07111f] px-5 py-16 text-[#e2e8f0] sm:px-8 sm:py-20"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_48%_0%,rgba(56,189,248,.18),transparent_38%),linear-gradient(145deg,#070b19_0%,#0f1d3d_48%,#07111f_100%)]" />

    <div className="mx-auto max-w-[1160px]">
      <header data-scroll-reveal className="mb-14 max-w-[780px] sm:mb-20">
        <div className="mb-5 flex items-center gap-4 text-[#38bdf8]">
          <span className="h-px w-12 bg-current" />
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[.36em]">
            Selected writing · Bukola Precious
          </span>
        </div>
        <h2
          id="works-title"
          className="m-0 text-[clamp(44px,7vw,80px)] font-bold leading-[1.08] tracking-[-.05em] text-[#bae6fd]"
        >
          Clarity in <span className="text-white">practice.</span>
        </h2>
        <p className="mb-0 mt-5 max-w-2xl font-['Roboto_Slab',Georgia,serif] text-base leading-relaxed text-[#e2e8f0]/75 sm:text-lg">
          Writing that makes AI, SaaS, and product decisions easier to
          understand and easier to act on.
        </p>
      </header>

      <div className="space-y-16 sm:space-y-20">
        {workGroups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-title`}>
            <div
              data-scroll-reveal
              style={{ "--scroll-delay": `${Number(group.number) * 80}ms` }}
              className="mb-6 flex flex-col gap-3 pb-5 sm:mb-7 sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="flex items-start gap-4 sm:items-center sm:gap-5">
                <span className="font-['Bilbo_Swash_Caps',cursive] text-4xl leading-none text-[#38bdf8] sm:text-5xl">
                  {group.number}
                </span>
                <div>
                  <h3
                    id={`${group.id}-title`}
                    className="m-0 text-2xl font-bold text-[#f0f9ff] sm:text-3xl"
                  >
                    {group.title}
                  </h3>
                  <p className="mb-0 mt-2 font-['Roboto_Slab',Georgia,serif] text-sm leading-relaxed text-[#e2e8f0]/65">
                    {group.description}
                  </p>
                </div>
              </div>
              <span className="pl-14 font-sans text-[10px] uppercase tracking-[.22em] text-[#38bdf8] sm:pl-0">
                {String(group.works.length).padStart(2, "0")} articles
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {group.works.map((work, index) => (
                <WorkCard key={work.href} work={work} index={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default Works;
