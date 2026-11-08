// Every claim on the site lives here, with its evidence status.
// Source of truth: master CV (cloud update 26 Oct 2026) and the achievements addendum (20 Oct 2026).
// Rules: no NHS band, no named hospital/Trust/ward, no em dashes, no unsourced numbers.

export type Status = "verified" | "built" | "progress" | "concept";

export const STATUS_LABEL: Record<Status, string> = {
  verified: "Verified",
  built: "Built",
  progress: "In progress",
  concept: "Concept",
};

export const LINKS = {
  email: "emmanuelchiefson@gmail.com",
  linkedin: "https://www.linkedin.com/in/emmanuel-chiefson-8bb69bb4",
  github: "https://github.com/czarnf",
  substack: "https://emmanuelchiefson.substack.com",
  talos: "https://talosintelligentsystems.com",
  cvRequest:
    "mailto:emmanuelchiefson@gmail.com?subject=CV%20request&body=Hi%20Emmanuel%2C%20could%20you%20send%20me%20your%20CV%3F",
};

export const LAST_UPDATED = "8 November 2026";

export type Proof = { label: string; href?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  role: string;
  dates: string;
  context: string;
  status: Status;
  stack: string[];
  summary: { problem: string; did: string; result: string };
  artefact:
    | { kind: "scores"; caption: string; rows: { label: string; from: string; to: string }[] }
    | { kind: "image"; src: string; alt: string; caption: string }
    | { kind: "code"; caption: string; lines: string[] }
    | { kind: "facts"; caption: string; rows: { label: string; value: string }[] };
  sections: {
    context: string[];
    problem: string[];
    constraints: string[];
    did: string[];
    result: string[];
    evidence: Proof[];
    next: string[];
  };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "documentation-compliance",
    title: "Lifting documentation compliance by fixing the system, not the staff",
    kicker: "Quality improvement",
    role: "Digital Link and QI project lead",
    dates: "Dec 2025 to May 2026",
    context: "Acute medical unit in a large NHS hospital, Bristol",
    status: "verified",
    stack: ["PDSA", "Audit design", "Office Scripts", "Excel", "Responsibility matrix"],
    summary: {
      problem:
        "Digital documentation audit scores were low on both wings of an acute medical unit, and the usual response was to remind staff to document better.",
      did:
        "I treated it as a capacity problem. I measured documentation demand against the time staff actually had, ran PDSA cycles with the Practice Development Nurse as accountable officer, and built automated audit tooling so the team could see progress.",
      result:
        "Overall audit scores rose from 35% to 56% on one wing and from 41% to 56% on the other. The work was recognised by Digital Services, the digital nursing team and the Digital Matron.",
    },
    artefact: {
      kind: "scores",
      caption: "Audit scores before and after (verified audit)",
      rows: [
        { label: "Overall, wing A", from: "35%", to: "56%" },
        { label: "Overall, wing B", from: "41%", to: "56%" },
        { label: "Daily record of care", from: "4%", to: "82%" },
        { label: "Care planning", from: "7%", to: "70%" },
        { label: "Admission assessment", from: "43%", to: "86%" },
      ],
    },
    sections: {
      context: [
        "I coordinate patient flow in a large acute hospital and was the Digital Link for its acute medical unit: the first point of contact when colleagues struggle with clinical systems.",
        "Documentation compliance is audited regularly. Scores were low on both wings, and the gap mattered: incomplete records are a patient safety and governance risk.",
      ],
      problem: [
        "The default explanation was behavioural: staff were not documenting properly, so the fix was reminders and training.",
        "That explanation did not survive contact with the numbers. At peak admissions, the documentation the shift required took about 60 minutes per nurse, and the time actually available for it was about 30 to 40 minutes.",
      ],
      constraints: [
        "The gap was worst at peak admissions, so any fix had to work under real shift pressure, not on an ideal shift.",
        "Changes had to be safe and governed, with a named accountable clinical lead.",
      ],
      did: [
        "Reframed the problem as a capacity and demand mismatch, and evidenced it with audits broken down by role, shift and documentation category.",
        "Ran the project as Plan, Do, Study, Act cycles, with the Practice Development Nurse as accountable officer.",
        "Benchmarked practice and drafted a responsibility matrix so each part of the record had a clear owner.",
        "Built automated audit tooling in Excel and Office Scripts so the team could track scores without manual collation.",
        "Proposed a protected documentation window to close the capacity gap at peak times.",
      ],
      result: [
        "Overall audit scores rose from 35% to 56% on one wing and from 41% to 56% on the other.",
        "The biggest category gains were the daily record of care (4% to 82%), care planning (7% to 70%) and admission assessment (43% to 86%).",
        "Recognised by Digital Services, the digital nursing team and the Digital Matron, and it led to an invitation to join the hospital-wide Digital Link network.",
      ],
      evidence: [
        { label: "Audit results held by the unit; verified figures quoted above" },
        { label: "Recognition from Digital Services and the Digital Matron: references on request" },
      ],
      next: [
        "Put the protected documentation window through its own PDSA cycle and measure it against the same audit categories.",
        "Move the audit tooling onto a shared data source so the scores update without anyone exporting a spreadsheet.",
      ],
    },
  },
  {
    slug: "zinter-platform",
    title: "Leading the rebuild of a European logistics platform",
    kicker: "Digital delivery",
    role: "IT Project Lead, Bayside Consult",
    dates: "2023 to Jul 2026",
    context: "Zinter, a Dutch B2B2C logistics start-up",
    status: "built",
    stack: ["Requirements", "RAID logs", "Jira", "Confluence", "SharePoint", "Microsoft Azure", "Computer vision"],
    summary: {
      problem:
        "Zinter needed its platform rebuilt for scale, with cloud infrastructure, real-time business verification and AI inside the user flow.",
      did:
        "I led delivery end to end: scoping workshops, requirements, user stories and specifications, solution decisions, UAT sign-off and release, with a team of six across three countries.",
      result:
        "The rebuilt platform is live in production (as of August 2026).",
    },
    artefact: {
      kind: "facts",
      caption: "Delivery at a glance",
      rows: [
        { label: "Team", value: "6 people, Nigeria, the Netherlands, UK" },
        { label: "My role", value: "Delivery and product lead" },
        { label: "Key decision", value: "AI model chosen for data residency" },
        { label: "Integration", value: "Dutch Chamber of Commerce registry (KYC)" },
        { label: "Status", value: "Live in production, Aug 2026" },
      ],
    },
    sections: {
      context: [
        "Bayside Consult is a remote consultancy. I joined its service desk in 2022 supporting oil servicing companies and was made IT Project Lead in 2023.",
        "Zinter, a Dutch B2B2C logistics start-up, was my primary engagement: a full rebuild of its platform.",
      ],
      problem: [
        "The platform needed rebuilding to scale with the business. That meant cloud infrastructure, real-time know-your-customer checks against official business registries, and AI inside the user flow.",
      ],
      constraints: [
        "European data protection and data residency requirements for any AI and storage choices.",
        "A small team spread across three countries and time zones.",
      ],
      did: [
        "Ran scoping workshops and requirements discovery, and wrote the user stories and specifications.",
        "Steered stakeholders towards cloud infrastructure on Microsoft Azure for scalability, and owned compliance, data protection and data residency.",
        "Selected a Microsoft computer vision model for its data residency and interoperability, and led the team that took it to production.",
        "Integrated real-time business verification with the Dutch Chamber of Commerce registry.",
        "Ran weekly stand-ups, kept RAID logs and risk registers, and managed the design workstream through to handover to the frontend engineers.",
      ],
      result: [
        "The rebuilt platform is live in production, as of August 2026.",
        "Delivery records (RAID logs, risk registers, specifications) were kept audit-ready throughout.",
      ],
      evidence: [
        { label: "Platform live in production as of Aug 2026" },
        { label: "Reference from Zinter's CEO: on request" },
      ],
      next: [
        "Instrument the live platform with a small set of outcome measures (verification time, manual handling rate) so the next phase can be judged on numbers rather than opinion.",
      ],
    },
  },
  {
    slug: "margin-variance-kit",
    title: "A tested variance engine for manufacturing batch data",
    kicker: "Data product",
    role: "Founder, Talos Intelligent Systems",
    dates: "2026",
    context: "Talos, a data and software venture for batch manufacturers",
    status: "built",
    stack: ["Python", "Decimal arithmetic", "pytest", "CLI", "MIT licence"],
    summary: {
      problem:
        "Batch manufacturers lose margin in material price, usage and yield, but the numbers sit in ERP exports that nobody reconciles.",
      did:
        "I built a small, dependency-free reference implementation of the CIMA standard-cost variances, with exact decimal arithmetic and a test suite, and published it openly.",
      result:
        "A public, tested kit that turns a CSV of batches into price, usage and yield variances by material and by batch, each one traceable to its formula.",
    },
    artefact: {
      kind: "code",
      caption: "Output from the shipped synthetic sample",
      lines: [
        "$ margin-variance analyze sample_data/batches.csv",
        "Batch B-001 - Oat Granola 500g  (GBP)",
        "  price variance     -6.30   (adverse)",
        "  usage variance    -15.00   (adverse)",
        "  yield variance     -2.21   (adverse)",
      ],
    },
    sections: {
      context: [
        "Talos Intelligent Systems is my data and software venture. It builds operating infrastructure for batch and process manufacturers, starting with margin visibility.",
        "The core of that work is a private data pipeline. The variance arithmetic at its heart is published standard accounting, so I released it openly as margin-variance-kit.",
      ],
      problem: [
        "Manufacturers know their margin is slipping but rarely know where: material price, how much material went in, or how much good output came out.",
        "Spreadsheet calculations drift, and floating-point maths quietly produces numbers that do not reconcile.",
      ],
      constraints: [
        "Results had to be exact and reproducible, so an accountant could check any figure by hand.",
        "No runtime dependencies, so the kit runs anywhere Python 3.10 runs.",
        "Publish the arithmetic only; keep the proprietary pipeline private.",
      ],
      did: [
        "Implemented the published CIMA material price, usage and yield variances with one consistent sign convention: positive is favourable, negative is adverse.",
        "Used Decimal throughout so results are exact.",
        "Added a command-line interface and a synthetic sample dataset.",
        "Covered the formulas with automated tests and released the kit under the MIT licence.",
      ],
      result: [
        "A public, tested kit with 14 automated tests that anyone can install and check against the formulas.",
        "The private Talos pipeline it was drawn from has 235 automated tests.",
      ],
      evidence: [
        { label: "Source code and tests on GitHub", href: "https://github.com/czarnf/margin-variance-kit" },
        { label: "Talos Intelligent Systems", href: "https://talosintelligentsystems.com" },
      ],
      next: [
        "Add labour variance once real labour data is available, using the same exact-arithmetic approach.",
      ],
    },
  },
  {
    slug: "flow-intelligence",
    title: "A live operations board for patient-flow style work",
    kicker: "Frontend build",
    role: "Designer and developer",
    dates: "Oct 2026",
    context: "Personal build, informed by flow coordination work",
    status: "built",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts", "Vercel"],
    summary: {
      problem:
        "People who manage flow through a shift still piece the picture together from refreshed spreadsheets and phone calls.",
      did:
        "I designed and built a control-room style dashboard: live KPI tiles, arrivals against departures, occupancy pressure by unit and a filterable event stream.",
      result:
        "A working live demo on synthetic data, accessible in light and dark themes and usable on a phone.",
    },
    artefact: {
      kind: "facts",
      caption: "What the board shows",
      rows: [
        { label: "Live tiles", value: "Occupancy, arrivals, departures, wait" },
        { label: "Pressure read", value: "Calm, watch, pressure per unit" },
        { label: "Stream", value: "Newest first, filter by unit" },
        { label: "Data", value: "Synthetic, generated in the browser" },
      ],
    },
    sections: {
      context: [
        "My day job involves keeping track of patient flow through a shift. This build asks what that picture could look like if it updated itself.",
      ],
      problem: [
        "Operational boards are often spreadsheets that someone has to refresh, so the picture is always slightly out of date and pressure is spotted late.",
      ],
      constraints: [
        "No real organisational or patient data could be used. Everything is synthetic and generated in the browser.",
        "It had to read at a glance, so colour only encodes pressure, never decoration.",
        "Accessible: visible keyboard focus, reduced motion respected, works at phone width.",
      ],
      did: [
        "Designed it as an instrument, not a marketing page: a quiet console with monospaced numerals for every live figure.",
        "Built live KPI tiles with sparklines, an arrivals versus departures chart, occupancy by unit and a live activity stream.",
        "Deployed it as a static app on Vercel, with the live updates simulated client side.",
      ],
      result: [
        "A public live demo and an open repository.",
      ],
      evidence: [
        { label: "Live demo", href: "https://flow-intelligence-dashboard.vercel.app" },
        { label: "Source code on GitHub", href: "https://github.com/czarnf/flow-intelligence-dashboard" },
      ],
      next: [
        "Connect it to a real, governed data feed in a setting where that is approved, starting with a read-only extract.",
      ],
    },
  },
  {
    slug: "sponsor-job-finder",
    title: "An open tool that finds jobs people can actually be sponsored for",
    kicker: "Workflow automation",
    role: "Designer and builder",
    dates: "Oct 2026",
    context: "Open-source Claude skill, MIT licence",
    status: "built",
    stack: ["Claude skills", "Adzuna API", "Gmail", "Google Drive", "Home Office sponsor register"],
    summary: {
      problem:
        "Job seekers who need UK visa sponsorship waste hours on roles whose employer cannot sponsor them or whose salary falls below the threshold.",
      did:
        "I designed a daily workflow that searches job boards, reads job-alert emails, checks every employer against the Home Office sponsor register and tests the salary against Skilled Worker thresholds.",
      result:
        "A free, open skill (version 1.1) that emails a shortlist each morning. It never applies on anyone's behalf.",
    },
    artefact: {
      kind: "facts",
      caption: "What it checks for every job",
      rows: [
        { label: "Employer", value: "On the licensed sponsor register?" },
        { label: "Salary", value: "Above the Skilled Worker threshold?" },
        { label: "Eligibility", value: "Nationality restrictions flagged" },
        { label: "Output", value: "Shortlist with draft CV and letter" },
      ],
    },
    sections: {
      context: [
        "I built this first for my own job search, then packaged it so others in the same position could use it.",
      ],
      problem: [
        "A sponsor licence, a salary threshold and a nationality rule all have to line up before a role is worth applying for. Checking that by hand for every advert is slow and easy to get wrong.",
      ],
      constraints: [
        "Some job boards block automated access, so the tool reads their email alerts instead of visiting them.",
        "It must never apply for anyone or send anything without the user.",
        "A sponsor licence means an employer can sponsor, not that it will. The report says so.",
      ],
      did: [
        "Designed the daily run: search, read alerts, check the register, test the salary, then email a formatted shortlist.",
        "Downloads the sponsor register fresh on each run, with a dated fallback snapshot that the report flags if used.",
        "Wrote honest limits into the documentation, including what has not yet been tested end to end.",
      ],
      result: [
        "Version 1.1, published openly under the MIT licence.",
      ],
      evidence: [
        { label: "Source and documentation on GitHub", href: "https://github.com/czarnf/sponsor-job-finder" },
      ],
      next: [
        "Run it end to end on a fresh account and publish the results, including what breaks.",
      ],
    },
  },
];

