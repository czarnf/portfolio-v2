import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { EVIDENCE, LINKS, PROCESS, WRITING, type Status } from "@/data/site";
import { StatusChip } from "./StatusChip";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

function ProofLink({ label, href }: { label: string; href?: string }) {
  if (!href) return <span className="text-ink-3">{label}</span>;
  if (href.startsWith("/"))
    return (
      <Link to={href} className="link inline-flex min-h-[44px] items-center">
        {label}
      </Link>
    );
  return (
    <a href={href} className="link inline-flex min-h-[44px] items-center gap-0.5" target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function ProcessStrip() {
  return (
    <section className="wrap py-16 md:py-24" aria-labelledby="how-title">
      <SectionHead id="how" eyebrow="How I work" title="Four steps, in this order" />
      <Reveal className="relative h-px bg-line" aria-hidden="true">
        <span className="draw-line absolute inset-0 block bg-accent" />
      </Reveal>
      <ol className="grid gap-x-10 md:grid-cols-4">
        {PROCESS.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i} className="border-b border-line py-6 md:border-b-0 md:pr-2">
            <span className="mono text-[13px] text-accent">{p.n}</span>
            <h3 className="mt-2 text-[20px] font-semibold leading-[1.3]">{p.title}</h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-ink-2">{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

const FILTERS: { key: "all" | Status; label: string }[] = [
  { key: "all", label: "All" },
  { key: "verified", label: "Verified" },
  { key: "built", label: "Built" },
  { key: "progress", label: "In progress" },
];

export function EvidenceRegister() {
  const [filter, setFilter] = useState<"all" | Status>("all");
  const rows = useMemo(() => (filter === "all" ? EVIDENCE : EVIDENCE.filter((e) => e.status === filter)), [filter]);

  return (
    <section id="evidence" className="wrap scroll-mt-20 py-16" aria-labelledby="evidence-title">
      <SectionHead id="evidence" eyebrow="Evidence register" title="Every claim, with its status">
        <p>
          <strong className="font-semibold text-ink">Verified</strong> means measured or independently attested.{" "}
          <strong className="font-semibold text-ink">Built</strong> means a working artefact exists.{" "}
          <strong className="font-semibold text-ink">In progress</strong> means under way. Nothing here is claimed as
          held unless it is.
        </p>
      </SectionHead>

      <div role="group" aria-label="Filter by status" className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const on = filter === f.key;
          const count = f.key === "all" ? EVIDENCE.length : EVIDENCE.filter((e) => e.status === f.key).length;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.key)}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-md border px-4 text-[15px] transition-colors duration-150 ${
                on ? "border-ink bg-ink text-canvas" : "border-line-strong text-ink hover:bg-sunken"
              }`}
            >
              {f.label}
              <span className={`mono text-[12px] ${on ? "opacity-80" : "text-ink-3"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-surface">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Evidence register: credentials and projects with their status and proof</caption>
          <thead className="hidden bg-sunken md:table-header-group">
            <tr>
              <th scope="col" className="label px-4 py-3 font-medium text-ink-3">Item</th>
              <th scope="col" className="label px-4 py-3 font-medium text-ink-3">Type</th>
              <th scope="col" className="label px-4 py-3 font-medium text-ink-3">Status</th>
              <th scope="col" className="label px-4 py-3 font-medium text-ink-3">Date</th>
              <th scope="col" className="label px-4 py-3 font-medium text-ink-3">Proof</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-ink-3">
                  Nothing in this category yet.
                </td>
              </tr>
            )}
            {rows.map((e, i) => (
              <tr
                key={e.item}
                className={`grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 px-4 py-4 md:table-row md:p-0 ${
                  i ? "border-t border-line" : ""
                }`}
              >
                <th scope="row" className="col-span-2 font-normal md:px-4 md:py-3.5 md:align-top">
                  <span className="block font-semibold text-ink">{e.item}</span>
                  {e.detail && <span className="mt-0.5 block text-[14px] leading-[1.5] text-ink-2">{e.detail}</span>}
                </th>
                <td className="label col-start-1 row-start-2 self-center text-ink-3 md:px-4 md:py-3.5 md:align-top md:pt-[17px]">{e.type}</td>
                <td className="col-start-1 row-start-3 md:px-4 md:py-3.5 md:align-top">
                  <StatusChip status={e.status} />
                </td>
                <td className="mono col-start-2 row-start-2 self-center text-right text-[13px] text-ink-3 md:px-4 md:py-3.5 md:pt-[17px] md:text-left md:align-top">
                  {e.date}
                </td>
                <td className="col-start-2 row-start-3 self-center text-right text-[14px] md:px-4 md:py-3.5 md:pt-[4px] md:text-left md:align-top">
                  {e.proof ? <ProofLink {...e.proof} /> : <span className="text-ink-3">On request</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function WritingList() {
  return (
    <section id="writing" className="wrap scroll-mt-20 py-16" aria-labelledby="writing-title">
      <SectionHead id="writing" eyebrow="Writing" title="Notes on data, delivery and the NHS">
        <p>
          I write on{" "}
          <a href={LINKS.substack} className="link" target="_blank" rel="noopener noreferrer">
            Substack
          </a>{" "}
          about the gap between how systems are designed and how work actually happens.
        </p>
      </SectionHead>
      <ul className="border-t border-line">
        {WRITING.map((a, i) => (
          <Reveal as="li" key={a.href} delay={i} className="border-b border-line">
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 py-6 md:grid-cols-12 md:gap-8"
            >
              <span className="mono text-[13px] text-ink-3 md:col-span-2 md:pt-1">{a.date}</span>
              <span className="md:col-span-10">
                <span className="flex items-start gap-1 text-[19px] font-semibold leading-[1.35] text-ink group-hover:text-accent md:text-[20px]">
                  {a.title}
                  <ArrowUpRight size={18} strokeWidth={1.5} className="mt-1 shrink-0" aria-hidden="true" />
                </span>
                <span className="prose-col mt-1.5 block text-[15px] text-ink-2">{a.takeaway}</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="wrap scroll-mt-20 py-16 md:py-24" aria-labelledby="about-title">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead id="about" eyebrow="About" title="Two kinds of depth, one bridge" />
        </div>
        <Reveal className="prose-col space-y-5 text-ink-2 lg:col-span-8">
          <p>
            I am pi-shaped: deep in how frontline operations really run, and deep enough in data and software to build
            the tools myself. The useful part is the bridge between the two.
          </p>
          <p>
            I started in architectural technology, then spent seven years building websites and online shops for small
            businesses in the US while I studied. I have worked in health and care since 2017, and today I coordinate
            patient flow in a large acute NHS hospital, where I am also a Digital Link for colleagues who struggle with
            clinical systems.
          </p>
          <p>
            Alongside that I led delivery of a logistics platform rebuild for a Dutch start-up through Bayside Consult,
            and I founded{" "}
            <a href={LINKS.talos} className="link" target="_blank" rel="noopener noreferrer">
              Talos Intelligent Systems
            </a>
            , a data and software venture for batch manufacturers.
          </p>
          <p>
            I hold an MSc in Information Technology (Merit) from UWE Bristol and a BSc in Project Management, and I hold
            NHS England digital clinical safety training (DCB 0129 and DCB 0160). I am looking for digital delivery and
            business analysis roles in health, government and SaaS.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-sunken py-20 md:py-24" aria-labelledby="contact-title">
      <div className="wrap">
        <Reveal>
          <p className="label text-ink-3">Contact</p>
          <h2 id="contact-title" className="mt-3 max-w-[20ch] text-[30px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[44px]">
            Hiring for delivery or analysis? Let's talk.
          </h2>
          <p className="prose-col mt-5 text-ink-2">Email is the quickest way to reach me.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${LINKS.email}`} className="btn btn-primary magnetic">
              {LINKS.email}
            </a>
            <a href={LINKS.cvRequest} className="btn btn-secondary magnetic">
              Request my CV
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <li>
              <a href={LINKS.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={LINKS.github} className="link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={LINKS.substack} className="link" target="_blank" rel="noopener noreferrer">
                Substack
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
