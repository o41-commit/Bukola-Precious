import { useState } from "react";

const contactEmail = "fatobabukolaprecious@gmail.com";
const emailSubject = encodeURIComponent(
  "Technical Writing Project Inquiry"
);
const emailBody = encodeURIComponent(
  "Hi Bukola,\n\nI came across your portfolio and would love to discuss a SaaS / AI technical writing project."
);

const whatsappNumber = "2348106614258";
const whatsappPrefill = encodeURIComponent(
  "Hi Bukola, I came across your portfolio and would love to discuss a SaaS / AI technical writing project."
);

const PROJECT_TYPES = [
  {
    label: "Product Documentation",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: "SaaS / AI Explainers",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    label: "Case Studies",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Long-Form Guides",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [selectedTopic, setSelectedTopic] = useState("Product Documentation");
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleCopyEmail = () => {
    if (!contactEmail) return;
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("project_focus", selectedTopic);
    formData.set(
      "_subject",
      `[${selectedTopic}] Technical writing inquiry from ${formData.get("name")}`
    );

    setSubmitStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mdegwenn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSelectedTopic("Product Documentation");
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-[#07111f] px-5 py-20 text-[#e2e8f0] sm:px-8 sm:py-28"
    >
      {/* Multi-Layered Atmospheric Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_35%,rgba(56,189,248,.24),transparent_45%),radial-gradient(ellipse_at_15%_80%,rgba(29,78,216,.28),transparent_48%),linear-gradient(125deg,#03050c_0%,#0f1d3d_50%,#050814_100%)]" />

      {/* Floating Blue Motes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute left-[14%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#bae6fd]/50 motion-safe:animate-[float-mote_7s_ease-in-out_infinite]" />
        <span className="absolute left-[42%] top-[16%] h-1 w-1 rounded-full bg-[#38bdf8]/60 motion-safe:animate-[float-mote_9s_ease-in-out_2s_infinite]" />
        <span className="absolute bottom-[18%] left-[22%] h-1.5 w-1.5 rounded-full bg-[#bae6fd]/40 motion-safe:animate-[float-mote_8s_ease-in-out_3.5s_infinite]" />
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        {/* Left Editorial Column */}
        <div data-scroll-reveal="left">


          <div className="mb-5 flex items-center gap-3.5 text-[#38bdf8]">
            <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
            </svg>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[.34em]">
              Technical writing · Content strategy
            </span>
          </div>

          <h2
            id="contact-title"
            className="m-0 max-w-[660px] text-[clamp(40px,5.8vw,70px)] font-black leading-[1.08] tracking-[-.035em] text-[#bae6fd] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
          >
            Let’s make complex ideas{" "}
            <span className="bg-gradient-to-r from-white via-[#f0f9ff] to-[#38bdf8] bg-clip-text italic text-transparent">
              clear.
            </span>
          </h2>

          <p className="mb-0 mt-6 max-w-[580px] font-['Roboto_Slab',Georgia,serif] text-base leading-[1.9] text-[#e2e8f0]/85 sm:text-lg">
            Have a product, platform, or AI idea that deserves clearer words? I
            turn complex technology into useful documentation, tutorials,
            product content, and strategy that people can understand and act on.
          </p>

          {/* Editorial Signature & Quote Callout */}
          <div className="mt-9">
            <p className="m-0 font-['Merriweather',Georgia,serif] text-sm italic text-[#bae6fd]/90">
              “Precision in the engineering, clarity in every sentence.”
            </p>
            <p className="mb-0 mt-2 font-['Bilbo_Swash_Caps',cursive] text-4xl text-[#bae6fd] drop-shadow-[0_2px_10px_rgba(56,189,248,0.25)]">
              Bukola Precious
            </p>
          </div>
        </div>

        {/* Right Sculpted Blue Contact Card */}
        <div
          data-scroll-reveal="right"
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#132a52] via-[#0f1d3d] to-[#070b19] p-6 text-[#e2e8f0] shadow-[0_28px_70px_rgba(0,0,0,.55)] sm:p-9"
        >
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-1.5 font-sans text-[10px] font-bold uppercase tracking-[.3em] text-[#38bdf8]">
                  Get in touch
                </p>
                <h3 className="m-0 font-['Merriweather',Georgia,serif] text-2xl font-black text-[#f0f9ff] sm:text-3xl">
                  Find me on
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="grid size-11 place-items-center rounded-full bg-[#38bdf8]/10 text-[#bae6fd] shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
            </div>

            <p className="mb-6 mt-2 font-['Roboto_Slab',Georgia,serif] text-sm leading-relaxed text-[#e2e8f0]/75">
              Choose the channel that works best for you.
            </p>

            {/* 2x2 Social & Direct Channel Cards (Email, LinkedIn, WhatsApp, X) */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Email Card with Quick Copy */}
              <div className="group flex min-h-[68px] items-center justify-between gap-2.5 rounded-2xl bg-[#070b19]/70 px-3.5 py-3 text-[#f0f9ff] shadow-[0_10px_25px_rgba(3,5,12,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#11264a] hover:shadow-[0_16px_30px_rgba(56,189,248,0.18)]">
                <a
                  href={`mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`}
                  aria-label="Send an email to Bukola Precious"
                  className="flex min-w-0 flex-1 items-center gap-3 no-underline"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#38bdf8]/15 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-[#bae6fd]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-sans text-xs font-bold text-[#bae6fd] sm:text-sm">
                      Email
                    </span>
                    <span className="block truncate text-[10px] text-white/65">
                      Direct message
                    </span>
                  </span>
                </a>

                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-[#38bdf8]/10 px-2.5 py-1 font-sans text-[10px] font-semibold text-[#bae6fd] transition-all hover:bg-[#38bdf8]/25"
                  >
                    {copied ? (
                      <>
                        <svg viewBox="0 0 24 24" className="size-3 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`}
                    aria-label="Open mail client"
                    className="p-1 text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bukola-precious-a93740331"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[68px] items-center justify-between gap-2.5 rounded-2xl bg-[#070b19]/70 px-3.5 py-3 text-[#f0f9ff] no-underline shadow-[0_10px_25px_rgba(3,5,12,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#11264a] hover:shadow-[0_16px_30px_rgba(56,189,248,0.18)]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#38bdf8]/15 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-[#bae6fd]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.19 0 22.22 0Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-sans text-xs font-bold text-[#bae6fd] sm:text-sm">
                      LinkedIn
                    </span>
                    <span className="block truncate text-[10px] text-white/65">
                      Project inquiries
                    </span>
                  </span>
                </span>
                <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>

              {/* WhatsApp (Number Hidden + Pre-filled Message) */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappPrefill}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Message Bukola Precious on WhatsApp"
                className="group flex min-h-[68px] items-center justify-between gap-2.5 rounded-2xl bg-[#070b19]/70 px-3.5 py-3 text-[#f0f9ff] no-underline shadow-[0_10px_25px_rgba(3,5,12,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#11264a] hover:shadow-[0_16px_30px_rgba(56,189,248,0.18)]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#38bdf8]/15 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-[#bae6fd]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.03 2a9.93 9.93 0 0 0-8.44 15.16L2 22l4.98-1.56A9.93 9.93 0 1 0 12.03 2Zm0 18.18a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-2.96.93.96-2.88-.2-.31a8.24 8.24 0 1 1 6.7 3.59Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.16 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-sans text-xs font-bold text-[#bae6fd] sm:text-sm">
                      WhatsApp
                    </span>
                    <span className="block truncate text-[10px] text-white/65">
                      Quick chat
                    </span>
                  </span>
                </span>
                <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/precious_b73231"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[68px] items-center justify-between gap-2.5 rounded-2xl bg-[#070b19]/70 px-3.5 py-3 text-[#f0f9ff] no-underline shadow-[0_10px_25px_rgba(3,5,12,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#11264a] hover:shadow-[0_16px_30px_rgba(56,189,248,0.18)]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#38bdf8]/15 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-[#bae6fd]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.56h2.04L6.48 3.17H4.29l13.32 17.54Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-sans text-xs font-bold text-[#bae6fd] sm:text-sm">
                      X (Twitter)
                    </span>
                    <span className="block truncate text-[10px] text-white/65">
                      Notes &amp; threads
                    </span>
                  </span>
                </span>
                <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>

            {/* Project Inquiry Form */}
            <form
              onSubmit={sendMessage}
              action="https://formspree.io/f/mdegwenn"
              method="POST"
              className="mt-6 pt-6"
            >
              <input type="hidden" name="project_focus" value={selectedTopic} />
              <input
                type="hidden"
                name="_subject"
                value={`[${selectedTopic}] Technical writing inquiry`}
              />

              <div className="mb-3 flex items-center justify-between">
                <p className="m-0 inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[.24em] text-[#bae6fd]">
                  <svg viewBox="0 0 24 24" className="size-3.5 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Send a project inquiry
                </p>
                <span className="font-sans text-[10px] italic text-white/60">
                  Select a focus
                </span>
              </div>

              {/* Interactive Topic Selector Pills with Icons */}
              <div className="mb-4 flex flex-wrap gap-2">
                {PROJECT_TYPES.map((topic) => {
                  const active = selectedTopic === topic.label;
                  return (
                    <button
                      key={topic.label}
                      type="button"
                      onClick={() => setSelectedTopic(topic.label)}
                      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[10px] font-semibold tracking-wide transition-all duration-200 ${
                        active
                          ? "bg-[#38bdf8]/20 text-[#f0f9ff] shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                          : "bg-white/[0.04] text-[#e2e8f0]/75 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className={active ? "text-[#38bdf8]" : "text-[#bae6fd]/60"}>
                        {topic.icon}
                      </span>
                      <span>{topic.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block font-sans text-[10px] font-bold uppercase tracking-[.12em] text-[#bae6fd]/80">
                  Your name
                  <div className="relative mt-1.5">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#38bdf8]/70">
                      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="block h-11 w-full rounded-xl bg-[#070b19]/75 pl-10 pr-3.5 font-['Roboto_Slab',Georgia,serif] text-sm normal-case tracking-normal text-[#f0f9ff] outline-none transition placeholder:text-white/35 focus:ring-2 focus:ring-[#38bdf8]/35"
                      placeholder="Name"
                    />
                  </div>
                </label>

                <label className="block font-sans text-[10px] font-bold uppercase tracking-[.12em] text-[#bae6fd]/80">
                  Your email
                  <div className="relative mt-1.5">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#38bdf8]/70">
                      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block h-11 w-full rounded-xl bg-[#070b19]/75 pl-10 pr-3.5 font-['Roboto_Slab',Georgia,serif] text-sm normal-case tracking-normal text-[#f0f9ff] outline-none transition placeholder:text-white/35 focus:ring-2 focus:ring-[#38bdf8]/35"
                      placeholder="you@example.com"
                    />
                  </div>
                </label>
              </div>

              <label className="mt-3 block font-sans text-[10px] font-bold uppercase tracking-[.12em] text-[#bae6fd]/80">
                How can I help?
                <textarea
                  name="message"
                  required
                  rows="3"
                  className="mt-1.5 block w-full resize-y rounded-xl bg-[#070b19]/75 px-3.5 py-2.5 font-['Roboto_Slab',Georgia,serif] text-sm normal-case leading-relaxed tracking-normal text-[#f0f9ff] outline-none transition placeholder:text-white/35 focus:ring-2 focus:ring-[#38bdf8]/35"
                  placeholder="Tell me about your SaaS or AI writing project…"
                />
              </label>

              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="group relative mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#1e3a8a] px-6 font-sans text-xs font-bold uppercase tracking-[.18em] text-[#f0f9ff] shadow-[0_10px_25px_rgba(29,78,216,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(56,189,248,0.35)] disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#bae6fd]/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                />
                <span className="relative">
                  {submitStatus === "sending" ? "Sending..." : "Send inquiry"}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="relative size-4 text-[#bae6fd] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`mt-3 min-h-5 font-sans text-xs ${
                  submitStatus === "success"
                    ? "text-[#86efac]"
                    : submitStatus === "error"
                      ? "text-[#fca5a5]"
                      : "text-transparent"
                }`}
              >
                {submitStatus === "success"
                  ? "Thanks! Your inquiry has been sent."
                  : submitStatus === "error"
                    ? "Sorry, something went wrong. Please try again."
                    : "Submission status"}
              </p>
            </form>

            {/* Footer Signature Bar */}
            <div className="mt-6 flex items-center justify-between gap-3 pt-4 text-[#e2e8f0]/70">
              <div className="flex items-center gap-2.5">
                <span className="size-1.5 rotate-45 bg-[#38bdf8]" />
                <span className="font-sans text-[9px] font-bold uppercase tracking-[.22em]">
                  Bukola Precious · Technical writer
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-sans text-[9px] uppercase tracking-widest text-[#bae6fd]/80">
                <svg viewBox="0 0 24 24" className="size-3 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                SaaS &amp; AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;