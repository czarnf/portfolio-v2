const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface Article {
  title: string;
  excerpt: string;
  date: string;
  timestamp: number;
  link: string;
  coverImage: string;
  source: 'medium' | 'substack';
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num)))
    .replace(/<[^>]*>/g, '');
}

function extractImageFromContent(content: string): string | null {
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
  return imgMatch ? imgMatch[1] : null;
}

function parseRSSItems(xml: string, source: 'medium' | 'substack'): Article[] {
  const items: Article[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const titleMatch = itemXml.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
                       itemXml.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const descMatch = itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
                      itemXml.match(/<description>([\s\S]*?)<\/description>/);
    const contentMatch = itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);

    if (!titleMatch || !linkMatch) continue;

    const title = decodeHtmlEntities(titleMatch[1].trim());
    const link = linkMatch[1].trim();
    const pubDate = pubDateMatch ? new Date(pubDateMatch[1].trim()) : new Date();
    const description = descMatch ? decodeHtmlEntities(descMatch[1].trim()) : '';
    const content = contentMatch ? contentMatch[1] : (descMatch ? descMatch[1] : '');

    // Extract cover image
    let coverImage = extractImageFromContent(content);
    if (!coverImage) {
      const mediaMatch = itemXml.match(/<media:content[^>]+url=["']([^"']+)["']/);
      const enclosureMatch = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["']/);
      coverImage = mediaMatch?.[1] || enclosureMatch?.[1] || null;
    }

    const excerpt = description.substring(0, 200) + (description.length > 200 ? '...' : '');

    items.push({
      title,
      excerpt,
      date: pubDate.toISOString(),
      timestamp: pubDate.getTime(),
      link,
      coverImage: coverImage || '',
      source,
    });
  }

  return items;
}

function deduplicateArticles(articles: Article[]): Article[] {
  const seen = new Map<string, Article>();

  for (const article of articles) {
    // Normalize title for comparison
    const normalizedTitle = article.title.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (seen.has(normalizedTitle)) {
      const existing = seen.get(normalizedTitle)!;
      // Keep the one posted first (earliest timestamp)
      if (article.timestamp < existing.timestamp) {
        seen.set(normalizedTitle, article);
      }
    } else {
      seen.set(normalizedTitle, article);
    }
  }

  return Array.from(seen.values());
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MEDIUM_FEED = 'https://medium.com/feed/@emmanuelchiefson';
    const SUBSTACK_FEED = 'https://emmanuelchiefson.substack.com/feed';

    // Fetch both feeds in parallel
    const [mediumRes, substackRes] = await Promise.allSettled([
      fetch(MEDIUM_FEED, { headers: { 'User-Agent': 'Mozilla/5.0' } }),
      fetch(SUBSTACK_FEED, { headers: { 'User-Agent': 'Mozilla/5.0' } }),
    ]);

    let allArticles: Article[] = [];

    if (mediumRes.status === 'fulfilled' && mediumRes.value.ok) {
      const xml = await mediumRes.value.text();
      const articles = parseRSSItems(xml, 'medium');
      allArticles.push(...articles);
      console.log(`Fetched ${articles.length} Medium articles`);
    } else {
      console.warn('Failed to fetch Medium feed:', mediumRes.status === 'rejected' ? mediumRes.reason : 'HTTP error');
    }

    if (substackRes.status === 'fulfilled' && substackRes.value.ok) {
      const xml = await substackRes.value.text();
      const articles = parseRSSItems(xml, 'substack');
      allArticles.push(...articles);
      console.log(`Fetched ${articles.length} Substack articles`);
    } else {
      console.warn('Failed to fetch Substack feed:', substackRes.status === 'rejected' ? substackRes.reason : 'HTTP error');
    }

    // Deduplicate and sort newest first
    const deduplicated = deduplicateArticles(allArticles);
    deduplicated.sort((a, b) => b.timestamp - a.timestamp);

    return new Response(
      JSON.stringify({ success: true, articles: deduplicated }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching articles:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch articles' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
