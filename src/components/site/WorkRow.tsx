import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/site";
import { StatusChip } from "./StatusChip";
import { Artefact } from "./Artefact";
import { Reveal } from "./Reveal";

// Alternating showcase row: meta column (5/12) and narrative column (7/12).
export function WorkRow({ cs, index }: { cs: CaseStudy; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal as="article" className="border-t border-line py-12 md:py-16" >
      <Link to={`/work/${cs.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:gap-12" aria-label={`${cs.title}: read the case study`}>
        <div className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
          <p className="label text-ink-3">
            <span className="tabular">{String(index + 1).padStart(2, "0")}</span> · {cs.kicker}
          </p>
          <h3 className="mt-3 text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-ink md:text-[26px]">
            {cs.title}
          </h3>
          <dl className="mt-5 space-y-1.5 text-[15px]">
            <div className="flex flex-wrap gap-x-2">
              <dt className="sr-only">Role</dt>
              <dd className="font-semibold text-ink">{cs.role}</dd>
            </div>
            <div>
              <dt className="sr-only">Context</dt>
              <dd className="text-ink-2">{cs.context}</dd>
            </div>
            <div>
              <dt className="sr-only">Dates</dt>
              <dd className="mono text-[13px] text-ink-3">{cs.dates}</dd>
            </div>
          </dl>
          <div className="mt-5">
            <StatusChip status={cs.status} />
          </div>
          <p className="mono mt-5 text-[13px] leading-relaxed text-ink-3">{cs.stack.join(" / ")}</p>
        </div>

        <div className={`min-w-0 lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
          <div className="prose-col space-y-4 text-ink-2">
            <p>
              <span className="font-semibold text-ink">Problem. </span>
              {cs.summary.problem}
            </p>
            <p>
              <span className="font-semibold text-ink">What I did. </span>
              {cs.summary.did}
            </p>
            <p>
              <span className="font-semibold text-ink">Result. </span>
              {cs.summary.result}
            </p>
          </div>
          <div className="mt-6">
            <Artefact artefact={cs.artefact} />
          </div>
          <span className="mt-5 inline-flex items-center gap-1 font-semibold text-accent underline-offset-[3px] group-hover:underline">
            Read the case study
            <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
