import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Users, Award, Heart, ArrowRightLeft, Building } from "lucide-react";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const workHistory: TimelineItem[] = [
  {
    period: "July 2023 - Present",
    title: "Technical Project Lead",
    company: "Zinter (Netherlands)",
    description: "Role: Technical Project Lead / Platform Transformation Owner. **70%** retention improvement — protecting recurring revenue and enabling expansion into enterprise accounts. AI-driven B2B2C platform transformation with **40%** latency reduction.",
    icon: Globe,
    highlight: true
  },
  {
    period: "Oct 2025 - Present",
    title: "Patient Flow Coordinator",
    company: "NHS",
    description: "Managing real-time clinical operational efficiency and patient flow. Liaising with NHS Management-level colleagues to facilitate throughput and managing stakeholder expectations in a high-pressure, patient-facing environment.",
    icon: ArrowRightLeft,
    highlight: true
  },
  {
    period: "April 2025 - Oct 2025",
    title: "Healthcare Support Worker",
    company: "NHS",
    description: "Ground-level analysis of clinical data systems and patient flow operations. Data accuracy, escalation logic, and governance in safety-critical systems. Decision-support impact through structured reporting.",
    icon: Heart
  },
  {
    period: "July 2022 - Oct 2023",
    title: "IT & Communications Coordinator",
    company: "Nigerian Red Cross Society",
    description: "Designed IT awareness campaigns, conducted usability testing for educational tools, and coordinated stakeholder communications during emergency response operations.",
    icon: Users
  },
  {
    period: "Jan 2019 - July 2023",
    title: "Digital Strategy Consultant",
    company: "Freelance (Fiverr)",
    description: "Delivered digital strategy consulting for SMEs including requirements analysis, UX optimization, and technology recommendations. Focused on translating business objectives into actionable digital roadmaps.",
    icon: Building
  },
  {
    period: "May 2017 - Dec 2018",
    title: "Healthcare Support Worker",
    company: "Bayside Care, Plymouth",
    description: "Delivered client-focused care in fast-paced healthcare settings, managing sensitive information with GDPR compliance and attention to operational protocols.",
    icon: Briefcase
  }
];

const education: TimelineItem[] = [
  {
    period: "2024",
    title: "MSc Information Technology (Merit)",
    company: "University of the West of England",
    description: "Built on a decade-long progression in systems design, architecture, and IT governance. Specialization in digital transformation, cloud computing, and data-driven decision-making.",
    icon: GraduationCap,
    highlight: true
  },
  {
    period: "2022",
    title: "BSc Project Management",
    company: "ESAE University",
    description: "Foundation in project governance, stakeholder management, operations control, and organizational communication frameworks.",
    icon: GraduationCap
  },
  {
    period: "2018",
    title: "HND Architectural Technology",
    company: "Plymouth University",
    description: "Systems design logic foundation — applying architectural blueprinting principles to IT infrastructure. Revit/AutoCAD expertise in visualizing complex systems.",
    icon: Award,
    highlight: true
  },
  {
    period: "2014",
    title: "A-Grade Distinction: Systems Design",
    company: "Foundation Studies",
    description: "Early mastery of structured systems thinking, data flow diagramming, and logical design principles.",
    icon: Award,
    highlight: true
  }
];

const cloudCertifications = [
  "AWS Cloud Practitioner",
  "AZ-900 (Azure Fundamentals)",
  "GCP Foundations",
  "Oracle Cloud",
  "ITIL v4 Foundation"
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const TimelineSection = ({ 
    items, 
    title, 
    accentColor 
  }: { 
    items: TimelineItem[]; 
    title: string; 
    accentColor: "primary" | "accent";
  }) => (
    <div className="space-y-4">
      <motion.h3 
        className="text-lg font-semibold text-foreground flex items-center gap-2"
        variants={cardVariants}
      >
        {title === "Career History" ? (
          <Briefcase className="w-4 h-4 text-accent" />
        ) : (
          <GraduationCap className="w-4 h-4 text-accent" />
        )}
        {title}
      </motion.h3>
      <div className="relative">
        <div className={`absolute left-3 top-0 bottom-0 w-px ${
          accentColor === "primary" ? "bg-border" : "bg-accent/30"
        }`} />
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-10"
              variants={itemVariants}
            >
              <div className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${
                item.highlight 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-muted text-muted-foreground border border-border"
              }`}>
                <item.icon className="w-3 h-3" />
              </div>
              
              <div className={`bg-card rounded-lg p-4 border transition-colors hover:border-accent/30 ${
                item.highlight ? "border-accent/20" : "border-border"
              }`}>
                <span className="text-xs font-medium text-accent uppercase tracking-wide">
                  {item.period}
                </span>
                <h4 className="font-semibold text-foreground text-sm mt-1">
                  {item.title}
                </h4>
                <p className="text-xs font-medium text-muted-foreground">
                  {item.company}
                </p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="mb-12"
          variants={cardVariants}
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Solving the Structural Language Barrier
          </h2>
        </motion.div>
        
        {/* Bio Section - Senior Narrative */}
        <div className="mb-12 max-w-4xl">
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            I have spent over a decade solving the primary structural problem organizations face: 
            <span className="font-semibold text-foreground"> technical teams and commercial stakeholders speaking different languages</span>. 
            My work bridges that gap—translating executive vision into deliverable technical roadmaps 
            that hold up under rigorous engineering scrutiny.
          </motion.p>

          {/* Hybrid Advantage Bullets */}
          <motion.div 
            className="grid sm:grid-cols-3 gap-4 mb-6"
            variants={cardVariants}
          >
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Technical Execution</p>
              <p className="text-foreground font-medium">MSc Information Technology</p>
              <p className="text-sm text-muted-foreground">Cloud architecture, AI integration, systems design</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Structured Governance</p>
              <p className="text-foreground font-medium">BSc Project Management</p>
              <p className="text-sm text-muted-foreground">Agile delivery, stakeholder alignment, risk mitigation</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Commercial ROI</p>
              <p className="text-foreground font-medium">Revenue-Driven Outcomes</p>
              <p className="text-sm text-muted-foreground">Business case development, metric-driven delivery</p>
            </div>
          </motion.div>

          {/* Cloud Multi-Literacy Badge */}
          <motion.div 
            className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20"
            variants={cardVariants}
          >
            <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">Cloud Multi-Literacy</p>
            <div className="flex flex-wrap gap-2">
              {cloudCertifications.map((cert, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 text-xs font-medium bg-card text-foreground rounded-md border border-border"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience & Academic Foundation - Side by Side */}
        <motion.div className="mb-8" variants={cardVariants}>
          <h3 className="text-2xl font-semibold text-foreground mb-2">Experience & Academic Foundation</h3>
          <p className="text-muted-foreground">Parallel growth in professional delivery and academic mastery</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          <TimelineSection 
            items={workHistory} 
            title="Experience & Impact" 
            accentColor="primary" 
          />
          <TimelineSection 
            items={education} 
            title="Academic Foundation" 
            accentColor="accent" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
