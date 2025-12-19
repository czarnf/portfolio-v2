import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Users, Award, Heart, ArrowRightLeft, Building } from "lucide-react";
import Philosophy from "./Philosophy";

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
    company: "NHS",
    description: "Coordinating patient flow and bed management across hospital departments. Applying IT and data analysis skills to optimize operational efficiency and support strategic decision-making in a high-pressure healthcare environment.",
    icon: ArrowRightLeft,
    highlight: true
  },
  {
    period: "April 2025 - Oct 2025",
    title: "Healthcare Support Worker",
    company: "NHS",
    description: "Delivered frontline patient care while strategically transitioning from private sector to public service. Foundation for applying advanced IT expertise within government healthcare operations.",
    icon: Heart
  },
  {
    period: "July 2023 - Present",
    title: "IT Project Manager / Acting Project Lead",
    company: "Bayside Consult → Zinter (Netherlands)",
    description: "Leading end-to-end digital transformation for a Dutch logistics startup. Managing cross-functional global teams across SDLC phases, stakeholder alignment, and AI-enhanced platform delivery targeting 70% customer retention improvement.",
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
    description: "Specialization in IT systems, digital transformation, cloud computing, and data analysis. Dissertation research on human error factors in healthcare security breaches.",
    icon: GraduationCap,
    highlight: true
  },
  {
    period: "2022",
    title: "BSc Project Management",
    company: "ESAE University",
    description: "Comprehensive foundation in project planning, execution, and stakeholder management including operations management, financial controls, and organizational communication.",
    icon: GraduationCap
  },
  {
    period: "2018",
    title: "HND Architectural Technology",
    company: "Plymouth University",
    description: "Grounding in sustainable design principles, environmental technology, and human-centred design methodologies applicable to systems thinking.",
    icon: Award
  }
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
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
        
        {/* Bio Section */}
        <div className="mb-12 max-w-4xl">
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            I am a strategically minded IT professional with a Master's degree in Information Technology 
            and a proven track record of delivering impactful digital transformation initiatives. My career 
            reflects a deliberate evolution—from private sector consulting to public service leadership—designed 
            to leverage advanced technical knowledge within mission-critical government operations.
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            Currently serving as <span className="font-medium text-foreground">Patient Flow Coordinator at the NHS</span>, 
            I apply data-driven decision-making to healthcare operations while continuing as 
            <span className="font-medium text-accent"> Project Lead for Zinter</span>, where I manage 
            cross-functional teams delivering enterprise-scale digital transformation.
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed"
            variants={cardVariants}
          >
            My approach combines rigorous project governance with stakeholder-centric communication, 
            ensuring technical initiatives align with organizational objectives and deliver measurable outcomes.
          </motion.p>
        </div>

        {/* Management Philosophy */}
        <Philosophy />

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