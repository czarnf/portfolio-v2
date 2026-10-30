import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CASE_STUDIES } from "@/data/site";
import { Hero } from "@/components/site/Hero";
import { WorkRow } from "@/components/site/WorkRow";
import { SectionHead } from "@/components/site/SectionHead";
import { About, Contact, EvidenceRegister, ProcessStrip, WritingList } from "@/components/site/Sections";

export default function Index() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Emmanuel Chiefson: digital delivery and business analysis";
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) requestAnimationFrame(() => el.scrollIntoView());
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <section id="work" className="wrap scroll-mt-20 pt-8 md:pt-16" aria-labelledby="work-title">
        <SectionHead id="work" eyebrow="Selected work" title="Five pieces of work, with the evidence">
          <p>Each one opens into a full case study: context, constraints, what I did, the result and how you can check it.</p>
        </SectionHead>
        <div className="border-b border-line">
          {CASE_STUDIES.map((cs, i) => (
            <WorkRow key={cs.slug} cs={cs} index={i} />
          ))}
        </div>
      </section>
      <ProcessStrip />
      <EvidenceRegister />
      <WritingList />
      <About />
      <Contact />
    </>
  );
}