export type EvidenceItem = {
  item: string;
  detail?: string;
  type: "Credential" | "Project";
  status: Status;
  date: string;
  proof?: Proof;
};

export const EVIDENCE: EvidenceItem[] = [
  { item: "Documentation compliance QI project", detail: "Audit scores 35% to 56% and 41% to 56%", type: "Project", status: "verified", date: "May 2026", proof: { label: "Case study", href: "/work/documentation-compliance" } },
  { item: "Hospital-wide Digital Link", detail: "First point of contact for colleagues on clinical systems", type: "Project", status: "verified", date: "Current" },
  { item: "Cannula check audit workbook", detail: "Logs 12-hourly checks for governance; used by ward management", type: "Project", status: "verified", date: "Current" },
  { item: "Medical equipment usage tracker", detail: "Made life-critical equipment use auditable", type: "Project", status: "verified", date: "2025" },
  { item: "Medication safety and governance workbook", detail: "Designed; flags repeat errors in a rolling six months", type: "Project", status: "built", date: "Sep 2026" },
  { item: "Daily flow dashboard and history workbook", detail: "Designed in Excel 365 with 7-day rolling averages", type: "Project", status: "built", date: "Sep 2026" },
  { item: "Zinter platform rebuild", detail: "Live in production as of Aug 2026", type: "Project", status: "built", date: "Jul 2026", proof: { label: "Case study", href: "/work/zinter-platform" } },
  { item: "margin-variance-kit", detail: "CIMA variances, 14 tests, MIT", type: "Project", status: "built", date: "2026", proof: { label: "GitHub", href: "https://github.com/czarnf/margin-variance-kit" } },
  { item: "Flow Intelligence dashboard", detail: "Live demo on synthetic data", type: "Project", status: "built", date: "Oct 2026", proof: { label: "Live demo", href: "https://flow-intelligence-dashboard.vercel.app" } },
  { item: "Sponsor Job Finder", detail: "Open Claude skill, version 1.1", type: "Project", status: "built", date: "Oct 2026", proof: { label: "GitHub", href: "https://github.com/czarnf/sponsor-job-finder" } },
  { item: "Acute medical triage improvement group", detail: "Power BI data-integrity audit, A3 and PDSA proposals", type: "Project", status: "progress", date: "Sep 2026" },
  { item: "Essentials of Digital Clinical Safety", detail: "NHS England; digital clinical safety training (DCB 0129 / DCB 0160)", type: "Credential", status: "verified", date: "Held", proof: { label: "Certificate on request" } },
  { item: "Digital Clinical Safety: Intermediate", detail: "NHS England", type: "Credential", status: "verified", date: "Held", proof: { label: "Certificate on request" } },
  { item: "Clinical Risk Management Training: Refresher", detail: "NHS England", type: "Credential", status: "verified", date: "Held", proof: { label: "Certificate on request" } },
  { item: "Statistical process control training", detail: "Patients First badge", type: "Credential", status: "verified", date: "Oct 2026" },
  { item: "MSc Information Technology (Merit)", detail: "UWE Bristol; dissertation on human error and cybersecurity in healthcare", type: "Credential", status: "verified", date: "2024" },
  { item: "BSc Project Management (2:1)", detail: "ESAE University", type: "Credential", status: "verified", date: "2022" },
  { item: "Certificate of Higher Education", detail: "Architectural Technology and the Environment, University of Plymouth", type: "Credential", status: "verified", date: "2018" },
  { item: "Project Manager job simulation", detail: "Siemens Mobility, via Forage", type: "Credential", status: "verified", date: "Aug 2025" },
  { item: "ILM Level 2 Award in Leadership and Team Skills", type: "Credential", status: "progress", date: "Started Sep 2026" },
  { item: "PRINCE2 Agile", detail: "Working towards", type: "Credential", status: "progress", date: "Current" },
  { item: "BCS Foundation Certificate in Business Analysis", detail: "Working towards", type: "Credential", status: "progress", date: "Current" },
  { item: "Microsoft Power BI Data Analyst (PL-300)", detail: "Working towards", type: "Credential", status: "progress", date: "Current" },
  { item: "Microsoft Learn: 11 learning paths, 49 modules", detail: "Azure Fundamentals and Azure AI Fundamentals syllabuses, plus generative AI, agents and RAG on Azure. Exams not yet sat", type: "Credential", status: "progress", date: "To Oct 2026" },
];

