import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { LINKS } from "@/data/site";
import { useThemeMode } from "@/lib/theme";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "evidence", label: "Evidence" },
  { id: "writing", label: "Writing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useThemeMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: highlight the section currently in the upper part of the viewport.
  useEffect(() => {
    if (!onHome || typeof IntersectionObserver === "undefined") return;
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`sticky top-0 z-40 bg-canvas transition-[border-color] duration-200 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="btn btn-primary absolute left-4 top-2 -translate-y-24 focus:translate-y-0"
      >
        Skip to content
      </a>
      <nav className="wrap flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Link to="/" className="inline-flex min-h-[44px] items-center text-[17px] font-bold tracking-[-0.01em] text-ink">
          Emmanuel Chiefson
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={href(s.id)}
              aria-current={active === s.id ? "true" : undefined}
              className={`relative inline-flex min-h-[44px] items-center px-3 text-[15px] transition-colors duration-150 ${
                active === s.id ? "text-ink" : "text-ink-2 hover:text-ink"
              }`}
            >
              {s.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-3 bottom-1.5 h-[2px] origin-left bg-accent transition-transform duration-300"
                style={{
                  transform: active === s.id ? "scaleX(1)" : "scaleX(0)",
                  transitionTimingFunction: "var(--ease-in-out)",
                }}
              />
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-2 hover:bg-sunken hover:text-ink"
            aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {mode === "dark" ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <a href={LINKS.cvRequest} className="btn btn-secondary ml-2">
            CV
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-2"
            aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {mode === "dark" ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas shadow-overlay md:hidden"
          style={{ animation: "sheet-in 300ms var(--ease-glide)" }}
        >
          <div className="wrap flex h-16 items-center justify-between">
            <span className="text-[17px] font-bold">Emmanuel Chiefson</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md"
              aria-label="Close menu"
              autoFocus
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="wrap flex flex-col pb-6">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={href(s.id)}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-line text-[20px] font-semibold"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a href={LINKS.cvRequest} className="btn btn-primary w-full">
                Request my CV
              </a>
            </li>
          </ul>
          <style>{`@keyframes sheet-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}`}</style>
        </div>
      )}
    </header>
  );
}
