import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/site";
import { StatusChip } from "@/components/site/StatusChip";
import { Artefact } from "@/components/site/Artefact";
import NotFound from "./NotFound";

const ORDER = [
  { key: "context", label: "Context" },
  { key: "problem", label: "Problem" },
  { key: "constraints", label: "Constraints" },
  { key: "did", label: "What I did" },
  { key: "result", label: "Result" },
  { key: "evidence", label: "Evidence" },
  { key: "next", label: "What I would do next" },
] as const;

export default function CaseStudy() {
  const { slug } = useParams();
  const idx = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const cs = CASE_STUDIES[idx];
  const [active, setActive] = useState<string>("context");

  useEffect(() => {
    if (cs) {
      document.title = `${cs.title} | Emmanuel Chiefson`;
      window.scrollTo(0, 0);
    }
  }, [cs]);

  useEffect(() => {
    if (!cs || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ORDER.forEach((o) => {
      const el = document.getElementById(o.key);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [cs]);

  if (!cs) return <NotFound />;
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <article className="wrap pb-20 pt-10 md:pt-16">
      <Link to="/#work" className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] text-ink-2 hover:text-ink">
        <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
        All work
      </Link>

      <header className="mt-6 max-w-[820px]">
        <p className="label text-ink-3">{cs.kicker}</p>
        <h1 className="mt-3 text-[34px] font-bold leading-[1.1] tracking-[-0.025em] md:text-[48px]">{cs.title}</h1>
        <dl className="mt-6 grid gap-x-8 gap-y-3 border-y border-line py-5 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="label text-ink-3">Role</dt>
            <dd className="mt-1 text-ink">{cs.role}</dd>
          </div>
          <div>
            <dt className="label text-ink-3">Context</dt>
            <dd className="mt-1 text-ink">{cs.context}</dd>
          </div>
          <div>
            <dt className="label text-ink-3">Dates</dt>
            <dd className="mono mt-1 text-[14px] text-ink">{cs.dates}</dd>
          </div>
          <div>
            <dt className="label text-ink-3">Status</dt>
            <dd className="mt-1">
              <StatusChip status={cs.status} />
            </dd>
          </div>
        </dl>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
          <ul className="sticky top-24 space-y-1 border-l border-line">
            {ORDER.map((o) => (
              <li key={o.key}>
                <a
                  href={`#${o.key}`}
                  aria-current={active === o.key ? "true" : undefined}
                  className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] transition-colors duration-150 ${
                    active === o.key ? "border-accent text-ink" : "border-transparent text-ink-3 hover:text-ink"
                  }`}
                >
                  {o.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 max-w-reading lg:col-span-9">
          {ORDER.map((o) => {
            const items = cs.sections[o.key];
            return (
              <section key={o.key} id={o.key} className="scroll-mt-24 border-b border-line py-8 first:pt-0">
                <h2 className="text-[22px] font-bold tracking-[-0.01em]">{o.label}</h2>
                {o.key === "evidence" ? (
                  <ul className="mt-4 space-y-2">
                    {cs.sections.evidence.map((p) => (
                      <li key={p.label} className="flex gap-2 text-ink-2">
                        <span aria-hidden="true" className="text-ink-3">
                          ·
                        </span>
                        {p.href ? (
                          <a
                            href={p.href}
                            className="link inline-flex items-center gap-0.5"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {p.label}
                            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : (
                          <span>{p.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : o.key === "did" || o.key === "constraints" ? (
                  <ul className="mt-4 space-y-3 text-ink-2">
                    {(items as string[]).map((t) => (
                      <li key={t} className="grid grid-cols-[16px_1fr] gap-2">
                        <span aria-hidden="true" className="mono pt-[2px] text-[13px] text-accent">
                          {o.key === "did" ? "→" : "·"}
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-4 space-y-4 text-ink-2">
                    {(items as string[]).map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                )}
                {o.key === "result" && (
                  <div className="mt-6">
                    <Artefact artefact={cs.artefact} />
                  </div>
                )}
              </section>
            );
          })}

          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="label text-ink-3">Next case study</p>
              <p className="mt-1 font-semibold">{next.title}</p>
            </div>
            <Link to={`/work/${next.slug}`} className="btn btn-secondary shrink-0">
              Read it
              <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