export type Article = { title: string; date: string; takeaway: string; href: string };

export const WRITING: Article[] = [
  {
    title: "The Formula Was Right. The Number Still Wasn't.",
    date: "3 Oct 2026",
    takeaway: "A number can pass every data-quality check and still mislead when the choices behind it do not match the question being asked.",
    href: "https://emmanuelchiefson.substack.com/p/the-formula-was-right-the-number",
  },
  {
    title: "Ownership Tells You Who Can Write. It Doesn't Tell You When You're Wrong.",
    date: "12 Sep 2026",
    takeaway: "Naming a data owner is not enough: trustworthy data needs explicit rules for which system is authoritative and how conflicts are resolved.",
    href: "https://emmanuelchiefson.substack.com/p/ownership-tells-you-who-can-write",
  },
  {
    title: "The Bottleneck Isn't Intelligence. It's Trust. Part 2: Knowing When Not to Use It",
    date: "29 Aug 2026",
    takeaway: "When a deterministic script beats an expensive model, and why that judgement is a domain skill.",
    href: "https://emmanuelchiefson.substack.com/p/the-bottleneck-isnt-intelligence-c28",
  },
  {
    title: "The Bottleneck Isn't Intelligence. It's Trust.",
    date: "16 Jul 2026",
    takeaway: "Trust boundaries for AI in practice: least privilege, human review and grounding.",
    href: "https://emmanuelchiefson.substack.com/p/the-bottleneck-isnt-intelligence",
  },
  {
    title: "NHS England Wants to Outsource Its Digital Capability Gap. That's the Wrong Answer to the Right Problem.",
    date: "17 Mar 2026",
    takeaway: "Why buying in digital capability does not fix a structural workforce problem.",
    href: "https://emmanuelchiefson.substack.com/p/nhs-england-wants-to-outsource-its",
  },
  {
    title: "The £63 System Failure: A Business Analysis of NHS Workforce Attrition",
    date: "19 Feb 2026",
    takeaway: "How a £63 gap between pay and the visa salary threshold pushes trained staff out at a far higher replacement cost, and which existing policy tools could close it.",
    href: "https://emmanuelchiefson.substack.com/p/the-63-system-failure-a-business",
  },
];

export const PROCESS = [
  { n: "01", title: "Map the system", body: "Follow the work end to end before proposing anything. Most problems that look like people problems are capacity or design problems." },
  { n: "02", title: "Fix the data", body: "Make the numbers trustworthy first: who owns them, where they come from, and whether they reconcile." },
  { n: "03", title: "Ship the smallest useful change", body: "One change, tested in a short cycle, with a named owner and a measure agreed up front." },
  { n: "04", title: "Measure and hand over", body: "Show what changed with evidence, then leave tools and documentation the team can run without me." },
];
