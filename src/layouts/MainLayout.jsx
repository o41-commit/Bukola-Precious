import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadingStartedAt = Date.now();
    let hideTimer;
    let removeTimer;
    let finished = false;
    let fallbackTimer;

    const finishLoading = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(fallbackTimer);

      const remainingTime = Math.max(0, 900 - (Date.now() - loadingStartedAt));
      hideTimer = window.setTimeout(() => {
        setIsLoading(false);
        removeTimer = window.setTimeout(() => setShowLoader(false), 700);
      }, remainingTime);
    };

    fallbackTimer = window.setTimeout(finishLoading, 2500);
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-scroll-reveal]");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#0f1d3d] bg-[linear-gradient(90deg,rgba(3,5,12,.52),rgba(7,11,25,.34)_55%,rgba(3,5,12,.5)),radial-gradient(ellipse_at_52%_42%,rgba(29,78,216,.32),transparent_54%),linear-gradient(135deg,#07111f_0%,#0f1d3d_47%,#07111f_100%)] font-['Merriweather',Georgia,serif] text-white">
      {showLoader && (
        <div
          aria-hidden={!isLoading}
          aria-label={isLoading ? "Loading Bukola Precious portfolio" : undefined}
          role={isLoading ? "status" : undefined}
          className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#07111f] text-[#e2e8f0] transition-opacity duration-700 motion-reduce:transition-none ${
            isLoading ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(29,78,216,.3),transparent_48%),linear-gradient(135deg,#07111f_0%,#0f1d3d_52%,#07111f_100%)]" />
          <div className="relative flex flex-col items-center px-6 text-center">
            <div className="relative grid size-24 place-items-center">
              <span className="absolute inset-0 rounded-full border border-[#38bdf8]/20" />
              <span className="absolute inset-[7px] rounded-full border border-t-[#38bdf8] border-r-transparent border-b-transparent border-l-transparent motion-safe:animate-spin" />
              <span className="absolute inset-[15px] rounded-full border border-[#bae6fd]/15" />
              <span className="grid size-14 place-items-center rounded-[20px] bg-[#0f1d3d] font-sans text-lg font-semibold tracking-[-.08em] text-[#bae6fd] shadow-[0_0_34px_rgba(56,189,248,.18)]">
                BP
              </span>
            </div>
            <p className="mb-0 mt-7 font-sans text-[11px] font-semibold uppercase tracking-[.34em] text-[#f0f9ff]">
              Bukola Precious
            </p>
            <p className="mb-0 mt-2 font-sans text-[10px] uppercase tracking-[.24em] text-[#bae6fd]/60">
              Creative portfolio
            </p>
            <div className="mt-8 h-px w-40 overflow-hidden rounded-full bg-white/10">
              <span className="loader-progress block h-full w-[42%] rounded-full bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent" />
            </div>
            <span className="sr-only">Loading portfolio</span>
          </div>
        </div>
      )}
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
