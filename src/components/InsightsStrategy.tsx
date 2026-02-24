import { motion } from "framer-motion";
import { ExternalLink, Clock, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  timestamp: number;
  link: string;
  coverImage: string;
  source: "medium" | "substack";
}

const fallbackArticles: Article[] = [
  {
    title: "The Unstoppable Stream: How Netflix's $82.7B Power Play Just Rewrote Hollywood History",
    excerpt: "Analysis of Netflix's $82.7B infrastructure play and its impact on industry economics.",
    date: new Date("2024-12-01").toISOString(),
    timestamp: new Date("2024-12-01").getTime(),
    link: "https://emmanuelchiefson.medium.com/the-unstoppable-stream-how-netflixs-82-7b-power-play-just-rewrote-hollywood-history-e48881f029d7",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*We9FG08SCEi7V1_knS4arg.png",
    source: "medium",
  },
  {
    title: "Siemens Mobility Project Management Simulation: A Reflective Report on KPI Development",
    excerpt: "Reflective insights from Siemens Mobility Project Management simulations, focusing on performance metrics and risk mitigation.",
    date: new Date("2024-08-01").toISOString(),
    timestamp: new Date("2024-08-01").getTime(),
    link: "https://emmanuelchiefson.medium.com/title-siemens-mobility-project-management-simulation-a-reflective-report-on-kpi-development-494f5f2cb158",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*peQ5jxDQT6QmNEU7m1uIgA.png",
    source: "medium",
  },
  {
    title: "Strategic Considerations for AI Adoption in Construction: A Case Study of Mercury Construction Ltd",
    excerpt: "Strategic considerations for AI integration within the Construction and Infrastructure sectors.",
    date: new Date("2024-02-01").toISOString(),
    timestamp: new Date("2024-02-01").getTime(),
    link: "https://emmanuelchiefson.medium.com/strategic-considerations-for-ai-adoption-in-construction-a-case-study-of-mercury-construction-ltd-f8b3ac223613",
    coverImage: "https://miro.medium.com/v2/resize:fill:320:214/1*Rn_B4_qu5TQa4fNSSu3MTw.jpeg",
    source: "medium",
  },
];

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json";
const MEDIUM_FEED = "https://medium.com/feed/@emmanuelchiefson";
const SUBSTACK_FEED = "https://emmanuelchiefson.substack.com/feed";

interface RssItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  thumbnail: string;
  enclosure?: { link?: string };
  content?: string;
}

function extractImage(item: RssItem): string {
  if (item.thumbnail) return item.thumbnail;
  if (item.enclosure?.link) return item.enclosure.link;
  // Try extracting from content/description HTML
  const html = item.content || item.description || "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : "";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

async function fetchFeed(feedUrl: string, source: "medium" | "substack"): Promise<Article[]> {
  try {
    const res = await fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(feedUrl)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.status !== "ok" || !data.items) return [];

    return data.items.map((item: RssItem) => {
      const pubDate = new Date(item.pubDate);
      const excerpt = stripHtml(item.description || "").substring(0, 200);
      return {
        title: item.title,
        excerpt: excerpt + (excerpt.length >= 200 ? "..." : ""),
        date: pubDate.toISOString(),
        timestamp: pubDate.getTime(),
        link: item.link,
        coverImage: extractImage(item),
        source,
      };
    });
  } catch (err) {
    console.warn(`Failed to fetch ${source} feed:`, err);
    return [];
  }
}

function deduplicateArticles(articles: Article[]): Article[] {
  const seen = new Map<string, Article>();
  for (const article of articles) {
    const key = article.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (seen.has(key)) {
      const existing = seen.get(key)!;
      if (article.timestamp < existing.timestamp) {
        seen.set(key, article);
      }
    } else {
      seen.set(key, article);
    }
  }
  return Array.from(seen.values());
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function estimateReadTime(excerpt: string): string {
  const words = excerpt.split(/\s+/).length;
  return `${Math.max(3, Math.ceil(words / 40))} min`;
}

const InsightsStrategy = () => {
  const [articles, setArticles] = useState<Article[]>(fallbackArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [mediumArticles, substackArticles] = await Promise.all([
        fetchFeed(MEDIUM_FEED, "medium"),
        fetchFeed(SUBSTACK_FEED, "substack"),
      ]);

      const all = [...mediumArticles, ...substackArticles];
      if (all.length > 0) {
        const deduped = deduplicateArticles(all);
        deduped.sort((a, b) => b.timestamp - a.timestamp);
        setArticles(deduped);
      }
      setLoading(false);
    };
    load();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-label="Insights and Strategy Section">
      <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
        <motion.div className="mb-12" variants={cardVariants}>
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Knowledge Hub</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Insights & Thought Leadership</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Bridging the gap between emerging AI technologies, project governance, and practical business execution.
          </p>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-accent" />
            <span className="ml-2 text-muted-foreground text-sm">Loading latest articles...</span>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {articles.slice(0, 6).map((article) => (
            <motion.article key={article.link} className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300" variants={cardVariants} whileHover={{ y: -4 }}>
              <div className="aspect-[16/9] bg-muted overflow-hidden border-b border-border">
                {article.coverImage ? (
                  <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm capitalize">{article.source}</div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md capitalize">{article.source}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                    <Clock className="w-3 h-3" />
                    {estimateReadTime(article.excerpt)}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{formatDate(article.date)}</span>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
                    Read Article
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div className="mt-10 flex justify-center gap-4 flex-wrap" variants={cardVariants}>
          <a href="https://medium.com/@emmanuelchiefson" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
            View Medium <ExternalLink className="w-4 h-4" />
          </a>
          <a href="https://substack.com/@emmanuelchiefson" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-muted transition-all">
            View Substack <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InsightsStrategy;
