import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  strategicValue: string;
  date: string;
  link: string;
  coverImage: string;
}

const articles: Article[] = [
  {
    title: "The Unstoppable Stream: How Netflix's $82.7B Power Play Just Rewrote Hollywood History",
    excerpt: "The news broke with the force of a Hollywood blockbuster: Netflix is officially acquiring Warner Bros. Discovery in a deal valued at $82.7B.",
    strategicValue: "Business Transformation",
    date: "Dec 2024",
    link: "https://emmanuelchiefson.medium.com/the-unstoppable-stream-how-netflixs-82-7b-power-play-just-rewrote-hollywood-history-e48881f029d7",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*We9FG08SCEi7V1_knS4arg.png"
  },
  {
    title: "Siemens Mobility Project Management Simulation: A Reflective Report on KPI Development",
    excerpt: "I completed the Siemens Mobility Project Manager Simulation via Forage, offering valuable approximation of real-world PM challenges.",
    strategicValue: "Project Methodology",
    date: "Aug 2024",
    link: "https://emmanuelchiefson.medium.com/title-siemens-mobility-project-management-simulation-a-reflective-report-on-kpi-development-494f5f2cb158",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*peQ5jxDQT6QmNEU7m1uIgA.png"
  },
  {
    title: "Strategic Considerations for AI Adoption in Construction: A Case Study of Mercury Construction Ltd",
    excerpt: "The construction industry is on the verge of a revolutionary transformation, driven by the integration of artificial intelligence.",
    strategicValue: "AI Integration",
    date: "Feb 2024",
    link: "https://emmanuelchiefson.medium.com/strategic-considerations-for-ai-adoption-in-construction-a-case-study-of-mercury-construction-ltd-f8b3ac223613",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*Rn_B4_qu5TQa4fNSSu3MTw.jpeg"
  }
];

const InsightsStrategy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

  return (
    <section 
      id="insights" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-label="Insights and Strategy Section"
    >
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Thought Leadership</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Insights & Strategy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-4">
            I write about AI Productivity, Future-Proofing Technical Skills, and Digital Transformation 
            on Medium to share strategic insights with the community.
          </p>
          <p className="text-foreground font-medium text-lg max-w-2xl border-l-2 border-accent pl-4">
            I bridge the gap between emerging AI technologies and practical project execution.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Cover Image */}
              <div className="aspect-[16/9] bg-muted overflow-hidden border-b border-border">
                <img 
                  src={article.coverImage} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Strategic Value Badge */}
                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md mb-3">
                  {article.strategicValue}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    Read on Medium
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles Link */}
        <motion.div 
          className="mt-10 text-center"
          variants={cardVariants}
        >
          <a
            href="https://medium.com/@emmanuelchiefson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg transition-colors hover:border-accent hover:text-accent"
          >
            View All Articles on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InsightsStrategy;
