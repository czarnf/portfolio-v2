import { useState } from "react";
import Navbar from "../components/Navbar";

type DeliverableStatus = "COMPLETE" | "IN PROGRESS" | "PENDING";

interface Deliverable {
  week: string;
  status: DeliverableStatus;
  title: string;
  techniques: string;
  summary: string;
  tags: string[];
  pdfUrl?: string;
}

interface Sprint {
  sprint: string;
  title: string;
  subtitle: string;
  deliverables: Deliverable[];
}

const statusStyles: Record<DeliverableStatus, string> = {
  COMPLETE: "bg-proof-complete/20 text-proof-complete border border-proof-complete/40",
  "IN PROGRESS": "bg-accent/20 text-accent border border-accent/40",
  PENDING: "bg-proof-pending/30 text-proof-muted border border-proof-pending/60",
};

const sprints: Sprint[] = [
  {
    sprint: "SPRINT 1",
    title: "HealthTech Case Study: MediCore AI",
    subtitle: "AI-Assisted Clinical Triage Platform",
    deliverables: [
      {
        week: "Week 1",
        status: "COMPLETE",
        title: "The BA Role & Professional Self-Assessment",
        techniques: "Techniques: T-Shaped Professional Model · 6 BCS BA Principles",
        summary:
          "Competency audit mapping π-shaped professional profile against BCS BA framework. Applied across a healthtech regulatory context requiring clinical, technical, and commercial stakeholder alignment.",
        tags: ["HealthTech", "Strategy", "Self-Assessment"],
        pdfUrl: "/docs/week1-ba-role-self-assessment.pdf",
      },
      {
        week: "Week 2",
        status: "IN PROGRESS",
        title: "Strategic Analysis",
        techniques: "Techniques: PESTLE · VMOST · SWOT",
        summary:
          "Strategic environment analysis for MediCore AI's market entry — examining regulatory, technological, and competitive forces shaping the AI-assisted triage product landscape.",
        tags: ["HealthTech", "Strategy", "PESTLE", "VMOST"],
        pdfUrl: "/docs/week2-strategic-analysis.pdf",
      },
    ],
  },
  {
    sprint: "SPRINT 2",
    title: "FinTech Case Study: NovaPay",
    subtitle: "SME Onboarding Optimisation",
    deliverables: [
      {
        week: "Week 3",
        status: "PENDING",
        title: "Stakeholder Engagement Plan",
        techniques: "Techniques: Stakeholder Wheel · Power/Interest Grid · RACI Chart",
        summary: "Coming soon.",
        tags: ["FinTech", "Stakeholders", "RACI"],
      },
      {
        week: "Week 4",
        status: "PENDING",
        title: "Process & Gap Analysis",
        techniques: "Techniques: As-Is Swimlane Diagram · POPIT Gap Analysis",
        summary: "Coming soon.",
        tags: ["FinTech", "Process Modelling", "POPIT"],
      },
    ],
  },
  {
    sprint: "SPRINT 3",
    title: "Professional Services Case Study: Meridian Consulting",
    subtitle: "Client Reporting Modernisation",
    deliverables: [
      {
        week: "Week 5",
        status: "PENDING",
        title: "Executive Business Case",
        techniques: "Techniques: CARDI Log · Investment Appraisal · Payback/NPV",
        summary: "Coming soon.",
        tags: ["Prof. Services", "Business Case", "CARDI"],
      },
      {
        week: "Week 6",
        status: "PENDING",
        title: "Requirements Engineering",
        techniques: "Techniques: Requirements Catalogue · User Stories · MoSCoW Prioritisation",
        summary: "Coming soon.",
        tags: ["Prof. Services", "Requirements", "MoSCoW"],
      },
    ],
  },
];

const BodyOfProof = () => {
  const [openPdf, setOpenPdf] = useState<string | null>(null);

  const togglePdf = (key: string) => {
    setOpenPdf((prev) => (prev === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-proof-bg text-foreground">
      <header role="banner">
        <Navbar />
      </header>

      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8" role="main">
        <div className="max-w-6xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-accent font-semibold">
              BCS Foundation Certificate in Business Analysis
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground">Body of Proof</h1>
            <p className="text-proof-muted max-w-4xl leading-relaxed">
              A structured portfolio of business analysis deliverables across three industry sectors —
              demonstrating applied competency in strategy, stakeholder engagement, process modelling,
              and requirements engineering.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "3 Industry Sectors",
                "6 Deliverables",
                "In Progress — 2026",
              ].map((stat) => (
                <span
                  key={stat}
                  className="px-4 py-2 rounded-full bg-proof-pill border border-proof-card-border text-proof-muted text-sm font-medium"
                >
                  {stat}
                </span>
              ))}
            </div>
          </section>

          {sprints.map((sprint) => (
            <section key={sprint.sprint} className="space-y-5">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.16em] text-accent font-semibold">
                  {sprint.sprint}
                </p>
                <h2 className="text-2xl md:text-3xl text-foreground">{sprint.title}</h2>
                <p className="text-proof-muted">{sprint.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {sprint.deliverables.map((deliverable) => {
                  const cardKey = `${sprint.sprint}-${deliverable.week}`;
                  const isOpen = openPdf === cardKey;

                  return (
                    <article
                      key={cardKey}
                      className="rounded-2xl border border-proof-card-border bg-proof-card p-6 space-y-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-proof-muted">{deliverable.week}</span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[deliverable.status]}`}
                        >
                          {deliverable.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl text-foreground">{deliverable.title}</h3>
                        <p className="text-sm text-accent mt-1">{deliverable.techniques}</p>
                      </div>

                      <p className="text-proof-muted leading-relaxed">{deliverable.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {deliverable.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-proof-pill border border-proof-card-border text-proof-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {deliverable.pdfUrl && (
                        <div className="pt-2 space-y-3">
                          <button
                            onClick={() => togglePdf(cardKey)}
                            className="px-4 py-2 rounded-lg text-sm font-medium border border-accent/40 text-accent hover:bg-accent/10 transition-colors duration-200"
                          >
                            {isOpen ? "Close Document" : "View Document"}
                          </button>

                          {isOpen && (
                            <div className="space-y-2 animate-fadeIn">
                              <div className="rounded-xl overflow-hidden border border-proof-card-border">
                                <iframe
                                  src={deliverable.pdfUrl}
                                  className="w-full bg-white"
                                  style={{ height: "600px" }}
                                  title={`${deliverable.title} — PDF`}
                                />
                              </div>
                              <p className="text-center">
                                <a
                                  href={deliverable.pdfUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-proof-muted hover:text-accent transition-colors border-b border-dashed border-proof-muted"
                                >
                                  PDF not loading? Open in new tab →
                                </a>
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

          <section className="rounded-2xl border border-proof-card-border bg-proof-card p-6 md:p-8">
            <p className="text-proof-muted leading-relaxed">
              This portfolio is built in parallel with active BCS exam preparation. Each deliverable is
              produced using the guided build methodology — theory first, then application, then
              professional rationale.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BodyOfProof;
