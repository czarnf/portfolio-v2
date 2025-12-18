import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Code, Users } from "lucide-react";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: React.ElementType;
  type: "work" | "education";
}

const timelineData: TimelineItem[] = [
  {
    period: "July 2023 - Present",
    title: "IT Project Manager / Acting Project Lead",
    company: "Bayside Consult",
    description: "Leading end-to-end product transformation for a Dutch logistics startup, managing a global cross-functional team to deliver AI-enhanced digital solutions aimed at increasing customer retention by 70%.",
    icon: Globe,
    type: "work"
  },
  {
    period: "2024",
    title: "MSc Information Technology (Merit)",
    company: "University of the West of England",
    description: "Focused on IT systems, UI/UX design, digital transformation, cloud computing, and data analysis. Dissertation on human error and security breaches in healthcare.",
    icon: GraduationCap,
    type: "education"
  },
  {
    period: "Jan 2019 - July 2023",
    title: "Web Developer & Copywriter",
    company: "Freelance (Fiverr)",
    description: "Developed client websites with focus on usability, SEO, and conversion. Wrote marketing sales copy and built e-commerce platforms on no-code solutions. Consulted small businesses on product-market fit and UX design.",
    icon: Code,
    type: "work"
  },
  {
    period: "2022",
    title: "BSc Project Management",
    company: "ESAE University",
    description: "Developed practical knowledge in planning, executing, and managing complex projects including operations management, financial management, and stakeholder communication.",
    icon: GraduationCap,
    type: "education"
  },
  {
    period: "July 2022 - Oct 2023",
    title: "Community Outreach Support",
    company: "Nigerian Red Cross Society",
    description: "Designed IT awareness campaigns, conducted usability testing for educational tools, and served as first responder during the 2022 flooding disasters.",
    icon: Users,
    type: "work"
  },
  {
    period: "2018",
    title: "HND Architectural Technology",
    company: "Plymouth University",
    description: "Studied sustainable building design, environmental technology, and human-centred design principles.",
    icon: GraduationCap,
    type: "education"
  },
  {
    period: "May 2017 - Dec 2018",
    title: "Healthcare Assistant",
    company: "Nurseplus, Plymouth",
    description: "Delivered client-first care in fast-paced settings, managing sensitive information with GDPR compliance.",
    icon: Briefcase,
    type: "work"
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-primary mb-8"
          variants={skillVariants}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Bio & Skills */}
          <div className="space-y-6">
            <motion.p 
              className="text-secondary text-lg leading-relaxed"
              variants={skillVariants}
            >
              I am a technically astute and adaptable IT professional with a Master's in Information Technology and a growing track record of delivering impactful, data-informed digital solutions. My journey spans from freelance web development and marketing copywriting to leading digital transformation projects for European startups.
            </motion.p>
            <motion.p 
              className="text-secondary text-lg leading-relaxed"
              variants={skillVariants}
            >
              Currently, I'm the Project Lead for a Dutch logistics startup at Bayside Consult, managing a global cross-functional team to deliver an AI-enhanced platform. My approach integrates strategic thinking with creative execution, ensuring every project delivers meaningful results.
            </motion.p>
            
            <motion.div 
              className="space-y-4 pt-4"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-xl font-semibold text-primary"
                variants={skillVariants}
              >
                Core Competencies
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {[
                  "Product Management",
                  "Digital Transformation",
                  "Agile/Scrum",
                  "Cross-functional Leadership",
                  "Cloud Infrastructure",
                  "API Design",
                  "Data Analytics",
                  "UX Strategy"
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-background rounded-full text-secondary text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-sm hover:shadow-md border border-border"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-semibold text-primary mb-6"
              variants={skillVariants}
            >
              Career Journey
            </motion.h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-6">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12"
                    variants={itemVariants}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      item.type === "education" 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-primary text-primary-foreground"
                    }`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {item.period}
                      </span>
                      <h4 className="font-semibold text-foreground mt-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-accent font-medium">
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
        </div>
      </motion.div>
    </section>
  );
};

export default About;
