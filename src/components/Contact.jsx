import React, { useState } from "react";

// Add Bukola's real Gmail address here to enable the mailto form submission.
const contactEmail = "";

const PROJECT_TYPES = [
  "Product Documentation",
  "SaaS / AI Explainers",
  "Case Studies",
  "Long-Form Guides",
];

const Contact = () => {
  const [selectedTopic, setSelectedTopic] = useState("Product Documentation");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!contactEmail) return;
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (!contactEmail) return;

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `[${selectedTopic}] Technical writing inquiry from ${formData.get("name")}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nProject Focus: ${selectedTopic}\n\n${formData.get("message")}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-y-[10px] border-[#38bdf8] bg-[#07111f] px-5 py-20 text-[#e2e8f0] sm:px-8 sm:py-28"
    >
      {/* Multi-Layered Atmospheric Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_35%,rgba(56,189,248,.24),transparent_42%),radial-gradient(ellipse_at_15%_80%,rgba(15,29,61,.45),transparent_45%),linear-gradient(125deg,#03050c_0%,#0f1d3d_50%,#050814_100%)]" />

      {/* Counter-Rotating Astrolabe Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-24 -z-10 size-[420px] rounded-full border border-dashed border-[#38bdf8]/15 motion-safe:animate-[spin_65s_linear_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-10 -z-10 size-[310px] rounded-full border border-[#bae6fd]/10 motion-safe:animate-[spin_45s_linear_infinite_reverse]"
      />

      {/* Floating Blue Motes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute left-[14%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#bae6fd]/50 motion-safe:animate-[float-mote_7s_ease-in-out_infinite]" />
        <span className="absolute left-[42%] top-[16%] h-1 w-1 rounded-full bg-[#38bdf8]/60 motion-safe:animate-[float-mote_9s_ease-in-out_2s_infinite]" />
        <span className="absolute bottom-[18%] left-[22%] h-1.5 w-1.5 rounded-full bg-[#bae6fd]/40 motion-safe:animate-[float-mote_8s_ease-in-out_3.5s_infinite]" />
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_.95fr] lg:items-center lg:gap-16">
        {/* Left Editorial Column */}
        <div className="motion-safe:animate-[works-rise_.85s_cubic-bezier(.16,1,.3,1)_both]">
          {/* Availability Pill */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#38bdf8]/40 bg-[#070b19]/65 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bae6fd] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#bae6fd]" />
            </span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[.26em] text-[#bae6fd]">
              Open for SaaS &amp; AI Collaborations
            </span>
          </div>

          <div className="mb-5 flex items-center gap-4 text-[#38bdf8]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#38bdf8]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[.34em]">
              Technical writing · Content strategy
            </span>
          </div>

          <h2
            id="contact-title"
            className="m-0 max-w-[660px] text-[clamp(40px,5.8vw,70px)] font-black leading-[1.08] tracking-[-.035em] text-[#bae6fd] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
          >
            Let’s make complex ideas{" "}
            <span className="bg-gradient-to-r from-white via-[#f0f9ff] to-[#bae6fd] bg-clip-text italic text-transparent">
              clear.
            </span>
          </h2>

          <p className="mb-0 mt-6 max-w-[580px] font-['Roboto_Slab',Georgia,serif] text-base leading-[1.9] text-[#e2e8f0]/85 sm:text-lg">
            Have a product, platform, or AI idea that deserves clearer words? I
            turn complex technology into useful documentation, tutorials,
            product content, and strategy that people can understand and act on.
          </p>

          {/* Editorial Signature & Quote Callout */}
          <div className="mt-9 border-l-2 border-[#38bdf8]/60 pl-5">
            <p className="m-0 font-['Merriweather',Georgia,serif] text-sm italic text-[#bae6fd]/90">
              “Precision in the engineering, clarity in every sentence.”
            </p>
            <p className="mb-0 mt-2 font-['Bilbo_Swash_Caps',cursive] text-4xl text-[#bae6fd] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              Bukola Precious
            </p>
          </div>
        </div>

        {/* Right Sculpted Blue Contact Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#bae6fd]/50 bg-gradient-to-br from-[#7dd3fc] via-[#38bdf8] to-[#1e40af] p-6 text-[#0b1329] shadow-[0_28px_70px_rgba(0,0,0,.48)] motion-safe:animate-[works-rise_1s_cubic-bezier(.16,1,.3,1)_140ms_both] sm:p-9">
          {/* Inner Metallic Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-[24px] border border-[#0f1d3d]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-12 size-44 rounded-full border border-[#0f1d3d]/15"
          />

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-1.5 font-sans text-[10px] font-bold uppercase tracking-[.3em] text-[#0f1d3d]/80">
                  Get in touch
                </p>
                <h3 className="m-0 font-['Merriweather',Georgia,serif] text-2xl font-black text-[#0b1329] sm:text-3xl">
                  Find me on
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-full border border-[#0f1d3d]/20 bg-[#f0f9ff]/35 text-xs text-[#0f1d3d]"
              >
                ◆
              </span>
            </div>

            <p className="mb-6 mt-2 font-['Roboto_Slab',Georgia,serif] text-sm leading-relaxed text-[#0b1329]/85">
              Choose the channel that works best for you.
            </p>

            {/* Contact Details Table */}
            <div className="mb-6 grid gap-2.5 rounded-2xl border border-[#0f1d3d]/15 bg-[#f0f9ff]/30 p-4 font-['Roboto_Slab',Georgia,serif] text-sm backdrop-blur-xs">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0f1d3d]/75">
                  Gmail
                </span>
                {contactEmail ? (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 font-semibold text-[#0b1329] underline-offset-4 hover:underline"
                  >
                    <span>{contactEmail}</span>
                    <span className="rounded bg-[#0f1d3d] px-2 py-0.5 font-sans text-[10px] text-[#bae6fd]">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                ) : (
                  <span className="text-right font-medium text-[#0b1329]/80">
                    Gmail address to be added
                  </span>
                )}
              </div>

              <div className="h-px bg-[#0f1d3d]/10" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0f1d3d]/75">
                  Phone
                </span>
                <span className="text-right font-medium text-[#0b1329]/80">
                  Phone number to be added
                </span>
              </div>

              <div className="h-px bg-[#0f1d3d]/10" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0f1d3d]/75">
                  Location
                </span>
                <span className="text-right font-medium text-[#0b1329]/80">
                  Location to be added
                </span>
              </div>
            </div>

            {/* Social Channel Cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[64px] items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a] px-4 py-3 text-[#f0f9ff] no-underline shadow-[0_10px_25px_rgba(3,5,12,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(3,5,12,0.45)]"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[#bae6fd]/25 bg-white/10 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-[#bae6fd]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.19 0 22.22 0Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-sans text-sm font-bold text-[#bae6fd]">
                      LinkedIn
                    </span>
                    <span className="block text-[10px] text-white/70">
                      Project inquiries
                    </span>
                  </span>
                </span>
                <span
                  className="text-base text-[#bae6fd] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[64px] items-center justify-between gap-3 rounded-2xl border border-[#0f1d3d]/25 bg-[#f0f9ff]/65 px-4 py-3 text-[#0b1329] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#0f1d3d]/50 hover:bg-[#f0f9ff] hover:shadow-[0_12px_25px_rgba(3,5,12,0.18)]"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[#0f1d3d]/20 bg-[#38bdf8]/35 transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-[#0b1329]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.56h2.04L6.48 3.17H4.29l13.32 17.54Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-sans text-sm font-bold text-[#0b1329]">
                      X (Twitter)
                    </span>
                    <span className="block text-[10px] text-[#0b1329]/75">
                      Notes &amp; threads
                    </span>
                  </span>
                </span>
                <span
                  className="text-base text-[#0f1d3d] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>

            {/* Project Inquiry Form */}
            <form
              onSubmit={sendMessage}
              className="mt-6 border-t border-[#0f1d3d]/20 pt-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="m-0 font-sans text-[10px] font-bold uppercase tracking-[.24em] text-[#0b1329]">
                  Send a project inquiry
                </p>
                <span className="font-sans text-[10px] italic text-[#0b1329]/75">
                  Select a focus
                </span>
              </div>

              {/* Interactive Topic Selector Pills */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {PROJECT_TYPES.map((topic) => {
                  const active = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`cursor-pointer rounded-full border px-3 py-1 font-sans text-[10px] font-semibold tracking-wide transition-all duration-200 ${
                        active
                          ? "border-[#0b1329] bg-[#0f1d3d] text-[#bae6fd] shadow-sm"
                          : "border-[#0f1d3d]/20 bg-[#f0f9ff]/45 text-[#0b1329] hover:border-[#0f1d3d]/45 hover:bg-[#f0f9ff]/80"
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block font-sans text-[10px] font-bold uppercase tracking-[.12em] text-[#0b1329]/85">
                  Your name
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1.5 block h-11 w-full rounded-xl border border-[#0f1d3d]/20 bg-[#f0f9ff] px-3.5 font-['Roboto_Slab',Georgia,serif] text-sm normal-case tracking-normal text-[#070b19] shadow-inner outline-none transition placeholder:text-[#0b1329]/40 focus:border-[#0f1d3d] focus:ring-2 focus:ring-[#0f1d3d]/15"
                    placeholder="Name"
                  />
                </label>

                <label className="block font-sans text-[10px] font-bold uppercase tracking-[.12em] text-[#0b1329]/85">
                  Your email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 block h-11 w-full rounded-xl border border-[#0f1d3d]/20 bg-[#f0f9ff] px-3.5 font-['Roboto_Slab',Georgia,serif] text-sm normal-case tracking-normal text-[#070b19] shadow-inner outline-none transition placeholder:text-[#0b1329]/40 focus:border-[#0f1d3d] focus:ring-2 focus:ring-[#0f1d3d]/15"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-3 block font-sans text-[10px] font-bold uppercase tracking-[.12em] text-[#0b1329]/85">
                How can I help?
                <textarea
                  name="message"
                  required
                  rows="3"
                  className="mt-1.5 block w-full resize-y rounded-xl border border-[#0f1d3d]/20 bg-[#f0f9ff] px-3.5 py-2.5 font-['Roboto_Slab',Georgia,serif] text-sm normal-case leading-relaxed tracking-normal text-[#070b19] shadow-inner outline-none transition placeholder:text-[#0b1329]/40 focus:border-[#0f1d3d] focus:ring-2 focus:ring-[#0f1d3d]/15"
                  placeholder="Tell me about your SaaS or AI writing project…"
                />
              </label>

              <button
                type="submit"
                disabled={!contactEmail}
                className="group relative mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#0f1d3d] via-[#1d4ed8] to-[#1e3a8a] px-6 font-sans text-xs font-bold uppercase tracking-[.18em] text-[#bae6fd] shadow-[0_10px_25px_rgba(3,5,12,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(3,5,12,0.45)] disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#bae6fd]/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                />
                <span className="relative">Send inquiry</span>
                <span
                  aria-hidden="true"
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </button>

              {!contactEmail && (
                <p className="mb-0 mt-3 font-sans text-[10px] leading-relaxed text-[#0b1329]/75">
                  Add Bukola’s Gmail address to{" "}
                  <code className="rounded bg-[#0f1d3d]/10 px-1 py-0.5 font-mono text-[9px] text-[#0b1329]">
                    contactEmail
                  </code>{" "}
                  to enable sending. The form fields are ready.
                </p>
              )}
            </form>

            {/* Footer Signature Bar */}
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#0f1d3d]/20 pt-4 text-[#0b1329]/80">
              <div className="flex items-center gap-2.5">
                <span className="size-1.5 rotate-45 bg-[#0f1d3d]" />
                <span className="font-sans text-[9px] font-bold uppercase tracking-[.22em]">
                  Bukola Precious · Technical writer
                </span>
              </div>
              <span className="font-sans text-[9px] uppercase tracking-widest opacity-70">
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