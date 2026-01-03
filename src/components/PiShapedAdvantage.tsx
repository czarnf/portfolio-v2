import { motion } from "framer-motion";
import { Building2, Cloud, Users } from "lucide-react";

const PiShapedAdvantage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const crossbarVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const pillarVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
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
        <motion.div className="text-center mb-20" variants={itemVariants}>
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

        <div className="space-y-0">
          <motion.div
            className="w-full origin-left mb-0"
            variants={crossbarVariants}
          >
            <div className="bg-gradient-to-r from-navy via-accent to-slate rounded-t-2xl border border-b-0 border-border p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="crossbar-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="white"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#crossbar-pattern)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      Strategic Governance & Stakeholder Alignment
                    </h3>
                    <p className="text-white/80 text-sm">The Horizontal Connector Bridging Both Domains</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-white/90 leading-relaxed">
                    I <span className="font-semibold">bridge the gap</span> between technical engineering and
                    high-pressure human systems. This includes <span className="font-semibold">liaising with NHS Management</span> to
                    facilitate clinical operational efficiency in patient-facing roles and
                    <span className="font-semibold"> managing C-Suite expectations</span> for AI-driven platforms (Zinter)
                    to drive <span className="font-bold">70% retention</span> improvements and protect
                    <span className="font-bold"> £2.3M+</span> in recurring revenue.
                  </p>

                  <p className="text-white/90 leading-relaxed">
                    I utilize both <span className="font-semibold">Agile</span> and plan-driven (COCOMO/Effort Estimation) models
                    to ensure <span className="font-semibold">predictable delivery</span> across complex, cross-functional transformations.
                  </p>

                  <div className="pt-4 border-t border-white/20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        "Architecting alignment frameworks",
                        "Mitigating delivery risks",
                        "Facilitating integrations",
                        "Orchestrating transformations"
                      ].map((action, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-white mt-1.5 flex-shrink-0"></div>
                          <p className="text-sm text-white/90">{action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-0">
            <motion.div
              className="bg-card border border-border rounded-bl-2xl lg:rounded-bl-2xl lg:rounded-br-none p-8 lg:p-10 relative overflow-hidden origin-top"
              variants={pillarVariants}
            >
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-navy/40 via-navy/20 to-transparent"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Structural Architecture
                  </h3>
                  <p className="text-muted-foreground text-sm">Left Pillar: Physical Domain</p>
                </div>
              </div>

              <div className="space-y-5">
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
                        className="px-3 py-2 text-xs font-medium bg-navy/5 text-navy border border-navy/20 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-br-2xl lg:rounded-br-2xl lg:rounded-bl-none p-8 lg:p-10 relative overflow-hidden origin-top"
              variants={pillarVariants}
            >
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Digital Systems & IT Governance
                  </h3>
                  <p className="text-muted-foreground text-sm">Right Pillar: Digital Domain</p>
                </div>
              </div>

              <div className="space-y-5">
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
                        className="px-3 py-2 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 p-8 bg-card rounded-xl border border-border"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl font-bold text-accent" style={{ fontFamily: 'Georgia, serif' }}>π</span>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-foreground mb-1">
                The Pi-Shaped Model
              </h4>
              <p className="text-muted-foreground">
                Two Deep Vertical Spikes Connected by Strategic Horizontal Governance
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Unlike T-shaped professionals with one deep spike or generalists with broad-but-shallow knowledge,
            Pi-shaped leaders architect solutions by synthesizing insights from{" "}
            <span className="font-semibold text-foreground">multiple deep domains</span>.
            This dual-depth expertise enables me to anticipate architectural dependencies that single-domain
            specialists miss, resulting in{" "}
            <span className="font-medium text-accent">30% faster risk mitigation</span>,{" "}
            <span className="font-medium text-accent">reduced technical debt</span>, and{" "}
            <span className="font-medium text-accent">C-Suite confidence</span> in delivery predictability.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PiShapedAdvantage;
