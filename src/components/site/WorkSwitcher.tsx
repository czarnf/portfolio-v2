import { useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { CaseStudy } from "@/data/site";
import { StatusChip } from "./StatusChip";
import { Artefact } from "./Artefact";
import { Reveal } from "./Reveal";

// Selected work, one piece at a time so the proof stays visible without a long scroll.
// Desktop: list on the left, full panel on the right (ARIA tabs, arrow keys move between items).
// Phones: native collapsible list, first item open.

function Panel({ cs }: { cs: CaseStudy }) {
  return (
    <div>
      <p className="label text-ink-3">{cs.kicker}</p>
      <h3 className="mt-2 text-[24px] font-bold leading-[1.25] tracking-[-0.01em] md:text-[28px]">{cs.title}</h3>
      <p className="mt-3 text-[15px] text-ink-2">
        <span className="font-semibold text-ink">{cs.role}</span> · {cs.context} ·{" "}
        <span className="mono text-[13px] text-ink-3">{cs.dates}</span>
      </p>
      <p className="prose-col mt-5 text-[17px] leading-[1.6] text-ink-2">
        <span className="font-semibold text-ink">Result. </span>
        {cs.summary.result}
      </p>
      <div className="mt-6">
        <Artefact artefact={cs.artefact} />
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="mono text-[13px] leading-relaxed text-ink-3">{cs.stack.join(" / ")}</p>
        <Link to={`/work/${cs.slug}`} className="btn btn-primary magnetic">
          Read the case study
          <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function WorkSwitcher({ items }: { items: CaseStudy[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const cs = items[active];

  return (
    <>
      {/* Desktop: list and panel */}
      <Reveal className="hidden gap-10 border-t border-line pt-10 lg:grid lg:grid-cols-12">
        <div role="tablist" aria-label="Selected work" aria-orientation="vertical" className="lg:col-span-4">
          {items.map((it, i) => {
            const on = i === active;
            return (
              <button
                key={it.slug}
                ref={(el) => (tabs.current[i] = el)}
                role="tab"
                id={`work-tab-${it.slug}`}
                aria-selected={on}
                aria-controls="work-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`spot group relative flex w-full items-start gap-4 rounded-md px-4 py-4 text-left transition-colors duration-150 ${
                  on ? "bg-surface shadow-[inset_0_0_0_1px_var(--border)]" : "hover:bg-sunken"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-accent transition-transform duration-300"
                  style={{ transform: on ? "scaleY(1)" : "scaleY(0)", transitionTimingFunction: "var(--ease-glide)" }}
                />
                <span className="mono pt-[3px] text-[13px] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">
                  <span className={`block font-semibold leading-snug ${on ? "text-ink" : "text-ink-2 group-hover:text-ink"}`}>
                    {it.title}
                  </span>
                  <span className="mt-2 block">
                    <StatusChip status={it.status} />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <div
          id="work-panel"
          role="tabpanel"
          aria-labelledby={`work-tab-${cs.slug}`}
          tabIndex={0}
          className="min-h-[560px] lg:col-span-8"
        >
          <div key={cs.slug} className="work-panel-in">
            <Panel cs={cs} />
          </div>
        </div>
      </Reveal>

      {/* Phones and tablets: collapsible list */}
      <div className="border-t border-line lg:hidden">
        {items.map((it, i) => (
          <details key={it.slug} open={i === 0} className="work-acc group border-b border-line">
            <summary className="flex min-h-[64px] cursor-pointer list-none items-start gap-3 py-5">
              <span className="mono pt-[3px] text-[13px] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className="block font-semibold leading-snug text-ink">{it.title}</span>
                <span className="mt-2 block">
                  <StatusChip status={it.status} />
                </span>
              </span>
              <ChevronDown
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-ink-3 transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <div className="pb-8">
              <Panel cs={it} />
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
