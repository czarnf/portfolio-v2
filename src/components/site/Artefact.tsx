import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/data/site";

type Row = { label: string; from: string; to: string };

// Counts a percentage up from the "before" value to the "after" value (ease-out cubic, about 1.4s).
function CountUp({ from, to, run }: { from: number; to: number; run: boolean }) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!run) {
      setV(to);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(from + (to - from) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, to, run]);
  return <>{v}%</>;
}

// Before and after, with a bar that grows from the old score to the new one when scrolled into view.
function ScoreTable({ rows }: { rows: Row[] }) {
  const ref = useRef<HTMLTableElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <table ref={ref} className="w-full text-left">
      <thead className="bg-sunken">
        <tr>
          <th scope="col" className="label px-4 py-3 font-medium text-ink-3">Measure</th>
          <th scope="col" className="label hidden px-4 py-3 font-medium text-ink-3 sm:table-cell">
            <span className="sr-only">Change</span>
          </th>
          <th scope="col" className="label px-4 py-3 text-right font-medium text-ink-3">Before</th>
          <th scope="col" className="label px-4 py-3 text-right font-medium text-ink-3">After</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => {
          const a = parseInt(r.from, 10);
          const b = parseInt(r.to, 10);
          return (
            <tr key={r.label} className="border-t border-line">
              <th scope="row" className="px-4 py-3 text-[15px] font-normal text-ink-2">{r.label}</th>
              <td className="hidden w-[38%] px-4 py-3 sm:table-cell" aria-hidden="true">
                <div className="relative h-2 overflow-hidden rounded-sm bg-sunken">
                  <div
                    className="bar-fill absolute inset-y-0 left-0 w-full rounded-sm bg-accent"
                    style={{
                      transform: `scaleX(${(on ? b : a) / 100})`,
                      transitionDelay: `${i * 90}ms`,
                    }}
                  />
                  <div className="absolute inset-y-0 w-px bg-ink-3" style={{ left: `${a}%` }} title="Before" />
                </div>
              </td>
              <td className="mono px-4 py-3 text-right text-[15px] text-ink-3">{r.from}</td>
              <td className="mono px-4 py-3 text-right text-[15px] font-medium text-ink">
                <CountUp from={a} to={b} run={on} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// The one real artefact shown with each piece of work. No device mockups or fake browser chrome.
export function Artefact({ artefact }: { artefact: CaseStudy["artefact"] }) {
  return (
    <figure className="spot overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 group-hover:border-line-strong">
      {artefact.kind === "scores" && <ScoreTable rows={artefact.rows} />}

      {artefact.kind === "facts" && (
        <dl>
          {artefact.rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-[minmax(96px,35%)_1fr] gap-4 px-4 py-3 ${i ? "border-t border-line" : ""}`}>
              <dt className="label pt-[3px] text-ink-3">{r.label}</dt>
              <dd className="text-[15px] text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {artefact.kind === "code" && (
        <pre className="mono overflow-x-auto bg-sunken p-4 text-[13px] leading-[1.7] text-ink">
          {artefact.lines.map((l, i) => (
            <div key={i} className={l.startsWith("$") ? "text-ink-3" : undefined}>
              {l}
            </div>
          ))}
        </pre>
      )}

      {artefact.kind === "image" && <img src={artefact.src} alt={artefact.alt} className="block w-full" loading="lazy" />}

      <figcaption className="border-t border-line px-4 py-2.5 text-[13px] text-ink-3">{artefact.caption}</figcaption>
    </figure>
  );
}
