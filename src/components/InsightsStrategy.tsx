import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  strategicValue: string;
  date: string;
  readTime: string;
  link: string;
  coverImage: string;
}

const articles: Article[] = [
  {
    title: "The Unstoppable Stream: How Netflix's $82.7B Power Play Just Rewrote Hollywood History",
    excerpt: "Analysis of Netflix's $82.7B infrastructure play and its impact on industry economics.",
    strategicValue: "Market Disruption Strategy",
    date: "Dec 2024",
    readTime: "6 min",
    link: "https://emmanuelchiefson.medium.com/the-unstoppable-stream-how-netflixs-82-7b-power-play-just-rewrote-hollywood-history-e48881f029d7",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*We9FG08SCEi7V1_knS4arg.png"
  },
  {
    title: "Siemens Mobility Project Management Simulation: A Reflective Report on KPI Development",
    excerpt: "Reflective insights from Siemens Mobility Project Management simulations, focusing on performance metrics and risk mitigation.",
    strategicValue: "KPI-Driven Governance",
    date: "Aug 2024",
    readTime: "8 min",
    link: "https://emmanuelchiefson.medium.com/title-siemens-mobility-project-management-simulation-a-reflective-report-on-kpi-development-494f5f2cb158",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*peQ5jxDQT6QmNEU7m1uIgA.png"
  },
  {
    title: "Strategic Considerations for AI Adoption in Construction: A Case Study of Mercury Construction Ltd",
    excerpt: "Strategic considerations for AI integration within the Construction and Infrastructure sectors.",
    strategicValue: "AI Adoption Frameworks",
    date: "Feb 2024",
    readTime: "10 min",
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Knowledge Hub</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Insights & Thought Leadership
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Bridging the gap between emerging AI technologies, project governance, and practical business execution.
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
                {/* Strategic Value & Read Time Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md">
                    {article.strategicValue}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            View All Strategic Insights
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InsightsStrategy;
