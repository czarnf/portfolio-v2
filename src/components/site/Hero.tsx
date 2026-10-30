import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LINKS } from "@/data/site";
import { StatusChip } from "./StatusChip";
import { Reveal } from "./Reveal";

const PROOF = [
  { status: "verified" as const, title: "Documentation compliance", detail: "Audit scores 35% to 56%", to: "/work/documentation-compliance" },
  { status: "built" as const, title: "Logistics platform rebuild", detail: "Live in production since Aug 2026", to: "/work/zinter-platform" },
  { status: "built" as const, title: "margin-variance-kit", detail: "Open source, tested", to: "/work/margin-variance-kit" },
];

export function Hero() {
  return (
    <section className="wrap pb-16 pt-14 md:pb-24 md:pt-28" aria-labelledby="hero-title">
      <Reveal>
        <p className="label text-ink-3">Digital delivery · Business analysis · Bristol</p>
      </Reveal>
      <Reveal delay={1}>
        <h1
          id="hero-title"
          className="mt-5 max-w-[17ch] text-[40px] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[52px] lg:-mr-[8.33%] lg:text-[64px]"
        >
          I translate between frontline operations and the teams who build the systems.
        </h1>
      </Reveal>
      <Reveal delay={2}>
        <div className="mt-8 h-px w-full max-w-[680px] bg-line" aria-hidden="true" />
        <p className="prose-col mt-6 text-[17px] text-ink-2 md:text-[19px] md:leading-[1.55]">
          Delivery lead and business analyst with an MSc in IT. I have run a measurable improvement project inside a
          large NHS hospital, led a European logistics platform rebuild, and I build the data tools I recommend.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">
            See the work
          </a>
          <a href={LINKS.cvRequest} className="btn btn-secondary">
            Request my CV
          </a>
        </div>
      </Reveal>

      <Reveal delay={3}>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3" aria-label="Proof">
          {PROOF.map((p) => (
            <li key={p.to} className="bg-surface">
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
