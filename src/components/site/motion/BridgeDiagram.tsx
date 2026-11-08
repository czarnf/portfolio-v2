import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Hero motion graphic: the same bridge, shown across four real engagements.
// Frontline needs flow through requirements and evidence into what gets built; evidence flows back.
// Scenes rotate every 5s (WCAG 2.2.2: pause, previous and next controls; pauses on hover and focus).
// Reduced motion: no auto-rotation, packets paused, no pointer drift. Labels come from the master CV.

type Scene = {
  setting: string;
  sector: string;
  country: string;
  dates: string;
  left: [string, string, string];
  right: [string, string, string];
};

const SCENES: Scene[] = [
  {
    setting: "NHS hospital",
    sector: "Clinical",
    country: "UK",
    dates: "2025 to now",
    left: ["Patient flow", "Ward audits", "Clinical systems"],
    right: ["Audit tooling", "Dashboards", "Workbooks"],
  },
  {
    setting: "Logistics start-up",
    sector: "Commercial",
    country: "Netherlands",
    dates: "2023 to 2026",
    left: ["Operations", "Business checks", "Customers"],
    right: ["Cloud platform", "AI model", "Registry link"],
  },
  {
    setting: "Small businesses",
    sector: "Commercial",
    country: "US",
    dates: "2016 to 2022",
    left: ["Shop owners", "Sales", "Customers"],
    right: ["Shopify", "WooCommerce", "Stripe payments"],
  },
  {
    setting: "Oil-servicing clients",
    sector: "Commercial",
    country: "Nigeria",
    dates: "2022",
    left: ["Client firms", "Their staff", "IT issues"],
    right: ["Service desk", "Triage", "Resolution"],
  },
];

const ROTATE_MS = 5000;
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

const describe = (s: Scene) =>
  `${s.setting}, ${s.sector.toLowerCase()}, ${s.country}, ${s.dates}: ${s.left.join(", ")}, through requirements and evidence, to ${s.right.join(", ")}.`;

export function BridgeDiagram() {
  const wrap = useRef<HTMLDivElement | null>(null);
  const svg = useRef<SVGSVGElement | null>(null);
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false); // hover or keyboard focus inside
  const [calm, setCalm] = useState(false);
  const [announce, setAnnounce] = useState(false); // only announce scenes the visitor chose

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setCalm(mq.matches);
      if (mq.matches) setPlaying(false);
      if (!svg.current) return;
      if (mq.matches) svg.current.pauseAnimations();
      else svg.current.unpauseAnimations();
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Auto-rotation: off when paused, held, reduced motion, or the tab is hidden.
  useEffect(() => {
    if (!playing || held || calm) return;
    const t = window.setInterval(() => {
      if (document.visibilityState === "visible") setScene((s) => (s + 1) % SCENES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(t);
  }, [playing, held, calm]);

  // Pointer drift for depth.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const el = wrap.current;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (calm || !fine.matches || !el) return;
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
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [calm]);

  const go = useCallback((d: number) => {
    setAnnounce(true);
    setScene((s) => (s + d + SCENES.length) % SCENES.length);
  }, []);

  const s = SCENES[scene];
  const box = { fill: "var(--surface)", stroke: "var(--border-strong)", strokeWidth: 1 };
  const text = { fill: "var(--text)", fontFamily: '"Public Sans", system-ui, sans-serif', fontSize: 14, fontWeight: 600 };
  const mono = {
    fill: "var(--text-3)",
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontSize: 11,
    letterSpacing: "0.08em",
  };
  const ctrl =
    "inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-2 transition-colors duration-150 hover:bg-sunken hover:text-ink";

  return (
    <div
      ref={wrap}
      className="bridge"
      role="group"
      aria-roledescription="carousel"
      aria-label="Where I have delivered"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(false);
      }}
    >
      {/* Scene caption */}
      {/* Two fixed rows so the diagram never jumps when a longer caption arrives. */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="mono text-[12px] text-ink-3 tabular">
            {String(scene + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")}
          </span>
          <span key={`cap${scene}`} className="scene-in label rounded-sm px-2 py-1" style={{ color: "var(--verified-fg)", background: "var(--verified-bg)" }}>
            {s.setting} · {s.country}
          </span>
        </div>
        <span key={`d${scene}`} className="scene-in mono text-[12px] text-ink-3">
          {s.sector} · {s.dates}
        </span>
      </div>

      <svg ref={svg} viewBox="0 20 460 340" className="mt-2 block h-auto w-full overflow-visible" aria-hidden="true">
        <defs>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" style={{ fill: "var(--border)" }} />
          </pattern>
        </defs>

        <g className="bridge-layer" style={{ ["--depth" as string]: "4px" }}>
          <rect x="-20" y="20" width="500" height="340" fill="url(#dots)" />
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

          {YS.map((y) => (
            <g key={`b${y}`}>
              <rect x="10" y={y - 20} width="140" height="40" rx="8" style={box} />
              <rect x="310" y={y - 20} width="140" height="40" rx="8" style={box} />
            </g>
          ))}
          <g key={`labels${scene}`} className="scene-in">
            {s.left.map((l, i) => (
              <text key={`l${i}`} x="24" y={YS[i] + 5} style={text}>{l}</text>
            ))}
            {s.right.map((l, i) => (
              <text key={`r${i}`} x="324" y={YS[i] + 5} style={text}>{l}</text>
            ))}
          </g>
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

      {/* Screen readers: the scene in words; announced only when the visitor changes it. */}
      <p className="sr-only" aria-live={announce ? "polite" : "off"}>
        Scene {scene + 1} of {SCENES.length}. {describe(s)}
      </p>

      {/* Controls */}
      <div className="mt-1 flex items-center justify-center gap-1">
        <button type="button" className={ctrl} onClick={() => go(-1)} aria-label="Previous scene">
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          className={ctrl}
          onClick={() => {
            setPlaying((p) => !p);
            setAnnounce(true);
          }}
          aria-label={playing && !calm ? "Pause the scenes" : "Play the scenes"}
          aria-pressed={!(playing && !calm)}
        >
          {playing && !calm ? <Pause size={18} strokeWidth={1.5} /> : <Play size={18} strokeWidth={1.5} />}
        </button>
        <div className="mx-1 flex items-center" role="group" aria-label="Choose a scene">
          {SCENES.map((sc, i) => (
            <button
              key={sc.country + i}
              type="button"
              onClick={() => {
                setAnnounce(true);
                setScene(i);
              }}
              aria-label={`${sc.setting}, ${sc.country}`}
              aria-current={i === scene ? "true" : undefined}
              className="inline-flex h-11 w-6 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className="block h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === scene ? 18 : 6,
                  background: i === scene ? "var(--accent)" : "var(--border-strong)",
                }}
              />
            </button>
          ))}
        </div>
        <button type="button" className={ctrl} onClick={() => go(1)} aria-label="Next scene">
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>
      <p className="mono mt-1 text-center text-[12px] text-ink-3">
        <span style={{ color: "var(--accent)" }}>●</span> need flows in &nbsp;&nbsp;
        <span style={{ color: "var(--accent)" }}>○</span> evidence flows back
      </p>
    </div>
  );
}
