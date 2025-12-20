import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  link: string;
  coverImage?: string;
}

const articles: Article[] = [
  {
    title: "Navigating IT Governance in Healthcare: Lessons from the NHS",
    excerpt: "Exploring the intersection of clinical operations and digital transformation in complex healthcare environments.",
    category: "IT Governance",
    readTime: "8 min read",
    link: "#",
    coverImage: undefined
  },
  {
    title: "Agile Delivery in Regulated Industries: A Practical Framework",
    excerpt: "How to maintain iterative velocity while meeting stringent compliance and governance requirements.",
    category: "Project Methodology",
    readTime: "6 min read",
    link: "#",
    coverImage: undefined
  },
  {
    title: "The Technical PM's Guide to Stakeholder Alignment",
    excerpt: "Translating complex technical requirements into business language that drives executive buy-in.",
    category: "Team Leadership",
    readTime: "5 min read",
    link: "#",
    coverImage: undefined
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
          <p className="text-muted-foreground text-lg max-w-2xl">
            I write about Project Methodology, Team Leadership, and IT Governance 
            on Medium to share strategic insights with the community.
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
              {/* Cover Image Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-accent/10 via-accent/5 to-muted flex items-center justify-center border-b border-border">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-accent/50"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category Badge */}
                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md mb-3">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
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
      </motion.div>
    </section>
  );
};

export default InsightsStrategy;
