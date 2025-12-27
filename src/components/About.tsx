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
    period: "Oct 2025 - Present",
    title: "Patient Flow Coordinator",
    company: "NHS — Operational Resilience",
    description: "Managing high-stakes, real-time healthcare data flows across hospital departments. Achieved 30% reduction in data reconciliation through structured governance, standardized clinical reporting, and proactive bottleneck identification.",
    icon: ArrowRightLeft,
    highlight: true
  },
  {
    period: "April 2025 - Oct 2025",
    title: "Operational Discovery Phase",
    company: "NHS",
    description: "Ground-level analysis of clinical data systems and patient flow operations. Strategic immersion into healthcare IT infrastructure, identifying optimization opportunities that informed subsequent data governance implementations.",
    icon: Heart
  },
  {
    period: "July 2023 - Present",
    title: "IT Project Manager / Acting Project Lead",
    company: "Bayside Consult → Zinter (Netherlands)",
    description: "Leading end-to-end digital transformation for a Dutch startup using AI to solve logistic challenges. Managing a cross-functional global teams across SDLC phases, stakeholder alignment, and AI-enhanced platform delivery targeting 70% customer retention improvement.",
    icon: Globe,
    highlight: true
  },
  {
    period: "Jan 2019 - July 2023",
    title: "Digital Consultant & Strategist",
    company: "Freelance (Fiverr)",
    description: "Delivered digital strategy consulting for SMEs including requirements analysis, UX optimization, and technology recommendations. Focused on translating business objectives into actionable digital roadmaps.",
    icon: Building
  },
  {
    period: "July 2022 - Oct 2023",
    title: "Community Outreach Support",
    company: "Nigerian Red Cross Society",
    description: "Designed IT awareness campaigns, conducted usability testing for educational tools, and coordinated stakeholder communications during emergency response operations.",
    icon: Users
  },
  {
    period: "May 2017 - Dec 2018",
    title: "Healthcare Assistant",
    company: "Nurseplus, Plymouth",
    description: "Delivered client-focused care in fast-paced healthcare settings, managing sensitive information with GDPR compliance and attention to operational protocols.",
    icon: Briefcase
  }
];

const education: TimelineItem[] = [
  {
    period: "2024",
    title: "MSc Information Technology (Merit)",
    company: "University of the West of England",
    description: "Culmination of a decade of technical evolution. Specialization in IT systems architecture, digital transformation, cloud computing, and data-driven governance. Research focus on security human factors in healthcare.",
    icon: GraduationCap,
    highlight: true
  },
  {
    period: "2022",
    title: "BSc Project Management",
    company: "ESAE University",
    description: "Strategic foundation in project governance, stakeholder management, operations control, and organizational communication frameworks.",
    icon: GraduationCap
  },
  {
    period: "2018",
    title: "HND Architectural Technology",
    company: "Plymouth University",
    description: "Systems Design Logic foundation—I apply architectural blueprinting principles to IT infrastructure, ensuring structural integrity and scalability in digital environments. Revit/AutoCAD expertise in visualizing complex systems before building them.",
    icon: Award,
    highlight: true
  },
  {
    period: "2014",
    title: "A-Grade Distinction: Systems Design",
    company: "Foundation Studies",
    description: "The bedrock of my IT architecture approach—early mastery of structured systems thinking, data flow diagramming, and logical design. A decade-long bridge to 2024 MSc IT leadership.",
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
            Professional Profile
          </h2>
        </motion.div>
        
        {/* Bio Section - Systems Thinking Focus */}
        <div className="mb-12 max-w-4xl">
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            My <span className="font-semibold text-foreground">10+ years of experience</span> represents a deliberate evolution in 
            <span className="font-medium text-accent"> Systems Thinking</span>—starting from A-grade distinctions in Systems Design, 
            moving through Architectural Technology (Revit/AutoCAD), and culminating in MSc IT leadership. This foundation enables me 
            to visualize complex infrastructures before building them.
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            <span className="font-semibold text-foreground">The Value I Bring:</span> I combine 
            <span className="font-medium text-accent"> Technical Cloud/Data Rigor</span> with 
            <span className="font-medium text-accent"> Strategic Stakeholder Communication</span>—a unique blend rooted in 
            my marketing and copywriting background. This means I don't just architect systems; I translate technical complexity 
            into business value that executives understand.
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            Currently driving dual impact: <span className="font-semibold text-foreground">Full Platform Transformation at Zinter</span> (achieving 
            <span className="font-bold text-accent font-mono"> 70%</span> retention improvement, 
            <span className="font-bold text-accent font-mono"> 40%</span> latency reduction, <span className="font-semibold text-foreground">AI-Driven B2B2C</span> architecture) and 
            <span className="font-semibold text-foreground"> Operational Resilience at NHS</span> (
            <span className="font-bold text-accent font-mono">30%</span> reduction in reconciliation time, standardized clinical reporting).
          </motion.p>

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

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          <TimelineSection 
            items={workHistory} 
            title="Career History" 
            accentColor="primary" 
          />
          <TimelineSection 
            items={education} 
            title="Education" 
            accentColor="accent" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
