import { useEffect, useRef } from "react";

// Hero motion graphic: frontline needs flow through requirements and evidence into what gets built,
// and evidence flows back. Packets travel along the paths (SVG animateMotion); the layers drift
// with the pointer for depth. Reduced motion: animations paused, no drift.

const LEFT = ["Patient flow", "Ward audits", "Clinical systems"];
const RIGHT = ["Data model", "Dashboards", "Software"];
const YS = [110, 200, 290];

const pathL = (y: number) => `M150 ${y} C 172 ${y}, 162 200, 176 200`;
const pathR = (y: number) => `M284 200 C 300 200, 292 ${y}, 310 ${y}`;
const route = (from: number, to: number) => `${pathL(YS[from])} L284 200 C 300 200, 292 ${YS[to]}, 310 ${YS[to]}`;
const back = (from: number, to: number) =>
  `M310 ${YS[from]} C 292 ${YS[from]}, 300 200, 284 200 L176 200 C 162 200, 172 ${YS[to]}, 150 ${YS[to]}`;

const FLOWS = [
  { d: route(0, 1), dur: 3.2, begin: 0 },
  { d: route(1, 2), dur: 3.6, begin: 0.9 },
  { d: route(2, 0), dur: 3.4, begin: 1.8 },
  { d: route(0, 2), dur: 4.0, begin: 2.6 },
];
const RETURNS = [
  { d: back(1, 0), dur: 4.2, begin: 1.2 },
  { d: back(2, 1), dur: 4.6, begin: 3.0 },
];

export function BridgeDiagram() {
  const wrap = useRef<HTMLDivElement | null>(null);
  const svg = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => {
      if (!svg.current) return;
      if (calm.matches) svg.current.pauseAnimations();
      else svg.current.unpauseAnimations();
    };
    apply();
    calm.addEventListener("change", apply);

    const el = wrap.current;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (calm.matches || !fine.matches || !el) return;
      const r = el.getBoundingClientRect();
      const px = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
      const py = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", px.toFixed(3));
        el.style.setProperty("--py", py.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      calm.removeEventListener("change", apply);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const box = { fill: "var(--surface)", stroke: "var(--border-strong)", strokeWidth: 1 };
  const text = { fill: "var(--text)", fontFamily: '"Public Sans", system-ui, sans-serif', fontSize: 14, fontWeight: 600 };
  const mono = {
    fill: "var(--text-3)",
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontSize: 11,
    letterSpacing: "0.08em",
  };

  return (
    <div ref={wrap} className="bridge" aria-hidden="true">
      <svg ref={svg} viewBox="0 0 460 400" className="block h-auto w-full overflow-visible">
        <defs>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" style={{ fill: "var(--border)" }} />
          </pattern>
        </defs>

        <g className="bridge-layer" style={{ ["--depth" as string]: "4px" }}>
          <rect x="-20" y="20" width="500" height="370" fill="url(#dots)" />
        </g>

        <g className="bridge-layer" style={{ ["--depth" as string]: "8px" }}>
          <text x="10" y="70" style={mono}>FRONTLINE</text>
          <text x="450" y="70" textAnchor="end" style={mono}>BUILD</text>

          {YS.map((y) => (
            <g key={`p${y}`}>
              <path d={pathL(y)} fill="none" style={{ stroke: "var(--border-strong)" }} strokeWidth="1" />
              <path d={pathR(y)} fill="none" style={{ stroke: "var(--border-strong)" }} strokeWidth="1" />
            </g>
          ))}
          <line x1="176" y1="200" x2="284" y2="200" style={{ stroke: "var(--border-strong)" }} strokeWidth="1" />

          {LEFT.map((l, i) => (
            <g key={l}>
              <rect x="10" y={YS[i] - 20} width="140" height="40" rx="8" style={box} />
              <text x="24" y={YS[i] + 5} style={text}>{l}</text>
            </g>
          ))}
          {RIGHT.map((l, i) => (
            <g key={l}>
              <rect x="310" y={YS[i] - 20} width="140" height="40" rx="8" style={box} />
              <text x="324" y={YS[i] + 5} style={text}>{l}</text>
            </g>
          ))}

        </g>

        <g className="bridge-layer" style={{ ["--depth" as string]: "14px" }}>
          {FLOWS.map((f, i) => (
            <circle key={`f${i}`} r="4" style={{ fill: "var(--accent)" }} opacity="0">
              <animateMotion dur={`${f.dur}s`} begin={`${f.begin}s`} repeatCount="indefinite" path={f.d} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.55 1" />
              <animate attributeName="opacity" dur={`${f.dur}s`} begin={`${f.begin}s`} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.08;0.9;1" />
            </circle>
          ))}
          {RETURNS.map((f, i) => (
            <circle key={`r${i}`} r="3.5" style={{ fill: "var(--surface)", stroke: "var(--accent)" }} strokeWidth="1.5" opacity="0">
              <animateMotion dur={`${f.dur}s`} begin={`${f.begin}s`} repeatCount="indefinite" path={f.d} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.55 1" />
              <animate attributeName="opacity" dur={`${f.dur}s`} begin={`${f.begin}s`} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.08;0.9;1" />
            </circle>
          ))}
        </g>

        {/* Bridge node sits above the packets so they pass behind it. */}
        <g className="bridge-layer" style={{ ["--depth" as string]: "8px" }}>
          <rect x="176" y="152" width="108" height="96" rx="12" style={{ fill: "var(--verified-bg)", stroke: "var(--accent)" }} strokeWidth="1.5" />
          <text x="230" y="186" textAnchor="middle" style={{ ...mono, fill: "var(--accent)", fontSize: 10 }}>BRIDGE</text>
          <text x="230" y="208" textAnchor="middle" style={{ ...text, fontSize: 13 }}>Requirements</text>
          <text x="230" y="226" textAnchor="middle" style={{ ...text, fontSize: 13 }}>Evidence</text>
        </g>
      </svg>
      <p className="mono mt-3 text-center text-[12px] text-ink-3">
        <span style={{ color: "var(--accent)" }}>●</span> need flows in &nbsp;&nbsp;
        <span style={{ color: "var(--accent)" }}>○</span> evidence flows back
      </p>
    </div>
  );
}
