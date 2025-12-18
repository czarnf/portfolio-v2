import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Code, Users, Award, Heart, ArrowRightLeft } from "lucide-react";
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
    description: "Coordinating patient flow and bed management across hospital departments. Applying IT and data skills to optimize operational efficiency in a high-pressure healthcare environment.",
    icon: ArrowRightLeft,
    highlight: true
  },
  {
    period: "April 2025 - Oct 2025",
    title: "Healthcare Support Worker",
    company: "NHS",
    description: "Delivered frontline patient care while transitioning career focus from private sector to public service. First step in aligning career with advanced IT degree in a government organization.",
    icon: Heart
  },
  {
    period: "July 2023 - Present",
    title: "IT Project Manager / Acting Project Lead",
    company: "Bayside Consult → Zinter (Netherlands)",
    description: "Leading end-to-end product transformation for Zinter, a Dutch logistics startup. Managing a global cross-functional team to deliver an AI-enhanced B2B2C platform aimed at increasing customer retention by 70%.",
    icon: Globe
  },
  {
    period: "Jan 2019 - July 2023",
    title: "Web Developer & Copywriter",
    company: "Freelance (Fiverr)",
    description: "Developed client websites with focus on usability, SEO, and conversion. Wrote marketing sales copy and built e-commerce platforms on no-code solutions. Consulted small businesses on product-market fit and UX design.",
    icon: Code
  },
  {
    period: "July 2022 - Oct 2023",
    title: "Community Outreach Support",
    company: "Nigerian Red Cross Society",
    description: "Designed IT awareness campaigns, conducted usability testing for educational tools, and served as first responder during the 2022 flooding disasters.",
    icon: Users
  },
  {
    period: "May 2017 - Dec 2018",
    title: "Healthcare Assistant",
    company: "Nurseplus, Plymouth",
    description: "Delivered client-first care in fast-paced settings, managing sensitive information with GDPR compliance.",
    icon: Briefcase
  }
];

const education: TimelineItem[] = [
  {
    period: "2024",
    title: "MSc Information Technology (Merit)",
    company: "University of the West of England",
    description: "Focused on IT systems, UI/UX design, digital transformation, cloud computing, and data analysis. Dissertation on human error and security breaches in healthcare.",
    icon: GraduationCap,
    highlight: true
  },
  {
    period: "2022",
    title: "BSc Project Management",
    company: "ESAE University",
    description: "Developed practical knowledge in planning, executing, and managing complex projects including operations management, financial management, and stakeholder communication.",
    icon: GraduationCap
  },
  {
    period: "2018",
    title: "HND Architectural Technology",
    company: "Plymouth University",
    description: "Studied sustainable building design, environmental technology, and human-centred design principles.",
    icon: Award
  }
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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
        className="text-xl font-semibold text-foreground flex items-center gap-2"
        variants={cardVariants}
      >
        {title === "Work Experience" ? (
          <Briefcase className="w-5 h-5 text-accent" />
        ) : (
          <GraduationCap className="w-5 h-5 text-accent" />
        )}
        {title}
      </motion.h3>
      <div className="relative">
        <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${
          accentColor === "primary" ? "bg-border" : "bg-accent/30"
        }`} />
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-12"
              variants={itemVariants}
            >
              <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                item.highlight 
                  ? "bg-accent text-accent-foreground ring-2 ring-accent/20" 
                  : "bg-muted text-muted-foreground border border-border"
              }`}>
                <item.icon className="w-4 h-4" />
              </div>
              
              <div className={`bg-card rounded-lg p-4 shadow-sm border transition-all duration-300 hover:shadow-md hover:border-accent/30 ${
                item.highlight ? "border-accent/20" : "border-border"
              }`}>
                <span className="text-xs font-mono text-accent uppercase tracking-wide">
                  {item.period}
                </span>
                <h4 className="font-semibold text-foreground mt-1">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-muted-foreground">
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
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          variants={cardVariants}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
        </motion.div>
        
        {/* Bio Section */}
        <div className="mb-16 max-w-4xl">
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            I am a technically astute and adaptable IT professional with a Master's in Information Technology and a growing track record of delivering impactful, data-informed digital solutions. My journey spans from freelance web development and marketing copywriting on Fiverr to leading digital transformation projects for European startups.
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-4"
            variants={cardVariants}
          >
            Currently, I'm making a deliberate transition from private sector to public service — working as a <span className="font-semibold text-foreground">Patient Flow Coordinator at the NHS</span> while continuing as Project Lead for <span className="font-semibold text-accent">Zinter</span>, a Dutch logistics startup. This dual focus allows me to leverage my advanced IT skills in operational support within a government organization.
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed"
            variants={cardVariants}
          >
            My career path reflects a strategic vision: combining technical expertise with frontline public service experience to drive meaningful change in healthcare and government digital transformation.
          </motion.p>
        </div>

        {/* Development Philosophy */}
        <Philosophy />

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          <TimelineSection 
            items={workHistory} 
            title="Work Experience" 
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
