import { motion } from "framer-motion";
import { Building2, Cloud, Users } from "lucide-react";

const PiShapedAdvantage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const pillarVariants = {
    hidden: { opacity: 0, scaleY: 0.3 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const crossbarVariants = {
    hidden: { opacity: 0, scaleX: 0.3 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="pi-shaped"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
      aria-label="Pi-Shaped Leadership Model Section"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pi-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pi-grid)" />
        </svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">
            Dual-Domain Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Beyond Generalist: The Pi-Shaped Leadership Model
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Cross-functional governance supported by dual-depth expertise in{" "}
            <span className="font-semibold text-foreground">Physical</span> and{" "}
            <span className="font-semibold text-foreground">Digital Systems</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 mb-12">
          <motion.div
            className="lg:col-span-1 bg-card rounded-xl border border-border p-8 relative overflow-hidden origin-bottom"
            variants={pillarVariants}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-navy/40 via-slate/20 to-transparent"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Structural Architecture
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Rooted in a <span className="font-semibold text-foreground">10+ year foundation</span> of
                Architectural Technology. I apply <span className="font-medium text-accent">blueprint-first logic</span> and
                architectural dependency mapping to resolve technical risks and ensure{" "}
                <span className="font-semibold text-foreground">structural integrity</span> before
                a single line of code is deployed.
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Core Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Revit/AutoCAD Systems", "Dependency Mapping", "Risk Architecture", "Blueprint Logic"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-navy/5 text-navy border border-navy/20 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-1 bg-card rounded-xl border border-border p-8 relative overflow-hidden origin-bottom"
            variants={pillarVariants}
          >
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-slate/40 via-accent/20 to-transparent"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Digital Systems & IT Governance
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">MSc Information Technology (Merit)</span>.
                Advanced technical mastery in <span className="font-medium text-accent">Cloud Migration Strategy</span> (SWOT/Vendor Analysis),
                Information Security Frameworks (NIST/PCI DSS), and IoT Smart Systems (Arduino/Sensors).
                My expertise extends to <span className="font-semibold text-foreground">Data Life-cycle Management</span> (GDPR/DPA 2018)
                and Digital Design, ensuring enterprise-scale transformations are{" "}
                <span className="font-medium text-accent">secure, scalable, and audit-ready</span>.
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Core Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cloud Migration", "NIST/PCI DSS", "IoT Systems", "GDPR/DPA 2018", "Multi-Cloud"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-1 bg-gradient-to-br from-accent/5 to-navy/5 rounded-xl border border-accent/20 p-8 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="crossbar-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#crossbar-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Strategic Governance & Stakeholder Alignment
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I <span className="font-semibold text-foreground">bridge the gap</span> between
                  technical engineering and high-pressure human systems. This includes{" "}
                  <span className="font-medium text-accent">liaising with NHS Management</span> to
                  facilitate clinical operational efficiency in patient-facing roles and{" "}
                  <span className="font-medium text-accent">managing C-Suite expectations</span> for
                  AI-driven platforms (Zinter) to drive{" "}
                  <span className="font-bold text-accent font-mono">70%</span> retention improvements
                  and protect <span className="font-bold text-accent font-mono">£2.3M+</span> in
                  recurring revenue.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  I utilize both <span className="font-semibold text-foreground">Agile</span> and
                  plan-driven (COCOMO/Effort Estimation) models to ensure{" "}
                  <span className="font-medium text-accent">predictable delivery</span>.
                </p>

                <div className="pt-4 border-t border-accent/20">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Leadership Actions
                  </p>
                  <div className="space-y-2">
                    {[
                      "Architecting stakeholder alignment frameworks",
                      "Mitigating cross-functional delivery risks",
                      "Facilitating clinical-technical integrations",
                      "Orchestrating C-Suite platform transformations"
                    ].map((action, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-foreground">{action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative h-2 bg-accent/20 rounded-full origin-left overflow-hidden"
          variants={crossbarVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-accent to-slate/60"></div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/20 rounded-lg">
            <span className="text-6xl font-bold text-accent" style={{ fontFamily: 'Georgia, serif' }}>π</span>
            <div className="text-left ml-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                The Pi-Shaped Model
              </p>
              <p className="text-sm font-semibold text-foreground">
                Two Deep Spikes + Strategic Cross-Functional Connector
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-card rounded-xl border border-border"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Why Pi-Shaped Leadership Delivers Superior ROI
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlike T-shaped professionals with one deep spike or generalists with broad-but-shallow knowledge,
                Pi-shaped leaders architect solutions by synthesizing insights from{" "}
                <span className="font-semibold text-foreground">multiple deep domains</span>.
                This dual-depth expertise enables me to anticipate architectural dependencies that single-domain
                specialists miss, resulting in{" "}
                <span className="font-medium text-accent">30% faster risk mitigation</span>,{" "}
                <span className="font-medium text-accent">reduced technical debt</span>, and{" "}
                <span className="font-medium text-accent">C-Suite confidence</span> in delivery predictability.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PiShapedAdvantage;
