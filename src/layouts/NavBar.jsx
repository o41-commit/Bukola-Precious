import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#skills" },
  { label: "Trust & Awards", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", symbol: "in", href: "https://www.linkedin.com/in/bukola-precious-a93740331" },
  { label: "X (Twitter)", symbol: "𝕏", href: "https://x.com/precious_b73231" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const closeMenu = () => setMenuOpen(false);

  // Track scroll depth & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 140;
      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveHash(link.href);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveHash("#home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop & lock body scroll when open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = menuOpen ? "hidden" : "";
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:animate-[nav-slide-down_0.7s_cubic-bezier(0.22,1,0.36,1)_both] ${
        scrolled || menuOpen
          ? "bg-[#070b19]/95 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          : "bg-[#07111f]/75 backdrop-blur-md"
      }`}
    >
      {/* Top ice-blue hairline accent */}
      <div
        aria-hidden="true"
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#bae6fd]/50 to-transparent"
      />

      <div
        className={`relative mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:px-8 ${
          scrolled
            ? "min-h-[68px] md:min-h-[80px]"
            : "min-h-[76px] md:min-h-[104px]"
        }`}
      >
        {/* Fluid-sized Brand Signature */}
        <a
          className="group relative inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[clamp(1.1rem,3.5vw,1.5rem)] font-bold tracking-wide text-[#bae6fd] no-underline transition-transform duration-300 hover:scale-[1.02] sm:gap-2.5"
          href="#home"
          onClick={closeMenu}
        >
          <span className="h-1.5 w-1.5 rotate-45 bg-[#38bdf8]/70 transition-transform duration-500 group-hover:rotate-[225deg] group-hover:bg-[#bae6fd] sm:h-2 sm:w-2" />
          <span className="bg-gradient-to-r from-[#bae6fd] via-[#e0f2fe] to-[#60a5fa] bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-700 group-hover:bg-right">
            Bukola Precious
          </span>
        </a>

        {/* Desktop & Tablet Navigation (Prevents wrapping across md -> lg -> xl) */}
        <nav
          className="hidden md:flex md:items-center md:justify-center md:gap-4 lg:gap-7 xl:gap-10"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link, index) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                style={{ animationDelay: `${120 + index * 60}ms` }}
                className={`group relative whitespace-nowrap py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] no-underline transition-colors duration-300 motion-safe:animate-[nav-item-fade_0.6s_ease-out_both] lg:text-xs lg:tracking-[0.14em] xl:text-[13px] ${
                  isActive
                    ? "text-[#bae6fd]"
                    : "text-white/85 hover:text-[#bae6fd]"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-1/2 h-[1.5px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#38bdf8] via-[#bae6fd] to-[#38bdf8] transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Social Badges + Mobile Menu Toggle */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          {/* Hidden on ultra-small phones (< 380px) to avoid crowding; shown inside drawer instead */}
          <div
            className="hidden items-center gap-1.5 min-[380px]:flex sm:gap-2"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                style={{ animationDelay: `${380 + index * 60}ms` }}
                className="grid size-8 place-items-center rounded-full bg-white/[0.03] font-sans text-xs font-bold text-white/90 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bae6fd]/15 hover:text-[#bae6fd] hover:shadow-[0_4px_15px_rgba(186,230,253,0.2)] motion-safe:animate-[nav-item-fade_0.6s_ease-out_both] lg:size-9 lg:text-sm"
              >
                {social.symbol}
              </a>
            ))}
          </div>

          {/* 44px Accessible Touch Target Hamburger Button */}
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-white/[0.03] text-[#bae6fd] transition-all duration-300 hover:bg-[#bae6fd]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bae6fd] active:scale-95 md:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="flex w-4 flex-col gap-[4.5px]" aria-hidden="true">
              <span
                className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer (Landscape-safe with dvh max-height) */}
      <div
        id="primary-navigation"
        className={`grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="min-h-0 max-h-[calc(100dvh-76px)] overflow-y-auto bg-[#070b19]/98 px-5 backdrop-blur-xl sm:px-6"
        >
          <div className="flex flex-col gap-1.5 py-5">
            {NAV_LINKS.map((link, index) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveHash(link.href);
                    closeMenu();
                  }}
                  style={{
                    transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
                  }}
                  className={`flex min-h-[46px] items-center justify-between rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] no-underline transition-all duration-300 ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-3 opacity-0"
                  } ${
                    isActive
                      ? "bg-[#bae6fd]/12 text-[#bae6fd]"
                      : "text-white/85 hover:bg-white/5 hover:pl-5 hover:text-[#bae6fd]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`text-xs transition-opacity duration-300 ${
                      isActive ? "text-[#bae6fd] opacity-100" : "opacity-0"
                    }`}
                  >
                    ◆
                  </span>
                </a>
              );
            })}

            {/* Social Links Footer inside Mobile Drawer (always accessible on tiny screens) */}
            <div className="mt-3 flex items-center justify-between px-4 pt-4">
              <span className="text-xs uppercase tracking-[0.14em] text-white/50">
                Connect
              </span>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    onClick={closeMenu}
                    className="grid size-10 place-items-center rounded-full bg-white/[0.04] font-sans text-sm font-bold text-[#bae6fd] no-underline transition-colors hover:bg-[#bae6fd]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bae6fd]"
                  >
                    {social.symbol}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;