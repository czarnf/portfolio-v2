import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Loader2 } from "lucide-react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["medium-posts"],
    queryFn: async () => {
      // Using a RSS to JSON API to fetch Medium posts
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emmanuelchiefson`
      );
      const data = await response.json();
      return data.items as MediumPost[];
    },
  });

  if (error) {
    console.error("Error fetching blog posts:", error);
  }

  return (
    <section id="blog" className="py-20 bg-muted/30 dark:bg-gray-900/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">
            Latest Blog Posts
          </h2>
          <p className="text-secondary dark:text-gray-400">
            Thoughts, insights, and experiences I share on Medium
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
            {posts?.slice(0, 3).map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent dark:hover:border-accent">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary dark:text-gray-400 line-clamp-3">
                      {post.description.replace(/<[^>]*>/g, "")}
                    </p>
                    <div className="mt-4 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowUpRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
