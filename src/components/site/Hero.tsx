import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LINKS } from "@/data/site";
import { StatusChip } from "./StatusChip";
import { Reveal } from "./Reveal";
import { BridgeDiagram } from "./motion/BridgeDiagram";

const HEADLINE = "I translate between frontline operations and the teams who build the systems.";
// "frontline operations" and "build the systems." mirror the two sides of the bridge diagram.
const ACCENT_WORDS = new Set([3, 4, 9, 10, 11]);

const PROOF = [
  { status: "verified" as const, title: "Documentation compliance", detail: "Audit scores 35% to 56%", to: "/work/documentation-compliance" },
  { status: "built" as const, title: "Logistics platform rebuild", detail: "Live in production as of Aug 2026", to: "/work/zinter-platform" },
  { status: "built" as const, title: "margin-variance-kit", detail: "Open source, tested", to: "/work/margin-variance-kit" },
];

export function Hero() {
  return (
    <section className="wrap pb-16 pt-14 md:pb-24 md:pt-24" aria-labelledby="hero-title">
      <div className="grid items-center gap-12 lg:grid-cols-12">
      <div className="min-w-0 lg:col-span-7">
      <Reveal>
        <p className="label text-ink-3">Digital delivery · Business analysis · Bristol</p>
      </Reveal>
      <h1
        id="hero-title"
        aria-label={HEADLINE}
        className="mt-5 max-w-[17ch] text-[40px] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[52px] lg:text-[60px]"
      >
        {HEADLINE.split(" ").map((w, i) => (
          <span key={i} aria-hidden="true">
            <span
              className={`word ${ACCENT_WORDS.has(i) ? "accent-text" : ""}`}
              style={{ animationDelay: `${120 + i * 45}ms` }}
            >
              {w}
            </span>{" "}
          </span>
        ))}
      </h1>
      <Reveal delay={2}>
        <div className="mt-8 h-px w-full max-w-[680px] bg-line" aria-hidden="true" />
        <p className="prose-col mt-6 text-[17px] text-ink-2 md:text-[19px] md:leading-[1.55]">
          Delivery lead and business analyst with an MSc in IT. I have run a measurable improvement project inside a
          large NHS hospital, led a European logistics platform rebuild, and I build the data tools I recommend.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={LINKS.emailRole} className="btn btn-primary magnetic">
            Email me
          </a>
          <a href="#work" className="btn btn-secondary magnetic">
            See the work
          </a>
        </div>
      </Reveal>
      </div>
      <Reveal delay={2} className="hidden lg:col-span-5 lg:block">
        <BridgeDiagram />
      </Reveal>
      </div>

      <Reveal delay={3}>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3" aria-label="Proof">
          {PROOF.map((p) => (
            <li key={p.to} className="spot bg-surface">
              <Link to={p.to} className="group flex h-full flex-col gap-3 p-5 hover:bg-sunken">
                <StatusChip status={p.status} className="self-start" />
                <span className="font-semibold leading-snug text-ink">{p.title}</span>
                <span className="mono text-[13px] text-ink-3">{p.detail}</span>
                <span className="mt-auto inline-flex items-center gap-1 text-[14px] font-semibold text-accent">
                  Case study
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
