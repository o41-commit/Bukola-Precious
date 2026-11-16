import React, { useState, useEffect } from "react";
import ProfileImage from "../assets/Profile.jpeg";
import ResumePdf from "../assets/Resume.pdf";

const TYPING_PHRASES = [
  "Technical Writing",
  "AI & Machine Learning",
  "SaaS Content Strategy",
  "Product Documentation",
  "Developer Education",
];

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth Typewriter Effect
  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 105;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      } else {
        setDisplayedText(
          currentPhrase.substring(
            0,
            displayedText.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <main
      id="home"
      className="relative grid min-h-[100svh] place-items-center overflow-hidden border-b-[3px] border-[#38bdf8] px-5 pb-20 pt-[110px] text-center shadow-[0_3px_18px_rgba(56,189,248,0.4)] sm:px-6 md:pb-24 md:pt-[135px]"
    >
      {/* Background Image with Cinematic Midnight Blue Gradient Overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={ProfileImage}
          alt="Profile of Bukola Precious"
          className="h-full w-full object-cover object-center scale-105 motion-safe:animate-[subtle-zoom_20s_ease-in-out_infinite_alternate]"
        />
        {/* Multi-layered deep midnight blue & black vignette for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329]/90 via-[#070b19]/85 to-[#03050c]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,11,25,0.85)_100%)]" />
      </div>

      {/* Floating Sapphire Glow & Starlight Motes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1d4ed8]/25 blur-[130px] motion-safe:animate-[ambient-pulse_8s_ease-in-out_infinite] sm:h-[680px] sm:w-[680px]" />
        
        {/* Floating Luminous Blue/Silver Motes */}
        <span className="absolute left-[18%] top-[28%] h-1 w-1 rounded-full bg-[#bae6fd]/70 motion-safe:animate-[float-mote_7s_ease-in-out_infinite]" />
        <span className="absolute right-[22%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#38bdf8]/60 motion-safe:animate-[float-mote_9s_ease-in-out_1.5s_infinite]" />
        <span className="absolute bottom-[26%] left-[28%] h-1 w-1 rounded-full bg-[#bae6fd]/60 motion-safe:animate-[float-mote_8s_ease-in-out_3s_infinite]" />
      </div>

      <div className="relative w-full max-w-[1120px]">
        {/* Main Headline with Metallic Blue/Silver Shimmer & Typing Effect */}
        <h1 className="m-0 text-[clamp(36px,5.2vw,74px)] font-light leading-[1.28] text-[#bae6fd] max-md:text-[clamp(32px,9vw,48px)] max-md:leading-[1.2]">
          <span className="block whitespace-nowrap bg-gradient-to-r from-[#e0f2fe] via-[#bae6fd] to-[#38bdf8] bg-clip-text font-black italic text-transparent drop-shadow-[0_4px_24px_rgba(56,189,248,0.22)] motion-safe:animate-[hero-reveal_0.85s_cubic-bezier(0.22,1,0.36,1)_120ms_both] max-md:whitespace-normal">
            Bukola Precious:
          </span>

          <span className="mt-1 block text-[0.68em] font-light tracking-wide text-[#e2e8f0]/90 motion-safe:animate-[hero-reveal_0.85s_cubic-bezier(0.22,1,0.36,1)_240ms_both]">
            The Architect of
          </span>

          <span className="mt-1 inline-flex min-h-[1.3em] items-center justify-center whitespace-nowrap font-bold italic text-[#bae6fd] drop-shadow-[0_0_25px_rgba(56,189,248,0.35)] motion-safe:animate-[hero-reveal_0.85s_cubic-bezier(0.22,1,0.36,1)_360ms_both] max-md:whitespace-normal max-md:text-[clamp(1.25rem,6.4vw,2.4rem)]">
            <span>{displayedText}</span>
            <span
              aria-hidden="true"
              className="ml-1.5 inline-block h-[0.95em] w-[3px] rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] motion-safe:animate-[cursor-blink_0.9s_steps(2)_infinite]"
            />
          </span>
        </h1>

        {/* Ornamental Divider */}
        <div
          aria-hidden="true"
          className="mx-auto mt-6 flex w-48 items-center justify-center gap-3 opacity-80 motion-safe:animate-[hero-reveal_0.85s_cubic-bezier(0.22,1,0.36,1)_460ms_both]"
        >
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#38bdf8]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#38bdf8]/70" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#38bdf8]" />
        </div>

        {/* Poetic Subheadline */}
        <p className="mx-auto mt-6 max-w-[820px] text-balance text-base leading-[1.95] text-[#e2e8f0]/90 motion-safe:animate-[hero-reveal_0.9s_cubic-bezier(0.22,1,0.36,1)_540ms_both] max-md:mt-5 max-md:text-sm max-md:leading-[1.8]">
          Venture into the depths of the human soul, where shadows whisper and
          secrets dwell.
          <br className="max-md:hidden" /> Through gothic fiction, dark fantasy,
          and twisted mystery, I craft stories that unravel the unseen.
        </p>

        {/* Primary actions and supporting note */}
        <div className="relative mx-auto mt-10 flex w-full max-w-[460px] flex-col items-center gap-4 motion-safe:animate-[hero-reveal_0.9s_cubic-bezier(0.22,1,0.36,1)_680ms_both] max-md:mt-8">
          <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href="#works"
              className="group relative inline-flex min-h-11 min-w-0 flex-1 basis-[154px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-[#1d4ed8] to-[#1e3a8a] px-3 text-[11px] font-bold uppercase tracking-[0.04em] text-[#f0f9ff] no-underline shadow-[0_10px_35px_-5px_rgba(29,78,216,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-5px_rgba(56,189,248,0.35)] active:translate-y-0 sm:min-h-[62px] sm:flex-none sm:basis-auto sm:gap-3 sm:px-12 sm:text-base sm:tracking-[0.14em]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#bae6fd]/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative whitespace-nowrap">Explore My Works</span>
              <span
                aria-hidden="true"
                className="relative text-[#bae6fd] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href={ResumePdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View CV in a new tab"
              className="inline-flex min-h-11 min-w-0 flex-1 basis-[92px] items-center justify-center gap-1.5 rounded-full bg-[#0f1d3d]/90 px-3 font-sans text-[11px] font-semibold tracking-[0.04em] text-[#e0f2fe] no-underline shadow-[0_8px_24px_rgba(3,5,12,.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#132a52] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bae6fd] sm:min-h-[62px] sm:flex-none sm:basis-auto sm:gap-2 sm:px-5 sm:text-xs sm:tracking-[.08em]"
            >
              View CV
              <span aria-hidden="true" className="text-sm text-[#38bdf8]">
                ↗
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <svg
              className="ml-3 h-[46px] w-[58px] scale-y-[-1] text-[#bae6fd]/90 sm:ml-5 sm:h-[50px] sm:w-[62px]"
              viewBox="0 0 62 50"
              aria-hidden="true"
            >
              <path
                d="M58 7C47 28 31 39 8 40m0 0 13-13M8 40l15 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="[stroke-dasharray:110] [stroke-dashoffset:110] motion-safe:animate-[draw-arrow_1.1s_cubic-bezier(0.22,1,0.36,1)_1s_forwards]"
              />
            </svg>
            <span className="ml-1.5 w-28 rotate-[4deg] text-center font-['Merienda_One',cursive] text-[11px] leading-[1.45] text-[#e2e8f0]/90 sm:ml-2 sm:w-32 sm:text-xs">
              Dare to discover what lies beyond the veil.
            </span>
          </div>
        </div>

        {/* Calligraphic Author Signature */}
        <p className="pointer-events-none select-none font-['Bilbo_Swash_Caps',cursive] text-[44px] leading-none text-[#bae6fd] drop-shadow-[0_2px_14px_rgba(56,189,248,0.3)] motion-safe:animate-[signature-fade_1.2s_ease-out_950ms_both] max-md:mt-6 max-md:text-right sm:text-[52px] lg:absolute lg:left-[calc(50%+275px)] lg:top-[calc(100%+2px)] lg:m-0 lg:whitespace-nowrap lg:text-[58px]">
          Bukola Precious
        </p>
      </div>
    </main>
  );
};

export default Hero;